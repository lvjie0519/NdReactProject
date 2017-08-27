/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from '../../theme/styles/questionItem.css'

@CSSModules(styles, {allowMultiple: true})
export default class OrderListItem extends Component {
  static propTypes = {
    order: React.PropTypes.object,
    itemType: React.PropTypes.number,   // 列表类型：单据申请列表：1，我的单据列表：2
    onItemClick: React.PropTypes.func
  }

  static getDefaultProps = {
    order: {
      'id': '',
      'orderId': '',
      'orderStatus': '',
      'orderName': '',
      'orderApplyTime': '',
      'orderApplyer': ''
    },
    itemType: 1
  }

  render() {
    let rightText = ''
    if (this.props.itemType === 2) {
      rightText = this.props.order.orderStatus
    }
    return (
      <div onClick={(e) => {
        this.onItemClick(e)
      }} styleName='questionItem'>
        <span styleName='questionAnswer'>{this.props.order.orderName}</span>
        <span styleName='questionCount'>{rightText}</span>
      </div>
    )
  }

  onItemClick(e) {
    this.props.onItemClick(this.props.order)
  }
}
