const express = require("express");
const router = express.Router();
const axios = require("axios");

// Get coutries from Continent selected
router.get("/:continent", (req, res, next) => {
  axios.get(`https://restcountries.eu/rest/v2/region/${req.params.continent}`)
  .then(c => {
    return res.json(c.data);
  })
  .catch(e=> console.log(e))
});


module.exports = router;
