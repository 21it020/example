import React from "react";
import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
    inputRef.current.value = "HIiii"; // Clear the input field when focused
  };

  return (
    <div>
      <h1>Focus Input</h1>
      <input
        type="text"
        ref={inputRef}
        placeholder="Click the button to focus me!"
      />
      <button onClick={() => handleFocus()}>Focus Input</button>
    </div>
  );
};

export default FocusInput;
