import EducationEntryDisplay from "./EducationEntryDisplay.jsx";

export default function EducationDisplay({education}) {
  return (
    <section className="resume-display-education">
      <h2>Education</h2>
      {education.map(entry => (
        <EducationEntryDisplay key={entry.id} entry={entry} />
      ))}
    </section>
  );
}