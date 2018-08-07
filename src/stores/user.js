
const SIGNIN = 'user/SIGNIN'
const SIGNIN_SUCCESS = 'user/SIGNIN_SUCCESS'
const SIGNIN_FAILURE = 'user/SIGNIN_FAILURE'
const SET_SIGNING = 'user/SET_SIGNING'

const GETME = 'user/GETME'
const GETME_SUCCESS = 'user/GETME_SUCCESS'
const GETME_FAILURE = 'user/GETME_FAILURE'

export default (state = {signing: true}, action) => {
  switch (action.type) {
    case GETME:
      if (action.isForLogin) {
        return {
          ...state,
          signing: true
        }
      } else {
        return {
          ...state
        }
      }
    case SIGNIN:
      return {
        ...state,
        signing: true
      }
    case SET_SIGNING:
      return {
        ...state,
        signing: action.signing
      }
    case SIGNIN_SUCCESS:
    case GETME_SUCCESS:
      return {
        ...state,
        me: action.payload,
        signing: false
      }
    case SIGNIN_FAILURE:
    case GETME_FAILURE:
      return {
        ...state,
        signing: false
      } 
    default:
      return state
  }
}

export const setSigning = (signing) => {
  return {
    type: SET_SIGNING,
    signing
  }
}

export const signin = ({mobile, verificationCode, channelNo}) => {
  return {
    types: [SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE],
    promise: (apiClient) => apiClient.post('/api/auth/signin', {mobile, verificationCode, channelNo})
  }
}

export const getMe = (isForLogin) => {
  return {
    types: [GETME, GETME_SUCCESS, GETME_FAILURE],
    promise: (apiClient) => apiClient.get('/api/users/me'),
    isForLogin
  }
}