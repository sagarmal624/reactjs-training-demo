import React, {Component} from 'react'
import RegularStudent from './RegularStudent';

export default class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "sagar",
            email: "tesr@gmail.com"
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(name, email) {
        this.setState({name: name, email: email})
    }

    // onClick = () => {
    //     this.setState({name: "rahyul", email: "tttt@gmail.com"})
    // };

    // onChange(e) {
    //     this.setState({name: e.target.value})
    // };
    handleChange = (e, name) => {
        this.setState({name: name})
    };

    render() {

        return (
            <div>
                <input type={"text"} onChange={e => this.handleChange(e, "ooooo@")} name={"name"}/>
                <button className={"btn btn-success"}
                        onClick={this.handleClick.bind(this, "sagar", "sagar@gmail.com")}>Click Me
                </button>
                <RegularStudent name={this.state.name} email={this.state.email}/>
            </div>)
    }
}