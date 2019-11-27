import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import App from '../App'
// import Login from '../pages/login/login'
import Admin from '../pages/admin/admin'
import Home from '../pages/home/home'
// import NoMatch from '../pages/nomatch'
import Buttons from '../pages/ui/buttons'
import Modals from '../pages/ui/modals'
import Loadings from '../pages/ui/loadings'
import Notice from '../pages/ui/notice'
import Messages from '../pages/ui/messages'
import Tabs from '../pages/ui/tabs'
import Gallery from '../pages/ui/gallery'
import Carousel from '../pages/ui/carousel'

import FormLogin from '../pages/form/login'
import FormRegister from '../pages/form/register'
import BasicTable from '../pages/table/basicTable'
import HighTable from '../pages/table/highTable'

import Rich from '../pages/rich/rich'
import City from '../pages/city/city'
// import Order from '../pages/order/order'
// import Common from '../pages/common/common'
// import OrderDetail from '../pages/order/detail'
// import BikeMap from '../pages/map/bikeMap'
// import User from '../pages/user/user'
// import Bar from '../pages/echarts/bar/bar'
// import Pie from '../pages/echarts/pie/pie'
// import Line from '../pages/echarts/line/line'
// import Permission from '../pages/permission/permission'

export default class ERouter extends React.Component {
  render () {
    return (
      <HashRouter>
        <App>
          <Switch>
            {/* <Route path="/login" component={Login} />
            <Route path="/common" render={() => 
              <Common>
                <Route path="/common/order/detail/:orderId" component={OrderDetail} />
              </Common>
            } /> */}
            <Route path="/" render = {() =>
              <Admin>
                <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/ui/buttons" component={Buttons} />
                  <Route path="/ui/modals" component={Modals} />
                  <Route path="/ui/loadings" component={Loadings} />
                  <Route path="/ui/notification" component={Notice} />
                  <Route path="/ui/messages" component={Messages} />
                  <Route path="/ui/tabs" component={Tabs} />
                  <Route path="/ui/gallery" component={Gallery} />
                  <Route path="/ui/carousel" component={Carousel} />
                  <Route path="/form/login" component={FormLogin} />
                  <Route path="/form/reg" component={FormRegister} />
                  <Route path="/table/basic" component={BasicTable} />
                  <Route path="/table/high" component={HighTable} />
                  <Route path='/rich' component={Rich} />
                  <Route path="/city" component={City} />
                  {/* <Route path="/order" component={Order} /> */}
                  {/* <Route path='/bikeMap' component={BikeMap} /> */}
                  {/* <Route path='/user' component={User} /> */}
                  {/* <Route path="/charts/bar" component={Bar} /> */}
                  {/* <Route path="/charts/pie" component={Pie} /> */}
                  {/* <Route path="/charts/line" component={Line} /> */}
                  {/* <Route path="/permission" component={Permission} /> */}
                  <Redirect to="/home" />
                  {/* <Route component={NoMatch} /> */}
                </Switch>
              </Admin>
            } />
          </Switch>
        </App>
      </HashRouter>
    )
  }
}
