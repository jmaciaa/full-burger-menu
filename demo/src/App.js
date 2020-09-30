import React, { useState } from 'react';
import Prism from 'prismjs';
import 'font-awesome/css/font-awesome.min.css';

import './App.css';
import './prism.css';
import BurgyComponent from 'burgy-menu';

// Pages
import Home from './mockPages/home';
import About from './mockPages/about';
import Product from './mockPages/product';
import Contact from './mockPages/contact';

import home from './assets/home.jpg';
import about from './assets/about-us.jpg';
import work from './assets/work.jpg';
import contact from './assets/contact.jpg';

const routes = [
  { path: '/', img: home, name: 'path-1', Component: Home },
  { path: '/about', img: about, name: 'path-2', Component: About },
  { path: '/work', img: work, name: 'path-3', Component: Product },
  { path: '/contact', img: contact, name: 'path-4', Component: Contact },
];

const fonts = [
  'Courier',
  'Arial',
  'Helvetica',
  'Gill Sans',
  'Lucida sANS',
  'Franklin Gothic Medium',
  'Trebuchet MS',
  'Tahoma',
  'Segoe UI',
  'Cambria',
  'Georgia',
  'Verdana',
  'Geneva',
  'Arial Narrow Bold',
  'Calibri',
  'Arial Narrow',
  'Courier, monospace',
  'Lucidatypewriter, monospace',
  'Fixed, monospace',
  'monospace',
  'Comic Sans, Comic Sans MS, cursive',
  'Zapf Chancery, cursive',
  'Coronetscript, cursive',
  'Florence, cursive',
  'Parkavenue, cursive',
  'Impact, fantasy',
  'Arnoldboecklin, fantasy',
  'Oldtown, fantasy',
  'Blippo, fantasy',
  'Brushstroke, fantasy',
  'fantasy',
];

const burgers = [
  ['hamburgerSlider', 'Slider'],
  ['hamburgerSpin', 'Spin'],
  ['hamburgerElastic', 'Elastic'],
  ['hamburgerCollapse', 'Collapse'],
  ['hamburgerArrowReverse', 'Arrow'],
  ['hamburgerArrowTurnReverse', 'Arrow Turn'],
  ['hamburgerSpring', 'Spring'],
  ['hamburgerStand', 'Stand'],
];

export default function App() {
  const [state, setState] = useState({
    routes: routes,
    burger: 'hamburgerSlider',
    barColor: '#000000',
    primaryLight: '#f5f5f5',
    primaryDark: '#000000',
    primaryFont: '#ffffff',
    burgyCircle: false,
    burgyLeft: '90%',
    burgyTop: '3%',
    fontFamily: 'Courier',
  });

  const handleChange = e => {
    const key = e.target.name;
    const value = key === 'burgyTop' || key === 'burgyLeft' ? `${e.target.value}%` : e.target.value;
    const copy = { ...state };
    copy[key] = value;
    setState(copy);
  };

  const handleCircleChange = e => {
    console.log(e.target.value, e.target.name);
    setState(prevState => {
      return { ...state, burgyCircle: !prevState.burgyCircle };
    });
  };

  const codeRoutes = `const routes = [
      { path: '/', img: 'home.jpg', name: 'home', Component: Home },
      { path: '/about', img: 'about-us.jpg', name: 'about us', Component: About },
      { path: '/work', img: 'work.jpg', name: 'our work', Component: Product },
      { path: '/contact', img: 'contact.jpg', name: 'contact', Component: Contact },
    ];`;

  const code = `<BurgyComponent
  routes= Insert your routes object here!!!!!
  burger="${state.burger}"
  barColor="${state.barColor}"
  primaryLight="${state.primaryLight}"
  primaryDark="${state.primaryDark}"
  primaryFont="${state.primaryFont}"
  burgyCircle={${state.burgyCircle}}
  burgyLeft="${state.burgyLeft}"
  burgyTop="${state.burgyTop}"
  fontFamily="${state.fontFamily}"
  />;

  {routes.map(({ path, Component }) => (
    <Route key={path} exact path={path} className="page">
      <Component />
    </Route>
  ))}`;

  return (
    <div className="App">
      <BurgyComponent
        routes={routes}
        burger={state.burger}
        barColor={state.barColor}
        buttonColor={state.buttonColor}
        primaryLight={state.primaryLight}
        primaryDark={state.primaryDark}
        primaryFont={state.primaryFont}
        burgyCircle={state.burgyCircle}
        burgyLeft={state.burgyLeft}
        burgyTop={state.burgyTop}
        fontFamily={state.fontFamily}
      />
      <div className="container">
        <div className="hero">
          <h1>Welcome to React Burgy Menu</h1>
          <p>
            React Burgy Menu is a customizable and super-easy to use React component for making
            burger menus that display animated full-screen menus. The menu shows images linked to
            every option in the menu. For getting your own special burger just select the different
            options you have below, do 'npm i react-burgy-menu' in you React app and copy the
            snippet provided below into your code. <br /> Enjoy!
          </p>
          <div class="arrow bounce">
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a className="fa fa-arrow-down fa-1x" href="/"></a>
          </div>
        </div>
        <div className="customizations">
          <form action="">
            <h2>Choose your Burgy</h2>
            <div className="form-section">
              <h4>Burger Animation</h4>
              <div className="radio-selection">
                {burgers.map(burger => {
                  return (
                    <>
                      <input
                        type="radio"
                        id={burger[0]}
                        name="burger"
                        onChange={handleChange}
                        value={burger[0]}
                      />
                      <label htmlFor={burger[0]}>{burger[1]}</label>
                    </>
                  );
                })}
              </div>

              <div className="inner-section">
                <label htmlFor="barColor">
                  <h4>Burguer Color</h4>
                </label>
                <div className="color-picker-circle">
                  <input
                    type="color"
                    name="barColor"
                    value={state.barColor}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="barColor"
                    value={state.primaryLight}
                    onChange={handleChange}
                  />
                </div>

                <h4>Burguer Circle</h4>
                <div className="radio-selection">
                  <input
                    type="radio"
                    id="true"
                    name="burgyCircle"
                    onChange={handleCircleChange}
                    value="true"
                  />
                  <label htmlFor="true">Yes</label>
                  <input
                    type="radio"
                    id="false"
                    name="burgyCircle"
                    onChange={handleCircleChange}
                    value="false"
                    checked={!state.burgyCircle}
                  />
                  <label htmlFor="false">No</label>
                </div>

                <h4>Burger Position</h4>
                <label htmlFor="burgyTop">Position Y</label>
                <input
                  type="range"
                  name="burgyTop"
                  min="1"
                  max="100"
                  onChange={handleChange}
                ></input>
                <div>{state.burgyTop}</div>
                <label htmlFor="burgyLeft">Position X</label>
                <input
                  type="range"
                  name="burgyLeft"
                  id="burgyLeft"
                  min="1"
                  max="100"
                  onChange={handleChange}
                ></input>
                <div>{state.burgyLeft}</div>
              </div>
            </div>

            <h2>Add Some Flavours</h2>
            <div className="form-section">
              <div className="colors-container">
                <div className="colors-box">
                  <label htmlFor="primaryLight">
                    <h4>Primary Color</h4>
                  </label>
                  <div className="color-picker-circle">
                    <input
                      type="color"
                      name="primaryLight"
                      value={state.primaryLight}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="primaryLight"
                      value={state.primaryLight}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="colors-box">
                  <label htmlFor="primaryDark">
                    <h4>Secondary Color</h4>
                  </label>
                  <div className="color-picker-circle">
                    <input
                      type="color"
                      name="primaryDark"
                      value={state.primaryDark}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="primaryDark"
                      value={state.primaryDark}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <label htmlFor="fontFamily">
                <h4>Font Family</h4>
              </label>
              <p>
                Here you have some popular fonts to choose from. In case you want to use your own
                font, you could import it in your index.css of your React app and specify its name
                in the fontFamily prop.
              </p>
              <select className="select" id="fontFamily" name="fontFamily" onChange={handleChange}>
                {fonts.map(font => (
                  <option value={font}>{font}</option>
                ))}
              </select>
              <label htmlFor="primaryFont">
                <h4>Font Color</h4>
              </label>
              <div className="color-picker-circle">
                <input
                  type="color"
                  name="primaryFont"
                  value={state.primaryFont}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="primaryFont"
                  value={state.primaryFont}
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
          <div className="routes-section">
            <h2>One Last Thing...</h2>
            <p>
              In order for the router to work you should add in your App component an array called
              'routes' that includes objects with a 'path', 'img', 'name' and 'Component'. Something
              like this:
              <pre>
                <code className="language-javascript">{codeRoutes}</code>
              </pre>
            </p>
          </div>
          <div className="code-section">
            <h2>Your burger is ready:</h2>
            <pre>
              <code className="language-javascript">{code}</code>
            </pre>
          </div>
          <h2>Enjoy!</h2>
        </div>
        <div></div>
      </div>
    </div>
  );
}