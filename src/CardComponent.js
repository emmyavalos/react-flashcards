import React from 'react';

class CardComponent extends React.Component {

  state = { flipped: false }

toggleCard = () => {
  this.setState({ flipped: !this.state.flipped })
}

  render() {
    let { card } = this.props
    if (this.state.flipped) {
      //Show back of card
      return(
        <div onClick={this.toggleCard} style={styles.cardBack}>
          <h5 style={styles.cardBackText}>{card.answer}</h5>
        </div>
      )
    } else {
      //Show front of card
    return(
      <div onClick={this.toggleCard} style={styles.cardFront}>
        <h5>{this.props.card.question}</h5>
      </div>
      )
    }
  }
}

const styles = {
  cardFront: {
    marginLeft: 670,
    alignContent: 'center',
    textAlign: 'center',
    backgroundColor: 'lightblue',
    width: 150,
    height: 200,
  },
  cardBack: {
    marginLeft: 1000,
    backgroundColor: 'blue',
    width: 150,
    height: 200
  },
  cardBackText: {
    color: 'white'
  }
}

export default CardComponent
