import { useState } from 'react';
import { HiX } from 'react-icons/hi';
import { HiCheck } from 'react-icons/hi';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('A password is required');
  const [validation, setValidation] = useState(HiX);

  function handlePassword(event) {
    console.log('password: ', { password });
    setPassword(event.target.value);
    if (!event.target.value) {
      setError('A password is required');
      setValidation(HiX);
    } else if (event.target.value.length < 8) {
      setError('Your password is too short');
      setValidation(HiX);
    } else {
      setError('');
      setValidation(HiCheck);
    }
  }
  return (
    <form>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePassword} />
        <span>{validation}</span>
      </label>
      <p>{error}</p>
      <button>Submit</button>
    </form>
  );
}
