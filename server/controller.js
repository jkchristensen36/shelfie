module.exports = {
  getInventory: (req, res) => {
    const dbInstance = req.app.get('db');

    dbInstance.get_inventory()
      .then( products => res.status(200).send(products))
      .catch( err => {
        res.status(500).send({ errorMessage: "You break it, you buy it!"});
        console.log(err)
      })
  },

  addProduct: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { name, price, img } = req.body;

    dbInstance.create_product([img, name, price])
    .then( () => res.sendStatus(200) )
    .catch( err => {
      res.status(500).send({ errorMessage: "You break it, you buy it!"})
      console.log(err)
    });
  }
}