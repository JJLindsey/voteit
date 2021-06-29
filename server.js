const { restElement } = require('@babel/types');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express()

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//GET test route 
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

//default repsonse for any other request
app.use((req, res) => {
    res.status(404).end();
});

//function to start express.js on PORT 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

