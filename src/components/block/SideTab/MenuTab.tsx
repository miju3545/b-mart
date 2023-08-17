import { useContext } from 'react'
import { SideTab } from './SideTab'
import { SideTabContext } from '@/contexts/index'

export function MenuTab() {
  const { hideSideTab } = useContext(SideTabContext)
  return (
    <SideTab header="메뉴" onPrev={() => console.log('이전페이지로 이동')} onClose={hideSideTab}>
      <div>내용</div>
    </SideTab>
  )
}
