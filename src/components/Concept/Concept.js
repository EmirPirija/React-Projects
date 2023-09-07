function Concept(props) {
  return (
    <li className="concept">
      <h2>{props[0].title}</h2>
      <img src={props[0].image} alt={props[0].title} />
      <p>{props[0].description}</p>
    </li>
  );
}

export default Concept;
