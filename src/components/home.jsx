import React, {Component} from 'react'
import {connect} from 'react-redux';

import Header from './header.jsx';
import Welcomeimage from './welcomeimage.jsx';
import Benefits from './benefits.jsx';
import Opportunities from './opportunities.jsx';

function mapStateToProps(state) {
    return {sampleMessage: state.sampleData}
}
function mapDispatchToProps(dispatch) {
    return {
        updateMessage: () => {
            dispatch({type: 'SAMPLE'})
        }
    }
}

class Home extends Component {
    render() {
        return (
            <div className='container'>
                <Header/>
                <Welcomeimage/>
                <Benefits/>
                <Opportunities/>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);