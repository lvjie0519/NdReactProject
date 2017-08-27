/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React, { Component } from 'react'
import OrderListItem from './component/OrderListItem'

export default class ApplyOrderList extends Component {
  constructor(props) {
    super(props)

    this.initOrders()
    this.onItemClick = this.onItemClick.bind(this)
  }

  initOrders() {
    this.orders = [
      {
        'orderId': '1000',
        'orderName': '电脑维修单'
      },
      {
        'orderId': '1002',
        'orderName': '年假申请表'
      },
      {
        'orderId': '1003',
        'orderName': '不关机权限审批表'
      },
      {
        'orderId': '1004',
        'orderName': '盖章申请表（人力章）'
      },
      {
        'orderId': '1005',
        'orderName': '工牌制作申请表'
      },
      {
        'orderId': '1006',
        'orderName': '物品申请表'
      },
      {
        'orderId': '1007',
        'orderName': '会议室申请表'
      }
    ]
  }

  render() {
    let items = this.orders.map((order, index) => {
      return <OrderListItem
        key={index}
        itemType={1}
        order={order}
        onItemClick={this.onItemClick}
      />
    })
    return (
      <div style={{padding: '10px 30px'}}>
        {items}
      </div>
    )
  }

  onItemClick(orderInfo) {
    console.log(orderInfo.orderName)
    this.context.router.push({
      pathname: '/edit-order',
      state: {
        orderInfo: orderInfo
      }
    })
  }
}

ApplyOrderList.contextTypes = {
  router: React.PropTypes.object
}
