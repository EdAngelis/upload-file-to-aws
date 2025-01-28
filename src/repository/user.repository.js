import { ObjectId } from "mongodb";
import { Users } from "../models/index.js";

const createUser = async (user) => {
  return await Users.insertOne(user);
};

const fetchUser = async (query) => {
  const user = await Users.findOne(query);
  return user;
};

const updateUser = async (id, updateData) => {
  const updatedUser = await Users.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: updateData }
  );
  return updatedUser;
};

const deleteUser = async (id) => {
  const result = await Users.deleteOne({ _id: new ObjectId(id) });
  return result;
};

const insertStudent = async (userEmail, studentEmail) => {
  const updatedUser = await Users.findOneAndUpdate(
    { email: userEmail },
    { $addToSet: { students: studentEmail } },
    { returnDocument: "after" }
  );
  return updatedUser;
};

const removeStudent = async (userEmail, studentEmail) => {
  const updatedUser = await Users.findOneAndUpdate(
    { email: userEmail },
    { $pull: { students: studentEmail } },
    { returnDocument: "after" }
  );
  return updatedUser;
};

export {
  createUser,
  fetchUser,
  updateUser,
  deleteUser,
  insertStudent,
  removeStudent,
};
