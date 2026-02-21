import Image from "next/image";

const WHATSAPP_PHONE = "201118399923";
const WHATSAPP_MESSAGE =
  "Hi TGFM, I’d love a quote!\nWhat info do you need from me?";

const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_PHONE}?text=` + encodeURIComponent(WHATSAPP_MESSAGE);

export default function Home() {
  return (
    <main className="min-h-[100svh] bg-white">
      <div className="w-full bg-white border border-[#bdbdbd] min-h-[100svh] p-[12px] flex flex-col">

        {/* TOP BAR */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-[#bdbdbd]"
        >
          <div className="h-[50px] grid grid-cols-[50px_1fr] items-center">
            <div className="h-full border-r border-[#bdbdbd] flex items-center justify-center">
              <div className="w-[14px] h-[14px] border-t-2 border-r-2 border-black rotate-45" />
            </div>

            <div
              className="text-center text-[13px] font-bold text-black leading-none"
              style={{ letterSpacing: "0.18em" }}
            >
              ORDER VIA WHATSAPP
            </div>
          </div>
        </a>

        {/* HERO */}
        <div className="mt-[10px] relative w-full h-[235px] bg-black overflow-hidden">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full overflow-hidden">
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
          className="mt-4 text-center text-[19px] font-bold text-black leading-tight"
          style={{ letterSpacing: "0.02em" }}
        >
          <span className="block">MERCH, DONE PROPERLY</span>
          <span className="block">WEBSITE LAUNCHING SOON</span>
        </div>

        {/* LOGO (smaller to prevent cropping) */}
        <div className="mt-3 flex justify-center">
          <Image
            src="/logos/logo.png"
            alt="TOO GOOD FOR MERCH"
            width={2000}
            height={1000}
            priority
            className="w-[250px] max-w-[90%] h-auto"
          />
        </div>

        {/* FOOTER (smaller + no crop + last element) */}
        <div
          className="mt-3 text-[7px] font-bold text-black text-center whitespace-nowrap"
          style={{ letterSpacing: "0.01em" }}
        >
          TOOGOODFORMERCH© 2026 ALL RIGHTS RESERVED @TOOGOODFORMERCH
        </div>

      </div>
    </main>
  );
}