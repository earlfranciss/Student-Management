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
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full space-y-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        {initialData ? "Update Student" : "Add Student"}
      </h2>

      {/* Name */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Enter full name"
          className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 rounded-lg outline-none transition"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email address"
          className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 rounded-lg outline-none transition"
          required
        />
      </div>

      {/* Enrollment Date */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Enrollment Date</label>
        <input
          type="date"
          name="enrollmentDate"
          value={form.enrollmentDate ? form.enrollmentDate.split("T")[0] : ""}
          onChange={handleChange}
          className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 rounded-lg outline-none transition"
          required
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-md transition"
        >
          {initialData ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
}
