const { Position } = require("../models");

class PositionController {
  static async getAllPosition(req, res, next) {
    try {
        const positions = await Position.findAll({
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        });
        res.status(200).json(positions);
      } catch (err) {
        next(err);
      }
  }

  static async getPositionById(req, res, next) {
    try {
        const product = await Product.findOne({
            where : {id : req.params.productId},
            include: [
                {   model: Image,
                    where : {productId : req.params.productId },
                    attributes : {
                        exclude : ['createdAt', 'updatedAt']
                    }
                },
                {   model: User,
                    attributes : {
                        exclude : ['createdAt', 'updatedAt', 'password', 'role', 'phoneNumber', 'address']
                    }
                },
                {   model: Category,
                    attributes : {
                        exclude : ['createdAt', 'updatedAt']
                    }
                },

            ],
            attributes : {
                exclude : ['createdAt', 'updatedAt']
            },
        })
        if(!product) throw {name : "NotFound"} 
        res.status(200).json(product)
    } catch (err) {
        console.log(err)
      next(err);
    }
  }

  static async postPosition(req, res, next) {

  }

  static async editPositionById(req, res, next) {
    
  }

  static async deletePositionById(req, res, next) {
    
  }

}

module.exports = PositionController;
