import React, { useState } from "react";

interface StartingPageProps {
  onSkipOrSubmit: () => void;
}

const StartingPage: React.FC<StartingPageProps> = ({ onSkipOrSubmit }) => {
  const [email, setEmail] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSkip = () => {
    console.log("User skipped");
    onSkipOrSubmit();
  };

  const handleSubmit = () => {
    console.log("Email submitted:", email);
    onSkipOrSubmit();
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "100vh", backgroundColor: "black", color: "white" }}
    >
      <h1>Welcome User</h1>
      <div className="mt-4">
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          style={{ maxWidth: "300px" }}
        />
      </div>
      <div className="mt-4">
        <button className="btn btn-primary me-2" onClick={handleSubmit}>
          Submit
        </button>
        <button className="btn btn-secondary" onClick={handleSkip}>
          Skip
        </button>
      </div>
    </div>
  );
};

export default StartingPage;
