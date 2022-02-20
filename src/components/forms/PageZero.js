import React from "react";
import Header from "../Header";
import InputField from "../InputField";
import SubmitButton from "../SubmitButton";

function PageZero({ setStep }) {
  return (
    <>
      <Header
        title={"Welcome! First things first..."}
        subTitle={"You can always change them later."}
      />
      <InputField label={"Full Name"} placeholder={"Steve Jobs"} />
      <InputField label={"Display Name"} placeholder={"Steve"} />
      <SubmitButton action={() => setStep(1)} content={"Create Workspace"} />
    </>
  );
}

export default PageZero;
