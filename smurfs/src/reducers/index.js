import {FETCH_SMURFS_START,
FETCH_SMURFS_SUCCESS,
FETCH_SMURFS_FAILURE} from '../actions';

const initialState = {
    smurfs: [],
    isLoading: false,
    error: null,
    initialized: false,
};

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}