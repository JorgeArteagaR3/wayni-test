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

        [HttpGet("{username}")]
        public async Task<ActionResult<User>> GetUser(string username)
        {
            var user = await _mongoDBService.GetUserAsync(username);
            if (user == null)
            {
                return NotFound();
            }
            return user;
        }

        [HttpPut("{username}/name")]
        public async Task<IActionResult> UpdateName(string username, [FromBody] string newName)
        {
            var user = await _mongoDBService.GetUserAsync(username);
            if (user == null)
            {
                return NotFound();
            }
            user.Name = newName;
            await _mongoDBService.UpdateUserAsync(username, user);
            return NoContent();
        }

        [HttpPut("{username}/username")]
        public async Task<IActionResult> UpdateUsername(string username, [FromBody] string newUsername)
        {
            var user = await _mongoDBService.GetUserAsync(username);
            if (user == null)
            {
                return NotFound();
            }
            user.Username = newUsername;
            await _mongoDBService.UpdateUserAsync(username, user);
            return NoContent();
        }

        [HttpPut("{username}/password")]
        public async Task<IActionResult> UpdatePassword(string username, [FromBody] string newPassword)
        {
            var user = await _mongoDBService.GetUserAsync(username);
            if (user == null)
            {
                return NotFound();
            }
            user.Password = newPassword;
            await _mongoDBService.UpdateUserAsync(username, user);
            return NoContent();
        }   
        [HttpPost]
        public async Task<ActionResult<User>> CreateUser([FromBody] User newUser)
        {
            await _mongoDBService.CreateUserAsync(newUser);
            return CreatedAtAction(nameof(GetUser), new { username = newUser.Username }, newUser);
        }
    }
}