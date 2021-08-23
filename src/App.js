import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Information from 'pages/information';
import LearnMore from 'pages/learn-more';
import Precautions from 'pages/precautions';
import OverView from 'pages/overview';
import Home from 'pages/home';
import Complete from 'pages/complete';
import DnaQuestionare from 'pages/dna-questionare';
import InitDataCollect from 'pages/init-data-collect';
import QuestionareVideo from 'pages/questionare-video';
import EntryPoint from 'pages/entry-point';
import HealthScore from 'pages/health-score';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Arrow from 'components/Arrow/arrow';

function App() {
  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <Arrow dir="right" />,
    prevArrow: <Arrow dir="left" />,

    centerPadding: '25%',
  };
  return (
    <div>
      {/* <MobileForm /> */}
      {/* <BookCallVideo /> */}
      {/* <div className="slider2">
        <Slider {...settings} className="m-100">
          {[...Array(4)].map(() => (
            <div className="rounded-sm h-200 w-270 text-base">
              <img src="/images/support/slider-pic.jpeg" />

              <div className="w-270 mt-20">
                <div>
                  <div className="text-base  font-display text-black-gray font-bold font-display pb-10">
                    Mike Vincent
                  </div>
                  <div className="text-sm font-display text-gray-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div> */}
      <Router>
        <Switch>
          <Route exact path="/information" component={Information} />
          <Route exact path="/learn-more" component={LearnMore} />
          <Route exact path="/precautions" component={Precautions} />
          <Route exact path="/overview" component={OverView} />
          <Route exact path="/" component={Home} />
          <Route exact path="/complete" component={Complete} />
          <Route exact path="/questionare" component={DnaQuestionare} />
          <Route exact path="/init-data" component={InitDataCollect} />
          <Route exact path="/video" component={QuestionareVideo} />
          <Route exact path="/entry" component={EntryPoint} />
          <Route exact path="/score" component={HealthScore} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
