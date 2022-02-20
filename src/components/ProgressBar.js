import React from "react";
import "../css/progressBar.css";

import { Steps } from "antd";

const { Step } = Steps;

function ProgressBar({ step, progressPositions }) {
  const getIcon = (position) => {
    return (
      <div className={`progress-icon ${step >= position ? "active" : ""}`}>
        {position + 1}
      </div>
    );
  };

  return (
    <div className="progress-wrapper">
      <Steps current={step} responsive={false} className="progressbar">
        {progressPositions.map((position) => (
          <Step key={position} icon={getIcon(position)} className="step" />
        ))}
      </Steps>
    </div>
  );
}

export default ProgressBar;
