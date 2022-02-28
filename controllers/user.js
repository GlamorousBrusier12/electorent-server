import { User } from "../models/User.js";

export const createUser = async (req, res) => {
  // console.log(req.body);
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      message: "user created",
      data: newUser,
    });
  } catch (error) {
    console.log("error in creating the user: ", error);
    res.status(400).end();
  }
};

export const getUser = async (req, res) => {
  try {
    const userId = req.params.uid;
    const user = await User.findById(userId);
    res.status(200).json({
      message: "user retreived",
      data: user,
    });
  } catch (error) {
    console.log("error in fetching the user: ", error);
    res.status(400).end();
  }
};
