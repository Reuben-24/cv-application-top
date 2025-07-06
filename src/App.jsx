import { useState } from "react";

import "./styles/App.css";
import "./styles/form.css";
import "./styles/resume.css";

import FormTitle from "./components/FormTitle.jsx";
import FormActions from "./components/FormActions.jsx";
import FormPersonalDetails from "./components/FormPersonalDetails.jsx";
import FormEducation from "./components/FormEducation.jsx";
import FormWork from "./components/FormWork.jsx";
import ResumeDisplay from "./components/ResumeDisplay.jsx";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [education, setEducation] = useState([]);

  const [work, setWork] = useState([]);

  function handleClearForm() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the entire form? This cannot be undone."
    );

    if (confirmed) {
      setPersonalDetails({ fullName: "", email: "", phone: "" });
      setEducation([]);
      setWork([]);
      setIsSubmitted(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <>

      <form id="resume-form" onSubmit={handleSubmit} autoComplete="on">
        <FormTitle />
        <FormPersonalDetails
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
        />
        <FormEducation education={education} setEducation={setEducation} />
        <FormWork work={work} setWork={setWork} />
        <FormActions handleClearForm={handleClearForm} />
      </form>

      {isSubmitted && (
        <ResumeDisplay
          personalDetails={personalDetails}
          education={education}
          work={work}
        />
      )}

    </>
  );
}

export default App;
