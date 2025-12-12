import asyncHandler from "../middleware/asyncHandler.js";
import Customer from "../models/customerModel.js";
import AppError from "../errors/AppError.js";
import dotenv from "dotenv";
dotenv.config();
const DEBUG = process.env.DEBUG_MODE;

// @desc    Get all customers
// @route   GET /api/customers
// @access  Public
const getCustomers = asyncHandler(async (req, res) => {
  const customers = await Customer.find({});
  if (DEBUG) {
    console.log(
      `API GET /api/customers - Retrieved ${customers.length} customers`
    );
  }
  res.json(customers);
});

// @desc    Get customer by ID
// @route   GET /api/customers/:id
// @access  Public
const getCustomerById = asyncHandler(async (req, res) => {
  if (DEBUG) {
    console.log(
      `API GET /api/customers/${req.params.id} - Retrieving customer`
    );
  }
  const customer = await Customer.findById(req.params.id);
  if (customer) {
    res.json(customer);
  } else {
    res.status(404);
    throw new Error("Customer not found");
  }
});

// @desc    Create a new customer
// @route   POST /api/customers
// @access  Public
const createCustomer = asyncHandler(async (req, res) => {
  try {
    if (DEBUG) {
      console.log("API POST /api/customers - Creating new customer");
      console.log("Request body:", req.body);
    }
    const newCustomer = req.body;

    // console.log("newCustomer data is typeof:", typeof newCustomer);
    const customer = new Customer(newCustomer);
    // console.log("Customer is of type:", typeof customer);
    // const customerJSON = JSON.stringify(customer);
    // console.log("customerJSON is of type:", typeof customerJSON);

    await customer.save();
    res
      .status(201)
      .json({ message: "Data saved successfully", data: customer });
  } catch (error) {
    if (error instanceof AppError) {
      console.error(
        `Custom Error: ${error.message}`,
        `Status: ${error.statusCode}`
      );
      console.error(`Full Error: ${error}`);
      res.status(400);
      // throw new Error("Invalid customer data");
    } else {
      console.error("Unexpected Error:", error);
      res.status(500);
    }
  }
});

// @desc    Update an existing customer
// @route   PUT /api/customers/:id
// @access  Public
const updateCustomer = asyncHandler(async (req, res) => {
  // const customer = await Customer.findById(req.params.id);
  // if (DEBUG) {
  //   console.log("Updating customer with ID:", req.params.id);
  //   console.log("Request body:", req.body);
  //   console.log("Email address to update:", req.body.customer.email);
  // }
  // if (customer) {
  //   customer.firstName = req.body.customer.firstName || customer.firstName;
  //   customer.lastName = req.body.customer.lastName || customer.lastName;
  //   customer.email = req.body.customer.email || customer.email;
  //   customer.phone = req.body.customer.phone || customer.phone;
  //   customer.streetAddress =
  //     req.body.customer.streetAddress || customer.streetAddress;
  //   customer.unitNumber = req.body.customer.unitNumber || customer.unitNumber;
  //   customer.city = req.body.customer.city || customer.city;
  //   customer.state = req.body.customer.state || customer.state;
  //   customer.zipCode = req.body.customer.zipCode || customer.zipCode;
  // }
  // if (DEBUG) {
  //   console.log("Updated customer data to save:", customer);
  // }
  if (DEBUG) {
    console.log("_id to update: ", req.params.id);
    console.log("subdoc _id to update: ", req.body.customer._id);
  }
  const customer_id = req.params.id;
  const newCustomer = req.body;

  // console.log("newCustomer data is typeof:", typeof newCustomer);
  const customer = new Customer(newCustomer);
  if (DEBUG) {
    console.log("Customer to update is of type:", typeof customer);
    console.log("Customer data to update:", customer);
  }

  await customer.updateOne({ _id: customer_id }).then(
    (updatedCustomer) => {
      if (DEBUG) {
        console.log("Customer updated successfully:", updatedCustomer);
      }
      res.json(updatedCustomer);
    },
    (error) => {
      res.status(404);
      throw new Error("Customer not found");
    }
  );
});
// @desc    Delete a customer
// @route   DELETE /api/customers/:id
// @access  Public
const deleteCustomer = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if (customer) {
    await customer.remove();
    res.json({ message: "Customer removed" });
  } else {
    res.status(404);
    throw new Error("Customer not found");
  }
});

export {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
