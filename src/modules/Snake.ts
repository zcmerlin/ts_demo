/*
 * @Author: merlin.chang 
 * @Date: 2021-04-12 02:06:47 
 * @Last Modified by: merlin.chang
 * @Last Modified time: 2021-04-12 02:11:10
 */
export default class Snake {
  constructor() {
    this.snake = document.getElementById('snake')!
    this.head = document.querySelector('#snake > div') as HTMLElement
    this.body = this.snake.getElementsByTagName('div')
  }

  snake: HTMLElement
  head: HTMLElement
  body: HTMLCollection

  get X() {
    return this.head.offsetLeft
  }

  get Y() {
    return this.head.offsetTop
  }

  set X(value: number) {
    if(this.X === value) {
      return
    }

    if(value < 0 || value > 290) {
      throw new Error('蛇撞墙啦!')
    }

    this.head.style.left = value + 'px'
  }

  set Y(value: number) {
    if(this.Y === value) {
      return
    }

    if(value < 0 || value > 290) {
      throw new Error('蛇撞墙啦!')
    }
    
    this.head.style.top = value + 'px'
  }

  grow() {
    this.snake.insertAdjacentHTML('beforeend', '<div></div>')
  }
}