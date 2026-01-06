import React, { useEffect, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

type Option = {
  label: string;
  value: string;
};

type CommonInputProps = {
  label: string;
  value?: string;
  placeholder?: string;
  options: Option[];
  onChange: (value: string) => void;
};

const CommonInput = ({
  label,
  value,
  placeholder,
  options,
  onChange,
}: CommonInputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState(value || "");
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(search.toLowerCase())
  );

  // 🔹 Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent blur
    setSearch("");
    onChange("");
    setIsOpen(false);
  };

  return (
    <div className="common-input" ref={wrapperRef}>
      <label>{label}</label>

      <div className="input-value">
        <input
          type="text"
          value={search}
          placeholder={placeholder}
          onFocus={() => {
            setIsFocused(true);
            setIsOpen(true);
          }}
          onBlur={() => {
            setTimeout(() => {
              setIsFocused(false);
              setIsOpen(false);
            }, 150);
          }}
          onChange={(e) => {
            setSearch(e.target.value);
            onChange(e.target.value);
          }}
        />

        {isFocused && (
          <span className="clear-icon" onClick={handleClear}>
            <CloseIcon></CloseIcon>
          </span>
        )}

        {isOpen && filteredOptions.length > 0 && (
          <ul className="select-dropdown">
            {filteredOptions.map((opt) => (
              <li
                key={opt.value}
                onClick={() => {
                  setSearch(opt.label);
                  onChange(opt.value);
                  setIsOpen(false);
                }}
              >
                {opt.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommonInput;
