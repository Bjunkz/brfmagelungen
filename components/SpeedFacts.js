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
