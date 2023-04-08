import Link from "next/link";
import {MainLayout} from "../components/layouts/MainLayout";
import { DarkLayout } from "../components/layouts/DarkLayout";

export default function AboutPage() {
  return (
    <>
      Ir a <Link href="/">Home</Link>
    </>
  );
}

AboutPage.getLayout = function getLayout (page :JSX.Element ){
  return(
  <MainLayout>
  <DarkLayout>
  {page}
  </DarkLayout>
  </MainLayout>
  )
}
