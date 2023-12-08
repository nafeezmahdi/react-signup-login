export default function Age() {
  return (
    <div className="age">
      <fieldset>
        <legend className="legend">Age</legend>
        <input type="radio" name="age-input" id="under-18" value="under-18" />
        <label htmlFor="over-18">Under 18</label>
        <input type="radio" name="age-input" id="over-18" value="over-18" />
        <label htmlFor="over-18">Over 18</label>
      </fieldset>
    </div>
  );
}
