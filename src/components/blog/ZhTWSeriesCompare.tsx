"use client";

export default function ZhTWSeriesCompare() {
  return (
    <article className="prose prose-invert max-w-none">
      <p className="text-lg text-spicy-gray/70 mb-8">
        K1？K2？K3？K4？第一次買 SPICYBEAN <strong>高爾夫桿頭套</strong>，四個系列到底怎麼選？這篇對比幫你3分鐘找到最適合你的那一款。SPICYBEAN全系列都提供<strong>一號木桿套、球道木桿套、鐵木桿套、推桿桿套</strong>四種規格，配齊一套球包桿套很輕鬆。
      </p>

      {/* K1 */}
      <section className="mb-12 p-6 rounded-sm border border-zinc-700 bg-gradient-to-br from-zinc-900 to-spicy-dark">
        <h2 className="text-2xl font-bold text-spicy-white mt-0">K1 黑色經典 — 百搭不出錯</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/k1/cover.jpg" alt="K1 Classic Black" className="rounded-sm w-full object-cover" loading="lazy" />
          <div>
            <p className="text-spicy-gray/80">黑色荔枝紋 PU 皮革，義大利工藝級用料。經典百搭，適合任何球包、任何風格。低調但有質感，是「不會錯」的首選。</p>
            <ul className="mt-4 space-y-1 text-sm text-spicy-gray/70">
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 價格：¥148（入門友好）</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 風格：經典 · 低調 · 百搭</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 適合：送禮、新手入門、喜歡簡約的人</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 搭配：任意球包顏色</li>
            </ul>
          </div>
        </div>
      </section>

      {/* K2 */}
      <section className="mb-12 p-6 rounded-sm border border-zinc-600 bg-gradient-to-br from-zinc-800 to-spicy-dark">
        <h2 className="text-2xl font-bold text-spicy-white mt-0">K2 白色愛心 — 球場「小心機」</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/k2/cover.jpg" alt="K2 White Heart" className="rounded-sm w-full object-cover" loading="lazy" />
          <div>
            <p className="text-spicy-gray/80">純白超纖 PU 配上標誌性愛心刺繡。韓式浪漫美學的代表，拍照出片率極高。女生和高球情侶的最愛。</p>
            <ul className="mt-4 space-y-1 text-sm text-spicy-gray/70">
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 價格：¥148（入門友好）</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 風格：浪漫 · 優雅 · 出片</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 適合：女生球友、情侶搭配、社群媒體分享族</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 注意：白色需要勤打理</li>
            </ul>
          </div>
        </div>
      </section>

      {/* K3 */}
      <section className="mb-12 p-6 rounded-sm border border-red-800/50 bg-gradient-to-br from-spicy-neon-dim/30 to-spicy-dark">
        <h2 className="text-2xl font-bold text-spicy-white mt-0">K3 辛紅 — 熱情滿桿</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/k3/cover.jpg" alt="K3 Warm Red" className="rounded-sm w-full object-cover" loading="lazy" />
          <div>
            <p className="text-spicy-gray/80">滿版辛紅印花，熱情奔放的設計風格。球場上一眼就能看到——如果你喜歡引人注目，K3 就是你的菜。</p>
            <ul className="mt-4 space-y-1 text-sm text-spicy-gray/70">
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 價格：¥148（入門友好）</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 風格：熱情 · 張揚 · 運動</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 適合：性格外向、喜歡亮色的球友</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 搭配：深色球包最佳</li>
            </ul>
          </div>
        </div>
      </section>

      {/* K4 */}
      <section className="mb-12 p-6 rounded-sm border border-violet-800/40 bg-gradient-to-br from-spicy-dark to-violet-950/30">
        <h2 className="text-2xl font-bold text-spicy-white mt-0">K4 賽博骷髏 — 旗艦暗黑美學</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/k4/cover.jpg" alt="K4 Neon Noir" className="rounded-sm w-full object-cover" loading="lazy" />
          <div>
            <p className="text-spicy-gray/80">碳纖維 PU 紋理配上骷髏刺繡，SPICYBEAN 的旗艦限定款。賽博龐克風格，暗夜霓虹主題。做工最複雜、用料最頂、辨識度最高。</p>
            <ul className="mt-4 space-y-1 text-sm text-spicy-gray/70">
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 價格：¥248（旗艦定位）</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 風格：暗黑 · 賽博 · 限量</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 適合：追求個性、不怕張揚的潮流球手</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 買它的人：K4 是目前銷量最高的系列</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quick comparison table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-spicy-white">快速對比一覽</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-spicy-grey/70 font-medium">對比項</th>
                <th className="text-left py-3 px-4 text-zinc-300 font-medium">K1 黑</th>
                <th className="text-left py-3 px-4 text-rose-200 font-medium">K2 白</th>
                <th className="text-left py-3 px-4 text-red-300 font-medium">K3 紅</th>
                <th className="text-left py-3 px-4 text-fuchsia-300 font-medium">K4 暗夜</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 text-spicy-gray">價格</td>
                <td className="py-3 px-4">¥148</td>
                <td className="py-3 px-4">¥148</td>
                <td className="py-3 px-4">¥148</td>
                <td className="py-3 px-4">¥248</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 text-spicy-gray">風格</td>
                <td className="py-3 px-4">經典百搭</td>
                <td className="py-3 px-4">浪漫優雅</td>
                <td className="py-3 px-4">熱情張揚</td>
                <td className="py-3 px-4">暗黑賽博</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 text-spicy-gray">推薦族群</td>
                <td className="py-3 px-4">所有人</td>
                <td className="py-3 px-4">女生/情侶</td>
                <td className="py-3 px-4">外向型</td>
                <td className="py-3 px-4">潮流個性族</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 text-spicy-gray">搭配難度</td>
                <td className="py-3 px-4">★☆☆ 極易</td>
                <td className="py-3 px-4">★★☆ 簡單</td>
                <td className="py-3 px-4">★★★ 有要求</td>
                <td className="py-3 px-4">★★★ 有要求</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 text-spicy-gray">拍照上鏡</td>
                <td className="py-3 px-4">★★★</td>
                <td className="py-3 px-4">★★★★★</td>
                <td className="py-3 px-4">★★★</td>
                <td className="py-3 px-4">★★★★</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12 p-6 rounded-sm bg-spicy-black/50 border border-white/5">
        <h2 className="text-xl font-bold text-spicy-white mt-0">👑 我的建議</h2>
        <ul className="mt-4 space-y-3 text-spicy-gray/80">
          <li><strong>入門第一隻選 K1 黑</strong> — 不會錯、不出錯</li>
          <li><strong>女生/送女朋友選 K2 白</strong> — 愛心刺繡誰不愛</li>
          <li><strong>球場要吸睛選 K3 紅</strong> — 一眼就被看到</li>
          <li><strong>想要最酷的直接上 K4</strong> — 旗艦款，買它的人最多</li>
          <li><strong>進階玩家配一套</strong> — 一號木+球道木+鐵木桿，混搭不同系列更有層次</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-spicy-white">準備好選了嗎？</h2>
        <p className="mt-2 text-spicy-gray/70">
          看對眼就別猶豫了——好的桿套，值得在球場上被看到。
        </p>
        <p className="mt-4 text-sm text-spicy-gray/60">
          👉 想了解更多？閱讀 <a href="/zh-TW/blog/spicybean-brand-guide" className="text-spicy-neon underline hover:no-underline">SPICYBEAN 品牌完整指南</a>
          {' · '}還有疑問？看 <a href="/zh-TW/blog/golf-headcover-faq" className="text-spicy-neon underline hover:no-underline">高爾夫桿套 FAQ</a>
        </p>
      </section>
    </article>
  );
}
