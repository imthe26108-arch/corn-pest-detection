'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ScanLine,
  MessageCircle,
  BookOpen,
  BarChart3,
  Calendar,
  Book,
  Newspaper,
  ShoppingBag,
  ArrowRight,
  Shield,
  Zap,
  Users,
  Globe,
  Star,
  CheckCircle2,
  Leaf,
  Sprout,
  Sun,
  Droplets,
  Wind,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  Heart,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const stats = [
  { value: '98.6%', label: '识别准确率', icon: Shield, color: 'from-green-500 to-emerald-600' },
  { value: '50万+', label: '服务农户数', icon: Users, color: 'from-blue-500 to-cyan-600' },
  { value: '156个', label: '覆盖地区', icon: Globe, color: 'from-amber-500 to-orange-600' },
  { value: '200万+', label: '检测次数', icon: Zap, color: 'from-purple-500 to-pink-600' },
];

const features = [
  {
    icon: ScanLine,
    title: '智能病虫害识别',
    description: '基于深度学习的AI图像识别技术，上传玉米叶片照片，秒级返回诊断结果，准确识别40余种常见病虫害。',
    link: '/detect',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: MessageCircle,
    title: 'AI农技问答',
    description: '24小时在线的农业专家助手，解答种植难题，提供科学的田间管理建议，让种植更轻松。',
    link: '/chat',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: BookOpen,
    title: '病虫害知识库',
    description: '收录玉米全生育期常见病虫害，详尽的症状描述、发病原因及科学防治方案，随时查阅学习。',
    link: '/knowledge',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Book,
    title: '种植技术指南',
    description: '从品种选择到收获储藏，覆盖玉米种植全流程的技术要点，高产栽培的实用指南。',
    link: '/technology',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    icon: Calendar,
    title: '农事日历',
    description: '按月份整理的农事活动指南，提醒播种、施肥、防病虫的关键时间节点，科学安排农事。',
    link: '/calendar',
    color: 'from-yellow-500 to-amber-600',
  },
  {
    icon: ShoppingBag,
    title: '农资商城',
    description: '严选优质种子、化肥、农药正品，行货保障、价格实惠，一站式购齐农业生产资料。',
    link: '/market',
    color: 'from-orange-500 to-red-600',
  },
  {
    icon: Newspaper,
    title: '政策资讯',
    description: '实时更新农业政策补贴、市场行情、科技动态，帮助农户把握政策红利，决策更明智。',
    link: '/news',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: BarChart3,
    title: '数据统计',
    description: '可视化展示区域病虫害发生趋势、防治效果评估，为农业生产管理提供数据支撑。',
    link: '/statistics',
    color: 'from-indigo-500 to-blue-600',
  },
];

const workflow = [
  { step: 1, icon: ScanLine, title: '拍摄照片', desc: '对疑似发病部位拍照' },
  { step: 2, icon: Upload, title: '上传图片', desc: '将照片上传至系统' },
  { step: 3, icon: Brain, title: 'AI分析', desc: '智能识别病虫害类型' },
  { step: 4, icon: Shield, title: '获取方案', desc: '获得详细防治建议' },
];

const commonPests = [
  {
    name: '玉米大斑病',
    severity: 'high',
    symptom: '叶片上产生大型梭状病斑',
    season: '高温多湿季节',
    image: '/corn-bingban.jpeg',
  },
  {
    name: '玉米螟',
    severity: 'high',
    symptom: '心叶出现排孔，茎秆蛀食',
    season: '6-8月发生高峰',
    image: '/corn-mang.jpeg',
  },
  {
    name: '玉米锈病',
    severity: 'medium',
    symptom: '叶片背面产生橙黄色夏孢子堆',
    season: '抽雄后易发',
    image: '/corn-xiu.jpeg',
  },
  {
    name: '粘虫',
    severity: 'medium',
    symptom: '叶片被咬成缺刻，严重时吃光',
    season: '5-6月、8-9月',
    image: '/corn-zhanc.jpeg',
  },
];

const testimonials = [
  {
    name: '张建国',
    location: '河南省周口市',
    avatar: '👨‍🌾',
    content: '以前庄稼得病只能靠经验判断，现在用这个系统一扫就知道是什么病，还给出防治方案，真是太方便了！去年我家玉米增产15%。',
    rating: 5,
  },
  {
    name: '李秀英',
    location: '山东省德州市',
    avatar: '👩‍🌾',
    content: '这个平台不仅能识别病虫害，还有农事日历提醒我什么时候该打药、施肥，再也不会错过最佳农时了。',
    rating: 5,
  },
  {
    name: '王大伟',
    location: '河北省沧州市',
    avatar: '👨‍💻',
    content: 'AI问答功能特别实用，有时候半夜遇到问题也能咨询，不懂的技术问题都能得到详细解答，强烈推荐！',
    rating: 5,
  },
];

const tips = [
  {
    title: '早发现早防治',
    content: '发现病虫害后应在早期及时防治，避免大面积蔓延造成严重损失。',
    icon: AlertTriangle,
    color: 'text-red-500',
  },
  {
    title: '科学用药安全用药',
    content: '严格按照农药说明书的剂量和时期使用，注意安全间隔期，减少农药残留。',
    icon: Shield,
    color: 'text-green-500',
  },
  {
    title: '预防为主综合防治',
    content: '优先采用农业防治、物理防治、生物防治等绿色防控措施，减少化学农药使用。',
    icon: TrendingUp,
    color: 'text-blue-500',
  },
];

const quickLinks = [
  { label: '如何识别玉米大斑病？', href: '/knowledge' },
  { label: '玉米螟的最佳防治时间', href: '/knowledge' },
  { label: '夏季玉米管理要点', href: '/calendar' },
  { label: '如何选择优质玉米种子', href: '/technology' },
];

// Helper components
function Upload(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}

function Brain(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.54" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.54" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
          <div className="absolute top-40 right-10 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse delay-1000" />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse delay-500" />
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-32 left-[15%] hidden lg:block"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
            <Sprout className="h-8 w-8 text-green-600" />
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-48 right-[20%] hidden lg:block"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
            <Sun className="h-8 w-8 text-amber-500" />
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [-5, 15, -5] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-32 right-[15%] hidden lg:block"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
            <Droplets className="h-8 w-8 text-blue-500" />
          </div>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-8"
            >
              <Leaf className="h-5 w-5" />
              <span className="font-medium">智慧农业 · 科技助农</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                玉米病虫害
              </span>
              <br />
              <span className="text-stone-800">智能检测专家</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              汇聚前沿人工智能技术与农业专家智慧，为广大农户提供精准、高效的玉米病虫害识别与防治服务，让每一株玉米都能健康生长
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/detect">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-lg px-8 h-14 shadow-xl hover:shadow-2xl transition-all group"
                >
                  <ScanLine className="mr-2 h-5 w-5" />
                  开始检测
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/chat">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 h-14 border-2 border-amber-300 hover:bg-amber-50 hover:border-amber-400 transition-all"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  咨询专家
                </Button>
              </Link>
            </motion.div>

            {/* Weather Widget */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 inline-flex items-center gap-6 bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <Sun className="h-6 w-6 text-amber-500" />
                <span className="font-medium">28°C</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="h-6 w-6 text-blue-500" />
                <span className="font-medium">65%</span>
              </div>
              <div className="flex items-center gap-2">
                <Wind className="h-6 w-6 text-gray-500" />
                <span className="font-medium">东南风2级</span>
              </div>
              <div className="text-sm text-green-600 font-medium">适宜喷药</div>
            </motion.div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} mx-auto mb-4 flex items-center justify-center shadow-lg`}
                    >
                      <stat.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-stone-800 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-stone-600">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-stone-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">全方位农业服务</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              从病虫害识别到种植指导，从农事提醒到市场资讯，一站式解决您的农业生产需求
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Link href={feature.link}>
                  <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all overflow-hidden group cursor-pointer">
                    <div className={`h-2 bg-gradient-to-r ${feature.color}`} />
                    <CardContent className="p-6">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                      >
                        <feature.icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-amber-700 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-stone-600 text-sm leading-relaxed mb-4">
                        {feature.description}
                      </p>
                      <div className="flex items-center text-amber-600 font-medium text-sm group-hover:gap-2 transition-all">
                        <span>立即体验</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <Lightbulb className="h-8 w-8 text-amber-500" />
              种植小贴士
            </h2>
            <p className="text-stone-600">科学种植，增产增收</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg">
                  <CardContent className="p-6 flex gap-4">
                    <div className={`p-3 rounded-xl bg-white shadow-sm ${tip.color}`}>
                      <tip.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{tip.title}</h3>
                      <p className="text-stone-600 text-sm">{tip.content}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 bg-gradient-to-b from-stone-50 to-amber-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">简单四步，快速诊断</h2>
            <p className="text-lg text-stone-600">上传照片即可获得专业的病虫害诊断报告</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {workflow.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-xl mx-auto">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-sm shadow-lg">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-stone-600">{item.desc}</p>
                </div>
                {index < workflow.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-amber-300 to-orange-300" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Pests Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-4xl font-bold mb-4">高发病虫害预警</h2>
              <p className="text-lg text-stone-600">当前季节需重点关注的病虫害</p>
            </div>
            <Link href="/knowledge">
              <Button variant="outline" className="border-amber-300 hover:bg-amber-50">
                查看全部
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commonPests.map((pest, index) => (
              <motion.div
                key={pest.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all overflow-hidden group">
                  <div className="relative h-32 bg-gradient-to-br from-amber-100 to-orange-100">
                    <Image
                      src={pest.image}
                      alt={pest.name}
                      fill
                      className="object-cover"
                    />
                    <Badge
                      className={`absolute top-2 right-2 ${
                        pest.severity === 'high'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {pest.severity === 'high' ? '高危' : '中等'}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-amber-700 transition-colors">
                      {pest.name}
                    </h3>
                    <p className="text-sm text-stone-600 mb-2">
                      <span className="font-medium">典型症状：</span>
                      {pest.symptom}
                    </p>
                    <p className="text-sm text-stone-500">
                      <Clock className="h-3 w-3 inline mr-1" />
                      {pest.season}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Quick Questions */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    热门问题
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {quickLinks.map((link, index) => (
                      <Link key={index} href={link.href}>
                        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                          <span className="font-medium text-blue-800">{link.label}</span>
                          <ArrowRight className="h-4 w-4 text-blue-500" />
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link href="/chat">
                    <Button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      更多问题咨询
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    联系我们
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                      <Phone className="h-5 w-5 text-purple-600" />
                      <div>
                        <div className="text-sm text-stone-500">客服热线</div>
                        <div className="font-bold">400-888-8888</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                      <Mail className="h-5 w-5 text-purple-600" />
                      <div>
                        <div className="text-sm text-stone-500">电子邮箱</div>
                        <div className="font-bold">contact@cornpestai.com</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                      <Clock className="h-5 w-5 text-purple-600" />
                      <div>
                        <div className="text-sm text-stone-500">服务时间</div>
                        <div className="font-bold">周一至周日 8:00-22:00</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                      <MapPin className="h-5 w-5 text-purple-600" />
                      <div>
                        <div className="text-sm text-stone-500">公司地址</div>
                        <div className="font-bold">北京市海淀区中关村科技园</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">听听农户怎么说</h2>
            <p className="text-lg text-stone-600">用过都说好的真实反馈</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-stone-700 leading-relaxed mb-6 italic">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center text-2xl">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-bold">{testimonial.name}</div>
                        <div className="text-sm text-stone-500 flex items-center gap-1">
                          <Globe className="h-3 w-3" />
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Sprout className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">开始使用，开启丰收之旅</h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              立即体验智能病虫害检测，让科技赋能农业生产，让每一株玉米都能茁壮成长
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/detect">
                <Button
                  size="lg"
                  className="bg-white text-amber-700 hover:bg-amber-50 text-lg px-10 h-14 shadow-xl"
                >
                  <ScanLine className="mr-2 h-5 w-5" />
                  立即检测
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/20 text-lg px-10 h-14"
                >
                  了解更多
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
