import React from 'react'
import { Row, Col } from 'antd'
import { connect } from 'react-redux'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import NavLeft from '../../components/NavLeft/NavLeft'
import '../../style/common.less'

class Admin extends React.Component{

  render(){
    return (
      <Row className="container">
        <Col span={4} className="nav-left">
          <NavLeft/>
        </Col>
        <Col span={20} className="main">
          <Header/>
          <Row className="content">
              {this.props.children}
          </Row>
          <Footer/>
        </Col>
      </Row>
    )
  }
}
export default connect()(Admin)