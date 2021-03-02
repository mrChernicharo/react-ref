import React, { forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id: string;
}

const Input: React.RefForwardingComponent<HTMLInputElement, InputProps> = (
  { name, id, ...rest }: InputProps,
  ref
) => {
  return (
    <label htmlFor={id}>
      <span>{name}</span>
      <input type="text" id={id} name={name} {...rest} ref={ref} />
    </label>
  );
};

export default forwardRef(Input);
