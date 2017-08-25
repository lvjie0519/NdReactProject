/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React, { Component } from 'react'
import $ from 'jquery'
import QuestionListItem from './component/QuestionListItem'
import ListView from './component/MyListView'

export default class QuestionList extends Component {
  constructor(props) {
    super(props)

    this.state = {questionInfos: [], isLoading: true}
    this.onItemClick = this.onItemClick.bind(this)
    this.getItem = this.getItem.bind(this)
    this.onRefresh = this.onRefresh.bind(this)
    this.onLoadMore = this.onLoadMore.bind(this)
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>加载中....</div>
      )
    } else {
      // var questionInfos = this.state.questionInfos.map(function (questionInfo, index) {
      //   return <QuestionListItem
      //     key={index}
      //     questionInfo={questionInfo}
      //     onItemClick={this.onItemClick} />
      // }.bind(this))
      return (
        <div style={{ padding: '10px 30px' }}>
          <ListView
            onRefresh={this.onRefresh}    // 从外面传进去的下拉刷新回调函数
            onLoadMore={this.onLoadMore}  // 从外面传进去的加载更过回调函数
            data={this.state.questionInfos}  // 从外面传进去的文章列表数据数组
            getItem={this.getItem}        // 从外面传进去的获取列表子项的回调函数
          />
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

  onRefresh() {
    console.log('refresh')
  }

  onLoadMore() {
    console.log('onRefresh')
  }

  getItem(questionInfo) {
    return <QuestionListItem
      key={questionInfo.id}
      questionInfo={questionInfo}
      onItemClick={this.onItemClick}
    />
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
