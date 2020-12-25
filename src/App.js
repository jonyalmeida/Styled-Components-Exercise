import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "./logo.svg";

const AppWrapper = styled.div`
    text-align: center;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img`
    animation: ${rotate360} infinite 120s linear;
    height: 80px;
    &:hover {
        animation: ${rotate360} infinite 1.5s linear;
    }
`;

const AppHeader = styled.div`
    background-color: #222;
    height: 12rem;
    padding: 1rem;
    color: white;
`;

const AppTitle = styled.h1`
    font-weight: 900;
`;

const AppIntro = styled.p`
    font-size: large;
    code {
        font-size: 1.3rem;
    }
`;

const EmojiWrapper = styled.span.attrs({
    role: "img",
})``;

export default function App() {
    return (
        <AppWrapper>
            <AppHeader className='App-header'>
                <AppLogo src={logo} className='App-logo' alt='logo' />
                <AppTitle className='App-title'>Welcome to React</AppTitle>
            </AppHeader>
            <AppIntro>
                To get started edit <code>src/App.js</code> and save to reload.
                <EmojiWrapper aria-label='nail polish' />
            </AppIntro>
            <a
                className='App-link'
                href='https://reactjs.org'
                target='_blank'
                rel='noopener noreferrer'>
                Learn React
            </a>
        </AppWrapper>
    );
}
