/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React, { Component } from 'react'
import styles from '../theme/styles/publish.css'
import CSSModules from 'react-css-modules'
import HeaderDetail from './component/headerDetail'
// import Dialog from './component/dialog'

@CSSModules(styles, {allowMultiple: true})
export default class PublishQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }

    this.headerLeftOnClick = this.headerLeftOnClick.bind(this)
    this.headerRightOnClick = this.headerRightOnClick.bind(this)
  }
  // handleChange(e) {
  //   // 对话框，提交按钮点击时出现
  //   Dialog.show(1, '', '是否确认提交问题', 2000)
  // }
  handleSubmit() {

  }
  render() {
    return (
      <div>
        <HeaderDetail
          centerText='发布问题'
          rightText='提交'
          headerstyle='header-container publish'
          leftClick={this.headerLeftOnClick}
          rightClick={this.headerRightOnClick} />
        <form styleName='smart-publish'>
          <div>
            <span>标题：（50字以内的中文、英文或数字）</span>
            <input id='title' ref='questionTitle' type='text' placeholder='请输入问题标题' />
          </div>
          <div style={{marginTop: 20}}>
            <span>描述：（200字以内）</span>
            <textarea id='description' ref='questionContent' name='description' rows='30' placeholder='请输入问题描述' />
          </div>
          <div styleName='btn-wrapper'>
            <span styleName='btn smart-btn-submit'>提交</span><span styleName='btn'>取消</span>
          </div>
        </form>
      </div>
    )
  }

  headerLeftOnClick() {
    console.log('点击返回')
    this.context.router.goBack()
  }

  headerRightOnClick() {
    console.log('提交')
    let questionTitle = this.refs.questionTitle.value.trim()
    let questionContent = this.refs.questionContent.value.trim()
    console.log(questionTitle, questionContent)
    let questionInfo = {
      'questionId': 100,
      'questionType': 1,
      'questionTitle': questionTitle,
      'questionContent': questionContent,
      'questionAnswerCount': 0,
      'questionCreateTime': '2017-07-29',
      'questionCreater': '陈晶晶',
      'questionAnswerInfos': []
    }
    console.log(questionInfo)
  }
}

PublishQuestion.contextTypes = {
  router: React.PropTypes.object
}
