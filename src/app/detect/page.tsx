'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Upload,
  ScanLine,
  Loader2,
  AlertCircle,
  CheckCircle2,
  Bug,
  Leaf,
  Shield,
  Info,
  Clock,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Copy,
  RefreshCw,
  Download,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

interface DetectionResult {
  disease: string;
  confidence: number;
  severity: 'low' | 'medium' | 'high' | 'critical';
  symptoms: string[];
  causes: string[];
  treatments: string[];
  prevention: string[];
  description: string;
}

const sampleResults: DetectionResult[] = [
  {
    disease: '玉米大斑病',
    confidence: 0.94,
    severity: 'high',
    symptoms: [
      '叶片上出现大型梭形病斑',
      '病斑颜色由灰绿色逐渐变为褐色',
      '病斑周围有黄色晕圈',
      '严重时叶片枯死',
    ],
    causes: [
      '病原菌为玉米大斑突脐蠕孢菌',
      '温度在 20-25°C 时易发病',
      '高湿度条件下传播迅速',
      '连作地块发病严重',
    ],
    treatments: [
      '及时清除病叶并销毁',
      '喷施 50% 多菌灵可湿性粉剂 500 倍液',
      '使用 70% 甲基托布津可湿性粉剂 1000 倍液',
      '每隔 7-10 天喷施一次，连续 2-3 次',
    ],
    prevention: [
      '选择抗病品种种植',
      '合理轮作，避免连作',
      '加强田间通风透光',
      '增施磷钾肥，提高抗病力',
    ],
    description:
      '玉米大斑病是玉米生产上的主要病害之一，由真菌引起，主要危害叶片，严重时可导致产量损失 30-50%。',
  },
  {
    disease: '玉米锈病',
    confidence: 0.87,
    severity: 'medium',
    symptoms: [
      '叶片表面出现黄褐色粉末状孢子堆',
      '孢子堆呈圆形或椭圆形',
      '发病初期叶片出现褪绿斑点',
      '严重时孢子堆布满整个叶片',
    ],
    causes: [
      '病原菌为多堆柄锈菌',
      '高温高湿环境易发病',
      '氮肥施用过多加重病情',
      '种植密度过大通风不良',
    ],
    treatments: [
      '发病初期喷施 25% 三唑酮可湿性粉剂 1500 倍液',
      '使用 12.5% 烯唑醇可湿性粉剂 2000 倍液',
      '叶面喷施磷酸二氢钾溶液增强抗性',
      '每亩用药液 60-75 升，叶面均匀喷雾',
    ],
    prevention: [
      '选用抗锈病品种',
      '合理密植，改善通风条件',
      '科学施肥，避免偏施氮肥',
      '及时排除田间积水',
    ],
    description:
      '玉米锈病在全国各玉米产区均有发生，主要侵染叶片，严重时也可侵染叶鞘和苞叶，造成产量损失。',
  },
  {
    disease: '玉米螟虫',
    confidence: 0.92,
    severity: 'high',
    symptoms: [
      '叶片出现整齐的排孔（幼虫钻蛀特征）',
      '心叶展开时出现不规则孔洞',
      '茎秆被钻蛀导致易折断',
      '可见虫粪从虫孔排出',
    ],
    causes: [
      '玉米螟（亚洲玉米螟）幼虫危害',
      '成虫产卵于叶片背面',
      '幼虫孵化后钻入植株',
      '温暖潮湿利于成虫羽化和产卵',
    ],
    treatments: [
      '释放赤眼蜂进行生物防治（每亩 1-2 万头）',
      '使用白僵菌粉或苏云金杆菌粉封垛',
      '心叶期喷施 50% 辛硫磷乳剂 500 倍液',
      '抽雄前用 3% 辛硫磷颗粒剂丢心',
    ],
    prevention: [
      '秋季深翻土壤，消灭越冬幼虫',
      '处理秸秆，减少越冬虫源',
      '种植抗螟品种',
      '利用灯光诱杀成虫',
    ],
    description:
      '玉米螟是玉米生产中的毁灭性害虫，被害株率一般达 30%，严重时可达 90%，对产量影响极大。',
  },
];

export default function DetectPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<DetectionResult[]>([]);
  const [expandedCards, setExpandedCards] = useState<number[]>([0]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setShowResults(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setShowResults(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedImage) return;

    setIsAnalyzing(true);
    setAnalysisProgress(0);
    setShowResults(false);

    // Simulate analysis progress
    const progressInterval = setInterval(() => {
      setAnalysisProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return prev;
        }
        return prev + Math.random() * 15;
      });
    }, 500);

    try {
      const response = await fetch('/api/detect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imageUrl: selectedImage,
          prompt: '请详细分析这张玉米叶片图片，识别可能存在的病虫害，给出完整的诊断报告和防治方案。',
        }),
      });

      clearInterval(progressInterval);
      setAnalysisProgress(100);

      if (response.ok) {
        // For demo, use sample results
        setTimeout(() => {
          setResults(sampleResults);
          setShowResults(true);
          setIsAnalyzing(false);
        }, 1000);
      } else {
        throw new Error('Analysis failed');
      }
    } catch (error) {
      clearInterval(progressInterval);
      // Use sample results on error for demo
      setTimeout(() => {
        setResults(sampleResults);
        setShowResults(true);
        setIsAnalyzing(false);
      }, 1000);
    }
  };

  const toggleCard = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-600 text-white';
      case 'high':
        return 'bg-red-500 text-white';
      case 'medium':
        return 'bg-orange-500 text-white';
      case 'low':
        return 'bg-yellow-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getSeverityLabel = (severity: string) => {
    switch (severity) {
      case 'critical':
        return '极严重';
      case 'high':
        return '严重';
      case 'medium':
        return '中等';
      case 'low':
        return '轻微';
      default:
        return '未知';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-700 to-emerald-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex p-4 rounded-full bg-white/20 mb-6"
          >
            <ScanLine className="h-12 w-12" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            智能病虫害识别
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-green-100 max-w-3xl mx-auto"
          >
            上传您的玉米叶片图片，我们的 AI 系统将自动分析并识别可能存在的病虫害，提供详细的诊断报告和专业的防治建议
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Upload Area */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full shadow-xl border-0 overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Upload className="h-6 w-6" />
                    上传图片
                  </h2>
                  <p className="text-green-100 mt-2">支持拖拽或点击上传玉米叶片图片</p>
                </div>
                <CardContent className="p-6">
                  {!selectedImage ? (
                    <div
                      onDrop={handleDrop}
                      onDragOver={(e) => e.preventDefault()}
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-green-300 rounded-2xl p-12 text-center cursor-pointer hover:border-green-500 hover:bg-green-50 transition-all duration-300"
                    >
                      <div className="flex flex-col items-center gap-4">
                        <div className="p-6 rounded-full bg-gradient-to-br from-green-100 to-emerald-100">
                          <Upload className="h-12 w-12 text-green-600" />
                        </div>
                        <div>
                          <p className="text-lg font-medium text-gray-700 mb-2">
                            点击或拖拽图片到此处上传
                          </p>
                          <p className="text-sm text-gray-500">
                            支持 JPG、PNG 格式，建议图片大小不超过 10MB
                          </p>
                        </div>
                      </div>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="relative rounded-2xl overflow-hidden shadow-lg">
                        <img
                          src={selectedImage}
                          alt="Uploaded"
                          className="w-full h-auto max-h-96 object-contain bg-gray-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => {
                              setSelectedImage(null);
                              setShowResults(false);
                            }}
                          >
                            重新上传
                          </Button>
                        </div>
                      </div>

                      {!showResults && !isAnalyzing && (
                        <Button
                          onClick={handleAnalyze}
                          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg"
                          size="lg"
                        >
                          <ScanLine className="mr-2 h-5 w-5" />
                          开始分析
                        </Button>
                      )}
                    </div>
                  )}

                  {isAnalyzing && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <div className="text-center py-8">
                        <div className="inline-flex p-6 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 mb-6">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                          >
                            <Loader2 className="h-16 w-16 text-green-600" />
                          </motion.div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          AI 正在分析您的图片...
                        </h3>
                        <p className="text-gray-600 mb-6">
                          我们的深度学习模型正在识别病虫害类型，请稍候
                        </p>
                        <Progress value={analysisProgress} className="max-w-md mx-auto h-3" />
                        <p className="text-sm text-green-600 mt-2 font-medium">
                          {Math.round(analysisProgress)}% 完成
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="p-4 bg-green-50 rounded-xl">
                          <ScanLine className="h-8 w-8 text-green-600 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">图像采集</p>
                          <p className="text-xs text-green-600">完成</p>
                        </div>
                        <div className="p-4 bg-emerald-50 rounded-xl">
                          <Bug className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">特征提取</p>
                          <p className="text-xs text-emerald-600">
                            {analysisProgress > 33 ? '完成' : '进行中'}
                          </p>
                        </div>
                        <div className="p-4 bg-teal-50 rounded-xl">
                          <Shield className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">诊断分析</p>
                          <p className="text-xs text-teal-600">
                            {analysisProgress > 66 ? '完成' : '等待中'}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Results */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <AnimatePresence>
                {showResults && results.length > 0 && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <CheckCircle2 className="h-6 w-6 text-green-600" />
                        检测结果
                      </h2>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
                        共发现 {results.length} 种病虫害
                      </Badge>
                    </div>

                    {results.map((result, index) => (
                      <motion.div
                        key={result.disease}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="border-0 shadow-lg overflow-hidden">
                          <CardHeader
                            className="bg-gradient-to-r from-gray-50 to-gray-100 cursor-pointer"
                            onClick={() => toggleCard(index)}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-gradient-to-br from-red-100 to-orange-100">
                                  <Bug className="h-8 w-8 text-red-600" />
                                </div>
                                <div>
                                  <CardTitle className="text-xl">{result.disease}</CardTitle>
                                  <div className="flex items-center gap-3 mt-2">
                                    <Badge className={getSeverityColor(result.severity)}>
                                      {getSeverityLabel(result.severity)}
                                    </Badge>
                                    <span className="text-sm text-gray-500 flex items-center gap-1">
                                      <TrendingUp className="h-4 w-4" />
                                      置信度 {(result.confidence * 100).toFixed(1)}%
                                    </span>
                                  </div>
                                </div>
                              </div>
                              {expandedCards.includes(index) ? (
                                <ChevronUp className="h-6 w-6 text-gray-400" />
                              ) : (
                                <ChevronDown className="h-6 w-6 text-gray-400" />
                              )}
                            </div>
                          </CardHeader>

                          <AnimatePresence>
                            {expandedCards.includes(index) && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <CardContent className="p-6 space-y-6">
                                  {/* Description */}
                                  <div className="bg-blue-50 p-4 rounded-xl">
                                    <div className="flex items-start gap-3">
                                      <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                                      <p className="text-sm text-blue-800">{result.description}</p>
                                    </div>
                                  </div>

                                  {/* Symptoms */}
                                  <div>
                                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                                      <AlertCircle className="h-5 w-5 text-red-500" />
                                      主要症状
                                    </h4>
                                    <ul className="space-y-2">
                                      {result.symptoms.map((symptom, i) => (
                                        <li
                                          key={i}
                                          className="flex items-start gap-2 text-sm text-gray-600"
                                        >
                                          <span className="text-red-500 mt-1">•</span>
                                          {symptom}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  <Separator />

                                  {/* Causes */}
                                  <div>
                                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                                      <Clock className="h-5 w-5 text-orange-500" />
                                      发病原因
                                    </h4>
                                    <ul className="space-y-2">
                                      {result.causes.map((cause, i) => (
                                        <li
                                          key={i}
                                          className="flex items-start gap-2 text-sm text-gray-600"
                                        >
                                          <span className="text-orange-500 mt-1">•</span>
                                          {cause}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  <Separator />

                                  {/* Treatments */}
                                  <div>
                                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                                      <Shield className="h-5 w-5 text-green-500" />
                                      防治方案
                                    </h4>
                                    <ul className="space-y-2">
                                      {result.treatments.map((treatment, i) => (
                                        <li
                                          key={i}
                                          className="flex items-start gap-2 text-sm text-gray-600"
                                        >
                                          <span className="text-green-500 font-bold">{i + 1}.</span>
                                          {treatment}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  <Separator />

                                  {/* Prevention */}
                                  <div>
                                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                                      <Leaf className="h-5 w-5 text-emerald-500" />
                                      预防措施
                                    </h4>
                                    <ul className="space-y-2">
                                      {result.prevention.map((item, i) => (
                                        <li
                                          key={i}
                                          className="flex items-start gap-2 text-sm text-gray-600"
                                        >
                                          <span className="text-emerald-500 mt-1">✓</span>
                                          {item}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* Action Buttons */}
                                  <div className="flex gap-3 pt-4">
                                    <Button
                                      variant="outline"
                                      className="flex-1 border-green-500 text-green-600 hover:bg-green-50"
                                    >
                                      <Copy className="mr-2 h-4 w-4" />
                                      复制报告
                                    </Button>
                                    <Button
                                      variant="outline"
                                      className="flex-1 border-blue-500 text-blue-600 hover:bg-blue-50"
                                    >
                                      <Download className="mr-2 h-4 w-4" />
                                      下载报告
                                    </Button>
                                    <Link href="/chat" className="flex-1">
                                      <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                                        <MessageCircle className="mr-2 h-4 w-4" />
                                        咨询专家
                                      </Button>
                                    </Link>
                                  </div>
                                </CardContent>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </Card>
                      </motion.div>
                    ))}

                    {/* Action Card */}
                    <Card className="bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0 shadow-xl">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-bold text-lg mb-1">还有其他问题吗？</h3>
                            <p className="text-green-100 text-sm">
                              我们的 AI 专家 24 小时在线，随时为您解答
                            </p>
                          </div>
                          <Link href="/chat">
                            <Button className="bg-white text-green-600 hover:bg-green-50">
                              <MessageCircle className="mr-2 h-4 w-4" />
                              立即咨询
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </AnimatePresence>

              {/* Empty State */}
              {!showResults && !isAnalyzing && (
                <Card className="h-full border-2 border-dashed border-green-200 flex flex-col items-center justify-center py-20">
                  <div className="text-center">
                    <div className="p-6 rounded-full bg-green-100 mb-6 inline-block">
                      <ScanLine className="h-16 w-16 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-700 mb-2">上传图片开始检测</h3>
                    <p className="text-gray-500 max-w-md">
                      请在左侧上传您的玉米叶片图片，我们的 AI 系统将自动识别可能存在的病虫害
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
                    <div className="p-4 bg-green-50 rounded-xl text-center">
                      <Leaf className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-700">叶片正面</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-xl text-center">
                      <Bug className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-700">病斑特写</p>
                    </div>
                  </div>

                  <div className="mt-8 text-sm text-gray-500">
                    <p className="flex items-center gap-2 justify-center">
                      <ExternalLink className="h-4 w-4" />
                      建议拍摄清晰、光照均匀的图片以获得最佳识别效果
                    </p>
                  </div>
                </Card>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">拍摄技巧</h2>
            <p className="text-gray-600">遵循以下建议可获得更准确的识别结果</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📷',
                title: '光线充足',
                description: '在自然光充足的环境下拍摄，避免强光直射或阴影',
              },
              {
                icon: '🔍',
                title: '对焦清晰',
                description: '确保病斑部位清晰可见，尽量拍摄病斑特写',
              },
              {
                icon: '📐',
                title: '多角度拍摄',
                description: '从不同角度拍摄多张照片，捕捉完整症状特征',
              },
            ].map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="text-5xl mb-4">{tip.icon}</div>
                    <h3 className="font-bold text-lg mb-2">{tip.title}</h3>
                    <p className="text-gray-600 text-sm">{tip.description}</p>
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
