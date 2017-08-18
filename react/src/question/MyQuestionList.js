/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React, { Component } from 'react'
import $ from 'jquery'
import QuestionListItem from './component/QuestionListItem'

export default class QuestionMain extends Component {
  constructor(props) {
    super(props)

    this.state = {questionInfos: [], isLoading: true}
    this.onItemClick = this.onItemClick.bind(this)
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>加载中....</div>
      )
    } else {
      var questionInfos = this.state.questionInfos.map(function (questionInfo) {
        return <QuestionListItem
          questionInfo={questionInfo}
          onItemClick={this.onItemClick} />
      }.bind(this))
      return (
        <div style={{ padding: '10px 30px' }}>
          {questionInfos}
        </div>
      )
    }
  }

  componentDidMount() {
    this.loadDataFromMock()
  }

  loadDataFromMock() {
    $.ajax({
      url: 'questions.json',
      dataType: 'json',
      success: questionInfos => {
        this.checkQuestionInfos(questionInfos)
      },
      error: (xhr, status, err) => {
        console.log(err.toString())
      }
    })
  }

  checkQuestionInfos(questionInfos) {
    let tempQuestionInfos = []
    if (questionInfos != null) {
      questionInfos.map(function (questionInfo) {
        if (questionInfo.questionType === 1) {
          tempQuestionInfos.push(questionInfo)
        }
      })
    }

    this.setState({questionInfos: tempQuestionInfos, isLoading: false})
  }

  onItemClick(questionInfo) {
    console.log(questionInfo.questionTitle)
  }
}
