import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getDbConnection } from "../db";
export const SignupRoute = {
  path: "/api/signup",
  method: "post",
  handler: async (req, res) => {
    const { email, password } = req.body;

    const db = getDbConnection("react-auth-db");
    const user = await db.collection("users").findOne({ email });

    if (user) {
      //This is basically the conflict error code
      res.sendStatus(409);
    }
    const passwordHashed = await bcrypt.hash(password, 10);

    const startingInfo = {
      hairColor: "",
      favoriteFood: "",
      bio: "",
    };

    const result = db.collection("user").insertOne({
      email,
      passwordHashed,
      info: startingInfo,
      isVerified: false,
    });
    const { insertedId } = result;
    jwt.sign(
      {
        id: insertedId,
        email,
        info: startingInfo,
        isVerified: false,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "2d",
      },
      (err, token) => {
        if (err) {
          return;
          res.status(500).send(err);
        }
        res.status;
        (200).json({ token });
      }
    );
  },
};
