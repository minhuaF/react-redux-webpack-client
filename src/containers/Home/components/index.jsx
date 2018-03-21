import React, { Component } from 'react'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDillMount() {
    // 同步获取列表数据
    this.props.getData()
  }

  render() {
    const { title, ...props } = this.props.home
    return (
      <div>
        <div>title: {title}</div>
      </div>
    )
  }
}

export default Home