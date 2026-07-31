"use client";

export default function JaSeriesCompare() {
  return (
    <article className="prose prose-invert max-w-none">
      <p className="text-lg text-spicy-gray/70 mb-8">
        K1？K2？K3？K4？SPICYBEANのヘッドカバー、初めて買うならどのシリーズ？3分でわかる比較ガイド。
      </p>

      {/* K1 */}
      <section className="mb-12 p-6 rounded-sm border border-zinc-700 bg-gradient-to-br from-zinc-900 to-spicy-dark">
        <h2 className="text-2xl font-bold text-spicy-white mt-0">K1 ブラッククラシック — 間違いなし</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/k1/cover.jpg" alt="K1 Classic Black" className="rounded-sm w-full object-cover" loading="lazy" />
          <div>
            <p className="text-spicy-gray/80">イタリア製法ブラックPUレザー。どんなゴルフバッグにもマッチするクラシックなデザイン。</p>
            <ul className="mt-4 space-y-1 text-sm text-spicy-gray/70">
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 価格：¥3,600（エントリー）</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> スタイル：クラシック・シンプル</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> おすすめ：ギフト、初心者</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 合わせやすい：全色OK</li>
            </ul>
          </div>
        </div>
      </section>

      {/* K2 */}
      <section className="mb-12 p-6 rounded-sm border border-zinc-600 bg-gradient-to-br from-zinc-800 to-spicy-dark">
        <h2 className="text-2xl font-bold text-spicy-white mt-0">K2 ホワイトラブ — コースのロマンス</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/k2/cover.jpg" alt="K2 White Heart" className="rounded-sm w-full object-cover" loading="lazy" />
          <div>
            <p className="text-spicy-gray/80">純白マイクロファイバーPUとシグネチャーハート刺繍。写真映え抜群の韓国ロマンティックデザイン。</p>
            <ul className="mt-4 space-y-1 text-sm text-spicy-gray/70">
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 価格：¥3,600（エントリー）</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> スタイル：ロマンティック・エレガント</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> おすすめ：女性ゴルファー、カップル</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 注意：白はお手入れが必要</li>
            </ul>
          </div>
        </div>
      </section>

      {/* K3 */}
      <section className="mb-12 p-6 rounded-sm border border-red-800/50 bg-gradient-to-br from-spicy-neon-dim/30 to-spicy-dark">
        <h2 className="text-2xl font-bold text-spicy-white mt-0">K3 レッド — 情熱の一打</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/k3/cover.jpg" alt="K3 Warm Red" className="rounded-sm w-full object-cover" loading="lazy" />
          <div>
            <p className="text-spicy-gray/80">全面レッドプリント。コースで一番目立つこと間違いなし。</p>
            <ul className="mt-4 space-y-1 text-sm text-spicy-gray/70">
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 価格：¥3,600（エントリー）</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> スタイル：情熱的・大胆</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> おすすめ：目立ちたい方</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 相性：濃い色のバッグ</li>
            </ul>
          </div>
        </div>
      </section>

      {/* K4 */}
      <section className="mb-12 p-6 rounded-sm border border-violet-800/40 bg-gradient-to-br from-spicy-dark to-violet-950/30">
        <h2 className="text-2xl font-bold text-spicy-white mt-0">K4 サイバースカル — ダークエステティック</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/k4/cover.jpg" alt="K4 Neon Noir" className="rounded-sm w-full object-cover" loading="lazy" />
          <div>
            <p className="text-spicy-gray/80">カーボンファイバーPUにスカル刺繍。SPICYBEANのフラッグシップ限定モデル。</p>
            <ul className="mt-4 space-y-1 text-sm text-spicy-gray/70">
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 価格：¥6,000（フラッグシップ）</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> スタイル：ダーク・サイバー・限定</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> おすすめ：個性派ゴルファー</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> ベストセラーシリーズ</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-spicy-white">一覧比較</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-spicy-grey/70 font-medium">項目</th>
                <th className="text-left py-3 px-4 text-zinc-300 font-medium">K1 黒</th>
                <th className="text-left py-3 px-4 text-rose-200 font-medium">K2 白</th>
                <th className="text-left py-3 px-4 text-red-300 font-medium">K3 赤</th>
                <th className="text-left py-3 px-4 text-fuchsia-300 font-medium">K4 夜</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 text-spicy-gray">価格</td>
                <td className="py-3 px-4">¥3,600</td>
                <td className="py-3 px-4">¥3,600</td>
                <td className="py-3 px-4">¥3,600</td>
                <td className="py-3 px-4">¥6,000</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 text-spicy-gray">雰囲気</td>
                <td className="py-3 px-4">クラシック</td>
                <td className="py-3 px-4">ロマンティック</td>
                <td className="py-3 px-4">大胆</td>
                <td className="py-3 px-4">ダークサイバー</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12 p-6 rounded-sm bg-spicy-black/50 border border-white/5">
        <h2 className="text-xl font-bold text-spicy-white mt-0">👑 おすすめ</h2>
        <ul className="mt-4 space-y-3 text-spicy-gray/80">
          <li><strong>初めてならK1ブラック</strong> — 間違いなし</li>
          <li><strong>彼女へのプレゼントはK2ホワイト</strong> — ハート刺繍が心を掴む</li>
          <li><strong>目立ちたいならK3レッド</strong> — 見逃せない一色</li>
          <li><strong>一番クールならK4</strong> — フラッグシップ、ベストセラー</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-spicy-white">選べましたか？</h2>
        <p className="mt-2 text-spicy-gray/70">
          良いヘッドカバーは、コースで輝きます。
        </p>
        <p className="mt-4 text-sm text-spicy-gray/60">
          👉 詳しくは<a href="/ja-JP/blog/spicybean-brand-guide" className="text-spicy-neon underline hover:no-underline">SPICYBEANブランドガイド</a>
          {' · '}質問は<a href="/ja-JP/blog/golf-headcover-faq" className="text-spicy-neon underline hover:no-underline">ヘッドカバーFAQ</a>へ
        </p>
      </section>
    </article>
  );
}
