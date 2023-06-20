const express = require("express");
const router = express.Router();

// ----- Importing item_api controller ----- //
 const itemApi = require('../../controllers/api/item_api');

router.get('/items', itemApi.getItem);
router.get('/items/:id', itemApi.getItemById);
router.post('/items', itemApi.createItem);
router.put('/items/:id', itemApi.updateItem);
router.delete('/items/:id', itemApi.deleteItem);

module.exports = router;