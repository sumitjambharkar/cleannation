
import "./App.css";
import Services from "./componets/Services";
import React from "react";
import {Switch, Route} from "react-router-dom";
import About from './componets/About';
import Contact from './componets/Contact';
import Pages from './componets/Pages';
import Gallery from './componets/Gallery';
import Home from "./componets/Home";
import Form from './componets/Form';
import ViewMenu from "./componets/ViewMenu";


function App() {
  
  return (
    <>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/service" component={Services} exact />
          <Route path="/gallery" component={Gallery} exact />
          <Route path="/pages" component={Pages} exact /> 
          <Route path="/form" component={Form} exact /> 
          <Route path="/:id" component={ViewMenu} exact /> 
        </Switch>
    </>
  );
}

export default App;
