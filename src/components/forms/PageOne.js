import React from "react";
import Header from "../Header";
import InputField from "../InputField";
import SubmitButton from "../SubmitButton";

function PageOne({ setStep }) {
  return (
    <>
      <Header
        title={"Let's set up a home for all your work"}
        subTitle={"You can always create aother workspace later."}
      />
      <InputField label={"Workspace Name"} placeholder={"Eden"} />
      <InputField
        label={"Workspace URL"}
        labelOption={"(optional)"}
        addonBefore={"www.eden.com/"}
        placeholder={"Example"}
      />
      <SubmitButton action={() => setStep(2)} content={"Create Workspace"} />
    </>
  );
}

export default PageOne;
