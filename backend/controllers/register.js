
const handleRegister = (req, res,db, bcrypt) => {
  const {email, name, password, address, dob} = req.body;
  if (!email || !name || !password) {
    return res.status(400).json('Incorrect form submission.')
  }
  if (email.includes("@") && email.includes(".")) {
    const hash = bcrypt.hashSync(password);
    calcAge = (dob) => {
      const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)
      var newDob = dob.split("-").reverse().join("-");
      var age = getAge(newDob)
      return age;
    }
      var Age = calcAge(dob);
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
              dob: dob,
              age: Age
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
