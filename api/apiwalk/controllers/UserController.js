const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const passport = require('passport');
const strategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const { default: mongoose } = require("mongoose");

const jwtSecret = process.env.JWT_SECRET;

// Generate user token
const generateToken = (id) => {
  return jwt.sign({ id: id }, jwtSecret, {
    expiresIn: "7d",
  });
};

passport.use(
  new JwtStrategy(
    {
      secretOrKey: jwtSecret,
      jwtFromRequest: ExtractJwt.fromUrlQueryParameter('token')
    },
    async (token, done) => {
      try {
        return done(null, token.id);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

// [NEW] Register user
passport.use(
  'register',
  new strategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      // check if user exists
      const user = await User.findOne({ email });

      if (user) {;
        done(null, false, { message: "Por favor, utilize outro e-mail." });
      }

      // Generate password hash
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);

      done(null, passwordHash, { message: "Sucesso!" });
    }
  )
);

// // Register user and sign in
// const register = async (req, res) => {
//   const { name, email, password } = req.body;

//   // check if user exists
//   const user = await User.findOne({ email });

//   if (user) {
//     res.status(422).json({ errors: ["Por favor, utilize outro e-mail."] });
//     return;
//   }

//   // Generate password hash
//   const salt = await bcrypt.genSalt();
//   const passwordHash = await bcrypt.hash(password, salt);

//   // Create user
//   const newUser = await User.create({
//     name,
//     email,
//     password: passwordHash,
//   });

//   // If user was created sucessfully, return the token
//   if (!newUser) {
//     res.status(422).json({
//       errors: ["Houve um erro, por favor tente novamente mais tarde."],
//     });
//     return;
//   }

//   res.status(201).json({
//     _id: newUser._id,
//     token: generateToken(newUser._id),
//   });
// };

// Get logged in user
const getCurrentUser = async (req, res) => {
  const user = req.user;

  res.status(200).json(user);
};

// [NEW] Sign user in
passport.use(
  'login',
  new strategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });

        // Check if user exists
        if (!user) {
          return done(null, user, { message: "Usuário não encontrado!" })
        }

        const validate = await bcrypt.compare(password, user.password);

        // Check if password matches
        if (!validate) {
          return done(null, false, { message: "Senha inválida!" });
        }

        // Return user with token
        return done(null, user, { message: "Sucesso!" })

      } catch (error) {
        return done(error);
      }
    }
  )
);

// passport.use(
//   new JWTstrategy(
//     {
//       secretOrKey: jwtSecret,
//       jwtFromRequest: ExtractJWT.fromUrlQueryParameter('token')
//     },
//     async (token, done) => {
//       try {
//         return done(null, token.user);
//       } catch (error) {
//         done(error);
//       }
//     }
//   )
// );

// // Sign user in
// const login = async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });

//   // Check if user exists
//   if (!user) {
//     res.status(404).json({ errors: ["Usuário não encontrado!"] });
//     return;
//   }

//   // Check if password matches
//   if (!(await bcrypt.compare(password, user.password))) {
//     res.status(422).json({ errors: ["Senha inválida!"] });
//     return;
//   }

//   // Return user with token
//   res.status(200).json({
//     _id: user._id,
//     profileImage: user.profileImage,
//     token: generateToken(user._id),
//   });
// };

// Update user
const update = async (req, res) => {
  const { name, password, bio } = req.body;

  let profileImage = null;

  if (req.file) {
    profileImage = req.file.filename;
  }

  const reqUser = req.user;

  const user = await User.findById(mongoose.Types.ObjectId(reqUser._id)).select(
    "-password"
  );

  if (name) {
    user.name = name;
  }

  if (password) {
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    user.password = passwordHash;
  }

  if (profileImage) {
    user.profileImage = profileImage;
  }

  if (bio) {
    user.bio = bio;
  }

  await user.save();

  res.status(200).json(user);
};

// Get user by id
const getUserById = async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(mongoose.Types.ObjectId(id)).select(
    "-password"
  );

  // Check if user exists
  if (!user) {
    res.status(404).json({ errors: ["Usuário não encontrado!"] });
    return;
  }

  res.status(200).json(user);
};

module.exports = {
  getCurrentUser,
  update,
  getUserById,
  generateToken,
};