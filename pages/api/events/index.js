// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const data = require("./data.json");

export default (req, res) => {
  res.statusCode = 200;

  if (req.method === "GET") {
    res.json(data);
  } else {
    req.status(405).json({ message: "Not Allowed" });
  }
};
