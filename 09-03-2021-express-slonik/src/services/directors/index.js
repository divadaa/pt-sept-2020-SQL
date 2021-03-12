const router = require("express").Router();

module.exports = db => (req, res, next) => {
  router.use('/allnames', require('./getAllNames')(db))

  router.get("/hola", (req, res, next) =>{
    console.log("hola")
    res.status(200).json({
      mensaje: "hola"
    })
  })

};

// router.use('/movies', require('./movies')(db))
// router.use('/all', require('./directors-movies')(db))

//   return router
// }

//   try {
//     const result = await getNickQuery(db);

//     res.status(200).json({
//       success: true,
//       data: result.rows,
//     });
//   } catch (error) {
//     console.info(">something went wrong: ", error.message);
//     return null;
//   }