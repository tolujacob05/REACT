import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />

      {/* <Date /> */}
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = function () {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleNext = function () {
    if (step < 3) setStep((s) => s + 1);
  };

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Steps {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/*
function Date() {
  const [counter, setCounter] = useState(0);

  const date = new Date("July 25 2023");
  date.setDate(date.getDate() + counter);

  const handleCount = function () {
    setCounter((c) => c + 5);
  };

  const handleCounter = function () {
    setCounter((c) => c - 5);
  };
  return (
    <>
      <div>
        <button onClick={handleCounter}>-</button>
        <span>Count: {counter}</span>
        <button onClick={handleCount}>+</button>
      </div>

      <p>
        <span>{counter === 0 ? "Today is" : ""}</span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}
*/
