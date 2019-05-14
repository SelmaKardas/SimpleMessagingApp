using Microsoft.AspNetCore.Mvc;
using ProjectUsers.Models;
using ProjectUsers.Models.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectUsers.Controllers
{
    [Route("api/messages")]
    public class MessagesController : ControllerBase
    {
        private readonly IDataRepository<Message> _dataRepository;

        public MessagesController(IDataRepository<Message> dataRepository)
        {
            _dataRepository = dataRepository;
        }
        // GET: api/Message
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Message> messages = _dataRepository.GetAll();
            return Ok(messages);
        }

        // GET: api/Message/5
        [HttpGet("{id}", Name = "GetMessage")]
        public IActionResult Get(long id)
        {
            Message message = _dataRepository.Get(id);

            if (message == null)
            {
                return NotFound("The Message record couldn't be found.");
            }

            return Ok(message);
        }

        // POST: api/Message
        [HttpPost]
        public IActionResult Post([FromBody] Message message)
        {
            if (message == null)
            {
                return BadRequest("Message is null.");
            }

            _dataRepository.Add(message);
            return CreatedAtRoute(
                  "Get",
                  new { Id = message.MessageId },
                  message);
        }

        // PUT: api/Message/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] Message message)
        {
            if (message == null)
            {
                return BadRequest("Message is null.");
            }

            Message messageToUpdate = _dataRepository.Get(id);
            if (messageToUpdate == null)
            {
                return NotFound("The Message record couldn't be found.");
            }

            _dataRepository.Update(messageToUpdate, message);
            return NoContent();
        }

        // DELETE: api/Message/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            Message message = _dataRepository.Get(id);
            if (message == null)
            {
                return NotFound("The Message record couldn't be found.");
            }

            _dataRepository.Delete(message);
            return NoContent();
        }
    }
}

