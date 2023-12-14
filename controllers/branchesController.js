const { Branch, Employee, Position } = require("../models");

class BranchesController {
  static async getAllBranches(req, res, next) {
    try{
        const products = await Product.findAll({
            include: [
                {   model: Category,
                    attributes : {
                        exclude : ['createdAt', 'updatedAt']
                    }
                }
            ],
            attributes : {
                exclude : ['createdAt', 'updatedAt']
            },
            order : [['id', 'desc']]
        })
        res.status(200).json(products)
    }
    catch(err) {
        next(err)
    }
  }

  static async getBranchById(req, res, next) {
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

  static async postBranch(req, res, next) {

  }

  static async editBranchById(req, res, next) {
    
  }

  static async deleteBranchById(req, res, next) {
    
  }

}

module.exports = BranchesController;
