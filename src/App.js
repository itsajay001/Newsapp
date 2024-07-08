import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export class App extends Component {
  state = {
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  render() {
    
    
    return (
      <>
        <BrowserRouter>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
        <Navbar />
          <Routes>
          <Route
              path="/"
              element={
                <News setProgress={this.setProgress} pageSize={5} country={"in"} category={"general"} />
              }/>

            <Route
              path="/business"
              element={
                <News setProgress={this.setProgress} pageSize={5} country={"in"} category={"business"} />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News setProgress={this.setProgress} pageSize={5} country={"in"} category={"entertainment"} />
              }
            />
            <Route
              path="/general"
              element={
                <News setProgress={this.setProgress} pageSize={5} country={"in"} category={"general"} />
              }
            />
            <Route
              path="/health"
              element={<News setProgress={this.setProgress} pageSize={5} country={"in"} category={"health"} />}
            />
            <Route
              path="/science"
              element={
                <News setProgress={this.setProgress} pageSize={5} country={"in"} category={"science"} />
              }
            />
            <Route
              path="/sports"
              element={<News setProgress={this.setProgress} pageSize={5} country={"in"} category={"sports"} />}
            />
            <Route
              path="/technology"
              element={
                <News setProgress={this.setProgress} pageSize={5} country={"in"} category={"technology"} />
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
