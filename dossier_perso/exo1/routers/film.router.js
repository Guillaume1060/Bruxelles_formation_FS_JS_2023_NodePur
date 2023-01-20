function filmRouter(urlParams, methodHttp, res) {
  if (methodHttp == "GET") {
    console.log(urlParams);
    if (urlParams[1] == "UGC") {
      if (urlParams[2] == 1) {
        console.log("Get out / seance 1 16h15");
        //Get out / seance 1 16h15
      }
      if (urlParams[2] == 2) {
        //Get out / seance 2 18h15
      }
      if (urlParams[2] == 3) {
        //Get out / seance 3 20h15
      }
      if (urlParams[2] == 4) {
        //Cast away / seance 4 16h15
      }
      if (urlParams[2] == 5) {
        //Cast away / seance 5 18h15
      }
      if (urlParams[2] == 6) {
        //Cast away / seance 6 20h15
      }
    }
    if (urlParams[1] == "Kinepolis") {
      // IDEM UGC
    }
  }
}
module.exports = filmRouter;
