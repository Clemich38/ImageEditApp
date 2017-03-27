const types = {
  SET_IMAGE_URL: 'SET_IMAGE_URL',
}

export const actionCreators = {
  setImageUrl: (url) => {
    return { type: types.SET_IMAGE_URL, payload: url }
  },
}

const initialState = {
  imageUrl: "",

}


export const reducer = (state = initialState, action) => {
  const { imageUrl } = state
  const { type, payload } = action

  switch (type) {
    case types.SET_IMAGE_URL: {
      return {
        ...state,
        imageUrl: payload,
      }
    }
    default: {
      return state
    }
  }
}
