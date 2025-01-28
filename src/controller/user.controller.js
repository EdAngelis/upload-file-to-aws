import {
  createUser,
  fetchUser,
  updateUser,
  deleteUser,
  insertStudent,
  removeStudent,
} from "../repository/user.repository.js";

export const createUserController = async (req, res) => {
  try {
    const user = req.body;
    const existingUser = await fetchUser({ email: user.email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }
    const result = await createUser(user);
    res.status(201).json({
      message: "User created successfully",
      user: result,
    });
  } catch (error) {
    console.dir(error, { depth: null });
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const fetchUserController = async (req, res) => {
  try {
    const { email } = req.params;

    const user = await fetchUser(email);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User fetched successfully",
      user: user,
    });
  } catch (error) {
    console.dir(error, { depth: null });
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateUserController = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const updatedUser = await updateUser(id, updateData);
    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.dir(error, { depth: null });
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteUserController = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await deleteUser(id);

    if (result.deletedCount === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    console.dir(error, { depth: null });
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addStudentController = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const studentEmail = req.params.studentEmail;
    const updatedUser = await insertStudent(userEmail, studentEmail);
    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "Student added successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.dir(error, { depth: null });
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const removeStudentController = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const studentEmail = req.params.studentEmail;
    const updatedUser = await removeStudent(userEmail, studentEmail);

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    res.status(200).json({
      message: "Student removed successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.dir(error, { depth: null });
    res.status(500).json({ error: "Internal Server Error" });
  }
};
