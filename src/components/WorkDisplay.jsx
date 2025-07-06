import WorkEntryDisplay from "./WorkEntryDisplay.jsx";

export default function WorkDisplay({work}) {
  return (
    <section className="resume-display-work">
      <h2>Work Experience</h2>
      {work.map(entry => (
        <WorkEntryDisplay key={entry.id} entry={entry} />
      ))}
    </section>
  );
}