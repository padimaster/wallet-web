/**
*
* PageFooter
*
*/

import React from 'react';
import { github } from 'utils/constants';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import { StickyFooter } from './sticky';


const Footer = StickyFooter.extend`
  textAlign: center;
  background: #efeeee;
  color: #5a5a5a;
  padding: 10px;
  font-size: 14px;
`;

const Span = styled.span`
  color: #b9b9b9;
  margin-top:3px;
`;

function PageFooter() {
  return (
    <Footer>
      <Row>
        <Col sm={12} xs={24}>
          {'Libertum Wallet - '}
          <a href={github} target="_blank" rel="noopener">

          </a><br />
        </Col>

        <Span>
          <Col sm={12} xs={24}>
            Coin
          </Col>
        </Span>

      </Row>
    </Footer>
  );
}

PageFooter.propTypes = {

};

export default PageFooter;
