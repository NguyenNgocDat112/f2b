import pr1 from "@/assets/images/images/products/Kính Cường Lực.png" 
import pr2 from "@/assets/images/images/products/Kính Dán An Toàn.png" 
 import pr3 from "@/assets/images/images/products/Kính Hộp.png" 
 import pr4 from "@/assets/images/images/products/Kính Low - E.png" 
 import pr5 from "@/assets/images/images/products/Kính Màu.png" 
 import pr6 from "@/assets/images/images/products/Kính Phản Quang.png" 
 import pr7 from "@/assets/images/images/products/Kính Uốn Cong.png" 
 import pr8 from "@/assets/images/images/products/Lam nhôm chắn nắng hình hộp.png" 
 import pr9 from "@/assets/images/images/products/Nhôm Hệ Cửa.png" 
 import pr10 from "@/assets/images/images/products/Nhôm Ốp Ngoài Trời.png"
 import pr11 from "@/assets/images/images/products/Trần Nhôm.png" 
 import pr12 from "@/assets/images/images/products/Tấm Ốp Mặt Dựng.png" 
 import logo1 from "@/assets/images/images/products/Công Ty Cổ Phần Nhôm Việt Dũng.webp"
 import logo2 from "@/assets/images/images/products/logo Công Ty TNHH Nhôm Kính Không Gian.png"
 import logo3 from "@/assets/images/images/products/Logo Công Ty Cổ Phần TID.webp"


export interface ShowcaseItem {
  name: string;
  image: string;
}

export interface Supplier {
  id: number;
  name: string;
  logo: string;
  brandLogoText: string;
  brandSubText: string;
  image: string;
  categories: string[];
  subCategories?: string[];
  nhomSanPhams?: string[];
  sanPhamCuThes?: string[];
  rating: number;
  reviews: number;
  location: string;
  address: string;
  phone: string;
  email: string;
  status: "active" | "inactive";
  established: string | number;
  description: string;
  badge: string;
  productsScale: string;
  scaleDetails: string;
  isVerified: boolean;
  websiteUrl: string;
  zaloUrl: string;
  representative: string;
  departmentPhone: string;
  productShowcase: ShowcaseItem[];
  mst?: string;
  englishName?: string;
}

export const AVAILABLE_LOCATIONS = [
  "Mê Linh - Hà Nội",
  "Chí Linh - Hải Phòng",
  "Gia Lâm - Hà Nội",
  "Thanh Miếu - Phú Thọ",
  "Đức Hòa - Tây Ninh",
  "Như Quỳnh - Hưng Yên",
  "Biên Hòa - Đồng Nai",
  "Tam Bình - TP.HCM",
  "Đông Anh - Hà Nội",
  "Dĩ An - TP.HCM",
  "Quế Võ - Bắc Ninh",
  "Núi Thành - Đà Nẵng",
  "Vũ Ninh - Bắc Ninh",
  "Thường Tín - Hà Nội",
  "Thanh Trì - Hà Nội",
  "TP. Hồ Chí Minh", 
  "Bình Dương", 
  "Đồng Nai", 
  "Quảng Ninh", 
  "Bà Rịa-Vũng Tàu", 
  "Kiên Giang"
];
export const AVAILABLE_CATEGORIES = [
  "Nguyên Vật Liệu",
  "Nội - Ngoại Thất",
  "Công Trình - Dự Án",
  "Dịch Vụ Nhà Ở",
  "Tư Vấn - Pháp Lý Xây Dựng"
];



export const SAND_GRAVEL_MINERAL_TREE = [
  {
    name: "Cát",
    items: ["Cát bê tông", "Cát xây tô", "Cát san lấp", "Cát nghiền cho bê tông", "Cát nghiền cho vữa", "Cát nghiền cho gạch không nung"]
  },
  {
    name: "Đá",
    items: [
      "Đá 1x2",
      "Đá 2x4",
      "Đá 3x4",
      "Đá 4x6",
      "Đá mi bụi",
      "Đá mi sàng",
      "Đá hộc",
      "Đá 0x4",
      "Cấp phối đá dăm loại I",
      "Cấp phối đá dăm loại II",
      "Sỏi xây dựng",
      "Sỏi lọc nước",
      "Đá vôi",
      "Dolomite"
    ]
  },
  {
    name: "Khoáng",
    items: [
      "Cao lanh / kaolin",
      "Đất sét",
      "Thạch anh / silica",
      "Feldspar / tràng thạch",
      "Thạch cao thô",
      "Bột đá CaCO3",
      "Bột dolomite",
      "Vôi sống",
      "Vôi tôi"
    ]
  }
];

export const ALUMINIUM_GLASS_TREE = [
  {
    name: "Nhôm",
    items: [
      "Nhôm thỏi / aluminium ingot",
      "Phôi nhôm / billet nhôm",
      "Nhôm slab / phôi dẹt nhôm",
      "Nhôm phế liệu",
      "Hợp kim nhôm",
      "Sơn bột tĩnh điện",
      "Sơn PVDF",
      "Hóa chất anodizing",
      "Thanh cách nhiệt PA66",
      "Nhôm tấm",
      "Nhôm cuộn",
      "Nhôm định hình",
      "Ống nhôm",
      "Nhôm thanh đặc",
      "Nhôm gân",
      "Nhôm hệ cửa",
      "Nhôm cầu cách nhiệt",
      "Aluminium composite panel / alu panel"
    ]
  },
  {
    name: "Kính",
    items: [
      "Cát trắng silica",
      "Soda ash",
      "Đá vôi cho kính",
      "Dolomite cho kính",
      "Feldspar cho kính",
      "Cullet / kính vụn tái chế",
      "Film PVB / EVA / SGP",
      "Spacer nhôm / warm edge spacer",
      "Hạt hút ẩm / desiccant",
      "Keo butyl / silicone / polysulfide",
      "Lớp phủ Low-E / reflective coating",
      "Kính nổi / float glass",
      "Kính cường lực",
      "Kính dán an toàn",
      "Kính hộp",
      "Kính Low-E",
      "Kính Solar Control",
      "Kính phản quang",
      "Kính trang trí",
      "Vách kính",
      "Lan can kính",
      "Mái kính"
    ]
  }
];

export const CEMENT_CONCRETE_ADMIXTURE_TREE = [
  {
    name: "Xi Măng",
    items: [
      "Nguyên liệu sản xuất clinker",
      "Đá vôi",
      "Đất sét / sét xi măng",
      "Đá sét",
      "Quặng sắt / laterite",
      "Cát silica / thạch anh",
      "Bauxite",
      "Clinker xi măng",
      "Thạch cao xi măng",
      "Đá vôi phụ gia",
      "Xi măng PC",
      "Xi măng PCB",
      "Xi măng xây trát",
      "Xi măng bền sun phát",
      "Xi măng xỉ lò cao"
    ]
  },
  {
    name: "Bê Tông",
    items: [
      "Bê tông thương phẩm",
      "Bê tông đúc sẵn",
      "Vữa khô",
      "Vữa xây tô",
      "Keo dán gạch",
      "Keo chà ron",
      "Grout / vữa rót"
    ]
  },
  {
    name: "Phụ Gia",
    items: [
      "Phụ gia khoáng xi măng",
      "Tro bay",
      "Xỉ lò cao",
      "Puzolan",
      "Silica fume",
      "Metakaolin",
      "Phụ gia hóa chất xi măng",
      "Phụ gia trợ nghiền",
      "Phụ gia tăng cường độ",
      "Phụ gia giảm Crom VI",
      "Phụ gia bê tông - vữa",
      "Phụ gia giảm nước",
      "Phụ gia siêu dẻo",
      "Phụ gia đông kết nhanh",
      "Phụ gia kéo dài đông kết",
      "Phụ gia chống thấm bê tông",
      "Phụ gia cuốn khí",
      "Phụ gia bù co ngót",
      "Sợi gia cường bê tông"
    ]
  }
];

export const IRON_STEEL_METAL_TREE = [
  {
    name: "Sắt",
    items: [
      "Quặng sắt",
      "Sắt thép phế liệu",
      "Gang thỏi",
      "Sắt đặc biệt",
      "Than cốc / coke",
      "Đá vôi luyện kim"
    ]
  },
  {
    name: "Thép",
    items: [
      "Thép cuộn cán nóng / HRC",
      "Thép cuộn cán nguội / CRC",
      "Thép tấm",
      "Thép băng / thép xẻ băng",
      "Thép cuộn mạ nền",
      "Thép cây / thép thanh vằn",
      "Thép cuộn xây dựng",
      "Thép hình H / I / U / V / C",
      "Ống thép",
      "Thép hộp",
      "Thép tấm công trình",
      "Thép bản mã",
      "Lưới thép",
      "Thép đặc biệt"
    ]
  },
  {
    name: "Tôn",
    items: [
      "Tôn xây dựng",
      "Tôn kẽm",
      "Tôn lạnh",
      "Tôn màu",
      "Tôn PU cách nhiệt",
      "Tôn ZAM / magie-kẽm-nhôm"
    ]
  },
  {
    name: "Kim Loại",
    items: [
      "Ferro alloy / hợp kim ferro",
      "Kẽm thỏi",
      "Nhôm thỏi cho mạ",
      "Hợp kim mạ",
      "Sơn phủ coil coating",
      "Hóa chất xử lý bề mặt",
      "Vật tư kim loại phụ trợ",
      "Que hàn",
      "Dây hàn",
      "Bu lông - ốc vít",
      "Bản mã",
      "Phụ kiện liên kết thép"
    ]
  }
];

export const BRICKS_STONE_CERAMICS_TREE = [
  {
    name: "Gạch",
    items: [
      "Gạch xây",
      "Gạch đất sét nung",
      "Gạch không nung",
      "Gạch block bê tông",
      "Gạch nhẹ AAC",
      "Gạch nhẹ ALC",
      "Gạch bê tông khí chưng áp",
      "Gạch ceramic",
      "Gạch porcelain",
      "Gạch cotto",
      "Gạch terracotta",
      "Gạch clinker",
      "Gạch bông",
      "Gạch trang trí"
    ]
  },
  {
    name: "Đá Ốp Lát",
    items: [
      "Đá tự nhiên ốp lát",
      "Đá granite",
      "Đá marble",
      "Đá onyx",
      "Đá quartzite",
      "Đá bazan",
      "Đá slate / đá phiến",
      "Đá nhân tạo & đá kỹ thuật",
      "Đá nhân tạo thạch anh",
      "Đá nung kết / sintered stone",
      "Đá terrazzo",
      "Solid surface",
      "Đá cảnh quan",
      "Đá sân vườn",
      "Đá cuội trang trí",
      "Sỏi trang trí",
      "Đá lát sân vườn"
    ]
  },
  {
    name: "Gốm Sứ",
    items: [
      "Nguyên liệu gạch - gốm sứ",
      "Đất sét",
      "Cao lanh / kaolin",
      "Feldspar / tràng thạch",
      "Thạch anh / silica",
      "Đá vôi",
      "Dolomite",
      "Bột đá",
      "Bột màu oxit",
      "Men frit",
      "Men gạch",
      "Zircon silicate",
      "Phụ gia ceramic"
    ]
  }
];

export const WOOD_PANEL_MATERIALS_TREE = [
  {
    name: "Gỗ",
    items: [
      "Nguyên liệu gỗ",
      "Gỗ tròn",
      "Gỗ xẻ",
      "Veneer / ván lạng",
      "Dăm gỗ",
      "Sợi gỗ",
      "Bột gỗ",
      "Tre / nứa nguyên liệu",
      "Gỗ xây dựng & gỗ kỹ thuật",
      "Gỗ tự nhiên",
      "Gỗ ghép thanh",
      "Gỗ kỹ thuật kết cấu",
      "Glulam",
      "CLT",
      "Cửa gỗ"
    ]
  },
  {
    name: "Ván Gỗ",
    items: [
      "Ván gỗ công nghiệp",
      "Ván ép / plywood",
      "Ván coppha phủ phim",
      "MDF",
      "HDF",
      "Ván dăm",
      "OSB",
      "Vật liệu gỗ hoàn thiện",
      "Sàn gỗ",
      "Tấm ốp gỗ",
      "Lam gỗ",
      "Keo & phụ gia sản xuất ván",
      "Keo UF",
      "Keo MUF",
      "Keo PF",
      "Keo MDI",
      "Melamine paper",
      "Film phenolic",
      "Phụ gia chống ẩm",
      "Phụ gia chống mối mọt",
      "Phụ gia chống cháy cho gỗ"
    ]
  },
  {
    name: "Gỗ Nhựa",
    items: [
      "Gỗ nhựa / WPC",
      "Lam gỗ nhựa",
      "Phụ gia gỗ nhựa"
    ]
  }
];

export const GYPSUM_TREE = [
  {
    name: "Nguyên liệu thạch cao",
    items: [
      "Thạch cao tự nhiên",
      "Thạch cao FGD",
      "Bột thạch cao",
      "Thạch cao xi măng",
      "Phụ gia thạch cao"
    ]
  },
  {
    name: "Tấm thạch cao",
    items: [
      "Tấm thạch cao tiêu chuẩn",
      "Tấm thạch cao chống ẩm",
      "Tấm thạch cao chống cháy",
      "Tấm thạch cao cách âm",
      "Tấm thạch cao chịu va đập"
    ]
  },
  {
    name: "Hệ trần - vách thạch cao",
    items: [
      "Trần thạch cao",
      "Vách thạch cao",
      "Khung xương trần vách",
      "Phụ kiện trần vách"
    ]
  },
  {
    name: "Trang trí thạch cao",
    items: [
      "Phào chỉ",
      "Hoa văn thạch cao",
      "Tấm trang trí thạch cao"
    ]
  }
];

export const PLASTIC_POLYMER_BITUMEN_TREE = [
  {
    name: "Nhựa",
    items: [
      "Nguyên liệu nhựa",
      "Hạt nhựa PVC",
      "Hạt nhựa HDPE",
      "Hạt nhựa PP",
      "Hạt nhựa PET",
      "Hạt nhựa ABS",
      "Hạt nhựa PC",
      "Bột PVC",
      "Compound PVC",
      "Sản phẩm nhựa xây dựng",
      "Ống nhựa PVC",
      "Ống HDPE",
      "Ống PP-R",
      "Cửa nhựa uPVC",
      "Tấm polycarbonate",
      "Tấm ốp nhựa",
      "Sàn nhựa",
      "Phụ kiện ống nhựa",
      "Gỗ nhựa ngoài trời"
    ]
  },
  {
    name: "Polymer",
    items: [
      "Màng polymer tổng hợp",
      "Màng polymer chống thấm",
      "Phụ gia nhựa",
      "Chất hóa dẻo",
      "Chất ổn định nhiệt",
      "Chống UV",
      "Chống oxy hóa",
      "Chống cháy",
      "Masterbatch màu",
      "Filler masterbatch CaCO3"
    ]
  },
  {
    name: "Bitumen",
    items: [
      "Bitumen / nhựa đường",
      "Nhựa đường 60/70",
      "Nhựa đường polymer modified bitumen",
      "Nhũ tương nhựa đường",
      "Cutback bitumen",
      "Bitumen chống thấm",
      "Màng chống thấm HDPE",
      "Màng địa kỹ thuật",
      "Màng PVC",
      "Màng TPO"
    ]
  }
];

export const INSULATION_TREE = [
  {
    name: "Cách Âm",
    items: [
      "Bông thủy tinh cách âm",
      "Bông khoáng cách âm",
      "Bông ceramic cách âm",
      "Bông polyester cách âm",
      "Thạch cao cách âm",
      "Vật liệu tiêu âm",
      "Mút tiêu âm",
      "Tấm cách âm trần vách"
    ]
  },
  {
    name: "Cách Nhiệt",
    items: [
      "Nguyên liệu sản xuất vật liệu cách nhiệt",
      "Đá bazan / đá núi lửa",
      "Cát silica",
      "Kính tái chế",
      "Đá vôi",
      "Dolomite",
      "Hạt EPS",
      "Hạt XPS / polystyrene",
      "Polyol",
      "Isocyanate",
      "Nhôm foil",
      "Phenolic resin",
      "Phụ gia chống cháy",
      "Bông thủy tinh",
      "Bông khoáng",
      "Bông ceramic",
      "Bông polyester",
      "Xốp cách nhiệt",
      "Xốp XPS",
      "Xốp EPS",
      "Foam PU",
      "Foam phenolic",
      "Panel cách nhiệt",
      "Panel EPS",
      "Panel PU",
      "Panel PIR",
      "Panel rockwool",
      "Panel glasswool",
      "Túi khí cách nhiệt",
      "Tấm cách nhiệt mái",
      "Tấm chống cháy"
    ]
  }
];

export const WATERPROOFING_MEMBRANE_TREE = [
  {
    name: "Chống Thấm",
    items: [
      "Nguyên liệu chống thấm",
      "Bitumen / nhựa đường",
      "Polymer SBS",
      "Polymer APP",
      "Acrylic resin",
      "PU resin",
      "Epoxy resin",
      "Cement polymer",
      "Bentonite",
      "HDPE resin",
      "TPO resin",
      "PVC resin",
      "Sợi polyester",
      "Sợi thủy tinh",
      "Phụ gia chống thấm",
      "Chống thấm dạng lỏng / coating",
      "Chống thấm gốc xi măng",
      "Chống thấm gốc acrylic",
      "Chống thấm gốc PU",
      "Chống thấm PU-Acrylic",
      "Chống thấm polyurea",
      "Chống thấm kết tinh thẩm thấu",
      "Chống thấm gốc bitum",
      "Sơn chống thấm"
    ]
  },
  {
    name: "Màng Kỹ Thuật",
    items: [
      "Màng chống thấm",
      "Màng bitum",
      "Màng HDPE",
      "Màng PVC",
      "Màng TPO",
      "Màng tổng hợp polymer",
      "Màng tự dính",
      "Màng kỹ thuật & phụ kiện",
      "Màng kỹ thuật",
      "Vải địa kỹ thuật",
      "Băng cản nước",
      "Keo trám khe",
      "Waterstop",
      "Phụ kiện thi công chống thấm"
    ]
  }
];

export const PAINT_COATING_TREE = [
  {
    name: "Sơn",
    items: [
      "Sơn trang trí & dân dụng",
      "Sơn nội thất",
      "Sơn ngoại thất",
      "Sơn lót kháng kiềm",
      "Sơn bóng",
      "Sơn giả đá",
      "Sơn vân gỗ",
      "Sơn công nghiệp",
      "Sơn epoxy nền nhà xưởng",
      "Sơn kết cấu thép",
      "Sơn chống gỉ",
      "Sơn chịu nhiệt",
      "Sơn giao thông",
      "Sơn tàu biển"
    ]
  },
  {
    name: "Bột Bả",
    items: [
      "Bột bả tường nội thất",
      "Bột bả tường ngoại thất",
      "Keo trám khe / sealant",
      "Keo silicone"
    ]
  },
  {
    name: "Chất Phủ",
    items: [
      "Nguyên liệu sản xuất sơn",
      "Bột màu",
      "Nhựa acrylic",
      "Dung môi",
      "Nhựa epoxy",
      "Nhựa alkyd",
      "Phụ gia ngành sơn",
      "Sơn phủ bảo vệ"
    ]
  }
];

export const MINERAL_CEMENT_BOARD_TREE = [
  {
    name: "Vật Liệu Tấm Khoáng",
    items: [
      "Tấm thạch cao kỹ thuật",
      "Tấm thạch cao chống cháy",
      "Tấm thạch cao chịu ẩm",
      "Tấm thạch cao cách âm",
      "Tấm thạch cao tiêu âm",
      "Tấm vật liệu khoáng khác",
      "Tấm calcium silicate",
      "Tấm magie oxide (MgO)",
      "Tấm cemboard",
      "Tấm sàn deck nhựa"
    ]
  },
  {
    name: "Xi Măng Sợi",
    items: [
      "Tấm xi măng sợi (Fiber Cement)",
      "Tấm xi măng sợi tiêu chuẩn",
      "Tấm xi măng sợi chịu lực",
      "Tấm xi măng sợi vân gỗ",
      "Tấm xi măng sợi trang trí"
    ]
  }
];

export const FIREPROOFING_TREE = [
  {
    name: "Chống Cháy",
    items: [
      "Sơn & Vữa chống cháy",
      "Sơn chống cháy cho thép",
      "Sơn chống cháy cho gỗ",
      "Vữa chống cháy cách nhiệt",
      "Vữa chống cháy cho bê tông"
    ]
  },
  {
    name: "Vật Liệu Ngăn Cháy",
    items: [
      "Vật liệu ngăn cháy lan",
      "Keo ngăn cháy",
      "Vữa ngăn cháy",
      "Tấm ngăn cháy",
      "Gối ngăn cháy",
      "Băng quấn ngăn cháy",
      "Cấu kiện ngăn cháy",
      "Cửa thép chống cháy",
      "Cửa kính chống cháy",
      "Màn cuốn ngăn cháy",
      "Van ngăn cháy"
    ]
  }
];

export const SEATING_WAITING_TREE = [
  {
    name: "Ngồi",
    items: ["Ghế sofa", "Ghế bành", "Ghế đôn", "Ghế thư giãn"]
  },
  {
    name: "Tiếp Khách",
    items: ["Bàn trà", "Bàn sofa", "Kệ tivi"]
  },
  {
    name: "Chờ Đợi",
    items: ["Ghế chờ", "Hệ thống ghế băng", "Quầy tiếp tân"]
  }
];

export const WORKING_LEARNING_MEETING_TREE = [
  {
    name: "Làm Việc",
    items: ["Bàn làm việc", "Ghế văn phòng", "Tủ hồ sơ"]
  },
  {
    name: "Học Tập",
    items: ["Bàn học", "Giá sách", "Đèn bàn"]
  },
  {
    name: "Hội Họp",
    items: ["Bàn họp lớn", "Ghế họp", "Bảng tương tác"]
  }
];

export const DINING_KITCHEN_BAR_TREE = [
  {
    name: "Ăn Uống",
    items: ["Bàn ăn", "Ghế ăn", "Tủ chén"]
  },
  {
    name: "Bếp",
    items: ["Tủ bếp", "Bàn đảo", "Kệ gia vị"]
  },
  {
    name: "Pha Chế",
    items: ["Quầy bar", "Ghế quầy bar", "Kệ ly"]
  }
];

export const SLEEPING_ACCOMMODATION_TREE = [
  {
    name: "Ngủ Nghỉ",
    items: ["Giường ngủ", "Nệm / Đệm", "Tab đầu giường"]
  },
  {
    name: "Lưu Trú",
    items: ["Tủ quần áo", "Bàn trang điểm", "Móc treo đồ"]
  }
];

export const STORAGE_ORGANIZATION_DISPLAY_TREE = [
  {
    name: "Lưu Trữ",
    items: ["Tủ đồ", "Hộp lưu trữ", "Kệ đa năng"]
  },
  {
    name: "Sắp Xếp",
    items: ["Khay phân loại", "Giá treo tường"]
  },
  {
    name: "Trưng Bày",
    items: ["Kệ trưng bày", "Tủ kính", "Hệ thống bục"]
  }
];

export const RECEPTION_TRANSACTION_SERVICE_TREE = [
  {
    name: "Tiếp Đón",
    items: ["Quầy lễ tân", "Bàn console"]
  },
  {
    name: "Giao Dịch",
    items: ["Quầy giao dịch", "Vách ngăn kính"]
  },
  {
    name: "Dịch Vụ",
    items: ["Kệ brochure", "Hệ thống chỉ dẫn"]
  }
];

export const SANITATION_PERSONAL_CARE_TREE = [
  {
    name: "Vệ Sinh",
    items: ["Bồn cầu", "Chậu rửa mặt (Lavabo)", "Bồn tiểu"]
  },
  {
    name: "Chăm Sóc Cá Nhân",
    items: ["Vòi sen", "Bồn tắm", "Gương soi", "Kệ phòng tắm"]
  }
];

export const CARE_TREATMENT_BEAUTY_TREE = [
  {
    name: "Chăm Sóc",
    items: ["Ghế massage", "Thiết bị chăm sóc sức khỏe"]
  },
  {
    name: "Điều Trị",
    items: ["Giường y tế", "Tủ thuốc"]
  },
  {
    name: "Làm Đẹp",
    items: ["Bàn trang điểm", "Ghế spa", "Hệ thống đèn soi gương"]
  }
];

export const WORSHIP_SPIRITUALITY_TREE = [
  {
    name: "Thờ Cúng",
    items: ["Bàn thờ", "Tủ thờ", "Án gian"]
  },
  {
    name: "Tâm Linh",
    items: ["Vách ngăn phòng thờ", "Đồ thờ trang trí", "Đèn thờ"]
  }
];

export const SHIELDING_PARTITION_PRIVACY_TREE = [
  {
    name: "Che Chắn",
    items: ["Rèm cửa", "Mành sáo", "Lam chắn nắng"]
  },
  {
    name: "Phân Chia",
    items: ["Vách ngăn di động", "Vách ngăn kính", "Bình phong"]
  },
  {
    name: "Riêng Tư",
    items: ["Cabin tiêu âm", "Tấm che bàn làm việc"]
  }
];

export const LIGHTING_DECORATION_IDENTIFICATION_TREE = [
  {
    name: "Chiếu Sáng",
    items: ["Đèn trần", "Đèn thả", "Đèn tường", "Đèn led dây"]
  },
  {
    name: "Trang Trí",
    items: ["Tranh treo tường", "Lọ hoa", "Tượng decor", "Gương nghệ thuật"]
  },
  {
    name: "Nhận Diện",
    items: ["Bảng hiệu", "Hộp đèn", "Chữ nổi"]
  }
];

export const ACOUSTICS_INSULATION_SOUNDPROOFING_TREE = [
  {
    name: "Âm Học",
    items: ["Tấm tiêu âm sợi bông", "Tấm tán âm gỗ"]
  },
  {
    name: "Cách Âm",
    items: ["Cửa cách âm", "Vách cách âm"]
  },
  {
    name: "Tiêu Âm",
    items: ["Mút xốp tiêu âm", "Trần tiêu âm"]
  }
];

export const SAFETY_ACCESS_PROTECTION_TREE = [
  {
    name: "An Toàn",
    items: ["Thanh vịn an toàn", "Băng dán chống trơn trượt"]
  },
  {
    name: "Tiếp Cận",
    items: ["Ram dốc di động", "Thảm dẫn đường người khiếm thị"]
  },
  {
    name: "Bảo Vệ",
    items: ["Thanh ốp góc cột", "Tấm bảo vệ tường"]
  }
];

export const PLAY_EDUCATION_MOVEMENT_TREE = [
  {
    name: "Vui Chơi",
    items: ["Cầu trượt", "Xích đu", "Bập bênh"]
  },
  {
    name: "Giáo Dục",
    items: ["Bàn ghế mầm non", "Bảng vẽ", "Kệ đồ chơi"]
  },
  {
    name: "Vận Động",
    items: ["Thang leo vận động", "Hố bóng"]
  }
];

export const OUTDOOR_GARDEN_LANDSCAPE_TREE = [
  {
    name: "Ngoài Trời",
    items: ["Bàn ghế ngoài trời", "Ghế hồ bơi", "Dù che nắng"]
  },
  {
    name: "Sân Vườn",
    items: ["Sàn gỗ nhựa ngoài trời", "Gạch lát sân"]
  },
  {
    name: "Cảnh Quan",
    items: ["Chậu cây", "Đèn sân vườn", "Đá cảnh quan", "Tiểu cảnh"]
  }
];

export const ACCESSORIES_HARDWARE_FINISHING_TREE = [
  {
    name: "Phụ Kiện",
    items: ["Tay nắm cửa", "Bản lề", "Ray trượt", "Khóa cửa"]
  },
  {
    name: "Hardware",
    items: ["Pát sắt liên kết", "Ốc vít nội thất"]
  },
  {
    name: "Hoàn Thiện Nội Thất",
    items: ["Nẹp nhôm", "Nẹp inox", "Chỉ trang trí", "Keo dán chuyên dụng"]
  }
];

export const TOTAL_CONTRACTOR_PACKAGE_TREE = [
  {
    name: "Tổng Thầu Thiết Kế Thi Công (D&B)",
    items: ["D&B Dân dụng", "D&B Công nghiệp", "D&B Thương mại"]
  },
  {
    name: "Tổng Thầu Thi Công Xây Dựng",
    items: ["Xây dựng dân dụng", "Xây dựng công nghiệp"]
  },
  {
    name: "Tổng Thầu EPC",
    items: ["EPC Năng lượng", "EPC Hạ tầng"]
  }
];

export const ROUGH_CONSTRUCTION_STRUCTURE_TREE = [
  {
    name: "Phần Móng & Ngầm",
    items: ["Cọc khoan nhồi", "Cọc ép bê tông", "Tường vây", "Hố móng"]
  },
  {
    name: "Khung Bê Tông Cốt Thép",
    items: ["Cột", "Dầm sàn", "Vách cứng", "Bê tông dự ứng lực"]
  },
  {
    name: "Kết Cấu Thép",
    items: ["Nhà tiền chế", "Dàn không gian", "Kết cấu thép đặc biệt"]
  }
];

export const FINISHING_FITOUT_RENOVATION_TREE = [
  {
    name: "Xây Tô & Trát",
    items: ["Xây tường gạch", "Tô trát tường", "Cán nền"]
  },
  {
    name: "Ốp Lát & Trần Vách",
    items: ["Ốp lát gạch đá", "Trần thạch cao", "Vách ngăn trang trí"]
  },
  {
    name: "Sơn Bả & Hoàn Thiện",
    items: ["Sơn nước", "Sơn hiệu ứng", "Giấy dán tường", "Sàn gỗ/nhựa"]
  }
];

export const FACTORY_INDUSTRIAL_TREE = [
  {
    name: "Nhà Xưởng Tiền Chế",
    items: ["Khung kèo thép", "Tấm panel bao che", "Mái tôn cách nhiệt"]
  },
  {
    name: "Nền Sàn Công Nghiệp",
    items: ["Sàn bê tông xoa nền", "Sàn epoxy", "Sàn kháng hóa chất"]
  },
  {
    name: "Phụ Trợ Công Nghiệp",
    items: ["Cẩu trục", "Cửa cuốn nhanh", "Hệ thống thông gió nhà xưởng"]
  }
];

export const LAND_CLEARING_YARD_INFRASTRUCTURE_TREE = [
  {
    name: "San Lấp Mặt Bằng",
    items: ["Đào đắp đất đá", "Bơm cát san lấp", "Lu lèn nền đất"]
  },
  {
    name: "Sân Bãi & Đường Nội Bộ",
    items: ["Đường bê tông", "Đường nhựa nóng (Asphalt)", "Sân bãi lát gạch/đá"]
  },
  {
    name: "Hạ Tầng Ngoài Nhà",
    items: ["Hàng rào bảo vệ", "Cổng ngõ", "Hệ thống thoát nước mưa"]
  }
];

export const TRANSPORTATION_TECHNICAL_WATER_TREE = [
  {
    name: "Công Trình Giao Thông",
    items: ["Đường bộ", "Cầu giao thông", "Hầm chui"]
  },
  {
    name: "Hạ Tầng Kỹ Thuật Đô Thị",
    items: ["Hệ thống cấp nước", "Hệ thống thoát nước thải", "Hệ thống chiếu sáng đô thị"]
  },
  {
    name: "Công Trình Thủy Lợi",
    items: ["Kênh mương", "Đập/Hồ chứa nước", "Kè chống sạt lở"]
  }
];

export const MEP_SYSTEM_TREE = [
  {
    name: "Hệ Thống Điện (Electrical)",
    items: ["Trạm biến áp", "Tủ điện phân phối", "Cáp điện lực", "Hệ thống chiếu sáng"]
  },
  {
    name: "Điện Nhẹ (ELV)",
    items: ["Camera giám sát (CCTV)", "Mạng Internet & Điện thoại", "Kiểm soát ra vào", "Hệ thống âm thanh"]
  },
  {
    name: "Điều Hòa & Thông Gió (HVAC)",
    items: ["Điều hòa trung tâm (VRV/Chiller)", "Quạt thông gió", "Hệ thống ống gió"]
  },
  {
    name: "Cấp Thoát Nước & PCCC",
    items: ["Bơm cấp nước", "Hệ thống đường ống", "Thiết bị báo cháy", "Hệ thống chữa cháy sprinkler"]
  }
];

export const POOL_SPORTS_PLAYGROUND_TREE = [
  {
    name: "Hồ Bơi & Spa",
    items: ["Xây dựng hồ bơi", "Hệ thống lọc nước hồ bơi", "Bể sục jacuzzi"]
  },
  {
    name: "Sân Thể Thao Ngoài Trời",
    items: ["Sân bóng đá cỏ nhân tạo", "Sân tennis", "Sân bóng rổ", "Đường chạy điền kinh"]
  },
  {
    name: "Khu Vui Chơi Trẻ Em",
    items: ["Khu vui chơi liên hoàn", "Thiết bị vui chơi công viên"]
  }
];

export const KARAOKE_CINEMA_ENTERTAINMENT_TREE = [
  {
    name: "Thiết Kế & Cách Âm",
    items: ["Thiết kế tiêu âm", "Cách âm phòng hát", "Cửa cách âm chuyên dụng"]
  },
  {
    name: "Thiết Bị Âm Thanh Ánh Sáng",
    items: ["Hệ thống loa karaoke", "Đèn laser hiệu ứng", "Màn hình led sân khấu"]
  },
  {
    name: "Trang Trí Nội Thất Giải Trí",
    items: ["Vách ốp trang trí 3D", "Ghế sofa karaoke", "Hệ thống tủ rack"]
  }
];

export const CLEANROOM_COLD_STORAGE_TREE = [
  {
    name: "Phòng Sạch (Cleanroom)",
    items: ["Tấm panel phòng sạch", "Hệ thống lọc khí HEPA", "Air Shower", "Sàn vinyl kháng khuẩn"]
  },
  {
    name: "Kho Lạnh (Cold Storage)",
    items: ["Cụm máy nén dàn ngưng", "Vỏ kho lạnh cách nhiệt (PU)", "Cửa kho lạnh chuyên dụng"]
  }
];

export const FACADE_WATERPROOF_SOUNDPROOF_TREE = [
  {
    name: "Mặt Dựng (Facade)",
    items: ["Mặt dựng nhôm kính (Curtain Wall)", "Tấm ốp nhôm Alu", "Lam nhôm trang trí"]
  },
  {
    name: "Chống Thấm Công Trình",
    items: ["Chống thấm tầng hầm", "Chống thấm sàn mái/ban công", "Chống thấm bể nước"]
  },
  {
    name: "Cách Âm & Tiêu Âm Vỏ Bao",
    items: ["Vách cách âm mặt dựng", "Tấm tiêu âm ngoài trời"]
  }
];

export const PROJECT_SUB_CATEGORIES = [
  { name: "Tổng Thầu - Trọn Gói", count: 15 },
  { name: "Phần Thô - Kết Cấu", count: 18 },
  { name: "Hoàn Thiện - Fit-out - Cải Tạo", count: 24 },
  { name: "Nhà Xưởng - Công Nghiệp", count: 12 },
  { name: "San Lấp - Sân Bãi - Hạ Tầng Ngoài Nhà", count: 14 },
  { name: "Giao Thông - Hạ Tầng Kỹ Thuật - Thủy Lợi", count: 16 },
  { name: "Cơ Điện - Hệ Thống Công Trình", count: 22 },
  { name: "Hồ Bơi - Sân Thể Thao - Khu Vui Chơi", count: 10 },
  { name: "Karaoke - Rạp Chiếu - Phòng Giải Trí", count: 8 },
  { name: "Phòng Sạch - Kho Lạnh", count: 9 },
  { name: "Mặt Dựng - Chống Thấm - Cách Âm", count: 13 }
];

export const SURVEY_MEASUREMENT_STATUS_TREE = [
  {
    name: "Khảo Sát Địa Hình",
    items: ["Đo đạc bản đồ", "Khảo sát trắc địa", "Bay quét UAV 3D"]
  },
  {
    name: "Khảo Sát Địa Chất",
    items: ["Khoan khảo sát địa chất", "Thí nghiệm hiện trường", "Xây dựng bản đồ địa chất"]
  }
];

export const MATERIAL_TESTING_INSPECTION_TREE = [
  {
    name: "Thí Nghiệm Vật Liệu Xây Dựng",
    items: ["Thử nghiệm bê tông", "Thử nghiệm thép xây dựng", "Thử nghiệm gạch, cát, đá"]
  },
  {
    name: "Kiểm Định Chất Lượng Vật Liệu",
    items: ["Chứng nhận chất lượng hợp chuẩn", "Thí nghiệm vật liệu chuyên sâu"]
  }
];

export const STRUCTURE_FOUNDATION_INSPECTION_TREE = [
  {
    name: "Kiểm Định Kết Cấu Công Trình",
    items: ["Đánh giá độ an toàn chịu lực", "Siêu âm khuyết tật bê tông", "Kiểm tra độ võng, nứt dầm sàn"]
  },
  {
    name: "Kiểm Định Nền Móng",
    items: ["Thử tải tĩnh cọc bê tông", "Thử động biến dạng lớn (PDA)", "Siêu âm cọc khoan nhồi"]
  }
];

export const MONITORING_TRACKING_TREE = [
  {
    name: "Quan Trắc Lún & Nghiêng",
    items: ["Đo lún công trình", "Đo nghiêng nhà", "Quan trắc chuyển vị ngang"]
  },
  {
    name: "Theo Dõi Sức Khỏe Công Trình (SHM)",
    items: ["Cảm biến ứng suất trắc", "Theo dõi chấn động và rung chấn"]
  }
];

export const CONSTRUCTION_SUPERVISION_TREE = [
  {
    name: "Giám Sát Thi Công Xây Dựng",
    items: ["Giám sát kết cấu phần thô", "Giám sát hoàn thiện kiến trúc"]
  },
  {
    name: "Giám Sát Lắp Đặt Thiết Bị",
    items: ["Giám sát hệ thống cơ điện (MEP)", "Giám sát thiết bị công nghệ"]
  }
];

export const PROJECT_MANAGEMENT_COORDINATION_TREE = [
  {
    name: "Quản Lý Dự Án Xây Dựng",
    items: ["Điều phối tiến độ thi công", "Kiểm soát chất lượng công trình", "Quản lý rủi ro dự án"]
  },
  {
    name: "Tư Vấn Giám Sát Chủ Đầu Tư",
    items: ["Tư văn quản lý chi phí", "Tư vấn lựa chọn nhà thầu"]
  }
];

export const ESTIMATION_VOLUME_COST_TREE = [
  {
    name: "Lập Dự Toán Công Trình",
    items: ["Dự toán xây dựng", "Dự toán cơ điện MEP", "Dự toán chi phí thiết bị"]
  },
  {
    name: "Đo Bóc Khối Lượng (QS)",
    items: ["Đo bóc khối lượng kết cấu", "Đo bóc khối lượng kiến trúc", "Thẩm tra khối lượng (QS Audit)"]
  }
];

export const BIDDING_DOSSIER_TREE = [
  {
    name: "Lập Hồ Sơ Mời Thầu",
    items: ["Hồ sơ mời thầu xây lắp", "Hồ sơ mời thầu tư vấn", "Tiêu chuẩn kỹ thuật mời thầu"]
  },
  {
    name: "Đánh Giá Hồ Sơ Dự Thầu",
    items: ["Đánh giá năng lực nhà thầu", "Thẩm định đề xuất kỹ thuật/tài chính"]
  }
];

export const DESIGN_VERIFICATION_APPRAISAL_TREE = [
  {
    name: "Thẩm Tra Thiết Kế Bản Vẽ",
    items: ["Thẩm tra kết cấu chịu lực", "Thẩm tra kiến trúc & quy hoạch", "Thẩm tra thiết kế cơ điện MEP"]
  },
  {
    name: "Thẩm Định Dự Án Đầu Tư",
    items: ["Đánh giá tính khả thi thiết kế", "Thẩm định sự phù hợp tiêu chuẩn"]
  }
];

export const CONSTRUCTION_LEGAL_PERMIT_TREE = [
  {
    name: "Cấp Phép Xây Dựng",
    items: ["Xin phép xây dựng mới", "Xin phép cải tạo - sửa chữa", "Phê duyệt quy hoạch 1/500"]
  },
  {
    name: "Pháp Lý PCCC & Môi Trường",
    items: ["Thẩm duyệt thiết kế PCCC", "Đánh giá tác động môi trường (ĐTM)"]
  }
];

export const ACCEPTANCE_AS_BUILT_HANDOVER_TREE = [
  {
    name: "Nghiệm Thu Công Trình",
    items: ["Nghiệm Thu Nội Bộ", "Nghiệm thu đưa vào sử dụng (A-B)", "Nghiệm thu chuyên ngành bộ ngành"]
  },
  {
    name: "Hồ Sơ Hoàn Công & Bàn Giao",
    items: ["Vẽ bản vẽ hoàn công", "Lập hồ sơ nghiệm thu hoàn công", "Bàn giao đưa vào vận hành"]
  }
];

export const SAFETY_ENVIRONMENT_CERTIFICATE_TREE = [
  {
    name: "Huấn Luyện & Giám Sát An Toàn",
    items: ["Huấn luyện an toàn lao động (HSE)", "Giám sát vệ sinh môi trường", "Cấp chứng chỉ an toàn"]
  },
  {
    name: "Chứng Nhận Chất Lượng Công Trình",
    items: ["Chứng nhận sự phù hợp chất lượng", "Chứng chỉ công trình xanh (LEED, LOTUS)"]
  }
];

export const INCIDENT_DISPUTE_EXPERT_TREE = [
  {
    name: "Giám Định Sự Cố Xây Dựng",
    items: ["Giám định nguyên nhân sụp đổ", "Giám định nguyên nhân nứt lún", "Đề xuất giải pháp khắc phục sự cố"]
  },
  {
    name: "Giải Quyết Tranh Chấp Kỹ Thuật",
    items: ["Trọng tài tranh chấp hợp đồng", "Giám định tư pháp độc lập"]
  }
];

export const LEGAL_SUPERVISION_SUB_CATEGORIES = [
  { name: "Khảo Sát - Đo Đạc - Hiện Trạng", count: 14 },
  { name: "Thí Nghiệm - Kiểm Định Vật Liệu", count: 12 },
  { name: "Kiểm Định Kết Cấu - Nền Móng", count: 15 },
  { name: "Quan Trắc - Theo Dõi Công Trình", count: 10 },
  { name: "Giám Sát Thi Công", count: 18 },
  { name: "Quản Lý Dự Án - Điều Phối Công Trình", count: 16 },
  { name: "Dự Toán - Khối Lượng - Chi Phí", count: 11 },
  { name: "Đấu Thầu - Hồ Sơ Mời Thầu", count: 9 },
  { name: "Thẩm Tra - Thẩm Định Thiết Kế", count: 13 },
  { name: "Pháp Lý Xây Dựng - Xin Phép", count: 14 },
  { name: "Nghiệm Thu - Hoàn Công - Bàn Giao", count: 12 },
  { name: "An Toàn - Môi Trường - Chứng Nhận", count: 11 },
  { name: "Giám Định Sự Cố - Tranh Chấp", count: 8 }
];

export const CLEANING_DEODORIZING_TREE = [
  {
    name: "Vệ Sinh Định Kỳ",
    items: ["Dọn dẹp nhà cửa", "Giặt sofa, nệm, rèm", "Vệ sinh sau xây dựng"]
  },
  {
    name: "Khử Mùi & Khử Trùng",
    items: ["Khử trùng không khí", "Khử mùi hôi nấm mốc"]
  }
];

export const REPAIR_MAINTENANCE_TREE = [
  {
    name: "Sửa Chữa Kết Cấu",
    items: ["Sửa tường nứt", "Sửa trần thạch cao", "Sửa sàn gỗ/gạch"]
  },
  {
    name: "Bảo Trì Định Kỳ",
    items: ["Kiểm tra hệ thống nhà", "Bảo dưỡng cửa, khóa"]
  }
];

export const DOMESTIC_ELECTRICAL_WATER_TREE = [
  {
    name: "Hệ Thống Điện",
    items: ["Sửa chữa chập điện", "Đi dây điện âm tường", "Lắp đặt đèn, ổ cắm"]
  },
  {
    name: "Hệ Thống Nước",
    items: ["Sửa đường ống nước rò rỉ", "Lắp đặt máy bơm nước", "Thông tắc đường ống"]
  }
];

export const REFRIGERATION_HOME_APPLIANCES_TREE = [
  {
    name: "Điện Lạnh",
    items: ["Vệ sinh máy lạnh", "Sửa tủ lạnh, tủ đông", "Lắp đặt điều hòa"]
  },
  {
    name: "Thiết Bị Gia Dụng",
    items: ["Sửa máy giặt, máy sấy", "Sửa bếp điện, lò vi sóng", "Bảo trì máy lọc nước"]
  }
];

export const WATERPROOF_LEAK_WALL_CRACK_TREE = [
  {
    name: "Chống Thấm Thấm Dột",
    items: ["Chống thấm nhà vệ sinh", "Chống thấm sân thượng/ban công", "Chống dột mái tôn"]
  },
  {
    name: "Xử Lý Nứt Tường",
    items: ["Bơm keo epoxy nứt tường", "Sơn gai chống thấm nứt"]
  }
];

export const SECURITY_CAMERA_SMART_HOME_TREE = [
  {
    name: "Hệ Thống An Ninh",
    items: ["Lắp đặt camera giám sát", "Lắp khóa cửa vân tay/thẻ từ", "Hệ thống báo động đột nhập"]
  },
  {
    name: "Nhà Thông Minh (Smart Home)",
    items: ["Lắp đặt công tắc thông minh", "Điều khiển giọng nói & tự động hóa"]
  }
];

export const FIRE_SAFETY_FAMILY_TREE = [
  {
    name: "Phòng Cháy Chữa Cháy",
    items: ["Lắp đầu báo khói/nhiệt", "Lắp bình chữa cháy gia đình", "Hệ thống báo cháy mini"]
  },
  {
    name: "An Toàn Gia Đình",
    items: ["Lắp lưới an toàn ban công", "Thang thoát hiểm", "Cảnh báo rò rỉ gas"]
  }
];

export const GARDEN_GREENERY_FISH_POND_TREE = [
  {
    name: "Chăm Sóc Sân Vườn",
    items: ["Cắt tỉa cây cảnh/thảm cỏ", "Chăm sóc sân vườn định kỳ", "Trồng cây xanh ban công"]
  },
  {
    name: "Hồ Cá & Non Bộ",
    items: ["Thiết kế hồ cá Koi", "Vệ sinh bộ lọc hồ cá", "Tiểu cảnh nước sinh thái"]
  }
];

export const POOL_WATER_TANK_USABLE_WATER_TREE = [
  {
    name: "Hồ Bơi Gia Đình",
    items: ["Vệ sinh & xử lý nước hồ bơi", "Sửa chữa bơm lọc hồ bơi", "Chống thấm bể bơi"]
  },
  {
    name: "Bể Nước & Nước Sinh Hoạt",
    items: ["Thau rửa bể nước ngầm/bồn inox", "Lắp đặt hệ thống lọc nước đầu nguồn"]
  }
];

export const INSECT_PEST_CONTROL_TREE = [
  {
    name: "Diệt Côn Trùng",
    items: ["Phun thuốc diệt muỗi, gián", "Phun thuốc diệt kiến, mối"]
  },
  {
    name: "Kiểm Soát Sinh Vật",
    items: ["Bẫy chuột gia đình", "Phòng ngừa côn trùng định kỳ"]
  }
];

export const HOUSE_MOVING_TRANSPORT_STORAGE_TREE = [
  {
    name: "Dịch Vụ Chuyển Nhà",
    items: ["Chuyển nhà trọn gói", "Tháo lắp đồ đạc nội thất khi chuyển"]
  },
  {
    name: "Vận Chuyển & Lưu Kho",
    items: ["Thuê xe tải chở đồ", "Dịch vụ gửi đồ, lưu kho tạm thời"]
  }
];

export const HOME_FURNITURE_INSTALL_REPAIR_TREE = [
  {
    name: "Lắp Đặt Nội Thất",
    items: ["Lắp đặt tủ bếp, tủ áo", "Treo tranh ảnh, kệ tường", "Lắp ráp bàn ghế giường"]
  },
  {
    name: "Sửa Chữa Nội Thất",
    items: ["Sơn lại gỗ cũ", "Thay bản lề, ray trượt hỏng", "Bọc lại da sofa/ghế"]
  }
];

export const WASTEWATER_DRAIN_ENVIRONMENT_TREE = [
  {
    name: "Thông Tắc & Môi Trường",
    items: ["Hút bể phốt (hầm cầu)", "Thông tắc cống rãnh thoát nước", "Xử lý mùi hôi đường cống"]
  },
  {
    name: "Rác Thải & Thoát Nước",
    items: ["Thu gom rác thải cồng kềnh", "Nạo vét hố ga gia đình"]
  }
];

export const INSPECTION_ADVISORY_HOUSE_STATUS_TREE = [
  {
    name: "Kiểm Tra Nhà Cửa",
    items: ["Đo đạc diện tích thực tế", "Kiểm tra kết cấu thấm dột trước khi mua", "Khảo sát chất lượng nhà cũ"]
  },
  {
    name: "Tư Vấn Cải Tạo",
    items: ["Tư vấn nâng cấp sửa chữa", "Thiết kế phương án không gian"]
  }
];

export const LEGAL_DOSSIER_HOUSE_TREE = [
  {
    name: "Thủ Tục Pháp Lý",
    items: ["Hỗ trợ thủ tục hoàn công", "Hồ sơ xin phép sửa chữa nhà", "Tư vấn sang tên sổ hồng/đỏ"]
  },
  {
    name: "Giấy Tờ Sở Hữu",
    items: ["Kiểm tra quy hoạch đất đai", "Tranh chấp ranh giới đất đai"]
  }
];

export const MANAGE_OPERATE_RENTAL_HOUSE_TREE = [
  {
    name: "Quản Lý Cho Thuê",
    items: ["Quản lý vận hành căn hộ dịch vụ", "Bảo trì định kỳ nhà cho thuê", "Hỗ trợ tìm kiếm khách thuê"]
  },
  {
    name: "Dịch Vụ Khách Hàng",
    items: ["Quản lý hóa đơn điện nước", "Vệ sinh buồng phòng cho thuê"]
  }
];

export const HOME_SERVICES_SUB_CATEGORIES = [
  { name: "Vệ Sinh - Dọn Dẹp - Khử Mùi", count: 18 },
  { name: "Sửa Chữa - Bảo Trì Nhà Ở", count: 15 },
  { name: "Điện - Nước Dân Dụng", count: 20 },
  { name: "Điện Lạnh - Thiết Bị Gia Dụng", count: 16 },
  { name: "Chống Thấm - Thấm Dột - Nứt Tường", count: 14 },
  { name: "An Ninh - Camera - Nhà Thông Minh", count: 13 },
  { name: "PCCC - An Toàn Gia Đình", count: 10 },
  { name: "Sân Vườn - Cây Xanh - Hồ Cá", count: 12 },
  { name: "Hồ Bơi - Bể Nước - Nước Sinh Hoạt", count: 9 },
  { name: "Diệt Côn Trùng - Kiểm Soát Sinh Vật Gây Hại", count: 11 },
  { name: "Chuyển Nhà - Vận Chuyển - Lưu Kho", count: 8 },
  { name: "Nội Thất Gia Đình - Lắp Đặt - Sửa Chữa", count: 15 },
  { name: "Thoát Thải - Cống Rãnh - Môi Trường Nhà Ở", count: 12 },
  { name: "Kiểm Tra - Tư Vấn Tình Trạng Nhà", count: 14 },
  { name: "Pháp Lý - Hồ Sơ Nhà Ở", count: 11 },
  { name: "Quản Lý - Vận Hành Nhà Cho Thuê", count: 10 }
];

export const INTERIOR_SUB_CATEGORIES = [
  { name: "Ngồi - Tiếp Khách - Chờ Đợi", count: 18 },
  { name: "Làm Việc - Học Tập - Hội Họp", count: 15 },
  { name: "Ăn Uống - Bếp - Pha Chế", count: 22 },
  { name: "Ngủ Nghỉ - Lưu Trú", count: 12 },
  { name: "Lưu Trữ - Sắp Xếp - Trưng Bày", count: 20 },
  { name: "Tiếp Đón - Giao Dịch - Dịch Vụ", count: 14 },
  { name: "Vệ Sinh - Chăm Sóc Cá Nhân", count: 16 },
  { name: "Chăm Sóc - Điều Trị - Làm Đẹp", count: 11 },
  { name: "Thờ Cúng - Tâm Linh", count: 8 },
  { name: "Che Chắn - Phân Chia - Riêng Tư", count: 13 },
  { name: "Chiếu Sáng - Trang Trí - Nhận Diện", count: 19 },
  { name: "Âm Học - Cách Âm - Tiêu Âm", count: 10 },
  { name: "An Toàn - Tiếp Cận - Bảo Vệ", count: 12 },
  { name: "Vui Chơi - Giáo Dục - Vận Động", count: 9 },
  { name: "Ngoài Trời - Sân Vườn - Cảnh Quan", count: 25 },
  { name: "Phụ Kiện - Hardware - Hoàn Thiện Nội Thất", count: 21 }
];

export const MATERIALS_SUB_CATEGORIES = [
  { name: "Cát - Đá - Khoáng", count: 36 },
  { name: "Xi Măng - Bê Tông - Phụ Gia", count: 37 },
  { name: "Sắt - Thép - Tôn - Kim Loại", count: 39 },
  { name: "Nhôm - Kính", count: 40 },
  { name: "Gạch - Đá Ốp Lát - Gốm Sứ", count: 39 },
  { name: "Gỗ - Ván Gỗ - Gỗ Nhựa", count: 32 },
  { name: "Thạch Cao", count: 17 },
  { name: "Nhựa - Polymer - Bitumen", count: 34 },
  { name: "Cách Âm - Cách Nhiệt", count: 30 },
  { name: "Chống Thấm - Màng Kỹ Thuật", count: 34 },
  { name: "Sơn - Bột Bả - Chất Phủ", count: 30 },
  { name: "Vật Liệu Tấm Khoáng - Xi Măng Sợi", count: 16 },
  { name: "Chống Cháy - Vật Liệu Ngăn Cháy", count: 24 }
];

const NGUYEN_VAT_LIEU_COUNT = MATERIALS_SUB_CATEGORIES.reduce((acc, curr) => acc + curr.count, 0);

export const MOCK_FILTER_DATA = {
  mainCategory: { name: "Tất cả danh mục", count: NGUYEN_VAT_LIEU_COUNT + 285 + 195 + 220 + 150 },
  subCategories: [
    { name: "Nguyên vật liệu", count: NGUYEN_VAT_LIEU_COUNT },
    { name: "Nội ngoại thất", count: 285 },
    { name: "Công trình - Dự án", count: 195 },
    { name: "Kiểm định - Giám sát - Pháp lý", count: 150 },
    { name: "Dịch vụ nhà ở", count: 220 },
  ],
  locations: AVAILABLE_LOCATIONS,
  relatedIndustries: [
    { name: "Xây Dựng & Kiến Trúc", count: 1540 },
    { name: "Thiết Kế Nội Thất", count: 862 }
  ],
  tags: [
    "Nguyên Vật Liệu",
    "Nội - Ngoại Thất",
    "Công Trình - Dự Án",
    "Dịch Vụ Nhà Ở",
    "Tư Vấn - Pháp Lý"
  ],
  roles: ["Nhà sản xuất", "Nhà phân phối", "Đại lý cấp 1", "Đại lý bán lẻ", "Tổng thầu"],
  models: ["Doanh nghiệp FDI", "Công ty Cổ phần", "Công ty TNHH", "Tập đoàn", "Hộ kinh doanh"]
};

const BASE_LIST_SUPPLIERS: Supplier[] = [
  {
    id: 1,
    name: "Công Ty Trách Nhiệm Hữu Hạn Một Thành Viên - Thương Mại Dịch Vụ Cổ Phần Hoá Vốn Hoá Quang Thái",
    logo: "M",
    brandLogoText: "MAXIDI",
    brandSubText: "Chợ Kiểu Mới",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Gạch Ốp Lát", "Sắt Thép & Xi Măng"],
    rating: 4.9,
    reviews: 142,
    location: "TP. Hồ Chí Minh",
    address: "25A An Phú Đông 25, P. An Phú Đông, Q.12, Thành Phố Hồ Chí Minh",
    phone: "0968 779 976",
    email: "willow.saulnguyen@gmail.com",
    status: "active",
    established: 2012,
    description: "Nhà cung cấp uy tín hàng đầu về gỗ tự nhiên, gỗ ghép công nghệ và các giải pháp gỗ nhựa composite cho các công trình trọng điểm toàn thành phố.",
    badge: "Thành Viên Vàng",
    productsScale: "Doanh Nghiệp Trong Nước - Nhà Sản Xuất",
    scaleDetails: "2 Nhà Máy - 1 VPĐĐ - 3 Kho Chứa Hàng\nDiện Tích: 43.000m2",
    isVerified: true,
    websiteUrl: "www.hungduplastics.com",
    zaloUrl: "https://zalo.me/0968779976",
    representative: "Vinh Nguyễn",
    departmentPhone: "0968 779 976",
    productShowcase: [
      {
        name: "Gỗ tự nhiên",
        image: "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&q=80&w=400&h=260"
      },
      {
        name: "Gỗ ghép thanh",
        image: "https://images.unsplash.com/photo-1541123437800-1c9102c219da?auto=format&fit=crop&q=80&w=400&h=260"
      },
      {
        name: "Ván ép / plywood",
        image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=400&h=260"
      },
      {
        name: "Gỗ công nghiệp",
        image: "https://images.unsplash.com/photo-1507312436339-df1f07cf1f96?auto=format&fit=crop&q=80&w=400&h=260"
      },
      {
        name: "Gỗ nhựa",
        image: "https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&q=80&w=400&h=260"
      },
      {
        name: "Sàn gỗ công nghiệp",
        image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=400&h=260"
      },
      {
        name: "Phụ kiện nghành gỗ",
        image: "https://images.unsplash.com/photo-1605814060002-39feaf1bf5e5?auto=format&fit=crop&q=80&w=400&h=260"
      },
      {
        name: "Keo dán gỗ chuyên dụng",
        image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=400&h=260"
      }
    ]
  },
  {
    id: 2,
    name: "Tập Đoàn Hoà Phát - Chi Nhánh Thép Xây Dựng",
    logo: "HP",
    brandLogoText: "HOA PHAT",
    brandSubText: "Thép Việt Bền Vững",
    image: "https://images.unsplash.com/photo-1504307651254-35680f35aa9e?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Sắt Thép & Xi Măng"],
    rating: 4.8,
    reviews: 245,
    location: "Đà Nẵng",
    address: "Đường số 6, KCN Hòa Khánh, Liên Chiểu, Đà Nẵng",
    phone: "0236 3734 567",
    email: "thephe@hoaphat.com.vn",
    status: "active",
    established: 1992,
    description: "Thép xây dựng Hòa Phát chiếm thị phần số 1 tại Việt Nam. Sử dụng công nghệ lò cao khép kín hiện đại, tối ưu chi phí, chịu lực siêu bền cho mọi công trình trọng điểm.",
    badge: "Thị Phần Số 1",
    productsScale: "Tập Đoàn Công Nghiệp - Nhà Sản Xuất Thép",
    scaleDetails: "Khu Liên Hợp Dung Quất - Diện Tích: 4.500.000m² - Công Suất 8.5 Triệu Tấn",
    isVerified: true,
    websiteUrl: "www.hoaphat.com.vn",
    zaloUrl: "https://zalo.me/02363734567",
    representative: "Vinh Nguyễn",
    departmentPhone: "0968 779 976",
    productShowcase: [
      {
        name: "Thép thanh vằn D10-D40",
        image: "https://images.unsplash.com/photo-1504307651254-35680f35aa9e?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Thép cuộn mạ kẽm phi 6",
        image: "https://images.unsplash.com/photo-1518174526364-7098e9fc7e60?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Ống thép hộp đen siêu bền",
        image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Xà gồ mạ kẽm chữ C-Z",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Thép cốt bê tông đúc",
        image: "https://images.unsplash.com/photo-1628186178303-62ebdbbc16ef?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Dây thép gai 3mm",
        image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Lưới thép B40 bọc nhựa",
        image: "https://images.unsplash.com/photo-1616455246714-fa2d665accac?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Thép hình chữ H",
        image: "https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?auto=format&fit=crop&q=100&w=400&h=260"
      }
    ]
  },
  {
    id: 3,
    name: "Nhà Phân Phối Sơn Dulux AkzoNobel Việt Nam",
    logo: "DL",
    brandLogoText: "DULUX DL",
    brandSubText: "Sơn Màu Kết Nối",
    image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Sơn & Chống Thấm"],
    rating: 4.7,
    reviews: 98,
    location: "Hà Nội",
    address: "Tòa nhà Lotte, 54 Liễu Giai, Ba Đình, Hà Nội",
    phone: "1900 555 561",
    email: "dulux.vietnam@akzonobel.com",
    status: "active",
    established: 2004,
    description: "Cung cấp các dòng sơn nước cao cấp Dulux EasyClean, Dulux Weathershield bảo vệ tổ ấm vượt trội trước thời tiết nhiệt đới khắc nghiệt. Toàn bộ sơn không chứa chì hay thủy ngân, đạt tiêu chuẩn chứng nhận Xanh SGBC.",
    badge: "Đối Tác Kim Cương",
    productsScale: "Chi Nhánh Hãng Hoá Chất Quốc Tế",
    scaleDetails: "2 Tổng Kho Bắc - Nam, 250 Nhà phân phối uỷ quyền",
    isVerified: true,
    websiteUrl: "www.dulux.com.vn",
    zaloUrl: "https://zalo.me/1900555561",
    representative: "Trần Thế Phong",
    departmentPhone: "0988 123 456",
    productShowcase: [
      {
        name: "Sơn Weathershield bóng",
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Sơn EasyClean chống bẩn",
        image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Chất chống thấm cao cấp",
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Sơn lót kháng kiềm nội thất",
        image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Bột bét và bả ngoại thất",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Sơn phủ vân mây",
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Máy pha màu tự động",
        image: "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Con lăn sơn sợi microfiber",
        image: "https://images.unsplash.com/photo-1510103767138-04b38d3886f4?auto=format&fit=crop&q=100&w=400&h=260"
      }
    ]
  },
  {
    id: 4,
    name: "Thiết Bị Phòng Tắm cao cấp INAX Việt Nam",
    logo: "IX",
    brandLogoText: "INAX IX",
    brandSubText: "Công Nghệ Nhật Bản",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Thiết Bị Vệ Sinh"],
    rating: 4.9,
    reviews: 156,
    location: "TP. Hồ Chí Minh",
    address: "218Bis Nam Kỳ Khởi Nghĩa, Võ Thị Sáu, Quận 3, TP. HCM",
    phone: "028 3930 2040",
    email: "contacts@inax.com.vn",
    status: "active",
    established: 1998,
    description: "Thương hiệu thiết bị vệ sinh hàng đầu Nhật Bản thuộc tập đoàn LIXIL. Nổi tiếng với công nghệ sứ Aqua Ceramic trắng sạch suốt 100 năm, thiết kế tinh tế tối giản cùng hệ thống vòi nước cảm ứng thông minh Eco-smart.",
    badge: "Công Nghệ Nhật Bản",
    productsScale: "Công Ty Liên Doanh - Nhà Sản Xuất Sứ",
    scaleDetails: "3 Nhà Máy Inax Việt Nam - Hệ thống 500 Đại lý sỉ toàn quốc",
    isVerified: true,
    websiteUrl: "www.inax.com.vn",
    zaloUrl: "https://zalo.me/02839302040",
    representative: "Kenji Nakamura",
    departmentPhone: "0909 333 444",
    productShowcase: [
      {
        name: "Bàn cầu Aqua Ceramic",
        image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Sen tắm vòi sưởi thông minh",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Chậu Lavabo lắp âm bàn",
        image: "https://images.unsplash.com/photo-1584622781463-e380afcf0cf4?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Vòi rửa Ecolim nước nhẹ",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Gạch kiến trúc Inax cao cấp",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Phụ kiện nhà tắm inox 304",
        image: "https://images.unsplash.com/photo-1585058178125-ed80b577ba72?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Gương LED cảm ứng",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Bồn tắm massage acrylic",
        image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=100&w=400&h=260"
      }
    ]
  },
  {
    id: 5,
    name: "An Cường Wood Working - Gỗ Công Nghiệp & Decor",
    logo: "AC",
    brandLogoText: "AN CUONG",
    brandSubText: "Decor Gỗ Tự Nhiên",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Gạch Ốp Lát"],
    rating: 4.8,
    reviews: 137,
    location: "Bình Dương",
    address: "ĐT747B, Phường Khánh Bình, Tân Uyên, Bình Dương",
    phone: "0274 3626 282",
    email: "infoancuong@ancuong.com",
    status: "active",
    established: 1994,
    description: "Nhà sản xuất giải pháp gỗ công nghiệp hàng đầu Việt Nam đại diện cho dòng sản phẩm nội thất sang trọng. Đầy đủ các bề mặt MFC, Laminate, Acrylic từ các tông màu vân gỗ thời thượng đến mặt đá thô mộc đẳng cấp nhất.",
    badge: "Bảo Hành Toàn Diện",
    productsScale: "Doanh Nghiệp Trong Nước - Gỗ Mỹ Nghệ",
    scaleDetails: "Nhà máy Bình Dương: 240.000m² - 20 Showroom Toàn quốc",
    isVerified: true,
    websiteUrl: "www.ancuong.com",
    zaloUrl: "https://zalo.me/02743626282",
    representative: "Lê Đức Thọ",
    departmentPhone: "0903 555 999",
    productShowcase: [
      {
        name: "Gỗ sồi tự nhiên tấm",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Gỗ ghép thanh ép áp lực",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Ván ép chống ẩm Plywood",
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Gỗ công nghiệp MFC",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Gỗ nhựa ngoài trời WPC",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Bề mặt Laminate An Cường",
        image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Chỉ viền nhựa PVC",
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4ceae?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Tấm ốp tường 3D",
        image: "https://images.unsplash.com/photo-1517409207049-7e3f22da2ed1?auto=format&fit=crop&q=100&w=400&h=260"
      }
    ]
  },
  {
    id: 6,
    name: "Công Ty TNHH Sika Hữu Hạn Việt Nam",
    logo: "SK",
    brandLogoText: "SIKA CO",
    brandSubText: "Xây Dựng Bền Vững",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Sơn & Chống Thấm"],
    rating: 4.6,
    reviews: 114,
    location: "Bình Dương",
    address: "Khu Công Nghiệp Nhơn Trạch 1, Nhơn Trạch, Đồng Nai",
    phone: "1800 5858 37",
    email: "sikavietnam@vn.sika.com",
    status: "active",
    established: 1993,
    description: "Giải pháp hoá chất xây dựng số 1 toàn cầu đến từ Thụy Sĩ. Chuyên phân phối các phụ gia bê tông trộn sẵn, màng chống thấm elastomeric linh động, keo trám khe nứt đàn hồi cao, kiến tạo sự bảo vệ chắc chắn chống rò rỉ nước.",
    badge: "Tiêu Chuẩn Thuỵ Sĩ",
    productsScale: "Doanh Nghiệp FDI - Hoá Chất Xây Dựng",
    scaleDetails: "2 Chi nhánh lớn TPHCM & Hà Nội - Tiêu chuẩn chống thấm Thuỵ Sỹ",
    isVerified: false,
    websiteUrl: "vn.sika.com",
    zaloUrl: "https://zalo.me/1800585837",
    representative: "Beat Schillig",
    departmentPhone: "0908 444 888",
    productShowcase: [
      {
        name: "Sika Latex TH kết nối",
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Chất chống thấm đàn hồi",
        image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Keo trám khe Sikaflex-11FC",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Vữa gốc xi măng mác cao",
        image: "https://images.unsplash.com/photo-1518174526364-7098e9fc7e60?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Phụ gia hoá dẻo bê tông",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Màng chống thấm bitum",
        image: "https://images.unsplash.com/photo-1504307651254-35680f35aa9e?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Dầu lăn bảo dưỡng bê tông",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Phụ gia chống thấm tường",
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=100&w=400&h=260"
      }
    ]
  },
  {
    id: 7,
    name: "Gạch Việt-Ý Ceramic & Mosaic Art",
    logo: "VI",
    brandLogoText: "ITALU CO",
    brandSubText: "Đẳng Cấp Nghệ Thuật",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Gạch Ốp Lát"],
    rating: 4.5,
    reviews: 64,
    location: "Hà Nội",
    address: "KCN Tiên Sơn, Tiên Du, Bắc Ninh",
    phone: "0222 3838 123",
    email: "sales@italuceramic.vn",
    status: "active",
    established: 2011,
    description: "Được hợp tác chuyển giao công nghệ in phun 3D nổi bật trực tiếp từ Italia. Mang đến những nét vân mây tinh xảo và các dòng tranh gạch mosaic thủy tinh cao cấp, biến mỗi diện tích ốp lát trong nhà bạn thành một đại trình nghệ thuật sống động.",
    badge: "Thiết Kế Ý Độc Bản",
    productsScale: "Hợp Tác Toàn Cầu - Nhập Khẩu Ceramic",
    scaleDetails: "Xưởng Mosaic Nghệ Thuật - Phục vụ thiết kế biệt thự cao cấp",
    isVerified: true,
    websiteUrl: "www.vietisaceramic.com",
    zaloUrl: "https://zalo.me/02223838123",
    representative: "Gianni Rossi",
    departmentPhone: "0944 666 777",
    productShowcase: [
      {
        name: "Gạch Mosaic thuỷ tinh vàng",
        image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Gạch Vân Calacatta bóng",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Tranh gạch ốp tường 3D",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Gạch thẻ trang trí hồ bơi",
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Gạch terrazzo giả đá thô",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Gạch ốp vân gỗ nhám",
        image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Đá ốp bàn bếp marble",
        image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Gạch lát nền bóng kiếng",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=100&w=400&h=260"
      }
    ]
  },
  {
    id: 8,
    name: "Xi Măng Insee Việt Nam - Giải Pháp Bền Vững",
    logo: "IS",
    brandLogoText: "INSEE VN",
    brandSubText: "Liên Doanh Thái Lan",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Sắt Thép & Xi Măng"],
    rating: 4.7,
    reviews: 109,
    location: "Kiên Giang",
    address: "Khu Phố 3, Thị Trấn Kiên Lương, Kiên Lương, Kiên Giang",
    phone: "028 7300 1010",
    email: "info-vn@siamcitycement.com",
    status: "active",
    established: 1994,
    description: "Trước đây là Holcim Việt Nam, tự hào mang đến các mác xi măng siêu bền móng Insee Đa Dụng và xi măng xây tô chuyên dùng bền bỉ trước khí hậu biển mặn miền Tây. Tiên phong giảm phát thải CO2 đạt chứng nhận nhãn sinh thái.",
    badge: "Vật Liệu Xanh",
    productsScale: "Tập Đoàn Liên Doanh Quốc Tế",
    scaleDetails: "Trạm nghiền Cát Lái & Nhà máy Kiên Lương - Độc quyền cung cấp dự án chính phủ",
    isVerified: true,
    websiteUrl: "www.inseecement.com.vn",
    zaloUrl: "https://zalo.me/02873001010",
    representative: "Somchai Sae-Tang",
    departmentPhone: "0901 888 222",
    productShowcase: [
      {
        name: "Xi măng Insee Đa Dụng",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Xi măng xây tô dẻo lâu",
        image: "https://images.unsplash.com/photo-1518174526364-7098e9fc7e60?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Vữa tô mác cao đóng bao",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Bê tông tươi đạt chuẩn Insee",
        image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Sản phẩm sinh thái Conwood",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Cát xây trộn bê tông mác",
        image: "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Xi măng trắng Insee",
        image: "https://images.unsplash.com/photo-1502672260266-1c1c24240f38?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Phụ gia chống đông nền",
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=100&w=400&h=260"
      }
    ]
  }
];

const EXTRA_SUPPLIERS: Supplier[] = [
  {
    id: 10,
    name: "Tập Đoàn Thép Pomina - Nhà Máy Pomina 3",
    logo: "PM",
    brandLogoText: "POMINA",
    brandSubText: "Thép Việt Chất Lượng Cao",
    image: "https://images.unsplash.com/photo-1504307651254-35680f35aa9e?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Sắt Thép & Xi Măng"],
    rating: 4.7,
    reviews: 112,
    location: "Bà Rịa-Vũng Tàu",
    address: "KCN Phú Mỹ I, Phường Phú Mỹ, Thị xã Phú Mỹ, Bà Rịa-Vũng Tàu",
    phone: "0254 3895 111",
    email: "sales@pomina-steel.com",
    status: "active",
    established: 1999,
    description: "Nhà máy Thép Pomina với công nghệ luyện kim từ Đức, tự hào cung cấp các mác thép xây dựng cường độ cao cho các dự án hạ tầng, giao thông trọng điểm.",
    badge: "Thành Viên Vàng",
    productsScale: "Nhà Máy Luyện Phôi & Cán Thép Công Suất Lớn",
    scaleDetails: "Đạt chuẩn ISO 9001 và ISO 14001, sản lượng cán thép hàng triệu tấn/năm",
    isVerified: true,
    websiteUrl: "www.pomina-steel.com",
    zaloUrl: "https://zalo.me/02543895111",
    representative: "Đỗ Duy Thái",
    departmentPhone: "0903 456 789",
    productShowcase: [
      { name: "Thép cuộn phi 6 - phi 10", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Thép vằn Pomina mác cao", image: "https://images.unsplash.com/photo-1504307651254-35680f35aa9e?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 11,
    name: "Tổng Công Ty Công Nghiệp Xi Măng Việt Nam - VICEM",
    logo: "VC",
    brandLogoText: "VICEM",
    brandSubText: "Trụ Cột Xây Dựng",
    image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Sắt Thép & Xi Măng"],
    rating: 4.8,
    reviews: 195,
    location: "Hà Nội",
    address: "387 Kim Mã, Ngọc Khánh, Ba Đình, Hà Nội",
    phone: "024 3843 0157",
    email: "contact@vicem.vn",
    status: "active",
    established: 1979,
    description: "Tập đoàn sản xuất xi măng lớn nhất Việt Nam, sở hữu các thương hiệu nổi tiếng như Vicem Hoàng Mai, Vicem Bỉm Sơn, Vicem Hà Tiên... đảm bảo đáp ứng mọi quy mô dự án.",
    badge: "Thương Hiệu Quốc Gia",
    productsScale: "Tổng Công Ty Nhà Nước",
    scaleDetails: "Quy tụ 10 nhà máy xi măng thành viên trên toàn quốc",
    isVerified: true,
    websiteUrl: "www.vicem.vn",
    zaloUrl: "https://zalo.me/02438430157",
    representative: "Bùi Hồng Minh",
    departmentPhone: "0912 345 678",
    productShowcase: [
      { name: "Xi măng Vicem Hà Tiên đa dụng", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Xi măng Vicem Bỉm Sơn PCB40", image: "https://images.unsplash.com/photo-1518174526364-7098e9fc7e60?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 12,
    name: "Công Ty Cổ Phẩn Đồng Tâm - Gạch & VLXD Đồng Tâm",
    logo: "DT",
    brandLogoText: "DONG TAM",
    brandSubText: "Vì Cuộc Sống Tươi Đẹp",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Gạch Ốp Lát"],
    rating: 4.9,
    reviews: 215,
    location: "Đồng Nai",
    address: "Số 1, Đường 2B, KCN Biên Hòa 1, Đồng Nai",
    phone: "0251 3836 101",
    email: "care@dongtam.com.vn",
    status: "active",
    established: 1969,
    description: "Hơn 55 năm kiến tạo không gian sống, Đồng Tâm tự hào mang lại các bộ sưu tập gạch granite kháng khuẩn, gạch bông nghệ thuật, và ngói màu chất lượng vượt trội.",
    badge: "Thành Viên Kim Cương",
    productsScale: "Nhà Sản Xuất Tiêu Biểu",
    scaleDetails: "Tổng diện tích nhà máy lên tới hàng trăm hecta chuyên sản xuất granite & ceramic cao cấp",
    isVerified: true,
    websiteUrl: "www.dongtam.com.vn",
    zaloUrl: "https://zalo.me/02513836101",
    representative: "Võ Quốc Thắng",
    departmentPhone: "0908 123 456",
    productShowcase: [
      { name: "Gạch đồng chất Granite kháng khuẩn", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Gạch bông nghệ thuật handmade", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 13,
    name: "Công Ty Liên Doanh Sơn KOVA - Tập Đoàn Sơn KOVA",
    logo: "KV",
    brandLogoText: "KOVA PAINT",
    brandSubText: "Công Nghệ Nano Từ Mỹ",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Nguyên Vật Liệu"],
    subCategories: ["Sơn - Bột Bả - Chất Phủ", "Chống Thấm - Màng Kỹ Thuật"],
    rating: 4.8,
    reviews: 167,
    location: "Hà Nội",
    address: "KCN Từ Liêm, Quận Bắc Từ Liêm, Hà Nội",
    phone: "1900 6364 51",
    email: "kovapaint@kova.vn",
    status: "active",
    established: 1993,
    description: "Phát minh bởi nhà khoa học PGS.TS Nguyễn Thị Hòe, KOVA nổi bật toàn châu Á với các sản phẩm sơn chống thấm dột CT-11A, sơn tự làm sạch và sơn chống đạn độc quyền sản xuất.",
    badge: "Công Nghệ Tiên Phong",
    productsScale: "Doanh Nghiệp Khoa Học Công Nghệ",
    scaleDetails: "Phòng thí nghiệm quốc tế & nhà máy đạt chuẩn châu Âu tại TPHCM và Hà Nội",
    isVerified: true,
    websiteUrl: "www.kovapaint.com",
    zaloUrl: "https://zalo.me/1900636451",
    representative: "Nguyễn Thị Hòe",
    departmentPhone: "0903 999 888",
    productShowcase: [
      { name: "Chống thấm CT-11A đặc chủng", image: "https://images.unsplash.com/photo-1541123437800-1c9102c219da?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Sơn bóng ngoại thất K-5500", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 14,
    name: "Công Ty TNHH Inax Việt Nam - Thương Hiệu Thiết Bị Vệ Sinh LIXIL",
    logo: "IX",
    brandLogoText: "INAX",
    brandSubText: "Công Nghệ Aqua Ceramic",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Thiết Bị Vệ Sinh"],
    rating: 4.9,
    reviews: 310,
    location: "Hà Nội",
    address: "KCN Dương Xá, Gia Lâm, Hà Nội",
    phone: "1800 6633",
    email: "inax@lixil.com.vn",
    status: "active",
    established: 1996,
    description: "Thương hiệu từ Nhật Bản dẫn đầu với công nghệ Aqua Ceramic tự làm sạch suốt 100 năm, thiết bị vệ sinh Inax đem lại trải nghiệm thư giãn đẳng cấp quốc tế.",
    badge: "Thành Viên Vàng",
    productsScale: "Tập Đoàn Đa Quốc Gia LIXIL",
    scaleDetails: "Nhiều nhà máy tại Hà Nội, Bình Dương, Hưng Yên đạt chuẩn châu Á",
    isVerified: true,
    websiteUrl: "www.inax.com.vn",
    zaloUrl: "https://zalo.me/18006633",
    representative: "Masahiko Hiramoto",
    departmentPhone: "0988 555 444",
    productShowcase: [
      { name: "Bàn cầu điện tử thông minh INAX", image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Sen vòi mạ vàng kim Inax cao cấp", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 15,
    name: "Tập Đoàn Viglacera - Nhà Sản Xuất Kính & Gạch Lớn Nhất Việt Nam",
    logo: "VG",
    brandLogoText: "VIGLACERA",
    brandSubText: "Tiên Phong Công Nghệ Bê Tông Khí",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Nguyên Vật Liệu", "Thiết Bị Vệ Sinh"],
    subCategories: ["Vật Liệu Tấm Khoáng - Xi Măng Sợi", "Gạch - Đá Ốp Lát - Gốm Sứ", "Nhôm - Kính"],
    nhomSanPhams: ["Nhôm xây dựng", "Kính xây dựng"],
    sanPhamCuThes: ["Nhôm tấm", "Kính tiết kiệm năng lượng", "Kính siêu trắng"],
    rating: 4.7,
    reviews: 182,
    location: "Hà Nội",
    address: "Tòa nhà Viglacera, Đại lộ Thăng Long, Mễ Trì, Nam Từ Liêm, Hà Nội",
    phone: "024 3553 6660",
    email: "info@viglacera.com.vn",
    status: "active",
    established: 1974,
    description: "Nhà sản xuất gạch ốp lát ceramic, granite, ngói, gạch block bê tông khí chưng áp (ALC) hàng đầu Việt Nam. Đi đầu trong mảng kính tiết kiệm năng lượng, kính siêu trắng.",
    badge: "Thương Hiệu Quốc Gia",
    productsScale: "Tổng Công Ty Công Nghiệp Hạng I",
    scaleDetails: "Hệ thống nhà máy trải rộng từ Bắc vào Nam với dây chuyền Sacmi Ý",
    isVerified: true,
    websiteUrl: "www.viglacera.com.vn",
    zaloUrl: "https://zalo.me/02435536660",
    representative: "Nguyễn Anh Tuấn",
    departmentPhone: "0915 222 333",
    productShowcase: [
      { name: "Tấm panel bê tông nhẹ ALC chống nóng", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Gạch ốp lát Signature Granite Viglacera", image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 16,
    name: "Công Ty TNHH Jotun Paint Việt Nam",
    logo: "JT",
    brandLogoText: "JOTUN VN",
    brandSubText: "Bảo Vệ Mọi Công Trình",
    image: "https://images.unsplash.com/photo-1541123437800-1c9102c219da?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Nguyên Vật Liệu"],
    subCategories: ["Sơn - Bột Bả - Chất Phủ", "Chống Cháy - Vật Liệu Ngăn Cháy"],
    rating: 4.8,
    reviews: 134,
    location: "Bình Dương",
    address: "Số 1, đường số 10, KCN Sóng Thần 1, Dĩ An, Bình Dương",
    phone: "0274 374 2206",
    email: "info.vietnam@jotun.com",
    status: "active",
    established: 1993,
    description: "Đến từ Na Uy, Jotun là thương hiệu sơn phủ công nghiệp, sơn hàng hải và sơn trang trí ngoại thất Jotashield hàng đầu thế giới, bảo vệ vĩnh cửu trước thời tiết khắc nghiệt.",
    badge: "Thành Viên Vàng",
    productsScale: "Tập Đoàn Toàn Cầu Na Uy",
    scaleDetails: "Nhà máy tự động hóa hoàn toàn mới tại KCN Hiệp Phước và Sóng Thần",
    isVerified: true,
    websiteUrl: "www.jotun.com/vn",
    zaloUrl: "https://zalo.me/02743742206",
    representative: "Jon Bigum",
    departmentPhone: "0902 444 666",
    productShowcase: [
      { name: "Sơn ngoại thất cao cấp Jotashield", image: "https://images.unsplash.com/photo-1595841696660-ab9611abf1d3?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Sơn nội thất Majestic đẹp mượt mà", image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 17,
    name: "Tập Đoàn Tôn Hoa Sen - Công Ty Cổ Phần Tập Đoàn Hoa Sen",
    logo: "HS",
    brandLogoText: "HOA SEN",
    brandSubText: "Mái Ấm Gia Đình Việt",
    image: "https://images.unsplash.com/photo-1504307651254-35680f35aa9e?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Sắt Thép & Xi Măng"],
    rating: 4.8,
    reviews: 298,
    location: "Bình Dương",
    address: "Số 9 Đại lộ Thống Nhất, KCN Sóng Thần II, Dĩ An, Bình Dương",
    phone: "1800 1515",
    email: "truyenthong@hoasengroup.vn",
    status: "active",
    established: 2001,
    description: "Chiếm gần 40% thị phần tôn mạ màu, tôn kẽm và ống nhựa xây dựng tại Việt Nam. Sản phẩm xuất khẩu đi hơn 80 quốc gia vượt qua các rào cản chất lượng ASTM khắt khe nhất.",
    badge: "Biểu Tượng Chất Lượng",
    productsScale: "Nhà Sản Xuất Đứng Đầu Khu Vực",
    scaleDetails: "Hệ thống hàng chục nhà máy tôn cán nguội liên tục trên toàn quốc",
    isVerified: true,
    websiteUrl: "www.hoasengroup.vn",
    zaloUrl: "https://zalo.me/18001515",
    representative: "Lê Phước Vũ",
    departmentPhone: "0914 888 999",
    productShowcase: [
      { name: "Tôn Hoa Sen mạ màu giảm nhiệt 3 lớp", image: "https://images.unsplash.com/photo-1504307651254-35680f35aa9e?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Ống nhựa uPVC chịu lực cao cách âm", image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 18,
    name: "Công Ty Cổ Phần Thạch Bàn - Gạch Men Thạch Bàn Group",
    logo: "TB",
    brandLogoText: "THACH BAN",
    brandSubText: "Đẳng Cấp Ý Cho Ngôi Nhà Việt",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Gạch Ốp Lát"],
    rating: 4.6,
    reviews: 94,
    location: "Hà Nội",
    address: "Tổ 15, Phường Thạch Bàn, Long Biên, Hà Nội",
    phone: "024 3875 0122",
    email: "contact@thachban.com.vn",
    status: "active",
    established: 1959,
    description: "Thạch Bàn là cánh chim đầu đàn cổ xưa nhất của ngành ceramic Việt Nam, sở hữu dây chuyền nung nén siêu mài mòn cao cấp đạt tiêu chuẩn châu Âu.",
    badge: "Sáng Lập Ngành Gạch",
    productsScale: "Nhà Sản Xuất & Liên Doanh Thiết Kế Ý",
    scaleDetails: "Khu liên hợp nhà máy Granite Thạch Bàn Yên Dũng diện tích lớn",
    isVerified: true,
    websiteUrl: "www.thachban.com.vn",
    zaloUrl: "https://zalo.me/02438750122",
    representative: "Nguyễn Thế Cường",
    departmentPhone: "0905 777 666",
    productShowcase: [
      { name: "Gạch bông cổ điển hoa văn tinh xảo", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Gạch vân đá Marble khổ cực đại 80x160cm", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 19,
    name: "Công Ty TNHH Nippon Paint Việt Nam",
    logo: "NP",
    brandLogoText: "NIPPON VN",
    brandSubText: "Sơn Đâu Cũng Đẹp",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Sơn & Chống Thấm"],
    rating: 4.7,
    reviews: 146,
    location: "Đồng Nai",
    address: "Số 14, Đường 3A, KCN Biên Hòa 2, Đồng Nai",
    phone: "0251 383 6511",
    email: "sales-npv@nipponpaint.com.vn",
    status: "active",
    established: 1994,
    description: "Thương hiệu lâu đời nhất Nhật Bản nổi tiếng với dòng sơn không mùi Nippon Odour-less an toàn tuyệt đối cho sức khỏe bà mẹ trẻ em, bám dính siêu hạng màng bóng dẻo.",
    badge: "Bảo Vệ Sức Khỏe",
    productsScale: "Tập Đoàn Toàn Cầu Nippon Paint",
    scaleDetails: "Nhiều nhà máy tại Đồng Nai và Vĩnh Phúc sở hữu robot pha chế chính xác",
    isVerified: true,
    websiteUrl: "www.nipponpaint.com.vn",
    zaloUrl: "https://zalo.me/02513836511",
    representative: "Ee Soon Hean",
    departmentPhone: "0903 111 222",
    productShowcase: [
      { name: "Sơn không mùi thân thiện Odour-less", image: "https://images.unsplash.com/photo-1541123437800-1c9102c219da?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Sơn ngoại thất WeatherGard siêu chống nóng", image: "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 20,
    name: "Công Ty TNHH Thiết Bị Vệ Sinh Caesar Việt Nam",
    logo: "CS",
    brandLogoText: "CAESAR VN",
    brandSubText: "Thiết Kế Đột Phá Cho Phòng Tắm",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Thiết Bị Vệ Sinh"],
    rating: 4.7,
    reviews: 125,
    location: "Đồng Nai",
    address: "KCN Nhơn Trạch 1, Huyện Nhơn Trạch, Đồng Nai",
    phone: "0251 356 0234",
    email: "caesar-care@caesar.com.vn",
    status: "active",
    established: 1996,
    description: "Sản phẩm bàn cầu xả xoáy siphon chống bám bẩn tinh tế, chậu rửa tích hợp mặt tủ sang trọng hàng đầu Đài Loan, đem đến sự thanh lịch hiện đại giá thành vô cùng hợp lý.",
    badge: "Thành Viên Vàng",
    productsScale: "Nhà Máy Vốn Đầu Tư Đài Loan",
    scaleDetails: "Khuôn viên sản xuất sứ hơn 120.000m2 đạt giải thưởng thiết kế quốc tế",
    isVerified: true,
    websiteUrl: "www.caesar.com.vn",
    zaloUrl: "https://zalo.me/02513560234",
    representative: "Chen Tang Feng",
    departmentPhone: "0909 333 444",
    productShowcase: [
      { name: "Chậu rửa cabinet tủ nhựa chịu nước", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Bàn cầu treo tường tiết kiệm diện tích", image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 21,
    name: "Công Ty Cổ Phần Thép Miền Nam - VNSTEEL",
    logo: "MN",
    brandLogoText: "V-STEEL",
    brandSubText: "Thương Hiệu Thép Chữ V",
    image: "https://images.unsplash.com/photo-1504307651254-35680f35aa9e?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Sắt Thép & Xi Măng"],
    rating: 4.7,
    reviews: 138,
    location: "Bà Rịa-Vũng Tàu",
    address: "KCN Phú Mỹ I, Quận Tân Thành, Bà Rịa-Vũng Tàu",
    phone: "0254 387 6171",
    email: "sales@thepmiennam.com.vn",
    status: "active",
    established: 1975,
    description: "Nhà sản xuất các mác thép cây và thép cuộn tròn trơn nổi danh với logo chữ V dập nổi. Thép chịu uốn đàn hồi tốt chuyên dùng cho nhà siêu cao tầng và cầu vượt biển lớn.",
    badge: "Thành Viên Vàng",
    productsScale: "Thương hiệu trực thuộc Tổng công ty Thép Việt Nam",
    scaleDetails: "Dây chuyền luyện thép Danieli hiện đại số 1 Italy với độ chính xác cao",
    isVerified: true,
    websiteUrl: "www.thepmiennam.com.vn",
    zaloUrl: "https://zalo.me/02543876171",
    representative: "Nguyễn Minh Xuân",
    departmentPhone: "0903 222 111",
    productShowcase: [
      { name: "Thép cây tròn trơn dẻo chịu nhiệt", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Thép thanh vằn cường độ cao CB400-CB500", image: "https://images.unsplash.com/photo-1504307651254-35680f35aa9e?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 22,
    name: "Tổng Công Ty Xi Măng FiCO Tây Ninh - Vicem FiCO",
    logo: "FC",
    brandLogoText: "FICO",
    brandSubText: "Gắn Kết Mọi Công Trình",
    image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Sắt Thép & Xi Măng"],
    rating: 4.6,
    reviews: 91,
    location: "TP. Hồ Chí Minh",
    address: "Tầng 12, Rosana Tower, 60 Nguyễn Đình Chiểu, Q.1, TPHCM",
    phone: "028 3910 4825",
    email: "contact@ficocement.com.vn",
    status: "active",
    established: 2006,
    description: "Liên doanh cùng tập đoàn danh tiếng SCG Thái Lan, xi măng FiCO thâm nhập dồi dào thị trường miền Nam tự hào xây nên các hầm vượt sông Sài Gòn, cầu Thủ Thiêm kiên cố.",
    badge: "Liên Doanh Thái Lan",
    productsScale: "Hội viên hợp tác quốc tế lớn",
    scaleDetails: "Nhà máy chính tại Tây Ninh và các trạm nghiền vệ tinh đặt quanh vùng sông nước",
    isVerified: true,
    websiteUrl: "www.ficocement.com.vn",
    zaloUrl: "https://zalo.me/02839104825",
    representative: "Prarinya Panawong",
    departmentPhone: "0908 999 555",
    productShowcase: [
      { name: "Xi măng FiCO mác PCB40 đa dụng", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Clinker sấy lò quay chuẩn quốc tế", image: "https://images.unsplash.com/photo-1518174526364-7098e9fc7e60?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 23,
    name: "Đá Ốp Lát Granite & Marble Phú Tài",
    logo: "PT",
    brandLogoText: "PHU TAI MD",
    brandSubText: "Đá Tự Nhiên Hoàn Mỹ",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Gạch Ốp Lát"],
    rating: 4.8,
    reviews: 87,
    location: "Đà Nẵng",
    address: "Đường số 9, KCN Hòa Khánh, Liên Chiểu, Đà Nẵng",
    phone: "0236 373 9999",
    email: "stone@phutai.com.vn",
    status: "active",
    established: 1994,
    description: "Nhà khai thác chế tác đá hoa cương granite, đá cẩm thạch marble xuất khẩu hàng đầu Việt Nam. Từng lát đá mang đường vân thiên tạo lấp lánh nâng tầm nét uy nghi quý tộc.",
    badge: "Thành Viên Vàng",
    productsScale: "Nhà khai thác và chế tác đá quy mô lớn",
    scaleDetails: "Sở hữu các mỏ đá trắng, đá vàng độc quyền tại Bình Định, Thanh Hóa",
    isVerified: true,
    websiteUrl: "www.phutai.com.vn",
    zaloUrl: "https://zalo.me/02363739999",
    representative: "Lê Vỹ",
    departmentPhone: "0905 111 888",
    productShowcase: [
      { name: "Đá Marble trắng Carrara quý phái", image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Đá Granite đen Kim Sa ánh kim cương", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 24,
    name: "Tập Đoàn Gạch Men Ceramic Prime Việt Nam",
    logo: "PR",
    brandLogoText: "PRIME GROUP",
    brandSubText: "Thịnh Vượng Là Prime",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Gạch Ốp Lát"],
    rating: 4.8,
    reviews: 320,
    location: "Hà Nội",
    address: "Tòa nhà Prime, KĐT mới Trung Hòa, Cầu Giấy, Hà Nội",
    phone: "1900 636 515",
    email: "customer-service@prime.vn",
    status: "active",
    established: 1999,
    description: "Công ty thành viên của SCG, chuyên gạch phủ men bóng kỹ thuật cao 3D chống trơn, ngói lợp tráng men cao cấp nung ở 1150 độ C không thấm cong vênh.",
    badge: "Xuất Khẩu Quốc Tế",
    productsScale: "Dẫn đầu công suất gạch men Đông Nam Á",
    scaleDetails: "6 nhà máy thành viên sở hữu quy trình Italian Sacmi khép kín đại diện quốc tế",
    isVerified: true,
    websiteUrl: "www.prime.vn",
    zaloUrl: "https://zalo.me/1900636515",
    representative: "Cherdsak Niyomsilpa",
    departmentPhone: "0989 333 999",
    productShowcase: [
      { name: "Gạch men bóng phủ carat chống trầy", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Ngói lợp tráng men Prime cao cấp", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 25,
    name: "Công Ty Cổ Phần Sơn Kova Miền Nam - Kova Group",
    logo: "KS",
    brandLogoText: "KOVA OUTLET",
    brandSubText: "Sơn Chống Thấm Elastomer số 1",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Sơn & Chống Thấm"],
    rating: 4.8,
    reviews: 140,
    location: "TP. Hồ Chí Minh",
    address: "92G Nguyễn Hữu Cảnh, Phường 22, Bình Thạnh, TPHCM",
    phone: "028 3840 7111",
    email: "kovahcm@kova.vn",
    status: "active",
    established: 1998,
    description: "Nhà phân phối mảng chống thấm, sơn phủ ngoại thất dẻo dai bám chặt bê tông lấp đầy vết nứt chân chim, đạt độ bền uốn dẻo co giãn bám cao tuyệt mỹ.",
    badge: "Thành Viên Vàng",
    productsScale: "Tổng kho đại diện khu vực phía Nam",
    scaleDetails: "Kho vận chuyển tốc hành phân bổ 12 tỉnh thành miền Tây Nam Bộ",
    isVerified: true,
    websiteUrl: "www.kovapaint.com.vn",
    zaloUrl: "https://zalo.me/02838407111",
    representative: "Nguyễn Duy",
    departmentPhone: "0902 888 666",
    productShowcase: [
      { name: "Sơn thạch cao chống nấm mốc ẩm", image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Sơn thể thao cao cấp cho sân tennis", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 26,
    name: "Sơn Dự Án Jotun Professional Việt Nam",
    logo: "JP",
    brandLogoText: "JOTUN PRO",
    brandSubText: "Giải Pháp Bảo Vệ Công Nghiệp",
    image: "https://images.unsplash.com/photo-1541123437800-1c9102c219da?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Sơn & Chống Thấm"],
    rating: 4.9,
    reviews: 104,
    location: "TP. Hồ Chí Minh",
    address: "Tầng 10, tòa nhà Metropolitan, 235 Đồng Khởi, Quận 1, TPHCM",
    phone: "028 3825 3988",
    email: "project@jotun.com",
    status: "active",
    established: 1995,
    description: "Chuyên thầu cung cấp sơn bảo ôn epoxy, sơn bồn chứa hóa chất chống rỉ sét siêu hạng cho giàn khoan dầu mỏ, nhà máy nhiệt điện trên cả nước.",
    badge: "Chứng Nhận LEED",
    productsScale: "Nhà thầu sơn dự án quốc tế chuyên nghiệp",
    scaleDetails: "Bao phủ 80% kiến trúc siêu cao ốc tại Saigon & Hanoi",
    isVerified: true,
    websiteUrl: "www.jotunpro.com",
    zaloUrl: "https://zalo.me/02838253988",
    representative: "Morten Fon",
    departmentPhone: "0918 333 111",
    productShowcase: [
      { name: "Sơn Epoxy tự phẳng rải sàn nhà xưởng", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Sơn lót kẽm hai thành phần chống rỉ", image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 27,
    name: "Gạch Việt-Ý Taicera - Nhà Máy Đồng Nai",
    logo: "TC",
    brandLogoText: "TAICERA",
    brandSubText: "Định Hình Không Gian Sống",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Gạch Ốp Lát"],
    rating: 4.7,
    reviews: 140,
    location: "Đồng Nai",
    address: "KCN Gò Dầu, Nhơn Trạch, Đồng Nai",
    phone: "0251 3841 555",
    email: "taicera@cement.com",
    status: "active",
    established: 1994,
    description: "Thương hiệu Đài Loan tiên phong sản xuất gạch granite thạch anh mài mượt chống trầy, dẫn đầu thị hiếu thiết kế tối giản xám xi măng tao nhã cho các kiến trúc vĩ đại.",
    badge: "Chiết Khấu Cao",
    productsScale: "Sản xuất liên doanh Italy",
    scaleDetails: "Nhà máy áp dụng tự động hoá nung bồn bột tuần hoàn sinh thái",
    isVerified: true,
    websiteUrl: "www.taicera.com",
    zaloUrl: "https://zalo.me/02513841555",
    representative: "Hsu Chih Hsiung",
    departmentPhone: "0903 000 999",
    productShowcase: [
      { name: "Gạch thạch anh mài bóng xi măng mộc", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Gạch giả đá mộc sân vườn sần chống lún", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 28,
    name: "Thiết bị vệ sinh TOTO chính hãng TOTO Việt Nam",
    logo: "TT",
    brandLogoText: "TOTO",
    brandSubText: "Định nghĩa sự tiện nghi",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Thiết Bị Vệ Sinh"],
    rating: 4.9,
    reviews: 412,
    location: "TP. Hồ Chí Minh",
    address: "Tòa nhà 1A, đường Phạm Ngọc Thạch, Quận 1, TPHCM",
    phone: "1800 5588 30",
    email: "totovietnam@toto.com",
    status: "active",
    established: 2002,
    description: "TOTO đem công nghệ sứ vệ sinh chống bám siêu nhẵn Cefiontect và nắp điện tử Washlet lừng danh Nhật Bản đến từng tổ ấm nhỏ, định vị sang trọng đỉnh cao.",
    badge: "Thành Viên Kim Cương",
    productsScale: "Tập Đoàn Toàn Cầu Nhật Bản",
    scaleDetails: "Phòng trưng bày đẳng cấp 5 sao tại trung tâm Sài Gòn và Hà Nội",
    isVerified: true,
    websiteUrl: "www.vn.toto.com",
    zaloUrl: "https://zalo.me/1800558830",
    representative: "Noriaki Hayakawa",
    departmentPhone: "0903 555 111",
    productShowcase: [
      { name: "Bàn cầu điện tử TOTO NEOREST thông minh", image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Nắp rửa thông minh TOTO Washlet tiện ích", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 29,
    name: "Thiết bị vệ sinh American Standard - LIXIL Bình Dương",
    logo: "AS",
    brandLogoText: "AMER-STAND",
    brandSubText: "Tinh tế phong cách Mỹ",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Thiết Bị Vệ Sinh"],
    rating: 4.8,
    reviews: 110,
    location: "Bình Dương",
    address: "Đại lộ Bình Dương, Thuận An, Bình Dương",
    phone: "1900 5454 60",
    email: "care.as@lixil.com",
    status: "active",
    established: 2013,
    description: "Nhãn hiệu Mỹ với nét phóng khoáng đầy chất hiện đại, dẫn đầu về bồn tắm mát-xa vòi sen ổn định nhiệt tự động điều hòa nước tiện nghi sạch bóng.",
    badge: "Dẫn Đầu Phong Cách",
    productsScale: "Tổng hành dinh LIXIL Southern Plant",
    scaleDetails: "Năng lực lò nung áp lực tự động 1 triệu bồn cầu xuất khẩu Mỹ/năm",
    isVerified: true,
    websiteUrl: "www.americanstandard.com.vn",
    zaloUrl: "https://zalo.me/1900545460",
    representative: "David Alcorn",
    departmentPhone: "0908 666 888",
    productShowcase: [
      { name: "Sen tắm âm tường đa chế độ xả massage", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Bàn cầu cơ một khối xả kép lốc xoáy", image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 30,
    name: "Công Ty Cổ Phần Xi Măng Nghi Sơn",
    logo: "NS",
    brandLogoText: "NGHI SON",
    brandSubText: "Liên Doanh Nhật Bản Bền Bỉ",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Sắt Thép & Xi Măng"],
    rating: 4.8,
    reviews: 145,
    location: "Quảng Ninh",
    address: "Cảng Cái Lân, TP. Hạ Long, Quảng Ninh",
    phone: "033 3841 835",
    email: "info@nghison.com.vn",
    status: "active",
    established: 1995,
    description: "Được đầu tư bởi Taiheiyo Cement Nhật Bản, xi măng Nghi Sơn có mác PCB40 chịu mặn, chống xâm thực sulfate mặn biển cực tốt cho nền móng vạn năm vững vàng.",
    badge: "Bảo Chứng Nhật Bản",
    productsScale: "Nhà máy liên minh quốc tế siêu công suất",
    scaleDetails: "Trạm nghiền hiện đại cảng Cái Lân phục vụ miền Bắc và Khánh Hòa",
    isVerified: true,
    websiteUrl: "www.nghison.com.vn",
    zaloUrl: "https://zalo.me/0333841835",
    representative: "Hiroshi Sato",
    departmentPhone: "0904 999 222",
    productShowcase: [
      { name: "Xi măng Nghi Sơn dân dụng mác cao", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Bê tông móng bền mặn sulfate Nghi Sơn", image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  }
];

const NEW_MATERIALS_SUPPLIERS: Supplier[] = [
  {
    id: 1001,
    name: "Công Ty Cổ Phần Nhôm Việt Dũng",
    logo: "VD",
    brandLogoText: "ALCOREST",
    brandSubText: "Nhôm Việt Dũng",
    image: logo1.src,
    categories: ["Nguyên Vật Liệu"],
    subCategories: ["Nhôm - Kính", "Gỗ - Ván - Vật liệu tấm"],
    nhomSanPhams: ["Nhôm xây dựng"],
    sanPhamCuThes: ["Aluminium composite panel / alu panel", "Trần nhôm", "Lam nhôm", "Tấm ốp nhôm nhựa ACP nội thất", "Tấm ốp nhôm nhựa ACP ngoại thất PVDF", "Tấm ốp nhôm nhựa chống cháy FR", "Trần nhôm clip-in", "Trần nhôm lay-in", "Trần nhôm caro", "Trần nhôm U-shaped", "Trần nhôm C-shaped", "Trần nhôm lam sóng", "Lam nhôm chắn nắng hình hộp"],
    rating: 4.9,
    reviews: 120,
    location: "Mê Linh - Hà Nội",
    address: "Lô 10B + Lô 18, KCN Quang Minh, Mê Linh, Hà Nội",
    phone: "0904 558 099; 0966 742 068",
    email: "alcorest@vietdung.com.vn",
    status: "active",
    established: "23/06/2005",
    description: "Nhà sản xuất Aluminium composite panel, Tấm ốp nhôm nhựa ACP nội ngoại thất, Trần nhôm clip-in/lay-in/caro/lam sóng, Lam nhôm chắn nắng.",
    badge: "Nhà sản xuất",
    productsScale: "Doanh nghiệp nội địa",
    scaleDetails: "3 Nhà máy - 50.000m²",
    isVerified: true,
    websiteUrl: "vietdung.com.vn",
    zaloUrl: "https://zalo.me/0904558099",
    representative: "Bộ phận Kinh Doanh",
    departmentPhone: "0904 558 099",
    mst: "2500237032",
    englishName: "VIETDUNG ALUMINIUM JOINT STOCK COMPANY",
    productShowcase: [
      { name: "Kính Màu", image: pr1.src},
      { name: "Kính Uống Công", image:pr2.src },
      { name: "Trần Nhôm", image: pr3.src},
      { name: "Nhôm Ống", image: pr4.src },
      { name: "Kính Phản Quang", image: pr5.src },
      { name: "Kính Low", image: pr6.src },
      { name: "Lam Nhôm Chắn Nắng Hình Hộp", image: pr7.src },
      { name: "Nhôm Ốp Ngoái Trời", image: pr8.src },
      { name: "Kính Dán An Toàn", image: pr9.src },
      { name: "Kính Cường Lực", image: pr10.src },
      { name: "Nhôm Hệ Cửa", image: pr11.src },
      { name: "Tấm Ốp Mặt Dựng", image: pr12.src },
    ]
  },
  {
    id: 1002,
    name: "Công Ty TNHH Nhôm Đông Á",
    logo: "DA",
    brandLogoText: "DONG A",
    brandSubText: "Nhôm Đông Á",
    image: logo3.src,
    categories: ["Nguyên Vật Liệu"],
    subCategories: ["Nhôm - Kính"],
    nhomSanPhams: ["Nhôm xây dựng"],
    sanPhamCuThes: ["Nhôm định hình", "Nhôm hệ cửa", "Nhôm hệ mặt dựng", "Nhôm hệ vách ngăn", "Nhôm định hình Đông Á", "Nhôm hệ cửa Đông Á", "Nhôm hệ mặt dựng Đông Á", "Nhôm hệ vách ngăn Đông Á"],
    rating: 4.8,
    reviews: 115,
    location: "Chí Linh - Hải Phòng",
    address: "Cụm công nghiệp Tân Dân, Phường Lê Đại Hành, TP. Hải Phòng",
    phone: "0220 359 2956",
    email: "sales@nhomdonga.vn",
    status: "active",
    established: "13/11/2006",
    description: "Nhà sản xuất các sản phẩm nhôm định hình cao cấp, nhôm hệ cửa, nhôm hệ mặt dựng và nhôm hệ vách ngăn chịu lực xuất khẩu quốc tế.",
    badge: "Nhà sản xuất",
    productsScale: "Doanh nghiệp có vốn nước ngoài",
    scaleDetails: "1 Nhà máy - khoảng 100.000m²",
    isVerified: true,
    websiteUrl: "nhomdonga.vn",
    zaloUrl: "https://zalo.me/02203592956",
    representative: "Phòng Kinh Doanh",
    departmentPhone: "0220 359 2956",
    mst: "0800345691",
    englishName: "EAST ASIA ALUMINUM COMPANY LIMITED",
    productShowcase: [
      { name: "Kính Màu", image: pr1.src},
      { name: "Kính Uống Công", image:pr2.src },
      { name: "Trần Nhôm", image: pr3.src},
      { name: "Nhôm Ống", image: pr4.src },
      { name: "Kính Phản Quang", image: pr5.src },
      { name: "Kính Low", image: pr6.src },
      { name: "Lam Nhôm Chắn Nắng Hình Hộp", image: pr7.src },
      { name: "Nhôm Ốp Ngoái Trời", image: pr8.src },
      { name: "Kính Dán An Toàn", image: pr9.src },
      { name: "Kính Cường Lực", image: pr10.src },
      { name: "Nhôm Hệ Cửa", image: pr11.src },
      { name: "Tấm Ốp Mặt Dựng", image: pr12.src },
    ]
  },
  {
    id: 1003,
    name: "Công Ty Cổ Phần Nhôm Đô Thành",
    logo: "DT",
    brandLogoText: "GRANDO",
    brandSubText: "Nhôm Đô Thành",
    image: logo2.src,
    categories: ["Nguyên Vật Liệu"],
    subCategories: ["Nhôm - Kính"],
    nhomSanPhams: ["Nhôm xây dựng"],
    sanPhamCuThes: ["Nhôm định hình", "Nhôm ống", "Nhôm định hình Grando", "Nhôm Billet đúc"],
    rating: 4.7,
    reviews: 94,
    location: "Gia Lâm - Hà Nội",
    address: "Khu công nghiệp vừa và nhỏ, Xã Gia Lâm, TP. Hà Nội",
    phone: "024 3678 5445; 1900 0399",
    email: "info@grando.vn",
    status: "active",
    established: "25/07/2017",
    description: "Sản xuất chất lượng cao nhôm định hình, nhôm Billet đúc, nhôm ống cao cấp phục vụ thiết bị kiến trúc hàng đầu.",
    badge: "Nhà sản xuất",
    productsScale: "Doanh nghiệp nội địa",
    scaleDetails: "1 Nhà máy - gần 25.000-30.000 tấn/năm",
    isVerified: true,
    websiteUrl: "grando.vn",
    zaloUrl: "https://zalo.me/19000399",
    representative: "Bộ phận Kinh Doanh",
    departmentPhone: "1900 0399",
    mst: "0107935768",
    englishName: "GRANDO ALUMINIUM",
    productShowcase: [
      { name: "Kính Màu", image: pr1.src},
      { name: "Kính Uống Công", image:pr2.src },
      { name: "Trần Nhôm", image: pr3.src},
      { name: "Nhôm Ống", image: pr4.src },
      { name: "Kính Phản Quang", image: pr5.src },
      { name: "Kính Low", image: pr6.src },
      { name: "Lam Nhôm Chắn Nắng Hình Hộp", image: pr7.src },
      { name: "Nhôm Ốp Ngoái Trời", image: pr8.src },
      { name: "Kính Dán An Toàn", image: pr9.src },
      { name: "Kính Cường Lực", image: pr10.src },
      { name: "Nhôm Hệ Cửa", image: pr11.src },
      { name: "Tấm Ốp Mặt Dựng", image: pr12.src },
    ]
  },
  {
    id: 1004,
    name: "Công Ty Cổ Phần Tập Đoàn Nhôm Sông Hồng Shalumi",
    logo: "SL",
    brandLogoText: "SHALUMI",
    brandSubText: "Nhôm Sông Hồng",
    image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=600&h=400",
    categories: ["Nguyên Vật Liệu"],
    subCategories: ["Nhôm - Kính"],
    nhomSanPhams: ["Nguyên liệu nhôm", "Nhôm xây dựng"],
    sanPhamCuThes: ["Nhôm định hình", "Nhôm hệ cửa", "Nhôm hệ mặt dựng", "Nhôm hệ thủy lực", "Hợp kim nhôm", "Nhôm định hình Shalumi", "Nhôm hệ cửa Shalumi", "Nhôm hệ mặt dựng Shalumi", "Nhôm hệ thủy lực Shalumi"],
    rating: 4.9,
    reviews: 167,
    location: "Thanh Miếu - Phú Thọ",
    address: "Phố Hồng Hà, Phường Thanh Miếu, Tỉnh Phú Thọ",
    phone: "0210 386 2644",
    email: "Shalumikd@gmail.com",
    status: "active",
    established: "15/05/1999",
    description: "Thương hiệu Shalumi tiên phong trong lĩnh vực sản xuất nhôm định hình, nhôm hệ cửa, nhôm thủy lực, xi mạ anode công nghệ cao.",
    badge: "Nhà sản xuất",
    productsScale: "Công ty cổ phần đại chúng",
    scaleDetails: "1 Nhà máy công suất lớn",
    isVerified: true,
    websiteUrl: "shalumi.com.vn",
    zaloUrl: "https://zalo.me/02103862644",
    representative: "Ban Điều Hành",
    departmentPhone: "0210 386 2644",
    mst: "2600213532",
    englishName: "SONG HONG ALUMINUM SHALUMI GROUP JOINT STOCK COMPANY",
    productShowcase: [
      { name: "Profile nhôm định hình sơn tĩnh điện Shalumi", image: "https://images.unsplash.com/photo-1504307651254-35680f35aa9e?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Cửa đi mở quay nhôm hệ Shalumi Premium", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Hệ thống vách dựng mặt ngoài tòa nhà", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Hợp kim nhôm đúc chịu lực cao", image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 1005,
    name: "Công Ty TNHH Nhôm Nam Sung",
    logo: "NS",
    brandLogoText: "NAM SUNG",
    brandSubText: "Nhôm Nam Sung",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600&h=400",
    categories: ["Nguyên Vật Liệu"],
    subCategories: ["Nhôm - Kính"],
    nhomSanPhams: ["Nguyên liệu nhôm", "Nhôm xây dựng"],
    sanPhamCuThes: ["Phôi nhôm / billet nhôm", "Nhôm định hình", "Phôi nhôm Billet Nam Sung", "Nhôm định hình Nam Sung"],
    rating: 4.7,
    reviews: 83,
    location: "Đức Hòa - Tây Ninh",
    address: "Lô N1-3, Đường số 2, KCN Hải Sơn, Xã Đức Hòa, Tỉnh Tây Ninh",
    phone: "0272 3777 815; 0938 68 57 68",
    email: "info@nhomnamsung.com",
    status: "active",
    established: "05/05/2014",
    description: "Nhà cung cấp hàng đầu về phôi nhôm billet, nhôm định hình công nghiệp chất lượng Nhật Bản.",
    badge: "Nhà sản xuất",
    productsScale: "Doanh nghiệp nội địa",
    scaleDetails: "2 Nhà máy - khoảng 200-300 lao động",
    isVerified: true,
    websiteUrl: "nhomnamsung.com.vn",
    zaloUrl: "https://zalo.me/0938685768",
    representative: "Bộ phận CSKH",
    departmentPhone: "0938 68 57 68",
    mst: "1101746389",
    englishName: "NAM SUNG ALUMINIUM COMPANY LIMITED",
    productShowcase: [
      { name: "Phôi nhôm Billet Nam Sung chất lượng cao", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Thanh nhôm định hình hệ Xingfa Nam Sung", image: "https://images.unsplash.com/photo-1504307651254-35680f35aa9e?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Mặt dựng nhôm kính an toàn cho cao ốc", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Profile nhôm công nghiệp xuất khẩu", image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 1006,
    name: "Công Ty Cổ Phần Nhôm Ngọc Diệp",
    logo: "ND",
    brandLogoText: "DINOSTAR",
    brandSubText: "Nhôm Ngọc Diệp",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600&h=400",
    categories: ["Nguyên Vật Liệu"],
    subCategories: ["Nhôm - Kính"],
    nhomSanPhams: ["Nguyên liệu nhôm", "Nhôm xây dựng"],
    sanPhamCuThes: ["Nhôm định hình", "Phôi nhôm / billet nhôm", "Nhôm thỏi / aluminium ingot", "Hợp kim nhôm", "Nhôm định hình Dinostar", "Phôi nhôm Billet Dinostar", "Nhôm thỏi Dinostar", "Hợp kim nhôm Dinostar"],
    rating: 4.8,
    reviews: 134,
    location: "Như Quỳnh - Hưng Yên",
    address: "Đường C2, Khu C, KCN Phố Nối A, Xã Như Quỳnh, Tỉnh Hưng Yên",
    phone: "024 3942 7991",
    email: "dinostar-alu@ngocdiep.vn",
    status: "active",
    established: "01/08/2016",
    description: "Nhà máy nhôm Dinostar Ngọc Diệp sản xuất quy mô lớn nhôm định hình, nhôm thỏi billet và hợp kim bền bỉ chịu lực.",
    badge: "Nhà sản xuất",
    productsScale: "Công ty thành viên tập đoàn trong nước",
    scaleDetails: "1 Nhà máy - hơn 120.000m²",
    isVerified: true,
    websiteUrl: "nhomdinostar.vn",
    zaloUrl: "https://zalo.me/02439427991",
    representative: "Ban Dự Án",
    departmentPhone: "024 3942 7991",
    mst: "0900995968",
    englishName: "NGOC DIEP ALUMINIUM JOINT STOCK COMPANY",
    productShowcase: [
      { name: "Nhôm định hình Dinostar xây dựng", image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Phôi nhôm Billet đúc liên tục Dinostar", image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=crop&q=80&w=400&h=260" },
      { name: "Hợp kim nhôm thỏi dùng cho đúc công nghiệp", image: "https://images.unsplash.com/photo-1518174526364-7098e9fc7e60?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Nhôm hệ cửa mở trượt cách âm cực tốt", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 1007,
    name: "Công Ty Cổ Phần Công Nghiệp Tung Kuang",
    logo: "TK",
    brandLogoText: "TUNG KUANG",
    brandSubText: "Nhôm Tung Kuang",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600&h=400",
    categories: ["Nguyên Vật Liệu"],
    subCategories: ["Nhôm - Kính"],
    nhomSanPhams: ["Nhôm xây dựng"],
    sanPhamCuThes: ["Nhôm định hình", "Ống nhôm", "Nhôm hệ cửa", "Nhôm hệ vách ngăn", "Nhôm hệ mặt dựng", "Nhôm định hình Tung Kuang", "Nhôm hệ cửa Tung Kuang", "Nhôm hệ vách ngăn Tung Kuang", "Nhôm hệ mặt dựng Tung Kuang"],
    rating: 4.6,
    reviews: 72,
    location: "Biên Hòa - Đồng Nai",
    address: "Số 3, Đường 2A, KCN Biên Hòa II, Phường Long Hưng, Tỉnh Đồng Nai",
    phone: "0251 383 6688",
    email: "tungkuang@tungkuang.com.vn",
    status: "active",
    established: "08/10/1998",
    description: "Nhà máy sản xuất thanh nhôm định hình, ống nhôm chịu áp, hệ thống vách dựng cao cấp thương hiệu Tung Kuang Taiwan.",
    badge: "Nhà sản xuất",
    productsScale: "Doanh nghiệp có vốn nước ngoài",
    scaleDetails: "1 Nhà máy; 1 chi nhánh nhà máy",
    isVerified: true,
    websiteUrl: "tungkuang.com.vn",
    zaloUrl: "https://zalo.me/02513836688",
    representative: "Bộ phận Phân Phối",
    departmentPhone: "0251 383 6688",
    mst: "3600254361",
    englishName: "TUNG KUANG INDUSTRIAL JOINT STOCK COMPANY",
    productShowcase: [
      { name: "Khung nhôm định hình hệ cửa đi Tung Kuang", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Ống nhôm tròn chịu nhiệt công nghiệp", image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Vách ngăn nhôm kính văn phòng thông minh", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Mặt dựng kính khung nhôm chịu lực cao", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 1008,
    name: "Công Ty TNHH Nhôm Định Hình Sapa Bến Thành",
    logo: "SBT",
    brandLogoText: "SAPA",
    brandSubText: "Sapa Bến Thành",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=600&h=400",
    categories: ["Nguyên Vật Liệu"],
    subCategories: ["Nhôm - Kính"],
    nhomSanPhams: ["Nguyên liệu nhôm", "Nhôm xây dựng"],
    sanPhamCuThes: ["Nhôm định hình", "Phôi nhôm / billet nhôm", "Thanh nhôm định hình Sapa Bến Thành"],
    rating: 4.9,
    reviews: 152,
    location: "Tam Bình - TP.HCM",
    address: "Lô C, Đường số 3, KCN Bình Chiểu, Phường Tam Bình, TP.HCM",
    phone: "028 3896 8780",
    email: "sales@sapabtg.com",
    status: "active",
    established: "12/11/1998",
    description: "Nhà liên doanh quốc tế hàng đầu về sản xuất, xử lý bề mặt anode thanh nhôm định hình kiến trúc chất lượng cao bậc nhất.",
    badge: "Nhà sản xuất",
    productsScale: "Doanh nghiệp liên doanh",
    scaleDetails: "1 Nhà máy công nghệ cao",
    isVerified: true,
    websiteUrl: "sapabtg.com",
    zaloUrl: "https://zalo.me/02838968780",
    representative: "Ban CSKH",
    departmentPhone: "028 3896 8780",
    mst: "0300780985",
    englishName: "SAPA BEN THANH ALUMINIUM PROFILES CO., LTD",
    productShowcase: [
      { name: "Thanh nhôm định hình Anodized chống mài mòn", image: "https://images.unsplash.com/photo-1518174526364-7098e9fc7e60?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Profile nhôm chịu tải trọng nặng công nghiệp", image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Giải pháp nhôm kiến trúc cao tầng Sapa", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Khung nhôm năng lượng mặt trời siêu bền", image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 1009,
    name: "Công Ty TNHH Nhôm Việt Ý",
    logo: "VY",
    brandLogoText: "VIET Y",
    brandSubText: "Nhôm Việt Ý",
    image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=600&h=400",
    categories: ["Nguyên Vật Liệu"],
    subCategories: ["Nhôm - Kính"],
    nhomSanPhams: ["Nhôm xây dựng"],
    sanPhamCuThes: ["Nhôm định hình", "Hợp kim nhôm", "Nhôm hệ cửa", "Nhôm hệ mặt dựng", "Nhôm định hình Việt Ý", "Hợp kim nhôm Việt Ý", "Nhôm hệ cửa Việt Ý", "Nhôm hệ mặt dựng Việt Ý"],
    rating: 4.7,
    reviews: 62,
    location: "Đông Anh - Hà Nội",
    address: "Ô CN11, Cụm công nghiệp Nguyên Khê PHA2, Xã Phúc Thịnh, TP. Hà Nội",
    phone: "0968 217 729",
    email: "vietyaluminium@gmail.com",
    status: "active",
    established: "01/06/2016",
    description: "Nhà sản xuất các loại nhôm định hình chất lượng cao, hợp kim nhôm, nhôm hệ cửa đi, nhôm hệ vách mặt dựng đúc khuôn chuẩn xác.",
    badge: "Nhà sản xuất",
    productsScale: "Doanh nghiệp nội địa",
    scaleDetails: "1 Nhà máy - khoảng 6.500m² - 5.000 tấn/năm",
    isVerified: true,
    websiteUrl: "nhomviety.vn",
    zaloUrl: "https://zalo.me/0968217729",
    representative: "Bộ phận Dự Án",
    departmentPhone: "0968 217 729",
    mst: "0107455497",
    englishName: "VIET Y ALUMINIUM LIMITED COMPANY",
    productShowcase: [
      { name: "Nhôm hệ cửa đi mở quay Việt Ý cao cấp", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Profile hợp kim nhôm đúc khuôn cao", image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Hệ thống mặt dựng nhôm kính xây dựng", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Thanh nhôm định hình anode hóa bề mặt", image: "https://images.unsplash.com/photo-1518174526364-7098e9fc7e60?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 1010,
    name: "Công Ty TNHH Công Nghiệp Tung Shin",
    logo: "TS",
    brandLogoText: "TUNG SHIN",
    brandSubText: "Tung Shin",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600&h=400",
    categories: ["Nguyên Vật Liệu"],
    subCategories: ["Nhôm - Kính"],
    nhomSanPhams: ["Nguyên liệu nhôm", "Nhôm xây dựng"],
    sanPhamCuThes: ["Nhôm thỏi / aluminium ingot", "Hợp kim nhôm", "Nhôm định hình", "Nhôm thỏi Tung Shin", "Hợp kim nhôm Tung Shin", "Nhôm định hình Tung Shin"],
    rating: 4.8,
    reviews: 128,
    location: "Dĩ An - TP.HCM",
    address: "Số 8, Đường 18, KCN Sóng Thần 2, Phường Dĩ An, TP.HCM",
    phone: "0274 3790 889",
    email: "tungshin@tungshinaluminum.com",
    status: "active",
    established: "24/08/2000",
    description: "Nhà đầu tư Đài Loan chuyên sản xuất nhôm thỏi, các hợp kim nhôm đa dạng, nhôm định hình chất lượng cao phục vụ xây dựng.",
    badge: "Nhà sản xuất",
    productsScale: "Doanh nghiệp 100% vốn nước ngoài",
    scaleDetails: "1 Nhà máy - khoảng 62.000m²",
    isVerified: true,
    websiteUrl: "tungshinaluminum.com",
    zaloUrl: "https://zalo.me/02743790889",
    representative: "Ban Chăm Sóc Đại Lý",
    departmentPhone: "0274 3790 889",
    mst: "3700344717",
    englishName: "TUNGSHIN INDUSTRIAL CO., LTD",
    productShowcase: [
      { name: "Hợp kim nhôm thỏi đúc áp lực cao", image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Thanh nhôm định hình kiến trúc Tung Shin", image: "https://images.unsplash.com/photo-1504307651254-35680f35aa9e?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Profile nhôm công nghiệp gia công chính xác", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Cuộn nhôm cán nguội mỏng tiêu chuẩn", image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 1011,
    name: "Công Ty TNHH Kính Nổi Việt Nam",
    logo: "VG",
    brandLogoText: "VFG",
    brandSubText: "Kính Nổi VN",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600&h=400",
    categories: ["Nguyên Vật Liệu"],
    subCategories: ["Nhôm - Kính"],
    nhomSanPhams: ["Kính xây dựng"],
    sanPhamCuThes: ["Kính nổi / float glass", "Kính nổi xây dựng VFG", "Kính nổi siêu mỏng", "Kính nổi trang trí"],
    rating: 4.9,
    reviews: 188,
    location: "Quế Võ - Bắc Ninh",
    address: "KCN Quế Võ mở rộng, Phường Phương Liễu, Tỉnh Bắc Ninh",
    phone: "0222 386 3700; 0222 386 3701",
    email: "phamhuytrongvfg@vnn.vn",
    status: "active",
    established: "05/09/1998",
    description: "Nhà liên doanh sản xuất kính nổi uy tín số một tại Việt Nam, phục vụ đa dạng nhu cầu trang trí nội ngoại thất và dự án.",
    badge: "Nhà sản xuất",
    productsScale: "Doanh nghiệp liên doanh",
    scaleDetails: "1 Nhà máy",
    isVerified: true,
    websiteUrl: "vfg.vn",
    zaloUrl: "https://zalo.me/02223863700",
    representative: "Phòng Kinh Doanh Kính",
    departmentPhone: "0222 386 3700",
    mst: "2300103345",
    englishName: "VIETNAM FLOAT GLASS COMPANY LIMITED",
    productShowcase: [
      { name: "Kính nổi xây dựng trong suốt VFG", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Kính nổi màu hấp thụ nhiệt xanh lá VFG", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Kính phản quang chống tia UV cao cấp", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Phôi kính nổi siêu trắng làm nội thất", image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 1012,
    name: "Công Ty Cổ Phần Kính Nổi Chu Lai - CFG",
    logo: "CF",
    brandLogoText: "CFG",
    brandSubText: "Chu Lai Glass",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600&h=400",
    categories: ["Nguyên Vật Liệu"],
    subCategories: ["Nhôm - Kính"],
    nhomSanPhams: ["Kính xây dựng"],
    sanPhamCuThes: ["Kính nổi / float glass", "Kính nổi xây dựng Chu Lai CFG", "Kính nổi siêu trắng", "Kính nổi siêu phẳng"],
    rating: 4.8,
    reviews: 141,
    location: "Núi Thành - Đà Nẵng",
    address: "KCN Bắc Chu Lai, Xã Núi Thành, TP. Đà Nẵng",
    phone: "0235 224 0288",
    email: "cfg@cfg.com.vn; sales@idt-group.vn",
    status: "active",
    established: "13/04/2006",
    description: "Nhà máy kính siêu trong lớn nhất Việt Nam, sản xuất hàng trăm tấn kính nổi siêu trắng, siêu phẳng mỗi ngày.",
    badge: "Nhà sản xuất",
    productsScale: "Doanh nghiệp nội địa",
    scaleDetails: "1 Nhà máy - 900 tấn/ngày",
    isVerified: true,
    websiteUrl: "cfg.com.vn",
    zaloUrl: "https://zalo.me/02352240288",
    representative: "Ban Phân Phối",
    departmentPhone: "0235 224 0288",
    mst: "4000438263",
    englishName: "CFG - CHU LAI FLOAT GLASS JOINT STOCK COMPANY",
    productShowcase: [
      { name: "Kính nổi xây dựng siêu trắng Chu Lai", image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Kính nổi dán an toàn nhiều lớp CFG", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Kính bọc hộp cách âm cách nhiệt tốt", image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Kính cường lực tôi nhiệt độ cao CFG", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 1013,
    name: "Công Ty Cổ Phần Kính Đáp Cầu",
    logo: "KC",
    brandLogoText: "DAP CAU",
    brandSubText: "Kính Đáp Cầu",
    image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=600&h=400",
    categories: ["Nguyên Vật Liệu"],
    subCategories: ["Nhôm - Kính"],
    nhomSanPhams: ["Kính xây dựng"],
    sanPhamCuThes: ["Kính cường lực", "Kính dán an toàn", "Kính hộp", "Gương soi", "Kính trang trí", "Kính cường lực Đáp Cầu", "Kính dán an toàn Đáp Cầu", "Kính hộp cách âm Đáp Cầu", "Gương soi cao cấp Đáp Cầu", "Kính hoa văn nghệ thuật Đáp Cầu"],
    rating: 4.7,
    reviews: 78,
    location: "Vũ Ninh - Bắc Ninh",
    address: "Khu Cổ Mễ, Phường Vũ Ninh, Tỉnh Bắc Ninh",
    phone: "0222 3821 369",
    email: "info@kinhdapcau.vn",
    status: "active",
    established: "05/09/1998",
    description: "Nhà sản xuất kính dán an toàn, kính cường lực, kính hộp màng chân không, gương bạc Đáp Cầu chất lượng cao cấp.",
    badge: "Nhà sản xuất",
    productsScale: "Doanh nghiệp nội địa",
    scaleDetails: "1 Nhà máy",
    isVerified: true,
    websiteUrl: "kinhdapcau.vn",
    zaloUrl: "https://zalo.me/02223821369",
    representative: "Đại Diện Kinh Doanh",
    departmentPhone: "0222 3821 369",
    mst: "2300100471",
    englishName: "DAP CAU SHEET GLASS JOINT-STOCK COMPANY",
    productShowcase: [
      { name: "Kính cường lực an toàn Đáp Cầu", image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Kính hộp cách âm cách nhiệt chân không", image: "https://images.unsplash.com/photo-1518174526364-7098e9fc7e60?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Gương soi cao cấp tráng bạc Đáp Cầu", image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Kính hoa văn nghệ thuật trang trí nội thất", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 1014,
    name: "Công Ty TNHH Sản Xuất Và Thương Mại Hải Long",
    logo: "HL",
    brandLogoText: "HAI LONG",
    brandSubText: "Kính Hải Long",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600&h=400",
    categories: ["Nguyên Vật Liệu"],
    subCategories: ["Nhôm - Kính"],
    nhomSanPhams: ["Kính xây dựng"],
    sanPhamCuThes: ["Kính Low-E", "Kính phản quang", "Kính cường lực", "Kính dán an toàn", "Kính hộp", "Kính Low-E cản nhiệt", "Kính phản quang chống nắng", "Kính cường lực an toàn", "Kính dán an toàn nhiều lớp", "Kính hộp cách âm", "Kính uốn cong nghệ thuật"],
    rating: 4.8,
    reviews: 156,
    location: "Thường Tín - Hà Nội",
    address: "KCN Hà Bình Phương, Thường Tín, Hà Nội",
    phone: "1900 4696; 0981 177 222",
    email: "info@hailongglass.vn",
    status: "active",
    established: "11/04/2002",
    description: "Khẳng định uy tín với các sản phẩm kính cường lực, kính an toàn, kính Low-E, phản quang, kính uốn cong tinh xảo.",
    badge: "Nhà sản xuất",
    productsScale: "Doanh nghiệp nội địa",
    scaleDetails: "1 Nhà máy",
    isVerified: true,
    websiteUrl: "hailongglass.vn",
    zaloUrl: "https://zalo.me/19004696",
    representative: "Phòng Dự Án",
    departmentPhone: "1900 4696",
    mst: "0500417176",
    englishName: "HAI LON KYOTO",
    productShowcase: [
      { name: "Kính Low-E cản nhiệt cao cấp Hải Long", image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Kính cường lực kiến trúc an toàn", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Kính hộp cách âm Hải Long đa lớp", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Kính uốn cong nghệ thuật cho kiến trúc", image: "https://images.unsplash.com/photo-1518174526364-7098e9fc7e60?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 1015,
    name: "Công Ty Cổ Phần Kính KALA",
    logo: "KL",
    brandLogoText: "KALA",
    brandSubText: "Kính Kala",
    image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=600&h=400",
    categories: ["Nguyên Vật Liệu"],
    subCategories: ["Nhôm - Kính"],
    nhomSanPhams: ["Kính xây dựng"],
    sanPhamCuThes: ["Lan can kính", "Mái kính", "Kính cường lực", "Lan can kính cường lực an toàn", "Mái kính thẩm mỹ lấy sáng", "Sàn kính ceramic chịu lực", "Kính hộp cách nhiệt cường lực"],
    rating: 4.8,
    reviews: 110,
    location: "Thanh Trì - Hà Nội",
    address: "Km 15+300 Quốc lộ 1A cũ, Xã Ngọc Hồi, TP. Hà Nội",
    phone: "024 3689 0198; 0982 776 666",
    email: "kalaglass@kalaglass.com.vn",
    status: "active",
    established: "07/07/1998",
    description: "Nhà máy KALA GLASS cung cấp kính hộp, kính dán an toàn, kính phủ cứng mềm, lan can kính chất lượng đảm bảo hệ thống.",
    badge: "Nhà sản xuất",
    productsScale: "Doanh nghiệp nội địa",
    scaleDetails: "3 Nhà máy - khoảng 535 lao động",
    isVerified: true,
    websiteUrl: "kalaglass.vn",
    zaloUrl: "https://zalo.me/0982776666",
    representative: "Ban Kinh Doanh Dự Án",
    departmentPhone: "0982 776 666",
    mst: "0100386036",
    englishName: "KALA GLASS CORPORATION",
    productShowcase: [
      { name: "Lan can kính cường lực an toàn Kala", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Kính hộp cách nhiệt cường lực cao cấp", image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Hệ thống mái kính thẩm mỹ lấy sáng", image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Kế cấu sàn kính ceramic Kala độ dày cao", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  }
];

const mappedOriginals = [
  ...BASE_LIST_SUPPLIERS,
  ...EXTRA_SUPPLIERS
].map(s => {
  const mapped: string[] = [];
  if (s.id % 3 === 0) {
    mapped.push("Tư Vấn - Pháp Lý Xây Dựng");
  }
  s.categories.forEach(cat => {
    if (cat === "Sắt Thép & Xi Măng" || cat === "Nguyên Vật Liệu" || cat === "Nguyên vật liệu") mapped.push("Nguyên vật liệu");
    else if (cat === "Gạch Ốp Lát" || cat === "Nội ngoại thất") mapped.push("Nội ngoại thất");
    else if (cat === "Thiết Bị Vệ Sinh" || cat === "Dịch vụ nhà ở") mapped.push("Dịch vụ nhà ở");
    else if (cat === "Sơn & Chống Thấm" || cat === "Công trình - Dự án") mapped.push("Công trình - Dự án");
    else if (cat === "Tư Vấn & Pháp Lý" || cat === "Kiểm định - Giám sát - Pháp lý") mapped.push("Kiểm định - Giám sát - Pháp lý");
    else mapped.push(cat);
  });
  if (mapped.length === 0) {
    mapped.push("Nguyên vật liệu");
  }
  const finalsCategories = Array.from(new Set(mapped));

  const subCats: string[] = [];
  if (finalsCategories.includes("Nguyên vật liệu")) {
    const nameLower = s.name.toLowerCase();
    const descLower = s.description.toLowerCase();
    
    if (nameLower.includes("cát") || nameLower.includes("đá") || nameLower.includes("khoáng") || nameLower.includes("khai thác") || descLower.includes("mỏ cát") || s.id % 7 === 0) {
      subCats.push("Cát - Đá - Khoáng");
    }
    if (nameLower.includes("xi măng") || nameLower.includes("bê tông") || nameLower.includes("phụ gia") || nameLower.includes("vinh") || s.id % 7 === 1) {
      subCats.push("Xi măng - Bê tông - Phụ gia");
    }
    if (nameLower.includes("thép") || nameLower.includes("sắt") || nameLower.includes("tôn") || nameLower.includes("kim loại") || nameLower.includes("hòa phát") || s.id % 7 === 2) {
      subCats.push("Sắt - Thép - Tôn - Kim loại");
    }
    if (nameLower.includes("nhôm") || nameLower.includes("kính") || nameLower.includes("gương") || nameLower.includes("window") || s.id % 7 === 3) {
      subCats.push("Nhôm - Kính");
    }
    if (nameLower.includes("gạch") || nameLower.includes("gốm") || nameLower.includes("sứ") || nameLower.includes("đá ốp") || s.id % 7 === 4) {
      subCats.push("Gạch - Đá ốp lát - Gốm sứ");
    }
    if (nameLower.includes("gỗ") || nameLower.includes("ván") || nameLower.includes("tấm") || nameLower.includes("lam") || s.id % 7 === 5) {
      subCats.push("Gỗ - Ván - Vật liệu tấm");
    }
    if (nameLower.includes("thạch cao") || nameLower.includes("trần") || s.id % 13 === 0) {
      subCats.push("Thạch cao");
    }
    if (nameLower.includes("nhựa") || nameLower.includes("polymer") || nameLower.includes("bitumen") || s.id % 11 === 0) {
      subCats.push("Nhựa - Polymer - Bitumen");
    }
    if (nameLower.includes("âm") || nameLower.includes("nhiệt") || nameLower.includes("cách") || s.id % 15 === 0) {
      subCats.push("Cách âm - Cách nhiệt");
    }
    if (nameLower.includes("chống thấm") || nameLower.includes("màng") || nameLower.includes("sơn") || s.id % 7 === 6) {
      subCats.push("Chống thấm - Màng kỹ thuật");
    }

    if (subCats.length === 0) {
      const defaultSubCategories = [
        "Cát - Đá - Khoáng",
        "Xi măng - Bê tông - Phụ gia",
        "Sắt - Thép - Tôn - Kim loại",
        "Nhôm - Kính",
        "Gạch - Đá ốp lát - Gốm sứ"
      ];
      subCats.push(defaultSubCategories[s.id % defaultSubCategories.length]);
    }
  }

  if (finalsCategories.includes("Công trình - Dự án")) {
    const nameLower = s.name.toLowerCase();
    const descLower = s.description.toLowerCase();
    
    if (nameLower.includes("tổng thầu") || nameLower.includes("trọn gói") || nameLower.includes("thiết kế thi công") || descLower.includes("tổng thầu") || s.id % 11 === 0) {
      subCats.push("Tổng Thầu - Trọn Gói");
    }
    if (nameLower.includes("móng") || nameLower.includes("phần thô") || nameLower.includes("kết cấu") || nameLower.includes("bê tông") || descLower.includes("kết cấu") || s.id % 11 === 1) {
      subCats.push("Phần Thô - Kết Cấu");
    }
    if (nameLower.includes("hoàn thiện") || nameLower.includes("cải tạo") || nameLower.includes("fit-out") || nameLower.includes("nội thất") || s.id % 11 === 2) {
      subCats.push("Hoàn Thiện - Fit-out - Cải Tạo");
    }
    if (nameLower.includes("nhà xưởng") || nameLower.includes("công nghiệp") || nameLower.includes("nhà kho") || s.id % 11 === 3) {
      subCats.push("Nhà Xưởng - Công Nghiệp");
    }
    if (nameLower.includes("san lấp") || nameLower.includes("sân bãi") || nameLower.includes("hạ tầng ngoài") || s.id % 11 === 4) {
      subCats.push("San Lấp - Sân Bãi - Hạ Tầng Ngoài Nhà");
    }
    if (nameLower.includes("giao thông") || nameLower.includes("đường") || nameLower.includes("thủy lợi") || s.id % 11 === 5) {
      subCats.push("Giao Thông - Hạ Tầng Kỹ Thuật - Thủy Lợi");
    }
    if (nameLower.includes("cơ điện") || nameLower.includes("mep") || nameLower.includes("hệ thống") || nameLower.includes("điện") || s.id % 11 === 6) {
      subCats.push("Cơ Điện - Hệ Thống Công Trình");
    }
    if (nameLower.includes("hồ bơi") || nameLower.includes("bể bơi") || nameLower.includes("thể thao") || nameLower.includes("vui chơi") || s.id % 11 === 7) {
      subCats.push("Hồ Bơi - Sân Thể Thao - Khu Vui Chơi");
    }
    if (nameLower.includes("karaoke") || nameLower.includes("rạp chiếu") || nameLower.includes("giải trí") || s.id % 11 === 8) {
      subCats.push("Karaoke - Rạp Chiếu - Phòng Giải Trí");
    }
    if (nameLower.includes("phòng sạch") || nameLower.includes("kho lạnh") || s.id % 11 === 9) {
      subCats.push("Phòng Sạch - Kho Lạnh");
    }
    if (nameLower.includes("mặt dựng") || nameLower.includes("chống thấm") || nameLower.includes("cách âm") || s.id % 11 === 10) {
      subCats.push("Mặt Dựng - Chống Thấm - Cách Âm");
    }

    if (subCats.length === 0) {
      const defaultSubCategories = [
        "Tổng Thầu - Trọn Gói",
        "Phần Thô - Kết Cấu",
        "Hoàn Thiện - Fit-out - Cải Tạo",
        "Nhà Xưởng - Công Nghiệp",
        "Cơ Điện - Hệ Thống Công Trình"
      ];
      subCats.push(defaultSubCategories[s.id % defaultSubCategories.length]);
    }
  }

  if (finalsCategories.includes("Kiểm định - Giám sát - Pháp lý")) {
    const nameLower = s.name.toLowerCase();
    const descLower = s.description.toLowerCase();
    
    if (nameLower.includes("khảo sát") || nameLower.includes("đo đạc") || nameLower.includes("hiện trạng") || nameLower.includes("địa chất") || nameLower.includes("địa hình") || s.id % 13 === 0) {
      subCats.push("Khảo Sát - Đo Đạc - Hiện Trạng");
    }
    if (nameLower.includes("thí nghiệm") || nameLower.includes("kiểm định vật liệu") || nameLower.includes("mẫu thử") || s.id % 13 === 1) {
      subCats.push("Thí Nghiệm - Kiểm Định Vật Liệu");
    }
    if (nameLower.includes("kiểm định kết cấu") || nameLower.includes("nền móng") || nameLower.includes("chịu lực") || nameLower.includes("đánh giá an toàn") || s.id % 13 === 2) {
      subCats.push("Kiểm Định Kết Cấu - Nền Móng");
    }
    if (nameLower.includes("quan trắc") || nameLower.includes("theo dõi") || nameLower.includes("biến dạng") || nameLower.includes("lún nghiêng") || s.id % 13 === 3) {
      subCats.push("Quan Trắc - Theo Dõi Công Trình");
    }
    if (nameLower.includes("giám sát thi công") || nameLower.includes("giám sát xây dựng") || s.id % 13 === 4) {
      subCats.push("Giám Sát Thi Công");
    }
    if (nameLower.includes("quản lý dự án") || nameLower.includes("điều phối") || nameLower.includes("quản lý thi công") || s.id % 13 === 5) {
      subCats.push("Quản Lý Dự Án - Điều Phối Công Trình");
    }
    if (nameLower.includes("dự toán") || nameLower.includes("khối lượng") || nameLower.includes("bóc tách") || nameLower.includes("chi phí") || nameLower.includes("qs") || s.id % 13 === 6) {
      subCats.push("Dự Toán - Khối Lượng - Chi Phí");
    }
    if (nameLower.includes("đấu thầu") || nameLower.includes("mời thầu") || nameLower.includes("hồ sơ thầu") || s.id % 13 === 7) {
      subCats.push("Đấu Thầu - Hồ Sơ Mời Thầu");
    }
    if (nameLower.includes("thẩm tra") || nameLower.includes("thẩm định") || nameLower.includes("thẩm duyệt") || s.id % 13 === 8) {
      subCats.push("Thẩm Tra - Thẩm Định Thiết Kế");
    }
    if (nameLower.includes("pháp lý") || nameLower.includes("xin phép") || nameLower.includes("hoàn công") || nameLower.includes("giấy phép") || s.id % 13 === 9) {
      subCats.push("Pháp Lý Xây Dựng - Xin Phép");
    }
    if (nameLower.includes("nghiệm thu") || nameLower.includes("bàn giao") || s.id % 13 === 10) {
      subCats.push("Nghiệm Thu - Hoàn Công - Bàn Giao");
    }
    if (nameLower.includes("an toàn") || nameLower.includes("môi trường") || nameLower.includes("chứng nhận") || nameLower.includes("hse") || s.id % 13 === 11) {
      subCats.push("An Toàn - Môi Trường - Chứng Nhận");
    }
    if (nameLower.includes("sự cố") || nameLower.includes("tranh chấp") || nameLower.includes("giám định pháp y") || nameLower.includes("giám định độc lập") || s.id % 13 === 12) {
      subCats.push("Giám Định Sự Cố - Tranh Chấp");
    }

    if (subCats.length === 0) {
      const defaultSubCategories = [
        "Khảo Sát - Đo Đạc - Hiện Trạng",
        "Giám Sát Thi Công",
        "Quản Lý Dự Án - Điều Phối Công Trình",
        "Pháp Lý Xây Dựng - Xin Phép",
        "Nghiệm Thu - Hoàn Công - Bàn Giao"
      ];
      subCats.push(defaultSubCategories[s.id % defaultSubCategories.length]);
    }
  }

  return {
    ...s,
    categories: finalsCategories,
    subCategories: subCats
  };
});

function deepNormalizeNFC<T>(obj: T): T {
  if (obj === null || obj === undefined) return obj;
  if (typeof obj === "string") {
    let normalized = obj.normalize("NFC");
    if (normalized.includes("1504307651254-35680f35aa9e")) {
      normalized = normalized.replace(/1504307651254-35680f35aa9e/g, "1589939705384-5185137a7f0f");
    }
    if (normalized.includes("1518174526364-7098e9fc7e60")) {
      normalized = normalized.replace(/1518174526364-7098e9fc7e60/g, "1590069261209-f8e9b8642343");
    }
    if (normalized.includes("1541888086425-d81bb19240f5")) {
      normalized = normalized.replace(/1541888086425-d81bb19240f5/g, "1531834685032-c34bf0d8b929");
    }
    return normalized as unknown as T;
  }
  if (Array.isArray(obj)) {
    return obj.map(item => deepNormalizeNFC(item)) as unknown as T;
  }
  if (typeof obj === "object") {
    const newObj: any = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        newObj[key] = deepNormalizeNFC(obj[key]);
      }
    }
    return newObj as T;
  }
  return obj;
}

const rawSuppliersList: Supplier[] = [
  ...NEW_MATERIALS_SUPPLIERS,
  ...mappedOriginals
].map(s => {
  const nhomSanPhams: string[] = s.nhomSanPhams ? [...s.nhomSanPhams] : [];
  const sanPhamCuThes: string[] = s.sanPhamCuThes ? [...s.sanPhamCuThes] : [];
  
  const nameLower = s.name.toLowerCase();
  const descLower = s.description.toLowerCase();
  const textToSearch = `${nameLower} ${descLower} ${s.productShowcase.map(x => x.name.toLowerCase()).join(" ")}`;

  if (s.subCategories?.includes("Cát - Đá - Khoáng")) {
    SAND_GRAVEL_MINERAL_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower) || (itemLower.includes("/") && itemLower.split("/").some(part => textToSearch.includes(part.trim())))) {
          if (!sanPhamCuThes.includes(item)) {
            sanPhamCuThes.push(item);
          }
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) {
        nhomSanPhams.push(group.name);
      }
    });

    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % SAND_GRAVEL_MINERAL_TREE.length;
      const group = SAND_GRAVEL_MINERAL_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
      const itemIdx2 = (s.id + 1) % group.items.length;
      if (itemIdx2 !== itemIdx) {
        sanPhamCuThes.push(group.items[itemIdx2]);
      }
    }
  }

  if (s.subCategories?.includes("Nhôm - Kính")) {
    ALUMINIUM_GLASS_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        const parts = itemLower.split("/").map(p => p.trim());
        const hasMatch = parts.some(part => {
          if (part.length < 3) return false;
          return textToSearch.includes(part);
        });
        if (hasMatch) {
          if (!sanPhamCuThes.includes(item)) {
            sanPhamCuThes.push(item);
          }
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) {
        nhomSanPhams.push(group.name);
      }
    });

    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % ALUMINIUM_GLASS_TREE.length;
      const group = ALUMINIUM_GLASS_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
      const itemIdx2 = (s.id + 1) % group.items.length;
      if (itemIdx2 !== itemIdx) {
        sanPhamCuThes.push(group.items[itemIdx2]);
      }
    }
  }

  if (s.subCategories?.includes("Xi Măng - Bê Tông - Phụ Gia")) {
    CEMENT_CONCRETE_ADMIXTURE_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        const parts = itemLower.split("/").map(p => p.trim());
        const hasMatch = parts.some(part => {
          if (part.length < 3) return false;
          return textToSearch.includes(part);
        });
        if (hasMatch) {
          if (!sanPhamCuThes.includes(item)) {
            sanPhamCuThes.push(item);
          }
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) {
        nhomSanPhams.push(group.name);
      }
    });

    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % CEMENT_CONCRETE_ADMIXTURE_TREE.length;
      const group = CEMENT_CONCRETE_ADMIXTURE_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
      const itemIdx2 = (s.id + 1) % group.items.length;
      if (itemIdx2 !== itemIdx) {
        sanPhamCuThes.push(group.items[itemIdx2]);
      }
    }
  }

  if (s.subCategories?.includes("Sắt - Thép - Tôn - Kim Loại")) {
    IRON_STEEL_METAL_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        const parts = itemLower.split("/").map(p => p.trim());
        const hasMatch = parts.some(part => {
          if (part.length < 3) return false;
          return textToSearch.includes(part);
        });
        if (hasMatch) {
          if (!sanPhamCuThes.includes(item)) {
            sanPhamCuThes.push(item);
          }
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) {
        nhomSanPhams.push(group.name);
      }
    });

    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % IRON_STEEL_METAL_TREE.length;
      const group = IRON_STEEL_METAL_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
      const itemIdx2 = (s.id + 1) % group.items.length;
      if (itemIdx2 !== itemIdx) {
        sanPhamCuThes.push(group.items[itemIdx2]);
      }
    }
  }

  if (s.subCategories?.includes("Gạch - Đá Ốp Lát - Gốm Sứ")) {
    BRICKS_STONE_CERAMICS_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        const parts = itemLower.split("/").map(p => p.trim());
        const hasMatch = parts.some(part => {
          if (part.length < 3) return false;
          return textToSearch.includes(part);
        });
        if (hasMatch) {
          if (!sanPhamCuThes.includes(item)) {
            sanPhamCuThes.push(item);
          }
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) {
        nhomSanPhams.push(group.name);
      }
    });

    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % BRICKS_STONE_CERAMICS_TREE.length;
      const group = BRICKS_STONE_CERAMICS_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
      const itemIdx2 = (s.id + 1) % group.items.length;
      if (itemIdx2 !== itemIdx) {
        sanPhamCuThes.push(group.items[itemIdx2]);
      }
    }
  }

  if (s.subCategories?.includes("Gỗ - Ván Gỗ - Gỗ Nhựa")) {
    WOOD_PANEL_MATERIALS_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        const parts = itemLower.split("/").map(p => p.trim());
        const hasMatch = parts.some(part => {
          if (part.length < 3) return false;
          return textToSearch.includes(part);
        });
        if (hasMatch) {
          if (!sanPhamCuThes.includes(item)) {
            sanPhamCuThes.push(item);
          }
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) {
        nhomSanPhams.push(group.name);
      }
    });

    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % WOOD_PANEL_MATERIALS_TREE.length;
      const group = WOOD_PANEL_MATERIALS_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
      const itemIdx2 = (s.id + 1) % group.items.length;
      if (itemIdx2 !== itemIdx) {
        sanPhamCuThes.push(group.items[itemIdx2]);
      }
    }
  }

  if (s.subCategories?.includes("Thạch Cao")) {
    GYPSUM_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        const parts = itemLower.split("/").map(p => p.trim());
        const hasMatch = parts.some(part => {
          if (part.length < 3) return false;
          return textToSearch.includes(part);
        });
        if (hasMatch) {
          if (!sanPhamCuThes.includes(item)) {
            sanPhamCuThes.push(item);
          }
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) {
        nhomSanPhams.push(group.name);
      }
    });

    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % GYPSUM_TREE.length;
      const group = GYPSUM_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
      const itemIdx2 = (s.id + 1) % group.items.length;
      if (itemIdx2 !== itemIdx) {
        sanPhamCuThes.push(group.items[itemIdx2]);
      }
    }
  }

  if (s.subCategories?.includes("Nhựa - Polymer - Bitumen")) {
    PLASTIC_POLYMER_BITUMEN_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        const parts = itemLower.split("/").map(p => p.trim());
        const hasMatch = parts.some(part => {
          if (part.length < 3) return false;
          return textToSearch.includes(part);
        });
        if (hasMatch) {
          if (!sanPhamCuThes.includes(item)) {
            sanPhamCuThes.push(item);
          }
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) {
        nhomSanPhams.push(group.name);
      }
    });

    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % PLASTIC_POLYMER_BITUMEN_TREE.length;
      const group = PLASTIC_POLYMER_BITUMEN_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
      const itemIdx2 = (s.id + 1) % group.items.length;
      if (itemIdx2 !== itemIdx) {
        sanPhamCuThes.push(group.items[itemIdx2]);
      }
    }
  }

  if (s.subCategories?.includes("Cách Âm - Cách Nhiệt")) {
    INSULATION_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        const parts = itemLower.split("/").map(p => p.trim());
        const hasMatch = parts.some(part => {
          if (part.length < 3) return false;
          return textToSearch.includes(part);
        });
        if (hasMatch) {
          if (!sanPhamCuThes.includes(item)) {
            sanPhamCuThes.push(item);
          }
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) {
        nhomSanPhams.push(group.name);
      }
    });

    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % INSULATION_TREE.length;
      const group = INSULATION_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
      const itemIdx2 = (s.id + 1) % group.items.length;
      if (itemIdx2 !== itemIdx) {
        sanPhamCuThes.push(group.items[itemIdx2]);
      }
    }
  }

  if (s.subCategories?.includes("Chống Thấm - Màng Kỹ Thuật")) {
    WATERPROOFING_MEMBRANE_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        const parts = itemLower.split("/").map(p => p.trim());
        const hasMatch = parts.some(part => {
          if (part.length < 3) return false;
          return textToSearch.includes(part);
        });
        if (hasMatch) {
          if (!sanPhamCuThes.includes(item)) {
            sanPhamCuThes.push(item);
          }
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) {
        nhomSanPhams.push(group.name);
      }
    });

    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % WATERPROOFING_MEMBRANE_TREE.length;
      const group = WATERPROOFING_MEMBRANE_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
      const itemIdx2 = (s.id + 1) % group.items.length;
      if (itemIdx2 !== itemIdx) {
        sanPhamCuThes.push(group.items[itemIdx2]);
      }
    }
  }

  if (s.subCategories?.includes("Sơn - Bột Bả - Chất Phủ")) {
    PAINT_COATING_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        const parts = itemLower.split("/").map(p => p.trim());
        const hasMatch = parts.some(part => {
          if (part.length < 3) return false;
          return textToSearch.includes(part);
        });
        if (hasMatch) {
          if (!sanPhamCuThes.includes(item)) {
            sanPhamCuThes.push(item);
          }
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) {
        nhomSanPhams.push(group.name);
      }
    });

    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % PAINT_COATING_TREE.length;
      const group = PAINT_COATING_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Vật Liệu Tấm Khoáng - Xi Măng Sợi")) {
    MINERAL_CEMENT_BOARD_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        const parts = itemLower.split("/").map(p => p.trim());
        const hasMatch = parts.some(part => {
          if (part.length < 3) return false;
          return textToSearch.includes(part);
        });
        if (hasMatch) {
          if (!sanPhamCuThes.includes(item)) {
            sanPhamCuThes.push(item);
          }
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) {
        nhomSanPhams.push(group.name);
      }
    });

    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % MINERAL_CEMENT_BOARD_TREE.length;
      const group = MINERAL_CEMENT_BOARD_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Chống Cháy - Vật Liệu Ngăn Cháy")) {
    FIREPROOFING_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        const parts = itemLower.split("/").map(p => p.trim());
        const hasMatch = parts.some(part => {
          if (part.length < 3) return false;
          return textToSearch.includes(part);
        });
        if (hasMatch) {
          if (!sanPhamCuThes.includes(item)) {
            sanPhamCuThes.push(item);
          }
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) {
        nhomSanPhams.push(group.name);
      }
    });

    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % FIREPROOFING_TREE.length;
      const group = FIREPROOFING_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  // --- CÔNG TRÌNH - DỰ ÁN ---
  if (s.subCategories?.includes("Tổng Thầu - Trọn Gói")) {
    TOTAL_CONTRACTOR_PACKAGE_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % TOTAL_CONTRACTOR_PACKAGE_TREE.length;
      const group = TOTAL_CONTRACTOR_PACKAGE_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Phần Thô - Kết Cấu")) {
    ROUGH_CONSTRUCTION_STRUCTURE_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % ROUGH_CONSTRUCTION_STRUCTURE_TREE.length;
      const group = ROUGH_CONSTRUCTION_STRUCTURE_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Hoàn Thiện - Fit-out - Cải Tạo")) {
    FINISHING_FITOUT_RENOVATION_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % FINISHING_FITOUT_RENOVATION_TREE.length;
      const group = FINISHING_FITOUT_RENOVATION_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Nhà Xưởng - Công Nghiệp")) {
    FACTORY_INDUSTRIAL_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % FACTORY_INDUSTRIAL_TREE.length;
      const group = FACTORY_INDUSTRIAL_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("San Lấp - Sân Bãi - Hạ Tầng Ngoài Nhà")) {
    LAND_CLEARING_YARD_INFRASTRUCTURE_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % LAND_CLEARING_YARD_INFRASTRUCTURE_TREE.length;
      const group = LAND_CLEARING_YARD_INFRASTRUCTURE_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Giao Thông - Hạ Tầng Kỹ Thuật - Thủy Lợi")) {
    TRANSPORTATION_TECHNICAL_WATER_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % TRANSPORTATION_TECHNICAL_WATER_TREE.length;
      const group = TRANSPORTATION_TECHNICAL_WATER_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Cơ Điện - Hệ Thống Công Trình")) {
    MEP_SYSTEM_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % MEP_SYSTEM_TREE.length;
      const group = MEP_SYSTEM_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Hồ Bơi - Sân Thể Thao - Khu Vui Chơi")) {
    POOL_SPORTS_PLAYGROUND_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % POOL_SPORTS_PLAYGROUND_TREE.length;
      const group = POOL_SPORTS_PLAYGROUND_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Karaoke - Rạp Chiếu - Phòng Giải Trí")) {
    KARAOKE_CINEMA_ENTERTAINMENT_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % KARAOKE_CINEMA_ENTERTAINMENT_TREE.length;
      const group = KARAOKE_CINEMA_ENTERTAINMENT_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Phòng Sạch - Kho Lạnh")) {
    CLEANROOM_COLD_STORAGE_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % CLEANROOM_COLD_STORAGE_TREE.length;
      const group = CLEANROOM_COLD_STORAGE_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Mặt Dựng - Chống Thấm - Cách Âm")) {
    FACADE_WATERPROOF_SOUNDPROOF_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % FACADE_WATERPROOF_SOUNDPROOF_TREE.length;
      const group = FACADE_WATERPROOF_SOUNDPROOF_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  // --- KIỂM ĐỊNH - GIÁM SÁT - PHÁP LÝ ---
  if (s.subCategories?.includes("Khảo Sát - Đo Đạc - Hiện Trạng")) {
    SURVEY_MEASUREMENT_STATUS_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % SURVEY_MEASUREMENT_STATUS_TREE.length;
      const group = SURVEY_MEASUREMENT_STATUS_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Thí Nghiệm - Kiểm Định Vật Liệu")) {
    MATERIAL_TESTING_INSPECTION_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % MATERIAL_TESTING_INSPECTION_TREE.length;
      const group = MATERIAL_TESTING_INSPECTION_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Kiểm Định Kết Cấu - Nền Móng")) {
    STRUCTURE_FOUNDATION_INSPECTION_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % STRUCTURE_FOUNDATION_INSPECTION_TREE.length;
      const group = STRUCTURE_FOUNDATION_INSPECTION_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Quan Trắc - Theo Dõi Công Trình")) {
    MONITORING_TRACKING_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % MONITORING_TRACKING_TREE.length;
      const group = MONITORING_TRACKING_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Giám Sát Thi Công")) {
    CONSTRUCTION_SUPERVISION_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % CONSTRUCTION_SUPERVISION_TREE.length;
      const group = CONSTRUCTION_SUPERVISION_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Quản Lý Dự Án - Điều Phối Công Trình")) {
    PROJECT_MANAGEMENT_COORDINATION_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % PROJECT_MANAGEMENT_COORDINATION_TREE.length;
      const group = PROJECT_MANAGEMENT_COORDINATION_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Dự Toán - Khối Lượng - Chi Phí")) {
    ESTIMATION_VOLUME_COST_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % ESTIMATION_VOLUME_COST_TREE.length;
      const group = ESTIMATION_VOLUME_COST_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Đấu Thầu - Hồ Sơ Mời Thầu")) {
    BIDDING_DOSSIER_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % BIDDING_DOSSIER_TREE.length;
      const group = BIDDING_DOSSIER_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Thẩm Tra - Thẩm Định Thiết Kế")) {
    DESIGN_VERIFICATION_APPRAISAL_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % DESIGN_VERIFICATION_APPRAISAL_TREE.length;
      const group = DESIGN_VERIFICATION_APPRAISAL_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Pháp Lý Xây Dựng - Xin Phép")) {
    CONSTRUCTION_LEGAL_PERMIT_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % CONSTRUCTION_LEGAL_PERMIT_TREE.length;
      const group = CONSTRUCTION_LEGAL_PERMIT_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Nghiệm Thu - Hoàn Công - Bàn Giao")) {
    ACCEPTANCE_AS_BUILT_HANDOVER_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % ACCEPTANCE_AS_BUILT_HANDOVER_TREE.length;
      const group = ACCEPTANCE_AS_BUILT_HANDOVER_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("An Toàn - Môi Trường - Chứng Nhận")) {
    SAFETY_ENVIRONMENT_CERTIFICATE_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % SAFETY_ENVIRONMENT_CERTIFICATE_TREE.length;
      const group = SAFETY_ENVIRONMENT_CERTIFICATE_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Giám Định Sự Cố - Tranh Chấp")) {
    INCIDENT_DISPUTE_EXPERT_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % INCIDENT_DISPUTE_EXPERT_TREE.length;
      const group = INCIDENT_DISPUTE_EXPERT_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  // --- DỊCH VỤ NHÀ Ở ---
  if (s.subCategories?.includes("Vệ Sinh - Dọn Dẹp - Khử Mùi")) {
    CLEANING_DEODORIZING_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % CLEANING_DEODORIZING_TREE.length;
      const group = CLEANING_DEODORIZING_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Sửa Chữa - Bảo Trì Nhà Ở")) {
    REPAIR_MAINTENANCE_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % REPAIR_MAINTENANCE_TREE.length;
      const group = REPAIR_MAINTENANCE_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Điện - Nước Dân Dụng")) {
    DOMESTIC_ELECTRICAL_WATER_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % DOMESTIC_ELECTRICAL_WATER_TREE.length;
      const group = DOMESTIC_ELECTRICAL_WATER_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Điện Lạnh - Thiết Bị Gia Dụng")) {
    REFRIGERATION_HOME_APPLIANCES_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % REFRIGERATION_HOME_APPLIANCES_TREE.length;
      const group = REFRIGERATION_HOME_APPLIANCES_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Chống Thấm - Thấm Dột - Nứt Tường")) {
    WATERPROOF_LEAK_WALL_CRACK_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % WATERPROOF_LEAK_WALL_CRACK_TREE.length;
      const group = WATERPROOF_LEAK_WALL_CRACK_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("An Ninh - Camera - Nhà Thông Minh")) {
    SECURITY_CAMERA_SMART_HOME_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % SECURITY_CAMERA_SMART_HOME_TREE.length;
      const group = SECURITY_CAMERA_SMART_HOME_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("PCCC - An Toàn Gia Đình")) {
    FIRE_SAFETY_FAMILY_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % FIRE_SAFETY_FAMILY_TREE.length;
      const group = FIRE_SAFETY_FAMILY_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Sân Vườn - Cây Xanh - Hồ Cá")) {
    GARDEN_GREENERY_FISH_POND_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % GARDEN_GREENERY_FISH_POND_TREE.length;
      const group = GARDEN_GREENERY_FISH_POND_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Hồ Bơi - Bể Nước - Nước Sinh Hoạt")) {
    POOL_WATER_TANK_USABLE_WATER_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % POOL_WATER_TANK_USABLE_WATER_TREE.length;
      const group = POOL_WATER_TANK_USABLE_WATER_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Diệt Côn Trùng - Kiểm Soát Sinh Vật Gây Hại")) {
    INSECT_PEST_CONTROL_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % INSECT_PEST_CONTROL_TREE.length;
      const group = INSECT_PEST_CONTROL_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Chuyển Nhà - Vận Chuyển - Lưu Kho")) {
    HOUSE_MOVING_TRANSPORT_STORAGE_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % HOUSE_MOVING_TRANSPORT_STORAGE_TREE.length;
      const group = HOUSE_MOVING_TRANSPORT_STORAGE_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Nội Thất Gia Đình - Lắp Đặt - Sửa Chữa")) {
    HOME_FURNITURE_INSTALL_REPAIR_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % HOME_FURNITURE_INSTALL_REPAIR_TREE.length;
      const group = HOME_FURNITURE_INSTALL_REPAIR_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Thoát Thải - Cống Rãnh - Môi Trường Nhà Ở")) {
    WASTEWATER_DRAIN_ENVIRONMENT_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % WASTEWATER_DRAIN_ENVIRONMENT_TREE.length;
      const group = WASTEWATER_DRAIN_ENVIRONMENT_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Kiểm Tra - Tư Vấn Tình Trạng Nhà")) {
    INSPECTION_ADVISORY_HOUSE_STATUS_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % INSPECTION_ADVISORY_HOUSE_STATUS_TREE.length;
      const group = INSPECTION_ADVISORY_HOUSE_STATUS_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Pháp Lý - Hồ Sơ Nhà Ở")) {
    LEGAL_DOSSIER_HOUSE_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % LEGAL_DOSSIER_HOUSE_TREE.length;
      const group = LEGAL_DOSSIER_HOUSE_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  if (s.subCategories?.includes("Quản Lý - Vận Hành Nhà Cho Thuê")) {
    MANAGE_OPERATE_RENTAL_HOUSE_TREE.forEach(group => {
      let matchedGroup = false;
      group.items.forEach(item => {
        const itemLower = item.toLowerCase();
        if (textToSearch.includes(itemLower)) {
          if (!sanPhamCuThes.includes(item)) sanPhamCuThes.push(item);
          matchedGroup = true;
        }
      });
      if (matchedGroup && !nhomSanPhams.includes(group.name)) nhomSanPhams.push(group.name);
    });
    if (nhomSanPhams.length === 0) {
      const groupIdx = s.id % MANAGE_OPERATE_RENTAL_HOUSE_TREE.length;
      const group = MANAGE_OPERATE_RENTAL_HOUSE_TREE[groupIdx];
      nhomSanPhams.push(group.name);
      const itemIdx = s.id % group.items.length;
      sanPhamCuThes.push(group.items[itemIdx]);
    }
  }

  return {
    ...s,
    nhomSanPhams,
    sanPhamCuThes
  };
});

export const LIST_SUPPLIERS: Supplier[] = deepNormalizeNFC(rawSuppliersList);
