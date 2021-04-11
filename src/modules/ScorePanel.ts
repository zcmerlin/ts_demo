/*
 * @Author: merlin.chang 
 * @Date: 2021-04-12 02:06:54 
 * @Last Modified by:   merlin.chang 
 * @Last Modified time: 2021-04-12 02:06:54 
 */
export default class ScorePanel {
  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.getElementById('score')!
    this.levelEle = document.getElementById('level')!
    this.maxLevel = maxLevel
    this.upScore = upScore
  }
  
  score = 0
  level = 1
  scoreEle: HTMLElement
  levelEle: HTMLElement
  maxLevel: number
  upScore: number
 
  addScore() {
    this.scoreEle.innerHTML = ++this.score + ''
    if(this.score % this.upScore === 0) {
      this.levelUp()
    }
  }

  levelUp() {
    if(this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + ''
    }
    
  }
}