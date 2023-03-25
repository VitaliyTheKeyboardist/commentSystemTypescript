
export class Comment {
  userName: string
  size: number
  ratio: number
  answers: any[]
  isFavorites: boolean
  
  constructor(userName: string) {
    this.userName = userName
    this.size = 0
    this.ratio = 0
    this.isFavorites = false
    this.answers = []
  }

  

  setRatioUp() {
    return this.ratio++
  }
  setRatioDown() {
    return this.ratio--
  }
  getRatio(): number {
    return this.ratio
  }

  changeFavorites() {
    this.isFavorites ? this.isFavorites = false : this.isFavorites = true
  }

  send(): void {
    
  }
}

