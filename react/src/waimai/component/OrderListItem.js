/**
 * Created by Administrator on 2017/9/23 0023.
 */
import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from '../../theme/styles/questionItem.css'

// 商家列表 item
@CSSModules(styles, {allowMultiple: true})
export default class OrderListItem extends Component {
  static propTypes = {
    orderInfo: React.PropTypes.object.isRequired
  }

  static getDefaultProps = {
    orderInfo: {
      merchantName: '',
      merchantDes: '',
      createTime: '',
      totalMoney: ''
    }
  }

  render() {
    return (
      <div>
        <h2>{this.props.orderInfo.merchantName}</h2>
        <h3>时间：</h3> <h2>{this.props.orderInfo.createTime}</h2>
        <h3>价格：</h3> <h2>{this.props.orderInfo.totalMoney}</h2>
        <h3>明细：</h3> <h2>{this.props.orderInfo.merchantDes}</h2>
      </div>
    )
  }
}
