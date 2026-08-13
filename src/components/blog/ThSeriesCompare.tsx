"use client";

export default function ThSeriesCompare() {
  return (
    <article className="prose prose-invert max-w-none">
      <p className="text-lg text-spicy-gray/70 mb-8">
        K1, K2, K3 หรือ K4? ซื้อคัฟเวอร์หัวไม้ SPICYBEAN <strong>เป็นครั้งแรก</strong>? คู่มือเปรียบเทียบนี้ช่วยให้คุณหาคู่ที่ใช่ได้ใน 3 นาที ทุกซีรีส์ของ SPICYBEAN มีครบทั้ง <strong>คัฟเวอร์หน้าไม้ driver, คัฟเวอร์ไม้แฟร์เวย์, คัฟเวอร์ไฮบริด และคัฟเวอร์พัตเตอร์</strong> คุณจึงครอบคลุมทั้งถุงในสไตล์เดียว
      </p>

      {/* K1 */}
      <section className="mb-12 p-6 rounded-sm border border-zinc-700 bg-gradient-to-br from-zinc-900 to-spicy-dark">
        <h2 className="text-2xl font-bold text-spicy-white mt-0">K1 คลาสสิกแบล็ค — ถูกเสมอ</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/k1/cover.jpg" alt="K1 Classic Black" className="rounded-sm w-full object-cover" loading="lazy" />
          <div>
            <p className="text-spicy-gray/80">PU เลเธอร์หนังเม็ดสีดำแรงบันดาลใจจากอิตาลี คลาสสิก ใช้งานได้หลากหลาย — เข้ากับถุงกอล์ฟทุกใบ ทุกสไตล์ ตัวเลือกที่ "เลือกแล้วไม่ผิดแน่นอน"</p>
            <ul className="mt-4 space-y-1 text-sm text-spicy-gray/70">
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> ราคา: ฿729 (เข้าถึงง่าย)</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> สไตล์: คลาสสิก · รอบคอบ · หลากหลาย</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> เหมาะกับ: ของขวัญ มือใหม่ สายมินิมอล</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> เข้ากับ: ถุงกอล์ฟทุกสี</li>
            </ul>
          </div>
        </div>
      </section>

      {/* K2 */}
      <section className="mb-12 p-6 rounded-sm border border-zinc-600 bg-gradient-to-br from-zinc-800 to-spicy-dark">
        <h2 className="text-2xl font-bold text-spicy-white mt-0">K2 ขาวหัวใจ — เสน่ห์บนสนาม</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/k2/cover.jpg" alt="K2 White Heart" className="rounded-sm w-full object-cover" loading="lazy" />
          <div>
            <p className="text-spicy-gray/80">PU ไมโครไฟเบอร์สีขาวบริสุทธิ์พร้อมงานปักหัวใจซิกเนเจอร์ จุดสูงสุดของความงามโรแมนติกแบบเกาหลี ถ่ายรูปออกมาสวยมาก — เหมาะกับโซเชียลมีเดีย</p>
            <ul className="mt-4 space-y-1 text-sm text-spicy-gray/70">
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> ราคา: ฿729 (เข้าถึงง่าย)</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> สไตล์: โรแมนติก · สง่างาม · ถ่ายรูปสวย</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> เหมาะกับ: นักกอล์ฟหญิง คู่รัก ครีเอเตอร์</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> หมายเหตุ: สีขาวต้องดูแลบ่อยขึ้น</li>
            </ul>
          </div>
        </div>
      </section>

      {/* K3 */}
      <section className="mb-12 p-6 rounded-sm border border-red-800/50 bg-gradient-to-br from-spicy-neon-dim/30 to-spicy-dark">
        <h2 className="text-2xl font-bold text-spicy-white mt-0">K3 แดงอบอุ่น — สตีตเมนต์ที่กล้าหาญ</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/k3/cover.jpg" alt="K3 Warm Red" className="rounded-sm w-full object-cover" loading="lazy" />
          <div>
            <p className="text-spicy-gray/80">แดงอบอุ่นพิมพ์เต็มแผ่น กล้าหาญและเปี่ยมพลัง — ชิ้นที่ทำให้คุณโดดเด่นบนแฟร์เวย์</p>
            <ul className="mt-4 space-y-1 text-sm text-spicy-gray/70">
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> ราคา: ฿729 (เข้าถึงง่าย)</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> สไตล์: เปี่ยมพลัง · กล้าหาญ · สปอร์ต</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> เหมาะกับ: บุคลิกเปิดเผย สายรักสีสด</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> เข้ากันดีที่สุดกับ: ถุงโทนสีเข้ม</li>
            </ul>
          </div>
        </div>
      </section>

      {/* K4 */}
      <section className="mb-12 p-6 rounded-sm border border-violet-800/40 bg-gradient-to-br from-spicy-dark to-violet-950/30">
        <h2 className="text-2xl font-bold text-spicy-white mt-0">K4 Neon Noir — เรือธงสายดาร์ก</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/k4/cover.jpg" alt="K4 Neon Noir" className="rounded-sm w-full object-cover" loading="lazy" />
          <div>
            <p className="text-spicy-gray/80">พื้นผิว PU คาร์บอนไฟเบอร์พร้อมงานปักกะโหลก ลิมิเต็ดเรือธงของ SPICYBEAN ไซเบอร์พังค์พบนีออนนัวร์ งานฝีมือที่ซับซ้อนที่สุด เอกลักษณ์สูงสุด</p>
            <ul className="mt-4 space-y-1 text-sm text-spicy-gray/70">
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> ราคา: ฿1,229 (เรือธง)</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> สไตล์: ดาร์ก · ไซเบอร์ · ลิมิเต็ด</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> เหมาะกับ: ผู้กำหนดเทรนด์ สายสไตล์ไม่กลัวใคร</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> เกร็ดน่ารู้: K4 คือซีรีส์ที่ขายดีที่สุดของเรา</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quick comparison table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-spicy-white">เปรียบเทียบอย่างรวดเร็ว</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-spicy-grey/70 font-medium">หมวดหมู่</th>
                <th className="text-left py-3 px-4 text-zinc-300 font-medium">K1 แบล็ค</th>
                <th className="text-left py-3 px-4 text-rose-200 font-medium">K2 ไวท์</th>
                <th className="text-left py-3 px-4 text-red-300 font-medium">K3 เรด</th>
                <th className="text-left py-3 px-4 text-fuchsia-300 font-medium">K4 นีออน</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 text-spicy-gray">ราคา</td>
                <td className="py-3 px-4">฿729</td>
                <td className="py-3 px-4">฿729</td>
                <td className="py-3 px-4">฿729</td>
                <td className="py-3 px-4">฿1,229</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 text-spicy-gray">Vibe</td>
                <td className="py-3 px-4">คลาสสิก</td>
                <td className="py-3 px-4">โรแมนติก</td>
                <td className="py-3 px-4">กล้าหาญ</td>
                <td className="py-3 px-4">ดาร์กไซเบอร์</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 text-spicy-gray">เหมาะกับ</td>
                <td className="py-3 px-4">ทุกคน</td>
                <td className="py-3 px-4">หญิง/คู่รัก</td>
                <td className="py-3 px-4">สายเอ็กซ์โทรเวิร์ต</td>
                <td className="py-3 px-4">ผู้กำหนดเทรนด์</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 text-spicy-gray">ความง่ายในการแมตช์</td>
                <td className="py-3 px-4">★☆☆ ง่าย</td>
                <td className="py-3 px-4">★★☆ ปานกลาง</td>
                <td className="py-3 px-4">★★★ ต้องดูแล</td>
                <td className="py-3 px-4">★★★ ต้องดูแล</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 text-spicy-gray">ถ่ายรูปสวย</td>
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
        <h2 className="text-xl font-bold text-spicy-white mt-0">👑 คำแนะนำของเรา</h2>
        <ul className="mt-4 space-y-3 text-spicy-gray/80">
          <li><strong>คัฟเวอร์แรกของคุณ? เลือก K1 แบล็ค</strong> — ปลอดภัย ฉลาด และมีสไตล์</li>
          <li><strong>ซื้อให้เธอ? เลือก K2 ไวท์</strong> — งานปักหัวใจชนะใจทุกคน</li>
          <li><strong>อยากให้ทุกคนมองบนสนาม? เลือก K3 เรด</strong> — เป็นไปไม่ได้ที่จะมองไม่เห็น</li>
          <li><strong>อยากได้เท่ที่สุด? เลือก K4</strong> — เรือธงของเรา ขายดีที่สุด</li>
          <li><strong>มิกซ์แอนด์แมตช์เป็นเซ็ต</strong> — ซีรีส์ต่างกันบน driver, แฟร์เวย์ และไฮบริด เพิ่มบุคลิกให้เซ็ตของคุณ</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-spicy-white">พร้อมเลือกแล้วหรือยัง?</h2>
        <p className="mt-2 text-spicy-gray/70">
          คัฟเวอร์ที่ยอดเยี่ยมสมควรถูกมองเห็นบนสนาม
        </p>
        <p className="mt-4 text-sm text-spicy-gray/60">
          👉 อยากรู้เพิ่ม? อ่าน <a href="/th-TH/blog/spicybean-brand-guide" className="text-spicy-neon underline hover:no-underline">คู่มือแบรนด์ฉบับสมบูรณ์</a>
          {' · '}มีคำถาม? ดู <a href="/th-TH/blog/golf-headcover-faq" className="text-spicy-neon underline hover:no-underline">คัฟเวอร์ FAQ</a>
        </p>
      </section>
    </article>
  );
}
