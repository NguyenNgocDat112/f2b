'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  Search, 
  Filter, 
  X,
  Layers,
  MapPin,
  Building2,
  Package,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
  Award,
  ShieldCheck,
  Factory
} from 'lucide-react';
import { 
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

interface FilterSidebarProps {
  activeFilterCount: number;
  resetFilters: () => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedSubCategory: string;
  setSelectedSubCategory: (sub: string) => void;
  selectedNhom: string;
  setSelectedNhom: (nhom: string) => void;
  selectedSanPham: string;
  setSelectedSanPham: (sp: string) => void;
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
  setSelectedLocations: (locs: string[]) => void;
  onNotifyNoSuppliers: (message: string) => void;
}

export default function FilterSidebar({ 
  activeFilterCount,
  resetFilters,
  selectedCategory, 
  setSelectedCategory,
  selectedSubCategory,
  setSelectedSubCategory,
  selectedNhom,
  setSelectedNhom,
  selectedSanPham,
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
}: FilterSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isHovered, setIsHovered] = useState<string | null>(null);

  // Categories with their supplier counts (mocked or calculated)
  const categories = [
    { name: "Nguyên vật liệu", count: 245, icon: Building2 },
    { name: "Nội ngoại thất", count: 112, icon: Award },
    { name: "Công trình - Dự án", count: 89, icon: Factory },
    { name: "Kiểm định - Giám sát - Pháp lý", count: 56, icon: ShieldCheck },
    { name: "Dịch vụ nhà ở", count: 34, icon: Package },
  ];

  // Calculate counts for subcategories and groups based on LIST_SUPPLIERS
  const { subCounts, nhomCounts, spCounts } = React.useMemo(() => {
    const subs: Record<string, number> = {};
    const nhoms: Record<string, number> = {};
    const sps: Record<string, number> = {};

    LIST_SUPPLIERS.forEach(s => {
      s.subCategories?.forEach(sub => {
        subs[sub] = (subs[sub] || 0) + 1;
      });

      // If subCategories is empty/missing, map from categories
      if (!s.subCategories || s.subCategories.length === 0) {
        s.categories.forEach(c => {
          MATERIALS_SUB_CATEGORIES.forEach(sub => {
            if (sub.name.includes(c) || c.includes(sub.name)) {
              subs[sub.name] = (subs[sub.name] || 0) + 1;
            }
          });
          INTERIOR_SUB_CATEGORIES.forEach(sub => {
            if (sub.name.includes(c) || c.includes(sub.name) || (c === "Nội Thất" && sub.name.includes("Nội Thất")) || (c === "Ngoại Thất" && sub.name.includes("Ngoài Trời")) || (c === "Vệ Sinh" && sub.name.includes("Vệ Sinh"))) {
              subs[sub.name] = (subs[sub.name] || 0) + 1;
            }
          });
          PROJECT_SUB_CATEGORIES.forEach(sub => {
            if (sub.name.includes(c) || c.includes(sub.name)) {
              subs[sub.name] = (subs[sub.name] || 0) + 1;
            }
          });
          LEGAL_SUPERVISION_SUB_CATEGORIES.forEach(sub => {
            if (sub.name.includes(c) || c.includes(sub.name)) {
              subs[sub.name] = (subs[sub.name] || 0) + 1;
            }
          });
          HOME_SERVICES_SUB_CATEGORIES.forEach(sub => {
            if (sub.name.includes(c) || c.includes(sub.name)) {
              subs[sub.name] = (subs[sub.name] || 0) + 1;
            }
          });
        });
      }

      s.nhomSanPhams?.forEach(nhom => {
        nhoms[nhom] = (nhoms[nhom] || 0) + 1;
      });
      s.sanPhamCuThes?.forEach(sp => {
        sps[sp] = (sps[sp] || 0) + 1;
      });
    });

    return { subCounts: subs, nhomCounts: nhoms, spCounts: sps };
  }, []);

  return (
    <div className="w-full h-full flex flex-col bg-white border-r border-gray-100 overflow-hidden">


      <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-6">
        {/* Main Categories */}
        <section>
          <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3 px-3">Danh Mục</h3>
          <div className="space-y-1">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.name;
              const count = cat.count;

              return (
                <button
                  key={cat.name}
                  onClick={() => {
                    setSelectedCategory(cat.name);
                  }}
                  className={`group relative w-full flex items-center justify-between px-3 py-2.5 rounded-[8px] text-[13px] text-left transition-all duration-300
                    ${isActive 
                      ? "bg-[#cc1a26]/5 text-[#cc1a26] font-semibold" 
                      : "text-gray-600 hover:bg-gray-50/80 hover:text-gray-900"
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <span>{cat.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] font-medium transition-colors ${isActive ? 'text-[#cc1a26]' : 'text-gray-400'}`}>
                      {count}
                    </span>
                    {isActive && (
                      <motion.div layoutId="active-indicator" className="absolute left-0 w-1 h-5 bg-[#cc1a26] rounded-r-full" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Dynamic Content Based on Category */}
        <AnimatePresence mode="wait">
          {selectedCategory === "Nguyên vật liệu" && (
            <motion.section
              key="materials-section"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest px-3">Hạng Mục</h3>
              <div className="space-y-2 px-1">
                {MATERIALS_SUB_CATEGORIES.map((ind) => {
                  const isActive = selectedSubCategory === ind.name;
                  const hasTree = true;
                  const activeTree = getMaterialTree(ind.name);

                  const subCount = subCounts[ind.name] || 0;

                  return (
                    <div key={ind.name} className="flex flex-col">
                      <button
                        onClick={() => {
                          setSelectedSubCategory?.(isActive ? "" : ind.name);
                        }}
                        className={`group relative w-full flex items-center justify-between px-3 py-2 rounded-[8px] text-[13px] text-left transition-all duration-300
                          ${isActive 
                            ? "text-[#cc1a26] font-semibold" 
                            : "text-gray-600 hover:bg-gray-50/80 hover:text-gray-900"
                          }
                        `}
                      >
                        <div className="flex items-center gap-2">
                          <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive ? 'rotate-90 text-[#cc1a26]' : 'text-gray-300 group-hover:text-gray-400'}`} />
                          <span>{ind.name}</span>
                        </div>
                        <span className={`text-[11px] transition-colors ${isActive ? 'text-[#cc1a26]' : 'text-gray-400'}`}>
                          ({subCount})
                        </span>
                      </button>

                      <AnimatePresence>
                        {isActive && hasTree && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-7 space-y-3 mt-1 pb-2"
                          >
                            {activeTree.map((nhom: any) => {
                              const isNhomActive = selectedNhom === nhom.name;
                              return (
                                <div key={nhom.name} className="flex flex-col gap-1.5">
                                   {/* Group Header Button */}
                                   <button
                                     onClick={() => {
                                       setSelectedNhom?.(isNhomActive ? "" : nhom.name);
                                     }}
                                     className={`flex items-center justify-between text-left text-[12.5px] font-medium transition-colors duration-200 w-full group/nhom
                                       ${isNhomActive 
                                         ? "text-[#cc1a26] font-semibold" 
                                         : "text-gray-700 hover:text-gray-900"
                                       }
                                     `}
                                   >
                                     <span className="flex items-center gap-1.5 transition-transform duration-200 group-hover/nhom:translate-x-0.5">
                                       <span className={`w-1.5 h-1.5 rounded-full transition-transform ${isNhomActive ? 'bg-[#cc1a26] scale-125 shadow-[0_0_5px_rgba(204,26,38,0.5)]' : 'bg-gray-300'}`} />
                                       <span className={isNhomActive ? "text-[#cc1a26]" : ""}>{nhom.name}</span>
                                     </span>
                                     <span className={`text-[11px] font-normal ${isNhomActive ? "text-[#cc1a26]/80 font-medium" : "text-gray-400"}`}>
                                       ({nhomCounts[nhom.name] || 0})
                                     </span>
                                   </button>
                                   {/* Products list removed */}
                                 </div>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.section>
          )}

          {selectedCategory === "Nội ngoại thất" && (
            <motion.section
              key="interior-section"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest px-3">Hạng Mục</h3>
              <div className="space-y-2 px-1">
                {INTERIOR_SUB_CATEGORIES.map((ind) => {
                  const isActive = selectedSubCategory === ind.name;
                  const hasTree = true;
                  const activeTree = getInteriorTree(ind.name);

                  const subCount = subCounts[ind.name] || 0;

                  return (
                    <div key={ind.name} className="flex flex-col">
                      <button
                        onClick={() => {
                          setSelectedSubCategory?.(isActive ? "" : ind.name);
                        }}
                        className={`group relative w-full flex items-center justify-between px-3 py-2 rounded-[8px] text-[13px] text-left transition-all duration-300
                          ${isActive 
                            ? "text-[#cc1a26] font-semibold" 
                            : "text-gray-600 hover:bg-gray-50/80 hover:text-gray-900"
                          }
                        `}
                      >
                        <div className="flex items-center gap-2">
                          <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive ? 'rotate-90 text-[#cc1a26]' : 'text-gray-300 group-hover:text-gray-400'}`} />
                          <span>{ind.name}</span>
                        </div>
                        <span className={`text-[11px] transition-colors ${isActive ? 'text-[#cc1a26]' : 'text-gray-400'}`}>
                          ({subCount})
                        </span>
                      </button>

                      <AnimatePresence>
                        {isActive && hasTree && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-7 space-y-3 mt-1 pb-2"
                          >
                            {activeTree.map((nhom: any) => {
                              const isNhomActive = selectedNhom === nhom.name;
                              return (
                                <div key={nhom.name} className="flex flex-col gap-1.5">
                                   {/* Group Header Button */}
                                   <button
                                     onClick={() => {
                                       setSelectedNhom?.(isNhomActive ? "" : nhom.name);
                                     }}
                                     className={`flex items-center justify-between text-left text-[12.5px] font-medium transition-colors duration-200 w-full group/nhom
                                       ${isNhomActive 
                                         ? "text-[#cc1a26] font-semibold" 
                                         : "text-gray-700 hover:text-gray-900"
                                       }
                                     `}
                                   >
                                     <span className="flex items-center gap-1.5 transition-transform duration-200 group-hover/nhom:translate-x-0.5">
                                       <span className={`w-1.5 h-1.5 rounded-full transition-transform ${isNhomActive ? 'bg-[#cc1a26] scale-125 shadow-[0_0_5px_rgba(204,26,38,0.5)]' : 'bg-gray-300'}`} />
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
                })}
              </div>
            </motion.section>
          )}

          {selectedCategory === "Công trình - Dự án" && (
            <motion.section
              key="project-section"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest px-3">Hạng Mục</h3>
              <div className="space-y-2 px-1">
                {PROJECT_SUB_CATEGORIES.map((ind) => {
                  const isActive = selectedSubCategory === ind.name;
                  const hasTree = true;
                  const activeTree = getProjectTree(ind.name);

                  const subCount = subCounts[ind.name] || 0;

                  return (
                    <div key={ind.name} className="flex flex-col">
                      <button
                        onClick={() => {
                          setSelectedSubCategory?.(isActive ? "" : ind.name);
                        }}
                        className={`group relative w-full flex items-center justify-between px-3 py-2 rounded-[8px] text-[13px] text-left transition-all duration-300
                          ${isActive 
                            ? "text-[#cc1a26] font-semibold" 
                            : "text-gray-600 hover:bg-gray-50/80 hover:text-gray-900"
                          }
                        `}
                      >
                        <div className="flex items-center gap-2">
                          <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive ? 'rotate-90 text-[#cc1a26]' : 'text-gray-300 group-hover:text-gray-400'}`} />
                          <span>{ind.name}</span>
                        </div>
                        <span className={`text-[11px] transition-colors ${isActive ? 'text-[#cc1a26]' : 'text-gray-400'}`}>
                          ({subCount})
                        </span>
                      </button>

                      <AnimatePresence>
                        {isActive && hasTree && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-7 space-y-3 mt-1 pb-2"
                          >
                            {activeTree.map((nhom: any) => {
                              const isNhomActive = selectedNhom === nhom.name;
                              return (
                                <div key={nhom.name} className="flex flex-col gap-1.5">
                                   {/* Group Header Button */}
                                   <button
                                     onClick={() => {
                                       setSelectedNhom?.(isNhomActive ? "" : nhom.name);
                                     }}
                                     className={`flex items-center justify-between text-left text-[12.5px] font-medium transition-colors duration-200 w-full group/nhom
                                       ${isNhomActive 
                                         ? "text-[#cc1a26] font-semibold" 
                                         : "text-gray-700 hover:text-gray-900"
                                       }
                                     `}
                                   >
                                     <span className="flex items-center gap-1.5 transition-transform duration-200 group-hover/nhom:translate-x-0.5">
                                       <span className={`w-1.5 h-1.5 rounded-full transition-transform ${isNhomActive ? 'bg-[#cc1a26] scale-125 shadow-[0_0_5px_rgba(204,26,38,0.5)]' : 'bg-gray-300'}`} />
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
                })}
              </div>
            </motion.section>
          )}

          {selectedCategory === "Kiểm định - Giám sát - Pháp lý" && (
            <motion.section
              key="legal-section"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest px-3">Hạng Mục</h3>
              <div className="space-y-2 px-1">
                {LEGAL_SUPERVISION_SUB_CATEGORIES.map((ind) => {
                  const isActive = selectedSubCategory === ind.name;
                  const hasTree = true;
                  const activeTree = getLegalTree(ind.name);

                  const subCount = subCounts[ind.name] || 0;

                  return (
                    <div key={ind.name} className="flex flex-col">
                      <button
                        onClick={() => {
                          setSelectedSubCategory?.(isActive ? "" : ind.name);
                        }}
                        className={`group relative w-full flex items-center justify-between px-3 py-2 rounded-[8px] text-[13px] text-left transition-all duration-300
                          ${isActive 
                            ? "text-[#cc1a26] font-semibold" 
                            : "text-gray-600 hover:bg-gray-50/80 hover:text-gray-900"
                          }
                        `}
                      >
                        <div className="flex items-center gap-2">
                          <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive ? 'rotate-90 text-[#cc1a26]' : 'text-gray-300 group-hover:text-gray-400'}`} />
                          <span>{ind.name}</span>
                        </div>
                        <span className={`text-[11px] transition-colors ${isActive ? 'text-[#cc1a26]' : 'text-gray-400'}`}>
                          ({subCount})
                        </span>
                      </button>

                      <AnimatePresence>
                        {isActive && hasTree && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-7 space-y-3 mt-1 pb-2"
                          >
                            {activeTree.map((nhom: any) => {
                              const isNhomActive = selectedNhom === nhom.name;
                              return (
                                <div key={nhom.name} className="flex flex-col gap-1.5">
                                   {/* Group Header Button */}
                                   <button
                                     onClick={() => {
                                       setSelectedNhom?.(isNhomActive ? "" : nhom.name);
                                     }}
                                     className={`flex items-center justify-between text-left text-[12.5px] font-medium transition-colors duration-200 w-full group/nhom
                                       ${isNhomActive 
                                         ? "text-[#cc1a26] font-semibold" 
                                         : "text-gray-700 hover:text-gray-900"
                                       }
                                     `}
                                   >
                                     <span className="flex items-center gap-1.5 transition-transform duration-200 group-hover/nhom:translate-x-0.5">
                                       <span className={`w-1.5 h-1.5 rounded-full transition-transform ${isNhomActive ? 'bg-[#cc1a26] scale-125 shadow-[0_0_5px_rgba(204,26,38,0.5)]' : 'bg-gray-300'}`} />
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
                })}
              </div>
            </motion.section>
          )}

          {selectedCategory === "Dịch vụ nhà ở" && (
            <motion.section
              key="home-services-section"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest px-3">Hạng Mục</h3>
              <div className="space-y-2 px-1">
                {HOME_SERVICES_SUB_CATEGORIES.map((ind) => {
                  const isActive = selectedSubCategory === ind.name;
                  const hasTree = true;
                  const activeTree = getHomeServicesTree(ind.name);

                  const subCount = subCounts[ind.name] || 0;

                  return (
                    <div key={ind.name} className="flex flex-col">
                      <button
                        onClick={() => {
                          setSelectedSubCategory?.(isActive ? "" : ind.name);
                        }}
                        className={`group relative w-full flex items-center justify-between px-3 py-2 rounded-[8px] text-[13px] text-left transition-all duration-300
                          ${isActive 
                            ? "text-[#cc1a26] font-semibold" 
                            : "text-gray-600 hover:bg-gray-50/80 hover:text-gray-900"
                          }
                        `}
                      >
                        <div className="flex items-center gap-2">
                          <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive ? 'rotate-90 text-[#cc1a26]' : 'text-gray-300 group-hover:text-gray-400'}`} />
                          <span>{ind.name}</span>
                        </div>
                        <span className={`text-[11px] transition-colors ${isActive ? 'text-[#cc1a26]' : 'text-gray-400'}`}>
                          ({subCount})
                        </span>
                      </button>

                      <AnimatePresence>
                        {isActive && hasTree && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-7 space-y-3 mt-1 pb-2"
                          >
                            {activeTree.map((nhom: any) => {
                              const isNhomActive = selectedNhom === nhom.name;
                              return (
                                <div key={nhom.name} className="flex flex-col gap-1.5">
                                   {/* Group Header Button */}
                                   <button
                                     onClick={() => {
                                       setSelectedNhom?.(isNhomActive ? "" : nhom.name);
                                     }}
                                     className={`flex items-center justify-between text-left text-[12.5px] font-medium transition-colors duration-200 w-full group/nhom
                                       ${isNhomActive 
                                         ? "text-[#cc1a26] font-semibold" 
                                         : "text-gray-700 hover:text-gray-900"
                                       }
                                     `}
                                   >
                                     <span className="flex items-center gap-1.5 transition-transform duration-200 group-hover/nhom:translate-x-0.5">
                                       <span className={`w-1.5 h-1.5 rounded-full transition-transform ${isNhomActive ? 'bg-[#cc1a26] scale-125 shadow-[0_0_5px_rgba(204,26,38,0.5)]' : 'bg-gray-300'}`} />
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
                })}
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>


    </div>
  );
}
