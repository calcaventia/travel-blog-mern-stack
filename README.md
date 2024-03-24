# travel-blog-mern-stack

Travel blog website built using MongoDB, Express.js, React.js and Node.js.

## Table of Contents

- [About](#about)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)

## About

The travel blog is a platform designed to encourage users to share their travel experiences, particularly focusing on budget-friendly trips and tips. Users can share their travel stories, photos, and tips, as well as engage in the community through comments. This blog is for individuals passionate about traveling and seeking cost-effective ways to explore the world.

The goal of this project is to encourage budget-conscious travel by sharing valuable experiences and tips. The project also aims to build a community where travellers can connect and exchange ideas. The blog focuses on budget travel, emphasizing cost-effective travel experiences and strategies.
Join our community of travellers exploring the world on a budget.

## Technologies Used

List of technologies and frameworks used in the project:
- MongoDB
- Express.js
- React
- Node.js

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/your-repository.git
    ```

2. Navigate to the project directory:

    ```bash
    cd your-repository
    ```

3. Install dependencies for the server and client:

    # Navigate to server directory
    cd api

    ```bash
    # Install server dependencies
    npm install
   
    # Navigate to client directory
    cd client

    # Install client dependencies
    npm install
    ```

5. Set up environment variables:

    - Create a `.env` file in the root directory and add the environment variables "connection URL" which equates to your MongoDB connection string unique to your username and password.

6. Start the development server:

    ```bash
    # Start the server
    npm start

    # Start the client
    npm start
    ```

## Usage

-Once the server and client are running, access the application in your web browser at `http://localhost:3000`.
-Explore different functionalities, such as posting travel experiences, deleting and editing posts. Engage with other travelers by commenting on their posts.

## Folder Structure

|   package-lock.json
|   package.json
|   project-structure.md
|   project-structure.txt
|   README.md
|   
+---api
|   |   .env
|   |   .gitignore
|   |   index.js
|   |   package-lock.json
|   |   package.json
|   |   
|   +---controllers
|   |       posts.js
|   |       
|   +---modules
|   |       postMessage.js
|   |       
|   +---node_modules
|   +---routes
|           posts.js
|           
+---client
|   |   .gitignore
|   |   package-lock.json
|   |   package.json
|   |   README.md
|   |   
|   +---node_modules
|   |           
|   +---public
|   |       favicon.ico
|   |       index.html
|   |       logo192.png
|   |       logo512.png
|   |       manifest.json
|   |       robots.txt
|   |       
|   \---src
|       |   App.js
|       |   index.js
|       |   styles.css
|       |   
|       +---actions
|       |       posts.js
|       |       
|       +---api
|       |       index.js
|       |       
|       +---components
|       |   |   Footer.css
|       |   |   Footer.js
|       |   |   
|       |   +---aboutUs
|       |   |       AboutUs.css
|       |   |       AboutUs.js
|       |   |       
|       |   +---Form
|       |   |       Form.css
|       |   |       Form.js
|       |   |       
|       |   +---Home
|       |   |       Home.js
|       |   |       
|       |   +---navbar
|       |   |       Navbar.js
|       |   |       styles.css
|       |   |       
|       |   +---PostDetails
|       |   |       CommentSection.js
|       |   |       PostDetails.js
|       |   |       styles.css
|       |   |       
|       |   \---Posts
|       |       |   Posts.js
|       |       |   styles.css
|       |       |   
|       |       \---Post
|       |               Post.js
|       |               styles.css
|       |               
|       +---constants
|       |       actionTypes.js
|       |       
|       +---images
|       |       
|       \---reducers
|               index.js
|               posts.js
|               

