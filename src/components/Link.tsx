import type { ReactNode } from 'react'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import { ExternalLink } from 'lucide-react'

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
      <span className="flex items-center gap-1">
        {children}
        {external && (
          <span className="w-4">
            <ExternalLink size={16} />
          </span>
        )}
      </span>
    </a>
  )
}
