import Link from "next/link";
import {MainLayout} from "../components/layouts/MainLayout";

export default function ContactPage() {
  return (
      <div >
      Ir a <Link href="/">Home</Link>
      </div>
  );
}

ContactPage.getLayout = function getLayout (page: JSX.Element){
  return(
  <MainLayout>
  {page}
  </MainLayout>
  )
}
