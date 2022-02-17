const express = require("express");
const router = express.Router();
const notesRoutes = require("../../routes/apiRoutes/notesRoutes");

router.use(notesRoutes);
module.exports = router;
