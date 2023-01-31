const url = require("url");
const homeRouter = require("../routers/home.router");
// const error404 = require("../views/erro404");

// /cinema/ugc/film/avatar tester URL
function router(req, res) {
  let urlParse = url.parse(req.url, true);
  let queryString = urlParse.query;
  let urlParams = urlParse.pathname.split("/");
  let methodHttp = req.method;

  homeRouter(urlParams, methodHttp, res, req);

  // res.writeHead(404, "Error : Page not found");
  // res.write(error404());
  // res.end();
}

module.exports = router;
