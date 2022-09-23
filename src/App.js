import { useEffect, useState } from "react";
import axios from "axios";
import Form from "./components/Form";
import PicCard from "./components/PicCard";
import { useDispatch, useSelector } from "react-redux";
import { setPicturesData } from "./feature/pictures.slice";

const App = () => {
  // on va chercher les donnée dans la bdd
  const dispatch = useDispatch();

  // on fait apelle au donnée qui est dans le store
  const picsData = useSelector((state) => state.pictures.pictures);

  // on crée une fonction qui va nous permettre de récuperer l'id directement de la bdd une fois quelque chose de publier
  const getPictures = () => {
    axios
      .get("http://localhost:5000/pictures")
      .then((res) => dispatch(setPicturesData(res.data)));
  };

  useEffect(() => {
    getPictures();
  }, []);

  return (
    <>
      <h1>NFT Gallery</h1>
      <Form getPictures={getPictures} />
      <div className="cards-container">
        {picsData?.map((pic, index) => (
          <PicCard key={index} pic={pic} />
        ))}
      </div>
    </>
  );
};

export default App;
