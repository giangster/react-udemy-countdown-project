import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    deadline: " your birthday!",
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  inputHandler = event => {
    const dateFormat = { year: "numeric", month: "long", day: "2-digit" };
    this.setState({
      deadline: new Date(event.target.value).toLocaleString("en-US", dateFormat)
    });
  };

  componentDidMount() {
    setInterval(() => this.countDown(this.state.deadline), 1000);
  }

  countDown(date) {
    var distance = Date.parse(date) - Date.parse(new Date());
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    this.setState({
      days,
      hours,
      minutes,
      seconds
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <h2>Let's count down to {this.state.deadline} &#9752;</h2>
          <img
            src="https://img.jakpost.net/c/2016/08/18/2016_08_18_9979_1471497895._large.jpg"
            style={{ width: 300, height: 200, margin: 20 }}
            alt="your birthday cake this year..."
          />
          <div>
            <span>Only </span>
            <div className="count-days">{this.state.days} days</div>
            <div className="count-hours">{this.state.hours} hours</div>
            <div className="count-minutes">{this.state.minutes} minutes</div>
            <div className="count-seconds">{this.state.seconds} seconds</div>
            <span> till your birthday!</span>
          </div>
          <input
            placeholder="enter new date"
            type="date"
            onChange={this.inputHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
