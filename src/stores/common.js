
const SET_SIDEBAR_ACTIVED = 'common/SET_SIDEBAR_ACTIVED'

export default (state = {sidebarActived: '/'}, action) => {
  switch (action.type) {
    case SET_SIDEBAR_ACTIVED:
      return {
        ...state,
        sidebarActived: action.sidebarActived
      }
    default:
      return state
  }
}

export const setSideBarActived = (sidebarActived) => {
  return {
    type: [SET_SIDEBAR_ACTIVED],
    sidebarActived
  }
}