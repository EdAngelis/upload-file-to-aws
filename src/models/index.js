import connectDB from "../db/db.js";
import questionsModel from "./questions.model.js";
import examModel from "./exam.model.js";
import usersModel from "./user.model.js";
import { jsonToModel } from "./questions.model.js";
import { examValidator } from "./exam.model.js";

export const collectionsNames = {
  QUESTIONS: "questions",
  USERS: "users",
  EXAMS: "exams",
};

const db = await connectDB();

const startModels = async () => {
  const collections = await db.listCollections().toArray();
  const names = collections.map((collection) => collection.name);

  if (!names.includes(collectionsNames.QUESTIONS))
    await questionsModel(db, collectionsNames.QUESTIONS);

  if (!names.includes(collectionsNames.EXAMS))
    await examModel(db, collectionsNames.EXAMS);

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

const Questions = db.collection(collectionsNames.QUESTIONS);
const Exams = db.collection(collectionsNames.EXAMS);
const Users = db.collection(collectionsNames.USERS);

export { Questions, Exams, Users, startModels, jsonToModel };
