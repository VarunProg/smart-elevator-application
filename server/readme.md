## Backend Setup

### Prerequisites

Before you can run the backend server, ensure you have the following installed:

- [Node.js](https://nodejs.org/) - The JavaScript runtime environment.
- [npm](https://www.npmjs.com/) - The Node.js package manager.
- [MongoDB](https://www.mongodb.com/) - The NoSQL database system.

#### Navigate to the server directory:
1. cd server - In new terminal go to sevrer folder 
2. npm install - npm i - this will install dev dependencies in local inside node_modules folder
3. npm start
4. keep it running for server api calls


#### For MongoDB Setup:
1. MongoDB Credentials:
. in server folder go to .env file 
. Inside the .env file, you will find an environment variable named MONGO_URI. This variable holds the credentials required to connect to the MongoDB database.

2. Edit the .env File:
. Update the MONGO_URI value with your MongoDB connection string.
. Replace the existing connection string
 (mongodb+srv://varunchaudhary578:Hi22fU5KeMENRMBv@elevator-db.hztkbre.mongodb.net/?retryWrites=true&w=majority) with your own MongoDB connection string.

. MONGO_URI = YOUR_MONGODB_CONNECTION_STRING

3. MongoDB Connection String:
. The MongoDB connection string typically consists of:
. mongodb+srv://: The connection protocol.
. USERNAME:PASSWORD: Your MongoDB username and password.
. @cluster-name.mongodb.net/: The MongoDB cluster name.
. DATABASE_NAME: The name of your MongoDB database.
