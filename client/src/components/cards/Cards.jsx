import Card from "react-bootstrap/Card";
import "./cards.css";

function Cards({
  header,
  title,
  text,
  image,
  edit,
  editevent,
  del,
  deleteevent,
}) {
  return (
    <div
      className="mx-auto"
      style={{ width: "fit-content", marginTop: "2rem" }}
    >
      <Card
        bg="light"
        key="ligh"
        text="dark"
        style={{ width: "18rem" }}
        className="mb-2"
      >
        {header ? <Card.Header>{header}</Card.Header> : null}
        <Card.Body>
          {title ? <Card.Title>{title}</Card.Title> : null}
          {image ? <img src={image} alt={header} className="cardsImg" /> : null}
          {text ? <Card.Text>{text}</Card.Text> : null}
          {edit ? <button onClick={editevent}>{edit}</button> : null}
          {del ? <button onClick={deleteevent}>{del}</button> : null}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
