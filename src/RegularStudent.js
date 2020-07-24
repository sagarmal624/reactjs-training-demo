import React, {Component} from 'react';

export default class RegularStudent extends Component {
    componentWillMount() {
        console.log("Called component Will Mount");
    }

    componentDidMount() {
        console.log("Called component Did Mount");
    }

    componentWillReceiveProps(newprops) {
        console.log("componentWillReceiveProps....." + newprops);
    }

    shouldComponentUpdate(newProps, newState) {
        return true;
    }

    componentWillUpdate(newProps, newState) {
        console.log("component will upodate method")
    }

    componentDidUpdate() {
        console.log("Componnet Did Update");
    }

    componentWillUnmount() {
        console.log("Remove Dom Elements")
    }

    render() {
        console.log("Render Method");

        return (<div>
            {this.props.name} {this.props.email}
        </div>)
    }
}