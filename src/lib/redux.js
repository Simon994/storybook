import { createStore } from 'redux'

const initialState = {
  tasks: [
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
  ]
}

export const archiveTask = id => ({ type: 'ARCHIVE_TASK', id })
export const pinTask = id => ({ type: 'PIN_TASK', id })

const updateTask = (state, action) => {
  const updatedState = {
    ...state,
    tasks: state.tasks.map(task => {
      return task.id === action.id ? {...task, state: action.type} : task
      })
  }
  return updatedState
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case('ARCHIVE_TASK'):
      return updateTask(state, action)
    case('PIN_TASK'):
      return updateTask(state, action)
    default:
      return state
    }
}

export default createStore(reducer)