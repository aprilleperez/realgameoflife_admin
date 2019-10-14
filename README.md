
# [In Their Shoes](https://github.com/aprilleperez/realgameoflife_client)

**In Their Shoes** is a Jackbox style game designed as a training tool for nonprofits to lead discussions on privilege and equity. It's a question and answer style game and hosts can either launch the default game or log in and create their own custom game to play.

The game is launched through a *host* device (ideally a device that can be connected to a large monitor or screen) and players join on their mobile devices to play.The *host* device displays the lobby where players wait until everyone has joined, the questions during the game, and the results at the end of the game. Players can choose their avatar, answer the questions, and see their personal results at the end of the game. 

The default game is a basic intro to the idea of privilege and follows five avatars as they encounter typical life events such as graduating high school or starting a new job. Each avatar has stats that affect which responses are available to them. For example, a question might be: 

<i>Q: You've graduated high school! What's next?</i>

And there might be four responses: 

- <i>Get your GED and start a job</i>
- <i>Begin trade school or community college</i>
- <i>Go to a public university for college</i>
- <i>Attend a private college</i>

Every player can see all four responses, however, depending on a player's avatar, it's possible not all responses will be available to them. If a player doesn't have a high enough wealth stat, for example, private college might be unavailable to them. 

Once player's pick their responses, they then see the outcome of their choice. A player who is able to attend public college for example, might see their wealth stat go down but their education stat go up. 

At the end of the game, player's can see how well their avatars did over the course of the game. 

## Playing Real Game of Life
[You can launch a game here!](https://aprilleperez.github.io/realgameoflife_client/)

## Game Breakdown
The game is broken into three sections: 

* Backend - stores user information and all created games.  [Check out the repo here!](https://github.com/cplank/LifeAPI)

* Admin - This is where users can log in to make their own version of the game, and the primary purpose of this project. Here, an admin can make a completely new version of the game based on the experiences and decisions available or unavailable to the communities they serve. <b>You are currently in the repo for the Admin Project</b>

* Player - The main landing page for the project and where a host can begin either a default game, or log in to create their own game. Once a host has started a game (either default or their own), one device serves as the "host" - where players see the lobby, the questions, and the end results of the game. [You can find the repo here!](https://github.com/aprilleperez/realgameoflife_client)


## Create or edit a game

Once logged in, you can **create** a new game, or **edit** one of your existing games.

![dashboard](./public/images/dashboard.PNG)

---

Creating a new game will take you through three stages:

Name your game and pick the *traits* your game will be based around. Because *traits* are the foundation of each game they can't be changed once they're set.

![Create a Game](../public/images/traits.PNG)

Name your avatars, upload pictures, and give each avatar a score of their traits.

![Create Avatars](/public/images/createAvatars.PNG)

Write your questions, choose which traits the question will be weighed on, and which traits will change as a result of the question.

![Create Questions](/public/images/createQuestions.PNG)

---
When you edit an existing game, you're able to edit or delete any of the avatars and change how much of each trait they have.

![Edit Avatars Screen](/public/images/editAvatars.PNG)

You can also edit or delete any of your questions and make changes to the traits the question is weighted on or the traits that change as a result of the question.

![Edit Questions Screen](/public/images/editQuestions.PNG)

## Built with
- [React](https://reactjs.org/)
- [React-Bootstrap](https://react-bootstrap.github.io/)

## Other Dependencies 
- [Axios](https://www.npmjs.com/package/axios)
- [Immutability-helper](https://www.npmjs.com/package/immutability-helper)
- [React Router-DOM](https://www.npmjs.com/package/react-router-dom)

## Platform Breakdown
Working on getting pictures added!

## Authors
* [James Dizon](https://github.com/jamesssd)
* [Aprille Perez](https://github.com/aprilleperez)
* [Carrie Plank](https://github.com/cplank)
* [Abram Thau](https://github.com/Glacian22)

## Roadmap
We are still working on this project! Next steps for development: 

- Adding random events that bring in a layer of luck to the game. 
- Having players complete a success roll in order to achieve their desired response. If unsuccessful, they default to the lower response level. 
- At the end of the game, having "life achievments"
