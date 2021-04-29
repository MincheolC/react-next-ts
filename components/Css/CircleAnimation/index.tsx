import React, { useRef, useEffect } from 'react'
import useStyles from './index.style'

interface Animation {
  draw(): void
  update(dx: number, dy: number): void
}

class Circle implements Animation {
  x: number
  y: number
  dx: number
  dy: number
  radius: number
  ctx: CanvasRenderingContext2D

  constructor(x, y, dx, dy, radius, ctx) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.ctx = ctx
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    this.ctx.strokeStyle = 'white'
    this.ctx.stroke()
  }

  update(dx, dy) {
    this.x += dx
    this.y += dy
    this.dx = dx
    this.dy = dy

    this.draw()
  }
}

function createRandomCircles(
  n: number,
  radius: number,
  ctx: CanvasRenderingContext2D,
  maxWidth: number,
  maxHeight: number
): Array<Circle> {
  const arr = []
  for (let i = 0; i < n; i += 1) {
    const x = Math.random() * (maxWidth - radius * 2) + radius
    const y = Math.random() * (maxHeight - radius * 2) + radius
    const dx = (Math.random() - 0.5) * 10
    const dy = (Math.random() - 0.5) * 10

    arr.push(new Circle(x, y, dx, dy, radius, ctx))
  }
  return arr
}

const CircleAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const classes = useStyles()
  let circles
  let canvas: HTMLCanvasElement
  let ctx: CanvasRenderingContext2D
  let requestId

  const getDxDy = (circle: Circle, maxWidth: number, maxHeight: number) => {
    let newDx = circle.dx
    let newDy = circle.dy

    if (circle.x + circle.radius > maxWidth || circle.x - circle.radius < 0) {
      newDx = -circle.dx
    }
    if (circle.y + circle.radius > maxHeight || circle.y - circle.radius < 0) {
      newDy = -circle.dy
    }

    return [newDx, newDy]
  }

  useEffect(() => {
    if (!canvasRef.current) {
      return
    }
    canvas = canvasRef.current
    ctx = canvas.getContext('2d')
    circles = createRandomCircles(50, 30, ctx, 500, 500)

    const animate = () => {
      requestId = requestAnimationFrame(animate)
      ctx.clearRect(0, 0, innerWidth, innerHeight)

      circles.forEach((circle) => {
        const [dx, dy] = getDxDy(circle, 500, 500)
        circle.update(dx, dy)
      })
    }

    animate()

    return () => {
      cancelAnimationFrame(requestId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={classes.canvas}
      width={500}
      height={500}
    />
  )
}

export default CircleAnimation
