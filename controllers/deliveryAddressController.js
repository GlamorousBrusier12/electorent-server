import { deliveryAddress } from "../models/DeliveryAddress";

export const placeDeliveryAddress = async (req, res) => {
  try {
    // assume user is logged in and we have user in req.user
    const userId = req.params.userId;
    const newDeliveryAddress = await deliveryAddress.create({
      userId,
      ...req.body,
    });
    res.status(201).json({
      message: "Delivery address added sucessfully",
      deliveryAddressId: newDeliveryAddress.id,
    });
  } catch (error) {
    console.log("error in adding the delivery address ", error);
    res.status(500).end();
  }
};

export const getAllDeliveryAddresses = async (req, res) => {
  try {
    const userDeliveryAddress = await deliveryAddress.find({});
    res.status(200).json({
      userDeliveryAddress,
    });
  } catch (error) {
    console.log(
      "error in retreiving the delivery address details of the user",
      error
    );
    res.status(500).end();
  }
};

export const getUserDeliveryAddress = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userDeliveryAddress = await deliveryAddress.find({
      userId,
    });
    res.status(200).json({
      userDeliveryAddress,
    });
  } catch (error) {
    console.log(
      "error in retreiving the delivery address details of the user",
      error
    );
    res.status(500).end();
  }
};

export const updateDeliveryAddress = async (req, res) => {
  try {
    const deliveryAddressId = req.params.deliveryAddressId;
    const newDeliveryAddressDetails = req.body;
    const newDeliveryAddress = await deliveryAddress.findByIdAndUpdate(
      deliveryAddressId,
      newDeliveryAddressDetails,
      {
        new: true,
      }
    );
    res.status(200).json({
      message: "updated delivery address sucessfully",
      newDeliveryAddress: newDeliveryAddress,
    });
  } catch (error) {
    console.log("error in updating the delivery address", error);
    res.status(500).end();
  }
};

export const deletedDeliveryAddress = async (req, res) => {
  try {
    const deliveryAddressId = req.params.deliveryAddressId;
    const deletedDeliveryAddress = await deliveryAddress.findByIdAndDelete(
      deliveryAddressId
    );
    // unlink all the user related data
    res.status(200).json({
      message: "deleted delivery address sucessfully",
    });
  } catch (error) {
    console.log(
      "error in deleting the delivery address details of the user",
      error
    );
    res.status(500).end();
  }
};
