import Head from 'next/head';
import { useRef, useState } from 'react';
import styles from '../styles/Home.module.css';

interface FormData {
  name: string;
  email: string;
  password: string;
}

export default function Home() {
  const [result, setResult] = useState({} as FormData);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function submitForm() {
    const form = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    setResult(form);
  }

  return (
    <div>
      <h1>Hello Ref</h1>
      <div className="result">{JSON.stringify(result)}</div>
      <br />

      <label htmlFor="user-name">
        User Name
        <input ref={nameRef} id="user-name" type="text" />
      </label>
      <label htmlFor="email">
        Email
        <input ref={emailRef} id="email" type="text" />
      </label>
      <label htmlFor="password">
        Password
        <input ref={passwordRef} id="password" type="text" />
      </label>

      <button type="button" onClick={submitForm}>
        Submit
      </button>
    </div>
  );
}
