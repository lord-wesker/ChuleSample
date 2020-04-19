import React, { useContext } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import AppContext from '../../Context';
import {consts} from '../../constants/constants'

const AppTemplate = ({ children }) => {
  const context = useContext(AppContext);
  const { DEPARTAMENTAL, MUNICIPAL } = consts;
  
  const handleCLick = e => {
    context.setCurriculum(e.target.name);
  };

  return (
    <Container>
      <Row>
        <Col sm="4">
          <ul>
            <li>
              <Button onClick={handleCLick} name={DEPARTAMENTAL} color="link">
                Departamental
              </Button>
            </li>
            <li>
              <Button onClick={handleCLick} name={MUNICIPAL} color="link">
                Municipal
              </Button>
            </li>
          </ul>
        </Col>
        <Col sm="8">
          {children}
        </Col>
      </Row>
    </Container>
  );
}

export default AppTemplate;
