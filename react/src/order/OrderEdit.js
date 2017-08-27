/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React, {Component} from 'react'
import styles from '../theme/styles/edit.css'
import CSSModules from 'react-css-modules'
import Header from './component/header'
import Dialog from './component/dialog'
import $ from 'jquery'

/**
 * 编辑页
 */
@CSSModules(styles, {allowMultiple: true})
export default class OrderEdit extends Component {
  static propTypes = {
    location: React.PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      userNameTip: '',
      userIdTip: ''
    }

    this.orderInfo = props.location.state.orderInfo
    if (this.orderInfo == null) {
      this.orderInfo = {
        'id': '',
        'orderId': '',
        'orderStatus': '',
        'orderName': '',
        'orderDes': '',
        'orderApplyer': '1234',
        'orderApplyerId': ''
      }
    }
    this.headerLeftOnClick = this.headerLeftOnClick.bind(this)
    this.submitOnClick = this.submitOnClick.bind(this)
  }

  handleSubmit() {
    let id = new Date().getTime()
    let orderId = this.orderInfo.orderId
    let orderStatus = '未审批'
    let orderName = this.orderInfo.orderName
    let orderDes = this.refs.orderDes.value.trim()
    let userName = this.refs.userName.value.trim()
    let userId = this.refs.userId.value.trim()

    let orderInfo = {
      'id': id,
      'orderId': orderId,
      'orderStatus': orderStatus,
      'orderName': orderName,
      'orderDes': orderDes,
      'orderApplyer': userName,
      'orderApplyerId': userId
    }
    console.log('orderInfo', orderInfo)
    this.postOrderInfoToServer(orderInfo)
  }

  render() {
    return (
      <div>
        <Header leftText='首页' centerText='单据编辑' leftClick={this.headerLeftOnClick} />
        <h1 styleName='smart-orderName'>{this.orderInfo.orderName}</h1>
        <form styleName='smart-edit'>
          <div styleName='smart-edit-user'>
            <span>姓名：</span>
            <input ref='userName' type='text' placeholder='仅支持中文' />
            <span style={{color: 'red'}}>{this.state.userNameTip}</span>
          </div>
          <div styleName='smart-edit-user'>
            <span>工号：</span>
            <input ref='userId' type='text' placeholder='仅限数字，长度为6至10位' />
            <span style={{color: 'red'}}>{this.state.userIdTip}</span>
          </div>
          <div style={{marginTop: 20}}>
            <span>单据说明：</span>
            <textarea ref='orderDes' rows='30' />
          </div>
          <div styleName='btn-box'>
            <span styleName='btn smart-btn-submit' onClick={this.submitOnClick}>提交</span>
          </div>
        </form>
      </div>
    )
  }

  headerLeftOnClick() {
    this.context.router.push({
      pathname: '/'
    })
  }

  checkInput() {
    let resultName = false
    let resultId = false
    const lengthName = this.refs.userName.value.length
    if (lengthName === 0) {
      this.setState({
        userNameTip: '请输入姓名'
      })
    } else if (!/^[\u0391-\uFFE5]+$/.test(this.refs.userName.value) || lengthName > 10) {
      this.setState({
        userNameTip: '请输入正确的姓名，长度最多为10位'
      })
    } else {
      this.setState({
        userNameTip: ''
      })
      resultName = true
    }
    const length = this.refs.userId.value.length
    if (length === 0) {
      this.setState({
        userIdTip: '请输入工号'
      })
    } else if (!/^[-+]?\d*$/.test(this.refs.userId.value) || length < 6 || length > 10) {
      this.setState({
        userIdTip: '请输入正确的工号，位数为6到10位'
      })
    } else {
      this.setState({
        userIdTip: ''
      })
      resultId = true
    }
    return resultName && resultId
  }

  submitOnClick() {
    let result = this.checkInput()
    console.log('result', result)
    if (result) {
      console.log('提交', this.orderInfo)
      const that = this
      Dialog.show(3, '', '是否确认提交单据？', 2000, function () {
        that.handleSubmit()
      }, function () {
        Dialog.hide()
      })
    }
  }

  // 上传数据 成功
  postOrderInfoToServer(orderInfo) {
    this.orderInfo = orderInfo
    $.ajax({
      type: 'post',
      url: 'http://localhost:3003/orders',
      data: orderInfo,
      success: infos => {
        console.log('上传成功', infos)
        this.goOrderCheckPage()
      },
      error: (xhr, status, err) => {
        console.log('上传失败', err.toString())
      }
    })
  }

  goOrderCheckPage() {
    this.context.router.push({
      pathname: '/check-order',
      state: {
        orderInfo: this.orderInfo
      }
    })
  }
}

OrderEdit.contextTypes = {
  router: React.PropTypes.object
}
