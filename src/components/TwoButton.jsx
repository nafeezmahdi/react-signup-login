/* eslint-disable react/prop-types */
import Button from "./Button";

export default function TwoButton({ text, change }) {
  return (
    <div className="two-button">
      <Button text={text} btnText="Sign Up" />
      <Button text={text} change={change} btnText="Login" />
    </div>
  );
}
