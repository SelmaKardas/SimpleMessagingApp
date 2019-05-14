using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProjectUsers.Models.Repository;

namespace ProjectUsers.Models.DataManager
{
    public class UserDataManager : IDataRepository<User>
    {
        readonly UserContext _UserContext;

        public UserDataManager(UserContext context)
        {
            _UserContext = context;
        }

        public void Add(User entity)
        {
            _UserContext.Users.Add(entity);
            _UserContext.SaveChanges();
        }

        public void Delete(User entity)
        {
            _UserContext.Users.Remove(entity);
            _UserContext.SaveChanges();
        }

        public User Get(long id)
        {
            return _UserContext.Users
                   .FirstOrDefault(e => e.UserId == id);
        }

        public IEnumerable<User> GetAll()
        {
            return _UserContext.Users.ToList();
        }

        public void Update(User entityToUpdate, User entity)
        {
            entityToUpdate.UserId = entity.UserId;
            entityToUpdate.UserName = entity.UserName;
            entityToUpdate.Email = entity.Email;
            _UserContext.SaveChanges();
        }
    }
}
