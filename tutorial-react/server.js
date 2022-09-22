const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

function isAuthorized(req) {
  //allow users to register/login without token..
  if (req.originalUrl.startsWith('/users')) {
    return true;
  }

  const headers = req.headers;
  const token = headers['authorization']
  if (!token) {
    return false;
  }

  const data = router.db.getState();
  const existingUser = data.users.find(it => it && it.id === token);
  return existingUser !== null && existingUser !== undefined;
}


server.use((req, res, next) => {
  if (isAuthorized(req)) {
    next()
  } else {
    res.sendStatus(401)
  }
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})

// Add to all entities an createdAt field.
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  next()
})

// Custom user creation logic. Also checks for duplicates.
server.use((req, res, next) => {
  if (req.originalUrl === '/users' && req.method === 'POST') {
    const data = router.db.getState();
    const existingUser = data.users.find(it => {
      return it && it.username === req.body.username
    });
    if (existingUser) {
      res.status(500).send("Username already exists");
    } else {
      next();
    }
  } else {
    next();
  }
})

// Use default router
server.use(router)
server.listen(5000, () => {
  console.log('Running mock server');
})