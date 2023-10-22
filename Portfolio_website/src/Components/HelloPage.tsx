import React, { useState } from "react";

const StartingPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSkip = () => {
    console.log("User skipped");
    // Navigate to the next page or perform any other action
  };

  const handleSubmit = () => {
    console.log("Email submitted:", email);
    // Store the email or perform any other action
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
        <button className="btn btn-primary mr-2" onClick={handleSubmit}>
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
