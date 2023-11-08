const prisma = require("../db");
const { Router } = require("express");
const { register, login } = require("../controllers/auth.controller");
const {
  pagination,
  getRegisteredUsers,
  getSpecificId,
  getRegisteredUsersByRole,
} = require("../controllers/user.controllers");
const router = Router();

// Get all registered users
router.get("/getRegisteredUsers", getRegisteredUsers);
// Filter all registered users by role
router.get("/filterUsersByRole/:role", getRegisteredUsersByRole);
// Pagination
router.get("/pagination", pagination);
// Get specific id user
router.get("/getSpecificId/:id", getSpecificId);
// Register account
router.post("/register", register);
// Login account
router.post("/login", login);

module.exports = router;
