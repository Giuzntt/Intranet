import type { NextPage } from 'next'

import Link from 'next/link'

const HomePage: NextPage = () => {
  return (
   <>
   <Link href='/Login'>
    <a >Ir para a Login</a>
   </Link>
   </>
  )
}

export default HomePage
