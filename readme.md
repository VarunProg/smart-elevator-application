# Elevator Management System

The Elevator Management System is a comprehensive application designed to provide real-time insights into the status and performance of elevators within a given environment. This system aims to enhance the efficiency of elevator maintenance and operation by offering a user-friendly interface with interactive features.

## Features

### 1. Operational Status Overview

- **Total Operational Elevators:** Displays the current number of elevators that are operational.
- **Elevators with Warnings:** Indicates the elevators that are currently issuing warnings.
- **Out of Service Elevators:** Highlights the elevators that are currently out of service.

### 2. Recent Visits and Inspections

- **Recent Visits/Inspections:** Provides a list of elevators that have been recently visited or inspected.

### 3. Interactive Functionality

- **Detailed Lists:** Clicking on the count of elevators in any state (operational, warning, or out of service) will dynamically generate a detailed list of elevators falling into that specific category.
- **Individual Elevator Information:** Clicking on any individual elevator from any list will open a detailed view, presenting comprehensive information about the selected elevator's status and history.
- **Analytical Data Display:** Alongside individual elevator information, a chart is provided to visually represent analytical data about the elevator's operations.

## Authentication with Auth0

To enhance security and user-specific features, this application utilizes Auth0 for user authentication. 

1. **User Authentication:**
   - Users can sign in securely using Auth0, providing a seamless and protected experience.

## Technologies Used

#### on frontend
1. ### vite -
   Is a build tool that aims to provide a faster and leaner development experience for modern web projects, it uses esbuild which way more faster than any other build tools [https://vitejs.dev/guide/]
2. ### react with typescript -
   Using Typescript to build our React applications will make our react applications more predictable as we will be able to catch a lot of errors at runtime (during compilation). [https://create-react-app.dev/docs/adding-typescript/]


3. ### react-query - 
 React Query simplifies data management, improves performance, enhances type safety, and streamlines error handling in your React.js project, making it a valuable addition when using TypeScript for development.Efficient Data Fetching, Automatic Caching.

 4. **Recharts -**
   Recharts is a composable charting library for React. It provides a set of flexible and highly customizable components for building interactive and visually appealing charts in your application. [Recharts Documentation](https://recharts.org/)

5. **React Redux -**
   React Redux is the official React binding for Redux, a predictable state container for JavaScript apps. It helps manage the state of your application in a consistent way, making it easier to maintain and scale. [React Redux Documentation](https://redux-toolkit.js.org/)

6. ### Styling - 

In this project, we use SCSS for custom styling and leverage React Bootstrap for UI components. Here's a brief overview of our styling setup:

- **SCSS (Sass)**: We use SCSS to create custom styles. SCSS provides a powerful way to manage styles, including variables, mixins, and nesting, ensuring maintainable and modular CSS.

- **React Bootstrap**: We rely on React Bootstrap for UI components. It offers a library of pre-styled and responsive components, making it easier to build a consistent and visually appealing user interface.

#### Technologies used on backend

- **Express.js:** A fast, unopinionated, and minimal web application framework for Node.js, used to create the API's endpoints and handle HTTP requests.

- **TypeScript:** A strongly typed superset of JavaScript that enhances code quality and provides improved development experiences.

- **MongoDB:** A NoSQL database system that stores course data in a flexible, scalable, and schema-less format.

The combination of these technologies makes the Course Management System API efficient, maintainable, and adaptable to various use cases.

Please refer to the installation and configuration instructions in the README for details on setting up and running this project.

## How to Use

1. Clone the repository to your local machine.
2. Install the necessary dependencies using the provided installation script.
3. Run the application on your preferred environment.
4. Access the application through the provided URL.
5. Explore the various features and functionalities to gain valuable insights into elevator operations.



# Setup project in local enviornment
1. Git Clone Repo in local from url using below command
   ```bash
   git clone [https://github.com/VarunProg/smart-elevator-application.git]
   ```
### Setup in local development enviornment with enviornment config
## open 2 terminal one for web and one for server 

#### For Client 
1. In new terminal go to web folder 
2. run npm i - this will install dev dependencies in local inside node_modules folder
3. run pnpm dev - this will launch application on http://localhost:5174/ (check browser)

#### For Sever 
1. In new terminal go to sevrer folder 
2. run -> npm i - this will install dev dependencies in local inside node_modules folder
3. run -> npm start - this will launch server on port 3000 (keep it running for server api calls)

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