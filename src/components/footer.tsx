'use client';

import { motion } from 'framer-motion';
import { Leaf, Mail, Phone, MapPin, Twitter, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
  quickLinks: [
    { label: '首页', href: '/' },
    { label: '病虫害识别', href: '/detect' },
    { label: 'AI 咨询', href: '/chat' },
    { label: '知识库', href: '/knowledge' },
  ],
  resources: [
    { label: '帮助中心', href: '/help' },
    { label: '种植技术', href: '/technology' },
    { label: '农事日历', href: '/calendar' },
    { label: '农资商城', href: '/market' },
  ],
  company: [
    { label: '关于我们', href: '/about' },
    { label: '数据统计', href: '/statistics' },
    { label: '政策资讯', href: '/news' },
    { label: '帮助中心', href: '/help' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-green-900 to-emerald-950 text-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg"
              >
                <Leaf className="h-7 w-7 text-white" />
              </motion.div>
              <div>
                <span className="text-xl font-bold">玉米病虫害智能检测</span>
                <span className="block text-sm text-green-300">Corn Pest Detection AI</span>
              </div>
            </Link>
            <p className="text-green-200 mb-6 leading-relaxed">
              利用先进的人工智能技术，为农业生产者提供精准、快速、可靠的玉米病虫害识别与诊断服务。守护粮食安全，从智能检测开始。
            </p>
            <div className="space-y-3 text-green-200">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-green-400" />
                <span>contact@cornpestai.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-green-400" />
                <span>400-888-8888</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-green-400" />
                <span>北京市海淀区中关村科技园区</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-green-300">快速链接</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-green-200 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4 text-green-300">资源中心</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-green-200 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4 text-green-300">关于我们</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-green-200 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-30" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-green-300 text-sm">
            &copy; {new Date().getFullYear()} 玉米病虫害智能检测系统. 保留所有权利.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-green-300 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-green-300 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-green-300 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
