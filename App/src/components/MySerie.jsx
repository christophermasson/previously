import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import "../App.css";

const MySerie = () => {
  const [cardData, setCardData] = useState([]);
  const [visible, setVisible] = useState(3);

  const allCardData = async () => {
    const response = await axios.get(
      "https://api.betaseries.com/shows/member?key=902be462956e",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    setCardData(response.data.shows);
    console.log(response.data.shows);
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
      </Card>
    );
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="cards">
          {cardData.slice(0, visible).map(renderCard)}
        </div>
      </div>
      {visible < cardData.length && (
        <button onClick={loadMore}>Load 5 More</button>
      )}
    </div>
  );
};

export default MySerie;

// POST https://api.betaseries.com/shows/favorite ajoute fav
// DELETE https://api.betaseries.com/shows/favorite delete fav
