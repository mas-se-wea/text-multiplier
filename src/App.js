import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      text: ''
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.decrement} disabled={this.state.count <= 0}>
          -
        </button>
        <span>{this.state.count}</span>
        <button onClick={this.increment}>+</button>
        <div>
          <input onChange={this.updateText} value={this.state.text} />
        </div>
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
