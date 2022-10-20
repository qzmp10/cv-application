# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Goals
This CV application was part of my self-education through the Odin Project curriculum. The intent was to practice my newly acquired React skills, and to digest the newly introduced concepts of state, props and render lists.

## Challenges
There were three main challenges for this project. The first challenge I encountered was that I had to figure out how to pass state from child component to parent component through the use of callback functions which took me a while to figure out. 

The second encountered challenge was figuring out how to make setState act like a synchronous function, because in some cases some components were displaying previous state and not current state. I solved this problem by adding a callback function after setState which logged the current state on the console and therefore, waited for the state to update before continuing with the synchronous functions that were displaying the state. 

The third challenge was to figure out how to display a user-uploaded file in an <img> tag from state. For this challenger, I found out that the value attribute did not work for file inputs, and that I had to use a files attribute. I then found out that the files attribute gave back a file object, and that to transform this object into a URL, I would need to pass the object through a URL.createObjectUrl() function. This allowed me to succesfully pass a url to the state, and use this url as a src attribute for my <img> tag, which displayed the user-uploaded image.
