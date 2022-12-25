import React, { useState } from 'react';

import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Line from './components/Line';
import Home from './pages/Home';
import QuestionList from './pages/QuestionList';
import Tags from './pages/Tags';
import User from './pages/User';
import Companies from './components/Companies';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ExploreCollectives from './pages/ExploreCollectives';
import QuestionCreate from './pages/QuestionCreate';
import { Route, Routes } from 'react-router-dom';

const BodyContainer = styled.div`
  min-width: 1270px;
  max-width: 1270px;
  background-color: azure;
  padding-top: 56px;
  display: flex;
`;

function App() {
  const [isOpen, setOpen] = useState(false);
  const [isBugerVisible, setIsBugerVisible] = useState(true);

  //useEffect(() => console.log('a'), [isBugerVisible]);

  const searchInputRef = React.createRef();

  return (
    <div className="appContainer">
      <Line />
      <Header
        isOpen={isOpen}
        setOpen={setOpen}
        isBugerVisible={isBugerVisible}
        setIsBugerVisible={setIsBugerVisible}
        searchInputRef={searchInputRef}
      />
      <BodyContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="questions" element={<QuestionList />} />
          <Route path="tags" element={<Tags />} />
          <Route path="user" element={<User />} />
          <Route path="companies" element={<Companies />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="exploreCollectives" element={<ExploreCollectives />} />
          <Route path="questionCreate" element={<QuestionCreate />} />
        </Routes>
      </BodyContainer>
      <Footer />
    </div>
  );
}

export default App;
