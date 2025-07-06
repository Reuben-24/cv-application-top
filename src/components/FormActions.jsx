export default function FormActions({handleClearForm}) {

  return (
    <div className="form-actions card">
      <button className="submit-button" type="submit">Generate Resume</button>
      <button className="delete-button" type="button" onClick={handleClearForm}>Clear All</button>
    </div>
  );
}