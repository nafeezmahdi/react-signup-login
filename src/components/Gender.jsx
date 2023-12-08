export default function Gender() {
  return (
    <div className="gender">
      <fieldset>
        <legend className="legend">Gender</legend>
        <div className="gender-radio">
          <div>
            <input type="radio" name="gender-input" id="male" value="male" />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender-input"
              id="female"
              value="female"
            />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input type="radio" name="gender-input" id="other" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
