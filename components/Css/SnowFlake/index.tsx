import React, { useRef, useEffect } from 'react'
import useStyles from './index.style'
import { Circle as Snow, CircleBuilder } from '../../../helpers/canvasUtils'

function createSnows(
  n: number,
  ctx: CanvasRenderingContext2D,
  maxWidth: number,
  maxHeight: number
): Array<Snow> {
  const snows = []
  const speedScale = 2
  const radiusScale = 5

  for (let i = 0; i < n; i += 1) {
    const x = Math.random() * maxWidth * 1.3
    const y = Math.random() - maxHeight
    const dx = Math.random() - 0.5
    const dy = 1 + Math.random() * speedScale
    const radius = 1 + Math.random() * radiusScale

    const snow: Snow = new CircleBuilder(x, y, radius, ctx)
      .velocity(dx, dy)
      .color('white')
      .build()
    snows.push(snow)
  }

  return snows
}

const SnowFlake: React.FC = () => {
  const classes = useStyles()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  let canvas: HTMLCanvasElement
  let ctx: CanvasRenderingContext2D
  let snows
  let requestId
  const width = 700
  const height = 500

  useEffect(() => {
    if (!canvasRef.current) {
      return
    }
    canvas = canvasRef.current
    ctx = canvas.getContext('2d')
    snows = createSnows(600, ctx, width, height)

    canvas.width = width
    canvas.height = height

    const animate = () => {
      requestId = requestAnimationFrame(animate)
      ctx.clearRect(0, 0, width, height)

      snows.forEach((snow) => {
        const middleOfX = Math.floor(width / 2)
        const alpha = middleOfX / width
        let x, y

        if (snow.y > height) {
          x = Math.random() * width * 2
          y = Math.random() - height
        } else {
          x = snow.x + snow.dx - alpha
          y = snow.y + snow.dy
        }

        snow.update(x, y)
      })
    }

    animate()

    return () => {
      cancelAnimationFrame(requestId)
    }
  }, [])

  return <canvas className={classes.canvas} ref={canvasRef} />
}

export default SnowFlake
