/**
 * Created by Administrator on 2017/9/23 0023.
 */
import React, { Component } from 'react'
import $ from 'jquery'
import Header from './component/header'
import OrderListItem from './component/OrderListItem'

// 订单列表页面
export default class OrderListPage extends Component {
  constructor(props) {
    super(props)

    console.log('run OrderListPage')
    this.state = {orderInfos: [], isLoading: true}

    this.headerLeftClick = this.headerLeftClick.bind(this)
    this.headerRightClick = this.headerRightClick.bind(this)
  }

  componentDidMount() {
    this.loadDataFromMock()
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>加载中....</div>
      )
    } else {
      // 显示列表内容
      let items = this.state.orderInfos.map(function (orderInfo, index) {
        return <OrderListItem
          key={index}
          orderInfo={orderInfo}
        />
      })
      return (
        <div>
          <Header
            centerText='所有订单'
            leftClick={this.headerLeftClick}
            rightClick={this.headerRightClick}
          />
          <div style={{ padding: '10px 30px' }}>
            {items}
          </div>
        </div>
      )
    }
  }

  headerLeftClick() {
    console.log('headerLeftClick')
    this.context.router.push({
      pathname: '/'
    })
  }

  headerRightClick() {
    console.log('headerRightClick')
  }

  loadDataFromMock() {
    $.ajax({
      url: 'http://localhost:3003/orders?_sort=id&_order=DESC',
      dataType: 'json',
      type: 'get',
      success: orderInfos => {
        console.log(orderInfos)
        this.setState({orderInfos: orderInfos, isLoading: false})
      },
      error: (xhr, status, err) => {
        console.log(err.toString())
      }
    })
  }
}

OrderListPage.contextTypes = {
  router: React.PropTypes.object
}
