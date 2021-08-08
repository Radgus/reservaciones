import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 1rem 0;
  padding: 1rem;
`;

const TableCard = Styled.div`
  width: 22%;
  height: 50px;
  background-color: #c8c7c7;
  border: 5px solid white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 3px 0px;
  h3 {
    text-align: center;
    font-size: 1.4rem;
    font-weight: 400;
    margin: 0;
  }
  &: hover {
    border: 5px solid black;
  }
`;

const Section = Styled.div`
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid black;
  h3 {
    text-align: center;
  }
`;

const Sections = ({section, mesas}) => {

  return (
    <>
      <Section>
        <h3>Sección: {section}</h3>
      </Section>
      <Container>
        {mesas && mesas.map(mesa=>(
          <TableCard>
            <h3>Mesa {mesa}</h3>
          </TableCard>
        ))}
      </Container>
    </>
  )
}

export default Sections;
