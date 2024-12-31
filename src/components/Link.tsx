import type { ReactNode } from 'react'
import { ExternalLinkIcon } from '@radix-ui/react-icons'

type Props = {
  href: string
  external?: boolean
  children: ReactNode
}
export const Link = ({ href, external = true, children }: Props) => {
  return (
    <a
      className="underline underline-offset-2 inline-block"
      href={href}
      target={external ? '_blank' : '_self'}
    >
      <span className="flex items-center">
        {children}
        {external && (
          <span className="w-4">
            <ExternalLinkIcon />
          </span>
        )}
      </span>
    </a>
  )
}
