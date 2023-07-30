import User from '../models/userModel.js'
import createError from '../utils/error.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5)
    const newUser = new User({
      ...req.body,
      password: hash,
    })

    await newUser.save()
    res.status(201).send('User has been created.')
  } catch (err) {
    next(err)
  }
}
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username })

    if (!user) return next(createError(404, 'User not found!'))

    const isCorrect = bcrypt.compareSync(req.body.password, user.password)
    if (!isCorrect) return next(createError(400, 'Wrong password or username!'))

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_KEY
    )

    const { password, ...info } = user._doc
    res
      .cookie('accessToken', token, {
        httpOnly: true,
      })
      .status(200)
      .send(info)
  } catch (err) {
    next(err)
  }
}

export const logout = async (req, res) => {
  res
    .clearCookie('accessToken', {
      sameSite: 'none',
      secure: true,
    })
    .status(200)
    .send('User has been logged out.')
}

export async function resetPassword(req, res) {
  try {
    const { username, password } = req.body
    try {
      User.findOne({ username })
        .then((user) => {
          bcrypt
            .hashSync(password, 5)
            .then((hash) => {
              User.updateOne(
                { username: user.username },
                { password: hash },
                function (err, data) {
                  if (err) throw err
                  return res.status(201).send({ msg: 'record updated' })
                }
              )
            })
            .catch((e) => {
              return res.status(500).send({
                error: 'unable to hashed password',
              })
            })
        })
        .catch((error) => {
          return res.status(400).send({ error: 'username not found' })
        })
    } catch (error) {
      return res.status(500).send({ error })
    }
  } catch (error) {
    return res.status(401).send({ error })
  }
}
