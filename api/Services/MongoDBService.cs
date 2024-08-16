using Microsoft.Extensions.Options;
using MongoDB.Driver;
using UserAPI.Models;

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

        public async Task<User> GetUserAsync(string username)
        {
            return await _usersCollection.Find(u => u.Username == username).FirstOrDefaultAsync();
        }

        public async Task UpdateUserAsync(string username, User updatedUser)
        {
            await _usersCollection.ReplaceOneAsync(u => u.Username == username, updatedUser);
        }
        public async Task CreateUserAsync(User newUser)
        {
            await _usersCollection.InsertOneAsync(newUser);
        }
    }
}