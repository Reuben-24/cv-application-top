export default function WorkEntry({
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
        <label htmlFor={`company-${entry.id}`}>Company</label>
        <input
          type="text"
          id={`company-${entry.id}`}
          name="company"
          placeholder="Enter Name of Company / Organisation"
          autoComplete="organization"
          value={entry.company}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor={`position-${entry.id}`}>Position</label>
        <input
          type="text"
          id={`position-${entry.id}`}
          name="position"
          placeholder="Enter Job / Position Title"
          autoComplete="job-title"
          value={entry.position}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor={`work-start-date-${entry.id}`}>Start Date</label>
        <input
          type="date"
          id={`work-start-date-${entry.id}`}
          name="startDate"
          value={entry.startDate}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor={`work-end-date-${entry.id}`}>End Date</label>
        <input
          type="date"
          id={`work-end-date-${entry.id}`}
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
