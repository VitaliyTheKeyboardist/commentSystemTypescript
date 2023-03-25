import { Comment } from 'Comment.js';
let ratio = document.getElementById('ratio_counter');
let comment = new Comment('I\'m BEST programmer');
ratio.innerText = comment.ratio.toString();
let ratioUpButton = document.getElementById('ratio_button+');
ratioUpButton.addEventListener('click', upRatioValue);
function upRatioValue() {
    comment.setRatioUp();
    if (ratio) {
        ratio.innerText = comment.getRatio().toString();
        return ratio.innerText;
    }
}
