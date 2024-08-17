using Microsoft.AspNetCore.Mvc;
using UserAPI.Models;
using UserAPI.Services;

namespace UserAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly MongoDBService _mongoDBService;

        public UserController(MongoDBService mongoDBService)
        {
            _mongoDBService = mongoDBService;
        }

        [HttpGet]
        public async Task<ActionResult<User>> GetUser()
        {
            var user = await _mongoDBService.GetUserAsync();
            if (user == null)
            {
                return NotFound();
            }
            return user;
        }

        [HttpPut("name")]
        public async Task<IActionResult> UpdateName([FromBody] string newName)
        {
            var user = await _mongoDBService.GetUserAsync();
            if (user == null)
            {
                return NotFound();
            }
            user.Name = newName;
            await _mongoDBService.UpdateUserAsync(user);
            return NoContent();
        }

        [HttpPut("username")]
        public async Task<IActionResult> UpdateUsername([FromBody] string newUsername)
        {
            var user = await _mongoDBService.GetUserAsync();
            if (user == null)
            {
                return NotFound();
            }
            user.Username = newUsername;
            await _mongoDBService.UpdateUserAsync(user);
            return NoContent();
        }

        [HttpPut("password")]
        public async Task<IActionResult> UpdatePassword([FromBody] string newPassword)
        {
            var user = await _mongoDBService.GetUserAsync();
            if (user == null)
            {
                return NotFound();
            }
            user.Password = newPassword;
            await _mongoDBService.UpdateUserAsync(user);
            return NoContent();
        }

        // Si necesitas un método para crear el usuario inicial:
        [HttpPost]
        public async Task<ActionResult<User>> CreateUser([FromBody] User newUser)
        {
            var existingUser = await _mongoDBService.GetUserAsync();
            if (existingUser != null)
            {
                return Conflict("A user already exists");
            }
            await _mongoDBService.CreateUserAsync(newUser);
            return CreatedAtAction(nameof(GetUser), newUser);
        }
    }
}