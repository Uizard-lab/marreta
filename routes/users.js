const router = require("express").Router();
const User = require("../models/User");
const { json } = require("body-parser");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (err) {
    return res.json(err);
  }
});

router.post("/", async (req, res) => {
  var user = new User({
    username: req.body.username,
    email: req.body.email,
  });

  try {
    const savedUser = await user.save();
    return res.json(savedUser);
  } catch (err) {
    return res.json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    return res.json(user);
  } catch (err) {
    return res.status(400).json("Error: " + err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const removedUser = await User.findByIdAndDelete(req.params.id);
    return res.json(removedUser);
  } catch (err) {
    return res.status(400).json("Error: " + err);
  }
});

router.patch("/patch/:id", async (req, res) => {
  try {
    const user = await User.updateOne(
      { _id: req.params.id },
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
        },
      }
    );
    return res.json(user);
  } catch (err) {
    return res.json(err);
  }
});

module.exports = router;
