import * as functions from 'firebase-functions'
import * as express from 'express'
import { addEntry, getAllEntries, updateEntry, deleteEntry } from './entryController'

const app = express()

app.get('/', (req, res) => res.status(200).send('Hey there!'))
app.post('/entries', addEntry)
app.get('/entries', getAllEntries)
app.patch('/entries/:entryId', updateEntry)
app.delete('/entries/:enrryId', deleteEntry)

exports.app = functions.https.onRequest(app)
