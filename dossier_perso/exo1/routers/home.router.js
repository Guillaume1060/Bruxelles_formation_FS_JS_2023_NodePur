const homeView = require("../views/home.views");

function homeRouter(urlParams, methodHttp, res) {
  console.log("homeRouter");

  if (methodHttp == "GET") {
    res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });

    if (urlParams[0] == "" && urlParams[1] == "") {
      res.write(homeView());
      res.end();
    }
  } else if (methodHttp == "POST") {
  } else if (methodHttp == "PATCH") {
  } else if (methodHttp == "DELETE") {
  }
}

module.exports = homeRouter;
