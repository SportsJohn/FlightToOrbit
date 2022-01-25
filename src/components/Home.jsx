import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  let { username } = useParams();

  return (
    <div>
      <h1>Hello {username}</h1>

      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Change to about page
      </button>
    </div>
  );
}

export default Home;
