import React, {Component} from 'react'
import RegularStudent from './RegularStudent';

export default class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "sagar",
            email: "tesr@gmail.com"
        };
    }


    onClick = () => {
        this.setState({name: "rahyul", email: "tttt@gmail.com"})
    };
    onChange = (e) => {
        this.setState({name: e.target.value})
    };

    render() {

        return (
            <div>
                <input type={"text"} onChange={this.onChange.bind(this)} name={"name"}/>
                <button className={"btn btn-success"} onClick={this.onClick.bind(this)}>Click Me</button>
                <RegularStudent name={this.state.name} email={this.state.email}/>
            </div>)
    }
}