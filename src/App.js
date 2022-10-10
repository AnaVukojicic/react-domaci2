import './App.css';
import AppProvider from './components/context/AppContext';
import SearchProvider from './components/context/SearchContext';
import MoviesTable from './components/moviesTable/MoviesTable';
import SelectedMovie from './components/selectedMovie/SelectedMovie';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <SearchProvider>
          <MoviesTable/>
        </SearchProvider>
        <SelectedMovie/>
      </AppProvider>
      
    </div>
  );
}

export default App;
