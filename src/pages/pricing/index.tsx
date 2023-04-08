import {MainLayout} from "../../components/layouts/MainLayout"
import Link from "next/link"
export default function PricingPage() {
  return (
    <div>   
    Ir a<Link href="/contact"> Contact</Link>
    </div>
  )
}

PricingPage.getLayout = function getLayout(page:JSX.Element){
return(
<MainLayout>
{page}
</MainLayout>
)
}
