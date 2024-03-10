import { useState } from "react";

function useFormState(initialState) {
  const [formData, setFormData] = useState(initialState);
  const updateField = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };
  return [formData, updateField];
}

export default useFormState