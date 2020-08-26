import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  render() {
    return (
      <div>
        <button onClick={this.decrement} disabled={this.state.count <= 0}>
          -
        </button>
        <span>{this.state.count}</span>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }))
  }
}

export default App
