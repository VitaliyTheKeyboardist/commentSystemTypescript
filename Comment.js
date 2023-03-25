export class Comment {
    constructor(userName) {
        this.userName = userName;
        this.size = 0;
        this.ratio = 0;
        this.isFavorites = false;
        this.answers = [];
    }
    setRatioUp() {
        return this.ratio++;
    }
    setRatioDown() {
        return this.ratio--;
    }
    getRatio() {
        return this.ratio;
    }
    changeFavorites() {
        this.isFavorites ? this.isFavorites = false : this.isFavorites = true;
    }
    send() {
    }
}
