import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMatch } from "react-router-dom";

function DetailSerie() {
  const [serie, setPosts] = useState();
  const match = useMatch("home/:id");

  console.log("yy");

  useEffect(() => {
    axios
      .get(
        `https://api.betaseries.com/shows/display?key=902be462956e&id=${match.params.id}`
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

export default DetailSerie;
