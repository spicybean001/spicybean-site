"use client";

export default function ZhCNSeriesCompare() {
  return (
    <article className="prose prose-invert max-w-none">
      <p className="text-lg text-spicy-gray/70 mb-8">
        K1？K2？K3？K4？第一次买 SPICYBEAN 杆套，四个系列到底怎么选？这篇对比帮你3分钟找到最适合你的那一款。
      </p>

      {/* K1 */}
      <section className="mb-12 p-6 rounded-sm border border-zinc-700 bg-gradient-to-br from-zinc-900 to-spicy-dark">
        <h2 className="text-2xl font-bold text-spicy-white mt-0">K1 黑色经典 — 百搭不出错</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/k1/cover.jpg" alt="K1 Classic Black" className="rounded-sm w-full object-cover" loading="lazy" />
          <div>
            <p className="text-spicy-gray/80">黑色荔枝纹 PU 皮革，意大利工艺级用料。经典百搭，适合任何球包、任何风格。低调但有质感，是「不会错」的首选。</p>
            <ul className="mt-4 space-y-1 text-sm text-spicy-gray/70">
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 价格：¥148（入门友好）</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 风格：经典 · 低调 · 百搭</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 适合：送礼、新手入门、喜欢简约的人</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 搭配：任意球包颜色</li>
            </ul>
          </div>
        </div>
      </section>

      {/* K2 */}
      <section className="mb-12 p-6 rounded-sm border border-zinc-600 bg-gradient-to-br from-zinc-800 to-spicy-dark">
        <h2 className="text-2xl font-bold text-spicy-white mt-0">K2 白色爱心 — 球场「小心机」</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/k2/cover.jpg" alt="K2 White Heart" className="rounded-sm w-full object-cover" loading="lazy" />
          <div>
            <p className="text-spicy-gray/80">纯白超纤 PU 配上标志性爱心刺绣。韩式浪漫美学的代表，拍照出片率极高。女生和高球情侣的最爱。</p>
            <ul className="mt-4 space-y-1 text-sm text-spicy-gray/70">
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 价格：¥148（入门友好）</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 风格：浪漫 · 优雅 · 出片</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 适合：女生球友、情侣搭配、社交媒体分享党</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 注意：白色需要勤打理</li>
            </ul>
          </div>
        </div>
      </section>

      {/* K3 */}
      <section className="mb-12 p-6 rounded-sm border border-red-800/50 bg-gradient-to-br from-spicy-neon-dim/30 to-spicy-dark">
        <h2 className="text-2xl font-bold text-spicy-white mt-0">K3 辛红 — 热情满杆</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/k3/cover.jpg" alt="K3 Warm Red" className="rounded-sm w-full object-cover" loading="lazy" />
          <div>
            <p className="text-spicy-gray/80">满版辛红印花，热情奔放的设计风格。球场上一眼就能看到——如果你喜欢引人注目，K3 就是你的菜。</p>
            <ul className="mt-4 space-y-1 text-sm text-spicy-gray/70">
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 价格：¥148（入门友好）</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 风格：热情 · 张扬 · 运动</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 适合：性格外向、喜欢亮色的球友</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 搭配：深色球包最佳</li>
            </ul>
          </div>
        </div>
      </section>

      {/* K4 */}
      <section className="mb-12 p-6 rounded-sm border border-violet-800/40 bg-gradient-to-br from-spicy-dark to-violet-950/30">
        <h2 className="text-2xl font-bold text-spicy-white mt-0">K4 赛博骷髅 — 旗舰暗黑美学</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/k4/cover.jpg" alt="K4 Neon Noir" className="rounded-sm w-full object-cover" loading="lazy" />
          <div>
            <p className="text-spicy-gray/80">碳纤维 PU 纹理配上骷髅刺绣，SPICYBEAN 的旗舰限定款。赛博朋克风格，暗夜霓虹主题。做工最复杂、用料最顶、辨识度最高。</p>
            <ul className="mt-4 space-y-1 text-sm text-spicy-gray/70">
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 价格：¥248（旗舰定位）</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 风格：暗黑 · 赛博 · 限量</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 适合：追求个性、不怕张扬的潮流球手</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 买它的人：K4 是目前销量最高的系列</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quick comparison table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-spicy-white">快速对比一览</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-spicy-grey/70 font-medium">对比项</th>
                <th className="text-left py-3 px-4 text-zinc-300 font-medium">K1 黑</th>
                <th className="text-left py-3 px-4 text-rose-200 font-medium">K2 白</th>
                <th className="text-left py-3 px-4 text-red-300 font-medium">K3 红</th>
                <th className="text-left py-3 px-4 text-fuchsia-300 font-medium">K4 暗夜</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 text-spicy-gray">价格</td>
                <td className="py-3 px-4">¥148</td>
                <td className="py-3 px-4">¥148</td>
                <td className="py-3 px-4">¥148</td>
                <td className="py-3 px-4">¥248</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 text-spicy-gray">风格</td>
                <td className="py-3 px-4">经典百搭</td>
                <td className="py-3 px-4">浪漫优雅</td>
                <td className="py-3 px-4">热情张扬</td>
                <td className="py-3 px-4">暗黑赛博</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 text-spicy-gray">推荐人群</td>
                <td className="py-3 px-4">所有人</td>
                <td className="py-3 px-4">女生/情侣</td>
                <td className="py-3 px-4">外向型</td>
                <td className="py-3 px-4">潮流个性党</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 text-spicy-gray">搭配难度</td>
                <td className="py-3 px-4">★☆☆ 极易</td>
                <td className="py-3 px-4">★★☆ 简单</td>
                <td className="py-3 px-4">★★★ 有要求</td>
                <td className="py-3 px-4">★★★ 有要求</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 text-spicy-gray">拍照上镜</td>
                <td className="py-3 px-4">★★★</td>
                <td className="py-3 px-4">★★★★★</td>
                <td className="py-3 px-4">★★★</td>
                <td className="py-3 px-4">★★★★</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-spicy-gray">购买热度</td>
                <td className="py-3 px-4">🔥🔥</td>
                <td className="py-3 px-4">🔥🔥🔥</td>
                <td className="py-3 px-4">🔥🔥</td>
                <td className="py-3 px-4">🔥🔥🔥🔥🔥</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12 p-6 rounded-sm bg-spicy-black/50 border border-white/5">
        <h2 className="text-xl font-bold text-spicy-white mt-0">👑 我的建议</h2>
        <ul className="mt-4 space-y-3 text-spicy-gray/80">
          <li><strong>入门第一只选 K1 黑</strong> — 不会错、不出错</li>
          <li><strong>女生/送女朋友选 K2 白</strong> — 爱心刺绣谁不爱</li>
          <li><strong>球场要吸睛选 K3 红</strong> — 一眼就被看到</li>
          <li><strong>想要最酷的直接上 K4</strong> — 旗舰款，买它的人最多</li>
          <li><strong>进阶玩家配一套</strong> — 一号木+球道木+铁木杆，混搭不同系列更有层次</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-spicy-white">准备好选了吗？</h2>
        <p className="mt-2 text-spicy-gray/70">
          看对眼就别犹豫了——好的杆套，值得在球场上被看到。
        </p>
        <p className="mt-4 text-sm text-spicy-gray/60">
          👉 想了解更多？阅读 <a href="/zh-CN/blog/spicybean-brand-guide" className="text-spicy-neon underline hover:no-underline">SPICYBEAN 品牌完整指南</a>
          {' · '}还有疑问？看 <a href="/zh-CN/blog/golf-headcover-faq" className="text-spicy-neon underline hover:no-underline">高尔夫杆套 FAQ</a>
        </p>
      </section>
    </article>
  );
}
