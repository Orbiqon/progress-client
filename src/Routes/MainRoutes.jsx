import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { LINKS } from 'utils';
import {
  Faq,
  Home,
  DnaQuestionnaire,
  HealthQuestionnaire,
  Booking,
  HealthScore,
  LearnMore,
  OverView,
  Support,
  Private,
  Terms,
  OrderDna
} from 'pages';

function MainRoutes() {
  const {
    BOOKING,
    LEARN_MORE,
    OVERVIEW,
    SUPPORT,
    FAQ,
    HOME,
    PRIVATE,
    TERMS,
    HEALTH_SCORE,
    QUESTIONNAIRE,
    DNA_QUESTIONNAIRE,
    ORDER_DNA
  } = LINKS;

  return (
    <Router>
      <Switch>
        <Route exact path={DNA_QUESTIONNAIRE} component={DnaQuestionnaire} />
        <Route exact path={FAQ} component={Faq} />
        <Route exact path={LEARN_MORE} component={LearnMore} />
        <Route exact path={SUPPORT} component={Support} />
        <Route exact path={OVERVIEW} component={OverView} />
        <Route exact path={HOME} component={Home} />
        <Route exact path={PRIVATE} component={Private} />
        <Route exact path={TERMS} component={Terms} />
        <Route exact path={BOOKING} component={Booking} />
        <Route exact path={QUESTIONNAIRE} component={HealthQuestionnaire} />
        <Route exact path={HEALTH_SCORE} component={HealthScore} />
        <Route exact path={ORDER_DNA} component={OrderDna} />
      </Switch>
    </Router>
  );
}

export default MainRoutes;
