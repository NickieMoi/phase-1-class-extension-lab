// Your code here
class Polygon{
    constructor(sides){
      this.sides = sides
    }
  
    get countSides(){
      return this.sides.length
    }
    get perimeter(){
      let result = 0
      for(let i = 0; i < this.countSides ; i++){
        result += this.sides[i]
      }
      return result
    }
  
  }
  
  class Triangle extends Polygon{
    get isValid(){
      let ans;
      let data = this.sides
      for(let x = 0 ; x < data.length - 1; x++){
        if (data[x] != data[x+1]){
          ans = false;            
        } else ans = true
      }
      return ans
    }
  }
  class Square extends Polygon{
    get isValid(){
      let ans;
      let data = this.sides
      for(let x = 0 ; x < data.length - 1; x++){
        if (data[x] != data[x+1]){
          ans = false;            
        } else ans = true
      }
      return ans
    }
  
    get area(){
      return this.sides[0] ** 2
    }
  }
  
  let polygon = new Square( [ 5, 5, 5, 5 ] )
  console.log(polygon.isValid)