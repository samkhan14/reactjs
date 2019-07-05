import React from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

class Demo extends React.Component {
    render(){
        return(
            <div className="maindiv">
            <h1>Hello React JS{ this.props.name}</h1>
            <p>React js is a best tool for UI.</p>
            </div>
        )
    }
}
export default Demo;