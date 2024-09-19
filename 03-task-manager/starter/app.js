console.log('Task Manager App')

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to Task Manager App')
})

const port = process.env.PORT || 4444

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
