'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingBag,
  Package,
  Truck,
  Shield,
  Star,
  Search,
  Filter,
  ShoppingCart,
  Heart,
  ChevronRight,
  CheckCircle2,
  Leaf,
  Sprout,
  Bug,
  Droplets,
  Wheat,
  Sun,
  Ruler,
  Award,
  TrendingUp,
  TrendingDown,
  MapPin,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const categories = [
  { id: 'seed', name: '种子种苗', icon: Sprout, count: 256 },
  { id: 'fertilizer', name: '肥料农药', icon: Leaf, count: 384 },
  { id: 'machine', name: '农机农具', icon: Truck, count: 128 },
  { id: 'film', name: '农膜地膜', icon: Sun, count: 64 },
];

const products = [
  {
    id: 1,
    name: '郑单958 玉米种子',
    category: 'seed',
    brand: '河南农科院',
    price: 45,
    unit: '元/袋',
    specification: '5000粒/袋',
    rating: 4.9,
    sales: 12580,
    image: '🌽',
    featured: true,
    tags: ['优质高产', '抗病性强', '适应性强'],
    description: '郑单958是高产稳产、适应性广的玉米新品种，出籽率高，品质优良，适合黄淮海夏播玉米区种植。',
  },
  {
    id: 2,
    name: '先玉335 玉米种子',
    category: 'seed',
    brand: '敦煌种业',
    price: 55,
    unit: '元/袋',
    specification: '4500粒/袋',
    rating: 4.8,
    sales: 8960,
    image: '🌽',
    featured: true,
    tags: ['品质优良', '脱水快', '抗倒伏'],
    description: '先玉335籽粒品质优、脱水快，适合机械化收获，抗倒伏能力强，稳产性好。',
  },
  {
    id: 3,
    name: '复合肥 15-15-15',
    category: 'fertilizer',
    brand: '云天化',
    price: 180,
    unit: '元/袋',
    specification: '50kg/袋',
    rating: 4.7,
    sales: 15600,
    image: '🌱',
    featured: false,
    tags: ['氮磷钾平衡', '利用率高'],
    description: '氮磷钾含量均衡的复合肥，适用于玉米底肥和追肥，水溶性好，利用率高。',
  },
  {
    id: 4,
    name: '尿素 46%氮',
    category: 'fertilizer',
    brand: '心连心',
    price: 95,
    unit: '元/袋',
    specification: '40kg/袋',
    rating: 4.6,
    sales: 23400,
    image: '🌿',
    featured: false,
    tags: ['速效氮肥', '利用率高'],
    description: '高浓度颗粒尿素，含氮量46%，肥效快，适用于玉米追肥。',
  },
  {
    id: 5,
    name: '玉米除草剂套装',
    category: 'fertilizer',
    brand: '拜耳',
    price: 35,
    unit: '元/套',
    specification: '一套/亩',
    rating: 4.8,
    sales: 6780,
    image: '🧴',
    featured: false,
    tags: ['除草彻底', '安全性高'],
    description: '玉米专用苗后除草剂组合，除草效果好，对玉米安全，一套一亩地。',
  },
  {
    id: 6,
    name: '背负式喷雾器',
    category: 'machine',
    brand: '富士特',
    price: 280,
    unit: '元/台',
    specification: '18L',
    rating: 4.5,
    sales: 3420,
    image: '🔫',
    featured: false,
    tags: ['做工精良', '使用方便'],
    description: '18升大容量背负式喷雾器，雾化效果好，适合田间打药使用。',
  },
  {
    id: 7,
    name: '黑色地膜 0.01mm',
    category: 'film',
    brand: '科恒',
    price: 120,
    unit: '元/卷',
    specification: '10kg/卷',
    rating: 4.4,
    sales: 4560,
    image: '🛤️',
    featured: false,
    tags: ['保温保墒', '除草效果好'],
    description: '黑色地膜，厚度0.01mm，具有保温保墒、抑制杂草的作用。',
  },
  {
    id: 8,
    name: '玉米控释肥',
    category: 'fertilizer',
    brand: '金正大',
    price: 220,
    unit: '元/袋',
    specification: '40kg/袋',
    rating: 4.9,
    sales: 8900,
    image: '🧪',
    featured: true,
    tags: ['省工省时', '持效期长'],
    description: '智能控释玉米专用肥，一次施肥，整季有效，省工省时，提高肥料利用率。',
  },
];

const suppliers = [
  {
    name: '中农立华农资超市',
    rating: 4.9,
    products: 1256,
    location: '北京市丰台区',
    certified: true,
  },
  {
    name: '云天化农业服务中心',
    rating: 4.8,
    products: 856,
    location: '云南省昆明市',
    certified: true,
  },
  {
    name: '金正大农化服务站',
    rating: 4.7,
    products: 642,
    location: '山东省临沭县',
    certified: true,
  },
];

const priceTrends = [
  { month: '1月', seed: 42, fertilizer: 165, pesticide: 28 },
  { month: '2月', seed: 43, fertilizer: 168, pesticide: 29 },
  { month: '3月', seed: 45, fertilizer: 172, pesticide: 30 },
  { month: '4月', seed: 46, fertilizer: 175, pesticide: 32 },
  { month: '5月', seed: 45, fertilizer: 180, pesticide: 31 },
];

export default function MarketPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('sales');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'sales') return b.sales - a.sales;
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-amber-700 via-orange-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex p-4 rounded-full bg-white/20 mb-6"
          >
            <ShoppingBag className="h-14 w-14" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            农资商城
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-amber-100 max-w-3xl mx-auto"
          >
            放心农资，品质保障。从种子化肥到农药农膜，一站式采购，省心又省钱
          </motion.p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="搜索商品或品牌..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 text-lg border-2 border-gray-200 focus:border-amber-500 rounded-xl"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('all')}
                className={
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600'
                    : ''
                }
              >
                全部
              </Button>
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-amber-600 to-orange-600'
                      : ''
                  }
                >
                  <cat.icon className="h-4 w-4 mr-2" />
                  {cat.name}
                </Button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-amber-500"
            >
              <option value="sales">销量优先</option>
              <option value="price-low">价格从低到高</option>
              <option value="price-high">价格从高到低</option>
              <option value="rating">评分优先</option>
            </select>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Categories */}
              <Card className="border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    商品分类
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    {categories.map((cat) => {
                      const Icon = cat.icon;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedCategory(cat.id)}
                          className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                            selectedCategory === cat.id
                              ? 'bg-amber-100 text-amber-700'
                              : 'hover:bg-gray-100'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Icon className="h-5 w-5" />
                            <span className="font-medium">{cat.name}</span>
                          </div>
                          <Badge variant="outline">{cat.count}</Badge>
                        </button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Price Trends */}
              <Card className="border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    价格走势
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">种子价格指数</div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-green-600">45.2</span>
                        <Badge className="bg-red-100 text-red-700">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          +2.1%
                        </Badge>
                      </div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">化肥价格指数</div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-blue-600">178.5</span>
                        <Badge className="bg-green-100 text-green-700">
                          <TrendingDown className="h-3 w-3 mr-1" />
                          -0.8%
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Top Suppliers */}
              <Card className="border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    推荐供应商
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    {suppliers.map((supplier, index) => (
                      <div
                        key={supplier.name}
                        className="p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">{supplier.name}</span>
                            {supplier.certified && (
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                            )}
                          </div>
                          <div className="flex items-center gap-1 text-yellow-500">
                            <Star className="h-4 w-4 fill-current" />
                            {supplier.rating}
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{supplier.products} 件商品</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {supplier.location}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Product Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">
                  共找到 <span className="font-bold text-amber-600">{sortedProducts.length}</span> 件商品
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="border-0 shadow-lg overflow-hidden hover:shadow-2xl transition-all h-full">
                      {product.featured && (
                        <div className="absolute top-2 right-2 z-10">
                          <Badge className="bg-red-500 text-white">精选</Badge>
                        </div>
                      )}
                      <div className="h-40 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center relative">
                        <span className="text-7xl">{product.image}</span>
                      </div>
                      <CardContent className="p-4 flex flex-col flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">{product.brand}</Badge>
                          {product.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                          ))}
                        </div>
                        <h3 className="font-bold text-lg mb-2 line-clamp-1">{product.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{product.specification}</p>
                        <p className="text-xs text-gray-500 mb-4 line-clamp-2 flex-1">{product.description}</p>
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <span className="text-2xl font-bold text-amber-600">{product.price}</span>
                            <span className="text-sm text-gray-500">/{product.unit}</span>
                          </div>
                          <div className="flex items-center gap-1 text-yellow-500">
                            <Star className="h-4 w-4 fill-current" />
                            <span className="text-sm font-medium">{product.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                          <span>销量 {product.sales.toLocaleString()}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            立即购买
                          </Button>
                          <Button variant="outline" size="icon">
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">为什么选择我们</h2>
            <p className="text-gray-600">品质保障，服务至上</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: '正品保障', desc: '所有商品均来自正规渠道，品质有保证' },
              { icon: Truck, title: '送货上门', desc: '全国大部分地区支持送货到镇' },
              { icon: Leaf, title: '技术支持', desc: '提供专业的种植技术指导' },
              { icon: MessageCircle, title: '售后无忧', desc: '7x24小时客服在线，随时解答' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full border-0 shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 mx-auto mb-4 flex items-center justify-center">
                      <item.icon className="h-8 w-8 text-amber-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
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
