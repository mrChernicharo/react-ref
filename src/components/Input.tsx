import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id: string;
}

const Input: React.FC<InputProps> = ({ name, id, ...rest }: InputProps) => {
  return (
    <label htmlFor={id}>
      <span>{name}</span>
      <input type="text" id={id} name={name} {...rest} />
    </label>
  );
};

export default Input;
