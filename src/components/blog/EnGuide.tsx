export default function EnGuide() {
  return (
    <article className="prose prose-invert prose-lg max-w-none prose-headings:text-spicy-white prose-p:text-spicy-gray prose-a:text-spicy-red prose-strong:text-spicy-white prose-li:text-spicy-gray prose-h2:text-spicy-white prose-h3:text-spicy-white">
      <div className="mb-8 aspect-[21/9] rounded-lg bg-spicy-darkgray overflow-hidden">
        <picture>
          <source srcSet="/images/blog/headcover-guide-hero.webp" type="image/webp" />
          <img
            src="/images/blog/headcover-guide-hero.jpg"
            alt="Golf Headcover Buying Guide"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>

      <p className="lead text-xl text-spicy-white font-medium">
        Your golf headcover is more than just protection — it&apos;s the first thing people notice about your bag. But with so many materials and sizes out there, it&apos;s easy to get it wrong. This guide covers everything you need to know.
      </p>

      <h2>1. Materials: Which One Is Right for You?</h2>

      <h3>PU Leather</h3>
      <p>
        <strong>SPICYBEAN uses premium PU leather across all collections.</strong> It&apos;s the industry standard for golf headcovers, balancing looks, durability, and value.
      </p>
      <ul>
        <li><strong>Pros:</strong> Water-resistant, durable, soft touch, color-accurate, easy to clean</li>
        <li><strong>Cons:</strong> Less breathable than real leather (not a big deal for headcovers)</li>
        <li><strong>Best for:</strong> Golfers who play 2+ times per month and care about design</li>
      </ul>

      <h3>Knit / Fabric</h3>
      <ul>
        <li><strong>Pros:</strong> Cheap, lots of patterns</li>
        <li><strong>Cons:</strong> Not waterproof, pills easily, stretches out, minimal impact protection</li>
        <li><strong>Best for:</strong> Casual golfers on a budget</li>
      </ul>

      <h3>Genuine Leather</h3>
      <ul>
        <li><strong>Pros:</strong> Premium feel, extremely durable</li>
        <li><strong>Cons:</strong> Expensive ($50+), afraid of water, needs regular conditioning</li>
        <li><strong>Best for:</strong> Budget-no-object, minimalist aesthetic</li>
      </ul>

      <h2>2. Sizing: Which Headcover Fits Which Club?</h2>
      <p>The #1 mistake buyers make is getting the wrong size. Here&apos;s the golden rule: <strong>headcovers go by club type, not brand.</strong></p>

      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-spicy-darkgray">
            <th className="py-2 text-left">Club Type</th>
            <th className="py-2 text-left">Head Size</th>
            <th className="py-2 text-left">Headcover Label</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-spicy-darkgray">
            <td className="py-2">Driver</td>
            <td className="py-2">Largest, ~460cc</td>
            <td className="py-2">"Driver"</td>
          </tr>
          <tr className="border-b border-spicy-darkgray">
            <td className="py-2">Fairway Wood</td>
            <td className="py-2">Medium (3W, 5W, 7W)</td>
            <td className="py-2">"Fairway" / "Wood"</td>
          </tr>
          <tr className="border-b border-spicy-darkgray">
            <td className="py-2">Hybrid</td>
            <td className="py-2">Smaller</td>
            <td className="py-2">"Hybrid"</td>
          </tr>
          <tr className="border-b border-spicy-darkgray">
            <td className="py-2">Putter</td>
            <td className="py-2">Varies (blade, mallet, etc.)</td>
            <td className="py-2">"Putter" (check shape)</td>
          </tr>
        </tbody>
      </table>

      <p className="mt-4">
        <strong>SPICYBEAN Tip:</strong> All SPICYBEAN collections offer Driver, Fairway, Hybrid, and Putter sizes. Just match your club type.
      </p>

      <h2>3. Style Your Bag: The Art of Headcover Coordination</h2>
      <p>
        Golf is as much a social game as a sport. Your headcovers lined up in your bag say something about you before you even take a swing.
      </p>

      <h3>Three Styling Approaches</h3>
      <ul>
        <li><strong>Monochromatic:</strong> One series, same color. Clean, intentional.</li>
        <li><strong>Hero Piece:</strong> Statement driver cover (e.g. K4 Cyber Skull), rest matching basics.</li>
        <li><strong>Mashup:</strong> Mix colors/series but keep it under 3 colors max.</li>
      </ul>

      <h2>4. Why SPICYBEAN?</h2>
      <ul>
        <li><strong>🏆 Red Dot Award Design:</strong> K1/K2/K3 designed by DBWD, Korea&apos;s Red Dot champions</li>
        <li><strong>🧵 60,000-stitch double-layer embroidery:</strong> Precision in every detail</li>
        <li><strong>💧 Premium PU Leather:</strong> Water-resistant, durable, easy to clean</li>
        <li><strong>🇰🇷 Korean Design DNA:</strong> Not off-the-shelf molds — real design-driven brand</li>
      </ul>

      <div className="mt-12 rounded-lg border border-spicy-red/30 bg-spicy-red/5 p-8 text-center">
        <h3 className="text-xl font-bold text-spicy-white mb-2">Ready to upgrade your bag?</h3>
        <p className="text-spicy-gray mb-6">SPICYBEAN headcovers — Korean design, made for golfers who play with style.</p>
        <a
          href="/en"
          className="inline-block rounded bg-spicy-red px-8 py-3 text-sm font-semibold text-spicy-black no-underline hover:bg-spicy-red/90"
        >
          Browse Collection
        </a>
      </div>
    </article>
  );
}
