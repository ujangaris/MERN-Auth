const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

// connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/login')

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
})
const UserModel = mongoose.model('users', UserSchema)

app.post('/login', (req, res) => {
  const { email, password } = req.body
  UserModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          // untuk melihat data user yang berhasil login
          console.log(user)
          console.log({ message: 'Successfully logged in' })
          res.json({ message: 'Login Successful' })
        } else {
          res.status(401).json({ message: 'Invalid password.' }) // Respons jika password salah
        }
      } else {
        res.status(404).json({ message: 'No record exists.' }) // Respons jika tidak ada catatan pengguna
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: 'An error occurred while searching for the user.' })
    })
})

app.listen(3001, () => {
  console.log('Server listening on port 3001')
})
