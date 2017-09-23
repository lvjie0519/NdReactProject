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
        <div styleName='merchant-img-box'>
          <img styleName='merchant-img' src={require('../../static/images/a.jpg')} />
        </div>
        <div styleName={this.props.isShowBuyBtn ? 'merchant-content' : 'merchant-content merchant-disabled'} >
          <p styleName='merchant-title' >
            <span styleName='merchant-name'>{this.props.merchantInfo.merchantName}</span>
            <span styleName='merchant-count'>{this.props.merchantInfo.merchantCount}</span>
          </p>
          <p styleName='merchant-des' >{this.props.merchantInfo.merchantDes}</p>
          <p styleName='merchant-bottom' >
            <span styleName='merchant-price' >{this.props.merchantInfo.merchantPrice}</span>
            {this.props.isShowBuyBtn ? <a styleName='merchant-buy-btn' onClick={(e) => {
              this.onBuyClick(e)
            }}>购买</a> : ''}
          </p>
        </div>
      </div>
    )
  }

  onBuyClick(e) {
    if (this.props.onBuyClick) {
      this.props.onBuyClick(this.props.merchantInfo)
    }
  }
}
