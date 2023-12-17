const { Admin } = require("../models");
const {hashPassword, comparePassword} = require('../helper/bcrypt')
const {signToken, verifyToken } = require('../helper/jwt')

class AdminController {
  static async loginAdmin(req, res, next) {
      try {
          const {email, password} = req.body
          if(!email || !password) throw { name : "InvalidInput" }
  
          const admin = await Admin.findOne({where : {email}})
          if(!admin) throw {name : "InvalidEmail/Password"}
          
          const isValidPassword = comparePassword(password, admin.password)
          if(!isValidPassword) throw {name : "InvalidEmail/Password"}
          
          const access_token = signToken({id:admin.id})
          res.status(200).json({access_token});
      } catch (err) {
          console.log(err)
          next(err)
      }
  }

  static async registerAdmin(req, res, next) {
      try {
          const {email, password} = req.body
          const admin = await Admin.create({email, password})
          res.status(201).json({message : "berhasil mendaftarkan admin"})
      } catch (err) {
          console.log(err)
          next(err)
      }
  }
}

module.exports = AdminController