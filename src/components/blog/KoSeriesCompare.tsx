"use client";

export default function KoSeriesCompare() {
  return (
    <article className="prose prose-invert max-w-none">
      <p className="text-lg text-spicy-gray/70 mb-8">
        K1? K2? K3? K4? 처음 SPICYBEAN <strong>골프 헤드커버</strong>를 구매한다면, 어떤 시리즈가 나에게 맞을까요? 3분 만에 비교해드립니다. 모든 SPICYBEAN 시리즈는 <strong>드라이버 헤드커버, 페어웨이 우드 헤드커버, 하이브리드 헤드커버, 퍼터 헤드커버</strong> 네 가지 사이즈로 준비되어 있습니다.
      </p>

      {/* K1 */}
      <section className="mb-12 p-6 rounded-sm border border-zinc-700 bg-gradient-to-br from-zinc-900 to-spicy-dark">
        <h2 className="text-2xl font-bold text-spicy-white mt-0">K1 블랙 클래식 — 실패 없는 선택</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/k1/cover.jpg" alt="K1 Classic Black" className="rounded-sm w-full object-cover" loading="lazy" />
          <div>
            <p className="text-spicy-gray/80">이탈리아 공법 블랙 페블 그레인 PU 가죽. 어떤 골프백, 어떤 스타일에도 어울리는 클래식한 디자인.</p>
            <ul className="mt-4 space-y-1 text-sm text-spicy-gray/70">
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 가격: ₩33,000</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 스타일: 클래식 · 모던 · 올라운드</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 추천: 선물, 입문자, 심플한 스타일</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 매치: 모든 골프백 컬러</li>
            </ul>
          </div>
        </div>
      </section>

      {/* K2 */}
      <section className="mb-12 p-6 rounded-sm border border-zinc-600 bg-gradient-to-br from-zinc-800 to-spicy-dark">
        <h2 className="text-2xl font-bold text-spicy-white mt-0">K2 화이트 러브 — 코스의 로맨틱</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/k2/cover.jpg" alt="K2 White Heart" className="rounded-sm w-full object-cover" loading="lazy" />
          <div>
            <p className="text-spicy-gray/80">순백 마이크로화이버 PU와 시그니처 하트 자수. 사진 찍기 가장 좋은 시리즈.</p>
            <ul className="mt-4 space-y-1 text-sm text-spicy-gray/70">
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 가격: ₩33,000</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 스타일: 로맨틱 · 우아 · 포토제닉</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 추천: 여성 골퍼, 커플, SNS 공유</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 참고: 흰색은 관리가 필요해요</li>
            </ul>
          </div>
        </div>
      </section>

      {/* K3 */}
      <section className="mb-12 p-6 rounded-sm border border-red-800/50 bg-gradient-to-br from-spicy-neon-dim/30 to-spicy-dark">
        <h2 className="text-2xl font-bold text-spicy-white mt-0">K3 레드 — 열정을 담아</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/k3/cover.jpg" alt="K3 Warm Red" className="rounded-sm w-full object-cover" loading="lazy" />
          <div>
            <p className="text-spicy-gray/80">풀커버리지 레드 프린트. 코스에서 가장 눈에 띄는 선택.</p>
            <ul className="mt-4 space-y-1 text-sm text-spicy-gray/70">
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 가격: ₩33,000</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 스타일: 열정적 · 대담 · 스포티</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 추천: 외향적인 성향, 밝은 색상 선호</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 매치: 어두운 골프백과 완벽</li>
            </ul>
          </div>
        </div>
      </section>

      {/* K4 */}
      <section className="mb-12 p-6 rounded-sm border border-violet-800/40 bg-gradient-to-br from-spicy-dark to-violet-950/30">
        <h2 className="text-2xl font-bold text-spicy-white mt-0">K4 네온 느와르 — 다크 에스테틱</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/k4/cover.jpg" alt="K4 Neon Noir" className="rounded-sm w-full object-cover" loading="lazy" />
          <div>
            <p className="text-spicy-gray/80">카본 파이버 PU 텍스처에 스컬 자수. SPICYBEAN의 플래그십 한정판. 사이버펑크 감성의 대표작.</p>
            <ul className="mt-4 space-y-1 text-sm text-spicy-gray/70">
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 가격: ₩55,000 (플래그십)</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 스타일: 다크 · 사이버 · 리미티드</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 추천: 개성파, 트렌드세터</li>
              <li className="flex items-start gap-2"><span className="text-spicy-neon shrink-0">✦</span> 인기 비결: 가장 많이 팔린 시리즈</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quick comparison table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-spicy-white">빠른 비교</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-spicy-grey/70 font-medium">항목</th>
                <th className="text-left py-3 px-4 text-zinc-300 font-medium">K1 블랙</th>
                <th className="text-left py-3 px-4 text-rose-200 font-medium">K2 화이트</th>
                <th className="text-left py-3 px-4 text-red-300 font-medium">K3 레드</th>
                <th className="text-left py-3 px-4 text-fuchsia-300 font-medium">K4 느와르</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 text-spicy-gray">가격</td>
                <td className="py-3 px-4">₩33,000</td>
                <td className="py-3 px-4">₩33,000</td>
                <td className="py-3 px-4">₩33,000</td>
                <td className="py-3 px-4">₩55,000</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 text-spicy-gray">분위기</td>
                <td className="py-3 px-4">클래식</td>
                <td className="py-3 px-4">로맨틱</td>
                <td className="py-3 px-4">대담함</td>
                <td className="py-3 px-4">다크 사이버</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 text-spicy-gray">추천 대상</td>
                <td className="py-3 px-4">모든 골퍼</td>
                <td className="py-3 px-4">여성/커플</td>
                <td className="py-3 px-4">외향적 성향</td>
                <td className="py-3 px-4">개성파</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12 p-6 rounded-sm bg-spicy-black/50 border border-white/5">
        <h2 className="text-xl font-bold text-spicy-white mt-0">👑 QUEEN의 추천</h2>
        <ul className="mt-4 space-y-3 text-spicy-gray/80">
          <li><strong>첫 헤드커버는 K1 블랙</strong> — 실패 없는 선택</li>
          <li><strong>그녀를 위한 선물은 K2 화이트</strong> — 하트 자수는 마음을 울려요</li>
          <li><strong>눈에 띄고 싶다면 K3 레드</strong> — 못 본 척할 수 없어요</li>
          <li><strong>가장 멋진 걸 원한다면 K4</strong> — 플래그십, 베스트셀러</li>
          <li><strong>세트로 믹스매치</strong> — 드라이버, 페어웨이, 하이브리드 각각 다른 시리즈로</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-spicy-white">고르셨나요?</h2>
        <p className="mt-2 text-spicy-gray/70">
          좋은 헤드커버는 코스에서 빛납니다.
        </p>
        <p className="mt-4 text-sm text-spicy-gray/60">
          👉 더 알고 싶다면 <a href="/ko-KR/blog/spicybean-brand-guide" className="text-spicy-neon underline hover:no-underline">SPICYBEAN 브랜드 가이드</a>
          {' · '}질문이 있다면 <a href="/ko-KR/blog/golf-headcover-faq" className="text-spicy-neon underline hover:no-underline">헤드커버 FAQ</a>
        </p>
      </section>
    </article>
  );
}
