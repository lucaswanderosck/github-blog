export const formatDescription = (description: string) => {
  const words = description.split(' ')
  const formattedDescription = words.slice(0, 20).join(' ')
  return `${formattedDescription}...`
}
