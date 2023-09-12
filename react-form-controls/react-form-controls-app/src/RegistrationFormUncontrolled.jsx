import React from 'react';

export default function RegistrationFormUncontrolled() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formEntries = Object.fromEntries(formData.entries());
    console.log(formEntries);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
