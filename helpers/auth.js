const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/");
  }

  const ensureGuest = (req, res, next) => {
    if (req.isAuthenticated()) {
      res.redirect("/tasks");
    } else {
      return next();
    }
  }

    export { ensureAuthenticated, ensureGuest };