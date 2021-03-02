import { useCallback, useMemo, useRef, useState } from 'react';
import Input from '../components/Input';
import styles from '../styles/Home.module.css';

export default function Home() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(e => {
    e.preventDefault(); // <- recarrega a página se não tiver preventDefault
    // console.log('form submitted');
    console.log(nameInputRef.current.value);
    console.log(emailInputRef.current.value);
  }, []);

  const handleEnterKey = useCallback(e => {
    if (e.code === 'Enter') handleSubmit(e);
  }, []);

  return (
    <div>
      <h1>Hello Ref</h1>

      <form onSubmit={e => handleSubmit(e)}>
        <Input id="name" name="name" ref={nameInputRef} />
        <Input id="email" name="email" ref={emailInputRef} onKeyDown={e => handleEnterKey(e)} />
      </form>
    </div>
  );
}
