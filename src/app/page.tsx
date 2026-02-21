import Image from "next/image";

const WHATSAPP_PHONE = "201118399923";
const WHATSAPP_MESSAGE =
  "Hi TGFM, I’d love a quote!\nWhat info do you need from me?";

const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_PHONE}?text=` + encodeURIComponent(WHATSAPP_MESSAGE);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#efefef] flex items-center justify-center">
      <div
        className="
          w-full max-w-[1280px]
          bg-white border border-[#bdbdbd]
          px-[16px] py-[16px]
          sm:p-[16px]
          flex flex-col
          h-[100svh] sm:h-auto
        "
      >
        {/* TOP */}
        <div>
          {/* TOP BAR */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-[#bdbdbd]"
          >
            <div className="h-[72px] sm:h-[64px] grid grid-cols-[72px_1fr] sm:grid-cols-[64px_1fr] items-center">
              <div className="h-full border-r border-[#bdbdbd] flex items-center justify-center">
                <div className="w-[18px] h-[18px] border-t-2 border-r-2 border-black rotate-45" />
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
          <div className="mt-[18px] sm:mt-[24px] relative w-full h-[250px] sm:h-[387px] bg-black overflow-hidden">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[210px] h-[210px] sm:w-[377px] sm:h-[377px] rounded-full overflow-hidden">
              <Image
                src="/logos/hero.png"
                alt="Hero"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* SUBTITLE */}
          <div
            className="mt-[16px] sm:mt-6 text-center text-[16px] sm:text-[26px] font-bold text-black"
            style={{ letterSpacing: "0.02em" }}
          >
            MERCH, DONE PROPERLY. <br className="block sm:hidden" />
            WEBSITE LAUNCHING SOON
          </div>

          {/* LOGO */}
          <div className="mt-[18px] sm:mt-8 flex justify-center">
            <Image
              src="/logos/logo.png"
              alt="TOO GOOD FOR MERCH"
              width={2000}
              height={1000}
              priority
              className="w-[420px] sm:w-[540px] max-w-[95%] h-auto"
            />
          </div>
        </div>

        {/* FOOTER (stays at bottom on mobile) */}
        <div
          className="mt-[10px] sm:mt-14 text-[10px] sm:text-[11px] font-bold text-black"
          style={{ letterSpacing: "0.02em" }}
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-[6px]">
            <div>@TOOGOODFORMERCH</div>
            <div className="sm:text-right">
              TOOGOODFORMERCH© 2026 ALL RIGHTS RESERVED
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}