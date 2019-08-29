const express = require('express')
const bodyParser = require('body-parser')
/* model */
const { User, Blog, Tag } = require('./models')
const app = express()
app.use(bodyParser.json())
const routes = require('./router/router');



// API ENDPOINTS
routes(app);


const port = 8080
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})