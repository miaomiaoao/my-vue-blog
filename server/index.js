import Koa from 'koa'
import { Nuxt, Builder } from 'nuxt'
import mongoose from 'mongoose'
import router from './interface/user'
import bodyParser from 'koa-bodyparser'

async function start() {
  const app = new Koa()
  const host = process.env.HOST || '127.0.0.1'
  const port = process.env.PORT || 5000

  // Import and Set Nuxt.js options
  const config = require('../nuxt.config.js')
  config.dev = !(app.env === 'production')

  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)
  // 数据库的连接
  mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true})

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  app.use(bodyParser({
    extendTypes: ['json', 'form', 'text']
  }))
  app.use(router.routes()).use(router.allowedMethods())
  app.use(ctx => {
    ctx.status = 200
    ctx.respond = false // Mark request as handled for Koa
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()
