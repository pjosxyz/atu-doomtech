exports.getIndex = (req, res, next) => {
  res.render("home/index", {
    pageTitle: "DoomerTech Home",
    path: "/",
  });
};
