import { User } from "../models/User.js";

export const createUser = async (req, res) => {
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

export const updateUser = async (req, res) => {
  try {
    // make sure from the front-end that user is not updating the email, password
    // changing password might involve few additional steps
    // currently we can change any detail of the user
    const userId = "6206a449b867589102e71f54";
    const user = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    if (!user) {
      res.status(404).json({ message: "User Not Found" });
    }
    res.status(200).json({ message: "User updated sucessfully", user });
  } catch (error) {
    console.log("error in update the user: ", error);
    res.status(500).end();
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = "6206a449b867589102e71f54";
    // const userId = req.user.id;
    const user = await User.findByIdAndDelete(userId);
    res.status(200).json({
      message: "deleted user sucessfully",
    });
  } catch (error) {
    console.log("error in deleting the user: ", error);
    res.status(500).end();
  }
};
