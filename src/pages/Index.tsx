import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import WhyTruvia from "@/components/home/WhyTruvia";
import TopCategories from "@/components/home/TopCategories";
import StatsSection from "@/components/home/StatsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <WhyTruvia />
      <TopCategories />
      <StatsSection />
    </Layout>
  );
};

export default Index;
