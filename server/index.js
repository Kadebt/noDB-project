const express = require('express')
const PORT = 4001
const displayCtrl = require('./controllers/displayTrickController')
const addCtrl = require('./controllers/addTrickController')

const app = express()
app.use(express.json())
console.log(displayCtrl)

app.get('/api/tricks', displayCtrl.getTricks)
app.put('/api/tricks/:id', displayCtrl.editTrick)
// app.post('/api/tricks', addCtrl.newTrick)
app.delete('/api/tricks/:id', displayCtrl.deleteTrick)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))