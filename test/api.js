// make sure to replace "@gadget-client/unit-test-sample" with your Gadget API client!
import { Client } from "@gadget-client/doc-inspector";

// an API client created using the GADGET_TEST_API_KEY environment variable
export const api = new Client({
  environment: "Development",
  authenticationMode: {
    apiKey: process.env["GADGET_TEST_API_KEY"],
  },
});
