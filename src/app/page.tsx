import Image from "next/image";

const WHATSAPP_PHONE = "201118399923";
const WHATSAPP_MESSAGE =
  "Hi TGFM, I’d love a quote!\nWhat info do you need from me?";

const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_PHONE}?text=` + encodeURIComponent(WHATSAPP_MESSAGE);

export default function Home() {
  return (
    <main className="bg-white min-h-[100svh] overflow-x-hidden">
      <div className="w-full min-h-[100svh] border border-[#bdbdbd] p-[12px] sm:p-[16px] flex flex-col">
        {/* TOP BAR */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-[#bdbdbd]"
        >
          <div className="h-[56px] sm:h-[64px] grid grid-cols-[56px_1fr] sm:grid-cols-[64px_1fr] items-center">
            <div className="h-full border-r border-[#bdbdbd] flex items-center justify-center">
              <div className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] border-t-2 border-r-2 border-black rotate-45" />
            </div>

            <div
              className="px-2 text-center font-bold text-black leading-none whitespace-nowrap text-[14px] sm:text-[20px]"
              style={{ letterSpacing: "0.14em" }}
            >
              ORDER VIA WHATSAPP
            </div>
          </div>
        </a>

        {/* CONTENT */}
        <div className="flex-1 flex flex-col">
          {/* HERO */}
          <div className="mt-[14px] sm:mt-[24px] relative w-full bg-black overflow-hidden h-[36svh] sm:aspect-[16/6] sm:h-auto">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden w-[68vw] h-[68vw] max-w-[340px] max-h-[340px] sm:w-[360px] sm:h-[360px]">
              <Image
                src="/logos/hero.png"
                alt="Hero"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* SUBTITLE (2 lines) */}
          <div
            className="mt-[18px] sm:mt-[22px] text-center font-bold text-black leading-[1.05] text-[20px] sm:text-[28px]"
            style={{ letterSpacing: "0.02em" }}
          >
            <div className="whitespace-nowrap">MERCH, DONE PROPERLY</div>
            <div className="whitespace-nowrap">WEBSITE LAUNCHING SOON</div>
          </div>

          {/* LOGO (move down slightly) */}
          <div className="mt-[22px] sm:mt-[22px] flex justify-center">
            <div className="w-[310px] sm:w-[520px] max-w-[92%]">
              <Image
                src="/logos/logo.png"
                alt="TOO GOOD FOR MERCH"
                width={2000}
                height={1000}
                priority
                className="w-full h-auto object-contain max-h-[205px] sm:max-h-[260px]"
              />
            </div>
          </div>

          {/* FOOTER (never overflows) */}
          <div className="mt-auto pt-[10px] sm:pt-[12px] overflow-hidden">
            <div
              className="w-full text-center font-bold text-black whitespace-nowrap overflow-hidden text-ellipsis px-2 leading-none"
              style={{
                letterSpacing: "0.01em",
                fontSize: "clamp(7px, 2.4vw, 11px)",
              }}
            >
              TOOGOODFORMERCH© 2026 ALL RIGHTS RESERVED @TOOGOODFORMERCH
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}