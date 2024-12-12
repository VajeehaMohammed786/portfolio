// src/hooks/useForm.js
import { useState } from 'react';

const useForm = () => {
  const [input, setInput] = useState('');

  const handleChange = (e) => setInput(e.target.value);

  return {
    input,
    handleChange,
  };
};

export default useForm;
