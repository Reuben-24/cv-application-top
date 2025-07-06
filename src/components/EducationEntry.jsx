export default function EducationEntry({
  entry,
  handleRemoveEntry,
  handleChangeEntry,
}) {
  function onChange(e) {
    const { name, value } = e.target;
    handleChangeEntry(entry.id, name, value);
  }

  return (
    <div className="form-entry">
      <div className="form-group">
        <label htmlFor={`school-${entry.id}`}>School</label>
        <input
          type="text"
          id={`school-${entry.id}`}
          name="school"
          placeholder="Enter Name of School / University"
          autoComplete="organization"
          value={entry.school}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor={`degree-${entry.id}`}>Degree</label>
        <input
          type="text"
          id={`degree-${entry.id}`}
          name="degree"
          placeholder="Enter Name of Degree / Field of Study"
          value={entry.degree}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor={`education-start-date-${entry.id}`}>Start Date</label>
        <input
          type="date"
          id={`education-start-date-${entry.id}`}
          name="startDate"
          value={entry.startDate}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor={`education-end-date-${entry.id}`}>End Date</label>
        <input
          type="date"
          id={`education-end-date-${entry.id}`}
          name="endDate"
          value={entry.endDate}
          onChange={onChange}
        />
      </div>
      <button
        className="delete-button remove-entry-button"
        type="button"
        onClick={() => handleRemoveEntry(entry.id)}
      >
        Remove
      </button>
    </div>
  );
}
