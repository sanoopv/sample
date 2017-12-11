let express = require('express');
let router = express.Router();
router.get('/', (req, res) => {
    let location = req.query.location || 'ALL';
    let returnList = jobs;
    if (location !== 'All') {
        returnList = jobs.filter((item) => {
            return item.jobLocation === location;
        })
    }
    res
        .status(200)
        .send(returnList);
})
let jobs = [
    {
        jobTitle: 'SDE 1',
        jobDesc: 'Job desc for SDE1',
        jobLocation: 'Delhi',
        jobEndDate: '2017-10-30'
    }, {
        jobTitle: 'SDE 2',
        jobDesc: 'Job desc for SDE2',
        jobLocation: 'Delhi',
        jobEndDate: '2017-10-30'
    }, {
        jobTitle: 'SDE 1',
        jobDesc: 'Job desc for SDE1',
        jobLocation: 'Bangalore',
        jobEndDate: '2017-10-30'
    }, {
        jobTitle: 'SDM',
        jobDesc: 'Job desc for SDM',
        jobLocation: 'Delhi',
        jobEndDate: '2017-10-31'
    }
]
module.exports = router;