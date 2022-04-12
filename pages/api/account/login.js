// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { API_URL } from "config";
import cookie from "cookie";

export default async (req, res) => {
  if (req.method === "POST") {
    const strapiRes = await fetch(`${API_URL}/api/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    if (strapiRes.ok) {
      const data = await strapiRes.json();

      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", data.jwt, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 60 * 60 * 24 * 7, // 1 week
          path: '/'
        })
      );

      res.status(200).json(data);
    } else {
      res.status(405).json({ message: "Invalied credentials" });
    }
  } else {
    res.status(405).json({ message: "Not Allowed" });
  }
};
