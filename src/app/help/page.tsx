'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HelpCircle,
  Search,
  BookOpen,
  MessageCircle,
  FileText,
  Video,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Download,
  Mail,
  Phone,
  Clock,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  RefreshCw,
  Upload,
  Image as ImageIcon,
  Bot,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';

const faqs = [
  {
    category: '基础使用',
    questions: [
      {
        question: '如何上传图片进行病虫害识别？',
        answer: `上传图片进行病虫害识别非常简单：

1. 点击页面顶部的"病虫害识别"导航项
2. 点击上传区域或直接拖拽图片到上传框
3. 选择您要上传的图片（支持 JPG、PNG 格式）
4. 点击"开始分析"按钮
5. 等待 AI 分析完成，查看诊断结果

💡 小贴士：建议上传清晰、光照均匀的图片，以获得更准确的识别结果。`,
      },
      {
        question: '系统支持识别哪些类型的病虫害？',
        answer: `我们的系统目前支持识别以下类型的病虫害：

🍄 真菌病害：玉米大斑病、玉米小斑病、玉米锈病、玉米黑粉病等

🦠 细菌病害：玉米茎腐病、玉米细菌性叶斑病等

🦠 病毒病害：玉米粗缩病、玉米条纹花叶病等

🐛 虫害：玉米螟、玉米粘虫、玉米蚜虫、红蜘蛛等

我们持续更新和优化模型，会不断增加新的病虫害类型。`,
      },
      {
        question: '识别结果的准确率如何？',
        answer: `我们的 AI 模型经过大量玉米病虫害图像数据的训练，识别准确率达到 98.7%。

但是，请注意：
- 识别结果仅供参考，不能替代专业农业技术人员的诊断
- 对于严重或复杂的病虫害，建议咨询当地农业技术部门
- 图片质量会影响识别准确率，请尽量上传清晰的照片
- 某些罕见病虫害可能需要进一步确认`,
      },
      {
        question: '如何获取更准确的识别结果？',
        answer: `获取更准确识别结果的建议：

1️⃣ 图片质量
- 使用清晰、高分辨率的照片
- 确保图片光线充足、避免过曝或过暗
- 尽量拍摄病斑的特写画面

2️⃣ 拍摄角度
- 从多个角度拍摄
- 包含叶片正反面
- 拍摄整株和病斑特写

3️⃣ 图片数量
- 多张不同角度的图片有助于综合判断
- 拍摄不同时期的症状变化

4️⃣ 补充信息
- 描述发病时间、环境条件
- 说明已经采取的措施`,
      },
    ],
  },
  {
    category: 'AI 咨询',
    questions: [
      {
        question: 'AI 咨询助手可以回答哪些问题？',
        answer: `我们的 AI 咨询助手可以帮您解答：

🐛 病虫害相关
- 病虫害识别和诊断
- 防治方法和药剂推荐
- 农药使用注意事项

🌱 栽培技术
- 播种时间和方法
- 施肥管理建议
- 灌溉排水指导
- 田间管理技巧

🌾 品种选择
- 根据地区推荐品种
- 品种特性介绍
- 种子处理方法

📅 农时安排
- 各个生长阶段的管理重点
- 灾害天气应对措施

如果您的问题涉及专业诊断，建议同时使用图片识别功能。`,
      },
      {
        question: 'AI 助手的回复是否可靠？',
        answer: `我们的 AI 助手基于以下可靠来源：

📚 专业知识库
- 中国农业大学专家团队支持
- 农业农村部权威指南
- 各地农业技术推广站的实践经验

**2. 持续优化**
- 不断学习和更新知识库
- 根据用户反馈持续改进
- 定期审核和更新回复内容

**3. 使用限制**
- 明确标注为参考信息
- 建议复杂问题咨询专业人员
- 强调安全用药的重要性

我们致力于提供准确、有用的信息，但 agricultural conditions 存在差异，具体措施还需结合当地实际情况。`,
      },
      {
        question: '可以同时上传图片和文字提问吗？',
        answer: `目前 AI 咨询功能支持以下输入方式：

**文字提问**：直接在对话框输入您的问题，AI 会尽力回答。

**图片识别**：建议使用专门的"病虫害识别"页面进行图片分析。

如果您在咨询过程中需要上传图片，建议：
1. 先在识别页面完成图片分析
2. 将识别结果作为背景信息在咨询中描述
3. 或者描述症状后咨询详细防治方案

我们正在开发更多多模态功能，未来将支持更丰富的交互方式。`,
      },
    ],
  },
  {
    category: '账号与数据',
    questions: [
      {
        question: '使用系统需要注册账号吗？',
        answer: `目前我们的系统采用**免注册使用**模式：

**无需注册即可使用**
- 病虫害图片识别
- AI 智能咨询
- 知识库浏览
- 数据统计查看

**未来规划**
- 我们正在开发用户系统
- 注册用户将享受更多功能：
  - 历史记录保存
  - 个性化推荐
  - 定期报告推送
  - 专家一对一咨询

感谢您的支持，我们会不断优化用户体验！`,
      },
      {
        question: '我的图片和个人信息会被保存吗？',
        answer: `关于数据隐私，我们郑重承诺：

**图片处理**
- 上传的 图片仅用于当次分析
- 分析完成后自动删除
- 不会用于任何其他目的

**隐私保护**
- 我们不会收集您的个人信息
- 不追踪用户身份
- 不分享或出售任何数据

**安全措施**
- 数据传输采用加密协议
- 服务器安全防护到位
- 定期安全审计

如有任何隐私相关问题，欢迎联系我们。`,
      },
      {
        question: '如何导出或分享检测结果？',
        answer: `您可以通过以下方式保存检测结果：

📄 复制报告
- 点击结果卡片上的"复制报告"按钮
- 将文本内容粘贴到其他应用

📥 下载报告
- 点击"下载报告"按钮
- 生成 PDF 格式的报告文件
- 可保存或发送给其他人

📱 分享
- 长按选中报告内容
- 使用手机的分享功能
- 发送给农技人员或专家咨询

建议定期保存重要检测记录，便于跟踪病虫害变化。`,
      },
    ],
  },
  {
    category: '常见问题',
    questions: [
      {
        question: '系统响应较慢怎么办？',
        answer: `如果遇到系统响应较慢的情况，可以尝试：

1️⃣ 检查网络
- 确保网络连接稳定
- 尝试切换网络（WiFi/4G）

2️⃣ 刷新页面
- 刷新浏览器页面
- 清除浏览器缓存

3️⃣ 避开高峰
- 上午 9-11 点、下午 2-4 点为使用高峰
- 可选择在非高峰时段使用

4️⃣ 简化图片
- 适当压缩图片大小
- 选择关键部位特写

如果问题持续存在，请通过客服渠道联系我们，我们会尽快处理。`,
      },
      {
        question: '为什么识别结果显示"无法确定"？',
        answer: `系统显示"无法确定"可能有以下原因：

1️⃣ 图片质量问题
- 照片模糊或不清晰
- 光线过暗或过亮
- 病斑特征不完整

2️⃣ 罕见病虫害
- 该病虫害不在当前数据库中
- 可能是新型病害或变异

3️⃣ 复合症状
- 多种病虫害同时发生
- 症状重叠难以分辨

💡 建议措施
- 重新上传更清晰的照片
- 尝试从不同角度拍摄
- 详细描述症状和发病情况
- 咨询当地农业技术部门`,
      },
      {
        question: '如何联系人工客服？',
        answer: `您可以通过以下方式联系我们：

📞 电话客服
- 热线电话：400-888-8888
- 服务时间：工作日 9:00-18:00

📧 邮件联系
- 邮箱：contact@cornpestai.com
- 收到后 24 小时内回复

💬 在线咨询
- 点击页面右下角在线客服图标
- 描述您的问题和联系方式
- 客服人员将尽快回复

📝 意见反馈
- 欢迎提出宝贵建议
- 帮助我们不断改进

我们重视每一位用户的反馈！`,
      },
    ],
  },
];

const guides = [
  {
    icon: Upload,
    title: '新手入门指南',
    description: '了解系统基本功能，快速开始使用',
    duration: '5 分钟',
    level: '初级',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: ImageIcon,
    title: '图片拍摄技巧',
    description: '学习如何拍摄高质量的病虫害照片',
    duration: '8 分钟',
    level: '初级',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Bot,
    title: 'AI 助手使用教程',
    description: '充分发挥 AI 咨询的强大功能',
    duration: '10 分钟',
    level: '中级',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Download,
    title: '报告导出与分享',
    description: '保存和分享您的检测结果',
    duration: '3 分钟',
    level: '初级',
    color: 'from-orange-500 to-red-500',
  },
];

const tips = [
  {
    icon: Lightbulb,
    title: '最佳拍摄时间',
    content: '晴天的上午 9-11 点或下午 3-5 点是最佳拍摄时间，此时光线充足且柔和。',
  },
  {
    icon: Lightbulb,
    title: '对焦技巧',
    content: '拍摄时将对焦点对准病斑最明显的部位，确保关键特征清晰可见。',
  },
  {
    icon: Lightbulb,
    title: '多角度拍摄',
    content: '同一病斑从不同角度拍摄 2-3 张照片，有助于提高识别准确率。',
  },
  {
    icon: Lightbulb,
    title: '背景选择',
    content: '选择简洁的背景拍摄，避免杂物干扰 AI 分析。',
  },
];

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex p-4 rounded-full bg-white/20 mb-6"
          >
            <HelpCircle className="h-14 w-14" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            帮助中心
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-teal-100 max-w-3xl mx-auto mb-8"
          >
            遇到问题了吗？我们在这里为您提供全方位的帮助和支持
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <Input
                type="text"
                placeholder="搜索您的问题..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-14 h-14 text-lg rounded-full shadow-xl border-0"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Help Cards */}
      <section className="py-12 -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: MessageCircle,
                title: '在线客服',
                description: '工作日 9:00-18:00',
                color: 'from-green-500 to-emerald-500',
                action: '立即咨询',
              },
              {
                icon: Phone,
                title: '电话热线',
                description: '400-888-8888',
                color: 'from-blue-500 to-indigo-500',
                action: '拨打热线',
              },
              {
                icon: Mail,
                title: '邮件支持',
                description: '24 小时内回复',
                color: 'from-purple-500 to-pink-500',
                action: '发送邮件',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white rounded-2xl overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${item.color}`} />
                    <CardContent className="p-6 text-center">
                      <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${item.color} mb-4 shadow-lg`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-500 mb-4 flex items-center justify-center gap-2">
                        <Clock className="h-4 w-4" />
                        {item.description}
                      </p>
                      <Button className={`w-full bg-gradient-to-r ${item.color} border-0`}>
                        {item.action}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="faq" className="space-y-8">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="faq" className="flex items-center gap-2">
                  <HelpCircle className="h-4 w-4" />
                  常见问题
                </TabsTrigger>
                <TabsTrigger value="guides" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  使用指南
                </TabsTrigger>
                <TabsTrigger value="tips" className="flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  小技巧
                </TabsTrigger>
              </TabsList>
            </div>

            {/* FAQ Tab */}
            <TabsContent value="faq">
              <div className="max-w-4xl mx-auto">
                {faqs.map((category) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                  >
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <Badge className="bg-teal-100 text-teal-700">{category.category}</Badge>
                    </h3>
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.questions.map((faq, index) => (
                        <AccordionItem
                          key={`faq-${category.category}-${index}`}
                          value={`${category.category}-${index}`}
                          className="bg-white rounded-xl shadow-sm border-0 overflow-hidden"
                        >
                          <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                            <div className="flex items-center gap-3 text-left">
                              <div className="p-2 rounded-full bg-teal-100 text-teal-600">
                                <HelpCircle className="h-5 w-5" />
                              </div>
                              <span className="font-medium">{faq.question}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="px-6 pb-6 pt-2">
                              <div className="pl-11 text-gray-600 whitespace-pre-line leading-relaxed">
                                {faq.answer}
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Guides Tab */}
            <TabsContent value="guides">
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {guides.map((guide, index) => {
                  const Icon = guide.icon;
                  return (
                    <motion.div
                      key={guide.title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer overflow-hidden">
                        <div className={`h-2 bg-gradient-to-r ${guide.color}`} />
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className={`p-4 rounded-xl bg-gradient-to-br ${guide.color} shadow-lg`}>
                              <Icon className="h-8 w-8 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold mb-2">{guide.title}</h3>
                              <p className="text-gray-600 mb-4">{guide.description}</p>
                              <div className="flex items-center gap-4 text-sm">
                                <Badge variant="outline" className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {guide.duration}
                                </Badge>
                                <Badge
                                  className={
                                    guide.level === '初级'
                                      ? 'bg-green-100 text-green-700'
                                      : 'bg-yellow-100 text-yellow-700'
                                  }
                                >
                                  {guide.level}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </TabsContent>

            {/* Tips Tab */}
            <TabsContent value="tips">
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {tips.map((tip, index) => {
                  const Icon = tip.icon;
                  return (
                    <motion.div
                      key={tip.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                              <Icon className="h-6 w-6" />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold mb-2">{tip.title}</h3>
                              <p className="text-gray-600">{tip.content}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">没有找到您需要的答案？</h2>
            <p className="text-xl text-gray-600 mb-8">
              请联系我们的客服团队，我们会尽快为您解答
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white">
                <MessageCircle className="mr-2 h-5 w-5" />
                在线咨询
              </Button>
              <Link href="/chat">
                <Button size="lg" variant="outline" className="border-teal-500 text-teal-600 hover:bg-teal-50">
                  <Bot className="mr-2 h-5 w-5" />
                  AI 智能助手
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Status */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  服务状态
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { service: '病虫害识别服务', status: '正常', uptime: '99.9%' },
                    { service: 'AI 咨询服务', status: '正常', uptime: '99.8%' },
                    { service: '知识库访问', status: '正常', uptime: '100%' },
                    { service: '数据统计功能', status: '正常', uptime: '99.9%' },
                  ].map((item) => (
                    <div
                      key={item.service}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                        <span className="font-medium">{item.service}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge className="bg-green-100 text-green-700">{item.status}</Badge>
                        <span className="text-sm text-gray-500">可用性: {item.uptime}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  最后更新: {new Date().toLocaleString('zh-CN')}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
