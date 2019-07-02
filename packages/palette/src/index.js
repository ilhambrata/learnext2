import React from 'react';

const color = {
  redTheme: {
    palette: {
      primary: {
        light: '#fce4ec',
        main: '#e91e63',
        dark: '#ad1457',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff80ab',
        main: '#ff4081',
        dark: '#880e4f',
        contrastText: '#fff',
      },
    },
  },
  greenTheme: {
    palette: {
      primary: {
        light: '#e0f2f1',
        main: '#009688',
        dark: '#00695c',
        contrastText: '#fff',
      },
      secondary: {
        light: '#64ffda',
        main: '#008573',
        dark: '#004d40',
        contrastText: '#fff',
      },
    },
  },
  blueTheme: {
    palette: {
      primary: {
        light: '#e8eaf6',
        main: '#3f51b5',
        dark: '#283593',
        contrastText: '#fff',
      },
      secondary: {
        light: '#8c9eff',
        main: '#304ffe',
        dark: '#1a237e',
        contrastText: '#fff',
      },
    },
  },
  purpleTheme: {
    palette: {
      primary: {
        light: '#f3e5f5',
        main: '#9c27b0',
        dark: '#6a1b9a',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ea80fc',
        main: '#aa00ff',
        dark: '#4a148c',
        contrastText: '#fff',
      },
    },
  },
  orangeTheme: {
    palette: {
      primary: {
        light: '#fff3e0',
        main: '#ef6c00',
        dark: '#e65100',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff9e80',
        main: '#ff3d00',
        dark: '#bf360c',
        contrastText: '#fff',
      },
    },
  }
}

const Button = ({ type = 'button', children, onClick }) => (
    <div>
      <button type={type} className="button" onClick={() => onClick(color.greenTheme)}>
        {children}
      </button>
      <button type={type} className="button" onClick={() => onClick(color.redTheme)}>
        {children}
      </button>
      <button type={type} className="button" onClick={() => onClick(color.orangeTheme)}>
        {children}
      </button>
  </div>
);

export default Button;
