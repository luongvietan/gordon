export type Locale = "en" | "vi";

type Bi = { en: string; vi: string };

export function t(locale: Locale, text: Bi) {
  return text[locale];
}

export const landingCopy = {
  brand: "The Chicken Fortress",
  nav: {
    products: { en: "Products", vi: "Sản phẩm" },
    investment: { en: "Investment", vi: "Đầu tư" },
    market: { en: "Market Opportunity", vi: "Cơ hội thị trường" },
    investNow: { en: "Invest Now", vi: "Đầu tư ngay" },
  },
  hero: {
    headline: {
      en: "Revolutionizing Poultry Farming with Smart, Sustainable Systems",
      vi: "Cách mạng hóa chăn nuôi gia cầm với hệ thống thông minh, bền vững",
    },
    subhead: {
      en: "Modular, zero-waste chicken systems built for modern farmers.",
      vi: "Hệ thống chuồng gà mô-đun, không chất thải cho nông nghiệp hiện đại.",
    },
    ctaExplore: { en: "Explore Product", vi: "Khám phá sản phẩm" },
    ctaInvest: { en: "Invest Now", vi: "Đầu tư ngay" },
    blueprintLabel: { en: "Technical Blueprint", vi: "Bản thiết kế kỹ thuật" },
    blueprintBody: {
      en: "Integrated waste-to-feed cycle system with automated climate monitoring and predator protection.",
      vi: "Hệ thống tuần hoàn chất thải thành thức ăn, giám sát khí hậu tự động và bảo vệ khỏi thú săn mồi.",
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
    title: { en: "The 100-Hen Smart Container", vi: "Container thông minh cho 100 gà" },
    body1: {
      en: "Our container-based system is a fully integrated ecosystem designed for maximum efficiency. It houses up to 100 hens in a climate-controlled environment that manages waste automatically through integrated vermiculture.",
      vi: "Hệ thống container là một hệ sinh thái tích hợp, thiết kế để tối ưu hiệu suất. Chuồng nuôi tới 100 gà mái trong môi trường kiểm soát khí hậu, tự động xử lý chất thải qua nuôi trùn quế tích hợp.",
    },
    stat1: { en: "Capacity", vi: "Công suất" },
    stat1Value: { en: "100 Hens", vi: "100 gà" },
    stat2: { en: "Automated", vi: "Tự động" },
    stat2Value: { en: "Smart Climate", vi: "Khí hậu thông minh" },
  },
  how: {
    title: { en: "Circular Ecosystem Flow", vi: "Quy trình hệ sinh thái tuần hoàn" },
    steps: [
      { icon: "auto_delete", en: "Waste to Vermiculture", vi: "Chất thải đến nuôi trùn quế" },
      { icon: "bug_report", en: "Worms Consume Waste", vi: "Trùn quế xử lý chất thải" },
      { icon: "restaurant", en: "Protein Returns", vi: "Nguồn đạm quay lại cho gà" },
      { icon: "grass", en: "Pasture Access", vi: "Tiếp cận bãi chăn thả" },
    ],
  },
  features: {
    title: { en: "Engineering Excellence", vi: "Kỹ thuật xuất sắc" },
    cards: [
      {
        icon: "sensor_door",
        title: { en: "Automated Doors", vi: "Cửa tự động" },
        desc: {
          en: "Sunrise/sunset synchronization for optimal safety.",
          vi: "Đồng bộ bình minh/hoàng hôn để đảm bảo an toàn tối đa.",
        },
      },
      {
        icon: "nest_eco_leaf",
        title: { en: "Roll-away Nesting", vi: "Ổ đẻ trứng tự lăn" },
        desc: {
          en: "Prevents egg breakage and keeps production clean.",
          vi: "Giảm vỡ trứng và giữ khu vực sản xuất sạch sẽ.",
        },
      },
      {
        icon: "water_drop",
        title: { en: "Gravity Feed", vi: "Máng ăn trọng lực" },
        desc: {
          en: "Low-maintenance feeding systems that reduce waste.",
          vi: "Hệ thống cho ăn ít bảo trì, giảm thất thoát.",
        },
      },
      {
        icon: "air",
        title: { en: "Smart Ventilation", vi: "Thông gió thông minh" },
        desc: {
          en: "Maintains perfect air quality and temperature.",
          vi: "Duy trì chất lượng không khí và nhiệt độ tối ưu.",
        },
      },
      {
        icon: "engineering",
        title: { en: "Maintenance Room", vi: "Phòng bảo trì" },
        desc: {
          en: "Easy access for operators and egg collection.",
          vi: "Dễ thao tác vận hành và thu gom trứng.",
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
    subtitle: { en: "Investment", vi: "Đầu tư" },
    metrics: [
      { value: "50%", title: { en: "Feed Cost Reduction", vi: "Giảm chi phí thức ăn" } },
      { value: "Premium", title: { en: "Egg Revenue", vi: "Doanh thu trứng sạch" } },
      { value: "Worm", title: { en: "Casting Sales", vi: "Bán phân trùn quế" } },
      { value: "28%", title: { en: "Annual ROI", vi: "ROI hàng năm" }, highlight: true },
    ],
  },
  market: {
    title: {
      en: "The Global Demand for Clean Eggs",
      vi: "Nhu cầu toàn cầu về trứng sạch",
    },
    body: {
      en: "Sustainable egg demand is skyrocketing as consumers move away from factory farming.",
      vi: "Nhu cầu trứng sạch tăng mạnh khi người tiêu dùng rời xa chăn nuôi công nghiệp.",
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
    timelineValue: "Q1 2026",
    useValue: { en: "R&D, Mass Production, Export Logistics", vi: "R&D, Sản xuất hàng loạt, Logistics xuất khẩu" },
    cta: { en: "Become an Investor", vi: "Trở thành nhà đầu tư" },
  },
  footer: {
    tagline: {
      en: "Sustainable Poultry Infrastructure by Công Ty Kim Và Gordon.",
      vi: "Hạ tầng chăn nuôi gia cầm bền vững bởi Công Ty Kim Và Gordon.",
    },
    quickLinks: { en: "Quick Links", vi: "Liên kết nhanh" },
    language: { en: "Language", vi: "Ngôn ngữ" },
    copyright: "© 2024 Công Ty Kim Và Gordon. All rights reserved.",
  },
} as const;

