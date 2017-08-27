/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React, { Component } from 'react'
import $ from 'jquery'
import OrderListItem from './component/OrderListItem'

export default class MyOrderList extends Component {
  constructor(props) {
    super(props)

    this.state = {orderInfos: [], isLoading: true}
    this.onItemClick = this.onItemClick.bind(this)
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>加载中....</div>
      )
    } else {
      var items = this.state.orderInfos.map(function (orderInfo, index) {
        return <OrderListItem
          key={index}
          itemType={2}
          order={orderInfo}
          onItemClick={this.onItemClick} />
      }.bind(this))
      return (
        <div style={{ padding: '10px 30px' }}>
          {items}
        </div>
      )
    }
  }

  componentDidMount() {
    this.loadDataFromMock()
  }

  loadDataFromMock() {
    $.ajax({
      url: 'http://localhost:3003/orders?_sort=id&_order=DESC',
      dataType: 'json',
      type: 'get',
      success: orderInfos => {
        this.setState({orderInfos: orderInfos, isLoading: false})
      },
      error: (xhr, status, err) => {
        console.log(err.toString())
      }
    })
  }

  onItemClick(orderInfo) {
    console.log(orderInfo.orderName)
  }
}
