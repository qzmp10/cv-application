# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Goals
This CV application was part of my self-education through the Odin Project curriculum. The intent was to practice my newly acquired React skills, and to digest the newly introduced concepts of state and props.

## Challenges
There were three main challenges for this project. The first challenge I encountered was that I had to figure out how to pass state from child component to parent component through the use of callback functions which took me a while to figure out. The second encountered challenge was figuring out how to make setState act like a synchronous function, because in some cases some components were displaying previous state and not current state. I solved this proble by adding a callback function after setState which logged the current state on the console and therefore, waited for the state to update before continuing with the synchronous functions that were displaying the state. 
