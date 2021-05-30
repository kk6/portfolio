export const formatDate = (s: string): string => {
  const date = new Date(s)
  return date.toLocaleString()
}
