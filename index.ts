import { Comment } from 'Comment.js'
let ratio: HTMLElement = <HTMLElement>document.getElementById('ratio_counter')
let comment: Comment = new Comment('I\'m BEST programmer')
ratio.innerText = comment.ratio.toString()
let ratioUpButton: HTMLElement = <HTMLElement>document.getElementById('ratio_button+')
ratioUpButton.addEventListener('click', upRatioValue)
function upRatioValue(): any {
    
  
    comment.setRatioUp()
    if(ratio) {
        ratio.innerText = comment.getRatio().toString()
        return ratio.innerText
    }

}
