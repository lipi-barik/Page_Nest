const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.createUser = async (req, res) => {
  try {
      const { name, email, role, password } = req.body;
      if (!password || password.length < 5) {
        return res.status(400).json({ message: "Password should be at least 5 characters" });
      }
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

      const newUser = new User({ name, email, role, password: hashPassword });
      await newUser.save();
      res.status(201).json({ message: 'User created', user: newUser });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );
        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUserById = async (req, res) => {
  try {
      const users = await User.find();
      res.status(200).json(users);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

exports.getsingleuserById = async (req, res) => {
  try {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.status(200).json(user);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

exports.updateuserById = async (req, res) => {
  try {
      const { name, email, role } = req.body;
      const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          { name, email, role },
          { new: true, runValidators: true } // Return updated document & validate
      );
      if (!updatedUser) return res.status(404).json({ message: 'User not found' });
      res.status(200).json({ message: 'User updated', user: updatedUser });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

exports.deleteuserById = async (req, res) => {
  try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      if (!deletedUser) return res.status(404).json({ message: 'User not found' });
      res.status(200).json({ message: 'User deleted', user: deletedUser });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};