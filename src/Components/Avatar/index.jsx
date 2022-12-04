import React, { useEffect, useState } from "react";
import { NavLink} from "react-router-dom";
import "./index.scss";
import axios from "axios";

const Index = () => {


  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/Firdavsbek2006")
      .then((res) => {
        setUser([...user, res.data]);
      })
      .catch((err) => console.log("Error"));
    }, []);
  return (
    <>
      <div className="avatar d-flex">
        <img
          className="border rounded-circle"
          src={user.map((e) => {
            return e.avatar_url;
          })}
          alt="Avatar"
          width="256"
          height="256"
        />
        <p className="avatar__title">
          {user.map((e) => {
            return e.login;
          })}
        </p>
        <button className="btnn">Edit profile</button>
        <div className="follow d-flex align-items-center gap-1">
          <svg
            text="muted"
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="octicon octicon-people svvg"
          >
            <path
              fillRule="evenodd"
              d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"
            ></path>
          </svg>
          <p className="textt">
          {user.map((e) => {
            return e.followers;
          })} <NavLink to="/followers">
          <span>followers</span>
        </NavLink> {user.map((e) => {
            return e.following;
          })} <NavLink to="/following">
          <span>following</span>
        </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Index;
