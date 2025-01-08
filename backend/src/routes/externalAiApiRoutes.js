import express from "express";
import { addExternalData } from "../controllers/externalAiApiController.js";

const router = express.Router();

/**
 * @swagger
 * /external/:
 *   post:
 *     summary: post data to an external API
 *     tags: [External Data]
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *     responses:
 *       201:
 *         description: Data posted  successfully
 *       400:
 *         description: Unable to post data
 */
router.post("/", addExternalData);

export default router;
