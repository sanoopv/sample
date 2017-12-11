import React, {Component} from 'react';
import {Link} from 'react-router';
import './style.scss';
class App extends Component {
    render() {

        return <div>

            <div>{this.props.children}</div>
        </div>;
    }
}

export default App
