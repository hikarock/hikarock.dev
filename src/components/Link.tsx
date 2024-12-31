import type { ReactNode } from 'react'

type Props = {
  href: string
  external?: boolean
  children: ReactNode
}
export const Link = ({ href, external = true, children }: Props) => {
  return (
    <a
      className="underline underline-offset-2"
      href={href}
      target={external ? '_blank' : '_self'}
    >
      {children}
    </a>
  )
}
