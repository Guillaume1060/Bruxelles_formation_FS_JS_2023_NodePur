const http = require("http");
const router = require("./routers/router");
const port = process.env.PORT || 3000;

const serverHttp = http.createServer((req, res) => {
  router(req, res);
});

serverHttp.listen(port, console.log(`Server Http Lancé sur le port ${port}`));
