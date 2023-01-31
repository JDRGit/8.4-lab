# React 8.4 - Activity - Practice What You Learned
In the lesson earlier:

Learned to consume a third-party API in React and invoke the call to that API using the useEffect hook.
Created a "service" module to organize fetchcalls within. 

### In this lab, you'll consume the Star Wars API and render it's data.

```
Set Up
To get set up for this lesson:

Use create-react-appto create a React app named react-star-wars
cd into react-star-wars and open VS Code.
Open a terminal in VS Code.
Start the React Dev Server.
```

- Styling in this lab is secondary to completing the functionality

### 1. Research documentation of SWAPI to find the endpoint for the starshipsresource.

### 2. Create a services/sw-api.jsservice module and ensure that all API/fetch calls are made from this module.

### 3. Use named exports to expose AJAX functionality as needed, e.g., export function getAllStarships() {...}to obtain all starships.

### 4. Obtain all of the starships from the API and render in <App>a card for each starship.

### 5. Cards should contain the text of the starship's name.
