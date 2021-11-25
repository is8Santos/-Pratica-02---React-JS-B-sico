
import React, { Component } from "react";

import {Input} from "./input"
import {OutputUpper} from "./output" 

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        texto: "" };
    }
    onChange(e) {
        const { value } = e.target;
        this.setState({
        texto: value.toUpperCase() });
    }
    render() {
        return (
        <div>
            <OutputUpper texto={this.state.texto} />
            <Input onChange={e => this.onChange(e)}  value={ this.setState.texto} placeholder= "Digite seu texto aqui..." />
        </div> 
        );
    }
}
export default Main;