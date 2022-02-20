import React, { useState } from "react";
import Header from "../Header";
import UserCard from "../UserCard";
import SubmitButton from "../SubmitButton";
import "../../css/pageTwo.css";
import groupLogo from "../../icons/group.svg";
import userLogo from "../../icons/user.svg";
import activeGroupLogo from "../../icons/groupColored.svg";
import activeUserLogo from "../../icons/userColored.svg";

function PageTwo({ setStep }) {
  const [isUserSelected, setIsUserSelected] = useState(true);
  const [isGroupSelected, setIsGroupSelected] = useState(false);

  const getActive = (who) => {
    if (who === "user") {
      setIsUserSelected(true);
      setIsGroupSelected(false);
      return;
    }
    setIsUserSelected(false);
    setIsGroupSelected(true);
  };

  return (
    <>
      <Header
        title={"How are you palnning to use Eden?"}
        subTitle={"We'll streamline your setup experience accordingly"}
      />
      <div className="user-wrapper">
        <UserCard
          action={() => getActive("user")}
          isActive={isUserSelected}
          icon={isUserSelected ? activeUserLogo : userLogo}
          title={"For myself"}
          content={"Write better. Think more clearly. Stay organized."}
        />
        <UserCard
          action={() => getActive("group")}
          isActive={isGroupSelected}
          icon={isGroupSelected ? activeGroupLogo : groupLogo}
          title={"With my team"}
          content={"Wikis, docs, tasks & projects, all in one place"}
        />
      </div>
      <SubmitButton action={() => setStep(3)} content={"Create Workspace"} />
    </>
  );
}

export default PageTwo;
