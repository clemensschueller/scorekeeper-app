import React from 'react'
import History from './HistoryEntry'

export default {
  title: 'History',
  component: History,
}

const Template = args => <HistoryEntry {...args} />

export const Default = Template.bind({})
Default.args = {
  nameOfGame: 'Carcassonne',
  players: [
    {
      name: 'John Doe',
      score: '20',
    },
    {
      name: 'Jane Doe',
      score: '10',
    },
  ],
}
