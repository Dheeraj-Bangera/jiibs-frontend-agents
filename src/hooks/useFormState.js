import { useState } from "react";

export default function useFormState(initialState) {
  const [formData, setFormData] = useState(initialState);
  const updateField = function (fieldName, value) {
    setFormData({ ...formData, [fieldName]: value });
  };
  return [formData, updateField];
}