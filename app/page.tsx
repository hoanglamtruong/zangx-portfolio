import React from "react";

// Biểu tượng ngôi sao 4 cánh xoay 45° màu champagne tạo thành chữ X trong ZANGX
function StarX({ className = "w-8 h-8 md:w-12 md:h-12 inline-block text-brand-accent align-middle" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Chữ X cách điệu bằng ngôi sao 4 cánh xoay 45 độ"
    >
      <g transform="rotate(45 50 50)">
        <path d="M50 0 C50 28, 72 50, 100 50 C72 50, 50 72, 50 100 C50 72, 28 50, 0 50 C28 50, 50 28, 50 0 Z" />
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-brand-bg text-brand-text flex flex-col justify-between px-6 py-8 md:px-12 md:py-12 selection:bg-brand-accent selection:text-brand-bg">
      {/* Background ambient nhẹ nhàng với màu thương hiệu */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 overflow-hidden flex items-center justify-center opacity-30"
      >
        <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-brand-surface blur-[120px]" />
      </div>

      {/* HEADER SECTION: Wordmark & Trạng thái */}
      <header className="relative z-10 w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-brand-surface pb-6">
        <div>
          <div className="flex items-center gap-1.5 font-serif text-3xl md:text-5xl font-bold tracking-wider text-brand-text">
            <span>ZANG</span>
            <StarX className="w-7 h-7 md:w-11 md:h-11 text-brand-accent translate-y-[-1px]" />
          </div>
          <p className="font-sans text-[11px] md:text-xs font-semibold tracking-[0.25em] text-brand-muted mt-1 uppercase">
            XƯỞNG SÁNG TẠO SỐ
          </p>
        </div>

        {/* Điểm nhấn trạng thái với màu Lime vi mô (<5% diện tích) */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-surface text-xs md:text-sm font-sans">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-lime opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-lime" />
          </span>
          <span className="font-medium text-brand-text">Sắp ra mắt</span>
        </div>
      </header>

      {/* MAIN HERO CONTENT */}
      <section className="relative z-10 w-full max-w-4xl mx-auto my-auto py-12 md:py-20 text-center flex flex-col items-center">
        {/* Khối vai trò */}
        <div className="inline-block mb-4 px-4 py-1 rounded bg-brand-surface text-brand-accent text-xs md:text-sm font-sans font-semibold tracking-wider uppercase">
          Creator · Product Manager · R&amp;D
        </div>

        {/* Tên chủ dự án */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-brand-text mb-6 leading-[1.15]">
          Trương Hoàng Lam
        </h1>

        {/* Tagline thương hiệu */}
        <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-accent italic font-normal mb-8">
          &ldquo;Ideas, designed into systems.&rdquo;
        </p>

        {/* Đoạn giới thiệu tiếng Việt */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-brand-muted max-w-2xl leading-relaxed mb-10">
          Không gian sáng tạo kết hợp tư duy kỹ thuật cơ khí, tự động hóa bằng AI
          và chế tác sản phẩm thực tế. Nền tảng Portfolio đang trong giai đoạn hoàn thiện kiến trúc.
        </p>

        {/* Nút liên hệ dạng tạm thời không bấm được */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-brand-surface border border-brand-accent/40 text-brand-accent font-sans font-bold text-sm md:text-base tracking-wide cursor-not-allowed opacity-90 text-center shadow-md select-none"
          >
            Liên hệ sắp mở
          </button>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="relative z-10 w-full max-w-6xl mx-auto pt-6 border-t border-brand-surface flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-brand-muted">
        <div>
          © {new Date().getFullYear()} ZANGX · Trương Hoàng Lam. Bảo lưu mọi quyền.
        </div>
        <div className="flex items-center gap-4">
          <span className="text-brand-text font-medium">XƯỞNG SÁNG TẠO SỐ</span>
        </div>
      </footer>
    </main>
  );
}
