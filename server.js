const express = require('express')
const port = 4563

const app = express();

// import routes




app.use(express.json())

app.use('/user', require('./try'))

app.listen(port, () => console.log(`listeinig on port ${port}`))