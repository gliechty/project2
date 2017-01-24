# project2

## Trello: https://trello.com/b/ALQVLSxp/project-2
## Balsamiq: https://project1990.mybalsamiq.com/projects/project2

## Heroku App: https://fathomless-spire-40961.herokuapp.com/
## Github Link: https://github.com/gliechty/project2

### Description: The Yoda Meme generator (i.e. Memer) is a full-stack app inteded for users to easily and intuitively generate memes based on text and chosen image, save their favorite memes, and share them on their social networks.

User input is formatted as a request to a third party API - the Ron Reiter meme generator (https://market.mashape.com/ronreiter/meme-generator#) - for consumption. A user enters the top and bottom text for the meme, and selects a photo and saves the image with a title. This is entered into a mongodb database, and can be accessed via a get request on the ./home/meme page, where the json object returned from the db is rendered again as a saved meme. 

### future goals:

At the moment, each meme is saved and returned upon hitting the show route, but is not being rendered as it was prior (on the main page). Also, the user id and saved memes are not linked in the database, so displayed memes are not user specific. A plugin to allow a user to share a meme via common social networks via a simple click would be a good addition.
