/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React, { Component } from 'react'
import styles from '../theme/styles/publish.css'
import CSSModules from 'react-css-modules'
import HeaderDetail from './component/headerDetail'
import $ from 'jquery'

@CSSModules(styles, {allowMultiple: true})
export default class JsonOprationDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }

    this.headerLeftOnClick = this.headerLeftOnClick.bind(this)
    this.headerRightOnClick = this.headerRightOnClick.bind(this)
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
        <div>
          <button onClick={() => {
            this.getQuestionInfoFromServer()
          }}>查询数据</button>
          <button onClick={() => {
            this.getQuestionInfoByIdFromServer()
          }}>条件查询数据</button>
          <button onClick={() => {
            this.headerRightOnClick()
          }}>增加数据</button>
          <button onClick={() => {
            this.updateQuestionInfoToServer()
          }}>修改数据</button>
        </div>
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
    let currentDateTime = this.getCurrentDateTime()
    console.log('currentDate', currentDateTime)
    let questionId = new Date().getTime()
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
      },
      error: (xhr, status, err) => {
        console.log('上传失败', err.toString())
      }
    })
  }

  // 获取全部信息， 成功
  getQuestionInfoFromServer() {
    $.ajax({
      url: 'http://localhost:3003/questions',
      dataType: 'json',
      type: 'get',
      success: questionInfos => {
        console.log(questionInfos)
      },
      error: (xhr, status, err) => {
        console.log(err.toString())
      }
    })
  }

  // 根据条件获取信息， 成功
  getQuestionInfoByIdFromServer() {
    $.ajax({
      url: 'http://localhost:3003/questions?questionId=6',
      dataType: 'json',
      type: 'get',
      success: questionInfos => {
        console.log(questionInfos)
      },
      error: (xhr, status, err) => {
        console.log(err.toString())
      }
    })
  }

  // 更新内容 成功  id=6
  updateQuestionInfoToServer() {
    let questionTitle = this.refs.questionTitle.value.trim()
    $.ajax({
      type: 'put',
      url: 'http://localhost:3003/questions/6',
      data: {
        'questionType': 1,
        'questionId': 6,
        'questionTitle': questionTitle,
        'questionContent': '121212121212121212121212',
        'questionAnswerCount': 0,
        'questionCreateTime': '2017-08-21 11:56',
        'questionCreater': '陈晶晶',
        'questionAnswerInfos': []
      },
      success: infos => {
        console.log(infos)
      },
      error: (xhr, status, err) => {
        console.log(err.toString())
      }
    })
  }
}
