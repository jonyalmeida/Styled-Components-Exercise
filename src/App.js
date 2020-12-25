import React, { useState } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import logo from "./logo.svg";

import { theme1, theme2 } from "./index";
import ThemeSelect from "./ThemeSelect";

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
    color: ${(props) => props.theme.primary};
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
    const [theme, setTheme] = useState(theme1);

    const handleThemeChange = (e) => {
        const currTheme = e.target.value;
        currTheme === "theme1" ? setTheme(theme1) : setTheme(theme2);
    };

    return (
        <ThemeProvider theme={theme}>
            <AppWrapper>
                <AppHeader className='App-header'>
                    <AppLogo src={logo} className='App-logo' alt='logo' />
                    <AppTitle className='App-title'>Welcome to React</AppTitle>
                </AppHeader>
                <AppIntro>
                    To get started edit <code>src/App.js</code> and save to
                    reload.
                    <EmojiWrapper aria-label='nail polish' />
                </AppIntro>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Learn React
                </a>
                <ThemeSelect handleThemeChange={handleThemeChange} />
            </AppWrapper>
        </ThemeProvider>
    );
}
