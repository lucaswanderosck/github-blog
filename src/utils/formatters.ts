import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const formatDescription = (description: string) => {
  const words = description.split(' ')
  const formattedDescription = words.slice(0, 24).join(' ')
  return `${formattedDescription}...`
}

export const formatDate = (date: string) => {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ptBR,
  })
}
