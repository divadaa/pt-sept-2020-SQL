const router = require("express").Router();
const { getNickQuery } = require("../../queries/directors");


module.exports = (db) => async (req, res, next) => {
    router.use('/nickquery', require('./getNickQuery')(db))
  try {
    const result = await getNickQuery(db);

    res.status(200).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.info(">something went wrong: ", error.message);
    return null;
  }

}