export type DefaultContextState = {
  navCollapsed: boolean
  changeNavCollapsed: () => void
}

export interface PostCardProps {
  title: string
  content?: string
  thumbnail?: string
  createdAt: number
  tags?: string[]
}

export interface Style {
  [key: string]: string
}
