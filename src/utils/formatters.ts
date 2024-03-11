export const formatDescription = (description: string) => {
  const words = description.split(' ')
  const formattedDescription = words.slice(0, 24).join(' ')
  return `${formattedDescription}...`
}
