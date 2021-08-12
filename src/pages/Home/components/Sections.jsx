import React from 'react';
import Styled from 'styled-components';
const color = {
  empty: '#c8c7c7',
  reserved: '#A6FDD0'
}

const Container = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 1rem 0;
  padding: 1rem;
`;

const SetTable = Styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const SetChair = Styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Chair = Styled.div`
  width: 1.6rem;
  height: 0;
  border: 0.2rem solid brown;
`;

const TableCard = Styled.div`
  width: 7rem;
  height: 7rem;
  background-color: #A6FDD1;
  border: 3px solid white;
  border-radius: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  h3 {
    width: 2.7rem;
    height: 2.7rem;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 400;
    margin: 0;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &: hover {
    border: 3px solid black;
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
          <SetTable>
            <SetChair>
              <Chair />
              <Chair />
            </SetChair>
            <TableCard>
              <h3>T{mesa}</h3>
            </TableCard>
            <SetChair>
              <Chair />
              <Chair />
            </SetChair>
          </SetTable>
        ))}
      </Container>
    </>
  )
}

export default Sections;
