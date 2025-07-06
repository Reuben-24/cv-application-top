import WorkEntry from "./WorkEntry";

export default function FormWork({ work, setWork}) {
  function handleAddEntry() {
    setWork([
      ...work,
      {
        id: crypto.randomUUID(),
        company: "",
        position: "",
        startDate: "",
        endDate: "",
      },
    ]);
  }

  function handleRemoveEntry(id) {
    setWork(work.filter((entry) => entry.id !== id));
  }

  function handleChangeEntry(id, field, value) {
    setWork((prev) =>
      prev.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry
      )
    );
  }

  return (
    <section className="form-work card">
      <h2>Work</h2>

      {work.map((entry) => (
        <WorkEntry
          key={entry.id}
          entry={entry}
          handleRemoveEntry={handleRemoveEntry}
          handleChangeEntry={handleChangeEntry}
        />
      ))}

      <button type="button" onClick={handleAddEntry}>
        + Add Work
      </button>
    </section>
  );
}