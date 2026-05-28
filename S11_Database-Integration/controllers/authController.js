function createAccount(req, res) {
  const user = req.body;
  console.log(user);
  res.send("Account Created");
}

module.exports = { createAccount };
