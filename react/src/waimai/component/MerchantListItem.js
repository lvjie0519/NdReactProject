/**
 * Created by Administrator on 2017/9/23 0023.
 */
import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from '../../theme/styles/merchantListItem.css'

// 商家列表 item
@CSSModules(styles, {allowMultiple: true})
export default class MerchantListItem extends Component {
  static propTypes = {
    merchantInfo: React.PropTypes.object.isRequired,
    onBuyClick: React.PropTypes.func,
    isShowBuyBtn: React.PropTypes.bool.isRequired
  }

  static getDefaultProps = {
    merchantInfo: {
      merchantId: '',
      merchantLogo: '',
      merchantName: '',
      merchantDes: '',
      merchantPrice: '',
      merchantCount: 0
    },
    isShowBuyBtn: false
  }

  render() {
    return (
      <div styleName='merchant-item-box' >
        <img src={require('../../static/images/a.jpg')} />
        <h2>{this.props.merchantInfo.merchantName}</h2>
        <span>{this.props.merchantInfo.merchantCount}</span>
        <span>{this.props.merchantInfo.merchantDes}</span>
        <span>{this.props.merchantInfo.merchantPrice}</span>
        {this.props.isShowBuyBtn ? <button onClick={(e) => {
          this.onBuyClick(e)
        }}>图片</button> : <div>''</div>}
      </div>
    )
  }

  onBuyClick(e) {
    if (this.props.onBuyClick) {
      this.props.onBuyClick(this.props.merchantInfo)
    }
  }
}
