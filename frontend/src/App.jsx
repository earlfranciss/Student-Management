import { useEffect, useState } from 'react'
import { api } from "./api"
import StudentPage from "../pages/StudentPage";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 items-center gap-3 pt-4">

      <StudentPage />
    </div>
  )
}

export default App
