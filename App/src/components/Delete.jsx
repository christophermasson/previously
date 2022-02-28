import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMatch } from "react-router-dom";

function Delete() {
  const [serie, setPosts] = useState();
  const match = useMatch("delete/:id");

  console.log("yy");

  useEffect(() => {
    axios
      .delete(
        `https://api.betaseries.com/friends/friend?key=902be462956e&id=${match.params.id}`,
        {
          headers: {
            Authorization: "Bearer 7e0b80c36baa",
          },
        }
      )
      .then((res) => {
        setPosts(res.data.show);
        console.log("test chris: ", res.data.show);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [match]);

  console.log("titi", match.params.id);

  return (
    <div className="all">
      <h1>Supprimer</h1>
    </div>
  );
}

export default Delete;
