import React from "react";
import ReactDOM from "react-dom";
import SiteHeader from "./components/siteHeader";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";

/* note:
      whenever routing configuration changes are made you must restart the development server.
*/
const App = () => {
  return (
    <BrowserRouter>
     <SiteHeader />  
      <Switch>
        <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <Route path="/movies/:id" component={MoviePage} />
        <Route path="/" component={HomePage} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
