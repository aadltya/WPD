import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'



const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
  }
}>()

app.post('/api/v1/user/signup', (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  return c.text('signup')
})

app.post('/api/v1/user/signin', (c) => {
  return c.text('signin')
})

app.post('/api/v1/blog', (c) => {
  return c.text('signin')
})

app.put('/api/v1/blog', (c) => {
  return c.text('signin')
})

app.get('/api/v1/blog/:id', (c) => {
  return c.text('signin')
})

app.get('/api/v1/blog/bulk', (c) => {
  return c.text('signin')
})

export default app
