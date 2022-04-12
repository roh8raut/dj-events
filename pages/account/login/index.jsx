import { useContext, useState } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import { AuthContext } from "pages/context/authcontext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authcontext = useContext(AuthContext);
  const { login } = authcontext;

  const handleSubmit = () => {
    if (!email || !password) {
      toast.error("Please enter both the values");
    } else {
      login({email, password});
    }
  };

  return (
    <Layout title="User login">
      <ToastContainer autoClose={1500} />
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
        Dont have an accoutn yet?{" "}
        <Link href="/account/register">
          <a>Register</a>
        </Link>
      </p>
    </Layout>
  );
}
