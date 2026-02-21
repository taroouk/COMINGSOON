import Image from "next/image";

const WHATSAPP_PHONE = "201118399923";
const WHATSAPP_MESSAGE =
  "Hi TGFM, I’d love a quote!\nWhat info do you need from me?";

const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_PHONE}?text=` + encodeURIComponent(WHATSAPP_MESSAGE);

export default function Home() {
  return (
    <main className="min-h-[100svh] sm:min-h-screen bg-white sm:bg-[#efefef] sm:flex sm:items-center sm:justify-center">
      <div className="w-full h-[100svh] sm:h-auto sm:max-w-[1280px] bg-white border border-[#bdbdbd] p-[12px] sm:p-[16px] flex flex-col">
        {/* TOP BAR */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-[#bdbdbd]"
        >
          <div className="h-[52px] sm:h-[64px] grid grid-cols-[52px_1fr] sm:grid-cols-[64px_1fr] items-center">
            <div className="h-full border-r border-[#bdbdbd] flex items-center justify-center">
              <div className="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] border-t-2 border-r-2 border-black rotate-45" />
            </div>

            <div
              className="text-center text-[14px] sm:text-[20px] font-bold text-black leading-none"
              style={{ letterSpacing: "0.18em" }}
            >
              ORDER VIA WHATSAPP
            </div>
          </div>
        </a>

        {/* HERO */}
        <div className="mt-[12px] sm:mt-[24px] relative w-full h-[44svh] sm:h-[387px] bg-black overflow-hidden">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[72vw] max-w-[320px] aspect-square rounded-full overflow-hidden">
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
          className="mt-4 sm:mt-6 text-center font-bold text-black text-[18px] sm:text-[26px] leading-tight"
          style={{ letterSpacing: "0.02em" }}
        >
          <div>MERCH, DONE PROPERLY</div>
          <div>WEBSITE LAUNCHING SOON</div>
        </div>

        {/* LOGO */}
        {/* ✅ نزّلناه سنة لتحت + لسه مصغّر ومش بيتقص */}
        <div className="mt-5 sm:mt-8 flex justify-center">
          <div className="w-[240px] sm:w-[540px] max-w-[95%]">
            <Image
              src="/logos/logo.png"
              alt="TOO GOOD FOR MERCH"
              width={2000}
              height={1000}
              priority
              className="w-full h-auto max-h-[180px] sm:max-h-none object-contain"
            />
          </div>
        </div>

        {/* FOOTER */}
        {/* ✅ شيلنا truncate عشان السطر كله يبان + صغّرنا الخط */}
        <div
          className="mt-auto pt-3 sm:mt-14 sm:pt-0 w-full flex justify-center sm:justify-between items-center font-bold text-black whitespace-nowrap px-[10px] sm:px-0"
          style={{ letterSpacing: "0.02em" }}
        >
          {/* Mobile: one full line, no truncation */}
          <div
            className="sm:hidden text-center w-full"
            style={{ fontSize: "7px" }}
          >
            TOOGOODFORMERCH© 2026 ALL RIGHTS RESERVED @TOOGOODFORMERCH
          </div>

          {/* Desktop: نفس القديم */}
          <div className="hidden sm:block text-[11px]">
            TOOGOODFORMERCH© 2026 ALL RIGHTS RESERVED
          </div>
          <div className="hidden sm:block text-[11px]">@TOOGOODFORMERCH</div>
        </div>
      </div>
    </main>
  );
}