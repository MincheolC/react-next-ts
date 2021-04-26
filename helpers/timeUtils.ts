import { format } from 'date-fns'

export function toPostDateString(timestamp: number): string {
  return format(timestamp, 'MMM dd, yyyy')
}

export function getDay(timestamp: number): string {
  return format(timestamp, 'dd')
}

export function getMonth(timestamp: number): string {
  return format(timestamp, 'MMM')
}

export function getYear(timestamp: number): string {
  return format(timestamp, 'yyyy')
}
