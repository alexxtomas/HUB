const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("data.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
const PORT = 8080
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});