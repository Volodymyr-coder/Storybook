// src/components/Input/Input.tsx
import React, { useState } from 'react';
import './input.css';

type InputProps = {
  type?: 'text' | 'password' | 'number';
  clearable?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  type = 'text',
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
    <div className="input-container">
      <input
        type={showPassword ? 'text' : type}
        value={value}
        onChange={onChange}
        className="input-field"
      />
      {type === 'password' && (
        <button onClick={togglePasswordVisibility} className="toggle-password">
          {showPassword ? '👁️' : '🔒'}
        </button>
      )}
      {clearable && value && (
        <button onClick={clearInput} className="clear-button">
          ❌
        </button>
      )}
    </div>
  );
};
