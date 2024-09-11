import React from 'react'
import Link from 'next/link';
const Header = () => {
  return(
    <div className ='flex gap-9 p-20 bg-slate-400'>
    <Link href="\">Home page</Link>
    <Link href="\name">Name page</Link>
    <Link href="\address">address page</Link>
    </div>
  )
}

export default Header