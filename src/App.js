import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    deadline: " your birthday!",
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    countable: true
  };

  inputHandler = event => {
    const dateFormat = { year: "numeric", month: "long", day: "2-digit" };
    this.setState({
      deadline: new Date(event.target.value).toLocaleString("en-US", dateFormat)
    });
  };

  countDownNow = event => {
    setInterval(() => this.countDown(this.state.deadline), 1000);
    this.setState({
      countable: true
    });
  };

  leading0(num) {
    return num < 10 ? "0" + num : num;
  }

  countDown(date) {
    var distance = Date.parse(date) - Date.parse(new Date());
    if (distance < 0) {
      clearInterval(this.countDownNow);
      this.setState({ countable: false });
    }
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
          <h1>Let's count down to {this.state.deadline} &#9752;</h1>
          <img
            src="https://img.jakpost.net/c/2016/08/18/2016_08_18_9979_1471497895._large.jpg"
            style={{ width: 350, height: 250, margin: 20 }}
            alt="your birthday cake this year..."
          />
          {this.state.countable ? (
            <div>
              <span>Only </span>
              <div className="count-days">
                {this.leading0(this.state.days)} days
              </div>
              <div className="count-hours">
                {this.leading0(this.state.hours)} hours
              </div>
              <div className="count-minutes">
                {this.leading0(this.state.minutes)} minutes
              </div>
              <div className="count-seconds">
                {this.leading0(this.state.seconds)} seconds
              </div>
              <span> till your birthday!</span>
            </div>
          ) : (
            <div>
              OOPS! You already had your birthday this year! How about counting
              down to the next one?{" "}
              <span
                role="img"
                aria-label="SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES"
              >
                &#128518;
              </span>
            </div>
          )}
          <input
            placeholder="enter new date"
            type="date"
            onChange={this.inputHandler}
          />
          <button onClick={this.countDownNow}>Let's count!</button>
        </div>
      </div>
    );
  }
}

export default App;
