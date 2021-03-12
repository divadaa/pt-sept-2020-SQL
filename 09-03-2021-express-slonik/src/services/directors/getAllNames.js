const router = require("express").Router();
const { getNameNotNull } = require("../../queries/directors");


module.exports = (db) => async (req, res, next) => {
  router.use('/allnames', require('./getAllNames')(db))
    
  try {
    const result = await getNameNotNull(db);

    res.status(200).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.info(">something went wrong: ", error.message);
    return null;
  }

}