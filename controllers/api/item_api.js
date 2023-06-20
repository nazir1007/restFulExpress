// ----- importing models ----- //
const Item = require('../../models/items');

// ----- importing logger file ----- //
const logger = require('./logger')

/*
 Route:          /api/items
 Description:    Create an Item
 Method:         POST
 */

// http://localhost:6060/api/items
module.exports.createItem = async (req, res) => {

  const newItem = req.body; 
  Item.create(newItem)
    .then((itemCreated) => {
      res.status(201).json(itemCreated);
      logger.info('Item created successfully.');
    })
    .catch((error) => {
      res.status(500).json({ 
        error: 'Failed to create an item'
       });
       logger.error('Failed to create an item');
    });
};
  
/*
 Route:          /api/items
 Description:    get all Item
 Method:         GET
 */

// http://localhost:6060/api/items
module.exports.getItem = async (req, res) => {

    Item.find()
      .then((items) => {
        res.json(items);
        logger.info('Item retrieve.');
      })
      .catch((error) => {
        res.status(500).json({
           error: 'Failed to retrieve items'
           });
           logger.error('Failed to retrieve items.');
      });
  };

  /*
 Route:          /api/items/:id
 Description:    Get a specific Item using Id
 Method:         GET
 */

// http://localhost:6060/api/items/:id
module.exports.getItemById = async (req, res) => {

    const itemId = req.params.id;
  
    Item.findById(itemId)
      .then((item) => {
        if (!item) {
          logger.info('Item not found.');
          return res.status(404).json({
             error: 'Item not found'
             });
        }
        res.json(item);
        logger.info('Item found successfully.');
      })
      .catch((error) => {
        res.status(500).json({ 
          error: 'Failed to retrieve item' 
        });
        logger.error('Failed to retrieve item.');
      });
  };

/*
 Route:          /api/items/:id
 Description:    Update Item
 Method:         PUT
 */

// http://localhost:6060/api/items/:id
module.exports.updateItem = async (req, res) => {  
    const itemId = req.params.id;
    const updatedItem = req.body;
  
    Item.findByIdAndUpdate(itemId, updatedItem, { new: true })
      .then((item) => {
        if (!item) {
          logger.info('Item not found.');
          return res.status(404).json({
             error: 'Item not found'
             });
        }
        res.json(item);
        logger.info('Item found successfully.');
      })
      .catch((error) => {
        res.status(500).json({
           error: 'Failed to update item' 
          });
          logger.error('Failed to update item:');
      });
  };
  
  /*
 Route:          /api/items/:id
 Description:    Delete an Item
 Method:         DELETE
 */

// http://localhost:6060/api/items?:id
module.exports.deleteItem = async (req, res) => {
    const itemId = req.params.id;
  
    Item.findByIdAndRemove(itemId)
      .then((item) => {
        if (!item) {
          logger.info('Item not found.');
          return res.status(404).json({
             error: 'Item not found' 
            });
        }
        res.json({
           message: 'Item deleted successfully' 
          });
          logger.info('Item deleted successfully.');
      })
      .catch((error) => {  
        res.status(500).json({ 
          error: 'Failed to delete item' 
        });
        logger.error('Failed to delete item.');
      });
  };