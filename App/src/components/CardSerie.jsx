import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import "../App.css";
import MySerie from "../components/MySerie";
import { useMatch } from "react-router-dom";

// import { useParams } from "react-router-dom";

function CardSerie() {
  const [cardData, setCardData] = useState([]);
  const [visible, setVisible] = useState(6);

  const allCardData = async () => {
    const response = await axios.get(
      "https://api.betaseries.com/shows/list?key=902be462956e"
    );
    setCardData(response.data.shows);
    console.log("api : ", response.data.shows);
    console.log("id : ", response.data.shows.id);
  };

  const loadMore = () => {
    setVisible(visible + 6);
  };
  useEffect(() => {
    allCardData();
  }, []);

  const renderCard = (serie, index) => {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={serie.images.show} />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            <ul>
              <li>{serie.title}</li>
              <li></li>
              <li></li>
            </ul>
          </Card.Text>
        </Card.Body>
        <div className="container-flex">
          <button variant="primary">
            <a href={"/home/" + serie.id}> Voir plus</a>
          </button>{" "}
          <a href={"/add/" + serie.id}>Ajouter</a>
        </div>
      </Card>
    );
  };

  return (
    <div className="App">
      <h1 className="titleHome">Récemment ajouter</h1>
      <MySerie />
      <div className="wrapper">
        <h1 className="titleHome">Toute les série</h1>
        <div className="cards">
          {cardData.slice(0, visible).map(renderCard)}
        </div>
      </div>
      {visible < cardData.length && (
        <button onClick={loadMore}>Load 5 More</button>
      )}
    </div>
  );
}

export default CardSerie;
