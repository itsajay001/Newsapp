import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import NewsItem from './Components/NewsItem'
export class App extends Component {
  
  render() {
    return (<>
      <Navbar/>
      <News/>
      
      </>
    )
  }
}

export default App
