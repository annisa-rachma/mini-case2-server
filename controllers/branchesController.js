const { Branch } = require("../models");

class BranchesController {
  static async getAllBranches(req, res, next) {
    try {
      const branches = await Branch.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      res.status(200).json(branches);
    } catch (err) {
      next(err);
    }
  }

  static async getBranchById(req, res, next) {
    try {
      const branch = await Branch.findOne({
        where: { id: req.params.id },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      if (!branch) throw { name: "NotFound" };
      res.status(200).json(branch);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async postBranch(req, res, next) {
    try {
      const branch = await Branch.create({
        name: req.body.name,
      });

      res
        .status(201)
        .json({ message: `Berhasil menambahkan cabang baru`, branch });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async editBranchById(req, res, next) {
    try {
      await Branch.update(
        {
          name: req.body.name,
        },
        {
          where: { id: req.params.id },
        }
      );
      res.status(200).json({ message: `Berhasil mengedit nama cabang` });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async deleteBranchById(req, res, next) {
    try {
      await Branch.destroy({ where: { id: req.params.id } });
      res.status(200).json({ message: `Berhasil menghapus cabang` });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = BranchesController;
