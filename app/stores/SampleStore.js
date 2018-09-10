import { ReduceStore } from 'flux/utils';
import ActionTypes from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';

class SampleStore extends ReduceStore {
  getInitialState() {
    return {
      title: "Title", 
      subtitle: "Subtitle", 
      text: "Text",
      count: 0
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.TYPE_001:
        return state;
      case ActionTypes.TYPE_002:
        const newCount = state.count + 1;
        const result = {
          title: action.data.title,
          subtitle: action.data.subtitle,
          text: "Action Creator is called " + newCount  + " times.",
          count: newCount
        }
        return result;
      default:
        return state;
    }
  }
}

export default new SampleStore(AppDispatcher);
