import OpenAI from "openai";
import dotenv from "dotenv";
const dotEnv = dotenv.config();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const OPENAI_BASE_URL = "https://api.openai.com/v1/assistants/";
export class OpenAIAssistant {
  #default_prompt =
    "You are a helpful, friendly assistant. With the document provided, you will help humans answer their questions about this document. You will not stray from the information in this document. If you do not know the answer, you will say so. If there is a request that is outside the context of this document you will inform the human that you can not answer the question.";
  #assistant_name;
  #tools = [{ type: "retrieval" }];
  #model;
  #thread;
  #instructions;
  #gadgetId;
  #openAIId;
  constructor(model = "gpt-3.5-turbo-1106", instructions = "", openAIId = "") {
    this.#model = model;
    this.#instructions = instructions;
  }
  static async createAssistant(
    assistantName = "DocInspector",
    instructions = "",
    model = "gpt-3.5-turbo-1106"
  ) {
    try {
      const newAssistant = await openai.beta.assistants.create({
        name: assistantName,
        instructions: instructions,
        tools: [{ type: "retrieval" }],
        model: model,
      });
      return new OpenAIAssistant(model, instructions, newAssistant.id);
    } catch (error) {
      console.log(error);
    }
  }
  static async retrieveAssistant(assistantId) {
    try {
      const assistant = await openai.beta.assistants.retrieve(assistantId);
      return new OpenAIAssistant(
        assistant.model,
        assistant.instructions,
        assistant.id
      );
    } catch (error) {
      console.log(error);
    }
  }

  async uploadFile(fileStream) {
    try {
      const file = await openai.files.create({
        purpose: "assistants",
        file: fileStream,
      });
      return await openai.beta.assistants.files.create(this.#openAIId, {
        file_id: file.id,
      });
    } catch (error) {
      console.log(error);
    }
  }
  get tools() {
    return this.#tools;
  }
  get openAIId() {
    return this.#openAIId;
  }
  get gadgetId() {
    return this.#gadgetId;
  }
}

export class Thread {
  #external_thread_id;
  #created_at;
  constructor(external_thread_id, created_at) {
    this.#external_thread_id = external_thread_id;
    this.#created_at = created_at;
  }
  static async createThread() {
    const newThread = await openai.beta.threads.create();
    return new Thread(newThread.id, newThread.created_at);
  }
  static async retrieveThread(threadId) {
    return await openai.beta.threads.retrieve(threadId);
  }
  static async addMessageToThread(threadId, content) {
    return await openai.beta.threads.messages.create(threadId, {
      role: "user",
      content,
    });
  }
  get external_thread_id() {
    return this.#external_thread_id;
  }
}
