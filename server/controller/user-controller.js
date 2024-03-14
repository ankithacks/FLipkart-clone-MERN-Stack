import User from "../models/userSchema.js";

export const userSignup = async (req, res) => {
  try {
    // validation to be sent to frontend to let it know that saame usrname cannot exists together:-
    const exist = await User.findOne({ username: req.body.username });
    if (exist) {
      return res.status(401).json({ message: "username already exists" });
    }
    const user = req.body;
    const newUser = new User(user);
    // directly saving the data coming from the frontend into the database
    await newUser.save();
    return res.status(200).json({ message: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// login functionality:-

export const userLogin = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    let user = await User.findOne({ username: username, password: password });
    if (user) {
      return res.status(200).json({ data: user });
    } else {
      return res.status(404).json(`${username} does not exists`);
    }
  } catch (error) {
    res.status(500).json("error", error.message);
  }
};
