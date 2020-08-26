import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 3,
      text: 'foobar'
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
        {this.renderText()}
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

  renderText = () => {
    const { count, text } = this.state
    return new Array(count).fill(<div>{text}</div>)
  }

  // Alternative zu renderText()
  // renderTextWithLoop = () => {
  //   const { count, text } = this.state;
  //   let output = [];

  //   for (let i = 0; i < count; i++) {
  //     output.push(<div>{text}</div>);
  //   }

  //   return output;
  // };
}

export default App
