import React, {Component} from 'react';
import Jobdetail from './jobdetail.jsx';
import {connect} from 'react-redux';
import {loadLocations} from '../actions/locationAction'
import Location from './locations.jsx'
import {loadJobDetails} from '../actions/jobAction';
class OpportunityContainter extends Component {
    constructor(){
        super();
        this.changedLocation = this.changedLocation.bind(this);
    }
    componentWillMount() {
       
        this.props.fetchLocations();
        this.props.fetchJobDetails('All');
    }

    componentDidMount = () => {
        //this.props.fetchLocations();
    }
    
changedLocation(location){
this.props.fetchJobDetails(location);
}
    showjobdetails() {
        let JobDetails = [];
        let jobs = this.props.jobsData.jobs;
        for (let index = 0; index < jobs.length; index++) {
            JobDetails.push(<Jobdetail key={index} job={jobs[index]}/>);
        }

        return JobDetails;
    }
    render() {
        console.log(this.props);
        return (
            <div className='opportunities'>
                <div className='row vacanciesrow'>
                    <div className='col-md-8 col-md-offset-1  col-sm-6 col-sm-offset-1 col-xs-offset-1 col-xs-9'>
                        <label>Our vacancies</label>
                    </div>
                    <div className='col-md-2  col-sm-4 col-xs-offset-1 col-xs-9'>
                      <Location locationChanged = {this.changedLocation} locations={this.props.locationsData.locations}/> 
                    </div>
                </div>
                <hr className='lineseparator'/>
                {this.props.jobsData && this.showjobdetails()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {jobsData: state.jobsData, locationsData: state.locationsData}
}
function mapDispatchToProps(dispatch) {
    return {
        fetchLocations: () => {
            dispatch(loadLocations());
        },
        fetchJobDetails: (selectedLocation) => {
            dispatch(loadJobDetails(selectedLocation));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OpportunityContainter);