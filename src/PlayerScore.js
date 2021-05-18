import './PlayerScore.css'
import PropTypes from 'prop-types'

PlayerScore.propTypes = {
  onSubmit: PropTypes.func,
}

export default function PlayerScore({ onSubmit }) {
  return (
    <form className="PlayerScore" onSubmit={handleSubmit}>
      <label>
        Add player:
        <input name="name" type="text" placeholder="Player name" />
      </label>
    </form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.name
    onSubmit(input.value)
    form.reset()
    input.focus()
  }
}
