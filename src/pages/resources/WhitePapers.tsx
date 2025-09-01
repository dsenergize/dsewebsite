import React, { useState } from "react";
import Footer from "@/components/Footer";

// --- Icon Components ---
const SupportIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 4.5a.75.75 0 000-1.5h.008v1.5h-.008zM12 12a2.25 2.25 0 00-2.25 2.25H12V12z"
    />
  </svg>
);

const SalesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-1.5h5.25m-5.25 0h5.25m-5.25 0h5.25m-5.25 0h5.25M5.25 6.75h13.5a2.25 2.25 0 012.25 2.25v6a2.25 2.25 0 01-2.25 2.25H5.25a2.25 2.25 0 01-2.25-2.25v-6a2.25 2.25 0 012.25-2.25z"
    />
  </svg>
);

const IoTPlatformIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-2.087-5.022c.15-.01.3-.017.45-.017.3 0 .594.026.88.076a3.75 3.75 0 00-5.462-4.93L9.64 3.84a3.75 3.75 0 00-5.462 4.931 3.75 3.75 0 00-1.332 7.257z"
    />
  </svg>
);

const IoTGatewayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    ></path>
  </svg>
);

const AccordionIcon = ({ open }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 transition-transform duration-300 text-gray-500 ${
      open ? "transform rotate-180" : "rotate-0"
    }`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const FAQs = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const faqData = {
    Support: [
      {
        question: "Can I install the device myself?",
        answer:
          "Yes, there is a section called 'Resources' on the website that contains proper documentation and videos to help you install the system. We also provide on-call support for up to 7 working days to get your system integrated seamlessly.",
      },
      {
        question: "Can I ask for updates or modifications post integration?",
        answer:
          "Any modifications or updates post-integration are chargeable. You can raise a request with our support team, and they will provide a quote.",
      },
    ],
    Sales: [
      {
        question: "What are the pricing plans available?",
        answer:
          "We offer several pricing plans, including a free tier, a pro plan for small businesses, and an enterprise plan for large-scale deployments. You can find detailed information on our pricing page.",
      },
      {
        question: "Is there a discount for annual billing?",
        answer:
          "Yes, we offer a 20% discount on all our plans if you choose to be billed annually.",
      },
    ],
    "IoT Platform": [
      {
        question: "What protocols does the platform support?",
        answer:
          "Our IoT platform supports a wide range of protocols including MQTT, CoAP, and HTTP to ensure compatibility with your devices.",
      },
      {
        question: "How secure is the IoT platform?",
        answer:
          "Security is our top priority. Our platform uses end-to-end encryption, role-based access control, and complies with industry-standard security protocols.",
      },
    ],
    "IoT Gateway": [
      {
        question: "What is the range of the IoT Gateway?",
        answer:
          "The range of our IoT Gateway can vary based on the environment, but it typically covers up to 1 kilometer in open spaces.",
      },
      {
        question: "Can the gateway connect to the cloud via cellular?",
        answer:
          "Yes, our IoT Gateway comes with an optional cellular module for 4G LTE connectivity, ensuring your data is synced even without a Wi-Fi connection.",
      },
    ],
  };

  const faqItems = [
    {
      icon: <SupportIcon />,
      title: "Support",
      description:
        "Get help with installation, troubleshooting, and maintenance.",
      features: [
        "24/7 Priority Support",
        "On-call Assistance",
        "Ticketing System",
      ],
    },
    {
      icon: <SalesIcon />,
      title: "Sales",
      description: "Find the right plan and pricing for your business needs.",
      features: ["Custom Quotes", "Bulk Discounts", "Annual Plans"],
    },
    {
      icon: <IoTPlatformIcon />,
      title: "IoT Platform",
      description: "Learn about our secure and scalable IoT cloud platform.",
      features: [
        "MQTT & HTTP Support",
        "End-to-end Encryption",
        "Data Analytics",
      ],
    },
    {
      icon: <IoTGatewayIcon />,
      title: "IoT Gateway",
      description: "Explore our hardware for seamless device connectivity.",
      features: ["Long Range", "Cellular Option", "Easy Setup"],
    },
  ];

  const handleCategoryClick = (title) => {
    const element = document.getElementById(title);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  return (
    <>
      <div className="bg-gray-50 text-gray-800 min-h-screen font-sans px-4 pt-24 pb-12">
        <div className="w-full max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
              Frequently Asked Questions
            </h1>
            <p className="text-md text-gray-600 max-w-2xl mx-auto">
              Below you will find answers to general queries. For more
              information please contact us at{" "}
              <a
                href="mailto:support@dsenergize.in"
                className="text-yellow-400 font-semibold hover:underline"
              >
                support@dsenergize.in
              </a>
            </p>
          </div>

          {/* Icon Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {faqItems.map((item) => (
              <div
                key={item.title}
                onClick={() => handleCategoryClick(item.title)}
                className="group flex flex-col text-left p-6 bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-200 cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-2"
              >
                <div className="flex flex-row items-center mb-4 bg-yellow-400 rounded-full p-3 inline-block space-x-2">
                  {item.icon}
                  <h3 className="text-xl font-bold text-blue-900">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4 flex-grow">
                  {item.description}
                </p>
                <ul className="space-y-2 text-sm">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckIcon /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* All FAQ Sections */}
          <div className="space-y-12 max-w-4xl mx-auto">
            {Object.entries(faqData).map(([category, faqs]) => (
              <section key={category} id={category} className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-yellow-400 flex items-center gap-4">
                  {category}
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => {
                    const accordionKey = `${category}-${index}`;
                    const isOpen = openAccordion === accordionKey;
                    return (
                      <div
                        key={accordionKey}
                        className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
                      >
                        <button
                          onClick={() => toggleAccordion(accordionKey)}
                          className="w-full flex justify-between items-center p-5 text-left text-gray-800 hover:bg-gray-50 focus:outline-none"
                        >
                          <span className="font-semibold text-lg">
                            {faq.question}
                          </span>
                          <AccordionIcon open={isOpen} />
                        </button>
                        <div
                          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                            isOpen ? "max-h-screen" : "max-h-0"
                          }`}
                        >
                          <div className="p-5 border-t border-gray-200 bg-gray-50 text-gray-600">
                            <p>{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQs;
