// Write your code here
import './index.css'

import {Component} from 'react'

class Stopwatch extends Component {
  state = {timeInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  renderMinutes = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {timeInSeconds} = this.state
    const seconds = Math.floor(timeInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  startButton = () => {
    this.timerId = setInterval(this.runClock, 1000)
  }

  runClock = () => {
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
  }

  stopButton = () => {
    clearInterval(this.timerId)
  }

  restartButton = () => {
    this.setState({timeInSeconds: 0})
    clearInterval(this.timerId)
  }

  render() {
    const displayTime = `${this.renderMinutes()} : ${this.renderSeconds()}`
    return (
      <div className="app-container">
        <div className="stop-watch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="stopwatch-card">
            <div className="stopwatch-card-header">
              <img
                className="clock-image"
                alt="stopwatch"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              />
              <p className="timer-heading">Timer</p>
            </div>
            <h1 className="time-display" data-testid="timer">
              {displayTime}
            </h1>
            <div className="buttons-container">
              <button
                className="start-button button"
                type="button"
                onClick={this.startButton}
                data-testid="button"
              >
                Start
              </button>
              <button
                className="stop-button button"
                type="button"
                onClick={this.stopButton}
                data-testid="button"
              >
                Stop
              </button>
              <button
                className="restart-button button"
                type="button"
                onClick={this.restartButton}
                data-testid="button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
