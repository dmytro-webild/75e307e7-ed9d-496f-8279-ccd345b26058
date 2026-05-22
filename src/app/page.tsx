"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Award, Clock, Wrench } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="largeSizeMediumTitles"
        background="blurBottom"
        cardStyle="soft-shadow"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Services", id: "features" },
        { name: "About", id: "about" },
        { name: "FAQ", id: "faq" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="CareTech IT"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "gradient-bars"}}
      title="Leading Laptop Service Center in Calicut"
      description="Expert repair services for all laptop brands. We deliver quick, affordable, and professional IT maintenance solutions for laptops, printers, and projectors."
      buttons={[
        {
          text: "Contact Us Now",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/service-man-opens-backside-topcase-cover-computer-laptop-before-repairing-cleaning-fixing-it-with-his-professional-tools-from-toolkit-box-near-wooden-table_346278-1798.jpg"
      imageAlt="Professional laptop repair"
      mediaAnimation="slide-up"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/portrait-female-working_23-2148836087.jpg", alt: "Happy Customer 1" },
        { src: "http://img.b2bpic.net/free-photo/business-woman-standing_1187-1543.jpg", alt: "Happy Customer 2" },
        { src: "http://img.b2bpic.net/free-photo/businesswoman-glasses-portrait_1262-1461.jpg", alt: "Happy Customer 3" },
        { src: "http://img.b2bpic.net/free-photo/waist-up-confident-businessman-office_329181-19349.jpg", alt: "Happy Customer 4" },
        { src: "http://img.b2bpic.net/free-photo/front-view-architect-looking-camera_23-2148242888.jpg", alt: "Happy Customer 5" },
      ]}
      avatarText="Trusted by 5,000+ customers"
      marqueeItems={[
        { type: "text", text: "Quick Repairs" },
        { type: "text", text: "Expert Technicians" },
        { type: "text", text: "Affordable Pricing" },
        { type: "text", text: "Warranty Included" },
        { type: "text", text: "Genuine Spare Parts" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Welcome to CareTech IT Solutions"
      description={[
        "CareTech is one of the leading names in North Kerala's IT service industry. We specialize in chip-level repairs, screen replacements, and comprehensive maintenance for Dell, Apple, HP, Lenovo, and more.",        "Our mission is to exceed customer expectations through responsiveness, accountability, and technical expertise."]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        { id: "f1", title: "Laptop Repair", tags: ["Hardware", "Chip Level"], imageSrc: "http://img.b2bpic.net/free-photo/portrait-female-working_23-2148836081.jpg" },
        { id: "f2", title: "Printer Service", tags: ["Laser", "Inkjet"], imageSrc: "http://img.b2bpic.net/free-photo/close-up-male-technician-holding-computer-motherboard_23-2147883860.jpg" },
        { id: "f3", title: "Projector Repair", tags: ["Maintenance", "Support"], imageSrc: "http://img.b2bpic.net/free-photo/man-suit-laptop_23-2147689150.jpg" },
      ]}
      title="Our Specialized Services"
      description="Reliable, fast, and professional solutions for your essential hardware."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "300+", title: "Monthly Repairs", description: "Laptops restored every month", icon: Wrench },
        { id: "m2", value: "10+", title: "Years Experience", description: "Expert service history", icon: Award },
        { id: "m3", value: "24/7", title: "Support Availability", description: "Always ready to help", icon: Clock },
      ]}
      title="Our Impact"
      description="We are trusted by thousands in Kozhikode for our commitment to excellence."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        { id: "1", name: "Sarah J.", role: "Corporate", company: "TechBiz", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/smiling-african-american-man-posing-library_74855-1619.jpg" },
        { id: "2", name: "Michael C.", role: "Student", company: "Uni-Calicut", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-businessman-office-2_1262-1488.jpg" },
        { id: "3", name: "Emily R.", role: "Manager", company: "GrowthCo", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg" },
        { id: "4", name: "David K.", role: "Designer", company: "CreativeStudio", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-correcting-grammar-mistakes_23-2150171372.jpg" },
        { id: "5", name: "Anna P.", role: "Writer", company: "Local Agency", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/closeup-smiling-beautiful-adult-businesswoman_1262-1760.jpg" },
      ]}
      kpiItems={[
        { value: "5/5", label: "Service Quality" },
        { value: "99%", label: "Resolution Rate" },
        { value: "Fast", label: "Turnaround" },
      ]}
      title="Client Success Stories"
      description="Don't just take our word for it—hear from our satisfied customers."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={["Dell", "HP", "Lenovo", "Apple", "Asus", "Samsung", "Sony"]}
      title="Brands We Support"
      description="We specialize in repairing all major laptop brands."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        { id: "q1", title: "Is there a testing fee?", content: "No, we look into your device for free and provide a non-obligatory quote." },
        { id: "q2", title: "How long does repair take?", content: "Many repairs are completed on the same or next day, depending on part availability." },
        { id: "q3", title: "Do you provide data recovery?", content: "Yes, cost depends on the damage. We offer free evaluation first." },
      ]}
      title="Frequently Asked Questions"
      description="Answers to common concerns about our repair services."
      faqsAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/hand-that-uses-angled-esd-tweezers-remove-dust-from-electronic-boards-broken-slim-computer-laptop-fix-it-make-work-again_346278-1801.jpg"
      imageAlt="Technician repairing board"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      tag="Get In Touch"
      title="Ready to fix your device?"
      description="Call us today at +91 9895911144 to register your service request."
      buttons={[
        {
          text: "Call Now",          href: "tel:+919895911144"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="CareTech IT"
      leftLink={{ text: "Terms of Service", href: "#" }}
      rightLink={{ text: "Privacy Policy", href: "#" }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
