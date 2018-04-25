import React from "react";
import Details from "./views/Details";
import ContentFeed from "./views/ContentFeed";
import TitleBar from "./components/TitleBar";
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import data from './data/sampleData.json';

class App extends React.Component {
  state = {
    mail : data,        // Loading the data from json
    current: undefined  // Maintains the index of the selected card
  }

  // Handler function that allows cards to to be selected
  // The index is passed by the child in order to update the state
  // and trigger a rerender of the components
  updateCurrent = (index) => {
    this.setState({
      current: index
    });
  }

  render() {
    return (
      <div>
        <TitleBar updateFunc={this.updateCurrent} /> {/* The header needs the handler to allow the user to return home */}
        <TransitionGroup>
          {this.state.current === undefined && <CSSTransition classNames="cardTrans" timeout ={{ enter: 300, exit: 0 }}><ContentFeed mail={this.state.mail} updateFunc={this.updateCurrent} /></CSSTransition>}
        </TransitionGroup>
        <TransitionGroup>
            {this.state.current !== undefined && <CSSTransition classNames="cardTrans" timeout ={{ enter: 300, exit: 0 }}><Details mail={this.state.mail} index={this.state.current} /></CSSTransition>}
        </TransitionGroup>
      </div>
    );
  }
}

export default App;