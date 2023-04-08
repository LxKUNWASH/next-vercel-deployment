import Link from 'next/link'
import {MainLayout} from '../components/layouts/MainLayout'


export default function HomePage() {
  return (
<div>
Ir a <Link href='/about'>About</Link>
</div>
  )
}

HomePage.getLayout = function getLayout (page:JSX.Element){
  return(
  <MainLayout>
  {page}
  </MainLayout>
  )
}
