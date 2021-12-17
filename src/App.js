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
        "0xaEe977964892acc600452aE6F7bF160a9c20423F"
      ),
    });

    const accounts = await this.web3.currentProvider.request({
      method: "eth_requestAccounts",
    });

    this.setState({
      account: accounts[0],
    });

    console.log(this.state.contract.methods.value().call());
  }

  async increase() {
    this.state.contract.methods
      .increase("0xaEe977964892acc600452aE6F7bF160a9c20423F")
      .send({
        from: this.state.account,
      });
  }

  render() {
    return (
      <>
        <p>{this.state.account}</p>
        <button onClick={this.increase.bind(this)}>Sumar 1</button>
      </>
    );
  }
}
