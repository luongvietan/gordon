export type Locale = "en" | "vi";

type Bi = { en: string; vi: string };

export function t(locale: Locale, text: Bi) {
  return text[locale];
}

export const landingCopy = {
  brand: "The Chicken Fortress",
  nav: {
    overview: { en: "Overview", vi: "Tổng quan" },
    products: { en: "Product", vi: "Sản phẩm" },
    how: { en: "How it works", vi: "Cơ chế vận hành" },
    features: { en: "Features", vi: "Tính năng" },
    economics: { en: "Economics", vi: "Hiệu quả" },
    market: { en: "Market Opportunity", vi: "Cơ hội thị trường" },
    investment: { en: "Investment", vi: "Đầu tư" },
    investNow: { en: "Invest Now", vi: "Đầu tư ngay" },
  },
  company: {
    kicker: { en: "Company Overview", vi: "Tổng quan công ty" },
    title: {
      en: "Công Ty Kim Và Gordon",
      vi: "Công Ty Kim Và Gordon",
    },
    body: {
      en: "An ag-tech startup based in Tây Ninh, Vietnam, building modular, sustainable poultry systems for small to mid-scale farmers. Our flagship product, The Chicken Fortress, turns standard shipping containers into high-efficiency habitats for 100 laying hens—designed around a circular waste-to-feed loop and pasture access.",
      vi: "Startup ag-tech tại Tây Ninh, Việt Nam, phát triển hệ thống nuôi gà mô-đun bền vững cho nông hộ và trang trại quy mô vừa. Sản phẩm chủ lực The Chicken Fortress biến container tiêu chuẩn thành chuồng nuôi hiệu suất cao cho 100 con gà mái đẻ—thiết kế theo mô hình tuần hoàn phân → đạm và cho gà ra bãi chăn thả.",
    },
  },
  valueProp: {
    title: { en: "Unique Value Proposition", vi: "Lợi thế khác biệt" },
    intro: {
      en: "The Chicken Fortress is designed as an integrated system—portable, circular, and farmer-friendly.",
      vi: "The Chicken Fortress được thiết kế như một hệ thống tích hợp—di động, tuần hoàn và dễ vận hành.",
    },
    bullets: [
      {
        title: { en: "Closed-loop vermiculture + larvae recycling", vi: "Tuần hoàn trùn quế + ấu trùng" },
        desc: {
          en: "Manure is consumed by worms and native flies before ammonia builds; larvae/worm protein returns directly to the hens.",
          vi: "Phân được trùn và ruồi bản địa xử lý trước khi phát sinh amoniac; nguồn đạm (ấu trùng/trùn) quay lại cho gà ăn trực tiếp.",
        },
      },
      {
        title: { en: "Feed savings from recycled protein", vi: "Tiết kiệm thức ăn nhờ đạm tái chế" },
        desc: {
          en: "Up to ~20% feed savings from insect protein recycling, plus additional reduction via pasture foraging.",
          vi: "Tiết kiệm khoảng ~20% thức ăn nhờ đạm côn trùng, và giảm thêm nhờ gà tự kiếm ăn khi ra bãi.",
        },
      },
      {
        title: { en: "Timed pasture access", vi: "Ra bãi theo lịch" },
        desc: {
          en: "Electric doors enable daytime pasture access for natural foraging and welfare improvements.",
          vi: "Cửa điện hẹn giờ giúp gà ra bãi ban ngày để tự kiếm ăn và cải thiện phúc lợi.",
        },
      },
      {
        title: { en: "Portable, container-compatible design", vi: "Thiết kế di động theo chuẩn container" },
        desc: {
          en: "Optimized for shipping, truck, or rail with minimal on-site installation.",
          vi: "Tối ưu cho vận chuyển đường biển/xe tải/đường sắt, lắp đặt tại chỗ tối giản.",
        },
      },
    ],
  },
  hero: {
    headline: {
      en: "The Chicken Fortress: A Portable, Zero‑Waste Poultry System",
      vi: "The Chicken Fortress: Hệ thống nuôi gà di động, tuần hoàn – không mùi",
    },
    subhead: {
      en: "A container-based habitat for 100 laying hens that turns manure into feed, reduces input costs, and enables pasture access.",
      vi: "Giải pháp chuồng gà dạng container cho 100 con gà mái đẻ: biến phân thành nguồn đạm, giảm chi phí thức ăn và cho gà ra bãi chăn thả.",
    },
    ctaExplore: { en: "Explore Product", vi: "Khám phá sản phẩm" },
    ctaInvest: { en: "Invest Now", vi: "Đầu tư ngay" },
    blueprintLabel: { en: "Technical Blueprint", vi: "Bản thiết kế kỹ thuật" },
    blueprintBody: {
      en: "An integrated waste‑to‑feed cycle (worms + native fly larvae), roll‑away nesting, and timed electric doors for daytime pasture access.",
      vi: "Chu trình tuần hoàn phân → trùn quế + ấu trùng ruồi (tạo đạm), ổ đẻ trứng tự lăn và cửa điện hẹn giờ để gà ra bãi ban ngày.",
    },
    imageAlt: { en: "Modern Sustainable Chicken Coop", vi: "Chuồng gà hiện đại bền vững" },
  },
  trust: [
    { icon: "eco", title: { en: "Zero Odor System", vi: "Hệ thống không mùi" } },
    { icon: "nutrition", title: { en: "50% Feed Reduction", vi: "Giảm 50% thức ăn" } },
    { icon: "cycle", title: { en: "Circular Farming", vi: "Nông nghiệp tuần hoàn" } },
    { icon: "conveyor_belt", title: { en: "Portable Design", vi: "Thiết kế di động" } },
  ],
  product: {
    kicker: { en: "Product Detail", vi: "Chi tiết sản phẩm" },
    title: { en: "The 100-Hen Smart Container", vi: "Container thông minh cho 100 con gà" },
    body1: {
      en: "The Chicken Fortress converts a standard shipping container into a self-contained habitat for up to 100 laying hens. Slatted flooring drops manure into a dedicated vermiculture zone where worms and native flies consume waste before ammonia builds; larvae are auto-harvested back to the hens as protein. Timed electric doors provide daytime pasture access for natural foraging.",
      vi: "The Chicken Fortress biến container tiêu chuẩn thành môi trường nuôi khép kín cho tối đa 100 con gà mái đẻ. Sàn thoáng dẫn phân xuống khu nuôi trùn quế riêng; trùn và ruồi bản địa xử lý phân trước khi phát sinh amoniac, ấu trùng được thu tự động để gà ăn lại như nguồn đạm. Cửa điện hẹn giờ giúp gà ra bãi ban ngày để tự kiếm ăn.",
    },
    downloadPdf: { en: "Download full product details (PDF)", vi: "Tải bản mô tả chi tiết (PDF)" },
    stat1: { en: "Capacity", vi: "Công suất" },
    stat1Value: { en: "100 Hens", vi: "100 con gà" },
    stat2: { en: "Automated", vi: "Tự động" },
    stat2Value: { en: "Timed Pasture Doors", vi: "Cửa ra bãi hẹn giờ" },
  },
  how: {
    title: { en: "Circular Ecosystem Flow", vi: "Quy trình hệ sinh thái tuần hoàn" },
    steps: [
      { icon: "auto_delete", en: "Waste to Vermiculture", vi: "Chất thải đến nuôi trùn quế" },
      { icon: "bug_report", en: "Worms + Flies Consume Waste", vi: "Trùn + ruồi xử lý chất thải" },
      { icon: "restaurant", en: "Larvae/Worm Protein Returns", vi: "Nguồn đạm (ấu trùng/trùn) quay lại cho gà" },
      { icon: "grass", en: "Daytime Pasture Access", vi: "Ra bãi chăn thả ban ngày" },
    ],
  },
  features: {
    title: { en: "Engineering Excellence", vi: "Kỹ thuật xuất sắc" },
    cards: [
      {
        icon: "sensor_door",
        title: { en: "Automated Doors", vi: "Cửa tự động" },
        desc: {
          en: "Electric doors provide scheduled pasture access while keeping operations simple.",
          vi: "Cửa điện cho gà ra bãi theo lịch, vận hành đơn giản và an toàn.",
        },
      },
      {
        icon: "nest_eco_leaf",
        title: { en: "Roll-away Nesting", vi: "Ổ đẻ trứng tự lăn" },
        desc: {
          en: "18 roll-away nesting boxes reduce contamination and keep eggs cleaner.",
          vi: "18 ổ đẻ tự lăn giúp giảm bẩn vỏ trứng và hạn chế dập vỡ.",
        },
      },
      {
        icon: "water_drop",
        title: { en: "Gravity Feed", vi: "Máng ăn trọng lực" },
        desc: {
          en: "Closed hopper + gravity feed; simple refills with less waste.",
          vi: "Phễu kín + cấp ăn trọng lực; tiếp thức dễ và giảm thất thoát.",
        },
      },
      {
        icon: "air",
        title: { en: "Passive Ventilation", vi: "Thông gió tự nhiên" },
        desc: {
          en: "Vent openings with louvers support airflow and reduce wind speed.",
          vi: "Cửa thông gió có lá sách giúp đối lưu không khí và giảm gió tạt.",
        },
      },
      {
        icon: "engineering",
        title: { en: "Maintenance Room", vi: "Phòng bảo trì" },
        desc: {
          en: "A dedicated clean room for egg collection and refilling feed/water with minimal disturbance.",
          vi: "Không gian sạch riêng để thu trứng và tiếp thức ăn/nước, ít làm gà bị stress.",
        },
      },
      {
        icon: "local_shipping",
        title: { en: "Transport-ready", vi: "Sẵn sàng vận chuyển" },
        desc: {
          en: "Optimized for standard truck and ship dimensions.",
          vi: "Tối ưu theo kích thước tiêu chuẩn xe tải và tàu.",
        },
      },
    ],
  },
  roi: {
    title: { en: "Financial Performance", vi: "Hiệu quả tài chính" },
    subtitle: { en: "End-user economics (per hen / per unit)", vi: "Kinh tế cho nông hộ (theo gà / theo hệ thống)" },
    metrics: [
      { value: "50%+", title: { en: "Feed reduction", vi: "Giảm lượng thức ăn" } },
      { value: "$50", title: { en: "Egg revenue / hen / year", vi: "Doanh thu trứng / gà / năm" } },
      { value: "$12", title: { en: "Castings / hen / year", vi: "Phân trùn / gà / năm" } },
      { value: "28%", title: { en: "Annual ROI", vi: "ROI hàng năm" }, highlight: true },
    ],
  },
  financialModel: {
    title: { en: "Financial Model", vi: "Mô hình tài chính" },
    note: {
      en: "These are conservative assumptions from the investment write-up; actual performance varies by feed cost, egg price, and pasture conditions.",
      vi: "Các giả định mang tính thận trọng theo tài liệu gọi vốn; kết quả thực tế phụ thuộc giá cám, giá trứng và điều kiện chăn thả.",
    },
    rows: [
      { label: { en: "Conventional feed / hen / year", vi: "Cám truyền thống / gà / năm" }, value: "42 kg" },
      { label: { en: "Chicken Fortress feed / hen / year", vi: "Cám theo Chicken Fortress / gà / năm" }, value: "21 kg" },
      { label: { en: "Bulk feed cost (assumption)", vi: "Giá cám (giả định)" }, value: "$0.45 / kg" },
      { label: { en: "Feed cost / hen / year (after reduction)", vi: "Chi phí cám / gà / năm (sau giảm)" }, value: "$9.50" },
      { label: { en: "Egg output / hen / year", vi: "Sản lượng trứng / gà / năm" }, value: "250 eggs" },
      { label: { en: "Egg price (conservative)", vi: "Giá trứng (thận trọng)" }, value: "$0.20 / egg" },
      { label: { en: "Castings / hen / year", vi: "Phân trùn / gà / năm" }, value: "35 kg" },
      { label: { en: "Castings wholesale price", vi: "Giá sỉ phân trùn" }, value: "$0.35 / kg" },
      { label: { en: "Net profit / unit / year (100 hens)", vi: "Lợi nhuận ròng / hệ / năm (100 con gà)" }, value: "~$4,200" },
    ],
  },
  market: {
    title: {
      en: "The Global Demand for Clean Eggs",
      vi: "Nhu cầu toàn cầu về trứng sạch",
    },
    body: {
      en: "Demand for sustainable, local, pasture-raised eggs is rising as consumers pay premiums for ethical production beyond factory farming.",
      vi: "Nhu cầu trứng địa phương, chăn thả và bền vững đang tăng khi người tiêu dùng sẵn sàng trả thêm cho sản phẩm “đạo đức” thay vì chăn nuôi công nghiệp.",
    },
    bullets: [
      { en: "Small Farm Empowerment", vi: "Trao quyền cho trang trại nhỏ" },
      { en: "Export Potential to Global Markets", vi: "Tiềm năng xuất khẩu ra thị trường quốc tế" },
      { en: "Modular Scalability", vi: "Khả năng mở rộng theo mô-đun" },
    ],
  },
  funding: {
    title: { en: "Investment Opportunity", vi: "Cơ hội đầu tư" },
    askLabel: { en: "Ask", vi: "Yêu cầu" },
    timelineLabel: { en: "Timeline", vi: "Thời hạn" },
    useLabel: { en: "Use of Funds", vi: "Sử dụng vốn" },
    askValue: "$80,000",
    timelineValue: "Q4 2026",
    useValue: {
      en: "Prototype validation, tooling, certification/testing, first run (8 units), marketing",
      vi: "Hoàn thiện prototype, tooling, kiểm định/thử nghiệm, sản xuất lô đầu (8 hệ), marketing",
    },
    extra: {
      en: "Units will retail at $15,000 each. Target: production-ready by Q4 2026.",
      vi: "Giá bán dự kiến: $15,000 / hệ. Mục tiêu: sẵn sàng sản xuất vào Q4 2026.",
    },
    cta: { en: "Become an Investor", vi: "Trở thành nhà đầu tư" },
  },
  footer: {
    tagline: {
      en: "Sustainable, container-based poultry infrastructure by Công Ty Kim Và Gordon (Tây Ninh, Vietnam).",
      vi: "Hạ tầng nuôi gà bền vững dạng container bởi Công Ty Kim Và Gordon (Tây Ninh, Việt Nam).",
    },
    subtagline: {
      en: "The Chicken Fortress: 100-hen systems with a circular waste-to-feed loop and daytime pasture access.",
      vi: "The Chicken Fortress: hệ 100 con gà mái đẻ với vòng tuần hoàn phân → đạm và ra bãi ban ngày.",
    },
    quickLinks: { en: "Quick Links", vi: "Liên kết nhanh" },
    links: {
      overview: { en: "Overview", vi: "Tổng quan" },
      product: { en: "Product", vi: "Sản phẩm" },
      economics: { en: "Economics", vi: "Hiệu quả" },
      investment: { en: "Investment", vi: "Đầu tư" },
      market: { en: "Market", vi: "Thị trường" },
    },
    language: { en: "Language", vi: "Ngôn ngữ" },
    copyright: "© 2026 Công Ty Kim Và Gordon. All rights reserved.",
  },
} as const;

