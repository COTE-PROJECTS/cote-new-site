import AdvocacyResearchSection from "@/components/AdvocancyComponent";
import ArticleComponents from "@/components/ArticleComponents";
import Partners from "@/components/ClientsComponents";
import DataProtectionAwareness from "@/components/DataProtectionAwareness";
import DigitalInclusionSection from "@/components/DigitalInclusionComponent";
import DrivingChangeComponent from "@/components/DrivingChangeComponent";
import HeaderSection from "@/components/HeaderSection";
import InternetFreedomAwareness from "@/components/InternetFredomAwareness";
import LegalAidComponent from "@/components/LegalAidcomponent";
import NewsletterSignup from "@/components/NewsComponent";
import SubscriptionComponent from "@/components/SubscribeComponent";
import React from "react";


export default function Home() {
  return (
    <>
      <HeaderSection />
      <NewsletterSignup />
      <DataProtectionAwareness />
      <InternetFreedomAwareness />
      <DrivingChangeComponent />
      <DigitalInclusionSection />
      <AdvocacyResearchSection />
      <LegalAidComponent />
      <SubscriptionComponent />
      <ArticleComponents />
      <Partners />
    </>
  );
}
