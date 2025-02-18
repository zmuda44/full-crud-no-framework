const router = require('express').Router();
const crudRoutes = require('./crudRoutes')

router.use('/crudRoutes', crudRoutes);

module.exports = router;