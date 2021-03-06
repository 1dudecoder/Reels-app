import React from "react";
import { Redirect } from "react-router-dom";
import { auth } from "./firebase";
import { userContext } from "./App";
import { useContext } from "react";
import VideoCard from "./VideoCard";
import "./Home.css";

function Home(props) {
  let value = useContext(userContext);

  return (
    <div>
      {value ? (
        <>
        <div className="posts-container">
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </div>

          <button className="logout-btn"
            onClick={() => {
              auth.signOut();
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
}

export default Home;
