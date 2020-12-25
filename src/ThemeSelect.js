import React from "react";
import styled from "styled-components";

const Select = styled.select`
    margin: 2rem 0.5rem;
    padding: 0rem 0.5rem;

    font-family: Roboto;
    font-size: 1rem;

    border: 1px solid ${(props) => props.theme.light};
`;
