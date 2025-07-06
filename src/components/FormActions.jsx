import html2pdf from "html2pdf.js";

export default function FormActions({ handleClearForm, resumeGenerated }) {
  function handleDownloadPDF() {
    const element = document.getElementById("resume");
    html2pdf().from(element).save("resume.pdf");
  }

  return (
    <div className="form-actions card">
      <button className="submit-button" type="submit">
        Generate Resume
      </button>
      <button className="delete-button" type="button" onClick={handleClearForm}>
        Clear All
      </button>
      {resumeGenerated && <button className="pdf-button" onClick={handleDownloadPDF}>Download PDF</button>}
    </div>
  );
}
