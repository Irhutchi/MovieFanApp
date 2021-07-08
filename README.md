# Movie Fan App ![](https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg)

The Movie Fan App is a responsive SPA for moview enthusiasts. ![React](https://reactjs.org/) app that allows users to search, view and tag their favourite movies. 
Material UI framework is utilised to style this app.
The data for the app will be retrieved from an open web API, ![The Movie DataBase (TMDb)](https://www.themoviedb.org/).


## Features

- Display a list of current movie releases. For each one, show its poster image, title, release date and viewer rating.
- Display more detailed information on a movie from the above list by clicking its 'More Info ..' button. The details include plot, genres, runtime, revenue, etc.
- Show extracts from written reviews for a movie.
- Show the full review text for a review.
- Add movies to your favourites list.
- Write a review for one of your favourites.

## Installation

To run this project yourself: <br>
![nodeJs](http://nodejs.org/download/) is required to run `npm`.
  1. Clone the repo: `git@github.com:Irhutchi/MovieFanApp.git `
  2. `cd MovieFanApp`
  3. Install packagess: `npm install`
  4. Sign up for TMDB account ![here](https://www.themoviedb.org/signup)
  5. Log in to your account. To get a key, follow this sequence:
  - Settings > API > Create > Click on Request an API > Click "Developer" > Fill in Details
  6. Save your key in the `.env` file.<br>
  * REACT_APP_TMDB_KEY=.... your API key value ...<br>
  * FAST_REFRESH=false
  4. Type the command: `npm start`
  5. Open your browser at: `http://localhost:9000`

The server responds with public.index.html, follwed by relevant assets (transpiled JS, CSS etc.)


**Home Page**
![](https://ict-skills-2020-2.netlify.app/topic02/book-3/img/home.png)
<br>
**Movies can be filtered by genre**
![](https://ict-skills-2020-2.netlify.app/topic02/book-3/img/filtering.png)
<br>
**Movies Detail Page**
![](https://ict-skills-2020-2.netlify.app/topic02/book-3/img/details.png)
<br>
**Extract from all reviews**
![](https://ict-skills-2020-2.netlify.app/topic02/book-3/img/extracts.png)
<br>
**Favourite Page**
![](https://ict-skills-2020-2.netlify.app/topic02/book-3/img/favourites.png)

## Author
- [@irhutchi](https://github.com/Irhutchi)

## Acknowledgements

 - Initial project structure by: [Diarmuid O'Connor](doconnor@wit.ie)
  
  
 
