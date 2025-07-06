export default function FormPersonalDetails({personalDetails, setPersonalDetails}) {
  function handleChange(e) {
    const { name, value } = e.target;
    setPersonalDetails(prev => ({
      ...prev,
      [name]: value
    }));
  }
  
  return (
    <section className="form-personal-details card">
      <h2>Personal Details</h2>

      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="John Doe"
          autoComplete="name"
          value={personalDetails.fullName}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="johndoe@gmail.com"
          autoComplete="email"
          value={personalDetails.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="0456 789 678"
          autoComplete="tel"
          value={personalDetails.phone}
          onChange={handleChange}
        />
      </div>
    </section>
  );
}