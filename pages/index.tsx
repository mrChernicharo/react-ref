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
    </div>
  );
}
