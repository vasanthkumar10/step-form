import React from "react";
import Header from "../Header";
import InputField from "../InputField";
import SubmitButton from "../SubmitButton";

function PageZero({
  setStep,
  fullName,
  setFullName,
  displayName,
  setDisplayName,
}) {
  return (
    <>
      <Header
        title={"Welcome! First things first..."}
        subTitle={"You can always change them later."}
      />
      <InputField
        value={fullName}
        action={setFullName}
        label={"Full Name"}
        placeholder={"Steve Jobs"}
      />
      <InputField
        value={displayName}
        action={setDisplayName}
        label={"Display Name"}
        placeholder={"Steve"}
      />
      <SubmitButton action={() => setStep(1)} content={"Create Workspace"} />
    </>
  );
}

export default PageZero;
