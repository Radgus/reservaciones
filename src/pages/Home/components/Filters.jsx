import React from "react";
import Styled from "styled-components";

const Container = Styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 15px 10px;
`;

const Filter = Styled.div`
  width: 40%;
  display: flex;
  p {
    margin: 0;
    margin-right: 5px;
  }
  label {
    margin-right: 5px;
  }
`;

const Filters = ({handleDate, valueDate, handleHour}) => {
  return (
    <Container>
      <Filter>
        <label for="start">Fecha: </label>
        <input
          type="date"
          id="start"
          name="reservation-start"
          value={valueDate}
          min="2021-07-01"
          max="2025-12-31"
          onChange={handleDate}
        />
      </Filter>

      <Filter>
        <p>Hora: </p>
        <select name="select" onChange={handleHour}>
          <option value="13:00" selected>
            13:00
          </option>
          <option value="14:00">14:00</option>
          <option value="15:00">15:00</option>
          <option value="16:00">16:00</option>
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
        </select>
      </Filter>
    </Container>
  );
};

export default Filters;
