function addUser(req, res) {
  const data = req.query.city;
  console.log("user", data);
  res.send("working....!!!!!!!!!");
}

module.exports = { addUser };
