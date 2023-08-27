// import express, { Router } from "express";
// import serverless from "serverless-http";

// const api = express();

// const router = Router();
// router.get("/hello", (req, res) => res.send("Hello World!"));

// api.use("/api/", router);

// export const handler = serverless(api);

const express = require("express");
const serverless = require("serverless-http");

const api = express();

const router = express.Router();
router.get("/", (req, res) => res.send("Hello World!"));

api.use("/", router);

const handler = serverless(api);
module.exports = { handler };
