import { useState } from "react";

export default function useForm(initialState, callback) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData();
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   callback(formData, isEditing);
  //   setFormData(initialState);
  //   setIsEditing(false);
  //   handleCloseAdd();
  // };

  return {
    formData,
    handleChange,
  };
}
