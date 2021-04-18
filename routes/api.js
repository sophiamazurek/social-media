const router = require("express").Router();
const Thoughts = require("../models/thoughts.js");
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
  User.findById(
    { _id: req.params.id },
  )
    .then(dbNotebookData => {
      if (!dbNotebookData) {
        return res.status(404).json({ message: 'No notebook with this id!' });
      }
      res.json(dbNotebookData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//put /api/users/:id
router.post("/api/users/:id", ({ params, body }, res) => {
  User.findOneAndUpdate({ _id: params.id }, body, { new: true })
    .then(dbNote => {
      if (!dbNote) {
        res.json({ message: 'No note found with this id!' });
        return;
      }
      res.json(dbNote);
    })
    .catch(err => {
      res.json(err);
    });
});
//delete /api/users/:id
router.delete("/api/users/:id", ({ params }, res) => {
  User.findOneAndDelete({ _id: params.id })
    .then(dbNote => {
      if (!dbNote) {
        res.json({ message: 'No note found with this id!' });
        return;
      }
      res.json("object deleted!!");
    })
    .catch(err => {
      res.json(err);
    });
});

// get /api/thoughts
router.get("/api/thoughts", ({ body }, res) => {
  Thoughts.find({})
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//get byid /api/thoughts
router.get("/api/thoughts/:id", (req, res) => {
  Thoughts.findById(
    { _id: req.params.id },
  )
    .then(dbNotebookData => {
      if (!dbNotebookData) {
        return res.status(404).json({ message: 'No notebook with this id!' });
      }
      res.json(dbNotebookData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
//post /api/thoughts
router.post("/api/thoughts", ({ body }, res) => {
  Thoughts.create(body)
    .then(dbNotebookData => {
      res.json(dbNotebookData);
    })
    .catch(err => {
      res.json(err);
    });
});

//put /api/thoughts
router.put("/api/thoughts/", ({ params, body }, res) => {
  Thoughts.findOneAndUpdate({ _id: params.id }, body, { new: true })
    .then(dbNote => {
      if (!dbNote) {
        res.json({ message: 'No note found with this id!' });
        return;
      }
      res.json(dbNote);
    })
    .catch(err => {
      res.json(err);
    });
  });
//delete /api/thoughts
router.delete("/api/thoughts/", ({ params }, res) => {
  Thoughts.findOneAndDelete({ _id: params.id })
    .then(dbNote => {
      if (!dbNote) {
        res.json({ message: 'No note found with this id!' });
        return;
      }
      res.json(dbNote);
    })
    .catch(err => {
      res.json(err);
    });
});


// delete /api/users/:userId/friends/:friendId
router.delete("/api/users/:userID/friends/friendId", ({ params }, res) => {
  User.findOneAndDelete({ _id: params.id })
    .then(dbNote => {
      if (!dbNote) {
        res.json({ message: 'No note found with this id!' });
        return;
      }
      res.json(dbNote);
    })
    .catch(err => {
      res.json(err);
    });
});

//post /api/users/:userId/friends/:friendId
router.post("/api/users/:userId/friends/:friendId", ({ body }, res) => {
  User.findOneAndUpdate({ _id: params.userid }, body, { new: true })
    .then(dbNote => {
      if (!dbNote) {
        res.json({ message: 'No note found with this id!' });
        return;
      }
      res.json(dbNote);
    })
    .catch(err => {
      res.json(err);
    });
});

// User.findOneAndUpdate({ _id: params.userid }, {$set:{friends: params.friendId}}, {new: true}, (err, doc) => {
//   if (err) {
//       console.log("Something wrong when updating data!");
//   }

//   console.log(doc);
// });

//post /api/thoughts/:thoughtId/reactions
router.post("/api/thoughts/:thoughtId/reactions/", ({ params }, res) => {
  Thoughts.findOneAndUpdate({ _id: params.id })
    .then(dbNote => {
      if (!dbNote) {
        res.json({ message: 'No note found with this id!' });
        return;
      }
      res.json(dbNote);
    })
    .catch(err => {
      res.json(err);
    });
});

//delete /api/thoughts/:thoughtId/reactions
router.delete("/api/thoughts/:thoughtId/reactions/", ({ params }, res) => {
  Thoughts.findOneAndDelete({ _id: params.id })
    .then(dbNote => {
      if (!dbNote) {
        res.json({ message: 'No note found with this id!' });
        return;
      }
      res.json(dbNote);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
