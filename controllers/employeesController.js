const { Branch, Employee, Position } = require("../models");

class EmployeeController {
  static async getAllEmployees(req, res, next) {
    try {
      const employees = await Employee.findAll({
        include: [
          {
            model: Branch,
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
          {
            model: Position,
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        order : [['endDate']]
      });
      res.status(200).json(employees);
    } catch (err) {
      next(err);
    }
  }

  static async getEmployeeById(req, res, next) {
    try {
      const product = await Product.findOne({
        where: { id: req.params.productId },
        include: [
          {
            model: Image,
            where: { productId: req.params.productId },
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
          {
            model: User,
            attributes: {
              exclude: [
                "createdAt",
                "updatedAt",
                "password",
                "role",
                "phoneNumber",
                "address",
              ],
            },
          },
          {
            model: Category,
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      if (!product) throw { name: "NotFound" };
      res.status(200).json(product);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async postEmployee(req, res, next) {}

  static async editEmployeeById(req, res, next) {}

  static async deleteEmployeeById(req, res, next) {}
}

module.exports = EmployeeController;
