import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { actionsRouter } from './actions/donate'

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 8787

// Middleware
app.use(cors())
app.use(bodyParser.json())

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ ok: true })
})

// Actions routes
app.use('/api/actions', actionsRouter)

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
  console.log(`📊 Health check: http://localhost:${PORT}/health`)
  console.log(`🎯 Actions: http://localhost:${PORT}/api/actions/donate`)
})
