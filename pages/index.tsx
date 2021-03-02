import Head from 'next/head';
import { SyntheticEvent, useMemo, useRef, useState } from 'react';
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
  const buttonRef = useRef(null);

  function enterKeySubmitForm(e: React.KeyboardEvent) {
    console.log(e.code);
    return e.code === 'Enter' ? submitForm() : '';
  }

  function submitForm() {
    console.log('form submitted');

    const form = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    setResult(form);
  }

  function goToNextElement(key: React.KeyboardEvent) {
    if (key.code === 'Enter') {
      // console.log(key);
      console.log(key.currentTarget);

      switch (key.currentTarget.id) {
        case 'user-name':
          return emailRef.current.focus();
        case 'email':
          return passwordRef.current.focus();
        case 'password':
          return buttonRef.current.focus();
        default:
          return;
      }
    }
  }

  return (
    <div>
      <h1>Hello Ref</h1>
      {Object.keys(result).length > 0 && <div className="result">{JSON.stringify(result)}</div>}
      <br />

      <label htmlFor="user-name">
        User Name
        <input ref={nameRef} onKeyPress={e => goToNextElement(e)} id="user-name" type="text" />
      </label>
      <label htmlFor="email">
        Email
        <input ref={emailRef} onKeyPress={e => goToNextElement(e)} id="email" type="text" />
      </label>
      <label htmlFor="password">
        Password
        <input ref={passwordRef} onKeyPress={e => goToNextElement(e)} id="password" type="text" />
      </label>

      <button
        ref={buttonRef}
        type="button"
        onClick={submitForm}
        onKeyPress={e => enterKeySubmitForm(e)}
      >
        Submit
      </button>
    </div>
  );
}
