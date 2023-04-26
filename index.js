const http = require('node:http');

const app = http.createServer((req, res) => {
  const { headers, method, url } = req
  console.log(`[${new Date().toISOString()}]: [${method}] - ${url}`)
  res.end(JSON.stringify({ headers, method, url }))
})

const port = process.env.PORT || 3000

const server = app.listen(port, () => console.log(`Listening on port ${port}`))

function shutdown() {
  server.close(() => console.log('shutting down...'))
}

process.on('SIGINT', () => shutdown())
process.on('SIGTERM', () => shutdown())
