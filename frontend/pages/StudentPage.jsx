import React, { useState, useEffect } from "react";
import { api } from "../src/api";
import Table from "../components/StudentTable";
import StudentForm from "../components/StudentForm";

export default function StudentsPage() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);

    async function loadStudents() {
        try {
            setError("");
            setLoading(true);
            const data = await api.getStudents();
            setStudents(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => { loadStudents(); }, []);

    async function handleAdd(student) {
        try {
            await api.createStudent(student);
            await loadStudents();
            setShowForm(false);
        } catch (err) {
            setError(err.message);
        }
    }

    async function handleUpdate(updatedStudent) {
        try {
            await api.updateStudent(editingStudent.id, updatedStudent);
            await loadStudents();
            setShowForm(false);
            setEditingStudent(null);
        } catch (err) {
            setError(err.message);
        }
    }

    async function handleDelete(id) {
        try {
            await api.deleteStudent(id);
            await loadStudents();
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div className="max-w-5xl mx-auto p-6 ">
            <header className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold">Student Management</h1>
                <button 
                    onClick={() => { setEditingStudent(null); setShowForm(true); }}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Add Student
                </button>
            </header>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <div className="mt-4">
                <Table 
                    rows={students} 
                    onDelete={handleDelete} 
                    onUpdate={(student) => { setEditingStudent(student); setShowForm(true); }}
                />
            </div>

            {/* Modal */}
            {showForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/30">
                    <StudentForm 
                        initialData={editingStudent} 
                        onSubmit={editingStudent ? handleUpdate : handleAdd} 
                        onCancel={() => { setShowForm(false); setEditingStudent(null); }}
                    />
                </div>
            )}
        </div>
    );
}
