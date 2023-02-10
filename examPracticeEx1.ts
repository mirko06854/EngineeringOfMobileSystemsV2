const area = (shape) => {
      switch (shape.kind) {
        case "Circle": return Math.PI * (shape.radius ** 2)
        case "Square": return shape.side ** 2
        case "Rectangle": return shape.width * shape.height
        }
     }
    
const larger = (shape, factor) => {
     switch (shape.kind) {
        case "Circle": return {...shape, radius: shape.radius * factor}
        case "Square": return {...shape, side: shape.side * factor}
        case "Rectangle": return {...shape,
                                width: shape.width * factor,
                                height: shape.height * factor}
            }
        }