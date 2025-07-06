import EducationEntry from "./EducationEntry";

export default function FormEducation({ education, setEducation }) {
  function handleAddEntry() {
    setEducation([
      ...education,
      {
        id: crypto.randomUUID(),
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
      },
    ]);
  }

  function handleRemoveEntry(id) {
    setEducation(education.filter((entry) => entry.id !== id));
  }

  function handleChangeEntry(id, field, value) {
    setEducation((prev) =>
      prev.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry
      )
    );
  }

  return (
    <section className="form-education card">
      <h2>Education</h2>

      {education.map((entry) => (
        <EducationEntry
          key={entry.id}
          entry={entry}
          handleRemoveEntry={handleRemoveEntry}
          handleChangeEntry={handleChangeEntry}
        />
      ))}

      <button type="button" onClick={handleAddEntry}>
        + Add Education
      </button>
    </section>
  );
}
