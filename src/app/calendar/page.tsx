'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Sprout,
  Droplets,
  Sun,
  Cloud,
  Wind,
  Thermometer,
  CloudRain,
  Snowflake,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ChevronLeft,
  ChevronRight,
  Wheat,
  Bug,
  Leaf,
  Flower2,
  Scissors,
  AlertCircle,
  Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const months = [
  { name: '1月', season: '冬季', icon: Snowflake },
  { name: '2月', season: '冬季', icon: Snowflake },
  { name: '3月', season: '春季', icon: Sprout },
  { name: '4月', season: '春季', icon: Sprout },
  { name: '5月', season: '春季', icon: Flower2 },
  { name: '6月', season: '夏季', icon: Sun },
  { name: '7月', season: '夏季', icon: Sun },
  { name: '8月', season: '夏季', icon: Cloud },
  { name: '9月', season: '秋季', icon: Leaf },
  { name: '10月', season: '秋季', icon: Leaf },
  { name: '11月', season: '秋季', icon: Wind },
  { name: '12月', season: '冬季', icon: Snowflake },
];

const seasonColors = {
  '春季': { bg: 'from-green-400 to-emerald-500', text: 'text-green-600', border: 'border-green-500' },
  '夏季': { bg: 'from-yellow-400 to-orange-500', text: 'text-orange-600', border: 'border-orange-500' },
  '秋季': { bg: 'from-amber-400 to-yellow-500', text: 'text-amber-600', border: 'border-amber-500' },
  '冬季': { bg: 'from-blue-400 to-cyan-500', text: 'text-blue-600', border: 'border-blue-500' },
};

const monthDetails = {
  '1月': {
    title: '一月：冬季管理期',
    overview: '玉米收获后的冬季管理阶段，主要进行秸秆处理、土壤深翻、积肥造肥等工作。',
    mainTasks: [
      { task: '秸秆处理', icon: Wheat, desc: '将玉米秸秆进行粉碎还田或青贮处理，每亩还田量300-500公斤' },
      { task: '深翻改土', icon: Sprout, desc: '对土壤进行深翻，深度30-40厘米，改善土壤结构' },
      { task: '积肥备肥', icon: Leaf, desc: '积造有机肥，亩施优质农家肥2000-3000公斤' },
    ],
    tips: [
      '注意防止秸秆还田时带菌传染',
      '深翻后及时耙平保墒',
      '做好农机具的维修保养',
    ],
    weather: { avg: '-8~2°C', rainfall: '3-8mm', advice: '注意防寒保暖，及时清理积雪' },
  },
  '2月': {
    title: '二月：备耕准备期',
    overview: '春耕前的准备工作阶段，包括选购种子、检修农机、制定种植计划等。',
    mainTasks: [
      { task: '选购良种', icon: Wheat, desc: '选购优质、高产、抗逆性强的玉米品种，如郑单958、先玉335等' },
      { task: '农机检修', icon: Scissors, desc: '对播种机、旋耕机等农机具进行全面检修和调试' },
      { task: '制定计划', icon: Calendar, desc: '根据地块情况制定种植计划，合理安排茬口布局' },
    ],
    tips: [
      '选择适合当地的优质品种',
      '种子需进行发芽率测试',
      '关注天气预报选择播种时机',
    ],
    weather: { avg: '-5~5°C', rainfall: '5-10mm', advice: '气温逐渐回升，但仍需注意防寒' },
  },
  '3月': {
    title: '三月：春耕启动期',
    overview: '春季玉米播种的关键时期，需要做好整地、施肥、种子处理等工作。',
    mainTasks: [
      { task: '整地施肥', icon: Sprout, desc: '结合基肥进行深翻，亩施农家肥1500-2000公斤，复合肥30-40公斤' },
      { task: '种子处理', icon: Wheat, desc: '播前晒种2-3天，用种衣剂拌种防治病虫害' },
      { task: '土壤处理', icon: Bug, desc: '地下害虫严重的地区进行土壤药剂处理' },
    ],
    tips: [
      '当5-10厘米地温稳定在10°C以上时播种',
      '播种深度一般3-5厘米为宜',
      '播后及时镇压保墒',
    ],
    weather: { avg: '2~12°C', rainfall: '10-20mm', advice: '春季多风，注意保墒防旱' },
  },
  '4月': {
    title: '四月：播种出苗期',
    overview: '春玉米大面积播种和出苗阶段，是夺取丰收的关键时期。',
    mainTasks: [
      { task: '适时播种', icon: Wheat, desc: '采用机械精量播种，每亩播种量2-3公斤，播种密度4000-4500株' },
      { task: '查苗补苗', icon: Sprout, desc: '出苗后及时查苗，发现缺苗及时补种或移栽' },
      { task: '苗期管理', icon: Leaf, desc: '及时中耕除草，疏松土壤，促进根系发育' },
    ],
    tips: [
      '播种深度要一致，确保出苗整齐',
      '注意防治地老虎、蛴螬等地下害虫',
      '避免早春低温造成烂种',
    ],
    weather: { avg: '10~20°C', rainfall: '20-35mm', advice: '气温回升快，是播种的最佳时期' },
  },
  '5月': {
    title: '五月：苗期管理期',
    overview: '玉米进入快速生长期，需要加强田间管理，促进植株健壮生长。',
    mainTasks: [
      { task: '间苗定苗', icon: Sprout, desc: '3-4叶时间苗，5-6叶时定苗，确保合理密度' },
      { task: '中耕追肥', icon: Leaf, desc: '及时中耕除草，追施苗肥，亩施尿素10-15公斤' },
      { task: '病虫害防治', icon: Bug, desc: '注意防治玉米螟、黏虫、蚜虫等害虫' },
    ],
    tips: [
      '中耕深度先浅后深',
      '苗肥应早施、轻施',
      '注意天气预报，预防倒春寒',
    ],
    weather: { avg: '15~25°C', rainfall: '30-50mm', advice: '降水增多，注意防涝排水' },
  },
  '6月': {
    title: '六月：拔节生长期',
    overview: '玉米进入营养生长和生殖生长并进阶段，植株快速长高。',
    mainTasks: [
      { task: '重施穗肥', icon: Wheat, desc: '大喇叭口期重施穗肥，亩施尿素20-25公斤，钾肥10公斤' },
      { task: '水分管理', icon: Droplets, desc: '拔节期需水量增加，干旱时及时灌溉，保证土壤含水量' },
      { task: '中耕培土', icon: Sprout, desc: '进行中耕培土，促进气生根生长，防止倒伏' },
    ],
    tips: [
      '穗肥是玉米产量形成的关键',
      '注意天气预报，高温干旱及时浇水',
      '培土可促进根系发育，提高抗倒能力',
    ],
    weather: { avg: '20~28°C', rainfall: '50-80mm', advice: '进入雨季，注意防洪排涝' },
  },
  '7月': {
    title: '七月：大喇叭口至抽雄期',
    overview: '玉米生长最旺盛的时期，是决定产量的关键阶段。',
    mainTasks: [
      { task: '病虫害防治', icon: Bug, desc: '重点防治玉米螟，可用辛硫磷颗粒剂丢心' },
      { task: '辅助授粉', icon: Flower2, desc: '人工辅助授粉，提高结实率，减少秃尖' },
      { task: '水分管理', icon: Droplets, desc: '抽雄前后需水临界期，保证水分供应' },
    ],
    tips: [
      '玉米螟防治最佳时期是大喇叭口期',
      '辅助授粉应在上午8-11点进行',
      '干旱会严重影响产量，要及时灌溉',
    ],
    weather: { avg: '22~30°C', rainfall: '80-120mm', advice: '高温高湿，病虫害高发期' },
  },
  '8月': {
    title: '八月：灌浆成熟期',
    overview: '玉米籽粒形成和灌浆的关键时期，产量形成的重要阶段。',
    mainTasks: [
      { task: '保叶促粒', icon: Leaf, desc: '保护功能叶，促进光合作用，增加粒重' },
      { task: '防治病虫', icon: Bug, desc: '继续防治三代黏虫、锈病等病虫害' },
      { task: '排涝防倒', icon: Wind, desc: '注意排除田间积水，防止根系早衰' },
    ],
    tips: [
      '叶面积指数是决定产量的关键因素',
      '后期不宜过早去雄，影响授粉',
      '做好田间排水，防止涝害',
    ],
    weather: { avg: '20~28°C', rainfall: '80-100mm', advice: '台风季节，注意加固防倒' },
  },
  '9月': {
    title: '九月：乳熟至成熟期',
    overview: '玉米籽粒成熟和收获准备阶段，需要适时收获。',
    mainTasks: [
      { task: '适时晚收', icon: Wheat, desc: '适当晚收可提高千粒重，一般在苞叶变黄后7-10天收获' },
      { task: '晾晒降水', icon: Sun, desc: '收获后及时晾晒降水至14%以下，利于安全储藏' },
      { task: '秸秆还田', icon: Sprout, desc: '收获后可将秸秆粉碎还田，改善土壤结构' },
    ],
    tips: [
      '适时收获是保证产量和品质的重要环节',
      '籽粒含水量高时要及时烘干或晾晒',
      '秸秆还田要配合深翻和施氮',
    ],
    weather: { avg: '15~25°C', rainfall: '40-60mm', advice: '秋高气爽，是收获的好时节' },
  },
  '10月': {
    title: '十月：秋收完成期',
    overview: '完成玉米收获和秋播准备阶段。',
    mainTasks: [
      { task: '适时收获', icon: Wheat, desc: '及时收获已成熟的玉米，防止霉变损失' },
      { task: '秋播准备', icon: Sprout, desc: '对于夏玉米产区，开始准备秋播工作' },
      { task: '深松整地', icon: Leaf, desc: '收获后进行深松作业，改善土壤通透性' },
    ],
    tips: [
      '注意收看天气预报，抢晴收获',
      '收获后及时处理秸秆',
      '做好秋播小麦的准备工作',
    ],
    weather: { avg: '10~18°C', rainfall: '30-50mm', advice: '气温下降，注意防寒' },
  },
  '11月': {
    title: '十一月：秋耕整地期',
    overview: '秋收后的土地整理阶段，为来年农业生产做准备。',
    mainTasks: [
      { task: '秸秆处理', icon: Wheat, desc: '对残留秸秆进行清理或粉碎还田' },
      { task: '秋耕深翻', icon: Sprout, desc: '进行秋季深翻，深度25-30厘米' },
      { task: '施基肥', icon: Leaf, desc: '结合秋耕施入有机肥和底肥' },
    ],
    tips: [
      '秋耕要在土壤封冻前完成',
      '深翻可以改善土壤结构',
      '翻后及时耙平保墒',
    ],
    weather: { avg: '3~12°C', rainfall: '15-25mm', advice: '气温逐渐下降，抓住晴天作业' },
  },
  '12月': {
    title: '十二月：年末总结期',
    overview: '一年的农业生产结束，进行总结和下年计划。',
    mainTasks: [
      { task: '盘点总结', icon: Calendar, desc: '总结全年生产经验，分析产量效益' },
      { task: '市场分析', icon: Wheat, desc: '分析玉米市场行情，制定销售计划' },
      { task: '备耕计划', icon: Sprout, desc: '制定下年种植计划，准备生产资料' },
    ],
    tips: [
      '做好粮食储存，防止霉变',
      '关注市场行情，适时销售',
      '利用冬闲时间学习技术',
    ],
    weather: { avg: '-5~5°C', rainfall: '5-10mm', advice: '天气寒冷，做好防寒保暖' },
  },
};

export default function CalendarPage() {
  const [selectedMonth, setSelectedMonth] = useState(6);
  const currentMonth = months[selectedMonth];
  const monthKey = currentMonth.name.replace('月', '') + '月';
  const details = monthDetails[monthKey as keyof typeof monthDetails];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-50 to-amber-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-amber-700 via-orange-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex p-4 rounded-full bg-white/20 mb-6"
          >
            <Calendar className="h-14 w-14" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            农事日历
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-amber-100 max-w-3xl mx-auto"
          >
            依据二十四节气精心编排的玉米种植农事指南，助您科学安排农事活动
          </motion.p>
        </div>
      </section>

      {/* Month Selector */}
      <section className="py-8 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setSelectedMonth((prev) => (prev === 0 ? 11 : prev - 1))}
              className="flex-shrink-0"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {months.map((month, index) => {
                const Icon = month.icon;
                const colors = seasonColors[month.season as keyof typeof seasonColors];
                return (
                  <motion.button
                    key={month.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedMonth(index)}
                    className={`flex flex-col items-center gap-1 p-3 rounded-xl transition-all ${
                      selectedMonth === index
                        ? `bg-gradient-to-br ${colors.bg} text-white shadow-lg`
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="text-xs font-medium">{month.name}</span>
                    <span className={`text-xs ${selectedMonth === index ? 'text-white/80' : 'text-gray-500'}`}>
                      {month.season}
                    </span>
                  </motion.button>
                );
              })}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setSelectedMonth((prev) => (prev === 11 ? 0 : prev + 1))}
              className="flex-shrink-0"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMonth}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Month Header */}
              <div className={`bg-gradient-to-r ${seasonColors[currentMonth.season as keyof typeof seasonColors].bg} text-white rounded-3xl p-8 mb-8 shadow-xl`}>
                <div className="flex items-center justify-between">
                  <div>
                    <Badge className="bg-white/20 text-white mb-4">{currentMonth.season}</Badge>
                    <h2 className="text-3xl font-bold mb-2">{details.title}</h2>
                    <p className="text-white/90 max-w-2xl">{details.overview}</p>
                  </div>
                  <div className="text-center">
                    <div className="text-6xl font-bold">{currentMonth.name.replace('月', '')}</div>
                    <div className="text-white/80">农事重点</div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Tasks */}
                <div className="lg:col-span-2">
                  <Card className="border-0 shadow-xl h-full">
                    <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-lg">
                      <CardTitle className="flex items-center gap-2">
                        <Star className="h-5 w-5" />
                        本月重点工作
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        {details.mainTasks.map((task, index) => {
                          const Icon = task.icon;
                          return (
                            <motion.div
                              key={task.task}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
                            >
                              <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                                  <Icon className="h-6 w-6 text-white" />
                                </div>
                              </div>
                              <div>
                                <h4 className="font-bold text-lg text-gray-800 mb-1">{task.task}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{task.desc}</p>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Weather Info */}
                  <Card className="border-0 shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-t-lg">
                      <CardTitle className="flex items-center gap-2">
                        <Cloud className="h-5 w-5" />
                        气候特点
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <Thermometer className="h-5 w-5 text-blue-600" />
                            <span className="text-gray-700">平均温度</span>
                          </div>
                          <span className="font-bold text-blue-600">{details.weather.avg}</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-cyan-50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <CloudRain className="h-5 w-5 text-cyan-600" />
                            <span className="text-gray-700">降水量</span>
                          </div>
                          <span className="font-bold text-cyan-600">{details.weather.rainfall}</span>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertCircle className="h-5 w-5 text-blue-600" />
                            <span className="font-medium text-gray-700">农事建议</span>
                          </div>
                          <p className="text-sm text-gray-600">{details.weather.advice}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Tips */}
                  <Card className="border-0 shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-t-lg">
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5" />
                        温馨提示
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        {details.tips.map((tip, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                              {index + 1}
                            </div>
                            <p className="text-sm text-gray-700 leading-relaxed">{tip}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Season Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">四季农事要点</h2>
            <p className="text-gray-600">全年农事活动全景概览</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(seasonColors).map(([season, colors]) => (
              <motion.div
                key={season}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <Card className={`border-2 ${colors.border} overflow-hidden h-full`}>
                  <div className={`h-3 bg-gradient-to-r ${colors.bg}`} />
                  <CardContent className="p-6">
                    <h3 className={`text-xl font-bold mb-4 ${colors.text}`}>{season}</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {season === '春季' && (
                        <>
                          <li className="flex items-center gap-2"><Sprout className="h-4 w-4 text-green-500" />3-4月播种</li>
                          <li className="flex items-center gap-2"><Leaf className="h-4 w-4 text-green-500" />苗期管理</li>
                          <li className="flex items-center gap-2"><Bug className="h-4 w-4 text-green-500" />病虫防治</li>
                        </>
                      )}
                      {season === '夏季' && (
                        <>
                          <li className="flex items-center gap-2"><Sun className="h-4 w-4 text-orange-500" />拔节生长</li>
                          <li className="flex items-center gap-2"><Droplets className="h-4 w-4 text-orange-500" />穗肥追施</li>
                          <li className="flex items-center gap-2"><Flower2 className="h-4 w-4 text-orange-500" />抽雄授粉</li>
                        </>
                      )}
                      {season === '秋季' && (
                        <>
                          <li className="flex items-center gap-2"><Wheat className="h-4 w-4 text-amber-500" />灌浆成熟</li>
                          <li className="flex items-center gap-2"><Leaf className="h-4 w-4 text-amber-500" />适时收获</li>
                          <li className="flex items-center gap-2"><Sprout className="h-4 w-4 text-amber-500" />秸秆还田</li>
                        </>
                      )}
                      {season === '冬季' && (
                        <>
                          <li className="flex items-center gap-2"><Snowflake className="h-4 w-4 text-blue-500" />农闲整地</li>
                          <li className="flex items-center gap-2"><Wheat className="h-4 w-4 text-blue-500" />备足农资</li>
                          <li className="flex items-center gap-2"><Calendar className="h-4 w-4 text-blue-500" />总结计划</li>
                        </>
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">相关资源推荐</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="/knowledge" className="block">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all h-full">
                <CardContent className="p-6 text-center">
                  <Bug className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">病虫害图谱</h3>
                  <p className="text-sm text-gray-600">查看详细防治方案</p>
                </CardContent>
              </Card>
            </a>
            <a href="/detect" className="block">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all h-full">
                <CardContent className="p-6 text-center">
                  <Wheat className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">图片识别</h3>
                  <p className="text-sm text-gray-600">AI智能诊断病虫害</p>
                </CardContent>
              </Card>
            </a>
            <a href="/chat" className="block">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all h-full">
                <CardContent className="p-6 text-center">
                  <Leaf className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">技术咨询</h3>
                  <p className="text-sm text-gray-600">专家在线解答</p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
