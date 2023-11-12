import reactLogo from "../assets/react-logo.svg";
import Button from '@mui/material/Button';

export default function () {
  return (
    <>
      <div className="app-link">
        <span>You are signed out of {process.env.GADGET_PUBLIC_APP_SLUG} &nbsp;</span>
      </div>
      <div>
        <p className="description">Build your app&apos;s signed out area</p>
        <a href="/edit/files/frontend/routes/index.jsx" target="_blank" rel="noreferrer" style={{ fontWeight: 500 }}>
          frontend/routes/index.jsx
        </a>
      </div>
    </>
  );
}
