
const handleRegister = (req, res,db, bcrypt) => {
  const {email, name, password, address, DOB} = req.body;
  if (!email || !name || !password) {
    return res.status(400).json('Incorrect form submission.')
  }
  if (email.includes("@") && email.includes(".")) {
    const hash = bcrypt.hashSync(password);
    console.log(address);
      db.transaction(trx => {
        trx.insert({
          hash: hash,
          email: email
        })
        .into('login')
        .returning('email')
        .then(loginEmail => {
          return trx('users')
            .returning('*')
            .insert({
              email: loginEmail[0],
              name: name,
              joined: new Date(),
              address: address,
              dob: DOB
            })
            .then(user => {
              res.json(user[0]);
          })
        })
        .then(trx.commit)
        .catch(trx.rollback)
      })
    .catch(err => res.status(400).json('Unable to register'))
  } else {
    return res.status(400).json('Incorrect email format.')
  }
}

module.exports = {
  handleRegister: handleRegister
};
