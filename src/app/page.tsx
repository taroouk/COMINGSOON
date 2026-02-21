// src/app/page.tsx
import Image from "next/image";

const WHATSAPP_PHONE = "201118399923";
const WHATSAPP_MESSAGE =
  "Hi TGFM, I’d love a quote!\nWhat info do you need from me?";

const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_PHONE}?text=` + encodeURIComponent(WHATSAPP_MESSAGE);

export default function Home() {
  return (
    <main className="min-h-[100svh] bg-white sm:bg-[#efefef] sm:flex sm:items-center sm:justify-center sm:p-6">
      <div className="w-full sm:max-w-[1280px] bg-white border border-[#bdbdbd] p-[12px] sm:p-[16px] flex flex-col min-h-[100svh] sm:min-h-0">
        {/* TOP BAR */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-[#bdbdbd]"
        >
          <div className="h-[58px] sm:h-[64px] grid grid-cols-[58px_1fr] sm:grid-cols-[64px_1fr] items-center">
            <div className="h-full border-r border-[#bdbdbd] flex items-center justify-center">
              <div className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] border-t-2 border-r-2 border-black rotate-45" />
            </div>

            <div
              className="text-center text-[16px] sm:text-[20px] font-bold text-black leading-none"
              style={{ letterSpacing: "0.18em" }}
            >
              ORDER VIA WHATSAPP
            </div>
          </div>
        </a>

        {/* HERO */}
        <div className="mt-[12px] sm:mt-[16px] relative w-full h-[340px] sm:h-[460px] bg-black overflow-hidden">
          {/* circle smaller a bit inside black rectangle (mobile + desktop) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full overflow-hidden">
            <Image
              src="/logos/hero.png"
              alt="Hero"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* SUBTITLE (two lines) */}
        <div
          className="mt-[18px] sm:mt-[18px] text-center text-[30px] sm:text-[34px] font-bold text-black leading-[1.05]"
          style={{ letterSpacing: "0.02em" }}
        >
          MERCH, DONE PROPERLY
          <br />
          WEBSITE LAUNCHING SOON
        </div>

        {/* LOGO (slightly smaller + pushed a bit down) */}
        <div className="mt-[18px] sm:mt-[22px] flex justify-center">
          <Image
            src="/logos/logo.png"
            alt="TOO GOOD FOR MERCH"
            width={2000}
            height={1000}
            priority
            className="w-[320px] sm:w-[520px] max-w-[92%] h-auto object-contain"
          />
        </div>

        {/* FOOTER (one line + smaller + never overflow) */}
        <div
          className="mt-auto pt-[14px] sm:pt-[16px] pb-[2px] text-center text-[8px] sm:text-[10px] font-bold text-black whitespace-nowrap leading-none overflow-hidden"
          style={{ letterSpacing: "0.02em" }}
        >
          <span className="inline-block max-w-full overflow-hidden text-ellipsis align-bottom">
            TOOGOODFORMERCH© 2026 ALL RIGHTS RESERVED @TOOGOODFORMERCH
          </span>
        </div>
      </div>
    </main>
  );
}