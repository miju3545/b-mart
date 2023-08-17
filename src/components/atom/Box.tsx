import { PropsWithChildren } from 'react'

type Props = {
  display?: 'flex' | 'block' | 'inline-block' | 'inline-flex' | 'grid' | 'inline-grid' | 'none'
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between'
  rowGap?: number
  padding?: number
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  style?: React.CSSProperties
}

export function Box({ children, style, onClick, ...rest }: PropsWithChildren<Props>) {
  const getStyle = () => {
    const { display, flexDirection, justifyContent, rowGap = 0, padding = 0 } = rest
    return {
      display,
      flexDirection,
      justifyContent,
      rowGap: `${rowGap}px`,
      padding: `${padding}px`,
    }
  }

  return (
    <div style={{ ...getStyle(), ...style }} onClick={onClick}>
      {children}
    </div>
  )
}
