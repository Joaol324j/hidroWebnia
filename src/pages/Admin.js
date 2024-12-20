import React from 'react';
import styled from 'styled-components';
import { Tab, Tabs, Container } from 'react-bootstrap';
import ListDevice from '../components/ListDevice';
import AdminDetails from '../components/AdminDetails';
import NewDevice from '../components/NewDevice';

const AdminStyle = styled.div`
  h1 {
    padding: 3rem;
    text-align: center;
    color: #26503c;
    margin-top: 20px;
  }
`;

const StyledTabs = styled(Tabs)`
  .nav-link {
    color: #ffffff;
    background-color: #26503c; 
    border-color: #ffffff; 
  }

  .nav-link.active {
    color: #ffffff; 
    background-color: #1e3932; 
    border-color: #ffffff; 
  }

  .nav-link:hover {
    color: #ffffff; 
    background-color: #1e3932; 
  }
`;

const Admin = () => {

  return (
    <Container>
      <AdminStyle>
        <h1>Administração</h1>
        <StyledTabs
          defaultActiveKey="devices"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="devices" title="Hidroponia">
            <ListDevice />
          </Tab>
          <Tab eventKey="detalhes" title="Detalhes">
            <AdminDetails />
          </Tab>
          <Tab eventKey="newdevice" title="Nova Hidroponia">
            <NewDevice />
          </Tab>
        </StyledTabs>
      </AdminStyle>
    </Container>
  );
};

export default Admin;
