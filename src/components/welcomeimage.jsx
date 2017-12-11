import React, {Component} from 'react'
import careerimage from '../images/sample.jpg';
export default class WelcomeImage extends Component {
    render() {
        return (
            <div className='text-center' >
                <img className='img-responsive heroimage' src={careerimage}/>
                { <h4 className='carousel-caption'>Sample Text</h4> }
            </div>
        )
    }
}
