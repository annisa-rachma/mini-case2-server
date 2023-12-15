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
        const position = await Position.findOne({
          where: { id: req.params.id },
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        });
        if (!position) throw { name: "NotFound" };
        res.status(200).json(position);
      } catch (err) {
        console.log(err);
        next(err);
      }
  }

  static async postPosition(req, res, next) {
    try {
        const position = await Position.create({
          name: req.body.name,
        });
  
        res
          .status(201)
          .json({ message: `Berhasil menambahkan jabatan baru`, position });
      } catch (err) {
        console.log(err);
        next(err);
      }
  }

  static async editPositionById(req, res, next) {
    try {
        await Position.update(
          {
            name: req.body.name,
          },
          {
            where: { id: req.params.id },
          }
        );
        res.status(200).json({ message: `Berhasil mengedit nama jabatan` });
      } catch (err) {
        console.log(err);
        next(err);
      }
  }

  static async deletePositionById(req, res, next) {
    try {
        await Position.destroy({ where: { id: req.params.id } });
        res.status(200).json({ message: `Berhasil menghapus jabatan` });
      } catch (err) {
        next(err);
      }
  }

}

module.exports = PositionController;
