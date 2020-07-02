import React, { Component } from 'react'
import { render } from 'enzyme'

class QuizQuestionButton extends Component {
  render() {
    return (
      <li><button>{this.props.button_text}</button></li>
    )
  }
}

export default QuizQuestionButton