import { FunctionComponent } from "react";
import SearchSection from "../components/search-section";
import PopDestinationsMain from "../components/pop-destinations-main";
import RecommendedHolidaysContainer from "../components/recommended-holidays-container";
import PopularStays from "../components/popular-stays";
import Footer from "../components/footer1";
import styles from "./root.module.css";

const Root: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <div className={styles.rootChild} />
      <img className={styles.rootItem} alt="" src="/group-16@2x.png" />
      <img
        className={styles.rootInner}
        loading="lazy"
        alt=""
        src="/group-17.svg"
      />
      <h2 className={styles.madeByTeam}>Made by Team Locofy</h2>
      <div className={styles.travelTitle}>
        <h1 className={styles.travelWebsite}>Travel Website</h1>
      </div>
      <div className={styles.homepage}>
        <div className={styles.heroSection}>
          <header className={styles.topHeader}>
            <div className={styles.topContainer}>
              <img
                className={styles.fickleflightLogoIcon}
                loading="lazy"
                alt=""
                src="/fickleflight-logo.svg"
              />
              <div className={styles.navigationRight}>
                <nav className={styles.navigationMenu}>
                  <a className={styles.explore}>Explore</a>
                  <a className={styles.search}>Search</a>
                  <a className={styles.hotels}>Hotels</a>
                  <a className={styles.offers}>Offers</a>
                </nav>
                <div className={styles.accountSection}>
                  <img
                    className={styles.hamburgerMenuIcon}
                    alt=""
                    src="/hamburgermenu@2x.png"
                  />
                  <img
                    className={styles.notificationBellIcon}
                    loading="lazy"
                    alt=""
                    src="/notification-bell@2x.png"
                  />
                  <img
                    className={styles.unsplashd1upkifd04aIcon}
                    loading="lazy"
                    alt=""
                    src="/unsplashd1upkifd04a@2x.png"
                  />
                </div>
              </div>
            </div>
          </header>
          <SearchSection />
        </div>
        <div className={styles.homeContents}>
          <div className={styles.upcomingFlightSection}>
            <b className={styles.upcomingFlight}>Upcoming Flight</b>
            <div className={styles.flightDetails}>
              <div className={styles.flightMainContainer}>
                <div className={styles.toAndFrom}>
                  <div className={styles.fromDetails}>
                    <b className={styles.sin}>SIN</b>
                    <div className={styles.singapore}>Singapore</div>
                  </div>
                  <div className={styles.duration}>
                    <b className={styles.h55m}>15H 55M</b>
                    <img
                      className={styles.durationChild}
                      alt=""
                      src="/group-17-1.svg"
                    />
                  </div>
                  <div className={styles.toDetails}>
                    <b className={styles.lax}>LAX</b>
                    <div className={styles.losAngeles}>Los Angeles</div>
                  </div>
                </div>
                <div className={styles.horizontalLine} />
                <div className={styles.departureDetails}>
                  <div className={styles.departsOn1}>
                    Departs on: 1 May, 08:00 AM
                  </div>
                  <div className={styles.daysToGoContainer}>
                    <b>4 days</b>
                    <span> to go</span>
                  </div>
                </div>
              </div>
              <div className={styles.lineSeparator} />
              <div className={styles.prepareMenu}>
                <div className={styles.prepareForYour}>
                  Prepare for your trip
                </div>
                <div className={styles.tripMenus}>
                  <div className={styles.hotel}>
                    <img
                      className={styles.hotelChild}
                      loading="lazy"
                      alt=""
                      src="/group-21.svg"
                    />
                    <div className={styles.hotel1}>Hotel</div>
                  </div>
                  <div className={styles.attractions}>
                    <div className={styles.itemBackgroundsParent}>
                      <div className={styles.itemBackgrounds} />
                      <img
                        className={styles.groupIcon}
                        loading="lazy"
                        alt=""
                        src="/group.svg"
                      />
                    </div>
                    <div className={styles.attractions1}>Attractions</div>
                  </div>
                  <div className={styles.eats}>
                    <img
                      className={styles.eatsChild}
                      alt=""
                      src="/group-21-1.svg"
                    />
                    <div className={styles.eats1}>Eats</div>
                  </div>
                  <div className={styles.commute}>
                    <div className={styles.rectangleParent}>
                      <div className={styles.groupChild} />
                      <img
                        className={styles.vectorIcon}
                        loading="lazy"
                        alt=""
                        src="/vector1.svg"
                      />
                    </div>
                    <div className={styles.commute1}>Commute</div>
                  </div>
                  <div className={styles.taxi}>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.groupItem} />
                      <img
                        className={styles.vectorIcon1}
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                    <div className={styles.taxi1}>Taxi</div>
                  </div>
                  <div className={styles.movies}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupInner} />
                      <img
                        className={styles.vectorIcon2}
                        alt=""
                        src="/vector-2.svg"
                      />
                    </div>
                    <div className={styles.movies1}>Movies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PopDestinationsMain />
          <RecommendedHolidaysContainer />
          <PopularStays />
        </div>
        <div className={styles.footerSection}>
          <div className={styles.formContainer}>
            <img
              className={styles.formBackgroundIcon}
              alt=""
              src="/form-background@2x.png"
            />
            <div className={styles.shareYourTravelsForm}>
              <div className={styles.formHeader}>
                <b className={styles.formTitleSubtext}>
                  subscribe to our newsletter
                </b>
                <b className={styles.formTitle}>Get weekly updates</b>
              </div>
              <div className={styles.form}>
                <div className={styles.formText}>
                  <div className={styles.fillInYour}>
                    Fill in your details to join the party!
                  </div>
                </div>
                <div className={styles.formFields}>
                  <div className={styles.destinationNameInput}>
                    <div className={styles.input}>
                      <div className={styles.inactive}>
                        <div className={styles.yourName}>Your name</div>
                        <div className={styles.muiAutocompleteIndicator}>
                          <div className={styles.iconbutton}>
                            <div className={styles.unstylediconbutton}>
                              <img
                                className={styles.closeIcon}
                                alt=""
                                src="/close.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.arrow}>
                          <img
                            className={styles.arrowdropdownIcon}
                            alt=""
                            src="/arrowdropdown.svg"
                          />
                        </div>
                        <div className={styles.muiautocompletetag}>
                          <div className={styles.chip}>
                            <div className={styles.container}>
                              <div className={styles.avatar}>
                                <div className={styles.op}>F</div>
                              </div>
                              <div className={styles.typography}>
                                <div className={styles.chip1}>Chip</div>
                              </div>
                              <img
                                className={styles.cancelIcon}
                                alt=""
                                src="/cancel-6.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.chip2}>
                            <div className={styles.container1}>
                              <div className={styles.avatar1}>
                                <div className={styles.op1}>F</div>
                              </div>
                              <div className={styles.typography1}>
                                <div className={styles.chip3}>Chip</div>
                              </div>
                              <img
                                className={styles.cancelIcon1}
                                alt=""
                                src="/cancel-6.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.nameInput}>
                    <div className={styles.input1}>
                      <div className={styles.inactive1}>
                        <div className={styles.emailAddress}>Email address</div>
                        <div className={styles.muiAutocompleteIndicator1}>
                          <div className={styles.iconbutton1}>
                            <div className={styles.unstylediconbutton1}>
                              <img
                                className={styles.closeIcon1}
                                alt=""
                                src="/close.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.arrow1}>
                          <img
                            className={styles.arrowdropdownIcon1}
                            alt=""
                            src="/arrowdropdown-1.svg"
                          />
                        </div>
                        <div className={styles.muiautocompletetag1}>
                          <div className={styles.chip4}>
                            <div className={styles.container2}>
                              <div className={styles.avatar2}>
                                <div className={styles.op2}>F</div>
                              </div>
                              <div className={styles.typography2}>
                                <div className={styles.chip5}>Chip</div>
                              </div>
                              <img
                                className={styles.cancelIcon2}
                                alt=""
                                src="/cancel-6.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.chip6}>
                            <div className={styles.container3}>
                              <div className={styles.avatar3}>
                                <div className={styles.op3}>F</div>
                              </div>
                              <div className={styles.typography3}>
                                <div className={styles.chip7}>Chip</div>
                              </div>
                              <img
                                className={styles.cancelIcon3}
                                alt=""
                                src="/cancel-6.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.button}>
                  <div className={styles.unstyledbutton}>
                    <div className={styles.button1}>submit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Root;
