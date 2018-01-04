import React, { Component } from 'react';
import CardComponent from './CardComponent'
import NewCardForm from './NewCardForm'

class App extends Component {
  state = {
    cards: [
    {question: 'What is React?', answer: 'How should i know'},
    {question: 'What is JavaSript?', answer: "It's part of React, right?? idk"},
    {question: 'Why did I sign up for this class?', answer: "Self-punishment"}
    ]
  }

  addCardHome = (newCard) => {
    this.setState({cards: [...this.state.cards, newCard]})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <h1>Welcome to Flashcards</h1>
        <NewCardForm addCardForm={this.addCardHome}/>
        {this.state.cards.map( item => {
          return(
            <CardComponent key={item.question} card={item} />
          )
        })}
      </div>
    );
  }
}

export default App;
