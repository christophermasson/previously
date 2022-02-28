import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

function Friends() {
  const [friends, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.betaseries.com/friends/list?key=902be462956e`, {
        headers: {
          Authorization: "Bearer 7e0b80c36baa",
        },
      })
      .then((res) => {
        setPosts(res.data.users);
        console.log("test : ", res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="all">
      {friends.map((friend) => (
        <div key={friend.id}>
          <Card style={{ width: "18rem" }}>
            <Card.Title> {friend.login}</Card.Title>
            <Card.Img style={{ width: "18rem" }} variant="top" />
            <Card.Body>
              <Button variant="primary">
                <a href={"/bloquer/" + friend.id}>Bloquer </a>
              </Button>
              <Button variant="primary">
                <a href={"/delete/" + friend.id}>Supprimer </a>
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Friends;
