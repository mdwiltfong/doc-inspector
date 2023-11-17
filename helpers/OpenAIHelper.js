import OpenAI from "openai";
import dotenv from "dotenv";
const dotEnv = dotenv.config();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const OPENAI_BASE_URL = "https://api.openai.com/v1/assistants/";
export class OpenAIAssistant {
  #default_prompt =
    "You are a helpful, friendly assistant. With the document provided, you will help humans answer their questions about this document. You will not stray from the information in this document. If you do not know the answer, you will say so. If there is a request that is outside the context of this document you will inform the human that you can not answer the question.";
  #assistant_name = "DocInspector";
  #tools = [{ type: "retrieval" }];
  #model;
  #thread;
  #instructions;
  constructor(model = "gpt-3.5-turbo-1106", instructions = "") {
    this.#model = model;
    this.#instructions = instructions;
  }
  async createAssistant() {
    try {
      return await openai.beta.assistants.create({
        name: this.#assistant_name,
        instructions: this.#instructions,
        tools: [{ type: "retrieval" }],
        model: this.#model,
      });
    } catch (error) {
      console.log(error);
    }
  }
  static async createThread() {
    return await openai.beta.threads.create();
  }
  async addMessageToThread(role, content) {
    return await openai.beta.threads.messages.create({
      thread: this.#thread.id,
      role: "user",
      content: content,
    });
  }
  async runThread(instructions = "") {
    return await openai.beta.threads.runs.create(this.#thread.id, instructions);
  }
  async uploadFile(fileName) {
    return await openai.files.create({
      purpose: "answers",
      file: file,
    });
  }
  get tools() {
    return this.#tools;
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
  get external_thread_id() {
    return this.#external_thread_id;
  }
}
