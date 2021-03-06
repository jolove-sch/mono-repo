import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import AddBox from '../element/addBox';
import { FaBaby } from 'react-icons/fa';
import { FiMonitor } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';

const MainPage = ({user}) => {

  const logOut = () => {
    console.log('LogOut');
    user.logout();
  }
  
  return ( 
    <Container1>
      <TopBar>
        <Link to="/">
          <Logout>
            <MdLogout className="logout" onClick={logOut}/>
          </Logout>
        </Link>
          <Title>실시간 아이정보
            <FaBaby className="baby" />
          </Title>
      </TopBar>
      <AddBox />
      <BottomBar>
        <BottomLogoContainer>
        <BottomBaby>
        <Link to="/mainpage">
          <FaBaby className="bottombaby" />
        </Link>
        </BottomBaby>
        <BottomMonitor>
        <Link to="/monitoringpage">
          <FiMonitor className="bottommonitor"/>
        </Link>
        </BottomMonitor>
        <BottomUser>
        <Link to="/bandregisterpage">
          <FaUserCircle className="bottomuser"/>
        </Link>
        </BottomUser>
        </BottomLogoContainer>
      </BottomBar>
    </Container1>
  );
}

export default MainPage;

const Container1 = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  overflow: hidden;
  background: white;
`;

const TopBar = styled.nav`
   position: fixed;
   top: 0;
   left: 0;
   height: 3rem;
   width: 100vw;
   color: black;
   background: #ecbd45;
   font-weight: bold;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #0e3fbd;
    font-weight: bold;
    font-size: 20px;
    width: 100%;
    
   .baby {
     font-size: 25px;
     color: #FFD3C3;
   }
`;

const Logout = styled.div`
  height: 30px;
  width: 30px;
  .logout {
    font-size: 25px;
    color: #0e3fbd;
  }
`;
const BottomBar = styled.nav`
  height: 3rem;
  width: 100vw;
  color: black;
  background:#ecbd45;
  font-weight: bold;
  position: fixed;
  bottom: 0;
  align-items: center;
`;

const BottomLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  margin-top: 10px;
`;

const BottomBaby = styled.div`

  .bottombaby {
    font-size: 30px;
    color: #FFD3C3;
  }
`;

const BottomMonitor = styled.div`
  
  .bottommonitor {
    font-size: 30px;
    color: #0e3fbd;
  }
`;

const BottomUser = styled.div`
  
  .bottomuser {
    font-size: 30px;
    color: #0e3fbd;
  }
`;