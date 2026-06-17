const jwt = require("jsonwebtoken");
let token;
let secret_key = "vdfjvejlnfscdcknckfdnfvkdlfvndflkvnm13345cdsakweandlkc ";

//create a Token
function createToken(req) {
  console.log(req.body);
  return jwt.sign(req.body, secret_key);
}

//verify the token
function verifyToken(req, res, next) {
  console.log(req.headers);
  //1.check the token present in request or not
  const token = req.headers["authorization"];
  console.log(token);
  if (!token) {
    res.send({ ok: false, message: "Token is missing" });
  } else {
    //2.access the token from request
    const tokenValue = token.slice(7);

    //3.verify the token
    jwt.verify(tokenValue, secret_key, (error) => {
      if (error) {
        res.send({ ok: false, token: "Invalid Token" });
      } else {
        //4.if token is valid, then call controller
        next();
      }
    });
  }
}

module.exports = { createToken, verifyToken };
