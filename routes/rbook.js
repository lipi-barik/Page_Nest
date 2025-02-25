const express = require('express');
const { addbook, getbookById, getsinglebookById, deletebookById, updatebookById, wishlistbyId } = require('../controller/cbook');

const router = express.Router();

router.post("/",addbook);
router.get("/",getbookById);
router.get("/:id",getsinglebookById);
router.put("/:id",updatebookById);
router.put("/:id",wishlistbyId)
router.delete("/:id",deletebookById);

module.exports =router;