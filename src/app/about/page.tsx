'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Info,
  Users,
  Target,
  Heart,
  Award,
  Globe,
  Rocket,
  Cpu,
  Database,
  Shield,
  Leaf,
  Bug,
  Sprout,
  Sun,
  Droplets,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Star,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';

const teamMembers = [
  {
    name: '张教授',
    role: '首席农业科学家',
    institution: '中国农业大学',
    expertise: '玉米病虫害研究',
    avatar: '👨‍🔬',
    rating: 4.9,
  },
  {
    name: '李博士',
    role: 'AI 技术总监',
    institution: '清华大学',
    expertise: '深度学习与计算机视觉',
    avatar: '👨‍💻',
    rating: 4.8,
  },
  {
    name: '王老师',
    role: '农业技术顾问',
    institution: '农业农村部',
    expertise: '农业技术推广',
    avatar: '👩‍🏫',
    rating: 4.9,
  },
  {
    name: '刘工程师',
    role: '产品负责人',
    institution: '技术团队',
    expertise: '产品设计与开发',
    avatar: '👨‍🎨',
    rating: 4.7,
  },
];

const milestones = [
  {
    year: '2023',
    title: '项目启动',
    description: '组建跨学科团队，开始技术研发',
    icon: Rocket,
  },
  {
    year: '2023',
    title: '模型训练',
    description: '构建玉米病虫害图像数据集，训练 AI 模型',
    icon: Cpu,
  },
  {
    year: '2024',
    title: '内测上线',
    description: '邀请首批用户进行内测，收集反馈',
    icon: Bug,
  },
  {
    year: '2024',
    title: '正式发布',
    description: '产品正式上线，服务全国农户',
    icon: Globe,
  },
  {
    year: '2024',
    title: '持续优化',
    description: '不断迭代更新，提升用户体验',
    icon: Sprout,
  },
];

const values = [
  {
    icon: Leaf,
    title: '服务农业',
    description: '以服务农业生产为宗旨，帮助农户增产增收',
    color: 'from-green-400 to-emerald-500',
  },
  {
    icon: Shield,
    title: '科技创新',
    description: '运用前沿 AI 技术，提供精准高效的解决方案',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    icon: Heart,
    title: '用户为本',
    description: '始终以用户需求为导向，持续优化服务体验',
    color: 'from-pink-400 to-rose-500',
  },
  {
    icon: Award,
    title: '专业可靠',
    description: '汇聚农业专家智慧，提供权威可靠的指导',
    color: 'from-yellow-400 to-amber-500',
  },
];

const partners = [
  { name: '中国农业大学', logo: '🏛️' },
  { name: '清华大学', logo: '🎓' },
  { name: '农业农村部', logo: '🏛️' },
  { name: '中国农科院', logo: '🔬' },
  { name: '各地农业技术推广站', logo: '🌾' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex p-4 rounded-full bg-white/20 mb-8">
              <Info className="h-16 w-16" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">关于我们</h1>
            <p className="text-xl text-purple-200 mb-8 leading-relaxed">
              致力于运用人工智能技术，为中国农业生产者提供智能化的病虫害诊断与防治服务，守护粮食安全，助力乡村振兴。
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Badge className="bg-white/20 text-white px-6 py-3 text-lg">
                <Users className="h-5 w-5 mr-2" />
                50万+ 农户信赖
              </Badge>
              <Badge className="bg-white/20 text-white px-6 py-3 text-lg">
                <Globe className="h-5 w-5 mr-2" />
                覆盖 32 省份
              </Badge>
              <Badge className="bg-white/20 text-white px-6 py-3 text-lg">
                <Star className="h-5 w-5 mr-2" />
                98.7% 识别准确率
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-indigo-100 text-indigo-700">我们的使命</Badge>
              <h2 className="text-4xl font-bold mb-6">
                用 AI 守护
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {' '}
                  每一株玉米
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                玉米是中国最重要的粮食作物之一，病虫害问题严重影响着玉米的产量和品质。传统的病虫害识别方法依赖经验，效率低且准确率不高。我们希望通过人工智能技术，让每一位农户都能便捷地获得专业的病虫害诊断服务。
              </p>
              <div className="space-y-4">
                {[
                  '基于深度学习的图像识别技术',
                  '专业农业知识库支撑',
                  '7x24 小时智能服务',
                  '不断学习进化的 AI 系统',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl font-bold text-indigo-600 mb-2">50万+</div>
                    <div className="text-gray-600">服务农户</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">1.2万+</div>
                    <div className="text-gray-600">累计检测</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl font-bold text-pink-600 mb-2">98.7%</div>
                    <div className="text-gray-600">识别准确率</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">32</div>
                    <div className="text-gray-600">覆盖省份</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-purple-100 text-purple-700">核心价值观</Badge>
            <h2 className="text-4xl font-bold mb-4">我们坚守的原则</h2>
            <p className="text-xl text-gray-600">指导我们前行的信念和准则</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${value.color}`} />
                    <CardContent className="p-8">
                      <div
                        className={`inline-flex p-4 rounded-full bg-gradient-to-br ${value.color} mb-6`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-indigo-100 text-indigo-700">专业团队</Badge>
            <h2 className="text-4xl font-bold mb-4">汇聚多领域专家智慧</h2>
            <p className="text-xl text-gray-600">农业科学家、AI 工程师、产品专家的跨界协作</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full text-center border-0 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="h-32 bg-gradient-to-br from-indigo-400 to-purple-500" />
                  <CardContent className="p-6 -mt-16">
                    <div className="text-6xl mb-4">{member.avatar}</div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-indigo-600 font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-gray-500 mb-3">{member.institution}</p>
                    <Badge variant="outline" className="mb-4">
                      {member.expertise}
                    </Badge>
                    <div className="flex items-center justify-center gap-1 text-sm text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      {member.rating}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-white/20 text-white">发展历程</Badge>
            <h2 className="text-4xl font-bold mb-4">我们的成长轨迹</h2>
            <p className="text-xl text-indigo-200">从构想到实现的每一步</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-400 to-purple-400" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className={`flex items-center gap-8 ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <div
                      className={`w-5/12 bg-white/10 backdrop-blur-sm rounded-2xl p-6 ${
                        index % 2 === 0 ? 'text-right' : 'text-left'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-indigo-300">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-indigo-200">{milestone.description}</p>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-white shadow-lg z-10" />
                    <div className="w-5/12" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-green-100 text-green-700">合作伙伴</Badge>
            <h2 className="text-4xl font-bold mb-4">权威机构合作</h2>
            <p className="text-xl text-gray-600">携手顶尖机构，共建农业 AI 新未来</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 bg-gray-50 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
              >
                <span className="text-4xl">{partner.logo}</span>
                <span className="font-medium text-gray-700">{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-purple-100 text-purple-700">联系我们</Badge>
            <h2 className="text-4xl font-bold mb-4">期待与您交流</h2>
            <p className="text-xl text-gray-600">有任何问题或建议，欢迎随时联系我们</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Mail,
                title: '电子邮件',
                content: 'contact@cornpestai.com',
                color: 'from-blue-500 to-indigo-500',
              },
              {
                icon: Phone,
                title: '联系电话',
                content: '400-888-8888',
                color: 'from-green-500 to-emerald-500',
              },
              {
                icon: MapPin,
                title: '办公地址',
                content: '北京市海淀区中关村科技园区',
                color: 'from-purple-500 to-pink-500',
              },
            ].map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.div
                  key={`contact-${contact.title}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-8">
                      <div
                        className={`inline-flex p-4 rounded-full bg-gradient-to-br ${contact.color} mb-4`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{contact.title}</h3>
                      <p className="text-gray-600">{contact.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/help">
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
                查看帮助中心
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
