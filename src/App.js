import React, { Component } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Input from './components/Input';
import Cv from './components/Cv';

class App extends Component {
  render() {
    return <div>
      <Header></Header>
      <Input></Input>
      <Cv></Cv>
      <Footer></Footer>

    </div>
  }
}

export default App;
