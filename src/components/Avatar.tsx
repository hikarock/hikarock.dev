import '@/styles/globals.css'

import {
  Avatar as AvaterComponent,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'

export const Avatar = () => {
  const src = 'https://github.com/hikarock.png'
  const alt = 'hikarock'

  return (
    <AvaterComponent>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{alt}</AvatarFallback>
    </AvaterComponent>
  )
}
