const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;
const locations = require('./controllers/locations');
const opportunities = require('./controllers/opportunities');
app.use(express.static(__dirname + '/dist'));
app.use('/api/locations',locations)
app.use('/api/opportunities',opportunities);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, ()=>{
    console.log('server started and listening on port : ' + PORT);
});