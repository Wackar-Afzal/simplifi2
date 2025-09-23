import { CardSim, CreditCard } from "lucide-react";
import Link from "next/link";

const SectionNavbar = ({ sectionName, dropdown = [], pathname = "" }) => {
  if (!Array.isArray(dropdown) || dropdown.length === 0) return null;

  switch (sectionName) {
    case "Products":
      // Get the NAV_ITEMS to access features and other data
      const productsData = dropdown;
      const features = [
        { name: "Multi-Currency Cards", icon: "🌍" },
        { name: "Real-Time Notifications", icon: "🔔" },
        { name: "Instant Issuance", icon: "⚡" },
        { name: "Bulk Load Management", icon: "📦" },
        { name: "Role-Based Access", icon: "👥" },
        { name: "Statement Downloads", icon: "📑" },
        { name: "Developer Sandbox", icon: "🧪" },
        { name: "Developer Tools", icon: "🛠️" },
        { name: "SDKs for Mobile", icon: "📱" },
        { name: "Webhooks", icon: "🔗" },
        { name: "Web Hosted Pages", icon: "🌐" },
        { name: "Custom KYC Flows", icon: "🪪" },
        { name: "Reports & Insights", icon: "📊" },
        { name: "Maker-Checker & Two-Factor Authentication", icon: "🔐" },
        { name: "Fully Programmable Card Controls", icon: "⚙️" },

      ];

      const capabilites = [
        { name: "Security & Compliance", icon: "🛡️" },
        { name: "Identity Verification In-a-Box", icon: "🪪" },
        { name: "Card Fulfillment & Delivery", icon: "📬" },
        { name: "3DS and Tokenization", icon: "🔑" },
        { name: "Collateral Management", icon: "📂" },
        { name: "Chargebacks & Disputes", icon: "⚖️" },
        { name: "Partner Management", icon: "🤝" },
        { name: "Settlement & Reconciliation", icon: "💱" },
        { name: "Cardholder & Technical Support", icon: "🎧" },
      ];

      return (
        <div className="flex w-full   mx-auto overflow-y-scroll h-auto no-scrollbar ">
          {/* Left Sidebar */}
          <div className=" bg-gray-50 text-left p-6 rounded-l-lg">
            {/* <div className="mb-6">
              <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                READY-TO-USE
              </span>
            </div> */}

            <div className="max-w-[25vw] ">
              {productsData.slice(0,2).map(({ name, path, icon, descrip }) => (
                <Link
                  key={path}
                  href={path}
                  className={`flex justify-center !items-start gap-3 p-4 rounded-lg transition-colors ${
                    pathname.includes(path)
                      ? "bg-white shadow-sm border border-gray-200"
                      : "hover:bg-white hover:shadow-sm"
                  }`}
                >
                  <div className="w-full">
                    <div className="flex items-center justify-items-start gap-3 mb-2">
                      <CreditCard color="grey" />
                      <p className="font-semibold text-gray-900 !m-0">{name}</p>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {descrip}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex ml-2 !mb-8 pb-8">
            <div className="flex-1 p-2 bg-white rounded-r-lg">
              <div className="mb-0">
                 <Link href="/features" className="text-xl font-semibold text-gray-900 ">
                  Features
                </Link>
                {/* <p className="text-gray-600">
                Discover our features
              </p> */}
              </div>

              <div className="mb-2">
                <div className="grid grid-cols-2 ">
                  {features.map(({ name, icon }) => (
                     <p
                      key={name}
                      className="flex items-center  p-2  rounded-lg transition-colors"
                    >
                      <span className="text-lg">{icon}</span>
                      <span className="text-gray-700 text-[0.8rem]">{name}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1 p-2 bg-primarylight rounded-r-lg">
              <div className="mb-6">
                <Link href="/capabilities" className="text-xl font-semibold text-gray-900 mb-2">
                  Capabilities
                </Link>
                <p className="text-gray-600"></p>
              </div>

              <div className="mb-6">
                <div className="grid grid-cols-2 ">
                  {capabilites.map(({ name, icon }) => (
                    <p 
                      key={name}
                      className="flex items-center gap-0 p-1  rounded-lg transition-colors"
                    >
                      <span className="text-lg">{icon}</span>
                      <span className="text-gray-700 text-sm">{name}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case "Cards":
      return (
        <div className="w-full max-w-6xl mx-auto p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Cards</h2>
            <p className="text-gray-600 mb-6">
              See the advantages of all our different credit cards
            </p>

            <div className="flex gap-6 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-lg">📋</span>
                <span className="font-medium">Use Case</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">💳</span>
                <span className="font-medium">Payment Technology</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 lg:grid-cols-6 gap-4">
            {dropdown.map(({ name, path, color, icon, descrip }) => (
              <Link
                key={path}
                href={path}
                className={`${color} rounded-2xl p-6 h-64 flex flex-col justify-between text-white hover:scale-105 transition-transform relative overflow-hidden`}
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg">{name}</h3>
                  <span className="text-2xl">{icon}</span>
                </div>

                <div className="mt-auto">
                  <div className="flex justify-between items-end">
                    <span className="text-xs opacity-75">VIRTUAL</span>
                    <div className="text-right">
                      <div className="text-xs font-bold">VISA</div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -mr-16 -mb-16"></div>
              </Link>
            ))}
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
      const cardTypes = dropdown[0]?.cardTypes || [];

      return (
        <div className="w-[max-content] max-w-7xl mx-auto p-6 overflow-y-auto max-h-[80vh] flex">
                 <div className="flex flex-col ">
            {/* Use Cases Column */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-xl">📋</span>
                <Link href={"/solutions/use-cases"}>By Use Cases</Link>
              </h3>
         
            </div>

            {/* Industries Column */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-xl">🏢</span>
                <Link href="/solutions/industries">By Industries</Link>
              </h3>
          
            </div>
          </div>
          {/* <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              One Platform. Endless Use Cases.
            </h2>
            <p className="text-gray-600">
              Whether you're managing team expenses, sending payouts, or
              building loyalty programs, our infrastructure supports a wide
              range of business needs.
            </p>
          </div> */}

   

      
        </div>
      );


    case "About":
      return (
        <div className="p-6 max-w-4xl">
        

          <div className="grid grid-cols-1 gap-2 ">
            {dropdown.map(({ name, path, icon, descrip }) => (
              <Link
                key={path}
                href={path}
                className={` rounded-lg transition-colors ${
                  pathname.includes(path)
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{icon}</span>
                  <span className="font-semibold text-gray-900">{name}</span>
                </div>
                <p className="text-sm text-gray-600">{descrip}</p>
              </Link>
            ))}
          </div>

    
        </div>
      );

    default:
      // Generic fallback renderer
      return (
        <div className="flex flex-wrap gap-4 p-4">
          {dropdown.map(({ name, path }) => (
            <Link
              key={path}
              href={path}
              className={`px-3 py-2 rounded-md transition-colors ${
                pathname.includes(path)
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
