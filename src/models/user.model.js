export default async (db, collectionName) => {
  try {
    await db.createCollection(collectionName, {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["email"],
          properties: {
            name: {
              bsonType: "string",
            },
            email: {
              bsonType: "string",
            },
            password: {
              bsonType: "string",
            },
            students: {
              bsonType: "array",
              items: {
                bsonType: "string",
              },
            },
            created_at: {
              bsonType: "date",
            },
            updated_at: {
              bsonType: "date",
            },
          },
        },
      },
    });

    console.log(`User collection ${collectionName} created`);
  } catch (error) {
    console.error(`Error creating user collection ${collectionName}:`, error);
  }
};
