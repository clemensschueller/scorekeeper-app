import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Button.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default function Button(props) {
  return <ButtonStyled {...props} />
}
//     <button onClick={onClick} className={isActive ? 'Button active' : 'Button'}>
//       {children}
//     </button>
//   )
// }

const ButtonStyled = styled.button`
  padding: 10px;
  border: none;
  background: ${props => (props.isActive ? 'darksalmon' : 'grey')};
  color: ${props => props.color};
  border-radius: 8px;

  &:hover {
    border: 2px solid;
    border-color: red;
  }
`
