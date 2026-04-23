'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Leaf,
  ScanLine,
  MessageCircle,
  BookOpen,
  BarChart3,
  Info,
  HelpCircle,
  Menu,
  Calendar,
  Book,
  Newspaper,
  ShoppingBag,
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { href: '/', label: '首页', icon: Leaf },
  { href: '/detect', label: '病虫害识别', icon: ScanLine },
  { href: '/chat', label: 'AI 咨询', icon: MessageCircle },
  { href: '/knowledge', label: '知识库', icon: BookOpen },
  { href: '/technology', label: '种植技术', icon: Book },
  { href: '/calendar', label: '农事日历', icon: Calendar },
  { href: '/market', label: '农资商城', icon: ShoppingBag },
  { href: '/news', label: '政策资讯', icon: Newspaper },
  { href: '/statistics', label: '数据统计', icon: BarChart3 },
  { href: '/about', label: '关于我们', icon: Info },
];

const secondaryNav = [
  { href: '/help', label: '帮助中心', icon: HelpCircle },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-stone-100 to-amber-50 backdrop-blur supports-[backdrop-filter]:bg-stone-100/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-600 to-orange-600 shadow-lg"
          >
            <Leaf className="h-6 w-6 text-white" />
          </motion.div>
          <div>
            <span className="text-lg font-bold text-stone-800">
              农博士
            </span>
            <span className="block text-xs text-stone-600">智能农业服务平台</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? 'default' : 'ghost'}
                  size="sm"
                  className={`gap-2 transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md'
                      : 'hover:bg-amber-100 hover:text-amber-800'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon" className="border-amber-300">
              <Menu className="h-5 w-5 text-amber-700" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-gradient-to-b from-stone-50 to-amber-50">
            <div className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                    <motion.div
                      whileHover={{ x: 10, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                          : 'hover:bg-amber-100'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </motion.div>
                  </Link>
                );
              })}
              <div className="border-t pt-4 mt-4">
                {secondaryNav.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-amber-100 transition-all">
                        <Icon className="h-5 w-5 text-stone-600" />
                        <span className="font-medium text-stone-700">{item.label}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
