import { retrieveGoogleURLsforSearchTerm } from "@/services/scrapeJobs";
import { auth } from "@clerk/nextjs";

export async function GET(req: Request, res: Response) {
  const { userId, sessionId } = auth();

  if (!sessionId) {
    return Response.json({ id: null }, { status: 401 });
  }

  try {
    const data = await retrieveGoogleURLsforSearchTerm("software engineer");

    return Response.json(data);
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Error fetching jobs" });
  }
}
