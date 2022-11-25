import React from "react";
import Header from "../Header";
import SubmitButton from "../SubmitButton";
import { CheckCircleFilled } from "@ant-design/icons";
import "../../css/pageThree.css";

function PageThree({ setStep, fullName, displayName }) {
  return (
    <>
      <CheckCircleFilled className="success-icon" />
      <Header
        title={"Congratulations, Eren!"}
        subTitle={
          "You have completed onboarding, you can start using the Eden!"
        }
      />
      <SubmitButton
        action={() => {
          console.log(fullName, displayName);
        }}
        content={"Launch Eden"}
      />
    </>
  );
}

export default PageThree;
