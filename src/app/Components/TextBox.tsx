'use client';

import React, { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { IconButton, InputAdornment, TextField } from '@mui/material';

export interface AuthInputProps {
  name: string;
  value: string;
  placeholder: string;
  type?: 'text' | 'email' | 'password';
  required?: boolean;
  label?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: string | false | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const TextBox: React.FC<AuthInputProps> = ({
  name,
  value,
  placeholder,
  type = 'text',
  required,
  disabled,
  error,
  label,
  helperText,
  onChange,
  onBlur,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trimmed = e.target.value.trimStart();
    onChange({
      ...e,
      target: {
        ...e.target,
        value: trimmed,
        name,
      },
    });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const trimmed = e.target.value.trim();
    onBlur({
      ...e,
      target: {
        ...e.target,
        value: trimmed,
        name,
      },
    });
  };

  const isPassword = type === 'password';

  return (
    <div className="mb-7" style={{ width: 'auto', minWidth: '400px' }}>
      <div className="relative">
        <TextField
          name={name}
          value={value}
          label={label}
          type={isPassword && !showPassword ? 'password' : 'text'}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          error={error}
          onChange={handleChange}
          onBlur={handleBlur}
          fullWidth
          className={`auth-input theme-border ${error ? 'border-red-500' : ''}`}
       
          InputProps={{
            endAdornment:
              type === 'password' ? (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword((prev) => !prev)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ) : null,
          }}
        />
      </div>
      {error && helperText && (
        <p className="auth-error text-xs mt-1">{helperText}</p>
      )}
    </div>
  );
};

export default TextBox;
