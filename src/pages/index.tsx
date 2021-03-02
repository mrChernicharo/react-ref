import { useCallback, useMemo, useRef, useState } from 'react';
import Input from '../components/Input';
import styles from '../styles/Home.module.css';

export default function Home() {
  const nameInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(e => {
    e.preventDefault(); // <- recarrega a página se não tiver preventDefault
    // console.log('form submitted');
    console.log(nameInputRef.current.value);
  }, []);

  return (
    <div>
      <h1>Hello Ref</h1>

      <form onSubmit={e => handleSubmit(e)}>
        <Input id="first" name="First Name" ref={nameInputRef} />
      </form>
    </div>
  );
}
