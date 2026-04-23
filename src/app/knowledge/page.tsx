'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Leaf,
  Bug,
  AlertTriangle,
  CheckCircle2,
  Clock,
  BookOpen,
  ChevronRight,
  Filter,
  Grid3x3,
  List,
  Image as ImageIcon,
  ExternalLink,
  Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';

const diseases = [
  {
    id: 1,
    name: '玉米大斑病',
    latinName: 'Exserohilum turcicum',
    category: '真菌病害',
    severity: 'high',
    affectedParts: ['叶片', '叶鞘'],
    symptoms: [
      '叶片上出现大型梭形病斑',
      '病斑颜色由灰绿色变为褐色',
      '病斑周围有黄色晕圈',
      '严重时叶片枯死',
    ],
    spreadConditions: '高湿、阴雨天气',
    occurrencePeriod: '7-8月',
    prevention: ['选择抗病品种', '合理轮作', '加强通风透光'],
    image: '/corn-bingban.jpeg',
    rating: 4.8,
    views: 12580,
  },
  {
    id: 2,
    name: '玉米小斑病',
    latinName: 'Bipolaris maydis',
    category: '真菌病害',
    severity: 'medium',
    affectedParts: ['叶片', '苞叶'],
    symptoms: [
      '叶片出现小型褐色斑点',
      '病斑呈椭圆形或长方形',
      '病斑常有同心轮纹',
      '严重时叶片干枯',
    ],
    spreadConditions: '高温高湿',
    occurrencePeriod: '6-9月',
    prevention: ['选用抗病品种', '清除病残体', '药剂防治'],
    image: '/corn-xiaoban.jpeg',
    rating: 4.5,
    views: 9860,
  },
  {
    id: 3,
    name: '玉米锈病',
    latinName: 'Puccinia polysora',
    category: '真菌病害',
    severity: 'medium',
    affectedParts: ['叶片', '叶鞘', '苞叶'],
    symptoms: [
      '叶片出现黄褐色粉末状孢子堆',
      '孢子堆呈圆形或椭圆形',
      '发病初期有褪绿斑点',
      '严重时孢子堆布满叶片',
    ],
    spreadConditions: '温暖潮湿',
    occurrencePeriod: '8-9月',
    prevention: ['抗病品种', '合理密植', '增施磷钾肥'],
    image: '/corn-xiu.jpeg',
    rating: 4.6,
    views: 11230,
  },
  {
    id: 4,
    name: '玉米螟',
    latinName: 'Ostrinia furnacalis',
    category: '虫害',
    severity: 'high',
    affectedParts: ['心叶', '茎秆', '果穗'],
    symptoms: [
      '心叶出现整齐排孔',
      '茎秆被钻蛀易折断',
      '果穗受害影响产量',
      '可见虫粪从虫孔排出',
    ],
    spreadConditions: '温暖潮湿',
    occurrencePeriod: '5-9月',
    prevention: ['生物防治', '灯光诱杀', '药剂防治'],
    image: '/corn-mang.jpeg',
    rating: 4.9,
    views: 15890,
  },
  {
    id: 5,
    name: '玉米粘虫',
    latinName: 'Mythimna separata',
    category: '虫害',
    severity: 'high',
    affectedParts: ['叶片', '嫩茎', '穗粒'],
    symptoms: [
      '叶片被咬成缺刻',
      '严重时吃光叶片',
      '群居迁移危害',
      '幼虫暴食',
    ],
    spreadConditions: '高温干燥',
    occurrencePeriod: '6-8月',
    prevention: ['糖醋诱杀', '草把诱卵', '药剂喷洒'],
    image: '/corn-zhanc.jpeg',
    rating: 4.7,
    views: 13450,
  },
  {
    id: 6,
    name: '玉米茎腐病',
    latinName: 'Fusarium graminearum',
    category: '细菌病害',
    severity: 'high',
    affectedParts: ['茎基部', '根系'],
    symptoms: [
      '茎基部变褐色腐烂',
      '叶片枯萎呈青枯状',
      '根系变褐腐烂',
      '植株易倒伏',
    ],
    spreadConditions: '高温高湿、伤口侵入',
    occurrencePeriod: '7-8月',
    prevention: ['种子处理', '轮作', '加强栽培管理'],
    image: '/corn-jingfu.jpeg',
    rating: 4.4,
    views: 8920,
  },
  {
    id: 7,
    name: '玉米黑粉病',
    latinName: 'Ustilago maydis',
    category: '真菌病害',
    severity: 'low',
    affectedParts: ['果穗', '叶片', '茎秆'],
    symptoms: [
      '受害部位形成白色菌瘿',
      '菌瘿逐渐变黑',
      '破裂后散出黑色粉末',
      '畸形肿大',
    ],
    spreadConditions: '干旱少雨',
    occurrencePeriod: '6-8月',
    prevention: ['抗病品种', '种子消毒', '及时清除病瘤'],
    image: '/corn-heisen.jpeg',
    rating: 4.3,
    views: 7650,
  },
  {
    id: 8,
    name: '玉米粗缩病',
    latinName: 'MRDV',
    category: '病毒病害',
    severity: 'high',
    affectedParts: ['全株'],
    symptoms: [
      '植株矮化严重',
      '叶片浓绿僵直',
      '节间缩短',
      '不能正常抽穗',
    ],
    spreadConditions: '灰飞虱传播',
    occurrencePeriod: '5-6月',
    prevention: ['防治灰飞虱', '选用抗病品种', '调整播期'],
    image: '/corn-cusu.jpeg',
    rating: 4.7,
    views: 10280,
  },
  {
    id: 9,
    name: '玉米红蜘蛛',
    latinName: 'Tetranychus cinnabarinus',
    category: '虫害',
    severity: 'high',
    affectedParts: ['叶片'],
    symptoms: [
      '叶背有红蜘蛛群集',
      '叶面失绿发白',
      '严重时叶片干枯',
      '干燥条件下危害加重',
    ],
    spreadConditions: '高温干旱，连续30°C以上',
    occurrencePeriod: '7-9月',
    prevention: ['及时灌溉', '药剂喷雾', '保护天敌'],
    image: '/corn-hongspider.jpeg',
    rating: 4.4,
    views: 11230,
  },
  {
    id: 10,
    name: '玉米蚜虫',
    latinName: 'Rhopalosiphum maidis',
    category: '虫害',
    severity: 'medium',
    affectedParts: ['叶片', '茎秆', '雄穗'],
    symptoms: [
      '叶片上蚜虫群集',
      '叶片卷曲变形',
      '分泌蜜露引发煤污病',
      '传播病毒病',
    ],
    spreadConditions: '温度20-28°C，干旱条件',
    occurrencePeriod: '6-8月',
    prevention: ['黄板诱杀', '天敌防治', '药剂防治'],
    image: '/corn-ya.jpeg',
    rating: 4.3,
    views: 9870,
  },
  {
    id: 11,
    name: '玉米细菌性叶斑病',
    latinName: 'Pantoea stewartii',
    category: '细菌病害',
    severity: 'medium',
    affectedParts: ['叶片', '叶鞘'],
    symptoms: [
      '叶片有水渍状斑点',
      '斑点扩大成条斑',
      '病斑中央黄褐色',
      '严重时叶片枯死',
    ],
    spreadConditions: '高温高湿，伤口侵入',
    occurrencePeriod: '7-9月',
    prevention: ['抗病品种', '种子消毒', '药剂防治'],
    image: '/corn-xijun.jpeg',
    rating: 4.0,
    views: 6780,
  },
  {
    id: 12,
    name: '玉米丝黑穗病',
    latinName: 'Sphacelotheca reiliana',
    category: '真菌病害',
    severity: 'high',
    affectedParts: ['雄穗', '雌穗'],
    symptoms: [
      '雄穗变形成黑粉包',
      '被害部位整个变为黑粉',
      '病穗短小丛生',
      '植株矮化',
    ],
    spreadConditions: '土壤带菌，低温干旱',
    occurrencePeriod: '6-8月',
    prevention: ['抗病品种', '种子包衣', '拔除病株'],
    image: '/corn-heisui.jpeg',
    rating: 4.5,
    views: 8920,
  },
  {
    id: 13,
    name: '玉米病毒病',
    latinName: 'Maize Dwarf Mosaic Virus',
    category: '病毒病害',
    severity: 'high',
    affectedParts: ['全株'],
    symptoms: [
      '叶片黄绿相间',
      '产生花叶条纹',
      '植株矮化',
      '叶片加厚变脆',
    ],
    spreadConditions: '蚜虫传播',
    occurrencePeriod: '5-7月',
    prevention: ['防治蚜虫', '抗病品种', '拔除病株'],
    image: '/corn-bingdu.jpeg',
    rating: 4.6,
    views: 10540,
  },
  {
    id: 14,
    name: '玉米棉铃虫',
    latinName: 'Helicoverpa armigera',
    category: '虫害',
    severity: 'medium',
    affectedParts: ['雌穗', '苞叶'],
    symptoms: [
      '绿色幼虫在雌穗上取食',
      '咬食花丝和籽粒',
      '造成伤口腐烂',
      '引起穗腐病',
    ],
    spreadConditions: '温度25-30°C',
    occurrencePeriod: '8-9月',
    prevention: ['性诱剂诱杀', '生物农药', 'Bt制剂'],
    image: '/corn-mlg.jpeg',
    rating: 4.2,
    views: 7650,
  },
  {
    id: 15,
    name: '玉米根腐病',
    latinName: 'Fusarium spp.',
    category: '真菌病害',
    severity: 'high',
    affectedParts: ['根系', '茎基部'],
    symptoms: [
      '根部变褐腐烂',
      '根系发育不良',
      '植株黄化矮小',
      '易拔起',
    ],
    spreadConditions: '土壤板结，排水不良',
    occurrencePeriod: '苗期至成熟期',
    prevention: ['轮作倒茬', '土壤消毒', '药剂灌根'],
    image: '/corn-genfu.jpeg',
    rating: 4.4,
    views: 9340,
  },
  {
    id: 16,
    name: '玉米灰斑病',
    latinName: 'Cercospora zeae-maydis',
    category: '真菌病害',
    severity: 'medium',
    affectedParts: ['叶片'],
    symptoms: [
      '叶片有灰色椭圆形病斑',
      '病斑中央灰白色',
      '边缘褐色坏死',
      '病斑愈合叶片枯死',
    ],
    spreadConditions: '温度18-25°C，多雨高湿',
    occurrencePeriod: '7-9月',
    prevention: ['抗病品种', '清除病残体', '药剂防治'],
    image: '/corn-huiban.jpeg',
    rating: 4.1,
    views: 6540,
  },
];

const categories = ['全部', '真菌病害', '细菌病害', '病毒病害', '虫害'];
const severityLevels = [
  { value: 'all', label: '全部严重程度' },
  { value: 'high', label: '严重' },
  { value: 'medium', label: '中等' },
  { value: 'low', label: '轻微' },
];

export default function KnowledgePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedSeverity, setSelectedSeverity] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const filteredDiseases = diseases.filter((disease) => {
    const matchesSearch =
      disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      disease.latinName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      disease.symptoms.some((s) => s.includes(searchTerm));
    const matchesCategory =
      selectedCategory === '全部' || disease.category === selectedCategory;
    const matchesSeverity =
      selectedSeverity === 'all' || disease.severity === selectedSeverity;
    return matchesSearch && matchesCategory && matchesSeverity;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'medium':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'low':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getSeverityLabel = (severity: string) => {
    switch (severity) {
      case 'high':
        return '高发';
      case 'medium':
        return '中等';
      case 'low':
        return '低发';
      default:
        return '未知';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex p-4 rounded-full bg-white/20 mb-6"
          >
            <BookOpen className="h-12 w-12" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            玉米病虫害知识库
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-purple-100 max-w-3xl mx-auto"
          >
            详尽的病虫害图谱和防治指南，助您全面了解玉米种植过程中可能遇到的各种病虫害问题
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 flex items-center justify-center gap-4 flex-wrap"
          >
            <Badge className="bg-white/20 text-white px-4 py-2">
              <Leaf className="h-4 w-4 mr-2" />
              {diseases.length} 种病虫害收录
            </Badge>
            <Badge className="bg-white/20 text-white px-4 py-2">
              <Bug className="h-4 w-4 mr-2" />
              16 种病害 + 虫害
            </Badge>
            <Badge className="bg-white/20 text-white px-4 py-2">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              权威防治方案
            </Badge>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="搜索病虫害名称、症状..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 text-lg border-2 border-gray-200 focus:border-green-500 rounded-xl"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                      : 'border-2'
                  }
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Severity Filter */}
            <Select value={selectedSeverity} onValueChange={setSelectedSeverity}>
              <SelectTrigger className="w-48 h-12 border-2">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {severityLevels.map((level) => (
                  <SelectItem key={level.value} value={level.value}>
                    {level.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' ? 'bg-purple-600' : ''}
              >
                <Grid3x3 className="h-5 w-5" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
                className={viewMode === 'list' ? 'bg-purple-600' : ''}
              >
                <List className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-gray-600">
              共找到 <span className="font-bold text-purple-600">{filteredDiseases.length}</span>{' '}
              个相关病虫害
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDiseases.map((disease, index) => (
                <motion.div
                  key={disease.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full border-0 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-48">
                      <Image
                        src={disease.image}
                        alt={disease.name}
                        fill
                        className="object-cover"
                      />
                      <Badge
                        className={`absolute top-3 right-3 ${getSeverityColor(disease.severity)}`}
                      >
                        {getSeverityLabel(disease.severity)}
                      </Badge>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{disease.name}</CardTitle>
                          <p className="text-xs text-gray-500 italic">{disease.latinName}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline" className="text-xs">
                          {disease.category}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {disease.occurrencePeriod}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-1">主要症状</p>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {disease.symptoms.slice(0, 2).map((s, i) => (
                              <li key={i} className="flex items-start gap-1">
                                <AlertTriangle className="h-3 w-3 text-red-500 mt-0.5 flex-shrink-0" />
                                {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-yellow-500" />
                            {disease.rating}
                          </span>
                          <span className="flex items-center gap-1">
                            <ImageIcon className="h-3 w-3" />
                            {disease.views.toLocaleString()} 浏览
                          </span>
                        </div>
                      </div>
                      <Link href={`/knowledge/${disease.id}`}>
                        <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                          查看详情
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredDiseases.map((disease, index) => (
                <motion.div
                  key={disease.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card
                    className="border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer"
                    onClick={() => setExpandedCard(expandedCard === disease.id ? null : disease.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-6">
                        <div className="text-6xl">{disease.image}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold">{disease.name}</h3>
                            <Badge className={getSeverityColor(disease.severity)}>
                              {getSeverityLabel(disease.severity)}
                            </Badge>
                            <Badge variant="outline">{disease.category}</Badge>
                          </div>
                          <p className="text-sm text-gray-500 italic mb-2">{disease.latinName}</p>
                          <div className="flex gap-6 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <AlertTriangle className="h-4 w-4 text-red-500" />
                              受害部位: {disease.affectedParts.join(', ')}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-blue-500" />
                              高发期: {disease.occurrencePeriod}
                            </span>
                            <span className="flex items-center gap-1">
                              <Star className="h-4 w-4 text-yellow-500" />
                              评分: {disease.rating}
                            </span>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <ChevronRight
                            className={`h-5 w-5 transition-transform ${
                              expandedCard === disease.id ? 'rotate-90' : ''
                            }`}
                          />
                        </Button>
                      </div>

                      <AnimatePresence>
                        {expandedCard === disease.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="mt-6 pt-6 border-t space-y-6">
                              <div>
                                <h4 className="font-bold mb-3 flex items-center gap-2">
                                  <AlertTriangle className="h-5 w-5 text-red-500" />
                                  主要症状
                                </h4>
                                <ul className="grid md:grid-cols-2 gap-2">
                                  {disease.symptoms.map((s, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                      <span className="text-red-500">•</span>
                                      {s}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-bold mb-3">传播条件</h4>
                                <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                                  {disease.spreadConditions}
                                </p>
                              </div>
                              <div>
                                <h4 className="font-bold mb-3 flex items-center gap-2">
                                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                                  预防措施
                                </h4>
                                <ul className="grid md:grid-cols-3 gap-2">
                                  {disease.prevention.map((p, i) => (
                                    <li
                                      key={i}
                                      className="flex items-start gap-2 text-sm text-gray-600"
                                    >
                                      <span className="text-green-500">✓</span>
                                      {p}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="flex gap-3">
                                <Link href="/detect" className="flex-1">
                                  <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600">
                                    <ImageIcon className="h-4 w-4 mr-2" />
                                    图片识别
                                  </Button>
                                </Link>
                                <Link href="/chat" className="flex-1">
                                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600">
                                    <ExternalLink className="h-4 w-4 mr-2" />
                                    咨询专家
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">病虫害数据分析</h2>
            <p className="text-gray-600">基于大数据分析的病虫害发生趋势</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: '收录病虫害', value: diseases.length, color: 'from-purple-500 to-indigo-500' },
              { label: '真菌病害', value: diseases.filter((d) => d.category === '真菌病害').length, color: 'from-green-500 to-emerald-500' },
              { label: '虫害', value: diseases.filter((d) => d.category === '虫害').length, color: 'from-orange-500 to-red-500' },
              { label: '细菌/病毒', value: diseases.filter((d) => d.category === '细菌病害' || d.category === '病毒病害').length, color: 'from-blue-500 to-cyan-500' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <div
                      className={`inline-flex p-4 rounded-full bg-gradient-to-br ${stat.color} mb-4`}
                    >
                      <span className="text-3xl font-bold text-white">{stat.value}</span>
                    </div>
                    <p className="font-medium text-gray-700">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
