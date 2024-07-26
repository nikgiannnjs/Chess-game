const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const database = require("../../config/database");
const redisClient = require("../../config/redis");
const dotenv = require("dotenv");
dotenv.config();

const jwtSecret = process.env.JWT_SECRET;
