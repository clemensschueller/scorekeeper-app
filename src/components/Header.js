import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const Header = () => {
  return (
    <Wrapper>
      <h1>Scorekeeper</h1>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
`

export default Header
