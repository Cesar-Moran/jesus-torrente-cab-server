const prisma = require("../db");
const express = require("express");
const { Router } = require("express");

const router = Router();

// Get the users just for test purposes only
router.get("/", async (req, res) => {
  const result = await prisma.dealer.findMany();
  res.send(result);
});

// Submit the form to the excel
router.post("/submit", async (req, res) => {
  const {
    name,
    company_email,
    password,
    confirm_password,
    companyvendor_name,
    ein,
    company_address,
    phone_number,
    personal_email,
    company_description,
  } = req.body;
  const result = await prisma.dealer.create({
    data: {
      name,
      company_email,
      password,
      confirm_password,
      companyvendor_name,
      ein,
      company_address,
      phone_number,
      personal_email,
      company_description,
    },
  });

  res.send(result);
});

module.exports = router;
