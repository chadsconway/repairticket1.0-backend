import asyncHandler from "../middleware/asyncHandler.js";
import Customer from "../models/customerModel.js";
import AppError from "../errors/AppError.js";

// @desc    Get all customers
// @route   GET /api/customers
// @access  Public
const getCustomers = asyncHandler(async (req, res) => {
  const customers = await Customer.find({});
  res.json(customers);
});

// @desc    Get customer by ID
// @route   GET /api/customers/:id
// @access  Public
const getCustomerById = asyncHandler(async (req, res) => {
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
  const customer = await Customer.findById(req.params.id);
  if (customer) {
    customer.firstName = req.body.firstName || customer.firstName;
    customer.lastName = req.body.lastName || customer.lastName;
    customer.email = req.body.email || customer.email;
    customer.phone = req.body.phone || customer.phone;
    customer.streetAddress = req.body.streetAddress || customer.streetAddress;
    customer.unitNumber = req.body.unitNumber || customer.unitNumber;
    customer.city = req.body.city || customer.city;
    customer.state = req.body.state || customer.state;
    customer.zipCode = req.body.zipCode || customer.zipCode;

    const updatedCustomer = await customer.save();
    res.json(updatedCustomer);
  } else {
    res.status(404);
    throw new Error("Customer not found");
  }
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
