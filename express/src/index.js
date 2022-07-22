import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './mongo/index.js'
import routes from './routes/index.js'

const app = express()
const port = process.env.PORT || 3000
dotenv.config()

app.use(express.json())

app.use('/api', routes)

connectDb()
  .then(() =>
    app.listen(port, () => {
      console.log(`App is live at port ${port}`)
    })
  )
  .catch((e) => {
    console.log(e)
  })
