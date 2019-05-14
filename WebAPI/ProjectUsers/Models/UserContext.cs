using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectUsers.Models
{
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Message> Messages { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(new User
            {
                UserId = 1,
                UserName = "Selma Kardas",
                Email = "selma.kardas@gmail.com"
               

            }, new User
            {
                UserId = 2,
                UserName = "Adnan Kardas",
                Email = "adnan.kardas@gmail.com"
               
            });

            modelBuilder.Entity<Message>().HasData(new Message
            {
                MessageId = 1,
                MessageBody = "Hello from the other side",
                SenderName = "Selma Kardas",
                RecipientName = "Adnan Kardas",
                CreationDate = "11/03/19"

            }, new Message
            {
                MessageId = 2,
                MessageBody = "Hello from the other side",
                SenderName = "Adnan Kardas",
                RecipientName = "Selma Kardas",
                CreationDate = "11/03/19"

            });
        }
    }
}
