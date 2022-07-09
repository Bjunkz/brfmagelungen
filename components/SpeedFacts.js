export default function speedFacts(facts) {
  const sortedFacts = facts.facts.sort((a, b) => {
    return new Date(a.sys.createdAt) - new Date(b.sys.createdAt);
  });

  return (
    <>
      <div className="speedFacts-main-container flex-row-space-between">
        <h3>Snabbfakta</h3>

        <div className="speedFacts-container">
          {sortedFacts.map((fact, index) => {
            return (
              <div className="speedFacts-row" key={index}>
                <hr></hr>
                <div className="speedFacts-row-content">
                  <div className="speedFacts-fact">{fact.fields.faktaTyp}</div>
                  <div className="speedFacts-answer">
                    {fact.fields.faktaSvar}
                  </div>
                </div>
              </div>
            );
          })}
          <hr />
        </div>
      </div>
    </>
  );
}

// const facts = [
//   { type: "Byggår", fact: "1956" },
//   { type: "Antal lägenheter", fact: "501" },
//   { type: "Parkeringsplatser", fact: "120 st" },
//   { type: "Garage", fact: "35 st" },
//   { type: "Stambytt", fact: "2001-2003" },
//   { type: "Gym/bastu", fact: "ja" },
//   { type: "Gästlägenhet", fact: "Ja, med fyra sovplatser" },
// ];
