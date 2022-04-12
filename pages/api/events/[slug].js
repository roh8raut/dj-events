// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const data = require("./data.json");

export default (req, res) => {
  console.log('req', req.query)
  res.statusCode = 200;
  const eventObj = data.filter((d) => d.id == req.query.slug);

  if (req.method === "GET") {
    res.json(eventObj);
  } else {
    req.status(405).json({ message: "Not Allowed" });
  }
};
