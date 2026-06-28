import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  SlidersHorizontal, 
  X,
  ChevronDown,
  Search,
  Check
} from "lucide-react";
import { 
  MOCK_FILTER_DATA, 
  MATERIALS_SUB_CATEGORIES, 
  INTERIOR_SUB_CATEGORIES,
  PROJECT_SUB_CATEGORIES,
  SAND_GRAVEL_MINERAL_TREE, 
  ALUMINIUM_GLASS_TREE,
  CEMENT_CONCRETE_ADMIXTURE_TREE,
  IRON_STEEL_METAL_TREE,
  BRICKS_STONE_CERAMICS_TREE,
  WOOD_PANEL_MATERIALS_TREE,
  GYPSUM_TREE,
  PLASTIC_POLYMER_BITUMEN_TREE,
  INSULATION_TREE,
  WATERPROOFING_MEMBRANE_TREE,
  PAINT_COATING_TREE,
  MINERAL_CEMENT_BOARD_TREE,
  FIREPROOFING_TREE,
  SEATING_WAITING_TREE,
  WORKING_LEARNING_MEETING_TREE,
  DINING_KITCHEN_BAR_TREE,
  SLEEPING_ACCOMMODATION_TREE,
  STORAGE_ORGANIZATION_DISPLAY_TREE,
  RECEPTION_TRANSACTION_SERVICE_TREE,
  SANITATION_PERSONAL_CARE_TREE,
  CARE_TREATMENT_BEAUTY_TREE,
  WORSHIP_SPIRITUALITY_TREE,
  SHIELDING_PARTITION_PRIVACY_TREE,
  LIGHTING_DECORATION_IDENTIFICATION_TREE,
  ACOUSTICS_INSULATION_SOUNDPROOFING_TREE,
  SAFETY_ACCESS_PROTECTION_TREE,
  PLAY_EDUCATION_MOVEMENT_TREE,
  OUTDOOR_GARDEN_LANDSCAPE_TREE,
  ACCESSORIES_HARDWARE_FINISHING_TREE,
  TOTAL_CONTRACTOR_PACKAGE_TREE,
  ROUGH_CONSTRUCTION_STRUCTURE_TREE,
  FINISHING_FITOUT_RENOVATION_TREE,
  FACTORY_INDUSTRIAL_TREE,
  LAND_CLEARING_YARD_INFRASTRUCTURE_TREE,
  TRANSPORTATION_TECHNICAL_WATER_TREE,
  MEP_SYSTEM_TREE,
  POOL_SPORTS_PLAYGROUND_TREE,
  KARAOKE_CINEMA_ENTERTAINMENT_TREE,
  CLEANROOM_COLD_STORAGE_TREE,
  FACADE_WATERPROOF_SOUNDPROOF_TREE,
  LEGAL_SUPERVISION_SUB_CATEGORIES,
  SURVEY_MEASUREMENT_STATUS_TREE,
  MATERIAL_TESTING_INSPECTION_TREE,
  STRUCTURE_FOUNDATION_INSPECTION_TREE,
  MONITORING_TRACKING_TREE,
  CONSTRUCTION_SUPERVISION_TREE,
  PROJECT_MANAGEMENT_COORDINATION_TREE,
  ESTIMATION_VOLUME_COST_TREE,
  BIDDING_DOSSIER_TREE,
  DESIGN_VERIFICATION_APPRAISAL_TREE,
  CONSTRUCTION_LEGAL_PERMIT_TREE,
  ACCEPTANCE_AS_BUILT_HANDOVER_TREE,
  SAFETY_ENVIRONMENT_CERTIFICATE_TREE,
  INCIDENT_DISPUTE_EXPERT_TREE,
  HOME_SERVICES_SUB_CATEGORIES,
  CLEANING_DEODORIZING_TREE,
  REPAIR_MAINTENANCE_TREE,
  DOMESTIC_ELECTRICAL_WATER_TREE,
  REFRIGERATION_HOME_APPLIANCES_TREE,
  WATERPROOF_LEAK_WALL_CRACK_TREE,
  SECURITY_CAMERA_SMART_HOME_TREE,
  FIRE_SAFETY_FAMILY_TREE,
  GARDEN_GREENERY_FISH_POND_TREE,
  POOL_WATER_TANK_USABLE_WATER_TREE,
  INSECT_PEST_CONTROL_TREE,
  HOUSE_MOVING_TRANSPORT_STORAGE_TREE,
  HOME_FURNITURE_INSTALL_REPAIR_TREE,
  WASTEWATER_DRAIN_ENVIRONMENT_TREE,
  INSPECTION_ADVISORY_HOUSE_STATUS_TREE,
  LEGAL_DOSSIER_HOUSE_TREE,
  MANAGE_OPERATE_RENTAL_HOUSE_TREE,
  LIST_SUPPLIERS 
} from "@/lib/data-suppliers";

const getMaterialTree = (subName: string) => {
  switch (subName) {
    case "Cát - Đá - Khoáng": return SAND_GRAVEL_MINERAL_TREE;
    case "Nhôm - Kính": return ALUMINIUM_GLASS_TREE;
    case "Xi Măng - Bê Tông - Phụ Gia": return CEMENT_CONCRETE_ADMIXTURE_TREE;
    case "Sắt - Thép - Tôn - Kim Loại": return IRON_STEEL_METAL_TREE;
    case "Gạch - Đá Ốp Lát - Gốm Sứ": return BRICKS_STONE_CERAMICS_TREE;
    case "Gỗ - Ván Gỗ - Gỗ Nhựa": return WOOD_PANEL_MATERIALS_TREE;
    case "Thạch Cao": return GYPSUM_TREE;
    case "Nhựa - Polymer - Bitumen": return PLASTIC_POLYMER_BITUMEN_TREE;
    case "Cách Âm - Cách Nhiệt": return INSULATION_TREE;
    case "Chống Thấm - Màng Kỹ Thuật": return WATERPROOFING_MEMBRANE_TREE;
    case "Sơn - Bột Bả - Chất Phủ": return PAINT_COATING_TREE;
    case "Vật Liệu Tấm Khoáng - Xi Măng Sợi": return MINERAL_CEMENT_BOARD_TREE;
    case "Chống Cháy - Vật Liệu Ngăn Cháy": return FIREPROOFING_TREE;
    default: return [];
  }
};

const getInteriorTree = (subName: string) => {
  switch (subName) {
    case "Ngồi - Tiếp Khách - Chờ Đợi": return SEATING_WAITING_TREE;
    case "Làm Việc - Học Tập - Hội Họp": return WORKING_LEARNING_MEETING_TREE;
    case "Ăn Uống - Bếp - Pha Chế": return DINING_KITCHEN_BAR_TREE;
    case "Ngủ Nghỉ - Lưu Trú": return SLEEPING_ACCOMMODATION_TREE;
    case "Lưu Trữ - Sắp Xếp - Trưng Bày": return STORAGE_ORGANIZATION_DISPLAY_TREE;
    case "Tiếp Đón - Giao Dịch - Dịch Vụ": return RECEPTION_TRANSACTION_SERVICE_TREE;
    case "Vệ Sinh - Chăm Sóc Cá Nhân": return SANITATION_PERSONAL_CARE_TREE;
    case "Chăm Sóc - Điều Trị - Làm Đẹp": return CARE_TREATMENT_BEAUTY_TREE;
    case "Thờ Cúng - Tâm Linh": return WORSHIP_SPIRITUALITY_TREE;
    case "Che Chắn - Phân Chia - Riêng Tư": return SHIELDING_PARTITION_PRIVACY_TREE;
    case "Chiếu Sáng - Trang Trí - Nhận Diện": return LIGHTING_DECORATION_IDENTIFICATION_TREE;
    case "Âm Học - Cách Âm - Tiêu Âm": return ACOUSTICS_INSULATION_SOUNDPROOFING_TREE;
    case "An Toàn - Tiếp Cận - Bảo Vệ": return SAFETY_ACCESS_PROTECTION_TREE;
    case "Vui Chơi - Giáo Dục - Vận Động": return PLAY_EDUCATION_MOVEMENT_TREE;
    case "Ngoài Trời - Sân Vườn - Cảnh Quan": return OUTDOOR_GARDEN_LANDSCAPE_TREE;
    case "Phụ Kiện - Hardware - Hoàn Thiện Nội Thất": return ACCESSORIES_HARDWARE_FINISHING_TREE;
    default: return [];
  }
};

const getProjectTree = (subName: string) => {
  switch (subName) {
    case "Tổng Thầu - Trọn Gói": return TOTAL_CONTRACTOR_PACKAGE_TREE;
    case "Phần Thô - Kết Cấu": return ROUGH_CONSTRUCTION_STRUCTURE_TREE;
    case "Hoàn Thiện - Fit-out - Cải Tạo": return FINISHING_FITOUT_RENOVATION_TREE;
    case "Nhà Xưởng - Công Nghiệp": return FACTORY_INDUSTRIAL_TREE;
    case "San Lấp - Sân Bãi - Hạ Tầng Ngoài Nhà": return LAND_CLEARING_YARD_INFRASTRUCTURE_TREE;
    case "Giao Thông - Hạ Tầng Kỹ Thuật - Thủy Lợi": return TRANSPORTATION_TECHNICAL_WATER_TREE;
    case "Cơ Điện - Hệ Thống Công Trình": return MEP_SYSTEM_TREE;
    case "Hồ Bơi - Sân Thể Thao - Khu Vui Chơi": return POOL_SPORTS_PLAYGROUND_TREE;
    case "Karaoke - Rạp Chiếu - Phòng Giải Trí": return KARAOKE_CINEMA_ENTERTAINMENT_TREE;
    case "Phòng Sạch - Kho Lạnh": return CLEANROOM_COLD_STORAGE_TREE;
    case "Mặt Dựng - Chống Thấm - Cách Âm": return FACADE_WATERPROOF_SOUNDPROOF_TREE;
    default: return [];
  }
};

const getLegalTree = (subName: string) => {
  switch (subName) {
    case "Khảo Sát - Đo Đạc - Hiện Trạng": return SURVEY_MEASUREMENT_STATUS_TREE;
    case "Thí Nghiệm - Kiểm Định Vật Liệu": return MATERIAL_TESTING_INSPECTION_TREE;
    case "Kiểm Định Kết Cấu - Nền Móng": return STRUCTURE_FOUNDATION_INSPECTION_TREE;
    case "Quan Trắc - Theo Dõi Công Trình": return MONITORING_TRACKING_TREE;
    case "Giám Sát Thi Công": return CONSTRUCTION_SUPERVISION_TREE;
    case "Quản Lý Dự Án - Điều Phối Công Trình": return PROJECT_MANAGEMENT_COORDINATION_TREE;
    case "Dự Toán - Khối Lượng - Chi Phí": return ESTIMATION_VOLUME_COST_TREE;
    case "Đấu Thầu - Hồ Sơ Mời Thầu": return BIDDING_DOSSIER_TREE;
    case "Thẩm Tra - Thẩm Định Thiết Kế": return DESIGN_VERIFICATION_APPRAISAL_TREE;
    case "Pháp Lý Xây Dựng - Xin Phép": return CONSTRUCTION_LEGAL_PERMIT_TREE;
    case "Nghiệm Thu - Hoàn Công - Bàn Giao": return ACCEPTANCE_AS_BUILT_HANDOVER_TREE;
    case "An Toàn - Môi Trường - Chứng Nhận": return SAFETY_ENVIRONMENT_CERTIFICATE_TREE;
    case "Giám Định Sự Cố - Tranh Chấp": return INCIDENT_DISPUTE_EXPERT_TREE;
    default: return [];
  }
};

const getHomeServicesTree = (subName: string) => {
  switch (subName) {
    case "Vệ Sinh - Dọn Dẹp - Khử Mùi": return CLEANING_DEODORIZING_TREE;
    case "Sửa Chữa - Bảo Trì Nhà Ở": return REPAIR_MAINTENANCE_TREE;
    case "Điện - Nước Dân Dụng": return DOMESTIC_ELECTRICAL_WATER_TREE;
    case "Điện Lạnh - Thiết Bị Gia Dụng": return REFRIGERATION_HOME_APPLIANCES_TREE;
    case "Chống Thấm - Thấm Dột - Nứt Tường": return WATERPROOF_LEAK_WALL_CRACK_TREE;
    case "An Ninh - Camera - Nhà Thông Minh": return SECURITY_CAMERA_SMART_HOME_TREE;
    case "PCCC - An Toàn Gia Đình": return FIRE_SAFETY_FAMILY_TREE;
    case "Sân Vườn - Cây Xanh - Hồ Cá": return GARDEN_GREENERY_FISH_POND_TREE;
    case "Hồ Bơi - Bể Nước - Nước Sinh Hoạt": return POOL_WATER_TANK_USABLE_WATER_TREE;
    case "Diệt Côn Trùng - Kiểm Soát Sinh Vật Gây Hại": return INSECT_PEST_CONTROL_TREE;
    case "Chuyển Nhà - Vận Chuyển - Lưu Kho": return HOUSE_MOVING_TRANSPORT_STORAGE_TREE;
    case "Nội Thất Gia Đình - Lắp Đặt - Sửa Chữa": return HOME_FURNITURE_INSTALL_REPAIR_TREE;
    case "Thoát Thải - Cống Rãnh - Môi Trường Nhà Ở": return WASTEWATER_DRAIN_ENVIRONMENT_TREE;
    case "Kiểm Tra - Tư Vấn Tình Trạng Nhà": return INSPECTION_ADVISORY_HOUSE_STATUS_TREE;
    case "Pháp Lý - Hồ Sơ Nhà Ở": return LEGAL_DOSSIER_HOUSE_TREE;
    case "Quản Lý - Vận Hành Nhà Cho Thuê": return MANAGE_OPERATE_RENTAL_HOUSE_TREE;
    default: return [];
  }
};

interface MobileFilterDrawerProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  activeFilterCount: number;
  filteredCount: number;
  resetFilters: () => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedSubCategory?: string;
  setSelectedSubCategory?: (sub: string) => void;
  selectedNhom?: string;
  setSelectedNhom?: (nhom: string) => void;
  selectedSanPham?: string;
  setSelectedSanPham?: (sp: string) => void;
  selectedLocation: string;
  setSelectedLocation: (loc: string) => void;
  selectedRating: number | null;
  setSelectedRating: (rating: number | null) => void;
  onlyVerified: boolean;
  setOnlyVerified: (val: boolean) => void;
  selectedRoles: string[];
  setSelectedRoles: (roles: string[]) => void;
  selectedModels: string[];
  setSelectedModels: (models: string[]) => void;
  selectedLocations: string[];
  setSelectedLocations: (locations: string[]) => void;
  onNotifyNoSuppliers?: (message: string) => void;
}

const AccordionItem = ({ 
  title, 
  children,
  defaultOpen = false
}: { 
  title: string, 
  children: React.ReactNode,
  defaultOpen?: boolean
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-100 last:border-0 py-3.5 first:pt-1 last:pb-1">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left group"
      >
        <h4 className={`font-medium text-[14px] uppercase tracking-wide transition-colors ${isOpen ? 'text-[#a3223a]' : 'text-gray-800'}`}>{title}</h4>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#a3223a]" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-3 pb-1">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CustomCheckbox = ({ checked, label, onChange }: { checked: boolean; label: string; onChange: () => void }) => (
  <button 
    onClick={onChange}
    className="flex items-start gap-3 py-2 cursor-pointer group bg-transparent text-left w-full border-none"
  >
    <div className={`relative flex items-center justify-center w-[18px] h-[18px] mt-0.5 border rounded-[4px] transition-colors shrink-0
      ${checked ? 'bg-[#c81e51] border-[#c81e51]' : 'bg-white border-gray-300 group-hover:border-[#c81e51]'}`}
    >
      <Check className={`w-3.5 h-3.5 text-white absolute transition-opacity ${checked ? 'opacity-100' : 'opacity-0'}`} strokeWidth={3} />
    </div>
    <span className="text-[15px] text-gray-700 group-hover:text-gray-900 leading-tight select-none">{label}</span>
  </button>
);

export const MobileFilterDrawer = React.memo(({
  isOpen,
  setIsOpen,
  activeFilterCount,
  filteredCount,
  resetFilters,
  selectedCategory,
  setSelectedCategory,
  selectedSubCategory = "",
  setSelectedSubCategory,
  selectedNhom = "",
  setSelectedNhom,
  selectedSanPham = "",
  setSelectedSanPham,
  selectedLocation,
  setSelectedLocation,
  selectedRating,
  setSelectedRating,
  onlyVerified,
  setOnlyVerified,
  selectedRoles,
  setSelectedRoles,
  selectedModels,
  setSelectedModels,
  selectedLocations,
  setSelectedLocations,
  onNotifyNoSuppliers
}: MobileFilterDrawerProps) => {

  const nhomCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    LIST_SUPPLIERS.forEach(s => {
      s.nhomSanPhams?.forEach(n => {
        counts[n] = (counts[n] || 0) + 1;
      });
    });
    return counts;
  }, []);

  const spCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    LIST_SUPPLIERS.forEach(s => {
      s.sanPhamCuThes?.forEach(sp => {
        counts[sp] = (counts[sp] || 0) + 1;
      });
    });
    return counts;
  }, []);

  const mainCatCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    const mainCategories = ["Nguyên vật liệu", "Nội ngoại thất", "Công trình - Dự án", "Kiểm định - Giám sát - Pháp lý", "Dịch vụ nhà ở"];
    
    mainCategories.forEach(mainCat => {
      let count = 0;
      LIST_SUPPLIERS.forEach(s => {
        let isMatch = s.categories.includes(mainCat);
        if (!isMatch && mainCat === "Nguyên vật liệu") {
          const materialTerms = ["Sắt Thép", "Xi Măng", "Gạch", "Sơn", "Chống Thấm", "Gỗ", "Nhôm", "Kính", "Nguyên Vật Liệu", "Nguyên vật liệu"];
          isMatch = s.categories.some(c => materialTerms.some(term => c.includes(term)));
        }
        if (!isMatch && mainCat === "Nội ngoại thất") {
          const interiorTerms = ["Nội Thất", "Ngoại Thất", "Vệ Sinh", "Bếp", "Đèn", "Trang Trí", "Nội ngoại thất"];
          isMatch = s.categories.some(c => interiorTerms.some(term => c.includes(term)));
        }
        if (isMatch) count++;
      });
      counts[mainCat] = count;
    });

    // Also count specific categories for legacy data
    LIST_SUPPLIERS.forEach(s => {
      s.categories?.forEach(n => {
        if (!mainCategories.includes(n)) {
          counts[n] = (counts[n] || 0) + 1;
        }
      });
    });

    return counts;
  }, []);

  const subCatCounts = useMemo(() => {
    const counts: Record<string, number> = {};

    LIST_SUPPLIERS.forEach(s => {
      // Direct subCategories match
      s.subCategories?.forEach(n => {
        counts[n] = (counts[n] || 0) + 1;
      });
      
      // Also match against categories if subCategories is missing (legacy)
      if (!s.subCategories || s.subCategories.length === 0) {
        s.categories.forEach(c => {
          MATERIALS_SUB_CATEGORIES.forEach(sub => {
            if (sub.name.includes(c) || c.includes(sub.name)) {
              counts[sub.name] = (counts[sub.name] || 0) + 1;
            }
          });
          INTERIOR_SUB_CATEGORIES.forEach(sub => {
            if (sub.name.includes(c) || c.includes(sub.name) || (c === "Nội Thất" && sub.name.includes("Nội Thất")) || (c === "Ngoại Thất" && sub.name.includes("Ngoài Trời")) || (c === "Vệ Sinh" && sub.name.includes("Vệ Sinh"))) {
              counts[sub.name] = (counts[sub.name] || 0) + 1;
            }
          });
          PROJECT_SUB_CATEGORIES.forEach(sub => {
            if (sub.name.includes(c) || c.includes(sub.name)) {
              counts[sub.name] = (counts[sub.name] || 0) + 1;
            }
          });
          LEGAL_SUPERVISION_SUB_CATEGORIES.forEach(sub => {
            if (sub.name.includes(c) || c.includes(sub.name)) {
              counts[sub.name] = (counts[sub.name] || 0) + 1;
            }
          });
          HOME_SERVICES_SUB_CATEGORIES.forEach(sub => {
            if (sub.name.includes(c) || c.includes(sub.name)) {
              counts[sub.name] = (counts[sub.name] || 0) + 1;
            }
          });
        });
      }
    });
    return counts;
  }, []);

  const toggleArrayItem = (arr: string[], setArr: (val: string[]) => void, item: string) => {
    setArr(arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item]);
  };

  const [locationSearch, setLocationSearch] = useState("");
  const filteredLocations = MOCK_FILTER_DATA.locations.filter(loc => 
    loc.toLowerCase().includes(locationSearch.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark backdrop overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-[#0f172a] z-50 pointer-events-auto backdrop-blur-sm lg:hidden"
          />

          {/* Bottom Drawer container */}
          <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
            className="fixed bottom-0 left-0 right-0 max-h-[90vh] bg-white rounded-t-[16px] border-t border-gray-200/80 shadow-none z-50 flex flex-col pointer-events-auto lg:hidden"
          >
            {/* Drag Handle Indicator */}
            <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mt-3 mb-1 shrink-0" />

            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5 shrink-0">
              <span className="font-bold text-gray-900 text-[17px] flex items-center gap-2">
                <SlidersHorizontal className="w-[18px] h-[18px] text-gray-500" strokeWidth={2.5}/>
                Bộ lọc tìm kiếm {activeFilterCount > 0 && `(${activeFilterCount})`}
              </span>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-gray-100 rounded-full text-gray-500 hover:text-gray-900 transition-colors bg-gray-50"
              >
                <X className="w-5 h-5" strokeWidth={2.5}/>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-5 py-4 pb-[100px] scroll-smooth">
              
              <AccordionItem 
                defaultOpen={true}
                title="DANH MỤC" 
              >
                <div className="flex flex-col gap-1.5 pt-1">
                  {MOCK_FILTER_DATA.subCategories.map((cat) => {
                    const isActive = selectedCategory === cat.name;
                    const catCount = mainCatCounts[cat.name] || 0;
                    return (
                      <button
                        key={cat.name}
                        onClick={() => {
                          setSelectedCategory(cat.name);
                        }}
                        className={`group w-full flex items-center justify-between px-3.5 py-2.5 rounded-[8px] text-[14px] text-left transition-all duration-300
                          ${isActive 
                            ? "bg-red-50 border border-red-100 text-[#cc1a26] font-semibold" 
                            : "bg-white border border-gray-100 text-gray-700 hover:bg-gray-50 hover:border-gray-200"
                          }
                        `}
                      >
                        <span className={`transition-transform duration-300 ${!isActive && 'group-hover:translate-x-1'}`}>{cat.name}</span>
                        <span className={`text-[12px] transition-colors duration-300 ${isActive ? "text-[#cc1a26]/80 font-medium" : "text-gray-400"}`}>
                          ({catCount})
                        </span>
                      </button>
                    );
                  })}
                </div>
              </AccordionItem>

              <AccordionItem 
                key={selectedCategory}
                defaultOpen={selectedCategory === "Nguyên vật liệu" || selectedCategory === "Nội ngoại thất"}
                title="HẠNG MỤC"
              >
                <div className="flex flex-col gap-1.5">
                  {selectedCategory === "Nguyên vật liệu" ? (
                    MATERIALS_SUB_CATEGORIES.map((ind) => {
                      const isActive = selectedSubCategory === ind.name;
                      const hasTree = true;
                      const activeTree = getMaterialTree(ind.name);

                      const subCount = subCatCounts[ind.name] || 0;
                      return (
                        <div key={ind.name} className="flex flex-col">
                          <button
                            key={ind.name}
                            onClick={() => {
                              setSelectedSubCategory?.(isActive ? "" : ind.name);
                            }}
                            className={`group w-full flex items-center justify-between px-3.5 py-2.5 rounded-[8px] text-[14px] text-left transition-all duration-300
                              ${isActive 
                                ? "bg-red-50 border border-red-100 text-[#cc1a26] font-semibold" 
                                : "bg-white border border-gray-100 text-gray-700 hover:bg-gray-50 hover:border-gray-200"
                              }
                            `}
                          >
                            <span className={`transition-transform duration-300 ${!isActive && 'group-hover:translate-x-1'}`}>{ind.name}</span>
                            <span className={`text-[12px] transition-colors duration-300 ${isActive ? "text-[#cc1a26]/80 font-medium" : "text-gray-400"}`}>
                              ({subCount})
                            </span>
                          </button>

                          {/* Nested Hierarchical Tree for Mobile */}
                          <AnimatePresence initial={false}>
                            {isActive && hasTree && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="overflow-hidden ml-4 pl-3.5 border-l-2 border-red-100 flex flex-col gap-3.5 mt-2 mb-3"
                              >
                                {activeTree.map((nhom) => {
                                  const isNhomActive = selectedNhom === nhom.name;
                                  return (
                                    <div key={nhom.name} className="flex flex-col gap-2">
                                      {/* Group Header Button */}
                                      <button
                                        onClick={() => {
                                          setSelectedNhom?.(isNhomActive ? "" : nhom.name);
                                        }}
                                        className={`flex items-center justify-between text-left text-[13px] font-medium transition-colors duration-200 w-full group/nhom
                                          ${isNhomActive 
                                            ? "text-[#cc1a26] font-semibold" 
                                            : "text-gray-700 hover:text-gray-900"
                                          }
                                        `}
                                      >
                                        <span className="flex items-center gap-1.5 transition-transform duration-200 group-hover/nhom:translate-x-0.5">
                                          <span className={`w-1.5 h-1.5 rounded-full transition-transform ${isNhomActive ? 'bg-[#cc1a26] scale-110' : 'bg-gray-300'}`} />
                                          <span className={isNhomActive ? "text-[#cc1a26]" : ""}>{nhom.name}</span>
                                        </span>
                                        <span className={`text-[11px] font-normal ${isNhomActive ? "text-[#cc1a26]/80 font-medium" : "text-gray-400"}`}>
                                           ({nhomCounts[nhom.name] || 0})
                                        </span>
                                      </button>
                                    </div>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })
                  ) : selectedCategory === "Nội ngoại thất" ? (
                    INTERIOR_SUB_CATEGORIES.map((ind) => {
                      const isActive = selectedSubCategory === ind.name;
                      const hasTree = true;
                      const activeTree = getInteriorTree(ind.name);

                      const subCount = subCatCounts[ind.name] || 0;
                      return (
                        <div key={ind.name} className="flex flex-col">
                          <button
                            key={ind.name}
                            onClick={() => {
                              setSelectedSubCategory?.(isActive ? "" : ind.name);
                            }}
                            className={`group w-full flex items-center justify-between px-3.5 py-2.5 rounded-[8px] text-[14px] text-left transition-all duration-300
                              ${isActive 
                                ? "bg-red-50 border border-red-100 text-[#cc1a26] font-semibold" 
                                : "bg-white border border-gray-100 text-gray-700 hover:bg-gray-50 hover:border-gray-200"
                              }
                            `}
                          >
                            <span className={`transition-transform duration-300 ${!isActive && 'group-hover:translate-x-1'}`}>{ind.name}</span>
                            <span className={`text-[12px] transition-colors duration-300 ${isActive ? "text-[#cc1a26]/80 font-medium" : "text-gray-400"}`}>
                              ({subCount})
                            </span>
                          </button>

                          {/* Nested Hierarchical Tree for Mobile */}
                          <AnimatePresence initial={false}>
                            {isActive && hasTree && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="overflow-hidden ml-4 pl-3.5 border-l-2 border-red-100 flex flex-col gap-3.5 mt-2 mb-3"
                              >
                                {activeTree.map((nhom) => {
                                  const isNhomActive = selectedNhom === nhom.name;
                                  return (
                                    <div key={nhom.name} className="flex flex-col gap-2">
                                      {/* Group Header Button */}
                                      <button
                                        onClick={() => {
                                          setSelectedNhom?.(isNhomActive ? "" : nhom.name);
                                        }}
                                        className={`flex items-center justify-between text-left text-[13px] font-medium transition-colors duration-200 w-full group/nhom
                                          ${isNhomActive 
                                            ? "text-[#cc1a26] font-semibold" 
                                            : "text-gray-700 hover:text-gray-900"
                                          }
                                        `}
                                      >
                                        <span className="flex items-center gap-1.5 transition-transform duration-200 group-hover/nhom:translate-x-0.5">
                                          <span className={`w-1.5 h-1.5 rounded-full transition-transform ${isNhomActive ? 'bg-[#cc1a26] scale-110' : 'bg-gray-300'}`} />
                                          <span className={isNhomActive ? "text-[#cc1a26]" : ""}>{nhom.name}</span>
                                        </span>
                                        <span className={`text-[11px] font-normal ${isNhomActive ? "text-[#cc1a26]/80 font-medium" : "text-gray-400"}`}>
                                           ({nhomCounts[nhom.name] || 0})
                                        </span>
                                      </button>
                                    </div>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })
                  ) : selectedCategory === "Công trình - Dự án" ? (
                    PROJECT_SUB_CATEGORIES.map((ind) => {
                      const isActive = selectedSubCategory === ind.name;
                      const hasTree = true;
                      const activeTree = getProjectTree(ind.name);

                      const subCount = subCatCounts[ind.name] || 0;
                      return (
                        <div key={ind.name} className="flex flex-col">
                          <button
                            key={ind.name}
                            onClick={() => {
                              setSelectedSubCategory?.(isActive ? "" : ind.name);
                            }}
                            className={`group w-full flex items-center justify-between px-3.5 py-2.5 rounded-[8px] text-[14px] text-left transition-all duration-300
                              ${isActive 
                                ? "bg-red-50 border border-red-100 text-[#cc1a26] font-semibold" 
                                : "bg-white border border-gray-100 text-gray-700 hover:bg-gray-50 hover:border-gray-200"
                              }
                            `}
                          >
                            <span className={`transition-transform duration-300 ${!isActive && 'group-hover:translate-x-1'}`}>{ind.name}</span>
                            <span className={`text-[12px] transition-colors duration-300 ${isActive ? "text-[#cc1a26]/80 font-medium" : "text-gray-400"}`}>
                              ({subCount})
                            </span>
                          </button>

                          {/* Nested Hierarchical Tree for Mobile */}
                          <AnimatePresence initial={false}>
                            {isActive && hasTree && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="overflow-hidden ml-4 pl-3.5 border-l-2 border-red-100 flex flex-col gap-3.5 mt-2 mb-3"
                              >
                                {activeTree.map((nhom) => {
                                  const isNhomActive = selectedNhom === nhom.name;
                                  return (
                                    <div key={nhom.name} className="flex flex-col gap-2">
                                      {/* Group Header Button */}
                                      <button
                                        onClick={() => {
                                          setSelectedNhom?.(isNhomActive ? "" : nhom.name);
                                        }}
                                        className={`flex items-center justify-between text-left text-[13px] font-medium transition-colors duration-200 w-full group/nhom
                                          ${isNhomActive 
                                            ? "text-[#cc1a26] font-semibold" 
                                            : "text-gray-700 hover:text-gray-900"
                                          }
                                        `}
                                      >
                                        <span className="flex items-center gap-1.5 transition-transform duration-200 group-hover/nhom:translate-x-0.5">
                                          <span className={`w-1.5 h-1.5 rounded-full transition-transform ${isNhomActive ? 'bg-[#cc1a26] scale-110' : 'bg-gray-300'}`} />
                                          <span className={isNhomActive ? "text-[#cc1a26]" : ""}>{nhom.name}</span>
                                        </span>
                                        <span className={`text-[11px] font-normal ${isNhomActive ? "text-[#cc1a26]/80 font-medium" : "text-gray-400"}`}>
                                           ({nhomCounts[nhom.name] || 0})
                                        </span>
                                      </button>
                                    </div>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })
                  ) : selectedCategory === "Kiểm định - Giám sát - Pháp lý" ? (
                    LEGAL_SUPERVISION_SUB_CATEGORIES.map((ind) => {
                      const isActive = selectedSubCategory === ind.name;
                      const hasTree = true;
                      const activeTree = getLegalTree(ind.name);

                      const subCount = subCatCounts[ind.name] || 0;
                      return (
                        <div key={ind.name} className="flex flex-col">
                          <button
                            key={ind.name}
                            onClick={() => {
                              setSelectedSubCategory?.(isActive ? "" : ind.name);
                            }}
                            className={`group w-full flex items-center justify-between px-3.5 py-2.5 rounded-[8px] text-[14px] text-left transition-all duration-300
                              ${isActive 
                                ? "bg-red-50 border border-red-100 text-[#cc1a26] font-semibold" 
                                : "bg-white border border-gray-100 text-gray-700 hover:bg-gray-50 hover:border-gray-200"
                              }
                            `}
                          >
                            <span className={`transition-transform duration-300 ${!isActive && 'group-hover:translate-x-1'}`}>{ind.name}</span>
                            <span className={`text-[12px] transition-colors duration-300 ${isActive ? "text-[#cc1a26]/80 font-medium" : "text-gray-400"}`}>
                              ({subCount})
                            </span>
                          </button>

                          {/* Nested Hierarchical Tree for Mobile */}
                          <AnimatePresence initial={false}>
                            {isActive && hasTree && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="overflow-hidden ml-4 pl-3.5 border-l-2 border-red-100 flex flex-col gap-3.5 mt-2 mb-3"
                              >
                                {activeTree.map((nhom) => {
                                  const isNhomActive = selectedNhom === nhom.name;
                                  return (
                                    <div key={nhom.name} className="flex flex-col gap-2">
                                      {/* Group Header Button */}
                                      <button
                                        onClick={() => {
                                          setSelectedNhom?.(isNhomActive ? "" : nhom.name);
                                        }}
                                        className={`flex items-center justify-between text-left text-[13px] font-medium transition-colors duration-200 w-full group/nhom
                                          ${isNhomActive 
                                            ? "text-[#cc1a26] font-semibold" 
                                            : "text-gray-700 hover:text-gray-900"
                                          }
                                        `}
                                      >
                                        <span className="flex items-center gap-1.5 transition-transform duration-200 group-hover/nhom:translate-x-0.5">
                                          <span className={`w-1.5 h-1.5 rounded-full transition-transform ${isNhomActive ? 'bg-[#cc1a26] scale-110' : 'bg-gray-300'}`} />
                                          <span className={isNhomActive ? "text-[#cc1a26]" : ""}>{nhom.name}</span>
                                        </span>
                                        <span className={`text-[11px] font-normal ${isNhomActive ? "text-[#cc1a26]/80 font-medium" : "text-gray-400"}`}>
                                           ({nhomCounts[nhom.name] || 0})
                                        </span>
                                      </button>
                                    </div>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })
                  ) : selectedCategory === "Dịch vụ nhà ở" ? (
                    HOME_SERVICES_SUB_CATEGORIES.map((ind) => {
                      const isActive = selectedSubCategory === ind.name;
                      const hasTree = true;
                      const activeTree = getHomeServicesTree(ind.name);

                      const subCount = subCatCounts[ind.name] || 0;
                      return (
                        <div key={ind.name} className="flex flex-col">
                          <button
                            key={ind.name}
                            onClick={() => {
                              setSelectedSubCategory?.(isActive ? "" : ind.name);
                            }}
                            className={`group w-full flex items-center justify-between px-3.5 py-2.5 rounded-[8px] text-[14px] text-left transition-all duration-300
                              ${isActive 
                                ? "bg-red-50 border border-red-100 text-[#cc1a26] font-semibold" 
                                : "bg-white border border-gray-100 text-gray-700 hover:bg-gray-50 hover:border-gray-200"
                              }
                            `}
                          >
                            <span className={`transition-transform duration-300 ${!isActive && 'group-hover:translate-x-1'}`}>{ind.name}</span>
                            <span className={`text-[12px] transition-colors duration-300 ${isActive ? "text-[#cc1a26]/80 font-medium" : "text-gray-400"}`}>
                              ({subCount})
                            </span>
                          </button>

                          {/* Nested Hierarchical Tree for Mobile */}
                          <AnimatePresence initial={false}>
                            {isActive && hasTree && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="overflow-hidden ml-4 pl-3.5 border-l-2 border-red-100 flex flex-col gap-3.5 mt-2 mb-3"
                              >
                                {activeTree.map((nhom) => {
                                  const isNhomActive = selectedNhom === nhom.name;
                                  return (
                                    <div key={nhom.name} className="flex flex-col gap-2">
                                      {/* Group Header Button */}
                                      <button
                                        onClick={() => {
                                          setSelectedNhom?.(isNhomActive ? "" : nhom.name);
                                        }}
                                        className={`flex items-center justify-between text-left text-[13px] font-medium transition-colors duration-200 w-full group/nhom
                                          ${isNhomActive 
                                            ? "text-[#cc1a26] font-semibold" 
                                            : "text-gray-700 hover:text-gray-900"
                                          }
                                        `}
                                      >
                                        <span className="flex items-center gap-1.5 transition-transform duration-200 group-hover/nhom:translate-x-0.5">
                                          <span className={`w-1.5 h-1.5 rounded-full transition-transform ${isNhomActive ? 'bg-[#cc1a26] scale-110' : 'bg-gray-300'}`} />
                                          <span className={isNhomActive ? "text-[#cc1a26]" : ""}>{nhom.name}</span>
                                        </span>
                                        <span className={`text-[11px] font-normal ${isNhomActive ? "text-[#cc1a26]/80 font-medium" : "text-gray-400"}`}>
                                           ({nhomCounts[nhom.name] || 0})
                                        </span>
                                      </button>
                                    </div>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })
                  ) : (
                    MOCK_FILTER_DATA.relatedIndustries.map((ind) => (
                      <button
                        key={ind.name}
                        onClick={() => {
                        }}
                        className="group w-full flex items-center justify-between px-3.5 py-2.5 rounded-[8px] text-[14px] bg-white border border-gray-100 text-gray-700 hover:bg-gray-50 hover:border-gray-200 transition-all duration-300 text-left"
                      >
                        <span className="transition-transform duration-350 group-hover:translate-x-1">{ind.name}</span>
                        <span className="text-gray-400 text-[12px] group-hover:text-gray-500 transition-colors">
                          ({ind.count})
                        </span>
                      </button>
                    ))
                  )}
                </div>
              </AccordionItem>

              
            </div>

            {/* Bottom Footer Actions */}
            <div className="border-t border-gray-100 p-5 shrink-0 flex items-center gap-4 bg-white">
              {activeFilterCount > 0 && (
                <button 
                  onClick={() => {
                    resetFilters();
                    setIsOpen(false);
                  }}
                  className="flex-[0.4] text-center py-3.5 bg-gray-50 border border-gray-200 text-gray-600 font-bold text-[14px] rounded-[10px] hover:bg-gray-100 transition-colors"
                >
                  Xoá lọc
                </button>
              )}
              <button 
                onClick={() => setIsOpen(false)}
                className="flex-1 text-center py-3.5 bg-[#cc1a26] text-white font-bold text-[14px] rounded-[10px] hover:bg-[#a8141f] transition-all"
              >
                Xem {filteredCount} kết quả
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});
MobileFilterDrawer.displayName = "MobileFilterDrawer";
