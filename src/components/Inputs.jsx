import Input from "./Input";
import RadioBox from "./RadioBox";
import Person from "../assets/images/person.png";
import Email from "../assets/images/email.png";
import Password from "../assets/images/password.png";

export default function Inputs() {
  return (
    <div className="inputs">
      <Input photo={Person} text="Name" type="text" />
      <Input photo={Email} text="Email ID" type="email" />
      <Input photo={Password} text="Password" type="password" />
      <RadioBox />
    </div>
  );
}
