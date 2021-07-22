import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 15px 10px;
  margin: 15px 0px;
`;

const TableCard = Styled.div`
  width: 22%;
  height: 95px;
  background-color: #c8c7c7;
  border: 5px solid white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 3px 0px;
  h2 {
    text-align: center;
    margin: 0;
  }
  &: hover {
    border: 5px solid black;
  }
`;

const Section = Styled.div`
  margin: 25px 0;
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
            <h2>Mesa {mesa}</h2>
          </TableCard>
        ))}
      </Container>
    </>
  )
}

export default Sections;
