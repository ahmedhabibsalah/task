import './App.css';
import {BrowserRouter as Router , Switch, Route, useLocation} from 'react-router-dom'
import Home from './pages/Home';
import Survey from './pages/Survey';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';

const Section = styled.section`
  overflow-x: hidden;
`;
function App() {
  let location = useLocation();
  return (
    <Section>
    <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path='/' exact component={Home} />
        <Route path="/survey" component={Survey}/>
        </Switch>
        </AnimatePresence>
    </Section>
  );
}

export default App;
