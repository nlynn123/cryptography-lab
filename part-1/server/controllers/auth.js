const users = []
const bcrypt = require('bcryptjs')
module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {

        if (users[i].username === username && existingPassword) {
          const existingPassword = bcrypt.compareSync(password, users[i].password)
          if(existingPassword)
          return res.status(200).send(users[i])
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body)
      const {password, username, email, firstName, lastName} = req.body
        const salt = bcrypt.genSaltSync(5)
        const passwordHash = bcrypt.hashSync(password, salt)
      
///user object
      let userObj = {
        username: username,
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: passwordHash

      }
      let securedPassword = {...userObj}
      delete securedPassword.passwordHash

        users.push(userObj)
        res.status(200).send(req.body)
    }
}