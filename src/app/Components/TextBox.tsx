"use client";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import React, { useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import SearchIcon from "@mui/icons-material/Search";

type textBoxProps = {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  value: string | number |undefined;
  name: string;
  required?: boolean;
  type?: string;
  disabled?: boolean;
  id: string;
  maxLength?: number;
  error?: boolean;
  helperText?: React.ReactNode;
} & TextFieldProps;

const TextBox: React.FC<textBoxProps> = ({
  label,
  onChange,
  onBlur,
  value,
  name,
  required,
  type,
  disabled,
  id,
  maxLength,
  error,
  helperText,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTrimOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const trimmed = e.target.value.trim();
    const newEvent = {
      ...e,
      target: {
        ...e.target,
        value: trimmed,
        name: e.target.name,
      },
    };
    onBlur?.(newEvent as React.FocusEvent<HTMLInputElement>);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trimmed = e.target.value.trimStart();
    const newEvent = {
      ...e,
      target: {
        ...e.target,
        value: trimmed,
        name: e.target.name,
      },
    };
    onChange?.(newEvent as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div>
      <TextField
        id={id}
        label={label}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleTrimOnBlur}
        required={required}
        type={type === "password" && !showPassword ? "password" : "text"}
        disabled={disabled}
        variant="outlined"
        className="search-textfield"
        inputProps={{
          maxLength: maxLength,
        }}
        error={error}
        helperText={helperText || " "}
        sx={{
          ...(type === "search" && {
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
            },
          }),
        }}
        fullWidth
        InputProps={{
          endAdornment:
            type === "password" ? (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ) : type === "search" ? (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ) : null,
        }}
        {...rest}
      />
    </div>
  );
};

export default TextBox;
