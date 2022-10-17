import './App.css';
import AppProvider from './context/AppContext';
import MoviesTable from './components/moviesTable/MoviesTable';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <MoviesTable/>
      </AppProvider>
      
    </div>
  );
}

export default App;
