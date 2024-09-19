const express = require('express')
const app = express()

const port = process.env.PORT || 4444

app.get('/', (req, res) => {
    res.send('Welcome to Task Manager App')
})

app.listen(port, () => {
    console.log('Task Manager App')
    console.log(`Server is running on port ${port}`)
})
