About

A SPA built with React and Redux that displays products, saves products to carts, and allows users to make pseudo-purchases. This is built over a backend rails api that uses bcrypt for user authentication. Product details come from a restful api provided by RapidAPI. 

Installation
```
* Clone this repository
$ git clone https://github.com/isaiah3031/movie_app

# Go into the repository
$ cd movie_app

# Install dependencies
$ yarn install
$ bundle install

# Run the backend 
$ rails s -p 3001

# Open a new console(This project requires two servers)

# Go into the frontend folder
$ cd movie_app/client

# Add your RapidAPI Key
$ code .env
// REACT_APP_API_KEY=your_api_key 
// Example:
// REACT_APP_GOOGLE_API_KEY=123456

# install frontend dependencies 
$ yarn install

# Run the frontend 
$ PORT=3000 yarn start
```

* Credits
    - [Search Icon](iconfinder.com)
    - [User Icon](iconfinder.com)
    - [Couch_Icon](https://www.flaticon.com/free-icon/armchair_4169217?term=couch&page=1&position=55&page=1&position=55&related_id=4169217&origin=search)
    - [Create React App](https://create-react-app.dev/)
    - [Movie_API](https://www.themoviedb.org/)
