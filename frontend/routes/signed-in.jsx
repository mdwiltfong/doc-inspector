import { useState } from "react";
import { useUser, useSignOut, useFetch } from "@gadgetinc/react";
import reactLogo from "../assets/react-logo.svg";
import { api } from "../api";
import userIcon from "../assets/default-user-icon.svg";
import { Link } from "react-router-dom";

export default function () {
  const user = useUser(api);
  const signOut = useSignOut();

  const [message, setMessage] = useState("");
  const [{ data: chatResponse, fetching: fetchingChat, streaming: streamingResponse }, sendMessage] = useFetch("/chat", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    stream: "string",
    onStreamComplete: (response) => console.log("stream complete: ", response)
  });

  const submitChat = () => {
    void sendMessage({
      body: JSON.stringify({
        message
      })
    })
  }

  return user ? (
    <>
      <div className="app-link">
        <img src={reactLogo} className="app-logo" alt="logo" />
        <span>You are now signed into {process.env.GADGET_PUBLIC_APP_SLUG} </span>
      </div>
      <div>
        <p className="description" style={{ width: "100%" }}>
          Start building your app&apos;s signed in area
        </p>
        <a href="/edit/files/frontend/routes/signed-in.jsx" target="_blank" rel="noreferrer" style={{ fontWeight: 500 }}>
          frontend/routes/signed-in.jsx
        </a>
      </div>
      <div className="card-stack">
        <div className="card user-card">
          <div className="card-content">
            <img className="icon" src={user.googleImageUrl ?? userIcon}/>
            <div className="userData">
              <p>id: {user.id}</p>
              <p>
                name: {user.firstName} {user.lastName}
              </p>
              <p>
                email: <a href={`mailto:${user.email}`}>{user.email}</a>
              </p>
              <p>created: {user.createdAt.toString()}</p>
            </div>
          </div>
          <div className="sm-description">This data is fetched from the user model</div>
        </div>
        <div className="card chat-card">
          <p className="description">
            Your app has a connection to OpenAI and can chat with GPT.
          </p>
          <div style={{ display: "flex"}}>
            <input
              style={{ display: "flex", flex: 1 }}
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyUp={(event) => {
                if (event.key === "Enter") {
                  submitChat();
                }
              }}
            />
            <button onClick={submitChat} disabled={fetchingChat || streamingResponse}>
              Say hello
            </button>
          </div>
          {!fetchingChat && chatResponse && (
            <p className="description">
              {chatResponse}
            </p>
          )}
        </div>
        <div className="flex-vertical gap-4px">
          <strong>Actions:</strong>
          <Link to="/change-password">Change password</Link>
          <a onClick={signOut}>
            Sign Out
          </a>
        </div>
      </div>
    </>
  ) : null;
}
