import React, { createContext, useReducer } from 'react';
import {reducer, initialState } from './reducer';
import './App.scss';
import Header from "./components/header";
import Filters from './components/filters';
import Jobs from "./containers/jobs";
import Footer from './components/footer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
      <Context.Provider value={[state, dispatch]}>
          <Header />
          <section className="container bg--light-gray">
              <Filters />
              <Jobs />
          </section>
          <Footer/>
      </Context.Provider>
  );
}

export const Context = createContext(initialState);

export default App;
