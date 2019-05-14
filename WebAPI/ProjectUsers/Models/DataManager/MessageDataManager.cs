using ProjectUsers.Models.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectUsers.Models.DataManager
{
    public class MessageDataManager : IDataRepository<Message>
    {
        readonly UserContext _UserContext;

        public MessageDataManager(UserContext context)
        {
            _UserContext = context;
        }

        public void Add(Message entity)
        {
            _UserContext.Messages.Add(entity);
            _UserContext.SaveChanges();
        }

        public void Delete(Message entity)
        {
            _UserContext.Messages.Remove(entity);
            _UserContext.SaveChanges();
        }

        public Message Get(long id)
        {
            return _UserContext.Messages
                   .FirstOrDefault(e => e.MessageId == id);
        }

        public IEnumerable<Message> GetAll()
        {
            return _UserContext.Messages.ToList();
        }

        public void Update(Message entityToUpdate, Message entity)
        {
            entityToUpdate.MessageId = entity.MessageId;
            entityToUpdate.MessageBody = entity.MessageBody;
            entityToUpdate.SenderName = entity.SenderName;
            entityToUpdate.RecipientName = entity.RecipientName;
            entityToUpdate.CreationDate = entity.CreationDate;
            _UserContext.SaveChanges();
        }
    }
}
