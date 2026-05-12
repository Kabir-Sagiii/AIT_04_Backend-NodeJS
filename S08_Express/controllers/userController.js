function signin(req, res) {
  //accessing the data through request query parameter
  const value = req.query.gender;
  console.log(value);

  res.send("Sign-In is Working");
}

function signup(req, res) {
  //accessing the data through request body
  const data = req.body;
  console.log(data);
  res.send("Sign-Up is Working");
}

function getAllUsers(req, res) {
  //accessing the data through request path parameter
  const myId = req.params.id;
  console.log(myId);
  res.send("users data....!!!!");
}

module.exports = { signin, signup, getAllUsers };
