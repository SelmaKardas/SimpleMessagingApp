using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectUsers.Models
{
    public class Message
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long MessageId { get; set; }
        public string MessageBody { get; set; }
        public string SenderName { get; set; }
        public string RecipientName { get; set; }
        public string CreationDate { get; set; }
    }
}
