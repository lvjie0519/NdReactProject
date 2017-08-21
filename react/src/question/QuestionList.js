/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React, { Component } from 'react'
import $ from 'jquery'
import QuestionListItem from './component/QuestionListItem'

export default class QuestionList extends Component {
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
      var questionInfos = this.state.questionInfos.map(function (questionInfo, index) {
        return <QuestionListItem
          key={index}
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
      url: 'http://localhost:3003/questions?_sort=id&_order=DESC&_start=0&_limit=10',
      dataType: 'json',
      type: 'get',
      success: questionInfos => {
        this.setState({questionInfos: questionInfos, isLoading: false})
      },
      error: (xhr, status, err) => {
        console.log(err.toString())
      }
    })
  }

  onItemClick(questionInfo) {
    console.log(questionInfo.questionTitle)
    this.context.router.push({
      pathname: '/question-detail',
      state: {
        questionInfo: questionInfo
      }
    })
  }
}

QuestionList.contextTypes = {
  router: React.PropTypes.object
}
