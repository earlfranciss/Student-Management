📘 Student Management App

A Student Management System built with ASP.NET Core Web API and SQL Server, designed to handle student data efficiently with full CRUD (Create, Read, Update, Delete) operations.

✨ Features

🔹 Manage students (Add, View, Update, Delete)

🔹 RESTful API built with ASP.NET Core

🔹 Entity Framework Core for database interaction

🔹 SQL Server as the backend database

🔹 Scalable architecture for future enhancements

🛠️ Tech Stack

Backend: ASP.NET Core Web API

Database: Microsoft SQL Server, EF Core

Language: C#

Version Control: Git + GitHub

📂 Project Structure
StudentManagement/
│── Controllers/     # API Controllers (e.g., StudentsController.cs)
│── Models/          # Data Models (e.g., Student.cs)
│── Data/            # DbContext and Database Config
│── Migrations/      # EF Core Migrations
│── Program.cs       # Entry point
│── appsettings.json # Configuration (DB connection, logging, etc.)

⚙️ Setup & Installation

Clone the repository

git clone https://github.com/earlfranciss/Student-Management.git
cd Student-Management


Restore dependencies

dotnet restore


Update Database (EF Core Migrations)

dotnet ef database update


Run the application

dotnet run


The API will run at:
👉 https://localhost:5001/api/students
👉 http://localhost:5000/api/students

📖 API Endpoints
Method	Endpoint	Description
GET	/api/students	Get all students
GET	/api/students/{id}	Get a student by ID
POST	/api/students	Add a new student
PUT	/api/students/{id}	Update an existing student
DELETE	/api/students/{id}	Delete a student
🧪 Example Request (POST)
POST /api/students
{
  "firstName": "John",
  "lastName": "Doe",
  "age": 20,
  "course": "Computer Science"
}

🚀 Future Enhancements

Authentication & Authorization (JWT)

Teacher & Course Management

Frontend integration with React/Vue

Role-based access (Admin, Teacher, Student)

👨‍💻 Author

Developed by Earl Francis Ong
📌 GitHub