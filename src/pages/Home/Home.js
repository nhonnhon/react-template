import React from 'react'

class Home extends React.PureComponent {
  componentDidMount() {
    const { callApi } = this.props
    callApi && callApi()
  }
  render() {
    const { data } = this.props.temp
    console.log(1111, this.props)
    return <div>{data ? data.toString() : 'Loading...'}</div>
  }
}

export default Home
