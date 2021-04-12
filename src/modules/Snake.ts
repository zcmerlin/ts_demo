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

    if(this.body[1] && (this.body[1] as HTMLElement).offsetLeft === value) {
      console.log('水平方向掉头啦')
      if(value > this.X) {
        value = this.X - 10
      } else {
        value = this.X + 10
      }
    }

    this.moveBody()

    this.head.style.left = value + 'px'

    this.checkHead()
  }

  set Y(value: number) {
    if(this.Y === value) {
      return
    }

    if(value < 0 || value > 290) {
      throw new Error('蛇撞墙啦!')
    }

    if(this.body[1] && (this.body[1] as HTMLElement).offsetTop === value) {
      console.log('水平方向掉头啦')
      if(value > this.Y) {
        value = this.Y - 10
      } else {
        value = this.Y + 10
      }
    }

    this.moveBody()
    
    this.head.style.top = value + 'px'

    this.checkHead()
  }

  grow() {
    this.snake.insertAdjacentHTML('beforeend', '<div></div>')
  }

  moveBody() {
    for(let i = this.body.length - 1; i > 0; i--) {
      let X = (this.body[i -1] as HTMLElement).offsetLeft;
      let Y = (this.body[i -1] as HTMLElement).offsetTop;

      (this.body[i] as HTMLElement).style.left = X + 'px';
      (this.body[i] as HTMLElement).style.top = Y + 'px';
    }
  }

  checkHead() {
    for (let i = 1; i < this.body.length; i++) {
      let bd = this.body[i] as HTMLElement
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        throw new Error('撞到自己啦，完蛋啦~')
      }
    }
  }
}