// ----- importing models ----- //
const Item = require('../../models/items');

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
    })
    .catch((error) => {
      res.status(500).json({ 
        error: 'Failed to create item'
       });
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
      })
      .catch((error) => {
        res.status(500).json({
           error: 'Failed to retrieve items'
           });
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
          return res.status(404).json({
             error: 'Item not found'
             });
        }
        res.json(item);
      })
      .catch((error) => {
        res.status(500).json({ 
          error: 'Failed to retrieve item' 
        });
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
          return res.status(404).json({
             error: 'Item not found'
             });
        }
        res.json(item);
      })
      .catch((error) => {
        res.status(500).json({
           error: 'Failed to update item' 
          });
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
          return res.status(404).json({
             error: 'Item not found' 
            });
        }
        res.json({
           message: 'Item deleted successfully' 
          });
      })
      .catch((error) => {
        res.status(500).json({ 
          error: 'Failed to delete item' 
        });
      });
  };