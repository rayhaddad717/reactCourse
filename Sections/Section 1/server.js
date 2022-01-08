const express = require('express');
const app = express();
app.use(express.static('./'))
app.get('/', (req, res) => {
    res.sendFile('/index.html', {
        root: './'
    });
})
app.listen(3000, () => {
    console.log('listening on port 3000')
})