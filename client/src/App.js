import logo from './logo.svg';
import './App.css';
import Root from './frontend/components/root'
import {store} from './frontend/store/store' 
import {fetchMoviesByGenre} from './frontend/actions/movie_actions'
import {fetchGenreList} from './frontend/util/movie_api_util'
window.fetchGenreList = fetchGenreList;
window.fetchMoviesByGenre = fetchMoviesByGenre;
function App() {
  // window.getState = store.getState
  // window.d = store.dispatch
  return (
    <div className="App">
      <Root store={store}/>
    </div>
  );
}

export default App;
