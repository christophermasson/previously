import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMatch } from "react-router-dom";

function AddSerie() {
  const [serie, setPosts] = useState();
  const match = useMatch("add/:id");

  console.log("yy");

  useEffect(() => {
    axios
      .post(
        `https://api.betaseries.com/shows/show?key=902be462956e&id=${match.params.id}`,
        null,
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

  return match && serie ? (
    <div>
      <div key={serie.id}>
        <h1>oui</h1>

        <h1>{serie.title}</h1>
        <img src={serie.images.show} alt="img" />
      </div>
    </div>
  ) : (
    <div>Uncool</div>
  );
}

export default AddSerie;
