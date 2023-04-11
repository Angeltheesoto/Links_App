import React from "react";
import Cards from "../../components/cards/Cards";
import "./portfolio.css";

function PortfolioPage({ portfolioData }) {
  return (
    <div className="portfolioContainer">
      {!portfolioData ? (
        <h1>Loading...</h1>
      ) : (
        portfolioData?.map((e) => (
          <Cards
            header={e.title}
            text={e.description}
            image={e.url}
            key={e.id}
          />
        ))
      )}
    </div>
  );
}

export default PortfolioPage;
