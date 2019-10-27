import { connect } from 'react-redux'

import Home from './Home'
import { callApi } from 'actions/temp'

const mapDispatchToProps = { callApi }
const mapStateToProps = state => {
  const { temp } = state || {}
  return { temp }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
