enum ActionTypes {
  CHANGE_NAV_COLLAPSED = 'CHANGE_NAV_COLLAPSED',
}

type State = { navCollapsed: boolean }
type Action = { type: ActionTypes }

export const changeNavCollapsedAction: Action = {
  type: ActionTypes.CHANGE_NAV_COLLAPSED,
}

export function contextReducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionTypes.CHANGE_NAV_COLLAPSED:
      return {
        ...state,
        navCollapsed: !state.navCollapsed,
      }
    default:
      return state
  }
}
