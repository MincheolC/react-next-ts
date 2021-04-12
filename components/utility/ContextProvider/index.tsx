import React, { useReducer, createContext } from 'react'
import { DefaultContextState } from '../../../shared/types'
import { contextReducer, changeNavCollapsedAction } from './ContextReducer'

const ContextState = {
  navCollapsed: false,
}

export const AppContext = createContext<DefaultContextState>({
  navCollapsed: false,
  changeNavCollapsed: () => null,
})

const ContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(
    contextReducer,
    ContextState,
    () => ContextState
  )

  const changeNavCollapsed = () => dispatch(changeNavCollapsedAction)

  return (
    <AppContext.Provider value={{ ...state, changeNavCollapsed }}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider
