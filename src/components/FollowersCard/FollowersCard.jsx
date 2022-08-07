import React, { useState, useEffect } from "react";
import "./FollowersCard.scss";
import { useSelector } from "react-redux";
import { selectAuth } from "../../store/slice/Auth";
import User from "../User/User";
import UserApi from "../../api/UserApi";
const FollowersCard = () => {
  const [persons, setPersons] = useState([]);
  const { authData } = useSelector(selectAuth);
  const { user } = authData;
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await UserApi.getAll();
      setPersons(data);
    };
    fetchUsers();
  }, []);
  return (
    <div className="followersCard">
      <h3>誰也在用</h3>
      {persons.map((person, id) => {
        if (person._id !== user._id) return <User person={person} key={id} />;
      })}
    </div>
  );
};

export default FollowersCard;
