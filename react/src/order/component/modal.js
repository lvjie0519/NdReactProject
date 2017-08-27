/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from '../../theme/styles/modal.css'

@CSSModules(styles, {allowMultiple: true})
export default class Modal extends Component {
  static propTypes = {
    title: React.PropTypes.string
  }

  static getDefaultProps = {
    title: ''
  }

  render() {
    return (
      <div styleName='modal'>
        弹出框
      </div>
    )
  }
}
