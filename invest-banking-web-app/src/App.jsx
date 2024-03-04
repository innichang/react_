import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

const INITIAL_INPUT_VALUES = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(INITIAL_INPUT_VALUES);

  const isInputValid = userInput.duration >= 1

  function handleInputValuechange(inputIdentifier, newValue) {
    console.log(
      "inputIdentifier: ",
      inputIdentifier,
      " ",
      "newValue: ",
      newValue
    );
    setUserInput((preUserInput) => {
      return {
        ...preUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <main>
      <Header />
      <UserInput
        userInput={userInput}
        onChange={handleInputValuechange}
      />
      {!isInputValid && <p className="center">Please enter a duration greater than zero.</p>}
      {isInputValid && <Result input={userInput} />}
      
    </main>
  );
}

export default App;
