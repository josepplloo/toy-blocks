import fetch from 'cross-fetch';
import * as types from '../constants/actionTypes';

const checkBlockStatusStart = (node) => {
  return {
    type: types.CHECK_BLOCK_STATUS_START,
    node
  };
};

const checkBlockStatusSuccess = (node, res) => {
  return {
    type: types.CHECK_BLOCK_STATUS_SUCCESS,
    node,
    res
  };
};

const checkBlockStatusFailure = node => {
  return {
    type: types.CHECK_BLOCK_STATUS_FAILURE,
    node,
  };
};

export function checkBlockStatus(node) {
  return async (dispatch) => {
    try {
      dispatch(checkBlockStatusStart(node));
      const res = await fetch(`${node.url}/api/v1/blocks`);

      if(res.status >= 400) {
        dispatch(checkBlockStatusFailure(node));
      }

      const json = await res.json();

      dispatch(checkBlockStatusSuccess(node, json));
    } catch (err) {
      dispatch(checkBlockStatusFailure(node));
    }
  };
}

export function checkBlocksStatuses(list) {
  return (dispatch) => {
    list.forEach(node => {
      dispatch(checkBlockStatus(node));
    });
  };
}
