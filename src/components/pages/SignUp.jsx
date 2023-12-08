import Title from "../Title";
import Inputs from "../Inputs";
import TwoButton from "../TwoButton";
export default function SignUp({ text, change, text2, change2 }) {
  return (
    <div className="container">
      <Title text={text} />
      <Inputs />
      <TwoButton change={change} text={text} change2={change2} text2={text2} />
    </div>
  );
}
