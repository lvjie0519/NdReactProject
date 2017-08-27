/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React, { Component } from 'react'
import styles from '../theme/styles/publish.css'
import CSSModules from 'react-css-modules'
import Header from './component/header'
import $ from 'jquery'

@CSSModules(styles, {allowMultiple: true})
export default class PublishQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }

    this.headerLeftOnClick = this.headerLeftOnClick.bind(this)
    this.submitOnClick = this.submitOnClick.bind(this)
  }
  handleSubmit() {

  }
  render() {
    return (
      <div>
        <Header
          centerText='首页'
          headerstyle='header-container publish'
          leftClick={this.headerLeftOnClick} />
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

  submitOnClick() {
    console.log('提交')
    let questionTitle = this.refs.questionTitle.value.trim()
    let questionContent = this.refs.questionContent.value.trim()
    let currentDateTime = this.getCurrentDateTime()
    let questionId = new Date().getTime()
    console.log(questionTitle, questionContent)

    let questionInfo = {
      'id': questionId,
      'questionId': questionId,
      'questionType': 1,
      'questionTitle': questionTitle,
      'questionContent': questionContent,
      'questionAnswerCount': 0,
      'questionCreateTime': currentDateTime,
      'questionCreater': '陈晶晶',
      'questionAnswerInfos': []
    }
    console.log(questionInfo)
    this.postQuestionInfoToServer(questionInfo)
  }

  getCurrentDateTime() {
    let now = new Date()

    let year = now.getFullYear()       // 年
    let month = now.getMonth() + 1    // 月
    let day = now.getDate()            // 日
    let hh = now.getHours()          // 时
    let mm = now.getMinutes()          // 分

    let dateTime = year + '-'

    if (month < 10) {
      dateTime += '0'
    }

    dateTime += month + '-'

    if (day < 10) {
      dateTime += '0'
    }

    dateTime += day + ' '

    if (hh < 10) {
      dateTime += '0'
    }

    dateTime += hh + ':'
    if (mm < 10) {
      dateTime += '0'
    }
    dateTime += mm
    return dateTime
  }

  // 上传数据 成功
  postQuestionInfoToServer(questionInfo) {
    $.ajax({
      type: 'post',
      url: 'http://localhost:3003/questions',
      data: questionInfo,
      success: infos => {
        console.log('上传成功', infos)
        this.headerLeftOnClick()
      },
      error: (xhr, status, err) => {
        console.log('上传失败', err.toString())
      }
    })
  }
}

PublishQuestion.contextTypes = {
  router: React.PropTypes.object
}
