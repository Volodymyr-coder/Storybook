import React, { useState } from 'react';
import css from './input.module.css';

type InputProps = {
  type?: 'text' | 'password' | 'number';
  clearable?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  type = 'password',
  clearable = false,
  value,
  onChange
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const clearInput = () => {
    onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className={css.container}>
      <input
        className={css.inputField}
        type={showPassword ? 'text' : type}
        value={value}
        onChange={onChange}
      />
      {type === 'password' && (
        <button
          onClick={togglePasswordVisibility}
          className={css.togglePassword}
        >
          {showPassword ? '👁️' : '🔒'}
        </button>
      )}
      {clearable && value && (
        <button onClick={clearInput} className={css.clearButton}>
          clear
        </button>
      )}
    </div>
  );
};
