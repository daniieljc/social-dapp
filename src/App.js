import React, { Component } from "react";
import getWeb3 from "./getWeb3";
import * as Post from "./Post.json";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      account: undefined,
      contract: undefined,
    };
  }

  async componentDidMount() {
    this.web3 = await getWeb3();

    window.ethereum.enable();

    this.setState({
      contract: new this.web3.eth.Contract(
        Post.abi,
        "0xAA99c3fA31627Fc1A0c9C8036331780B46832AE0"
      ),
    });

    const accounts = await this.web3.currentProvider.request({
      method: "eth_requestAccounts",
    });

    this.setState({
      account: accounts[0],
    });

    let value = await this.state.contract.methods.getValue().call();

    console.log(value);
  }

  async sumar() {
    this.state.contract.methods.increase().send({
      from: this.state.account,
      gas: 0,
    });
  }

  render() {
    return (
      <>
        <p>{this.state.account}</p>
        <button onClick={this.sumar.bind(this)}>Sumar 1</button>
      </>
    );
  }
}
