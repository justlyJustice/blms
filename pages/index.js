import AboutCheckout from "@/components/AboutCheckout";
import CourseSection from "@/components/CourseSection";
import CoverSection from "@/components/CoverSection";
import Head from "@/components/Head";
import HeroSection from "@/components/HeroSection";
import Layout from "@/components/Layout";
import UpdateSection from "@/components/UpdateSection";

export default function Home() {
  return (
    <Layout>
      <Head
        title="BLMS"
        description="BLMS is a learning management software application or web-based technology used to plan, implement and assess specific learning process. It is used for eLearning practices and, in its most common form, consists of two elements: a server that performs the base functionality and a user interface that is operated by instructors, students and administrators."
        image="/public/assets/logo.png"
      />

      <HeroSection />

      <AboutCheckout />

      <CourseSection />

      <CoverSection />

      <UpdateSection />
    </Layout>
  );
}
