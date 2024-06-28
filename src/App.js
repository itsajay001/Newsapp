import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <Navbar />
          <Routes>
          <Route
              path="/"
              element={
                <News pageSize={5} country={"in"} category={"general"} />
              }/>

            <Route
              path="/business"
              element={
                <News pageSize={5} country={"in"} category={"business"} />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News pageSize={5} country={"in"} category={"entertainment"} />
              }
            />
            <Route
              path="/general"
              element={
                <News pageSize={5} country={"in"} category={"general"} />
              }
            />
            <Route
              path="/health"
              element={<News pageSize={5} country={"in"} category={"health"} />}
            />
            <Route
              path="/science"
              element={
                <News pageSize={5} country={"in"} category={"science"} />
              }
            />
            <Route
              path="/sports"
              element={<News pageSize={5} country={"in"} category={"sports"} />}
            />
            <Route
              path="/technology"
              element={
                <News pageSize={5} country={"in"} category={"technology"} />
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
