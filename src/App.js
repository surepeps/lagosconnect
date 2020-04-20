import React from 'react';
import Lagos from "./Search/Lagos";
import Ogun from "./Search/Ogun";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
      <div>
          <Router>
                <div className="mobile-menu md:hidden">
                    <div className="mobile-menu-bar">
                        <Link to="/" className="flex mr-auto">
                            <img alt="LOGO ALT HERE" className="w-40" src="police.png" />
                        </Link>
                        <Link to="" id="mobile-menu-toggler"> <FontAwesomeIcon icon={faBars}  className="w-8 h-8 text-white transform -rotate-90" /> </Link>
                    </div>
                    <ul className="border-t border-theme-24 py-5 hidden">
                        <li>
                            <Link to="/" className="menu">
                                <div className="menu__icon"> <i data-feather="home"></i> </div>
                                <div className="menu__title"> Lagos </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="lagosconnect/ogun" className="menu">
                                <div className="menu__icon"> <i data-feather="home"></i> </div>
                                <div className="menu__title"> Ogun </div>
                            </Link>
                        </li>
                        <li className="menu__devider my-6"></li>
                    </ul>
                </div>
                
                
                
                <Switch>
                    <Route path="lagosconnect/ogun">
                      <div className="border-b border-theme-24 -mt-10 md:-mt-5 -mx-3 sm:-mx-8 px-3 sm:px-8 pt-3 md:pt-0 mb-10">
                          <div className="top-bar-boxed flex items-center">
                              <Link to="/" className="-intro-x hidden md:flex">
                                  <img alt="" className="w-40" style={{marginTop: 30}} src="police.png" />
                              </Link>
                              <div className="-intro-x breadcrumb breadcrumb--light mr-auto"> <h1>Emergency Numbers Lagos State Police Command (Ogun)</h1> </div>
                          </div>
                      </div>
                      <nav className="top-nav">
                          <ul>
                              <li>
                                  <Link to="/" className="top-menu">
                                      <div className="top-menu__icon"> <i data-feather="home"></i> </div>
                                      <div className="top-menu__title"> Lagos </div>
                                  </Link>
                              </li>
                              <li>
                                  <Link to="lagosconnect/ogun" className="top-menu top-menu--active">
                                      <div className="top-menu__icon"> <i data-feather="home"></i> </div>
                                      <div className="top-menu__title"> Ogun </div>
                                  </Link>
                              </li>
                          </ul>
                      </nav>
                        <Ogun />
                    </Route>
                    <Route path="/">
                          <div className="border-b border-theme-24 -mt-10 md:-mt-5 -mx-3 sm:-mx-8 px-3 sm:px-8 pt-3 md:pt-0 mb-10">
                              <div className="top-bar-boxed flex items-center">
                                  <a to="/" className="-intro-x hidden md:flex">
                                      <img alt="" className="w-40" style={{marginTop: 30}} src="police.png" />
                                  </a>
                                  <div className="-intro-x breadcrumb breadcrumb--light mr-auto"> <h1>Emergency Numbers Lagos State Police Command</h1> </div>
                              </div>
                          </div>
                          <nav className="top-nav">
                              <ul>
                                  <li>
                                      <Link to="/" className="top-menu top-menu--active">
                                          <div className="top-menu__icon"> <i data-feather="home"></i> </div>
                                          <div className="top-menu__title"> Lagos </div>
                                      </Link>
                                  </li>
                                  <li>
                                      <Link to="lagosconnect/ogun" className="top-menu">
                                          <div className="top-menu__icon"> <i data-feather="home"></i> </div>
                                          <div className="top-menu__title"> Ogun </div>
                                      </Link>
                                  </li>
                              </ul>
                          </nav>
                        <Lagos />
                    </Route>
                </Switch>
              </Router>
      </div>
  );
}

export default App;
