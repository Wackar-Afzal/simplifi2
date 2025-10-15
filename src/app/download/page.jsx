"use client";

import Navbar from "@/components/layouts/Navbar";
import { Footer } from "@/components/layouts/Footer";
import { motion } from "framer-motion";

export default function DownloadPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="section_hero">
        <div className="container-global is-small">
          <div className="hero-wrapper">
            {/* Left Content */}
            <motion.div
              className="hero-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="heading-style-h1">Take Control on the Go</h1>
              <p className="paragraph-style-body hero-desc">
                Track loads, approve requests, and manage your card securely with the SimpliFi Go App.
              </p>

              {/* App Store Buttons */}
              <div className="flex gap-4 mt-8 flex-wrap">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1711929600"
                    alt="Download on the App Store"
                    className="h-14"
                  />
                </a>
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="Get it on Google Play"
                    className="h-14"
                  />
                </a>
              </div>
            </motion.div>

            {/* Right - Phone Mockups */}
            <motion.div
              className="hero-tabs-wrapper"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative flex items-center justify-center gap-8">
                {/* Phone 1 */}
                <motion.div
                  className="relative z-10"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="relative w-[280px] h-[570px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-[40px] shadow-2xl p-3 border-8 border-gray-800">
                    <div className="w-full h-full bg-white rounded-[32px] overflow-hidden">
                      {/* Phone Screen Content */}
                      <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-6 h-full flex flex-col">
                        {/* Status Bar */}
                        <div className="flex justify-between items-center text-white text-xs mb-8">
                          <span>9:41</span>
                          <div className="flex gap-1">
                            <div className="w-4 h-4">📶</div>
                            <div className="w-4 h-4">📶</div>
                            <div className="w-4 h-4">🔋</div>
                          </div>
                        </div>

                        {/* Logo */}
                        <div className="text-white mb-6">
                          <div className="text-2xl font-bold">SimpliFi</div>
                          <div className="text-sm opacity-80">Go App</div>
                        </div>

                        {/* Card Display */}
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 mb-4">
                          <div className="text-white/60 text-xs mb-2">Total Balance</div>
                          <div className="text-white text-3xl font-bold">$234.00</div>
                          <div className="text-white/80 text-sm mt-2">•••• 4242</div>
                        </div>

                        {/* Quick Actions */}
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                            <div className="text-white text-2xl mb-1">💳</div>
                            <div className="text-white text-xs">Cards</div>
                          </div>
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                            <div className="text-white text-2xl mb-1">📊</div>
                            <div className="text-white text-xs">Stats</div>
                          </div>
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                            <div className="text-white text-2xl mb-1">⚙️</div>
                            <div className="text-white text-xs">Settings</div>
                          </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-4">
                          <div className="text-white text-sm font-semibold mb-3">Recent Activity</div>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center text-white/80 text-xs">
                              <span>Payment</span>
                              <span>-$45.00</span>
                            </div>
                            <div className="flex justify-between items-center text-white/80 text-xs">
                              <span>Top up</span>
                              <span className="text-green-300">+$200.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-gray-800 rounded-b-2xl"></div>
                  </div>
                </motion.div>

                {/* Phone 2 */}
                <motion.div
                  className="relative z-0"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="relative w-[280px] h-[570px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-[40px] shadow-2xl p-3 border-8 border-gray-800">
                    <div className="w-full h-full bg-white rounded-[32px] overflow-hidden">
                      {/* Phone Screen Content */}
                      <div className="bg-gradient-to-br from-gray-50 to-white p-6 h-full flex flex-col">
                        {/* Status Bar */}
                        <div className="flex justify-between items-center text-gray-800 text-xs mb-6">
                          <span>9:41</span>
                          <div className="flex gap-1">
                            <div className="w-4 h-4">📶</div>
                            <div className="w-4 h-4">🔋</div>
                          </div>
                        </div>

                        {/* Header */}
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold text-gray-800 mb-1">Transactions</h3>
                          <p className="text-gray-500 text-sm">Manage your activity</p>
                        </div>

                        {/* Transaction List */}
                        <div className="space-y-3 flex-1">
                          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                  <span className="text-green-600">✓</span>
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-gray-800">Starbucks</div>
                                  <div className="text-xs text-gray-500">Today, 9:30 AM</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-semibold text-gray-800">-$12.50</div>
                                <div className="text-xs text-green-600">Approved</div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                  <span className="text-blue-600">🛒</span>
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-gray-800">Amazon</div>
                                  <div className="text-xs text-gray-500">Yesterday</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-semibold text-gray-800">-$89.99</div>
                                <div className="text-xs text-green-600">Completed</div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                                  <span className="text-purple-600">🍔</span>
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-gray-800">Uber Eats</div>
                                  <div className="text-xs text-gray-500">2 days ago</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-semibold text-gray-800">-$24.30</div>
                                <div className="text-xs text-green-600">Delivered</div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                  <span className="text-orange-600">⛽</span>
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-gray-800">Shell Gas</div>
                                  <div className="text-xs text-gray-500">3 days ago</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-semibold text-gray-800">-$45.00</div>
                                <div className="text-xs text-green-600">Approved</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Navigation */}
                        <div className="flex justify-around items-center pt-4 mt-4 border-t border-gray-200">
                          <div className="text-center">
                            <div className="text-2xl">🏠</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl">💳</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl opacity-50">📊</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl opacity-50">👤</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-gray-800 rounded-b-2xl"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-global">
          <div className="text-center mb-12">
            <h2 className="heading-style-h2_fintech mb-4">Everything You Need</h2>
            <p className="paragraph-style-body text-gray-600">
              Powerful features to manage your finances on the go
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-5xl mb-4">💳</div>
              <h3 className="text-2xl font-semibold mb-3">Instant Card Management</h3>
              <p className="text-gray-600">
                Create, freeze, and manage your cards instantly from your mobile device.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-5xl mb-4">🔔</div>
              <h3 className="text-2xl font-semibold mb-3">Real-time Notifications</h3>
              <p className="text-gray-600">
                Get instant alerts for all transactions and account activities.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-2xl font-semibold mb-3">Secure & Compliant</h3>
              <p className="text-gray-600">
                Bank-grade security with biometric authentication and encryption.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-global">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-style-h2_fintech mb-6">
                Ready to Get Started?
              </h2>
              <p className="paragraph-style-body text-gray-600 mb-8">
                Download the SimpliFi Go App today and take control of your finances wherever you are.
              </p>

              <div className="flex gap-4 justify-center flex-wrap">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1711929600"
                    alt="Download on the App Store"
                    className="h-16"
                  />
                </a>
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="Get it on Google Play"
                    className="h-16"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
