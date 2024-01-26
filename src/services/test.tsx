// const urls = await retrieveGoogleURLsforSearchTerm('software engineer jobs');
// const jobDetailsPromises = urls.map(url => processJobListing(url));
// const jobDetails = await Promise.all(jobDetailsPromises);

import { db } from "@/server/db";
import { googleUrls } from "@/server/db/schema";
import { JobListing } from "lib/types";
import OpenAI from "openai";
import type {
  ChatCompletionFunctionMessageParam,
  ChatCompletionMessage,
  ChatCompletionMessageParam,
  ChatCompletionTool,
  ChatCompletionUserMessageParam,
} from "openai/resources/chat/completions.mjs";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

type FunctionCallType = (location: string, unit: string) => string;
type AvailableFunctionsType = Record<string, FunctionCallType>;
type FunctionArguments = {
  location: string;
  unit: string;
};

export const tools: ChatCompletionTool[] = [
  {
    type: "function",
    function: {
      name: "get_current_weather",
      description: "Get the current weather in a given location",
      parameters: {
        type: "object",
        properties: {
          location: {
            type: "string",
            description: "The city and state, e.g. San Francisco, CA",
          },
          unit: { type: "string", enum: ["celsius", "fahrenheit"] },
        },
        required: ["location"],
      },
    },
  },
];

function getCurrentWeather(location: string, unit = "fahrenheit"): string {
  if (location.toLowerCase().includes("tokyo")) {
    return JSON.stringify({
      location: "Tokyo",
      temperature: "10",
      unit: "celsius",
    });
  } else if (location.toLowerCase().includes("san francisco")) {
    return JSON.stringify({
      location: "San Francisco",
      temperature: "72",
      unit: "fahrenheit",
    });
  } else if (location.toLowerCase().includes("paris")) {
    return JSON.stringify({
      location: "Paris",
      temperature: "22",
      unit: "fahrenheit",
    });
  } else {
    return JSON.stringify({ location, temperature: "unknown" });
  }
}

export async function callChatGPT() {
  const messages: ChatCompletionMessageParam[] = [
    {
      role: "system",
      content: "you give very short answers",
    },
    {
      role: "user",
      content: "What's the weather like in Los Angeles, Tokyo, and Paris?",
    },
  ];

  const tools: ChatCompletionTool[] = [
    {
      type: "function",
      function: {
        name: "get_current_weather",
        description: "Get the current weather in a given location",
        parameters: {
          type: "object",
          properties: {
            location: {
              type: "string",
              description: "The city and state, e.g. San Francisco, CA",
            },
            unit: { type: "string", enum: ["celsius", "fahrenheit"] },
          },
          required: ["location"],
        },
      },
    },
  ];

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-1106",
    messages: messages,

    tools: tools,
    tool_choice: "auto",
  });

  const responseMessage = response.choices[0]?.message;

  const toolCalls = responseMessage?.tool_calls;
  const availableFunctions: AvailableFunctionsType = {
    get_current_weather: getCurrentWeather,
  };
  if (toolCalls) {
    messages.push({
      tool_calls: toolCalls,
      role: "assistant",
    });

    for (const toolCall of toolCalls) {
      console.log(toolCall);
      // only one function in this example, but you can have multiple
      const functionName = toolCall.function.name;
      const functionToCall = availableFunctions[functionName];
      const functionArgs = JSON.parse(
        toolCall.function.arguments,
      ) as FunctionArguments;
      if (functionToCall) {
        const functionResponse = functionToCall(
          functionArgs.location,
          functionArgs.unit,
        );

        messages.push({
          tool_call_id: toolCall.id,
          role: "tool",
          content: functionResponse,
        });
      }
    }

    const secondResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",

      messages: messages,
    }); // get a new response from the model where it can see the function response
    console.log(secondResponse.choices[0]?.message.content);
  }
}
