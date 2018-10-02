import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

class Clock extends React.Component {

  state = {
    date: new Date()
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {date: new Date()};
  // }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  stopTime = () => {
    clearInterval(this.timerID)
  }

  startTime = () =>{
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  render() {
    return (
      <div className="container">
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        <div className="buttonContainer">
          <button onClick={this.stopTime}>Pause</button>
          <button onClick={this.startTime}>Start</button>
        </div>
      </div>
    )
  }

}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
)
