const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../../client/index.html');
  res.sendFile(filePath)
});

router.get('/form', function (req, res)  {
  res.sendFile(path.join(__dirname, '../../client/form.html'));
});

module.exports = router;