import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const formatDate = (date) => {
  return date.toLocaleDateString();
}

const Avatar = (props) => {
  return (
    <img
      className="Avatar"
      src={props.avatarInfo.avatarUrl}
      alt={props.avatarInfo.name}
    />
  );
}

const UserInfo = (props) => {
  return (
    <div className="UserInfo">
      <Avatar avatarInfo={props.userInfo} />
      <div className="UserInfo-name">
        {props.userInfo.name}
      </div>
    </div>
  );
}

const Comment = (props) => {
  return (
    <div>
      <UserInfo userInfo={props.comment.author} />
      <div className="Comment">
        <div className="Comment-text">
          {props.comment.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.comment.date)}
        </div>
      </div>
    </div>
  )
}

class App extends Component {
  render() {
    const comment = {
      date: new Date(),
      text: "I hope you enjoy learning React!",
      author: {
        name: "Hello Kitty",
        avatarUrl: "http://placekitten.com/g/64/64"
      }
    };

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <Comment comment={comment} />
        </div>
      </div>
    );
  }
}

export default App;
