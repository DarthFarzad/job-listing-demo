import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from "./components/header";
import Footer from './components/footer';
import Jobs from "./containers/jobs";

function App() {
  return (
      <React.Fragment>
          <Header />
          <Jobs />
          <Footer/>
      </React.Fragment>
  );
}

export default App;
