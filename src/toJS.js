/**
 *  Copyright (c) 2014, rektide
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

import { is } from './is'

export function toJS(obj) {
  return is(obj) ? obj.toJS() : obj;
}
