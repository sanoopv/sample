let express = require('express');
let router = express.Router();
router.get('/', (req, res) => {
    res
        .status(200)
        .send(locations);
})
let locations = [
    {
        id: 1,
        name: 'Gosford',
        state: 'New South Wales'
    },
    {
        id: 2,
        name: 'Sydney',
        state: 'New South Wales'
    },{
        id: 3,
        name: 'New Castle',
        state: 'New South Wales'
    }
]
module.exports = router;