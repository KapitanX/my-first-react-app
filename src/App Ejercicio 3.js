import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

function NickName(props) {
  return <h3>NickName: {props.nickName}</h3>;
}

class Avatar extends Component {
  render() {
    return <img className={this.props.className} src={this.props.image} alt="avatar" />;
  }
}

class Name extends Component {
  render() {
    return <h1>Name: {this.props.name}</h1>;
  }
}

class Badge extends Component {
  render() {
    return (
      <div>
        <Avatar className={"Luisito"} image={this.props.user.img} />
        <Name name={this.props.user.name} />
        <NickName nickName={this.props.user.nickName} />
      </div>
    );
  }
}

class App extends Component {
  render() {
    var user = {
      name: "Luis Suarez",
      nickName: "Pistolero",
      img:
        "http://cdne.elbocon.pe/thumbs/uploads/img/2017/03/30/luis-suarez-y-su-gran-gesto-jpg_900x0.jpg"
    };

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <Badge user={user} />
        </div>
      </div>
    );
  }
}

export default App;
