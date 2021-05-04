interface Animation {
  draw(): void
  update(x: number, y: number): void
}

export class Circle implements Animation {
  x
  y
  dx
  dy
  radius
  ctx
  color
  drawType

  constructor(
    x: number,
    y: number,
    dx: number,
    dy: number,
    radius: number,
    color = 'white',
    ctx: CanvasRenderingContext2D,
    drawType = DrawType.FILL
  ) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.ctx = ctx
    this.color = color
    this.drawType = drawType
  }

  draw(): void {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    if (this.drawType === DrawType.STROKE) {
      this.ctx.strokeStyle = this.color
      this.ctx.stroke()
    } else {
      this.ctx.fillStyle = this.color
      this.ctx.fill()
    }
  }

  update(x: number, y: number): void {
    this.x = x
    this.y = y

    this.draw()
  }
}

export class CircleBuilder {
  x
  y
  dx
  dy
  radius
  ctx
  colorType
  drawType

  constructor(x = 0, y = 0, radius = 5, ctx: CanvasRenderingContext2D) {
    this.x = x
    this.y = y
    this.radius = radius
    this.ctx = ctx
  }

  velocity(dx = 0, dy = 0): CircleBuilder {
    this.dx = dx
    this.dy = dy
    return this
  }

  color(color = 'white'): CircleBuilder {
    this.colorType = color
    return this
  }

  type(drawType = DrawType.FILL): CircleBuilder {
    this.drawType = drawType
    return this
  }

  build(): Circle {
    return new Circle(
      this.x,
      this.y,
      this.dx,
      this.dy,
      this.radius,
      this.colorType,
      this.ctx,
      this.drawType
    )
  }
}

export enum DrawType {
  STROKE,
  FILL,
}
