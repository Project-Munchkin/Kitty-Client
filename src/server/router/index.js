import express from "express";
import api from "./api";
import entry from "./entry";

const router = express.Router();

router.use('/', entry);
router.use('/api/v1', api);

export default router;