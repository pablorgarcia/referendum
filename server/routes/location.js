const express = require("express");
const router = express.Router();
const axios = require("axios");

// Get coutries from Continent selected
router.get("/:continent", (req, res, next) => {
  console.log(req.params.continent)
  axios.get(`https://restcountries.eu/rest/v2/region/${req.params.continent}`)
  .then(c => {
    console.log('despues de axios')
    console.log(c.data);
    return res.json(c.data);
  })
  .catch(e=> console.log(e))
});


module.exports = router;
