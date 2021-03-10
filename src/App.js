import React from 'react';
import axios from 'axios';
import './App.css';
import PortfolioItem from './components/PortfolioItem'

const exampleEntries = [
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

class App extends React.Component {
    state = {
        data:[]
    }

    async componentDidMount() {
      console.log("ComponentDidMount");
      const portfolioResponse = await axios({
         method:'Get',
         url: 'http://localhost:1337/portfolios/'
      })

      const {data} = portfolioResponse
      console.log("ComponentDidMount data", data)
      this.setState({data})
    }

    render() {
      return (
        <div className="App">
          {
            this.state.data.map(entry => (
              <PortfolioItem title={entry.title} description={entry.description} background={entry.background} />
            ))
          }
        </div>
      );
    }
}

export default App;
