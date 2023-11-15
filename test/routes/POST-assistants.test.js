import { describe, expect, test } from "vitest";
import { api } from "../api.js";

// use a test API client to make a real HTTP request to the route by calling api.fetch()
describe("test POST-create Assistant Route", () => {
  test("should return 200", async () => {
    const response = await api.fetch("/assistants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "DocInspector",
        model: "gpt-3.5-turbo-1106",
        instructions:
          "You are a helpful, friendly assistant. With the document provided, you will help humans answer their questions about this document. You will not stray from the information in this document. If you do not know the answer, you will say so. If there is a request that is outside the context of this document you will inform the human that you can not answer the question.",
      }),
    });

    expect(response.status).toBe(200);
  });
});
