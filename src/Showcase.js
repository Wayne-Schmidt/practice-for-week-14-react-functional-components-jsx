import Bulbasaur from "./images/bulbasaur.jpg";

const pokeCharacteristics =
  "Bulbasaur's type is Grass and one of their moves is Vine Whip.";

function Showcase() {
  var favPokemon = "Bulbasaur";
  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={Bulbasaur} alt="Bulbasaur" />
      <h2>
        <span style={{ backgroundColor: "green", text: "white" }}>
          {pokeCharacteristics}
        </span>
      </h2>
    </div>
  );
}

export default Showcase;
