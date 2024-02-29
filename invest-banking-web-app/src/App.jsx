import { useState } from "react"
import Header from "./components/Header"
import Result from "./components/Result"
import UserInput from "./components/UserInput"

const INITIAL_INPUT_VALUES = {
  initialInvestment: null,
  annualInvestment: null,
  expectedReturn: null,
  duration: null
}

function App() {
  const [inputValues, setInputValues] = useState(INITIAL_INPUT_VALUES);

  function handleInputValues(newValues) {
    setInputValues(newValues);
  }


  return (
    <main>
      <Header />
      <UserInput onChangeValue={handleInputValues}/>
      <Result />
    </main>
  )
}

export default App
