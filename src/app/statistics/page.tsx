'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Activity,
  MapPin,
  Calendar,
  Users,
  Bug,
  Leaf,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Download,
  Filter,
  RefreshCw,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';

const monthlyData = [
  { month: '1月', cases: 320, cured: 280, deaths: 40 },
  { month: '2月', cases: 450, cured: 400, deaths: 50 },
  { month: '3月', cases: 680, cured: 620, deaths: 60 },
  { month: '4月', cases: 890, cured: 820, deaths: 70 },
  { month: '5月', cases: 1200, cured: 1100, deaths: 100 },
  { month: '6月', cases: 1580, cured: 1450, deaths: 130 },
  { month: '7月', cases: 2100, cured: 1900, deaths: 200 },
  { month: '8月', cases: 2450, cured: 2200, deaths: 250 },
  { month: '9月', cases: 1890, cured: 1720, deaths: 170 },
  { month: '10月', cases: 1350, cured: 1240, deaths: 110 },
  { month: '11月', cases: 780, cured: 720, deaths: 60 },
  { month: '12月', cases: 420, cured: 390, deaths: 30 },
];

const regionData = [
  { region: '东北地区', cases: 4560, healthy: 8920, severity: 0.34 },
  { region: '华北地区', cases: 3890, healthy: 7560, severity: 0.34 },
  { region: '西北地区', cases: 2340, healthy: 5670, severity: 0.29 },
  { region: '华中地区', cases: 5230, healthy: 10230, severity: 0.34 },
  { region: '华东地区', cases: 6780, healthy: 12890, severity: 0.34 },
  { region: '华南地区', cases: 4120, healthy: 7890, severity: 0.34 },
  { region: '西南地区', cases: 3450, healthy: 6890, severity: 0.33 },
];

const diseaseDistribution = [
  { name: '玉米大斑病', value: 18, color: '#EF4444' },
  { name: '玉米锈病', value: 14, color: '#F97316' },
  { name: '玉米螟', value: 12, color: '#EAB308' },
  { name: '玉米小斑病', value: 9, color: '#22C55E' },
  { name: '玉米粘虫', value: 8, color: '#3B82F6' },
  { name: '玉米病毒病', value: 7, color: '#8B5CF6' },
  { name: '玉米红蜘蛛', value: 6, color: '#EC4899' },
  { name: '玉米茎腐病', value: 5, color: '#14B8A6' },
  { name: '其他', value: 21, color: '#6B7280' },
];

const severityDistribution = [
  { level: '轻微', count: 4500, percentage: 35 },
  { level: '中等', count: 5200, percentage: 40 },
  { level: '严重', count: 2600, percentage: 20 },
  { level: '极严重', count: 700, percentage: 5 },
];

const weeklyTrend = [
  { week: '第1周', detection: 120, diagnosis: 115, treatment: 110 },
  { week: '第2周', detection: 145, diagnosis: 138, treatment: 132 },
  { week: '第3周', detection: 132, diagnosis: 128, treatment: 122 },
  { week: '第4周', detection: 168, diagnosis: 160, treatment: 155 },
  { week: '第5周', detection: 155, diagnosis: 148, treatment: 142 },
  { week: '第6周', detection: 180, diagnosis: 172, treatment: 165 },
];

const radarData = [
  { subject: '识别准确率', A: 98, fullMark: 100 },
  { subject: '响应速度', A: 92, fullMark: 100 },
  { subject: '覆盖范围', A: 95, fullMark: 100 },
  { subject: '用户满意度', A: 96, fullMark: 100 },
  { subject: '专业程度', A: 94, fullMark: 100 },
  { subject: '服务可用性', A: 99, fullMark: 100 },
];

const topDiseases = [
  { name: '玉米大斑病', cases: 4567, trend: 12.5, status: 'up' },
  { name: '玉米锈病', cases: 3890, trend: 8.3, status: 'up' },
  { name: '玉米螟', cases: 3234, trend: -5.2, status: 'down' },
  { name: '玉米小斑病', cases: 2567, trend: 3.1, status: 'up' },
  { name: '玉米粘虫', cases: 2134, trend: -2.8, status: 'down' },
  { name: '玉米病毒病', cases: 1890, trend: 15.6, status: 'up' },
  { name: '玉米红蜘蛛', cases: 1678, trend: 6.2, status: 'up' },
  { name: '玉米茎腐病', cases: 1456, trend: -1.3, status: 'down' },
];

export default function StatisticsPage() {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('year');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex p-4 rounded-full bg-white/20 mb-6"
          >
            <BarChart3 className="h-12 w-12" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            数据统计中心
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            基于实时数据采集和智能分析，为您呈现玉米病虫害发生态势的全景视图
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 flex items-center justify-center gap-4 flex-wrap"
          >
            <Badge className="bg-white/20 text-white px-4 py-2">
              <Activity className="h-4 w-4 mr-2" />
              实时数据
            </Badge>
            <Badge className="bg-white/20 text-white px-4 py-2">
              <Users className="h-4 w-4 mr-2" />
              覆盖 32 省份
            </Badge>
            <Badge className="bg-white/20 text-white px-4 py-2">
              <Calendar className="h-4 w-4 mr-2" />
              近30天数据
            </Badge>
          </motion.div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-8 -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: '总检测量',
                value: '12,890',
                change: '+15.3%',
                trend: 'up',
                icon: Bug,
                color: 'from-blue-500 to-indigo-500',
              },
              {
                title: '覆盖农户',
                value: '50万+',
                change: '+8.2%',
                trend: 'up',
                icon: Users,
                color: 'from-green-500 to-emerald-500',
              },
              {
                title: '识别准确率',
                value: '98.7%',
                change: '+0.3%',
                trend: 'up',
                icon: CheckCircle2,
                color: 'from-purple-500 to-pink-500',
              },
              {
                title: '平均响应',
                value: '0.8s',
                change: '-12.5%',
                trend: 'down',
                icon: Activity,
                color: 'from-orange-500 to-red-500',
              },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}
                        >
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <Badge
                          className={
                            stat.trend === 'up'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-red-100 text-red-700'
                          }
                        >
                          {stat.change}
                        </Badge>
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-500">{stat.title}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gray-400" />
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="选择地区" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">全国</SelectItem>
                    <SelectItem value="northeast">东北地区</SelectItem>
                    <SelectItem value="north">华北地区</SelectItem>
                    <SelectItem value="central">华中地区</SelectItem>
                    <SelectItem value="east">华东地区</SelectItem>
                    <SelectItem value="south">华南地区</SelectItem>
                    <SelectItem value="southwest">西南地区</SelectItem>
                    <SelectItem value="northwest">西北地区</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-gray-400" />
                <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="选择时间" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="week">最近一周</SelectItem>
                    <SelectItem value="month">最近一月</SelectItem>
                    <SelectItem value="quarter">最近一季度</SelectItem>
                    <SelectItem value="year">最近一年</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                导出数据
              </Button>
              <Button variant="outline">
                <RefreshCw className="h-4 w-4 mr-2" />
                刷新
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Charts */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Monthly Trend */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    月度检测趋势
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={monthlyData}>
                      <defs>
                        <linearGradient id="colorCases" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis dataKey="month" stroke="#6B7280" fontSize={12} />
                      <YAxis stroke="#6B7280" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#fff',
                          border: '1px solid #E5E7EB',
                          borderRadius: '8px',
                        }}
                      />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="cases"
                        stroke="#3B82F6"
                        fillOpacity={1}
                        fill="url(#colorCases)"
                        name="检测数量"
                      />
                      <Line
                        type="monotone"
                        dataKey="cured"
                        stroke="#22C55E"
                        strokeWidth={2}
                        name="治愈数量"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>

            {/* Disease Distribution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bug className="h-5 w-5 text-orange-600" />
                    病虫害类型分布
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={diseaseDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={2}
                        dataKey="value"
                        label={({ name, percent }) =>
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
                        labelLine={true}
                      >
                        {diseaseDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#fff',
                          border: '1px solid #E5E7EB',
                          borderRadius: '8px',
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>

            {/* Regional Distribution */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-green-600" />
                    各地区检测分布
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={regionData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis dataKey="region" stroke="#6B7280" fontSize={12} />
                      <YAxis stroke="#6B7280" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#fff',
                          border: '1px solid #E5E7EB',
                          borderRadius: '8px',
                        }}
                      />
                      <Legend />
                      <Bar dataKey="cases" fill="#3B82F6" name="发病数量" />
                      <Bar dataKey="healthy" fill="#22C55E" name="健康数量" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>

            {/* Severity Distribution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    严重程度分布
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={severityDistribution} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis type="number" stroke="#6B7280" fontSize={12} />
                      <YAxis type="category" dataKey="level" stroke="#6B7280" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#fff',
                          border: '1px solid #E5E7EB',
                          borderRadius: '8px',
                        }}
                      />
                      <Bar dataKey="count" fill="#EF4444" name="数量" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Diseases and Performance */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Top Diseases */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="border-0 shadow-xl h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-green-600" />
                    高发病虫害 TOP 5
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topDiseases.map((disease, index) => (
                      <div
                        key={disease.name}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                              index === 0
                                ? 'bg-red-500'
                                : index === 1
                                ? 'bg-orange-500'
                                : index === 2
                                ? 'bg-yellow-500'
                                : 'bg-green-500'
                            }`}
                          >
                            {index + 1}
                          </div>
                          <div>
                            <div className="font-medium">{disease.name}</div>
                            <div className="text-sm text-gray-500">
                              {disease.cases.toLocaleString()} 例
                            </div>
                          </div>
                        </div>
                        <div
                          className={`flex items-center gap-1 text-sm ${
                            disease.status === 'up' ? 'text-red-600' : 'text-green-600'
                          }`}
                        >
                          {disease.status === 'up' ? (
                            <TrendingUp className="h-4 w-4" />
                          ) : (
                            <TrendingDown className="h-4 w-4" />
                          )}
                          {Math.abs(disease.trend)}%
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Weekly Trend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Card className="border-0 shadow-xl h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    周度趋势分析
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={280}>
                    <LineChart data={weeklyTrend}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis dataKey="week" stroke="#6B7280" fontSize={12} />
                      <YAxis stroke="#6B7280" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#fff',
                          border: '1px solid #E5E7EB',
                          borderRadius: '8px',
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="detection"
                        stroke="#3B82F6"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        name="检测"
                      />
                      <Line
                        type="monotone"
                        dataKey="diagnosis"
                        stroke="#22C55E"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        name="诊断"
                      />
                      <Line
                        type="monotone"
                        dataKey="treatment"
                        stroke="#8B5CF6"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        name="治疗"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>

            {/* System Performance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Card className="border-0 shadow-xl h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-purple-600" />
                    系统性能雷达
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={280}>
                    <RadarChart data={radarData}>
                      <PolarGrid stroke="#E5E7EB" />
                      <PolarAngleAxis dataKey="subject" stroke="#6B7280" fontSize={12} />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} />
                      <Radar
                        name="性能指标"
                        dataKey="A"
                        stroke="#8B5CF6"
                        fill="#8B5CF6"
                        fillOpacity={0.3}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#fff',
                          border: '1px solid #E5E7EB',
                          borderRadius: '8px',
                        }}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">更多数据洞察</h2>
            <p className="text-gray-600">实时监控，持续优化，为您提供最优质的服务</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'API 调用统计',
                value: '1,234,567',
                change: '+23.5%',
                description: '本月 API 调用次数',
                icon: Activity,
                color: 'text-blue-600',
              },
              {
                title: '用户满意度',
                value: '96.8%',
                change: '+1.2%',
                description: '基于用户反馈评分',
                icon: CheckCircle2,
                color: 'text-green-600',
              },
              {
                title: '系统可用性',
                value: '99.99%',
                change: '0%',
                description: '系统正常运行时间',
                icon: AlertTriangle,
                color: 'text-purple-600',
              },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center h-full hover:shadow-xl transition-shadow">
                    <CardContent className="p-8">
                      <div className={`inline-flex p-4 rounded-full bg-gray-100 mb-4`}>
                        <Icon className={`h-10 w-10 ${stat.color}`} />
                      </div>
                      <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Badge
                          className={
                            stat.change.startsWith('+')
                              ? 'bg-green-100 text-green-700'
                              : stat.change === '0%'
                              ? 'bg-gray-100 text-gray-700'
                              : 'bg-red-100 text-red-700'
                          }
                        >
                          {stat.change}
                        </Badge>
                      </div>
                      <p className="font-medium text-gray-700">{stat.title}</p>
                      <p className="text-sm text-gray-500 mt-1">{stat.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
