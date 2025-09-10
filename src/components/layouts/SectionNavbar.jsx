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
        { name: "Fully Programmable Card Controls", icon: "⚙️" },
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
        { name: "Maker-Checker & Two-Factor Authentication", icon: "🔐" },
        { name: "Reports & Insights", icon: "📊" },
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
        <div className="flex w-full   mx-auto overflow-y-scroll h-[80vh] no-scrollbar ">
          {/* Left Sidebar */}
          <div className=" bg-gray-50 text-left p-6 rounded-l-lg">
            {/* <div className="mb-6">
              <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                READY-TO-USE
              </span>
            </div> */}

            <div className="min-w-[28vw]">
              {productsData.map(({ name, path, icon, descrip }) => (
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
          <div className="ml-2 !mb-8 pb-8">
            <div className="flex-1 p-2 bg-white rounded-r-lg">
              <div className="mb-0">
                <h3 className="text-xl font-semibold text-gray-900 ">
                  Features
                </h3>
                {/* <p className="text-gray-600">
                Discover our features
              </p> */}
              </div>

              <div className="mb-2">
                <div className="grid grid-cols-3 gap-2">
                  {features.map(({ name, icon }) => (
                    <div
                      key={name}
                      className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <span className="text-lg">{icon}</span>
                      <span className="text-gray-700 text-sm">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1 p-6 bg-primarylight rounded-r-lg">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Capabilities
                </h3>
                <p className="text-gray-600"></p>
              </div>

              <div className="mb-6">
                <div className="grid grid-cols-3 gap-2">
                  {capabilites.map(({ name, icon }) => (
                    <div
                      key={name}
                      className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <span className="text-lg">{icon}</span>
                      <span className="text-gray-700 text-sm">{name}</span>
                    </div>
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
        <div className="w-full max-w-7xl mx-auto p-6 overflow-y-auto max-h-[80vh]">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              One Platform. Endless Use Cases.
            </h2>
            <p className="text-gray-600">
              Whether you're managing team expenses, sending payouts, or
              building loyalty programs, our infrastructure supports a wide
              range of business needs.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* Use Cases Column */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-xl">📋</span>
                <Link href={"/solutions/use-cases"}>By Use Cases</Link>
              </h3>
              <div className="space-y-4">
                {solutionsData.useCases.map(({ category, items }) => (
                  <div
                    key={category}
                    className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Industries Column */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-xl">🏢</span>
                <Link href="/solutions/industries">By Industries</Link>
              </h3>
              <div className="space-y-3">
                {industriesData.industries.map(({ name, descrip }) => (
                  <div
                    key={name}
                    className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
                  >
                    <h4 className="font-semibold text-gray-900 mb-1">{name}</h4>
                    <p className="text-sm text-gray-600">{descrip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card Types Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Card Types You Can Use
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {cardTypes.map(({ name, icon, descrip }) => (
                <div
                  key={name}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                >
                  <span className="text-2xl">{icon}</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{name}</h4>
                    <p className="text-sm text-gray-600">{descrip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case "Resources":
      const blogPosts = [
        {
          title:
            "The Future of Embedded Finance in MENA: Trends and Opportunities",
          image: "/placeholder.svg?height=200&width=300",
          path: "/blog/embedded-finance-mena",
        },
        {
          title:
            "Building Compliant Card Programs: A Developer's Guide to KYC and AML",
          image: "/placeholder.svg?height=200&width=300",
          path: "/blog/compliant-card-programs",
        },
        {
          title: "Multi-Currency Cards: Optimizing FX for Global Businesses",
          image: "/placeholder.svg?height=200&width=300",
          path: "/blog/multi-currency-optimization",
        },
        {
          title:
            "From Startup to Scale: How SimpliFi Powers Growing Businesses",
          image: "/placeholder.svg?height=200&width=300",
          path: "/blog/startup-to-scale",
        },
      ];

      return (
        <div className="w-full max-w-6xl mx-auto p-6 overflow-y-auto max-h-[80vh]">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Developer Resources & Support
            </h2>
            <p className="text-gray-600">
              Everything you need to integrate, build, and scale with SimpliFi's
              platform
            </p>
          </div>

          {/* Resource Links Grid */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            {dropdown.map(({ name, path, icon, descrip }) => (
              <Link
                key={path}
                href={path}
                className={`flex flex-col gap-3 p-6 border rounded-lg transition-colors ${
                  pathname.includes(path)
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{icon}</span>
                  <span className="font-semibold text-gray-900">{name}</span>
                </div>
                <p className="text-sm text-gray-600">{descrip}</p>
              </Link>
            ))}
          </div>

          {/* Recent Blog Posts */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Latest Insights
              </h3>
              <Link
                href="/blog"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                All blog posts →
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {blogPosts.map(({ title, image, path }) => (
                <Link key={path} href={path} className="group">
                  <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="p-4">
                      <h4 className="font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {title}
                      </h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      );

    case "Developers":
      return (
        <div className="p-6 max-w-2xl">
          <h3 className="text-xl font-semibold mb-6">Developer Resources</h3>
          <div className="grid grid-cols-2 gap-4">
            {dropdown.map(({ name, path, icon, descrip }) => (
              <Link
                key={path}
                href={path}
                className={`p-4 border rounded-lg transition-colors ${
                  pathname.includes(path)
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                }`}
              >
                <div className="text-2xl mb-2">{icon}</div>
                <p className="font-semibold text-gray-900 mb-1">{name}</p>
                <p className="text-sm text-gray-600">{descrip}</p>
              </Link>
            ))}
          </div>
        </div>
      );

    case "About":
      return (
        <div className="p-6 max-w-4xl">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Powering the Future of Finance in GCC
            </h2>
            <p className="text-gray-600">
              Based in Dubai, SimpliFi was founded to simplify financial
              infrastructure across MENA and Pakistan
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            {dropdown.map(({ name, path, icon, descrip }) => (
              <Link
                key={path}
                href={path}
                className={`p-6 border rounded-lg transition-colors ${
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

          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Our Mission
                </h3>
                <p className="text-sm text-gray-700">
                  To simplify financial infrastructure across MENA and Pakistan
                  by enabling businesses to launch and scale card programs with
                  speed, compliance, and control.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Our Vision</h3>
                <p className="text-sm text-gray-700">
                  To become the financial backbone of the region - powering
                  innovation, access, and ownership through every card we issue.
                </p>
              </div>
            </div>
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
