import { NextRequest, NextResponse } from 'next/server';
import { SearchClient, Config, HeaderUtils } from 'coze-coding-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json();

    if (!query) {
      return NextResponse.json({ error: '查询词不能为空' }, { status: 400 });
    }

    const customHeaders = HeaderUtils.extractForwardHeaders(request.headers);
    const config = new Config();
    const client = new SearchClient(config, customHeaders);

    // 搜索农业相关信息
    const searchQuery = `${query} 玉米种植 农业技术`;
    const response = await client.advancedSearch(searchQuery, {
      count: 10,
      needSummary: true,
      needUrl: true,
    });

    return NextResponse.json({
      summary: response.summary || '',
      results: response.web_items.map((item) => ({
        title: item.title,
        url: item.url,
        snippet: item.snippet,
        siteName: item.site_name,
        publishTime: item.publish_time,
      })),
    });
  } catch (error) {
    console.error('Search API Error:', error);
    return NextResponse.json({ error: '搜索服务暂时不可用' }, { status: 500 });
  }
}
