import { useState } from "react";

export const useForm = (formValues = {}) => {
  const [form, setForm] = useState(formValues);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...formValues, [name]: value });
  };

  const onResetForm = () => setForm(formValues);

  return { ...form, onInputChange, onResetForm };
};
