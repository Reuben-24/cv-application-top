import { formatYear } from "../utils.js";

export default function WorkEntryDisplay({ entry }) {
  return (
    <article className="resume-display-work-entry">

      <h3 className="resume-display-company">{entry.company}</h3>


      <div className="flex-container">
        <p className="resume-display-position">{entry.position}</p>
        {(entry.startDate || entry.endDate) && (
          <div className="resume-display-dates">
            {"("}
            {entry.startDate && (
              <time
                className="resume-display-start-date"
                dateTime={entry.startDate}
              >
                {formatYear(entry.startDate)}
              </time>
            )}
            {entry.startDate &&
              entry.endDate &&
              formatYear(entry.startDate) !== formatYear(entry.endDate) && (
                <>
                  {" - "}
                  {entry.endDate && (
                    <time className="resume-display-end-date" dateTime={entry.endDate}>
                      {formatYear(entry.endDate)}
                    </time>
                  )}
                </>
              )
            }
            {")"}
          </div>
        )}
      </div>

    </article>
  );
}
