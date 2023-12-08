export default function Button({ text, btnText, change }) {
  return (
    <div
      type="submit"
      className={`btn ${text === btnText ? "" : "gray"}`}
      onClick={change}
    >
      {btnText}
    </div>
  );
}
