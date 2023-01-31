const homeView = require("../views/formView");
const getForm = require("../views/formView");
const getAdmin = require("../views/admin.views");
const { parse } = require("querystring");
const fs = require("fs");

function homeRouter(urlParams, methodHttp, res, req) {
  if (methodHttp == "GET") {
    res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });

    if (urlParams[0] == "" && urlParams[1] == "contact") {
      res.write(getForm());
      res.end();
    }

    if (urlParams[0] == "" && urlParams[1] == "admin") {
      res.write(getAdmin());
      res.end();
    }
  } else if (methodHttp == "POST") {
    if (urlParams[0] == "" && urlParams[1] == "contact") {
      let body = "";
      req.on("data", (buffer) => {
        body += buffer.toString();
      });
      req.on("end", () => {
        let okBody = parse(body);
        fs.appendFile(
          "./forms/forms",
          `Email: ${okBody.email}, Texte: ${okBody.message} `,
          (error) => {
            if (error != null) {
              res.statusCode = 404;
              res.end();
              return;
            }
          }
        );
        res.end();
      });
    }
  } else if (methodHttp == "PATCH") {
  } else if (methodHttp == "DELETE") {
  }
}

module.exports = homeRouter;
