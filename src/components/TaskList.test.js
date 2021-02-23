import React from 'react'
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect'

import { WithPinned } from './TaskList.stories'

it('renders pinned tasks at start of list', () => {
  const div = document.createElement('div')
  ReactDOM.render(<WithPinned {...WithPinned.args}/>, div)

  const lastTaskInput = div.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"')
  expect(lastTaskInput).not.toBe(null)

  ReactDOM.unmountComponentAtNode(div)
})