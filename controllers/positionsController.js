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

  }

  static async editPositionById(req, res, next) {
    
  }

  static async deletePositionById(req, res, next) {
    
  }

}

module.exports = PositionController;
