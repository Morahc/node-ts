import express from 'express'
import router from './routes'

const app = express()
const PORT = 3001

app.use('/api', router)

app.get('/', (req, res) => {
  res.send('Main index route')
})

app.listen(PORT, () => {
  console.log('Server running')
})

export default app
