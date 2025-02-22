const BlacklistToken = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');

module.exports.registerCaptain = async (req, res, next) => {

   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({
         errors: errors.array()
      });
   }

   const { fullname, email, password, vehicle } = req.body;

   const captainExists = await captainModel.findOne({ email });

   if (captainExists) {
      return res.status(400).json({
         message: "Captain already exists"
      });
   }

   const hashedPassword = await captainModel.hashPassword(password);

   const captain = await captainService.createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType
   });

   const token = captain.generateAuthToken();

   res.status(201).json({
      message: "Captain created successfully",
      captain,
      token
   });
}

module.exports.loginCaptain = async (req, res, next) => {

   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({
         errors: errors.array()
      });
   }

   const { email, password } = req.body;

   const captain = await captainModel.findOne({ email }).select('+password');

   if (!captain) {
      return res.status(404).json({
         message: "Invalid email or Password"
      });
   }

   const isMatch = await captain.comparePassword(password);

   if (!isMatch) {
      return res.status(404).json({
         message: "Invalid email or Password"
      });
   }

   const token = captain.generateAuthToken();

   res.cookie('token', token);

   res.status(200).json({
      message: "Captain logged in successfully",
      captain,
      token
   });
}

module.exports.getCaptainProfile = async (req, res, next) => {
   res.status(200).json({
      captain: req.captain
   });
}

module.exports.logoutCaptain = async (req, res, next) => {

   const token = req.cookies.token || req.headers.authorization.split(' ')[1];
   await BlacklistToken.create({ token });
   res.clearCookie('token');

   res.status(200).json({
      message: "Captain logged out successfully"
   });
}