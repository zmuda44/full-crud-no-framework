const router = require('express').Router();

const homepageData = ["me", "my", "minesis"]

router.get('/', (req, res) => {
  console.log('phat hit');
  res.json(homepageData);
})

module.exports = router;