const React = require("react");

const { useState, useEffect } = require("react");

function SignUp() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(true); // They haven't typed yet

  let borderColor = "green"; // By default, we show a green border
  if (error) {
    // If there is an error
    borderColor = "red"; // Make the border red
  }

  function handleChange(event) {
    setEmail(event.target.value); // Updates the state, and re-renders the component
  }

  // Add validations!
  useEffect(
    function () {
      let isEmailValid = email.includes("@");
      setError(!isEmailValid);
      // If it's an invalid email, error should be true
    },
    [email] // If email changes, run callback function
  );

  return (
    <form>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={handleChange}
        style={{
          border: `2px solid ${borderColor}`,
        }}
      />
      <input type="submit" value="Sign Up" />
    </form>
  );
}

module.exports = SignUp;
