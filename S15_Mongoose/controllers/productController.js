function getCategoryData(req, res) {
  const data = req.query.category;
  console.log(data);
  res.send("category data sent to client");
}

module.exports = { getCategoryData };
