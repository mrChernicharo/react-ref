import Head from 'next/head';
import { useRef } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  return (
    <div>
      <h1>Hello Ref</h1>
      <label htmlFor="user-name">
        User Name
        <input ref={nameInputRef} id="user-name" type="text" />
      </label>
      <label htmlFor="email">
        Email
        <input ref={emailInputRef} id="email" type="text" />
      </label>
      <label htmlFor="password">
        Password
        <input ref={passwordInputRef} id="password" type="text" />
      </label>
    </div>
  );
}
