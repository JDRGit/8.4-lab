Intro
In the lesson earlier you:

Learned to consume a third-party API in React and invoke the call to that API using the useEffecthook.
Created a "service" module to organize fetchcalls within.
In this lab, you'll consume the Star Wars API and render it's data.

This lab is a DELIVERABLE




Set Up
To get set up for this lesson:

Use create-react-appto create a React app named react-star-wars
cdinto react-star-warsand open VS Code.
Open a terminal in VS Code.
Start the React Dev Server.



Exercises
Styling in this lab is secondary to completing the functionality

Research documentation of SWAPI to find the endpoint for the starshipsresource.
Create a services/sw-api.jsservice module and ensure that all API/fetch calls are made from this module.
Use named exports to expose AJAX functionality as needed, e.g., export function getAllStarships() {...}to obtain all starships.
Obtain all of the starships from the API and render in <App>a card for each starship.
Cards should contain the text of the starship's name.
