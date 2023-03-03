import Head from "next/head";
import { Navbrar } from "@/components/navbar";
import { FooterAlt } from "@/components/footer-alt";
import { PageTitle } from "@/components/page-title";
import { CaseStudioDetails } from "@/components/case-study-details";

export default function StudioDetailsPage() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbrar />
      <PageTitle title="Сервис" />
      <CaseStudioDetails />
      <FooterAlt />
    </>
  );
}
