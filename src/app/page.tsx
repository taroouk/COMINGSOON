import Image from "next/image";

const WHATSAPP_PHONE = "201118399923";
const WHATSAPP_MESSAGE =
  "Hi TGFM, I’d love a quote!\nWhat info do you need from me?";

const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_PHONE}?text=` + encodeURIComponent(WHATSAPP_MESSAGE);

export default function Home() {
  return (
    <main className="bg-white min-h-[100svh]">
      {/* FULL-PAGE WRAP (NO GREY SPACE, NO CENTERED BOX) */}
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
              className="text-center font-bold text-black leading-none text-[16px] sm:text-[20px]"
              style={{ letterSpacing: "0.18em" }}
            >
              ORDER VIA WHATSAPP
            </div>
          </div>
        </a>

        {/* CONTENT AREA (STRETCHED VERTICALLY) */}
        <div className="flex-1 flex flex-col">
          {/* HERO */}
          <div className="mt-[14px] sm:mt-[24px] relative w-full bg-black overflow-hidden h-[38svh] sm:h-[46svh]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden w-[72vw] h-[72vw] max-w-[360px] max-h-[360px] sm:w-[420px] sm:h-[420px]">
              <Image
                src="/logos/hero.png"
                alt="Hero"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* SUBTITLE (2 LINES, BIGGER) */}
          <div
            className="mt-[18px] sm:mt-[22px] text-center font-bold text-black leading-[1.05] text-[22px] sm:text-[28px]"
            style={{ letterSpacing: "0.02em" }}
          >
            <div>MERCH, DONE PROPERLY</div>
            <div>WEBSITE LAUNCHING SOON</div>
          </div>

          {/* LOGO (SMALLER + NO CROP) */}
          <div className="mt-[14px] sm:mt-[18px] flex justify-center">
            <div className="w-[320px] sm:w-[520px] max-w-[92%]">
              <Image
                src="/logos/logo.png"
                alt="TOO GOOD FOR MERCH"
                width={2000}
                height={1000}
                priority
                className="w-full h-auto object-contain max-h-[220px] sm:max-h-[260px]"
              />
            </div>
          </div>

          {/* PUSH FOOTER TO THE VERY BOTTOM (NO EXTRA SPACE UNDER IT) */}
          <div className="mt-auto pt-[10px] sm:pt-[12px]">
            <div
              className="w-full text-center font-bold text-black whitespace-nowrap leading-none"
              style={{ letterSpacing: "0.01em" }}
            >
              <span className="text-[9px] sm:text-[11px]">
                TOOGOODFORMERCH© 2026 ALL RIGHTS RESERVED @TOOGOODFORMERCH
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}