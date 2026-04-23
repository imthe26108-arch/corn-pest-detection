'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sprout,
  Droplets,
  Sun,
  Wind,
  Layers,
  Truck,
  Wheat,
  Bug,
  Leaf,
  Thermometer,
  Ruler,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  Play,
  BookOpen,
  Video,
  Download,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const techniques = [
  {
    id: 'seed',
    title: '品种选择',
    icon: Wheat,
    color: 'from-amber-500 to-orange-500',
    content: {
      overview: '选择适宜的品种是玉米高产的基础。不同地区的气候条件、土壤状况和种植习惯不同，应选择适合当地的优质品种。',
      points: [
        { title: '生育期选择', desc: '根据当地无霜期选择合适生育期的品种，确保在霜冻前正常成熟' },
        { title: '抗性选择', desc: '选择抗当地主要病虫害的品种，减少农药使用，降低生产成本' },
        { title: '品质选择', desc: '根据用途选择籽粒品质，如饲用选择淀粉含量高的品种' },
        { title: '适应性选择', desc: '选择经过当地试验示范的品种，避免盲目引进新品种' },
      ],
      varieties: [
        { name: '郑单958', region: '黄淮海', maturity: '中熟', yield: '650-800kg/亩', features: '抗倒伏、适应性广' },
        { name: '先玉335', region: '东华北', maturity: '中晚熟', yield: '700-850kg/亩', features: '品质优、脱水快' },
        { name: '登海605', region: '黄淮海', maturity: '中晚熟', yield: '680-820kg/亩', features: '抗锈病、棒大' },
        { name: '京科968', region: '东华北', maturity: '中熟', yield: '700-900kg/亩', features: '适应性广、高产稳产' },
      ],
    },
  },
  {
    id: 'soil',
    title: '整地技术',
    icon: Sprout,
    color: 'from-green-500 to-emerald-500',
    content: {
      overview: '良好的土壤条件是玉米高产的前提。通过科学整地，可改善土壤结构，提高土壤肥力，为玉米生长创造有利条件。',
      points: [
        { title: '深翻整地', desc: '秋季深翻25-30厘米，打破犁底层，改善土壤通透性' },
        { title: '耙耢保墒', desc: '深翻后及时耙耢，消除土块，平整地面，保住墒情' },
        { title: '施足底肥', desc: '结合整地亩施优质农家肥2000-3000公斤，复合肥30-40公斤' },
        { title: '起垄作畦', desc: '低洼地块应起垄排水，防止田间积水影响根系发育' },
      ],
      tips: [
        '深翻应在土壤水分适宜时进行',
        '避免在土壤过湿时翻耕，造成板结',
        '秸秆还田应配合深翻和施氮',
      ],
    },
  },
  {
    id: 'sowing',
    title: '播种技术',
    icon: Leaf,
    color: 'from-teal-500 to-cyan-500',
    content: {
      overview: '播种质量直接影响玉米的出苗率和整齐度。采用科学的播种技术，可确保一播全苗，为丰收打下基础。',
      points: [
        { title: '播期确定', desc: '春玉米5-10厘米地温稳定通过10°C时播种；夏玉米抢茬早播' },
        { title: '播种深度', desc: '一般3-5厘米，土壤墒情差时适当加深，墒情好时适当浅播' },
        { title: '播种密度', desc: '根据品种特性确定密度，一般每亩4000-5000株，密植品种可达5500株' },
        { title: '机械精播', desc: '采用精量播种机播种，一次完成开沟、播种、施肥、覆土、镇压' },
      ],
      tips: [
        '播种前进行发芽试验，确保种子活力',
        '种子包衣可有效防治病虫害',
        '播后及时镇压，利于出苗',
      ],
    },
  },
  {
    id: 'fertilizer',
    title: '施肥技术',
    icon: Layers,
    color: 'from-blue-500 to-indigo-500',
    content: {
      overview: '科学施肥是玉米高产的关键。根据玉米需肥规律和土壤肥力状况，合理配比氮磷钾肥，提高肥料利用率。',
      points: [
        { title: '基肥施用', desc: '有机肥和磷钾肥全部作基肥，氮肥30%作基肥' },
        { title: '苗肥追施', desc: '定苗后早施苗肥，亩施尿素5-8公斤，促进幼苗早发' },
        { title: '穗肥重施', desc: '大喇叭口期重施穗肥，亩施尿素20-25公斤，钾肥10公斤' },
        { title: '粒肥补施', desc: '抽雄期可根据长势适当补施粒肥，防止早衰' },
      ],
      nutrientDeficiency: [
        { element: '氮', symptom: '叶片黄绿，植株矮小', solution: '追施尿素或碳铵' },
        { element: '磷', symptom: '叶片紫红色，根系发育不良', solution: '叶面喷施磷酸二氢钾' },
        { element: '钾', symptom: '叶缘焦枯，易倒伏', solution: '追施氯化钾或硫酸钾' },
        { element: '锌', symptom: '叶片出现白条状条纹', solution: '叶面喷施硫酸锌溶液' },
      ],
    },
  },
  {
    id: 'water',
    title: '水分管理',
    icon: Droplets,
    color: 'from-cyan-500 to-sky-500',
    content: {
      overview: '水是玉米生长的必需条件。根据玉米需水规律和土壤墒情，合理灌溉，确保水分供应。',
      points: [
        { title: '苗期控水', desc: '苗期适当控水蹲苗，促进根系下扎，提高抗逆能力' },
        { title: '拔节需水', desc: '拔节期是需水敏感期，干旱时及时灌溉，保证水分供应' },
        { title: '抽雄关键', desc: '抽雄前后是需水临界期，干旱会导致严重减产' },
        { title: '灌浆保水', desc: '灌浆期保持土壤湿润，防止干旱造成秃尖和减产' },
      ],
      irrigation: [
        { stage: '播种-出苗', amount: '20-30m³/亩', note: '保证出苗水' },
        { stage: '拔节期', amount: '30-40m³/亩', note: '促进生长' },
        { stage: '大喇叭口期', amount: '40-50m³/亩', note: '关键需水期' },
        { stage: '抽雄-灌浆', amount: '35-45m³/亩', note: '保证产量' },
      ],
    },
  },
  {
    id: 'disease',
    title: '病虫防治',
    icon: Bug,
    color: 'from-red-500 to-rose-500',
    content: {
      overview: '病虫害是影响玉米产量和品质的重要因素。坚持预防为主、综合防治的方针，有效控制病虫害发生。',
      points: [
        { title: '农业防治', desc: '选用抗病品种、合理轮作、清除病残体，减少病虫源' },
        { title: '物理防治', desc: '利用灯光诱杀成虫，糖醋液诱集黏虫，减少虫源' },
        { title: '生物防治', desc: '释放赤眼蜂防治玉米螟，使用Bt生物农药' },
        { title: '化学防治', desc: '在病虫发生达到防治指标时，选用高效低毒农药' },
      ],
      diseases: [
        { name: '玉米大斑病', control: '25%三唑酮1500倍液喷雾' },
        { name: '玉米锈病', control: '25%丙环唑2000倍液喷雾' },
        { name: '玉米螟', control: '3%辛硫磷颗粒剂丢心' },
        { name: '黏虫', control: '20%氯虫苯甲酰胺悬浮剂喷雾' },
      ],
    },
  },
];

export default function TechnologyPage() {
  const [selectedTech, setSelectedTech] = useState('seed');

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex p-4 rounded-full bg-white/20 mb-6"
          >
            <BookOpen className="h-14 w-14" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            种植技术指南
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-emerald-100 max-w-3xl mx-auto"
          >
            从品种选择到收获贮藏的全流程技术指导，助您实现玉米优质高产
          </motion.p>
        </div>
      </section>

      {/* Technique Navigation */}
      <section className="py-8 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {techniques.map((tech) => {
              const Icon = tech.icon;
              return (
                <motion.button
                  key={tech.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedTech(tech.id)}
                  className={`p-4 rounded-xl transition-all flex flex-col items-center gap-2 ${
                    selectedTech === tech.id
                      ? `bg-gradient-to-br ${tech.color} text-white shadow-lg`
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-8 w-8" />
                  <span className="text-sm font-medium">{tech.title}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {techniques.map((tech) => {
            const Icon = tech.icon;
            const isSelected = selectedTech === tech.id;

            return (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isSelected ? 1 : 0, y: isSelected ? 0 : 20 }}
                className={isSelected ? 'block' : 'hidden'}
              >
                <Card className="border-0 shadow-xl overflow-hidden">
                  <div className={`h-3 bg-gradient-to-r ${tech.color}`} />
                  <CardHeader className="bg-gradient-to-r from-gray-50 to-white">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${tech.color} shadow-lg`}>
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{tech.title}</CardTitle>
                        <p className="text-gray-600 mt-1">{tech.content.overview}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {/* Key Points */}
                      <div>
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                          <CheckCircle2 className={`h-5 w-5 text-green-500`} />
                          技术要点
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {tech.content.points.map((point, index) => (
                            <div
                              key={index}
                              className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
                            >
                              <h4 className="font-bold text-gray-800 mb-2">{point.title}</h4>
                              <p className="text-sm text-gray-600 leading-relaxed">{point.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Additional Content based on technique */}
                      {tech.content.varieties && (
                        <div>
                          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <Wheat className="h-5 w-5 text-amber-500" />
                            推荐品种
                          </h3>
                          <div className="overflow-x-auto">
                            <table className="w-full">
                              <thead>
                                <tr className="bg-gradient-to-r from-amber-100 to-orange-100">
                                  <th className="text-left p-3 font-bold">品种名称</th>
                                  <th className="text-left p-3 font-bold">适宜区域</th>
                                  <th className="text-left p-3 font-bold">生育期</th>
                                  <th className="text-left p-3 font-bold">产量水平</th>
                                  <th className="text-left p-3 font-bold">主要特点</th>
                                </tr>
                              </thead>
                              <tbody>
                                {tech.content.varieties.map((variety, index) => (
                                  <tr key={index} className="border-b border-gray-100 hover:bg-amber-50 transition-colors">
                                    <td className="p-3 font-medium text-amber-700">{variety.name}</td>
                                    <td className="p-3 text-gray-600">{variety.region}</td>
                                    <td className="p-3 text-gray-600">{variety.maturity}</td>
                                    <td className="p-3 text-gray-600">{variety.yield}</td>
                                    <td className="p-3 text-gray-600">{variety.features}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      {tech.content.tips && (
                        <div>
                          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <AlertTriangle className="h-5 w-5 text-orange-500" />
                            注意事项
                          </h3>
                          <div className="bg-orange-50 p-4 rounded-xl">
                            <ul className="space-y-2">
                              {tech.content.tips.map((tip, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-700">
                                  <span className="text-orange-500 mt-1">⚠️</span>
                                  {tip}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {tech.content.nutrientDeficiency && (
                        <div>
                          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <Thermometer className="h-5 w-5 text-blue-500" />
                            营养缺素诊断
                          </h3>
                          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {tech.content.nutrientDeficiency.map((item, index) => (
                              <div key={index} className="p-4 bg-blue-50 rounded-xl">
                                <div className="font-bold text-blue-700 mb-2">{item.element}素缺乏</div>
                                <p className="text-sm text-gray-600 mb-2">症状：{item.symptom}</p>
                                <p className="text-sm font-medium text-blue-600">对策：{item.solution}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {tech.content.irrigation && (
                        <div>
                          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <Droplets className="h-5 w-5 text-cyan-500" />
                            灌溉参考
                          </h3>
                          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {tech.content.irrigation.map((item, index) => (
                              <div key={index} className="p-4 bg-cyan-50 rounded-xl text-center">
                                <div className="font-bold text-cyan-700 mb-1">{item.stage}</div>
                                <div className="text-2xl font-bold text-cyan-600 my-2">{item.amount}</div>
                                <div className="text-sm text-gray-600">{item.note}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {tech.content.diseases && (
                        <div>
                          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <Bug className="h-5 w-5 text-red-500" />
                            病虫害用药指南
                          </h3>
                          <div className="overflow-x-auto">
                            <table className="w-full">
                              <thead>
                                <tr className="bg-gradient-to-r from-red-100 to-orange-100">
                                  <th className="text-left p-3 font-bold">病虫害名称</th>
                                  <th className="text-left p-3 font-bold">推荐药剂</th>
                                </tr>
                              </thead>
                              <tbody>
                                {tech.content.diseases.map((disease, index) => (
                                  <tr key={index} className="border-b border-gray-100 hover:bg-red-50 transition-colors">
                                    <td className="p-3 font-medium text-red-700">{disease.name}</td>
                                    <td className="p-3 text-gray-600">{disease.control}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Learning Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">学习资源</h2>
            <p className="text-gray-600">更多技术视频和文档资料</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-rose-500 mx-auto mb-4 flex items-center justify-center">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">视频教程</h3>
                <p className="text-sm text-gray-600 mb-4">观看专家讲解视频</p>
                <Button variant="outline" className="w-full">
                  <Play className="h-4 w-4 mr-2" />
                  观看视频
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">技术文档</h3>
                <p className="text-sm text-gray-600 mb-4">下载详细技术资料</p>
                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  下载文档
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mx-auto mb-4 flex items-center justify-center">
                  <Bug className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">咨询专家</h3>
                <p className="text-sm text-gray-600 mb-4">一对一技术指导</p>
                <Button variant="outline" className="w-full">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  开始咨询
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
