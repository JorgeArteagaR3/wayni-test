using MongoDB.Driver;
using UserAPI.Models;
using Microsoft.Extensions.Options;

namespace UserAPI.Services
{
    public class MongoDBService
    {
        private readonly IMongoCollection<User> _usersCollection;

        public MongoDBService(IOptions<MongoDBSettings> mongoDBSettings)
        {
            MongoClient client = new MongoClient("mongodb+srv://jorgearanibar26:jorgearanibar26@cluster0.cr8qo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
            IMongoDatabase database = client.GetDatabase(mongoDBSettings.Value.DatabaseName);
            _usersCollection = database.GetCollection<User>("Users");

    

        }

        public async Task<User> GetUserAsync()
        {   
            var existingUser = await _usersCollection.Find(_ => true).FirstOrDefaultAsync();
            if (existingUser != null)
            {
                return existingUser;
            }

            var newUser = new User
            {   
                Name = "Jorge Arteaga",
                Username = "jorgeaar3",
                Password = "password123",
                Email = "jorge.aranibar26@gmail.com",
                PhoneNumber = "+51912893054"
            };
            await _usersCollection.InsertOneAsync(newUser);

            return newUser;
                 
        }

        public async Task UpdateUserAsync(User updatedUser)
        {
            await _usersCollection.ReplaceOneAsync(_ => true, updatedUser);
        }

        public async Task CreateUserAsync(User newUser)
        {
            await _usersCollection.InsertOneAsync(newUser);
        }
    }
}