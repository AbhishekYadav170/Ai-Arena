import { tavily } from "@tavily/core";
import config from "../config/config.js";

const tvly = tavily({
  apiKey: config.TAVILY_API_KEY,
});

export async function searchWeb(query: string): Promise<string> {
  try {
    const response = await tvly.search(query, {
      topic: "general",
      searchDepth: "advanced",
      maxResults: 5,
    });

    return response.results
      .map(
        (item: any) => `
Title: ${item.title}

Content: ${item.content}

URL: ${item.url}
`
      )
      .join("\n\n");
  } catch (err) {
    console.error("Tavily Error:", err);
    return "";
  }
}