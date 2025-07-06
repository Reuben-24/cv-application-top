import WorkDisplay from "./WorkDisplay.jsx";
import EducationDisplay from "./EducationDisplay.jsx";

export default function ResumeDisplay({ personalDetails, education, work }) {
  return (
    <section className="resume-display">

      <header className="resume-display-personal-details">

        <h1 className="resume-display-full-name">{personalDetails.fullName}</h1>

        {personalDetails.email && (
          <div className="contact-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 4h16v16H4z" strokeLinejoin="round" />
              <path d="M4 4l8 8 8-8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="resume-display-email">{personalDetails.email}</p>
          </div>
        )}

        {personalDetails.phone && (
          <div className="contact-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 .95-.27l4.4 1.1a1 1 0 0 1 .75 1v4.09a1 1 0 0 1-1.11 1A19 19 0 0 1 3 4.1a1 1 0 0 1 1-.75H6.7a1 1 0 0 1 1 .76l1.1 4.39a1 1 0 0 1-.27.95l-2.2 2.2z" />
            </svg>
            <p className="resume-display-phone">{personalDetails.phone}</p>
          </div>
        )}

      </header>

      {education.length > 0 && <EducationDisplay education={education}/>}

      {work.length > 0 && <WorkDisplay work={work}/>}

    </section>
  );
}