using Microsoft.EntityFrameworkCore;
using Student.Models;

namespace Student.Data
{
    // DbContext for EF Core
    public class StudentDbContext : DbContext
    {
        public StudentDbContext(DbContextOptions<StudentDbContext> options) : base(options) { }

        // DbSet maps StudentDetails to Students table
        public DbSet<StudentDetails> Students { get; set; }
    }
}
