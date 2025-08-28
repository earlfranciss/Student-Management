// components/StudentForm.jsx
import React, { useState, useEffect } from "react";

export default function StudentForm({ initialData, onSubmit, onCancel }) {
  const [form, setForm] = useState({ fullName: "", email: "", enrollmentDate: "" });

  // Load initial data for update mode
  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
    >
      <h2 className="text-xl font-bold mb-4">
        {initialData ? "Update Student" : "Add Student"}
      </h2>

      <label className="block mb-3">
        Name:
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          className="w-full border p-2 rounded mt-1"
          required
        />
      </label>

      <label className="block mb-3">
        Email:
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 rounded mt-1"
          required
        />
      </label>

      <label className="block mb-4">
        Enrollment Date:
        <input
          type="text"
          name="enrollmentDate"
          value={form.enrollmentDate ? form.enrollmentDate.split("T")[0] : ""}
          onChange={handleChange}
          className="w-full border p-2 rounded mt-1"
          required
        />
      </label>

      <div className="flex justify-end space-x-2">
        <button 
          type="button" 
          onClick={onCancel} 
          className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
        >
          Cancel
        </button>
        <button 
          type="submit" 
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          {initialData ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
}
