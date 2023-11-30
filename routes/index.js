const express = require('express')
const eventsRouter = require('./tvs.router')

function routerApi(app){
    const router = express.Router()

    app.use('/api/v1', router)

    router.use('/tvs', eventsRouter)
}

module.exports = routerApi