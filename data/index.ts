import { FAQItem } from "@/types/faq";
import { CaseStudyCard } from "@/types/caseStudies";

export const fqas: FAQItem[] = [
    {
      id: "pricing",
      category: "school",
      question: "Who sets the pricing for facility hire on PitchUp?",
      answer:
        "Schools do. PitchUp does not set or control pricing – your team determines the hire fees, terms, and conditions that best reflect your school’s needs and community priorities."
    },
    {
      id: "revenue",
      category: "school",
      question: "Who receives the revenue from bookings?",
      answer:
        "PitchUp facilitates payments via Stripe’s secure gateway and immediately transfers funds to the school. A small service fee may be deducted from the total amount to cover digital payment, insurance, and admin costs."
    },
    {
      id: "profit",
      category: "school",
      question: "Can schools use PitchUp to generate a profit?",
      answer:
        "PitchUp is designed to be compliant in each state, supporting cost-recovery rather than commercial profit. Schools can set hire fees to recover costs (wear & tear, admin, utilities) and we provide audit trails, reporting, and transparency."
    },
    {
      id: "security",
      category: "school",
      question: "Is PitchUp secure and compliant?",
      answer:
        "Yes. PitchUp is built with data privacy, security, and school governance in mind. We use encrypted infrastructure, secure payments, and role-based access to ensure information is handled responsibly and can work with your IT team on requirements."
    },
    {
      id: "choose-bookings",
      category: "school",
      question: "Can schools choose which bookings to accept?",
      answer:
        "Absolutely. Schools retain full control over bookings, pricing, availability, and who can hire their spaces. PitchUp automates workflows, but you decide what gets approved."
    },
    {
      id: "time-saved",
      category: "school",
      question: "How much time does PitchUp save staff?",
      answer:
        "Schools report saving between 5–10 hours per week in admin time by automating inquiries, contracts, and payments. PitchUp also reduces the risk of missed payments and double bookings."
    },
    {
      id: "public-listing",
      category: "community",
      question: "Do schools have to list their facilities publicly?",
      answer:
        "No. Public listings are optional. Some schools use PitchUp as a private facility-management system, while others choose to publicly advertise their spaces to attract more local clubs and community groups."
    },
    {
      id: "support",
      category: "community",
      question: "What kind of support does PitchUp provide?",
      answer:
        "We offer ongoing support through quick and easy onboarding, training, and dedicated account management."
    }
  ];

export const caseStudies: CaseStudyCard[] = [
    {
      id: "matraville",
      title: "Case Study 1 – Matraville High School",
      tag: "Maximising Revenue & Community Impact",
      image: "https://images.unsplash.com/photo-1624880357913-a8539238245b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "PitchUp automated bookings, making the facility accessible to local hirers, increased utilisation by 60 % and reduced staff workload by 10 hours a week. It generated $18 k+ in additional revenue (3.4× increase) and deepened community ties in just one term.",
    },
    {
      id: "rowville",
      title: "Case Study 2 – Rowville College",
      tag: "Unlocking Growth & Gender Equity in Sports",
      image: "https://images.unsplash.com/photo-1434648957308-5e6a859697e8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "Connecting Knox United FC with Rowville’s facilities enabled 100 % of wait-listed girls to register and play, while reducing facility costs by 10 %. PitchUp provided the clarity, control, and community engagement the club needed to grow equitably.",
    },
    {
      id: "marcellin",
      title: "Case Study 3 – Marcellin College",
      tag: "Solving a High-Stakes, Last-Minute Challenge",
      image: "https://images.unsplash.com/photo-1577416412292-747c6607f055?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "Within 24 hours PitchUp secured training space for Uzbekistan Women’s National Soccer Team before an Olympic qualifier, allowing the squad to prepare without disruption and showcasing the school’s commitment to equal opportunity in sport.",
    },

];

export type { CaseStudyCard };