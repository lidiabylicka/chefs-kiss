import jwt from "jsonwebtoken";

const verifyToken = (
  req: {
    headers: { [x: string]: any };
    userId: string | (() => string) | undefined;
  },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { message: string }): void; new (): any };
    };
  },
  next: () => void
) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  if (!process.env.COGNITO_CLIENT_SECRET) {
    return res.status(500).json({ message: "Missing Cognito client secret" });
  }

  jwt.verify(
    token,
    process.env.COGNITO_CLIENT_SECRET,
    (err: any, decoded: any) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Failed to authenticate token" });
      }

      req.userId = decoded.sub; // or decoded.Username based on your token structure
      next();
    }
  );
};

module.exports = verifyToken;
