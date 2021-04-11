/*
 * @Author: merlin.chang 
 * @Date: 2021-04-12 02:06:30 
 * @Last Modified by: merlin.chang
 * @Last Modified time: 2021-04-12 02:06:58
 */
import './style/index.less';
import './modules/GameControl'
import GameControl from './modules/GameControl';

const gameControl = new GameControl()
gameControl.init()
