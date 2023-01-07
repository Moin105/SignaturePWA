import React, { useEffect, useState } from 'react'
import TabButton from './TabButton'
import c1 from '../../images/c1.png'
import c2 from '../../images/c2.png'
import c3 from '../../images/c3.png'
import g1 from '../../images/g1.png'
import g2 from '../../images/g2.png'
import g3 from '../../images/g3.png'
import './Tab.css'

function Tab({ setTab, tab, actives, sendDataToParent }) {
  const [active, setActive] = useState("details")
  useEffect(() => {
    setTab(active)
  }, [active])

  return (
    <>
      <div className='tab-row'>
        {tab == "details" ? <TabButton name="Item Details" icon={c1} setActive={setActive} state="details" /> : <TabButton name="Item Details" icon={g1} setActive={setActive} state="details" />}
        {tab == "customer" ? <TabButton name="Customer" icon={c2} setActive={setActive} state="customer" /> : <TabButton name="Customer" icon={g2} setActive={setActive} state="customer" />}
        {tab == "installer" ? <TabButton name="Installer Details" icon={c3} setActive={setActive} state="installer" /> : <TabButton name="Installer Details" icon={g3} state="installer" setActive={setActive} />}
      </div>
    </>
  )
}

export default Tab