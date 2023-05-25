const express = require('express')
require('./services/passportService')

const app = express()

require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => `server listening on port ${PORT}`)