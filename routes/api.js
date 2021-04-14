const router = require("express").Router();
const User = require("../models/user.js");

router.get("/api/users", ({ body }, res) => {
  User.find({})
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/users", ({ body }, res) => {
  User.create(body)
    .then(dbNotebookData => {
      res.json(dbNotebookData);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/users/:id", (req, res) => {
  // User.findById(
  //   { _id: req.params.id },
  // )
  //   .then(dbNotebookData => {
  //     if (!dbNotebookData) {
  //       return res.status(404).json({ message: 'No notebook with this id!' });
  //     }
  //     res.json(dbNotebookData);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.status(500).json(err);
  //   });
});

module.exports = router;
