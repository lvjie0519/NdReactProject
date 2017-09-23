/**
 * Created by Administrator on 2017/9/23 0023.
 */
import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from '../../theme/styles/orderItem.css'

// 商家列表 item
@CSSModules(styles, {allowMultiple: true})

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
      <div styleName='order-item' >
        <p styleName='order-name' >{this.props.orderInfo.merchantName}</p>
        <p styleName='order-text-box'>时间：<span styleName='order-text'>{this.props.orderInfo.createTime}</span></p>
        <p styleName='order-text-box'>价格：<span styleName='order-text'>￥{this.props.orderInfo.totalMoney}</span></p>
        <p styleName='order-text-box'>明细：
          <span styleName='order-text'>
            { this.props.orderInfo.merchantDes.length > 11 ? `${this.props.orderInfo.merchantDes.slice(0, 11)}...` : this.props.orderInfo.merchantDes }
          </span>
        </p>
      </div>
    )
  }
}
