import { format } from 'date-fns'

export function toPostDateString(timestamp: number): string {
  return format(timestamp, 'MMM dd, yyyy')
}
