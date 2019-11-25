using Microsoft.EntityFrameworkCore;

namespace ProyectoWeb.Models
{
    public class DocenteContext: DbContext
    {
        public DocenteContext(DbContextOptions<DocenteContext> options) :
        base(options)
        {
        }
        public DbSet<Docente> Docentes { get; set; }

        public DbSet<Pregunta> Preguntas { get; set; }
    }
}