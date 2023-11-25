import OpenAI from "openai";
import dotenv from "dotenv";
const dotEnv = dotenv.config();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const OPENAI_BASE_URL = "https://api.openai.com/v1/assistants/";
export class OpenAIAssistant {
  #default_prompt =
    "You are a helpful, friendly assistant. With the document provided, you will help humans answer their questions about this document. You will not stray from the information in this document. If you do not know the answer, you will say so. If there is a request that is outside the context of this document you will inform the human that you can not answer the question. The only exception to this rule, is that the human may ask you fill in a template with some of the information from the other document. You will not stray from the format of this template. If you can't find the information for the template, you will leave the area of the template blank. ";
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
    this.#openAIId = openAIId;
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
      console.log(assistant);
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
      console.log("File Stream", fileStream);
      const file = await openai.files.create({
        purpose: "assistants",
        file: fileStream,
      });
      return await openai.beta.assistants.files.create(this.openAIId, {
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
  async getMessages() {
    return await openai.beta.threads.messages.list(this.#external_thread_id);
  }
  get external_thread_id() {
    return this.#external_thread_id;
  }
}

export class Run {
  #external_id;
  #external_thread_id;
  #external_assistant_id;
  #status;
  constructor(external_id, external_thread_id, external_assistant_id, status) {
    this.#external_id = external_id;
    this.#external_thread_id = external_thread_id;
    this.#external_assistant_id = external_assistant_id;
    this.#status = status;
  }
  static async createRun(assistantId, threadId) {
    console.log("Run.createRun");
    console.log("assistant id", assistantId);
    console.log("thread id", threadId);
    const newRun = await openai.beta.threads.runs.create(threadId, {
      assistant_id: assistantId,
    });
    return new Run(
      newRun.id,
      newRun.thread_id,
      newRun.assistant_id,
      newRun.status
    );
  }
  static async retrieveRun(threadId, runId) {
    const retrievedThread = await openai.beta.threads.runs.retrieve(
      threadId,
      runId
    );
    return new Run(
      retrievedThread.id,
      retrievedThread.thread_id,
      retrievedThread.assistant_id,
      retrievedThread.status
    );
  }
  get external_id() {
    return this.#external_id;
  }
  get external_thread_id() {
    return this.#external_thread_id;
  }
  get external_assistant_id() {
    return this.#external_assistant_id;
  }
  get status() {
    return this.#status;
  }
}
