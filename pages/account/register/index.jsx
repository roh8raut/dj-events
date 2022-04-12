import { useState } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("submit form", email, password);
    if (!email || !password || !username) {
      toast.error("Please enter both the values");
    }
  };

  return (
    <Layout title="User Register">
      <ToastContainer autoClose={1500} />
      <div>
        <label>Username:</label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <p>
        Go back to  
        <Link href="/account/login">
          <a> Login</a>
        </Link>
      </p>
    </Layout>
  );
}
