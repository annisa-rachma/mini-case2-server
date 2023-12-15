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
        order: [["endDate"]],
      });
      res.status(200).json(employees);
    } catch (err) {
      next(err);
    }
  }

  static async getEmployeeById(req, res, next) {
    try {
      const employee = await Employee.findOne({
        where: { id: req.params.id },
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
      });
      if (!employee) throw { name: "NotFound" };
      res.status(200).json(employee);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async postEmployee(req, res, next) {
    try {
      const employee = await Employee.create({
        ...req.body
      });

      res
        .status(201)
        .json({ message: `Berhasil menambahkan pegawai baru`, employee });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async editEmployeeById(req, res, next) {
    try {
        await Employee.update(
          {
            ...req.body
          },
          {
            where: { id: req.params.id },
          }
        );
        res.status(200).json({ message: `Berhasil mengedit pegawai` });
      } catch (err) {
        console.log(err);
        next(err);
      }
  }

  static async deleteEmployeeById(req, res, next) {}
}

module.exports = EmployeeController;
