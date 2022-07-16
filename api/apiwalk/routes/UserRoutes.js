const User = require("../models/User");
const express = require("express");
const passport = require('passport');
const router = express.Router();

// Controller
const {
  getCurrentUser,
  update,
  getUserById,
  generateToken,
} = require("../controllers/UserController");

// Middlewares
const validate = require("../middlewares/handleValidations");
const {
  userCreateValidation,
  loginValidation,
  userUpdateValidation,
} = require("../middlewares/userValidations");
const authGuard = require("../middlewares/authGuard");


// Routes
router.post(
  "/register", userCreateValidation(),

  async (req, res, next) => {
    passport.authenticate('register', async (err, passwordHash, info) => {
        try {
          if(err || !passwordHash) {
            const error = new Error('Falhou.');   
            return next(error);
          }

          const body = req.body;

          // Create user             
          const user = await User.create({
            name: body.name,
            email: body.email,
            password: passwordHash,
          });
  
          return res.json({
            user: req.user,
            message: "Sucesso!",
          });
        } catch (error) {
          return next(error);
        }
      }
    )(req, res, next);
  }
);

router.get("/profile", authGuard, getCurrentUser);

router.post(
  "/login", loginValidation(), async (req, res, next) => {
    passport.authenticate(
      'login',
      async (err, user, info) => { // [NEW] handleValidations (validate)
        try {
          if(err || !user) {
            const error = new Error('Falhou.');      
            return next(error);
          }
      
          req.login(
            user,
            { session: false },
            async (error) => {
              if(error) return next(error);
              
              const token = generateToken(user._id);

              return res.json(token);
            }
          )
        } catch (error) {
          return next(error);
        }
      }
    )(req, res, next);
  }
);

router.put(
  "/",
  authGuard,
  userUpdateValidation(),
  validate,
  update
);
router.get("/:id", getUserById);

module.exports = router;