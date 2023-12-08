export default function Input({ photo, text, type }) {
  return (
    <div className="input">
      <img src={photo} alt={text} />
      <input type={type} placeholder={text} />
    </div>
  );
}
