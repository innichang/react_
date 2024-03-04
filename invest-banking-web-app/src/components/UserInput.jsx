import { useState } from "react";

export default function UserInput({ userInput, onChange }) {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={() =>
              onChange("initialInvestment", event.target.value)
            }
          ></input>
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={() =>
              onChange("annualInvestment", event.target.value)
            }
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={() => onChange("expectedReturn", event.target.value)}
          ></input>
        </p>
        <p>
          <label>DURATION (Years)</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={() => onChange("duration", event.target.value)}
          ></input>
        </p>
      </div>
    </section>
  );
}
