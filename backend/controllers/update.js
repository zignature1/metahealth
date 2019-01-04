
const handleUpdatePut = (req, res, db) => {
  const {id} = req.body;
  db('users').where('id', '=', id)
  .update({

  })
}

module.exports = {
  handleUpdatePut: handleUpdatePut
}
