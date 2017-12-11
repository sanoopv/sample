import React, {Component} from 'react'
import Date from './date.jsx';
const Jobdetail = ({job}) => {
    return (

        <div className='row jobrow'>
            <div className='col-md-8 col-md-offset-1 col-sm-6 col-sm-offset-1'>
                <div className='row'>
                    <div className='col-md-10  col-sm-11 '>{job.jobTitle}</div>
                    <div className='col-md-2  col-sm-1 job_location'>{job.jobLocation}<span className='datemobile pull-right'>October 25</span></div>
                </div>
                <div className='row'>
                    <div className='col-md-12  col-sm-12'>{job.jobDesc}</div>
                </div>
            </div>
            <div className='col-md-1 col-md-offset-1 col-sm-2 col-sm-offset-2 text-right'>
                <Date inputDate={job.jobEndDate}/>
            </div>
        </div>
    )
}

export default Jobdetail

// job = {     jobTitle: '',     jobDesc :'',     jobLocation:'', jobEndDate:''
// }