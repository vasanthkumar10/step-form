import React, { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import PageZero from "./components/forms/PageZero";
import PageOne from "./components/forms/PageOne";
import PageTwo from "./components/forms/PageTwo";
import PageThree from "./components/forms/PageThree";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [step, setStep] = useState(0);
  const progressPositions = [0, 1, 2, 3];
  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");

  const getFormPage = () => {
    switch (step) {
      case 1:
        return <PageOne setStep={setStep} />;
      case 2:
        return <PageTwo setStep={setStep} />;
      case 3:
        return (
          <PageThree
            fullName={fullName}
            displayName={displayName}
            setStep={setStep}
          />
        );
      default:
        return (
          <PageZero
            fullName={fullName}
            setFullName={setFullName}
            displayName={displayName}
            setDisplayName={setDisplayName}
            setStep={setStep}
          />
        );
    }
  };

  return (
    <div className="App">
      <Title />
      <ProgressBar step={step} progressPositions={progressPositions} />
      {getFormPage()}
    </div>
  );
}

export default App;
