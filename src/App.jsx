import React, { Component } from 'react'
import { TextMultiplier } from './TextMultiplier'

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 3,
      text: 'foobar'
    }
  }

  render() {
    const { text, count } = this.state

    return (
      <div>
        <button onClick={this.decrement} disabled={count <= 0}>
          -
        </button>
        <span>{this.state.count}</span>
        <button onClick={this.increment}>+</button>
        <div>
          <input onChange={this.updateText} value={this.state.text} />
        </div>
        <TextMultiplier text={text} count={count} />
      </div>
    )
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }))
  }

  updateText = event => {
    const value = event.target.value
    this.setState({ text: value })
  }
}

export default App
