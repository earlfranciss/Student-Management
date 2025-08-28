using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Student.Models;
using Student.Data;

namespace Student.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentController : ControllerBase
    {
        private readonly StudentDbContext _db;
        public StudentController(StudentDbContext db) => _db = db;

        // GET: api/student
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StudentDetails>>> GetAll()
        {
            var items = await _db.Students
                .OrderBy(t => t.Id)
                .ThenBy(t => t.FullName)
                .ToListAsync();

            return Ok(items);
        }

        // GET: api/student/{id}
        [HttpGet("{id:int}")]
        public async Task<ActionResult<StudentDetails>> GetById(int id)
        {
            var item = await _db.Students.FindAsync(id);
            if (item == null) return NotFound();
            return Ok(item);
        }

        // POST: api/student
        [HttpPost]
        public async Task<ActionResult<StudentDetails>> Create(StudentDetails dto)
        {
            if (string.IsNullOrWhiteSpace(dto.FullName)) 
                return BadRequest("Full name is required.");

            _db.Students.Add(dto);
            await _db.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = dto.Id }, dto);
        }

        // PUT: api/student/{id}
        [HttpPut("{id:int}")]
        public async Task<IActionResult> Update(int id, StudentDetails dto)
        {
            if (id != dto.Id) return BadRequest("ID mismatch.");

            var exists = await _db.Students.AnyAsync(t => t.Id == id);
            if (!exists) return NotFound();

            _db.Entry(dto).State = EntityState.Modified;
            await _db.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/student/{id}
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            var item = await _db.Students.FindAsync(id);
            if (item == null) return NotFound();

            _db.Students.Remove(item);
            await _db.SaveChangesAsync();

            return NoContent();
        }
    }
}
