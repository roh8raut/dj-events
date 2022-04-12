import { useState } from "react";

import { useRouter } from 'next/router'

export const Search = () => {
  const [term, setTerm] = useState("");
  const router = useRouter();
  

  return (
    <div>
      <input onChange={(e) => setTerm(e.target.value)} />
      <button onClick={() => router.push(`/events/search?term=${term}`)}>
        Submit
      </button>
    </div>
  );
};
