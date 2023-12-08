import Title from "../Title";
import Input from "../Input";
import Button from "../Button";
import Email from "../../assets/images/email.png";
import Password from "../../assets/images/password.png";
import PasswordText from "../PasswordText";
export default function Login({ text }) {
  return (
    <div className="container">
      <Title text={text} />
      <div className="inputs">
        <Input photo={Email} text="Email ID" type="email" />
        <Input photo={Password} text="Password" type="password" />
      </div>
      <PasswordText />
      <div className="two-button">
        <Button text={text} btnText="Login" />
      </div>
    </div>
  );
}
