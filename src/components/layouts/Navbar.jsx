"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ChevronDown, List, Phone } from "lucide-react";
import SectionNavbar from "./SectionNavbar";

const NAV_ITEMS = [
  {
    name: "Products",
    path: "/products",
    dropdown: [
      {
        name: "Embed Ready-to-Use Cards",
        path: "/Embed-Ready-To-Use-Card",
        icon: "💳",
        descrip:
          "Go live in days with prebuilt, compliant multi-currency cards.",
      },
      {
        name: "Cards as a Service",
        path: "/Cards-As-a-Service",
        icon: "🏗️",
        descrip:
          "Build your own branded card program with full control.",
      },
      {
        
      }
    
    ],
  },
  {
    name: "Solutions",
    path: "/solutions",
    dropdown: [
      {
        name: "By Use Cases",
        path: "/solutions/use-cases",
        icon: "📋",
        descrip:
          "Corporate Payouts, Gifting & Rewards, Corporate Spend, Consumer Spend, BNPL & Credit",
        useCases: [
          {
            category: "Corporate Payouts",
            items: [
              "Salary Payout Cards",
              "Freelancer Payout Cards",
              "Commission & Incentive Cards",
              "Payroll Cards (WPS)",
            ],
          },
          {
            category: "Gifting & Rewards",
            items: [
              "Gift Cards",
              "Mall Gift Cards",
              "Retail Gift Cards",
              "eGift Cards",
              "Loyalty Redemption Cards",
            ],
          },
          {
            category: "Corporate Spend",
            items: ["Corporate Expense Cards", "Fuel Cards", "Supplier Payment Cards"],
          },
          {
            category: "Consumer Spend",
            items: ["Consumer Wallet Cards", "Cashback & Rewards Cards", "Travel Cards", "Crypto Cards"],
          },
          {
            category: "BNPL & Credit",
            items: ["BNPL Cards", "In-store & Online Payment Cards", "Consumer Credit Profiles"],
          },
        ],
      },
      {
        name: "By Industries",
        path: "/solutions/industries",
        icon: "🏢",
        descrip: "SaaS, Ecommerce, Marketing, Logistics, Travel, Insurance, Startups & Scaleups",
        industries: [
          {
            name: "SaaS",
            descrip: "Empower tech teams with spend controls, usage insights, and multi-currency cards.",
          },
          {
            name: "Ecommerce",
            descrip: "Manage ad spend, fulfillment payouts, and supplier transactions from one platform.",
          },
          {
            name: "Marketing",
            descrip: "Run campaign cards, manage influencer budgets, or issue merchant specific cards.",
          },
          {
            name: "Logistics",
            descrip: "Issue fuel cards and driver per diem cards, complete with real-time tracking.",
          },
          {
            name: "Travel",
            descrip:
              "Issue multi-currency cards for travelers to optimize on FX, manage spend limits and enforce region-specific rules.",
          },
          {
            name: "Insurance",
            descrip: "Disburse funds for claims via instantly issued cards to streamline insurance payments.",
          },
          {
            name: "Startups & Scaleups",
            descrip: "Keep team spend in check while moving fast - Issue, track, and reconcile with ease.",
          },
        ],
      },
    ],
    cardTypes: [
      { name: "Physical Cards", icon: "💳", descrip: "Plastic cards with your brand, delivered to your team or customers." },
      { name: "Virtual Cards", icon: "🌐", descrip: "Instantly issued and ready to use online or via mobile wallets." },
      { name: "Single-Use Cards", icon: "🔁", descrip: "Auto-expiring cards designed for one-time transactions." },
      { name: "Crypto Cards", icon: "🪙", descrip: "Link to crypto wallets and convert on-the-fly for real-world spend." },
      { name: "Gift Cards", icon: "🎁", descrip: "Branded cards for promotions, rewards, or loyalty programs." },
      { name: "Fuel Cards", icon: "⛽", descrip: "Tailored for transportation teams. Limit use to fuel merchants." },
    ],
  },
  {
    name: "Resources",
    path: "/resources",
    dropdown: [
      { name: "API Documentation", path: "/resources/api-docs", icon: "📚", descrip: "Complete API reference and integration guides" },
      { name: "Developer Sandbox", path: "/resources/sandbox", icon: "🧪", descrip: "Test and build in a secure, private environment" },
      { name: "SDKs & Tools", path: "/resources/sdks", icon: "🛠️", descrip: "PCI-compliant SDKs for iOS and Android apps" },
      { name: "Support Center", path: "/resources/support", icon: "🎧", descrip: "24/7 multilingual support and technical assistance" },
      { name: "Blog", path: "/resources/blog", icon: "✍️", descrip: "Latest insights on fintech and payments" },
      { name: "Press & Media", path: "/resources/press", icon: "📰", descrip: "Media coverage and company news" },
    ],
    blogPosts: [
      { title: "The Future of Embedded Finance in MENA: Trends and Opportunities", image: "/placeholder.svg?height=200&width=300", path: "/blog/embedded-finance-mena" },
      { title: "Building Compliant Card Programs: A Developer's Guide to KYC and AML", image: "/placeholder.svg?height=200&width=300", path: "/blog/compliant-card-programs" },
      { title: "Multi-Currency Cards: Optimizing FX for Global Businesses", image: "/placeholder.svg?height=200&width=300", path: "/blog/multi-currency-optimization" },
      { title: "From Startup to Scale: How SimpliFi Powers Growing Businesses", image: "/placeholder.svg?height=200&width=300", path: "/blog/startup-to-scale" },
    ],
  },
  {
    name: "About",
    path: "/about",
    dropdown: [
      { name: "Our Story", path: "/about/story", icon: "📖", descrip: "Founded by Ali Amin Sattar to simplify financial infrastructure across MENA and Pakistan" },
      { name: "Our Team", path: "/about/team", icon: "👥", descrip: "Meet the SimpliFiers building the future of finance" },
      { name: "Our Values", path: "/about/values", icon: "⭐", descrip: "Raise the bar, Make an impact, Own it, People first" },
      { name: "Careers", path: "/about/careers", icon: "💼", descrip: "Join our team and become a SimpliFier" },
      { name: "Press", path: "/about/press", icon: "📰", descrip: "Media coverage and company announcements" },
    ],
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [contactdrop, setContactdrop] = useState(false);
  const pathname = usePathname();

  const handleDropdownToggle = (path) => {
    setOpenDropdown(openDropdown === path ? null : path);
  };

  return (
    <div className="bg-white sticky top-0 z-[100] pt-4 pb-2">
    <nav
      className="p-0  mx-4 mt-4 mb-0 bg-primarylight  rounded-4xl "
      onClick={() => setIsMenuOpen(false)}
    >
      <div className="relative">
        {/* Main Navbar */}
        <div className="flex flex-wrap gap-4 justify-between items-center py-2 md:py-2 px-1 m-auto">
          {/* Logo */}
          <div className="flex items-center gap-[2rem]">
            <Link href="/" className="text-2xl font-bold text-blue px-[0.5rem] md:pl-[2rem]">
              <img src="/logo.svg" alt="logo" className="w-[4rem] md:w-[6rem]" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex bg-lightGrey rounded-[6.25rem]">
              {NAV_ITEMS.map(({ name, path, dropdown }) => (
                <div key={path} className="flex items-center">
                  {dropdown  ? (
                    <div
                      className={`h-[3.27rem] flex items-center justify-center text-center capitalize rounded-[6.25rem] px-1.5 cursor-pointer ${
                        pathname.includes(path) ? "bg-lightPurple text-black" : "bg-transparent text-black hover:text-gray-400"
                      }`}
                      onMouseEnter={() => handleDropdownToggle(path)}
                      onMouseLeave={() => handleDropdownToggle(null)}
                      onClick={() => handleDropdownToggle(!openDropdown)}
                    >
                      <div className="flex items-center gap-2">
                        {name}
                        <ChevronDown className="h-3 w-3" />
                      </div>
                      <AnimatePresence>
                        {openDropdown==path && (
                          <div className="absolute no-scrollbar overflow-scroll w-full right-0 top-[3.75rem] mt-2 bg-white shadow-lg rounded-lg py-8 px-6 z-0">
                            <SectionNavbar sectionName={name} dropdown={dropdown} pathname={pathname} />
                          </div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={path}
                      className={`!w-[7rem] h-[3.27rem] flex items-center justify-center text-center px-6 py-3 text-black rounded-[6.25rem] ${
                        pathname === path ? "bg-lightPurple text-black" : "bg-transparent text-black hover:bg-gray-100"
                      }`}
                    >
                      {name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Buttons */}
          <div className="pr-[0.5rem] md:pr-[2rem] flex gap-4 items-center">
            <div className="flex gap-4 items-center">
              <div className="relative hidden md:block lg:hidden xl:block">
                <button
                  onMouseEnter={() => setContactdrop(true)}
                  onMouseLeave={() => setContactdrop(false)}
                  onClick={() => setContactdrop(!openDropdown)}
                >
                  Sales:+12 34 56789 1
                </button>
                {contactdrop && (
                  <div
                    className="absolute bg-white right-0 top-[1.5rem] py-8 shadow-lg px-4 rounded-2xl flex flex-col gap-4"
                    onMouseLeave={() => setContactdrop(false)}
                    onMouseEnter={() => setContactdrop(true)}
                  >
                    <div className="flex items-center w-max gap-2">
                      <Phone className="w-4 h-4" /> Call Sales
                    </div>
                    <div className="flex items-center w-max gap-2">
                      <List className="w-4 h-4" /> Request Support
                    </div>
                  </div>
                )}
              </div>
              <button className="nav-contained-button !px-6 !py-3">Login</button>
              <button className="nav-contained-button hidden lg:visible">Get Started</button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen((prev) => !prev);
              }}
              className="lg:hidden w-10 h-10 flex flex-col justify-center gap-1 items-center p-2 rounded-full bg-white"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
                transition={{ duration: 0.1 }}
                className="w-6 h-0.5 bg-black"
              />
              <motion.div
                animate={{ opacity: isMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.1 }}
                className="w-6 h-0.5 bg-black"
              />
              <motion.div
                animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
                transition={{ duration: 0.1 }}
                className="w-6 h-0.5 bg-black"
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white text-black p-4 border-t border-gray-200 shadow-lg"
            >
              {NAV_ITEMS.map(({ name, path, dropdown }) => (
                <div
                  key={path}
                  className="mb-2 border-b border-gray-100 pb-2"
                  onClick={(e) => {
                    if (!dropdown) {
                      e.stopPropagation();
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  {dropdown ? (
                    <div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenDropdown(openDropdown === path ? null : path);
                        }}
                        className="flex justify-between w-full px-4 py-3 text-black font-medium hover:bg-gray-50 rounded"
                      >
                        {name}
                        <ChevronDown className={`transition-transform ${openDropdown === path ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {openDropdown === path && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-6 bg-gray-50 mt-2 rounded"
                          >
                            {dropdown.map(({ name, path }) => (
                              <Link
                                key={path}
                                href={path}
                                className="block px-4 py-2 text-gray-700 hover:text-black hover:bg-white rounded"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsMenuOpen(false);
                                }}
                              >
                                {name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link href={path} className="block px-4 py-3 text-black font-medium hover:bg-gray-50 rounded">
                      {name}
                    </Link>
                  )}
                </div>
              ))}
              <a
                href="https://prod-portal.simplifipay.com/simplifi-webapp/"
                target="blank"
                className="block w-full bg-blue text-white py-3 px-4 mt-4 rounded text-center font-medium hover:bg-blue-600"
              >
                Login
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
    </div>
  );
}
