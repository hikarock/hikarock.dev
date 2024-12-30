import '@/styles/globals.css'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

type Props = {
  src: string
  alt: string
}

export const AvatarComponent = ({ src, alt }: Props) => {
  return (
    <Avatar>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{alt}</AvatarFallback>
    </Avatar>
  )
}
