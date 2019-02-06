import React from "react";
import "./App.css";
import Header from "./components/Header";
import Title from "./components/Title";
import Cover from "./components/Cover";
import Item from "./components/Item";
import SubTitle from "./components/SubTitle";
import Button from "./components/Button";
import Description from "./components/Description";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Title text={"2001: L'odyssée de l'espace"} />
        <section>
          <Cover url={"http://fr.web.img2.acsta.net/r_1920_1080/pictures/18/05/04/14/53/4306860.jpg"} />
          <aside>
            <Item label={"Date de reprise"} text={"13 juin 2018"} bold={true} />
            <Item label={"Date de sortie"} text={"27 septembre 1968"} bold={true} />
            <Item label={"De"} text={"Stanley Kubrick"} />
            <Item label={"Avec"} text={"Keir Dullea, Gary Lockwood, William Sylvester"} />
            <Item label={"Genre"} text={"Science fiction"} />
            <Item label={"Nationalités"} text={"Américain, Britannique"} />
            <Button theme={"black"}>BANDE-ANNONCE</Button>
            <Button theme={"yellow"}>Séances (2)</Button>
            <Button theme={"grey"}>CE FILM EN VOD</Button>
          </aside>
        </section>
        <SubTitle text={"SYNOPSIS ET DÉTAILS"} />
        <Description
          text={`A l'aube de l'Humanité, dans le désert africain, une tribu de primates subit les assauts répétés d'une bande rivale, qui lui dispute un point d'eau. La découverte d'un monolithe noir inspire au chef des singes assiégés un geste inédit et décisif. Brandissant un os, il passe à l'attaque et massacre ses adversaires. Le premier instrument est né.
En 2001, quatre millions d'années plus tard, un vaisseau spatial évolue en orbite lunaire au rythme langoureux du "Beau Danube Bleu". A son bord, le Dr. Heywood Floyd enquête secrètement sur la découverte d'un monolithe noir qui émet d'étranges signaux vers Jupiter.`}
        />
      </>
    );
  }
}

export default App;
