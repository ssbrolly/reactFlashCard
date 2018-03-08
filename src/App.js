import React, { Component } from 'react';
import Form from "./Form"; 
import Card from "./Card"


class App extends Component {

  state = {
    cards: [] 
  }

  addCard = (card) => {
    const {cards} = this.state; 

    this.setState (
      { cards: [card, ...cards] }
    )
  }

  deleteCard = (question) => {
    const {cards} = this.state;
    let newArr = cards.filter(card => {
      card.answer !== question
    })
    this.setState({cards: newArr})

    
  }



  render() {
    return (
      <div >
        <Form addCard={this.addCard} /> 
        {this.state.cards.map(
          (card,i) => {
            return (
              <Card id={i} question={card.question} answer={card.answer}/>
            )
          }
        )}
      </div>
    );
  }
}

export default App;