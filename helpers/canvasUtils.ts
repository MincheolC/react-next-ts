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
  color = 'white'
  drawType = DrawType.FILL

  constructor(
    x: number,
    y: number,
    dx: number,
    dy: number,
    radius: number,
    color: string,
    ctx: CanvasRenderingContext2D
  ) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.ctx = ctx
    this.color = color
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

export enum DrawType {
  STROKE,
  FILL,
}
