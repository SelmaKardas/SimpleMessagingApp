using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProjectUsers.Models;
using ProjectUsers.Models.Repository;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProjectUsers.Controllers
{
    [Route("api/users")]
    public class UsersController : ControllerBase
    {
        private readonly IDataRepository<User> _dataRepository;

        public UsersController(IDataRepository<User> dataRepository)
        {
            _dataRepository = dataRepository;
        }
        // GET: api/User
        [HttpGet]
        public IActionResult Get()
        {

            IEnumerable<User> users = _dataRepository.GetAll();
            return Ok(users);
        }

        // GET: api/User/5
        [HttpGet("{id}", Name = "Get")]
        public IActionResult Get(long id)
        {
            User user = _dataRepository.Get(id);

            if (user == null)
            {
                return NotFound("The User record couldn't be found.");
            }

            return Ok(user);
        }

        // POST: api/User
        [HttpPost]
        public IActionResult Post([FromBody] User user)
        {
            if (user == null)
            {
                return BadRequest("User is null.");
            }

            _dataRepository.Add(user);
            return CreatedAtRoute(
                  "Get",
                  new { Id = user.UserId },
                  user);
        }

        // PUT: api/User/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] User user)
        {
            if (user == null)
            {
                return BadRequest("User is null.");
            }

            User userToUpdate = _dataRepository.Get(id);
            if (userToUpdate == null)
            {
                return NotFound("The User record couldn't be found.");
            }

            _dataRepository.Update(userToUpdate, user);
            return NoContent();
        }

        // DELETE: api/User/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            User user = _dataRepository.Get(id);
            if (user == null)
            {
                return NotFound("The User record couldn't be found.");
            }

            _dataRepository.Delete(user);
            return NoContent();
        }
    }
}
