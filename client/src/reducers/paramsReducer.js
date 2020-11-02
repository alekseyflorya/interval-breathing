import {GET_PARAMS, EDIT_PARAMS} from '../actions/types';

const initialState = {
  params: {
    inhale: 2,
    delay: 3,
    exhale: 4,
    pause: 5,
    inhalePerMin: 19,
    colour: '#010a1c',
    figure: 0,
    isVideo: true,
    video: 0
  }
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_PARAMS:
      return {
        inhale: action.payload.inhale,
        delay: action.payload.delay,
        exhale: action.payload.exhale,
        pause: action.payload.pause,
        inhalePerMin: action.payload.inhalePerMin,
        colour:action.payload.colour,
        figure: action.payload.figure,
        isVideo: action.payload.isVideo,
        video: action.payload.video
      };
    case EDIT_PARAMS:
      return {
        ...state,
        params: action.payload.params
      };
    default:
      return state;
  }
}