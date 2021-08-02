import { MobileFooter, DesktopFooter } from 'components/Footer';
import { MobileForm } from 'components/Form';

import React from 'react';
import {
  Switch,
  Route,
  withRouter,
  BrowserRouter as Router,
} from 'react-router-dom';
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

function App() {
  return (
    <div>
      {/* <MobileForm /> */}
      {/* <BookCallVideo /> */}
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
