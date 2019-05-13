# realgameoflife_admin

The Real Game of Life was made as a training tool for nonprofits to lead discussions on how different kinds of privilege can affect their communities and the clients they serve.

The game is a multi-player question and answer game. A host launches a game and players can join either on their mobile devices or another laptop or computer. The host device shows the lobby, questions, and end results, and players answer the questions on their devices.

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

## Built with
- React
- Bootstrap

## Other Dependencies 
- Axios
- Immutability-helper
- Router-DOM

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
- Tracking the success of avatars over the course of many games so players can see how well their avatars tend to fair from game to game. 
