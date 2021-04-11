/*
 * @Author: merlin.chang 
 * @Date: 2021-04-12 02:06:51 
 * @Last Modified by:   merlin.chang 
 * @Last Modified time: 2021-04-12 02:06:51 
 */
export default class Food {
  constructor() {
    this.element = document.getElementById('food')!
  }

  element: HTMLElement
  // X: number
  // Y: number

  get X() {
    return this.element.offsetLeft
  }

  get Y() {
    return this.element.offsetTop
  }

  change() {
    let left = Math.round(Math.random() * 29) * 10
    let top = Math.round(Math.random() * 29) * 10

    this.element.style.left = left + 'px'
    this.element.style.top = top + 'px'
  }
}

// const food = new Food()
// console.log(food.X, food.Y)
// food.change()
// console.log(food.X, food.Y)