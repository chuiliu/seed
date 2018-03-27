import { INCREASE, DECREASE, RESET } from '../actions/counter';

const initState = {
    count: 0
};

export default function reducer(state = initState, actions) {
    switch (actions.type) {
        case INCREASE:
            return {
                count: state.count + 1
            };
        case DECREASE:
            return {
                count: state.count - 1
            };
        case RESET:
            return {
                count: 0
            };
        default:
            return state;
    }
}
