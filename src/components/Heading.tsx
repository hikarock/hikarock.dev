import { Children, type ReactNode } from 'react'

type Props = {
  level: 1 | 2
  children: ReactNode
}

export const Heading = ({ level, children }: Props) => {
  switch (level) {
    case 1: {
      return <h1 className="text-3xl font-extrabold">{children}</h1>
    }
    case 2: {
      return <h2 className="text-2xl font-semibold pb-4">{children}</h2>
    }
  }
}
