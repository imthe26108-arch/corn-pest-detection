'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Newspaper,
  FileText,
  TrendingUp,
  TrendingDown,
  Calendar,
  Clock,
  ChevronRight,
  Star,
  Eye,
  Building,
  Users,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Award,
  Globe,
  Landmark,
  Truck,
  Leaf,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const newsCategories = [
  { id: 'policy', name: '政策法规', icon: Landmark, color: 'from-blue-500 to-indigo-500' },
  { id: 'market', name: '市场行情', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
  { id: 'tech', name: '科技动态', icon: Award, color: 'from-purple-500 to-pink-500' },
  { id: 'weather', name: '农气预报', icon: Globe, color: 'from-cyan-500 to-sky-500' },
];

const policies = [
  {
    id: 1,
    title: '2024年玉米生产者补贴政策发布',
    summary: '为保障农民种粮收益，稳定玉米生产，中央财政继续对玉米生产者给予补贴，补贴标准有所提高。',
    category: 'policy',
    date: '2024-03-15',
    source: '农业农村部',
    views: 12580,
    featured: true,
    content: '补贴对象为实际种植玉米的生产者，包括普通农户、家庭农场、合作社等。补贴资金通过一卡通等形式直接发放给生产者...',
  },
  {
    id: 2,
    title: '东北黑土地保护性耕作实施方案',
    summary: '深入推进东北黑土地保护性耕作行动计划，今年计划实施面积超过8000万亩。',
    category: 'policy',
    date: '2024-02-28',
    source: '国务院',
    views: 8960,
    featured: false,
  },
  {
    id: 3,
    title: '农业保险保费补贴政策调整',
    summary: '三大粮食作物完全成本保险和种植收入保险实施范围进一步扩大，补贴比例提高。',
    category: 'policy',
    date: '2024-01-20',
    source: '财政部',
    views: 7230,
    featured: false,
  },
];

const marketData = [
  {
    region: '东北产区',
    current: 2450,
    change: 2.3,
    trend: 'up',
    unit: '元/吨',
    description: '新粮供应偏紧，价格稳中偏强',
  },
  {
    region: '华北产区',
    current: 2680,
    change: 1.8,
    trend: 'up',
    unit: '元/吨',
    description: '企业采购积极，价格小幅上涨',
  },
  {
    region: '黄淮产区',
    current: 2720,
    change: -0.5,
    trend: 'down',
    unit: '元/吨',
    description: '农户售粮加快，价格略有回调',
  },
  {
    region: '南方销区',
    current: 2850,
    change: 3.1,
    trend: 'up',
    unit: '元/吨',
    description: '库存偏低，港口价格坚挺',
  },
];

const techNews = [
  {
    id: 1,
    title: '我国玉米育种技术取得重大突破',
    summary: '科研团队成功克隆出多个玉米高产基因，为培育更高产量的新品种奠定基础。',
    date: '2024-03-10',
    source: '中国农业科学院',
  },
  {
    id: 2,
    title: '智慧农业示范项目在黑龙江启动',
    summary: '利用卫星遥感、无人机等技术，实现玉米生长全过程的精准监测。',
    date: '2024-02-25',
    source: '农业农村部信息中心',
  },
  {
    id: 3,
    title: '玉米秸秆综合利用技术获国家科技进步奖',
    summary: '该技术可将秸秆转化为饲料、肥料和生物能源，经济效益显著。',
    date: '2024-01-15',
    source: '科技部',
  },
];

const weatherForecast = [
  {
    region: '东北地区',
    forecast: '气温偏高，降水偏少',
    warning: '注意春季干旱',
    temperature: '-5~10°C',
    rainfall: '5-15mm',
  },
  {
    region: '华北地区',
    forecast: '气温正常，降水偏多',
    warning: '注意防涝',
    temperature: '5~18°C',
    rainfall: '20-35mm',
  },
  {
    region: '黄淮地区',
    forecast: '气温偏高，降水偏少',
    warning: '适时灌溉',
    temperature: '10~22°C',
    rainfall: '15-25mm',
  },
];

const priceTrend = [
  { month: '1月', price: 2380 },
  { month: '2月', price: 2420 },
  { month: '3月', price: 2450 },
  { month: '4月', price: 2480 },
  { month: '5月', price: 2520 },
  { month: '6月', price: 2580 },
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('policy');
  const [expandedNews, setExpandedNews] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex p-4 rounded-full bg-white/20 mb-6"
          >
            <Newspaper className="h-14 w-14" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            政策资讯
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            实时推送农业政策、市场行情、农业科技和气象信息，助您把握商机，科学决策
          </motion.p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {newsCategories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`p-6 rounded-2xl transition-all flex flex-col items-center gap-3 ${
                    activeCategory === category.id
                      ? `bg-gradient-to-br ${category.color} text-white shadow-lg`
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-10 w-10" />
                  <span className="font-bold">{category.name}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-6">
              {/* Featured News */}
              {activeCategory === 'policy' && (
                <>
                  {policies
                    .filter((p) => p.featured)
                    .map((policy) => (
                      <motion.div
                        key={policy.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <Card className="border-0 shadow-xl overflow-hidden">
                          <div className="h-48 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                            <div className="text-center text-white">
                              <Badge className="bg-white/20 text-white mb-4">头条</Badge>
                              <Building className="h-20 w-20 mx-auto mb-4 opacity-50" />
                            </div>
                          </div>
                          <CardContent className="p-6">
                            <div className="flex items-center gap-4 mb-4">
                              <Badge className="bg-blue-100 text-blue-700">{policy.source}</Badge>
                              <span className="text-sm text-gray-500 flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {policy.date}
                              </span>
                              <span className="text-sm text-gray-500 flex items-center gap-1">
                                <Eye className="h-4 w-4" />
                                {policy.views.toLocaleString()}
                              </span>
                            </div>
                            <h2 className="text-2xl font-bold mb-3">{policy.title}</h2>
                            <p className="text-gray-600 mb-4">{policy.summary}</p>
                            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600">
                              阅读全文
                              <ChevronRight className="h-4 w-4 ml-2" />
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}

                  {/* Policy List */}
                  <div className="space-y-4">
                    {policies
                      .filter((p) => !p.featured)
                      .map((policy, index) => (
                        <motion.div
                          key={policy.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Card
                            className="border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer"
                            onClick={() => setExpandedNews(expandedNews === policy.id ? null : policy.id)}
                          >
                            <CardContent className="p-6">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-2">
                                    <Badge variant="outline">{policy.source}</Badge>
                                    <span className="text-sm text-gray-500">{policy.date}</span>
                                  </div>
                                  <h3 className="text-lg font-bold mb-2 hover:text-blue-600 transition-colors">
                                    {policy.title}
                                  </h3>
                                  <p className="text-gray-600 text-sm">{policy.summary}</p>
                                </div>
                                <div className="text-sm text-gray-500 flex items-center gap-1 ml-4">
                                  <Eye className="h-4 w-4" />
                                  {policy.views}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                  </div>
                </>
              )}

              {/* Market Prices */}
              {activeCategory === 'market' && (
                <div className="space-y-6">
                  <Card className="border-0 shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-lg">
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5" />
                        各地玉米价格行情
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        {marketData.map((market, index) => (
                          <motion.div
                            key={market.region}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-bold text-gray-800">{market.region}</span>
                              <Badge
                                className={
                                  market.trend === 'up'
                                    ? 'bg-red-100 text-red-700'
                                    : 'bg-green-100 text-green-700'
                                }
                              >
                                {market.trend === 'up' ? (
                                  <ArrowUpRight className="h-4 w-4 mr-1" />
                                ) : (
                                  <ArrowDownRight className="h-4 w-4 mr-1" />
                                )}
                                {Math.abs(market.change)}%
                              </Badge>
                            </div>
                            <div className="text-3xl font-bold text-green-600 mb-1">
                              {market.current}
                              <span className="text-sm text-gray-500 ml-1">{market.unit}</span>
                            </div>
                            <p className="text-sm text-gray-600">{market.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Price Trend */}
                  <Card className="border-0 shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
                      <CardTitle className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5" />
                        价格走势
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {priceTrend.map((item, index) => (
                          <div key={item.month} className="flex items-center gap-4">
                            <div className="w-12 text-sm text-gray-600">{item.month}</div>
                            <div className="flex-1">
                              <div
                                className="h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg"
                                style={{ width: `${((item.price - 2300) / 300) * 100}%` }}
                              />
                            </div>
                            <div className="w-20 text-right font-bold text-gray-800">
                              {item.price}元/吨
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Tech News */}
              {activeCategory === 'tech' && (
                <div className="space-y-4">
                  {techNews.map((news, index) => (
                    <motion.div
                      key={news.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center flex-shrink-0">
                              <Award className="h-8 w-8 text-purple-600" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <Badge variant="outline">{news.source}</Badge>
                                <span className="text-sm text-gray-500">{news.date}</span>
                              </div>
                              <h3 className="text-lg font-bold mb-2">{news.title}</h3>
                              <p className="text-gray-600 text-sm">{news.summary}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Weather */}
              {activeCategory === 'weather' && (
                <div className="space-y-4">
                  {weatherForecast.map((weather, index) => (
                    <motion.div
                      key={weather.region}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <Globe className="h-8 w-8 text-cyan-600" />
                              <h3 className="text-xl font-bold">{weather.region}</h3>
                            </div>
                            <Badge className="bg-cyan-100 text-cyan-700">
                              <Leaf className="h-4 w-4 mr-1" />
                              农气预报
                            </Badge>
                          </div>
                          <div className="grid grid-cols-3 gap-4 mb-4">
                            <div className="text-center p-3 bg-cyan-50 rounded-lg">
                              <div className="text-sm text-gray-500 mb-1">温度</div>
                              <div className="font-bold text-cyan-700">{weather.temperature}</div>
                            </div>
                            <div className="text-center p-3 bg-cyan-50 rounded-lg">
                              <div className="text-sm text-gray-500 mb-1">降水</div>
                              <div className="font-bold text-cyan-700">{weather.rainfall}</div>
                            </div>
                            <div className="text-center p-3 bg-amber-50 rounded-lg">
                              <div className="text-sm text-gray-500 mb-1">预报</div>
                              <div className="font-bold text-amber-700 text-sm">{weather.forecast}</div>
                            </div>
                          </div>
                          <div className="p-3 bg-amber-50 rounded-lg flex items-center gap-2">
                            <span className="text-amber-600">⚠️</span>
                            <span className="text-sm text-amber-800">农事建议：{weather.warning}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <Card className="border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    行业数据
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                      <span className="text-gray-600">全国玉米产量</span>
                      <span className="font-bold text-emerald-700">2.89亿吨</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                      <span className="text-gray-600">播种面积</span>
                      <span className="font-bold text-emerald-700">6.5亿亩</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                      <span className="text-gray-600">平均单产</span>
                      <span className="font-bold text-emerald-700">445kg/亩</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                      <span className="text-gray-600">进口量</span>
                      <span className="font-bold text-emerald-700">1800万吨</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hot Topics */}
              <Card className="border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5" />
                    热门话题
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    {[
                      '春耕备耕进行时',
                      '玉米价格走势分析',
                      '黑土地保护行动',
                      '智慧农业新技术',
                      '粮食安全政策解读',
                    ].map((topic, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-50 transition-colors cursor-pointer"
                      >
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            index < 3 ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600'
                          }`}
                        >
                          {index + 1}
                        </div>
                        <span className="text-sm font-medium">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Related Links */}
              <Card className="border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
                  <CardTitle>相关链接</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    {[
                      { name: '农业农村部', icon: Building },
                      { name: '国家粮食交易中心', icon: Truck },
                      { name: '中国玉米网', icon: Globe },
                      { name: '气象服务', icon: Globe },
                    ].map((link) => (
                      <a
                        key={link.name}
                        href="#"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        <link.icon className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-medium">{link.name}</span>
                        <ChevronRight className="h-4 w-4 text-gray-400 ml-auto" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
