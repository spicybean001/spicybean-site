export default function ThGuide() {
  return (
    <article className="prose prose-invert prose-lg max-w-none prose-headings:text-spicy-white prose-p:text-spicy-gray prose-a:text-spicy-red prose-strong:text-spicy-white prose-li:text-spicy-gray prose-h2:text-spicy-white prose-h3:text-spicy-white">
      <div className="mb-8 aspect-[4/3] rounded-lg bg-spicy-darkgray overflow-hidden">
        <picture>
          <source srcSet="/images/blog/headcover-guide-hero.webp" type="image/webp" />
          <img
            src="/images/blog/headcover-guide-hero.jpg"
            alt="คู่มือเลือกซื้อคัฟเวอร์หัวไม้กอล์ฟ"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>

      <p className="lead text-xl text-spicy-white font-medium">
        คัฟเวอร์หัวไม้กอล์ฟไม่ใช่แค่การปกป้อง — มันคือสิ่งแรกที่ทุกคนเห็นบนถุงกอล์ฟของคุณ แต่ด้วยวัสดุและไซส์มากมาย การเลือกผิดพลาดก็เกิดขึ้นได้ง่าย คู่มือนี้ครอบคลุมทุกอย่างที่คุณต้องรู้
      </p>

      <h2>1. วัสดุ: แบบไหนเหมาะกับคุณ?</h2>

      <h3>PU เลเธอร์</h3>
      <p>
        <strong>SPICYBEAN ใช้ PU เลเธอร์เกรดพรีเมียมในทุกคอลเลกชัน</strong> เป็นวัสดุมาตรฐานของอุตสาหกรรมคัฟเวอร์หัวไม้กอล์ฟ ที่ลงตัวทั้งรูปลักษณ์ ความทนทาน และคุ้มค่า
      </p>
      <ul>
        <li><strong>ข้อดี:</strong> กันน้ำ ทนทาน สัมผัสนุ่ม สีแม่นยำ ทำความสะอาดง่าย</li>
        <li><strong>ข้อเสีย:</strong> ระบายอากาศน้อยกว่าหนังแท้ (ไม่ใช่ปัญหาใหญ่สำหรับคัฟเวอร์)</li>
        <li><strong>เหมาะสำหรับ:</strong> นักกอล์ฟที่เล่นเดือนละ 2+ รอบและใส่ใจดีไซน์</li>
      </ul>

      <h3>ผ้าถัก / Fabric</h3>
      <ul>
        <li><strong>ข้อดี:</strong> ราคาถูก มีลวดลายหลากหลาย</li>
        <li><strong>ข้อเสีย:</strong> ไม่กันน้ำ เป็นขุยง่าย ยืดเสียทรง กันกระแทกได้น้อย</li>
        <li><strong>เหมาะสำหรับ:</strong> นักกอล์ฟสายประหยัด</li>
      </ul>

      <h3>หนังแท้</h3>
      <ul>
        <li><strong>ข้อดี:</strong> รู้สึกพรีเมียม ทนทานมาก</li>
        <li><strong>ข้อเสีย:</strong> ราคาแพง ($50+) กลัวน้ำ ต้องบำรุงเป็นประจำ</li>
        <li><strong>เหมาะสำหรับ:</strong> งบไม่จำกัด ชอบสไตล์เรียบหรู</li>
      </ul>

      <h2>2. ไซส์: คัฟเวอร์แบบไหนใส่ไม้ชนิดไหน?</h2>
      <p>ความผิดพลาดอันดับ 1 ของผู้ซื้อคือเลือกไซส์ผิด กฎทองคือ: <strong>คัฟเวอร์เลือกตามประเภทไม้ ไม่ใช่ตามแบรนด์</strong></p>

      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-spicy-darkgray">
            <th className="py-2 text-left">ประเภทไม้</th>
            <th className="py-2 text-left">ขนาดหัวไม้</th>
            <th className="py-2 text-left">ฉลากคัฟเวอร์</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-spicy-darkgray">
            <td className="py-2">Driver</td>
            <td className="py-2">ใหญ่สุด ~460cc</td>
            <td className="py-2">"Driver"</td>
          </tr>
          <tr className="border-b border-spicy-darkgray">
            <td className="py-2">ไม้แฟร์เวย์</td>
            <td className="py-2">ขนาดกลาง (3W, 5W, 7W)</td>
            <td className="py-2">"Fairway" / "Wood"</td>
          </tr>
          <tr className="border-b border-spicy-darkgray">
            <td className="py-2">ไฮบริด</td>
            <td className="py-2">ขนาดเล็ก</td>
            <td className="py-2">"Hybrid"</td>
          </tr>
          <tr className="border-b border-spicy-darkgray">
            <td className="py-2">พัตเตอร์</td>
            <td className="py-2">ขึ้นอยู่กับทรง (blade, mallet ฯลฯ)</td>
            <td className="py-2">"Putter" (เช็คทรง)</td>
          </tr>
        </tbody>
      </table>

      <p className="mt-4">
        <strong>เคล็ดลับ SPICYBEAN:</strong> ทุกคอลเลกชันของ SPICYBEAN มีครบทั้ง Driver, Fairway, Hybrid และ Putter — ครอบคลุมทั้งถุงกอล์ฟของคุณในสไตล์เดียว เพียงจับคู่ตามประเภทไม้ของคุณ
      </p>

      <h2>3. Golf Headcover กับ Golf Club Cover: สิ่งเดียวกัน ชื่อต่างกัน</h2>
      <p>
        การค้นหาสินค้าที่ถูกต้องอาจสับสนเพราะสิ่งเดียวกันมีหลายชื่อ: <strong>golf headcover</strong>, <strong>golf club cover</strong>, <strong>golf club headcover</strong> หรือ <strong>golf club head cover</strong> ทั้งหมดหมายถึงอุปกรณ์ชิ้นเดียวกัน — ปลอกป้องกันหัวไม้กอล์ฟ ในภาษาเกาหลีคือ <strong>골프 헤드커버</strong> และภาษาญี่ปุ่นคือ <strong>ゴルフヘッドカバー</strong>
      </p>
      <p>
        สิ่งที่สำคัญจริงๆ คือการจับคู่คัฟเวอร์ให้เข้ากับไม้ของคุณ: <strong>คัฟเวอร์หน้าไม้ driver</strong> ใส่หัวไม้ที่ใหญ่ที่สุด (~460cc), <strong>คัฟเวอร์พัตเตอร์</strong> ต้องตรงกับทรงพัตเตอร์ของคุณ (blade หรือ mallet) และ <strong>คัฟเวอร์ไม้แฟร์เวย์</strong> กับ <strong>คัฟเวอร์ไฮบริด</strong> อยู่ระหว่างกลาง SPICYBEAN ครอบคลุมไม้ทุกประเภทในเซ็ตเดียวกันที่ลงตัว
      </p>

      <h2>4. สไตล์ถุงกอล์ฟ: ศิลปะการจัดเรียงคัฟเวอร์</h2>
      <p>
        กอล์ฟเป็นทั้งกีฬาและสังคม คัฟเวอร์ที่เรียงอยู่บนถุงกอล์ฟของคุณบอกอะไรเกี่ยวกับตัวคุณก่อนจะสวิงด้วยซ้ำ
      </p>

      <h3>สามแนวทางแต่งสไตล์</h3>
      <ul>
        <li><strong>โมโนโครม:</strong> ใช้ซีรีส์เดียว สีเดียวกัน สะอาดตาและตั้งใจ</li>
        <li><strong>ไอเท็มเด่น:</strong> คัฟเวอร์หน้าไม้สตีตเมนต์ (เช่น K4 Cyber Skull) ที่เหลือเล่นสีพื้นให้เข้ากัน</li>
        <li><strong>มิกซ์:</strong> ผสมสี/ซีรีส์ แต่ควรไม่เกิน 3 สี</li>
      </ul>

      <h2>5. ทำไมต้อง SPICYBEAN?</h2>
      <ul>
        <li><strong>🏆 ดีไซน์รางวัล Red Dot:</strong> K1/K2/K3 ออกแบบโดย DBWD แชมป์ Red Dot ของเกาหลี</li>
        <li><strong>🧵 งานปักสองชั้น 60,000 ฝีเข็ม:</strong> แม่นยำในทุกรายละเอียด</li>
        <li><strong>💧 PU เลเธอร์เกรดพรีเมียม:</strong> กันน้ำ ทนทาน ทำความสะอาดง่าย</li>
        <li><strong>🇰🇷 ดีเอ็นเอการออกแบบเกาหลี:</strong> ไม่ใช่แม่พิมพ์สำเร็จรูป — เป็นแบรนด์ที่ขับเคลื่อนด้วยดีไซน์จริง</li>
      </ul>

      <div className="mt-12 rounded-lg border border-spicy-red/30 bg-spicy-red/5 p-8 text-center">
        <h3 className="text-xl font-bold text-spicy-white mb-2">พร้อมอัปเกรดถุงกอล์ฟของคุณหรือยัง?</h3>
        <p className="text-spicy-gray mb-6">คัฟเวอร์หัวไม้ SPICYBEAN — ดีไซน์เกาหลี สร้างเพื่อนักกอล์ฟที่เล่นอย่างมีสไตล์</p>
        <a
          href="/th-TH"
          className="inline-block rounded bg-spicy-red px-8 py-3 text-sm font-semibold text-spicy-black no-underline hover:bg-spicy-red/90"
        >
          ชมคอลเลกชัน
        </a>
      </div>
    </article>
  );
}
