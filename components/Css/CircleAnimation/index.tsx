import React, { useRef, useEffect } from 'react'
import useStyles from './index.style'
import { Circle, CircleBuilder, DrawType } from '../../../helpers/canvasUtils'

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

    const circle: Circle = new CircleBuilder(x, y, radius, ctx)
      .velocity(dx, dy)
      .color('white')
      .type(DrawType.STROKE)
      .build()
    arr.push(circle)
  }
  return arr
}

const CircleAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const classes = useStyles()
  const width = 700
  const height = 500
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

    canvas.width = width
    canvas.height = height

    const animate = () => {
      requestId = requestAnimationFrame(animate)
      ctx.clearRect(0, 0, width, height)

      circles.forEach((circle) => {
        const [dx, dy] = getDxDy(circle, width, height)
        circle.dx = dx
        circle.dy = dy

        const x = circle.x + circle.dx
        const y = circle.y + circle.dy

        circle.update(x, y)
      })
    }

    animate()

    return () => {
      cancelAnimationFrame(requestId)
    }
  }, [])

  return <canvas ref={canvasRef} className={classes.canvas} />
}

export default CircleAnimation
