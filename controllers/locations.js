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
        name: 'Bangalore',
        state: 'Karnataka'
    },
    {
        id: 2,
        name: 'Delhi',
        state: 'Delhi'
    },{
        id: 3,
        name: 'Mysore',
        state: 'Karnataka'
    }
]
module.exports = router;