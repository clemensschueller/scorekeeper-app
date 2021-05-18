import React from 'react'
import PlayerForm from './PlayerScore'

export default {
  title: 'PlayerScore',
  component: PlayerScore,
}

export const DefaultForm = args => <PlayerScore {...args} />
