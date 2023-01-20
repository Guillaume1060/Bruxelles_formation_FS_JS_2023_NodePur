const url = require("url");
const error404 = require("../views/erro404");
const cinemaRouter = require("./cinema.router");
const homeRouter = require("./home.router");

// /cinema/ugc/film/avatar tester URL
function router(req, res) {
  let urlParse = url.parse(req.url, true);
  let queryString = urlParse.query;
  let urlParams = urlParse.pathname.split("/");
  let methodHttp = req.method;

  homeRouter(urlParams, methodHttp, res);
  cinemaRouter(urlParams, methodHttp, res);

  // res.writeHead(404, "Error : Page not found");
  // res.write(error404());
  // res.end();
}

module.exports = router;
