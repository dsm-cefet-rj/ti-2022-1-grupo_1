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

  passport.authenticate('register', { session: false }),
  async (req, res, next) => {
    res.json({
      user: req.user,
      message: "Sucesso!",
    });
  }
);
router.get("/profile", authGuard, getCurrentUser);

router.post(
  "/login", loginValidation(),

  async (req, res, next) => {
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
      
              return res.json({ token });
            }
          )
        } catch {
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