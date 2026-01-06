import React, { useRef } from "react";

type DateInputProps = {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
};

const DateInput = ({ label, value, onChange, placeholder }: DateInputProps) => {
  const dateRef = useRef<HTMLInputElement>(null);

  return (
    <div className="common-input">
      <label>{label}</label>

      <div
        className="input-value"
        onClick={() => dateRef.current?.showPicker()}
      >
        <input
          ref={dateRef}
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="date-input"
        />
      </div>
    </div>
  );
};

export default DateInput;
