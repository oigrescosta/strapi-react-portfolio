import './App.css';
import PortfolioItem from './components/PortfolioItem'

const data = [
  {
      "id": 1,
      "title": "Everything is gold",
      "description": "Life is Gold.",
      "background": "#ffd700",
      "published_at": "2021-03-09T21:57:39.021Z",
      "created_at": "2021-03-09T21:52:26.940Z",
      "updated_at": "2021-03-09T22:03:50.442Z"
  },
  {
      "id": 2,
      "title": "Red is passion",
      "description": "Red is fire",
      "background": " #ff0000",
      "published_at": "2021-03-09T21:57:44.801Z",
      "created_at": "2021-03-09T21:53:42.878Z",
      "updated_at": "2021-03-09T22:03:57.890Z"
  }
]

function App() {
  return (
    <div className="App">
      {
        data.map(entry => (
          <PortfolioItem title={entry.title} description={entry.description}/>
        ))
      }
    </div>
  );
}

export default App;
