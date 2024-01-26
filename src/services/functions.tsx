import type { ChatCompletionTool } from "openai/resources/index.mjs";

export const tools: ChatCompletionTool[] = [
  {
    type: "function",
    function: {
      name: "getJobPost",
      description: "Get the job content json data from the url.",
      parameters: {
        type: "object",
        properties: {
          aboutCompany: {
            type: "string",
            description:
              "What does the company do? Is there anything positive so a future employee will be exicited to join company?",
          },
          responsibilities: {
            type: "string",
            description: "Describe the role and responsibility. ",
          },
          techStack: {
            type: "array",
            description:
              "Their tech stack (programming languages, software, tools required). If none, output empty string.",
            items: {
              type: "string",
            },
          },

          salaryRange: {
            type: "string",
            description:
              "Extract the salary range from job description and preserve the currency symbol ('$', '€', '£', '¥', '¥', '₹', etc.). Keep it brief and only give the range.",
          },
          salaryHigh: {
            type: "number",
            description:
              "If salary range is provided, output the high end of the range. If just a number is provided, output that number.",
          },
          jobType: {
            type: "string",
            description: "What is the job type?",
            enum: [
              "Full Time",
              "Part Time",
              "Contract",
              "Internship",
              "Temporary",
            ],
          },
          role: {
            type: "string",
            enum: [
              "Engineering",
              "Software Engineering",
              "Manager",
              "Developer",
            ],
          },
          minYearsOfExperience: {
            type: "number",
            description: "What's the min years of experience required?",
          },
          industry: {
            type: "string",
            description: "What industry does the company operate in?",
            enum: [
              "Blockchain",
              "Technology",
              "Healthcare",
              "Finance",
              "Retail",
              "Automotive",
              "Energy",
              "Agriculture",
              "Telecommunications",
              "Real Estate",
              "Manufacturing",
              "Education",
              "Media and Entertainment",
              "Hospitality",
              "Construction",
              "Transportation and Logistics",
              "Consumer Electronics",
              "Fashion",
              "Aerospace",
            ],
          },
        },
        required: [
          "aboutCompany",
          "responsibilities",
          "techStack",
          "salaryRange",
          "salaryHigh",
          "jobType",
          "role",
          "minYearsOfExperience",
          "industry",
          "urlId",
        ],
      },
    },
  },
];
