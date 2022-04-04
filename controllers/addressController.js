import Address from "../models/Address.js";

export const getAddress = async (req, res) => {
  try {
    console.log(req.params);
    const address = await Address.find({ userId: req.params.userId });
    if (!address) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(address);
  } catch (error) {
    console.log(error, "Error in fetching the address");
    res.status(500).end();
  }
};

export const createAddress = async (req, res) => {
  try {
    const userId = req.body.userId;
    const newAddress = await Address.create({ userId, ...req.body });
    res.status(201).json(newAddress);
  } catch (error) {
    console.log("Error while creating address", error.message);
    res.status(400).end();
  }
};

export const updateAddress = async (req, res) => {
  try {
    let address = await Address.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!address) {
      res.status(404).json({ message: "Address not found" });
    }
    res.status(200).json(address);
  } catch (error) {
    res.status(500).end();
  }
};

export const deleteAddress = async (req, res) => {
  try {
    const address = await Address.findByIdAndRemove(req.params.id);
    if (!address) {
      return res.status(404).json({ message: "Address not found" });
    }
    res.status(200).json(`Address ${req.params.id} deleted`);
  } catch (error) {
    console.log(error, "Error in deleting address");
    res.status(500).end();
  }
};
