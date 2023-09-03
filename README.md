# GitHUb User Search

### Instructions
Build a GitHub User Search application using React.js that allows users to search for GitHub users and display their profile information using the GitHub API.

## Requirements

- Create an input field where users can enter a GitHub username.
- Upon submitting the search form, fetch user data from the GitHub API and display the user's profile information.
- Display the following user information:
    Avatar (profile picture)
    Username
    Name
    Bio
    Number of followers
    Number of repositories
- Use the GitHub API to fetch the data. You can use the following endpoint:
    https://api.github.com/users/{username}
- Display an error message if the user is not found or if there's an issue with the API request.
- The UI should be responsive and visually appealing.

## 🛠 Installation & Set Up

1. Install and use the correct version of Node check .nvmrc file 

   ```sh
   nvm install
   ```

2. Install dependencies

   ```sh
   npm install
   ```

3. Add you own Github User Token to make request to the API. Create a .env file in the root and add the following:

   ```sh
   REACT_APP_GITHUB_ACCESS_TOKEN=yourtoken
   ```
   
4. Start the development server

   ```sh
   npm start
   ```

## 🚀 Building and Running for Production

1. Generate a full static production build

   ```sh
   npm run build
   ```