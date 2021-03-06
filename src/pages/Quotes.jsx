import React, { useEffect, useState } from "react";
import styled from "styled-components";
import quotes from "../lib/quotes";
import FetchData from "../api/FetchData";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export const Holder = styled.div`
  /* margin-top: 200px; */
  padding: 0 100px;
`;

const Quotes = () => {
  const [randomQuote, setRandomQuote] = useState();

  useEffect(() => {
    (async () => {
      const quote = await FetchData();
      setRandomQuote(quote);
      console.log(quote);
      console.log(quote.text);
    })();
  }, []);

  return (
    <Container>
      <Holder>
        <br></br>
        {quotes.map((item, k) => {
          return (
            <div key={k}>
              {item.highlighted ? (
                <span style={{ color: "red", fontWeight: "bolder" }}>
                  <p>{item.quote}</p>
                  <strong>{item.author}</strong>
                  <br></br>
                  <br></br>
                </span>
              ) : (
                <div>
                  <p>{item.quote}</p>
                  <strong>{item.author}</strong>
                  <br></br>
                  <br></br>
                </div>
              )}
            </div>
          );
        })}

        <div
          style={{ marginTop: 100, position: "relative", marginBottom: "40px" }}
        >
          {randomQuote ? (
            <div>
              {"Random Quote"}
              <small>
                [I do not agree with all of them, this is just for fun]
              </small>
              :<br></br>
              <br></br>`{randomQuote.text}` <br></br>
              <strong>- {randomQuote.author}</strong>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </Holder>
    </Container>
  );
};

export default Quotes;
