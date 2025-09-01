import Link from "next/link";
import { useState } from "react";

const SectionNavbar = ({ sectionName, dropdown = [], pathname = "" }) => {
  // Move ALL useState calls to the top of the component
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [hoveredOption, setHoveredOption] = useState("useCase");

  if (!Array.isArray(dropdown) || dropdown.length === 0) return null;

  switch (sectionName) {
    case "Products":
      const productsData = dropdown;
      const productContent = {
        PaymentsApps: {
          title: "Ready-to-Use Payment Apps",
          subtitle: "Launch in days, not months",
          description:
            "Go live with ready-to-issue cards in days. Launch ready-to-use, compliant multi-currency corporate cards without writing a single line of code.",
          features: [
            {
              name: "Instant Card Issuance",
              icon: "⚡",
              description: "Issue cards immediately upon approval",
            },
            {
              name: "Multi-Currency Support",
              icon: "🌍",
              description: "Support 50+ currencies with real-time FX",
            },
            {
              name: "White-Label Ready",
              icon: "🎨",
              description: "Fully customizable to match your brand",
            },
            {
              name: "Zero Code Integration",
              icon: "🚀",
              description: "No technical integration required",
            },
          ],
          highlights: [
            "PCI DSS Level 1 Compliant",
            "Go live in 2-3 weeks",
            "Pre-built KYC workflows",
          ],
        },
        "Pro API": {
          title: "Professional API Suite",
          subtitle: "Build custom financial products",
          description:
            "Advanced APIs for developers who want complete control over their card programs. Build sophisticated financial products with enterprise-grade infrastructure.",
          features: [
            {
              name: "REST & GraphQL APIs",
              icon: "🔗",
              description: "Flexible API options for any tech stack",
            },
            {
              name: "Webhook Management",
              icon: "📡",
              description: "Real-time event notifications",
            },
            {
              name: "Custom Card Rules",
              icon: "⚙️",
              description: "Programmable spending controls",
            },
            {
              name: "Advanced Analytics",
              icon: "📊",
              description: "Deep insights into card usage patterns",
            },
          ],
          highlights: [
            "99.9% API uptime SLA",
            "Sub-100ms response times",
            "Comprehensive SDK library",
          ],
        },
        "Cards-as-a-Service": {
          title: "Complete Card Infrastructure",
          subtitle: "End-to-end card program management",
          description:
            "Full-stack card issuing platform with everything you need to launch, manage, and scale card programs across multiple markets.",
          features: [
            {
              name: "Card Program Management",
              icon: "💼",
              description: "Complete lifecycle management",
            },
            {
              name: "Risk & Compliance",
              icon: "🛡️",
              description: "Built-in fraud detection and AML",
            },
            {
              name: "Multi-Region Support",
              icon: "🌐",
              description: "MENA, Pakistan, and beyond",
            },
            {
              name: "Custom Workflows",
              icon: "🔄",
              description: "Tailored approval and KYC processes",
            },
          ],
          highlights: [
            "Licensed in 8+ countries",
            "24/7 operational support",
            "Enterprise-grade security",
          ],
        },
        CardOS: {
          title: "Operating System for Cards",
          subtitle: "The foundation of modern card programs",
          description:
            "Core infrastructure that powers all card operations. Built for scale, security, and flexibility with enterprise-grade reliability.",
          features: [
            {
              name: "Transaction Processing",
              icon: "⚡",
              description: "High-speed transaction engine",
            },
            {
              name: "Authorization Rules",
              icon: "🔐",
              description: "Sophisticated spending controls",
            },
            {
              name: "Settlement Engine",
              icon: "💰",
              description: "Automated settlement and reconciliation",
            },
            {
              name: "Monitoring & Alerts",
              icon: "📺",
              description: "Real-time system monitoring",
            },
          ],
          highlights: [
            "Process 10K+ TPS",
            "99.99% system uptime",
            "ISO 27001 certified",
          ],
        },
      };

      const currentProduct = selectedProduct
        ? productContent[selectedProduct]
        : productContent["PaymentsApps"];

      return (
        <div className="flex w-full max-w-7xl mx-auto">
          {/* Left Navigation */}
          <div className="w-80 p-6 rounded-l-lg">
            <div className="mt-2 mb-4 text-start">
              <span className="text-xs font-semibold px-3 py-2 rounded-full bg-yellow text-black">
                OPTIMIZE CARD PAYMENTS
              </span>
            </div>
            <div className="space-y-1">
              {productsData.slice(0, 2).map(({ name, path, icon }) => (
                <div
                  key={path}
                  onMouseEnter={() => setSelectedProduct(name)}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer ${pathname.includes(path)
                    ? "bg-white shadow-sm border border-gray-200"
                    : "hover:bg-white hover:shadow-sm"
                    }`}
                >
                  <div className="text-2xl" style={{ filter: "grayscale(1)" }}>
                    {icon}
                  </div>
                  <div>
                    <Link href={path}>
                      <p className="font-semibold text-gray-900">{name}</p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 mb-4 text-start">
              <span className="text-xs font-semibold text-white bg-black px-3 py-2 rounded-full">
                BUILD YOUR OWN PROGRAM
              </span>
            </div>

            <div className="space-y-1">
              {productsData.slice(2).map(({ name, path, icon }) => (
                <div
                  key={path}
                  onMouseEnter={() => setSelectedProduct(name)}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer ${pathname.includes(path)
                    ? "bg-white shadow-sm border border-gray-200"
                    : "hover:bg-white hover:shadow-sm"
                    }`}
                >
                  <div className="text-2xl" style={{ filter: "grayscale(1)" }}>
                    {icon}
                  </div>
                  <div>
                    <Link href={path}>
                      <p className="font-semibold text-gray-900">{name}</p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content Area - Dynamic based on selected product */}
          <div className="flex-1 p-6 bg-white rounded-r-lg text-start">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-black mb-2">
                {currentProduct.title} →
              </h3>
              {/* <div className="mb-2">
                <span className="text-sm font-semibold text-blue-600">
                  {currentProduct.subtitle}
                </span>
              </div> */}
              <p className="text-gray-600 text-sm">
                {currentProduct.description}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-black mb-4">Key Features</h4>
              <div className="grid grid-cols-2 gap-1">
                {currentProduct.features.map(({ name, icon, description }) => (
                  <div
                    key={name}
                    className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <span
                      className="text-lg mt-0.5"
                      style={{ filter: "grayscale(1)" }}
                    >
                      {icon}
                    </span>
                    <div>
                      <span className="text-gray-900 font-medium text-sm block">
                        {name}
                      </span>
                      <span className="text-gray-600 text-xs">
                        {description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );

    case "Cards":
      // Content for Use Case hover
      const useCaseContent = [
        {
          title: "Personal Banking",
          description: "Everyday spending and rewards",
          icon: "👤",
          image:
            "https://www.getpliant.com/_next/image/?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F169635%2F95x150%2F566bc580bb%2Ftravel-purchasing-card-desktop.svg&w=1920&q=75",
        },
        {
          title: "Business Expenses",
          description: "Corporate spending solutions",
          icon: "💼",
          image:
            "https://www.getpliant.com/_next/image/?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F169635%2F95x150%2F566bc580bb%2Ftravel-purchasing-card-desktop.svg&w=1920&q=75",
        },
        {
          title: "Travel & International",
          description: "Global acceptance and benefits",
          icon: "🌍",
          image:
            "https://www.getpliant.com/_next/image/?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F169635%2F95x150%2F566bc580bb%2Ftravel-purchasing-card-desktop.svg&w=1920&q=75",
        },
        {
          title: "Online Shopping",
          description: "Secure online transactions",
          icon: "🛒",
          image:
            "https://www.getpliant.com/_next/image/?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F169635%2F95x150%2F566bc580bb%2Ftravel-purchasing-card-desktop.svg&w=1920&q=75",
        },
      ];

      // Content for Payment Technology hover
      const paymentTechContent = [
        {
          title: "Contactless Payment",
          description: "Tap to pay technology",
          icon: "📲",
          image:
            "https://www.getpliant.com/_next/image/?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F169635%2F95x150%2F566bc580bb%2Ftravel-purchasing-card-desktop.svg&w=1920&q=75",
        },
        {
          title: "EMV Chip",
          description: "Enhanced security features",
          icon: "🔒",
          image:
            "https://www.getpliant.com/_next/image/?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F169635%2F95x150%2F566bc580bb%2Ftravel-purchasing-card-desktop.svg&w=1920&q=75",
        },
        {
          title: "Virtual Cards",
          description: "Digital card solutions",
          icon: "💳",
          image:
            "https://www.getpliant.com/_next/image/?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F169635%2F95x150%2F566bc580bb%2Ftravel-purchasing-card-desktop.svg&w=1920&q=75",
        },
        {
          title: "Mobile Wallet",
          description: "Apple Pay & Google Pay",
          icon: "📱",
          image:
            "https://www.getpliant.com/_next/image/?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F169635%2F95x150%2F566bc580bb%2Ftravel-purchasing-card-desktop.svg&w=1920&q=75",
        },
      ];

      return (
        <div className="w-full max-w-7xl mx-auto p-6">
          <div className="mb-8">
            <h2 className="text-2xl text-start font-bold text-gray-900 mb-2">
              Cards
            </h2>
            <p className="text-gray-600 mb-3 text-start ">
              See the advantages of all our different credit cards
            </p>

            <div className="flex gap-6 mb-4">
              <div
                className="flex items-center gap-2 cursor-pointer  text-black hover:bg-gray-50 p-3 rounded-lg transition-all duration-200"
                onMouseEnter={() => setHoveredOption("useCase")}
                onMouseLeave={() => setHoveredOption(null)}
              >
                <span className="text-lg">📋</span>
                <span className="font-medium">Use Case</span>
              </div>
              <div
                className="flex items-center gap-2 cursor-pointer text-black hover:bg-gray-50 p-3 rounded-lg transition-all duration-200"
                onMouseEnter={() => setHoveredOption("paymentTech")}
                onMouseLeave={() => setHoveredOption(null)}
              >
                <span className="text-lg">💳</span>
                <span className="font-medium">Payment Technology</span>
              </div>
            </div>

            <div className="min-h-40 mb-4">
              {hoveredOption === "useCase" && (
                <div className="animate-fadeIn">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {useCaseContent.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white   rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        {/* <div className="text-2xl mb-2">{item.icon}</div>
                        <h4 className="font-medium text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p> */}
                        <img src={item.image} alt="" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {hoveredOption === "paymentTech" && (
                <div className="animate-fadeIn">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {paymentTechContent.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white   rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <img src={item.image} alt="" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    case "Solutions":
      const solutionsData = dropdown.find((item) => item.useCases) || {
        useCases: [],
      };
      const industriesData = dropdown.find((item) => item.industries) || {
        industries: [],
      };

      const SoltuionsFeatures = {
        features: [
          {
            name: "Instant Card Issuance",
            icon: "⚡",
            description: "Issue cards immediately upon approval",
          },
          {
            name: "Multi-Currency Support",
            icon: "🌍",
            description: "Support 50+ currencies with real-time FX",
          },
          {
            name: "White-Label Ready",
            icon: "🎨",
            description: "Fully customizable to match your brand",
          },
          {
            name: "Zero Code Integration",
            icon: "🚀",
            description: "No technical integration required",
          },
        ],
      };
      return (
        <div className="w-full max-w-7xl mx-auto p-6 overflow-y-auto max-h-[80vh]">
          {/* Header */}
          <div className="mb-2 text-center">
            <h2 className="text-2xl text-start font-bold text-gray-900 mb-2">
              Solutions
            </h2>
            <p className=" text-start ">
              How customers from key industries benefit from simplfiy.
            </p>
          </div>

          <div className="mb-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="mt-2 mb-4 text-start">
                <span className="text-xs font-semibold px-3 py-2 rounded-full bg-yellow text-black">
                  OPTIMIZE CARD PAYMENTS
                </span>
              </div>
              <div className="mt-6 mb-4 text-start">
                <span className="text-xs font-semibold text-white bg-black px-3 py-2 rounded-full">
                  BUILD YOUR OWN PROGRAM
                </span>
              </div>
            </div>
          </div>

          <div className="mb-2 text-start">
            <h4 className="font-bold text-lg text-black mb-4"> Features</h4>
            <div className="grid grid-cols-4 gap-1">
              {SoltuionsFeatures.features.map(({ name, icon, description }) => (
                <div
                  key={name}
                  className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span
                    className="text-lg mt-0.5"
                    style={{ filter: "grayscale(1)" }}
                  >
                    {icon}
                  </span>
                  <div>
                    <span className="text-gray-900 font-semibold text-lg block">
                      {name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              Recent stories
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {industriesData.industries.map(({ name, descrip, image }) => (
                <div
                  key={name}
                  className="border border-gray-200 rounded-2xl p-5"
                >
                  <img src={image} className="mb-4 rounded-full" alt="" />
                  <h4 className="font-bold text-start text-2xl text-gray-900 mb-1">
                    {name}
                  </h4>
                  <p className="text-sm text-start text-gray-600">{descrip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    case "Resources":
      const resourcesCaseData = {
        blogPosts: [
          {
            title:
              "The Future of Embedded Finance in MENA: Trends and Opportunities",
            image:
              "https://www.getpliant.com/_next/image/?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F169635%2F864x486%2F31734ba74d%2Fbuilding-real-time-reliable-notifications-with-server-sent-events.png&w=1920&q=75",
            path: "https://www.getpliant.com/_next/image/?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F169635%2F864x486%2F31734ba74d%2Fbuilding-real-time-reliable-notifications-with-server-sent-events.png&w=1920&q=75",
          },
          {
            title:
              "Building Compliant Card Programs: A Developer's Guide to KYC and AML",
            image:
              "https://www.getpliant.com/_next/image/?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F169635%2F864x486%2F31734ba74d%2Fbuilding-real-time-reliable-notifications-with-server-sent-events.png&w=1920&q=75",
            path: "https://www.getpliant.com/_next/image/?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F169635%2F864x486%2F31734ba74d%2Fbuilding-real-time-reliable-notifications-with-server-sent-events.png&w=1920&q=75",
          },
          {
            title: "Multi-Currency Cards: Optimizing FX for Global Businesses",
            image:
              "https://www.getpliant.com/_next/image/?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F169635%2F864x486%2F31734ba74d%2Fbuilding-real-time-reliable-notifications-with-server-sent-events.png&w=1920&q=75",
            path: "https://www.getpliant.com/_next/image/?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F169635%2F864x486%2F31734ba74d%2Fbuilding-real-time-reliable-notifications-with-server-sent-events.png&w=1920&q=75",
          },
          {
            title:
              "From Startup to Scale: How SimpliFi Powers Growing Businesses",
            image:
              "https://www.getpliant.com/_next/image/?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F169635%2F864x486%2F31734ba74d%2Fbuilding-real-time-reliable-notifications-with-server-sent-events.png&w=1920&q=75",
            path: "https://www.getpliant.com/_next/image/?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F169635%2F864x486%2F31734ba74d%2Fbuilding-real-time-reliable-notifications-with-server-sent-events.png&w=1920&q=75",
          },
        ],
      };

      const resourcesFeatures = {
        features: [
          {
            name: "Instant Card Issuance",
            icon: "⚡",
            description: "Issue cards immediately upon approval",
          },
          {
            name: "Multi-Currency Support",
            icon: "🌍",
            description: "Support 50+ currencies with real-time FX",
          },
          {
            name: "White-Label Ready",
            icon: "🎨",
            description: "Fully customizable to match your brand",
          },
          {
            name: "Zero Code Integration",
            icon: "🚀",
            description: "No technical integration required",
          },
        ],
      };
      return (
        <div className="w-full max-w-7xl mx-auto p-6 overflow-y-auto max-h-[80vh]">
          {/* Header */}
          <div className="mb-2 text-center">
            <h2 className="text-2xl text-start font-bold text-gray-900 mb-2">
              Resources
            </h2>
            <p className=" text-start ">
              How customers from key industries benefit from simplfiy.
            </p>
          </div>

          <div className="mb-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="mt-2 mb-4 text-start">
                <span className="text-xs font-semibold px-3 py-2 rounded-full bg-yellow text-black">
                  OPTIMIZE CARD PAYMENTS
                </span>
              </div>
              <div className="mt-6 mb-4 text-start">
                <span className="text-xs font-semibold text-white bg-black px-3 py-2 rounded-full">
                  BUILD YOUR OWN PROGRAM
                </span>
              </div>
            </div>
          </div>

          <div className="mb-2 text-start">
            <h4 className="font-bold text-lg text-black mb-4"> Features</h4>
            <div className="grid grid-cols-4 gap-1">
              {resourcesFeatures.features.map(({ name, icon, description }) => (
                <div
                  key={name}
                  className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span
                    className="text-lg mt-0.5"
                    style={{ filter: "grayscale(1)" }}
                  >
                    {icon}
                  </span>
                  <div>
                    <span className="text-gray-900 font-semibold text-lg block">
                      {name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              Recent Blogs
            </h3>
            <div className="grid grid-cols-4 gap-5">
              {resourcesCaseData.blogPosts.map(({ title, image, path }) => (
                <a key={title} href={path} className="    transition-shadow">
                  <img
                    src={image}
                    className="mb-4 rounded-2xl w-full h-40 object-cover"
                    alt={title}
                  />
                  <h4 className="font-bold text-start text-lg text-gray-900 mb-1">
                    {title}
                  </h4>
                </a>
              ))}
            </div>
          </div>
        </div>
      );

    case "Developers":
      const DevelopersFeatures = {
        features: [
          {
            name: "Instant Card Issuance",
            icon: "⚡",
            description: "Issue cards immediately upon approval",
          },
          {
            name: "Multi-Currency Support",
            icon: "🌍",
            description: "Support 50+ currencies with real-time FX",
          },
          {
            name: "White-Label Ready",
            icon: "🎨",
            description: "Fully customizable to match your brand",
          },
          {
            name: "Zero Code Integration",
            icon: "🚀",
            description: "No technical integration required",
          },
        ],
      };
      return (
        <div className="w-full max-w-7xl mx-auto p-6 overflow-y-auto max-h-[80vh]">
          {/* Header */}
          <div className="mb-4 text-center">
            <h2 className="text-2xl text-start font-bold text-gray-900 mb-2">
              Developers
            </h2>
            <p className=" text-start ">
              Build your all-in-one credit card solution with Pliant
            </p>
          </div>

          <div className="mb-5 text-start">
            <h4 className="font-bold text-lg text-black mb-4"> Pro API</h4>
            <div className="grid grid-cols-4 gap-1">
              {DevelopersFeatures.features.map(
                ({ name, icon, description }) => (
                  <div
                    key={name}
                    className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <span
                      className="text-lg mt-0.5"
                      style={{ filter: "grayscale(1)" }}
                    >
                      {icon}
                    </span>
                    <div>
                      <span className="text-gray-900 font-semibold text-lg block">
                        {name}
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="mb-2">
            <div className="grid grid-cols-3 gap-5">
              <div className="group border border-gray-200 rounded-2xl p-5 bg-white hover:bg-gray-50   transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 text-gray-600 group-hover:bg-gray-300 group-hover:text-gray-800 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      className="shrink-0"
                    >
                      <path d="M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z"></path>
                    </svg>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 text-lg group-hover:text-gray-800 transition-colors">
                      Developers Starter Guide
                    </h4>
                   
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="flex flex-wrap gap-4 p-4">
          {dropdown.map(({ name, path }) => (
            <Link
              key={path}
              href={path}
              className={`px-3 py-2 rounded-md transition-colors ${pathname.includes(path)
                ? "bg-lightPurple text-white"
                : "hover:bg-gray-100"
                }`}
            >
              {name}
            </Link>
          ))}
        </div>
      );
  }
};

export default SectionNavbar;