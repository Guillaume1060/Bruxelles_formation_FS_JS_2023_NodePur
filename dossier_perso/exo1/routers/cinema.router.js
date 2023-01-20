const getKinepolisFilms = require("../views/kinepolisView");
const getUGCfilms = require("../views/UGCView");

function cinemaRouter(urlParams, methodHttp, res) {
  if (methodHttp == "GET") {
    if (urlParams[1] == "UGC") {
      res.write(getUGCfilms());
      res.end();
    }
    if (urlParams[1] == "Kinepolis") {
      res.write(getKinepolisFilms());
      res.end();
    }
  }
}
module.exports = cinemaRouter;
