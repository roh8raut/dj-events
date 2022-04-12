import { useState } from "react";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "@/components/Layout";
import { API_URL } from "config";

export default function Add() {
  const [data, setData] = useState({
    name: "",
    performers: "",
    venue: "",
    Address: "",
    date: "",
    time: "",
    description: "",
  });

  const router = useRouter();

  const handleChange = (e, type) => {
    const value = e.target.value;
    setData({ ...data, [type]: value });
  };

  const handleSubmit = () => {
    const hasEmptyValue = Object.values(data).some((d) => !d);
    if (hasEmptyValue) {
      console.log("toast", toast);
      toast.error("Pls fill in all the values");
    } else {
      fetch(`${API_URL}/api/events`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }), // body data type must match "Content-Type" header
      })
        .then((res) => {
          if (!res.ok) {
            toast.error("Ooops something went wrong.");
          } else {
            return res.json();
          }
        })
        .then((data) => {
          router.push(`/events/${data.data.id}`)
        })
        .catch((err) => {
          toast.error("Ooops something went wrong.");
        });
    }
  };

  return (
    <Layout title="add events page">
      <h1>Add events</h1>
      <ToastContainer />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={(e) => handleChange(e, "name")}
        />

        <label htmlFor="perf">Performers</label>
        <input
          type="text"
          id="perf"
          onChange={(e) => handleChange(e, "performers")}
        />

        <label htmlFor="venue">Venue</label>
        <input
          type="text"
          id="venue"
          onChange={(e) => handleChange(e, "venue")}
        />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          onChange={(e) => handleChange(e, "Address")}
        />

        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          onChange={(e) => handleChange(e, "date")}
        />

        <label htmlFor="time">Time</label>
        <input
          type="text"
          id="time"
          onChange={(e) => handleChange(e, "time")}
        />

        <label htmlFor="desc">Description</label>
        <textarea onChange={(e) => handleChange(e, "description")}></textarea>

        <button onClick={() => handleSubmit()}>Submit</button>
      </div>
    </Layout>
  );
}
