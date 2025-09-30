import { getAllUsers, createUser as createUserService } from "../services/userService.js";

export const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const createUser = async (req, res) => {  // ← Keep this as createUser
  try {
    const userData = req.body;
    const newUser = await createUserService(userData);  // ← Call the service function
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};