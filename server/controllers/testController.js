exports.test = (req, res) => {
  console.log(req.user);
  res.json({ message: "Test API called successfully!" });
};
