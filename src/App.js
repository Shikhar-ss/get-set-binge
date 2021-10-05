import { useReducer } from 'react'
import './App.css';
import SearchBar from "./components/SearchBar/SearchBar"
import SearchResult from "./components/SearchResult/SearchResult"
import { makeStyles } from "@mui/styles"
import React, { Component } from 'react'
import "./api"

const useStyle = makeStyles({
  root:
  {
    container: {},
  }
})

function App() {

  const className = useStyle()

  return (
    <div>

    </div>
  )
}

// export class App extends Component {

//   const useStyle = makeStyles({
//     root: {

//     }
//   })
//   render() {
//     console.log('STATE_: ', this.props)
//     return (
//       <div className="App">
//         <SearchBar />
//         <SearchResult />
//       </div>
//     )
//   }
// }

export default App
