import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from './Button'

Navigation.propTypes = {
  linkToPlay: PropTypes.func.isRequired,
  linkToHistory: PropTypes.func.isRequired,
}

const Navigation = ({ onClick }) => {
  return (
    <Nav>
      <Button isActive onClick={onClick}>
        Play
      </Button>
      <Button onClick={onClick}>History</Button>
    </Nav>
  )
}

const Nav = styled.button`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  border: none;
  /* background: ${props => (props.isActive ? 'steelblue' : 'grey')};
  color: ${props => props.color}; */

  &:hover {
    background-color: beige;
  }
`
