namespace Student.Models
{
    public class StudentDetails
    {
        public int Id { get; set; }
        public string FullName { get; set; } = "";
        public string Email { get; set; } = "";
        public DateTime? EnrollmentDate { get; set; }
    }
}
