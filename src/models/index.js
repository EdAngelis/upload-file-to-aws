import connectDB from "../db/db.js";
import usersModel from "./user.model.js";

export const collectionsNames = {
  USERS: "users",
};

const db = await connectDB();

const startModels = async () => {
  const collections = await db.listCollections().toArray();
  const names = collections.map((collection) => collection.name);

  if (!names.includes(collectionsNames.USERS))
    await usersModel(db, collectionsNames.USERS);

  return db;
};

const changeValidation = async (collectionName, validator) => {
  try {
    await db.command({
      collMod: collectionName,
      validator: validator,
    });
    console.log("Validation changed");
  } catch (error) {
    console.log(error);
  }
};

//changeValidation(collectionsNames.EXAMS, examValidator);

const Users = db.collection(collectionsNames.USERS);

export { Users, startModels };
