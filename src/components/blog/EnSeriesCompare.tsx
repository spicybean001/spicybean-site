"use client";

export default function EnSeriesCompare() {
  return (
    <article className="prose prose-invert max-w-none">
      <p className="text-lg text-spicy-gray/70 mb-8">
        K1, K2, K3, or K4? First time buying SPICYBEAN <strong>golf headcovers</strong>? This comparison guide helps you find your perfect match in 3 minutes. Every SPICYBEAN series comes in <strong>driver headcover, fairway wood headcover, hybrid headcover, and putter headcover</strong> sizes, so you can cover the whole bag in one style.
      </p>

      {/* K1 */}
      <section className="mb-12 p-6 rounded-sm border border-zinc-700 bg-gradient-to-br from-zinc-900 to-spicy-dark">
        <h2 className="text-2xl font-bold text-spicy-white mt-0">K1 Classic Black — Always Right</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/k1/cover.jpg" alt="K1 Classic Black" className="rounded-sm w-full object-cover" loading="lazy" />
          <div>
            <p className="text-spicy-gray/80">Italian-crafted black pebble grain PU leather. Classic, versatile — works with any golf bag, any style. The "can't go wrong" choice.</p>
            <ul className="mt-4 space-y-1 text-sm text-spicy-gray/70">
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> Price: $25 (entry-friendly)</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> Style: Classic · Understated · Versatile</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> Best for: Gifts, beginners, minimalists</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> Matches: Any bag color</li>
            </ul>
          </div>
        </div>
      </section>

      {/* K2 */}
      <section className="mb-12 p-6 rounded-sm border border-zinc-600 bg-gradient-to-br from-zinc-800 to-spicy-dark">
        <h2 className="text-2xl font-bold text-spicy-white mt-0">K2 White Heart — Course Charm</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/k2/cover.jpg" alt="K2 White Heart" className="rounded-sm w-full object-cover" loading="lazy" />
          <div>
            <p className="text-spicy-gray/80">Pure white microfiber PU with signature heart embroidery. The epitome of Korean romantic aesthetics. Highly photogenic — perfect for social media.</p>
            <ul className="mt-4 space-y-1 text-sm text-spicy-gray/70">
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> Price: $25 (entry-friendly)</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> Style: Romantic · Elegant · Photogenic</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> Best for: Female golfers, couples, content creators</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> Note: White needs more frequent care</li>
            </ul>
          </div>
        </div>
      </section>

      {/* K3 */}
      <section className="mb-12 p-6 rounded-sm border border-red-800/50 bg-gradient-to-br from-spicy-neon-dim/30 to-spicy-dark">
        <h2 className="text-2xl font-bold text-spicy-white mt-0">K3 Warm Red — Bold Statement</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/k3/cover.jpg" alt="K3 Warm Red" className="rounded-sm w-full object-cover" loading="lazy" />
          <div>
            <p className="text-spicy-gray/80">Full-coverage warm red print. Bold and passionate — the one that makes you stand out on the fairway.</p>
            <ul className="mt-4 space-y-1 text-sm text-spicy-gray/70">
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> Price: $25 (entry-friendly)</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> Style: Passionate · Bold · Sporty</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> Best for: Outgoing personalities, bright-color lovers</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> Pairs best with: Dark-colored bags</li>
            </ul>
          </div>
        </div>
      </section>

      {/* K4 */}
      <section className="mb-12 p-6 rounded-sm border border-violet-800/40 bg-gradient-to-br from-spicy-dark to-violet-950/30">
        <h2 className="text-2xl font-bold text-spicy-white mt-0">K4 Neon Noir — Dark Aesthetic Flagship</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/k4/cover.jpg" alt="K4 Neon Noir" className="rounded-sm w-full object-cover" loading="lazy" />
          <div>
            <p className="text-spicy-gray/80">Carbon fiber PU texture with skull embroidery. SPICYBEAN's flagship limited edition. Cyberpunk meets neon noir. The most complex craftsmanship, the highest recognition.</p>
            <ul className="mt-4 space-y-1 text-sm text-spicy-gray/70">
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> Price: $36 (flagship)</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> Style: Dark · Cyber · Limited</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> Best for: Trend-setters, fearless stylists</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> Fun fact: K4 is our best-selling series</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quick comparison table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-spicy-white">Quick Comparison</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-spicy-grey/70 font-medium">Category</th>
                <th className="text-left py-3 px-4 text-zinc-300 font-medium">K1 Black</th>
                <th className="text-left py-3 px-4 text-rose-200 font-medium">K2 White</th>
                <th className="text-left py-3 px-4 text-red-300 font-medium">K3 Red</th>
                <th className="text-left py-3 px-4 text-fuchsia-300 font-medium">K4 Neon</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 text-spicy-gray">Price</td>
                <td className="py-3 px-4">$25</td>
                <td className="py-3 px-4">$25</td>
                <td className="py-3 px-4">$25</td>
                <td className="py-3 px-4">$36</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 text-spicy-gray">Vibe</td>
                <td className="py-3 px-4">Classic</td>
                <td className="py-3 px-4">Romantic</td>
                <td className="py-3 px-4">Bold</td>
                <td className="py-3 px-4">Dark Cyber</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 text-spicy-gray">Best for</td>
                <td className="py-3 px-4">Everyone</td>
                <td className="py-3 px-4">Women/Couples</td>
                <td className="py-3 px-4">Extroverts</td>
                <td className="py-3 px-4">Trend-setters</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 text-spicy-gray">Match ease</td>
                <td className="py-3 px-4">★☆☆ Easy</td>
                <td className="py-3 px-4">★★☆ Moderate</td>
                <td className="py-3 px-4">★★★ Care needed</td>
                <td className="py-3 px-4">★★★ Care needed</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 text-spicy-gray">Photo-ready</td>
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
        <h2 className="text-xl font-bold text-spicy-white mt-0">👑 Our Recommendation</h2>
        <ul className="mt-4 space-y-3 text-spicy-gray/80">
          <li><strong>First headcover? Go K1 Black</strong> — safe, smart, stylish</li>
          <li><strong>Buying for her? Go K2 White</strong> — heart embroidery wins hearts</li>
          <li><strong>Want attention on course? Go K3 Red</strong> — impossible to miss</li>
          <li><strong>Want the coolest? Go K4</strong> — our flagship, our bestseller</li>
          <li><strong>Mix & match for a set</strong> — different series for driver, fairway, and hybrid adds character</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-spicy-white">Ready to choose?</h2>
        <p className="mt-2 text-spicy-gray/70">
          A great headcover deserves to be seen on the course.
        </p>
        <p className="mt-4 text-sm text-spicy-gray/60">
          👉 Want to learn more? Read our <a href="/en/blog/spicybean-brand-guide" className="text-spicy-neon underline hover:no-underline">Complete Brand Guide</a>
          {' · '}Have questions? See our <a href="/en/blog/golf-headcover-faq" className="text-spicy-neon underline hover:no-underline">Headcover FAQ</a>
        </p>
      </section>
    </article>
  );
}
