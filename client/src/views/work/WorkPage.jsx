import Cards from "../../components/cards/Cards";
import "./work.css";

function WorkPage({ workData }) {
  return (
    <div className="workContainer">
      {!workData ? (
        <h1>Loading...</h1>
      ) : (
        workData?.map((e) => (
          <Cards
            header={e.company}
            text={e.description}
            title={e.years}
            key={e.id}
          />
        ))
      )}
    </div>
  );
}

export default WorkPage;
