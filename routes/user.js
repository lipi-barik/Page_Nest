const express = require('express');
const { createUser, loginUser, getUserById, getsingleuserById, updateuserById, deleteuserById } = require('../controller/user');
const router = express.Router();

router.post("/", createUser);
router.post("/login", loginUser);
router.get("/", getUserById);
router.get("/:id", getsingleuserById);
router.put("/:id", updateuserById);
router.delete("/:id", deleteuserById);

module.exports = router;