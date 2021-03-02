import Head from 'next/head';
import { SyntheticEvent, useCallback, useMemo, useRef, useState } from 'react';
import Input from '../components/Input';
import styles from '../styles/Home.module.css';

interface FormData {
  name: string;
}

export default function Home() {
  const submitForm = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    console.log('form submitted');
  }, []);

  return (
    <div>
      <h1>Hello Ref</h1>

      <form onSubmit={e => submitForm(e)}>
        <Input id="first" name="First Name" />
      </form>
    </div>
  );
}
