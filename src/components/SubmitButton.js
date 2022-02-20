import React from "react";
import { Button } from "antd";
import "../css/submitButton.css";

function SubmitButton({ content, action }) {
  return (
    <Button onClick={action} size="large" className="button" type="primary">
      {content}
    </Button>
  );
}

export default SubmitButton;
