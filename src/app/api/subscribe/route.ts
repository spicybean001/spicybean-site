import { NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = "re_RwEi2cX2_GuHFdLknCgSrxcXLq875yKFC";

const confirmTexts: Record<string, { subject: string; html: string }> = {
  "zh-CN": {
    subject: "感谢订阅 SPICYBEAN！🎉",
    html: `
      <div style="max-width:600px;margin:0 auto;padding:40px 20px;font-family:'Inter','Noto Sans SC',sans-serif;background:#0a0a0a;color:#fafafa;">
        <div style="text-align:center;margin-bottom:30px;">
          <img src="https://spicybean.net/logo.png" alt="SPICYBEAN" style="height:40px;" />
        </div>
        <h1 style="text-align:center;font-size:24px;font-weight:700;background:linear-gradient(90deg,#fafafa,#ff2d55,#dc2626);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:20px;">
          感谢订阅 SPICYBEAN！
        </h1>
        <p style="font-size:15px;line-height:1.8;color:#a3a3a3;text-align:center;margin-bottom:30px;">
          您已成功订阅，我们会在第一时间通知您：<br/>
          🔥 新品发布 &nbsp;|&nbsp; 🎉 折扣活动 &nbsp;|&nbsp; 🇰🇷 COUPANG 开售消息
        </p>
        <div style="text-align:center;margin:30px 0;">
          <a href="https://spicybean.net" style="display:inline-block;padding:12px 32px;background:#ff2d55;color:#0a0a0a;text-decoration:none;font-size:14px;font-weight:600;border-radius:2px;">
            浏览官网
          </a>
        </div>
        <p style="text-align:center;font-size:12px;color:#525252;margin-top:40px;">
          SPICYBEAN · Seoul · <a href="https://spicybean.net" style="color:#ff2d55;">spicybean.net</a>
        </p>
      </div>
    `,
  },
  en: {
    subject: "Thank you for subscribing to SPICYBEAN! 🎉",
    html: `
      <div style="max-width:600px;margin:0 auto;padding:40px 20px;font-family:'Inter','Noto Sans SC',sans-serif;background:#0a0a0a;color:#fafafa;">
        <div style="text-align:center;margin-bottom:30px;">
          <img src="https://spicybean.net/logo.png" alt="SPICYBEAN" style="height:40px;" />
        </div>
        <h1 style="text-align:center;font-size:24px;font-weight:700;background:linear-gradient(90deg,#fafafa,#ff2d55,#dc2626);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:20px;">
          Welcome to SPICYBEAN!
        </h1>
        <p style="font-size:15px;line-height:1.8;color:#a3a3a3;text-align:center;margin-bottom:30px;">
          You're now on the list! We'll keep you posted about:<br/>
          🔥 New drops &nbsp;|&nbsp; 🎉 Exclusive sales &nbsp;|&nbsp; 🇰🇷 COUPANG launch
        </p>
        <div style="text-align:center;margin:30px 0;">
          <a href="https://spicybean.net" style="display:inline-block;padding:12px 32px;background:#ff2d55;color:#0a0a0a;text-decoration:none;font-size:14px;font-weight:600;border-radius:2px;">
            Visit SPICYBEAN
          </a>
        </div>
        <p style="text-align:center;font-size:12px;color:#525252;margin-top:40px;">
          SPICYBEAN · Seoul · <a href="https://spicybean.net" style="color:#ff2d55;">spicybean.net</a>
        </p>
      </div>
    `,
  },
  "ko-KR": {
    subject: "SPICYBEAN 구독을 환영합니다! 🎉",
    html: `
      <div style="max-width:600px;margin:0 auto;padding:40px 20px;font-family:'Inter','Noto Sans KR',sans-serif;background:#0a0a0a;color:#fafafa;">
        <div style="text-align:center;margin-bottom:30px;">
          <img src="https://spicybean.net/logo.png" alt="SPICYBEAN" style="height:40px;" />
        </div>
        <h1 style="text-align:center;font-size:24px;font-weight:700;background:linear-gradient(90deg,#fafafa,#ff2d55,#dc2626);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:20px;">
          SPICYBEAN 구독을 환영합니다!
        </h1>
        <p style="font-size:15px;line-height:1.8;color:#a3a3a3;text-align:center;margin-bottom:30px;">
          구독이 완료되었습니다! 새로운 소식을 가장 먼저 알려드립니다:<br/>
          🔥 신제품 출시 &nbsp;|&nbsp; 🎉 할인 이벤트 &nbsp;|&nbsp; 🇰🇷 COUPANG 입점 소식
        </p>
        <div style="text-align:center;margin:30px 0;">
          <a href="https://spicybean.net" style="display:inline-block;padding:12px 32px;background:#ff2d55;color:#0a0a0a;text-decoration:none;font-size:14px;font-weight:600;border-radius:2px;">
            웹사이트 방문
          </a>
        </div>
        <p style="text-align:center;font-size:12px;color:#525252;margin-top:40px;">
          SPICYBEAN · Seoul · <a href="https://spicybean.net" style="color:#ff2d55;">spicybean.net</a>
        </p>
      </div>
    `,
  },
  "ja-JP": {
    subject: "SPICYBEAN ご購読ありがとうございます！🎉",
    html: `
      <div style="max-width:600px;margin:0 auto;padding:40px 20px;font-family:'Inter','Noto Sans JP',sans-serif;background:#0a0a0a;color:#fafafa;">
        <div style="text-align:center;margin-bottom:30px;">
          <img src="https://spicybean.net/logo.png" alt="SPICYBEAN" style="height:40px;" />
        </div>
        <h1 style="text-align:center;font-size:24px;font-weight:700;background:linear-gradient(90deg,#fafafa,#ff2d55,#dc2626);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:20px;">
          ご購読ありがとうございます！
        </h1>
        <p style="font-size:15px;line-height:1.8;color:#a3a3a3;text-align:center;margin-bottom:30px;">
          最新情報をいち早くお届けします：<br/>
          🔥 新商品情報 &nbsp;|&nbsp; 🎉 セール情報 &nbsp;|&nbsp; 🇯🇵 Rakuten 出品情報
        </p>
        <div style="text-align:center;margin:30px 0;">
          <a href="https://spicybean.net" style="display:inline-block;padding:12px 32px;background:#ff2d55;color:#0a0a0a;text-decoration:none;font-size:14px;font-weight:600;border-radius:2px;">
            ウェブサイトを見る
          </a>
        </div>
        <p style="text-align:center;font-size:12px;color:#525252;margin-top:40px;">
          SPICYBEAN · Seoul · <a href="https://spicybean.net" style="color:#ff2d55;">spicybean.net</a>
        </p>
      </div>
    `,
  },
};

export async function POST(request: NextRequest) {
  try {
    const { email, locale } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const lang = locale === "ko-KR" ? "ko-KR" : locale === "ja-JP" ? "ja-JP" : locale === "zh-CN" ? "zh-CN" : "en";
    const mailData = confirmTexts[lang];

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "SPICYBEAN <hello@spicybean.net>",
        to: email,
        subject: mailData.subject,
        html: mailData.html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Subscribe API error:", e);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
