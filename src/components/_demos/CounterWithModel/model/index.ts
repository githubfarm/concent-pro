import { COUNTER } from 'configs/c2Mods';
import state from './state';
import * as computed from './computed';
import * as reducer from './reducer';
import * as lifecycle from './lifecycle';

export default {
  [COUNTER]: {
    state,
    computed,
    reducer,
    lifecycle,
  },
};
