import fetch from '../config/fetch'
import {getStore} from '../config/mUtils'

/**
 * 测试接口
 */

export const test = () => fetch('/customer/30', {data:'test'},'GET');
