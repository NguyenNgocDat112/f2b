"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Search,
  MapPin,
  Phone,
  Mail,
  Star,
  Calendar,
  Building2,
  Filter,
  X,
  SlidersHorizontal,
  Check,
  Award,
  ShieldCheck,
  ExternalLink,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Globe,
  Network,
  Smartphone,
  Building,
  Factory,
  Briefcase,
  Users,
  Layers,
  Sprout,
  AlertCircle,
  Info,
} from "lucide-react";
import {
  LIST_SUPPLIERS,
  AVAILABLE_LOCATIONS,
  AVAILABLE_CATEGORIES,
  MOCK_FILTER_DATA,
} from "@/lib/data-suppliers";
import { SupplierCard } from "@/components/products/SupplierCard";
import FilterSidebar from "@/components/products/FilterSidebar";
import { MobileFilterDrawer } from "@/components/products/MobileFilterDrawer";

function ProductsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Filter States
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedCategory, setSelectedCategory] = useState<string>("Nguyên vật liệu");
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");
  const [selectedNhom, setSelectedNhom] = useState<string>("");
  const [selectedSanPham, setSelectedSanPham] = useState<string>("");

  const [selectedLocation, setSelectedLocation] = useState<string>("Tất cả");
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [onlyVerified, setOnlyVerified] = useState(false);

  // New Top Filter States
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  // Mobile drawer filter toggle state
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Notification Toast State
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3500);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleNotify = (message: string) => {
    setNotification(message);
  };

  // Sort State
  const [sortOption, setSortOption] = useState("Mặc định");
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Top Dropdowns State
  const [openDropdown, setOpenDropdown] = useState<
    "roles" | "models" | "locations" | "sort" | null
  >(null);
  const [modelSearch, setModelSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");

  // Sync URL query params with state when searchParams changes safely
  useEffect(() => {
    const categoryParam = searchParams?.get("category") || "Nguyên vật liệu";
    const subCategoryParam = searchParams?.get("subCategory") || "";
    const nhomParam = searchParams?.get("nhom") || "";
    const sanPhamParam = searchParams?.get("sanPham") || "";
    const queryParam = searchParams?.get("query") || "";

    const timer = setTimeout(() => {
      setSelectedCategory(categoryParam);
      setSelectedSubCategory(subCategoryParam);
      setSelectedNhom(nhomParam);
      setSelectedSanPham(sanPhamParam);
      setSearchQuery("");
      setCurrentPage(1);
    }, 0);

    return () => clearTimeout(timer);
  }, [searchParams]);

  const toggleArrayItem = (
    arr: string[],
    setArr: (val: string[]) => void,
    item: string,
  ) => {
    setArr(arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item]);
    setCurrentPage(1);
  };

  const sortOptions = [
    "Mặc định",
    "Bán chạy",
    "Mới nhất",
    "Giá thấp đến cao",
    "Giá cao đến thấp",
    "%Giảm giá nhiều",
  ];

  // Active filter count computed
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (selectedCategory !== "Nguyên vật liệu") count++;
    if (selectedSubCategory !== "") count++;
    if (selectedNhom !== "") count++;
    if (selectedSanPham !== "") count++;
    if (selectedLocation !== "Tất cả") count++;
    if (selectedRating !== null) count++;
    if (onlyVerified) count++;
    if (selectedRoles.length > 0) count += selectedRoles.length;
    if (selectedModels.length > 0) count += selectedModels.length;
    if (selectedLocations.length > 0) count += selectedLocations.length;
    if (searchQuery.trim() !== "") count++;
    return count;
  }, [
    selectedCategory,
    selectedSubCategory,
    selectedNhom,
    selectedSanPham,
    selectedLocation,
    selectedRating,
    onlyVerified,
    selectedRoles,
    selectedModels,
    selectedLocations,
    searchQuery,
  ]);

  // Handle clearing all filters
  const resetFilters = () => {
    setSelectedCategory("Nguyên vật liệu");
    setSelectedSubCategory("");
    setSelectedNhom("");
    setSelectedSanPham("");
    setSelectedLocation("Tất cả");
    setSelectedRating(null);
    setOnlyVerified(false);
    setSelectedRoles([]);
    setSelectedModels([]);
    setSelectedLocations([]);
    setCurrentPage(1);
    router.push("/products");
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setSelectedNhom("");
    setSelectedSanPham("");
    setSelectedSubCategory("");
    setCurrentPage(1);
  };

  const handleSubCategoryChange = (sub: string) => {
    setSelectedSubCategory(sub);
    setSelectedNhom("");
    setSelectedSanPham("");
    setCurrentPage(1);
  };

  const handleNhomChange = (nhom: string) => {
    setSelectedNhom(nhom);
    setSelectedSanPham("");
    setCurrentPage(1);
  };

  const handleSanPhamChange = (sp: string) => {
    setSelectedSanPham(sp);
    setCurrentPage(1);
  };

  const handleLocationChange = (loc: string) => {
    setSelectedLocation(loc);
    setCurrentPage(1);
  };

  const handleRatingChange = (rating: number | null) => {
    setSelectedRating(rating);
    setCurrentPage(1);
  };

  const handleOnlyVerifiedChange = (val: boolean) => {
    setOnlyVerified(val);
    setCurrentPage(1);
  };

  const handleRolesChange = (roles: string[]) => {
    setSelectedRoles(roles);
    setCurrentPage(1);
  };

  const handleModelsChange = (models: string[]) => {
    setSelectedModels(models);
    setCurrentPage(1);
  };

  const handleLocationsChange = (locations: string[]) => {
    setSelectedLocations(locations);
    setCurrentPage(1);
  };

  // Filtered Suppliers List
  const filteredSuppliers = useMemo(() => {
    return LIST_SUPPLIERS.filter((supplier) => {
      // 1. Search Query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesName = supplier.name.toLowerCase().includes(query);
        const matchesDesc = supplier.description.toLowerCase().includes(query);
        const matchesAddr = supplier.address.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesAddr) return false;
      }

      // 2. Category Hierarchical Filter
      if (selectedCategory) {
        // Broad categories that encompass legacy specific categories
        const isMaterialMain = selectedCategory === "Nguyên vật liệu";
        const isInteriorMain = selectedCategory === "Nội ngoại thất";
        
        // Check if supplier matches at any level of the hierarchy
        let matchesMain = supplier.categories.includes(selectedCategory);
        
        // Handle legacy mapping for "Nguyên vật liệu"
        if (!matchesMain && isMaterialMain) {
          const materialTerms = ["Sắt Thép", "Xi Măng", "Gạch", "Sơn", "Chống Thấm", "Gỗ", "Nhôm", "Kính", "Nguyên vật liệu", "Nguyên Vật Liệu"];
          matchesMain = supplier.categories.some(c => 
            materialTerms.some(term => c.includes(term))
          );
        }

        // Handle legacy mapping for "Nội ngoại thất"
        if (!matchesMain && isInteriorMain) {
          const interiorTerms = ["Nội Thất", "Ngoại Thất", "Vệ Sinh", "Bếp", "Đèn", "Trang Trí", "Nội ngoại thất"];
          matchesMain = supplier.categories.some(c => 
            interiorTerms.some(term => c.includes(term))
          );
        }

        if (!matchesMain) return false;

        // Deeper level filters (only relevant if they are selected)
        if (selectedSubCategory) {
          const matchSub = supplier.subCategories?.includes(selectedSubCategory) || 
                          supplier.categories.includes(selectedSubCategory) ||
                          supplier.categories.some(c => selectedSubCategory.includes(c) || c.includes(selectedSubCategory));
          
          if (!matchSub) return false;

          // Nested Group Category Filter
          if (selectedNhom) {
            if (!supplier.nhomSanPhams?.includes(selectedNhom)) return false;
          }
          if (selectedSanPham) {
            if (!supplier.sanPhamCuThes?.includes(selectedSanPham)) return false;
          }
        }
      }

      // 3. Location Filter (left sidebar)
      if (selectedLocation !== "Tất cả") {
        if (supplier.location !== selectedLocation) return false;
      }

      // 4. Rating Filter
      if (selectedRating !== null) {
        if (supplier.rating < selectedRating) return false;
      }

      // 5. Verified/Auth Partner
      if (onlyVerified) {
        if (!supplier.isVerified) return false;
      }

      if (selectedLocations.length > 0) {
        if (!selectedLocations.includes(supplier.location)) return false;
      }

      // 6. Roles Filter
      if (selectedRoles.length > 0) {
        const matchesRole = selectedRoles.some((role) => {
          const rLower = role.toLowerCase();
          const badgeLower = (supplier.badge || "").toLowerCase();
          const scaleLower = (supplier.productsScale || "").toLowerCase();
          const descLower = (supplier.description || "").toLowerCase();
          
          if (rLower === "nhà sản xuất") {
            return badgeLower.includes("nhà sản xuất") || scaleLower.includes("nhà sản xuất") || descLower.includes("nhà sản xuất") || scaleLower.includes("sản xuất");
          }
          if (rLower === "nhà phân phối") {
            return badgeLower.includes("nhà phân phối") || scaleLower.includes("nhà phân phối") || descLower.includes("nhà phân phối") || scaleLower.includes("phân phối");
          }
          if (rLower === "đại lý cấp 1") {
            return badgeLower.includes("đại lý cấp 1") || scaleLower.includes("đại lý cấp 1") || scaleLower.includes("đại lý ủy quyền") || badgeLower.includes("ủy quyền");
          }
          if (rLower === "đại lý bán lẻ") {
            return badgeLower.includes("bán lẻ") || scaleLower.includes("bán lẻ") || descLower.includes("bán lẻ");
          }
          if (rLower === "tổng thầu") {
            return badgeLower.includes("tổng thầu") || scaleLower.includes("tổng thầu") || descLower.includes("tổng thầu");
          }
          return badgeLower.includes(rLower) || scaleLower.includes(rLower);
        });
        if (!matchesRole) return false;
      }

      // 7. Models Filter
      if (selectedModels.length > 0) {
        const matchesModel = selectedModels.some((model) => {
          const mLower = model.toLowerCase();
          const nameLower = supplier.name.toLowerCase();
          const scaleLower = (supplier.productsScale || "").toLowerCase();
          const engLower = (supplier.englishName || "").toLowerCase();

          if (mLower === "doanh nghiệp fdi") {
            return scaleLower.includes("fdi") || scaleLower.includes("vốn nước ngoài") || scaleLower.includes("liên doanh") || scaleLower.includes("nước ngoài");
          }
          if (mLower === "công ty cổ phần") {
            return nameLower.includes("cổ phần") || nameLower.includes(" jsc") || engLower.includes("joint stock") || scaleLower.includes("cổ phần");
          }
          if (mLower === "công ty tnhh") {
            return nameLower.includes("tnhh") || nameLower.includes("trách nhiệm hữu hạn") || engLower.includes("limited") || engLower.includes("ltd") || scaleLower.includes("tnhh") || scaleLower.includes("trách nhiệm hữu hạn");
          }
          if (mLower === "tập đoàn") {
            return nameLower.includes("tập đoàn") || nameLower.includes("group") || scaleLower.includes("tập đoàn");
          }
          if (mLower === "hộ kinh doanh") {
            return nameLower.includes("hộ kinh doanh") || scaleLower.includes("hộ kinh doanh") || nameLower.includes("hộ cá thể");
          }
          return scaleLower.includes(mLower);
        });
        if (!matchesModel) return false;
      }

      return true;
    });
  }, [
    searchQuery,
    selectedCategory,
    selectedSubCategory,
    selectedNhom,
    selectedSanPham,
    selectedLocation,
    selectedRating,
    onlyVerified,
    selectedRoles,
    selectedModels,
    selectedLocations,
  ]);

  // Sorted Suppliers List
  const sortedSuppliers = useMemo(() => {
    const list = [...filteredSuppliers];
    if (sortOption === "Bán chạy") {
      return list.sort((a, b) => b.reviews - a.reviews);
    }
    if (sortOption === "Mới nhất") {
      return list.sort((a, b) => {
        const estA = typeof a.established === 'number' ? a.established : parseInt(String(a.established)) || 0;
        const estB = typeof b.established === 'number' ? b.established : parseInt(String(b.established)) || 0;
        return estB - estA;
      });
    }
    if (sortOption === "Giá thấp đến cao") {
      return list.sort((a, b) => a.rating - b.rating || a.id - b.id);
    }
    if (sortOption === "Giá cao đến thấp") {
      return list.sort((a, b) => b.rating - a.rating || b.id - a.id);
    }
    if (sortOption === "%Giảm giá nhiều") {
      return list.sort((a, b) => (b.isVerified ? 1 : 0) - (a.isVerified ? 1 : 0));
    }
    return list; // Mặc định
  }, [filteredSuppliers, sortOption]);

  // Paginated Suppliers List
  const paginatedSuppliers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedSuppliers.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedSuppliers, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(sortedSuppliers.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#fafafb] to-[#f4f5f7] min-h-screen font-sans w-full overflow-x-clip">
      <div className="pt-8  pb-20 px-4 sm:px-6 lg:px-10 max-w-[1500px] mx-auto w-full">
        {/* Main Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-5 items-start">
          {/* ================= LEFT SIDEBAR FILTER (DESKTOP) ================= */}
          <div className="hidden lg:block lg:col-span-1 sticky top-[80px] max-h-[calc(100vh-100px)] overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full pb-4">
            <FilterSidebar
              activeFilterCount={activeFilterCount}
              resetFilters={resetFilters}
              selectedCategory={selectedCategory}
              setSelectedCategory={handleCategoryChange}
              selectedSubCategory={selectedSubCategory}
              setSelectedSubCategory={handleSubCategoryChange}
              selectedNhom={selectedNhom}
              setSelectedNhom={handleNhomChange}
              selectedSanPham={selectedSanPham}
              setSelectedSanPham={handleSanPhamChange}
              selectedLocation={selectedLocation}
              setSelectedLocation={handleLocationChange}
              selectedRating={selectedRating}
              setSelectedRating={handleRatingChange}
              onlyVerified={onlyVerified}
              setOnlyVerified={handleOnlyVerifiedChange}
              selectedRoles={selectedRoles}
              setSelectedRoles={handleRolesChange}
              selectedModels={selectedModels}
              setSelectedModels={handleModelsChange}
              selectedLocations={selectedLocations}
              setSelectedLocations={handleLocationsChange}
              onNotifyNoSuppliers={handleNotify}
            />
          </div>

          {/* ================= RIGHT CONTENT AREA: HORIZONTAL RESORT CARDS ================= */}
          <section className="lg:col-span-1 min-w-0 flex flex-col">
            {/* Top Bar (Mobile filter + Both Sort) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-5 z-20">
              {/* Mobile Left */}
              <div className="lg:hidden flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900 leading-none">
                  Danh mục
                </h2>
                <button
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg shadow-none md:shadow-sm text-[14px] font-semibold text-[#cc1a26]"
                >
                  <Filter className="w-[18px] h-[18px]" />
                  Bộ lọc {activeFilterCount > 0 && `(${activeFilterCount})`}
                </button>
              </div>

              {/* Desktop Search Box */}
              <div className="hidden lg:flex flex-1 max-w-md relative group/search items-center justify-start">
                <div className="relative w-full max-w-[320px]">
                  <Search
                    className="w-[17px] h-[17px] absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/search:text-[#cc1a26] transition-colors"
                    strokeWidth={1.5}
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                    }}
                    placeholder="Tìm nhóm ngành..."
                    className="w-full h-[38px] pl-9 pr-8 bg-white border border-gray-200 rounded-[4px] text-[13.5px] focus:outline-none focus:border-[#cc1a26] focus:ring-1 focus:ring-[#cc1a26]/20 transition-all placeholder:text-gray-400"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setCurrentPage(1);
                      }}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Top Filters & Sorting Dropdowns (Split into 4 Individual Parts as requested) */}
              <div className="flex flex-wrap items-center justify-end gap-2 relative self-end sm:self-auto ml-auto z-30">
                
                {/* 2. VAI TRÒ DROPDOWN */}
                <div className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === "roles" ? null : "roles")}
                    className={`h-[38px] px-3.5 bg-white border rounded-[4px] flex items-center gap-2 group transition-all duration-150 text-[13.5px] font-medium select-none
                      ${openDropdown === "roles" 
                        ? "border-[#cc1a26] ring-2 ring-[#cc1a26]/10 bg-red-50/[0.02]" 
                        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50/40 text-gray-700"
                      }
                      ${selectedRoles.length > 0 ? "border-[#cc1a26]/30 bg-red-50/[0.04] text-[#cc1a26]" : ""}
                    `}
                  >
                    <Award className={`w-3.5 h-3.5 transition-colors ${selectedRoles.length > 0 ? "text-[#cc1a26]" : "text-gray-400 group-hover:text-gray-500"}`} />
                    <span>Vai trò</span>
                    {selectedRoles.length > 0 && (
                      <span className="bg-[#cc1a26] text-white text-[9px] font-bold font-mono px-1 rounded-full leading-none flex items-center justify-center min-w-[15px] h-3.5 shadow-[0_1px_3px_rgba(204,26,38,0.2)]">
                        {selectedRoles.length}
                      </span>
                    )}
                    <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${openDropdown === "roles" ? "rotate-180 text-gray-600" : "group-hover:text-gray-500"}`} />
                  </button>

                  <AnimatePresence>
                    {openDropdown === "roles" && (
                      <>
                        <div className="fixed inset-0 z-10" onClick={() => setOpenDropdown(null)} />
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 350, damping: 25 }}
                          className="absolute right-0 top-[calc(100%+6px)] w-[240px] bg-white rounded-[4px] shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-gray-100 py-3 z-20 origin-top-right flex flex-col"
                        >
                          <div className="px-4 py-1.5 flex items-center gap-2 mb-1.5">
                            <div className="w-[3px] h-3.5 bg-[#cc1a26] rounded-full" />
                            <span className="text-[12px] font-bold text-[#cc1a26] uppercase tracking-wider">
                              Vai trò
                            </span>
                          </div>
                          <div className="flex flex-col px-2 gap-0.5 max-h-[300px] overflow-y-auto">
                            {MOCK_FILTER_DATA.roles.map((role) => {
                              const isChecked = selectedRoles.includes(role);
                              return (
                                <button
                                  key={role}
                                  onClick={() => toggleArrayItem(selectedRoles, setSelectedRoles, role)}
                                  className={`flex items-center gap-2.5 py-2 px-3 rounded-lg hover:bg-gray-50 transition-all duration-150 text-left w-full border-none group ${isChecked ? "bg-red-50/70" : "bg-transparent"}`}
                                >
                                  <div
                                    className={`relative flex items-center justify-center w-[17px] h-[17px] border rounded-[4px] transition-all duration-200 shrink-0 ${
                                      isChecked
                                        ? "bg-[#cc1a26] border-[#cc1a26]"
                                        : "bg-white border-gray-300 group-hover:border-[#cc1a26]"
                                    }`}
                                  >
                                    <motion.div
                                      initial={false}
                                      animate={{ scale: isChecked ? 1 : 0, opacity: isChecked ? 1 : 0 }}
                                      transition={{ type: "spring", stiffness: 500, damping: 25 }}
                                    >
                                      <Check className="w-3 h-3 text-white" strokeWidth={3.5} />
                                    </motion.div>
                                  </div>
                                  <span
                                    className={`text-[13.5px] select-none transition-colors duration-150 ${
                                      isChecked
                                        ? "text-[#cc1a26] font-semibold"
                                        : "text-gray-600 group-hover:text-gray-900"
                                    }`}
                                  >
                                    {role}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>

                {/* 3. MÔ HÌNH DROPDOWN */}
                <div className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === "models" ? null : "models")}
                    className={`h-[38px] px-3.5 bg-white border rounded-[4px] flex items-center gap-2 group transition-all duration-150 text-[13.5px] font-medium select-none
                      ${openDropdown === "models" 
                        ? "border-[#cc1a26] ring-2 ring-[#cc1a26]/10 bg-red-50/[0.02]" 
                        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50/40 text-gray-700"
                      }
                      ${selectedModels.length > 0 ? "border-[#cc1a26]/30 bg-red-50/[0.04] text-[#cc1a26]" : ""}
                    `}
                  >
                    <Building className={`w-3.5 h-3.5 transition-colors ${selectedModels.length > 0 ? "text-[#cc1a26]" : "text-gray-400 group-hover:text-gray-500"}`} />
                    <span>Mô hình</span>
                    {selectedModels.length > 0 && (
                      <span className="bg-[#cc1a26] text-white text-[9px] font-bold font-mono px-1 rounded-full leading-none flex items-center justify-center min-w-[15px] h-3.5 shadow-[0_1px_3px_rgba(204,26,38,0.2)]">
                        {selectedModels.length}
                      </span>
                    )}
                    <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${openDropdown === "models" ? "rotate-180 text-gray-600" : "group-hover:text-gray-500"}`} />
                  </button>

                  <AnimatePresence>
                    {openDropdown === "models" && (
                      <>
                        <div className="fixed inset-0 z-10" onClick={() => setOpenDropdown(null)} />
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 350, damping: 25 }}
                          className="absolute right-0 top-[calc(100%+6px)] w-[240px] bg-white rounded-[4px] shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-gray-100 py-3 z-20 origin-top-right flex flex-col"
                        >
                          <div className="px-4 py-1.5 flex items-center gap-2 mb-1.5">
                            <div className="w-[3px] h-3.5 bg-[#cc1a26] rounded-full" />
                            <span className="text-[12px] font-bold text-[#cc1a26] uppercase tracking-wider">
                              Mô hình
                            </span>
                          </div>
                          <div className="flex flex-col px-2 gap-0.5 max-h-[300px] overflow-y-auto">
                            {MOCK_FILTER_DATA.models.map((model) => {
                              const isChecked = selectedModels.includes(model);
                              return (
                                <button
                                  key={model}
                                  onClick={() => toggleArrayItem(selectedModels, setSelectedModels, model)}
                                  className={`flex items-center gap-2.5 py-2 px-3 rounded-lg hover:bg-gray-50 transition-all duration-150 text-left w-full border-none group ${isChecked ? "bg-red-50/70" : "bg-transparent"}`}
                                >
                                  <div
                                    className={`relative flex items-center justify-center w-[17px] h-[17px] border rounded-[4px] transition-all duration-200 shrink-0 ${
                                      isChecked
                                        ? "bg-[#cc1a26] border-[#cc1a26]"
                                        : "bg-white border-gray-300 group-hover:border-[#cc1a26]"
                                    }`}
                                  >
                                    <motion.div
                                      initial={false}
                                      animate={{ scale: isChecked ? 1 : 0, opacity: isChecked ? 1 : 0 }}
                                      transition={{ type: "spring", stiffness: 500, damping: 25 }}
                                    >
                                      <Check className="w-3 h-3 text-white" strokeWidth={3.5} />
                                    </motion.div>
                                  </div>
                                  <span
                                    className={`text-[13.5px] select-none transition-colors duration-150 ${
                                      isChecked
                                        ? "text-[#cc1a26] font-semibold"
                                        : "text-gray-600 group-hover:text-gray-900"
                                    }`}
                                  >
                                    {model}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>

                {/* 4. KHU VỰC DROPDOWN */}
                <div className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === "locations" ? null : "locations")}
                    className={`h-[38px] px-3.5 bg-white border rounded-[4px] flex items-center gap-2 group transition-all duration-150 text-[13.5px] font-medium select-none
                      ${openDropdown === "locations" 
                        ? "border-[#cc1a26] ring-2 ring-[#cc1a26]/10 bg-red-50/[0.02]" 
                        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50/40 text-gray-700"
                      }
                      ${selectedLocations.length > 0 ? "border-[#cc1a26]/30 bg-red-50/[0.04] text-[#cc1a26]" : ""}
                    `}
                  >
                    <MapPin className={`w-3.5 h-3.5 transition-colors ${selectedLocations.length > 0 ? "text-[#cc1a26]" : "text-gray-400 group-hover:text-gray-500"}`} />
                    <span>Khu vực</span>
                    {selectedLocations.length > 0 && (
                      <span className="bg-[#cc1a26] text-white text-[9px] font-bold font-mono px-1 rounded-full leading-none flex items-center justify-center min-w-[15px] h-3.5 shadow-[0_1px_3px_rgba(204,26,38,0.2)]">
                        {selectedLocations.length}
                      </span>
                    )}
                    <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${openDropdown === "locations" ? "rotate-180 text-gray-600" : "group-hover:text-gray-500"}`} />
                  </button>

                  <AnimatePresence>
                    {openDropdown === "locations" && (
                      <>
                        <div className="fixed inset-0 z-10" onClick={() => setOpenDropdown(null)} />
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 350, damping: 25 }}
                          className="absolute right-0 top-[calc(100%+6px)] w-[260px] bg-white rounded-[4px] shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-gray-100 py-3 z-20 origin-top-right flex flex-col"
                        >
                          <div className="px-4 py-1.5 flex items-center gap-2 mb-2">
                            <div className="w-[3px] h-3.5 bg-[#cc1a26] rounded-full" />
                            <span className="text-[12px] font-bold text-[#cc1a26] uppercase tracking-wider">
                              Khu vực
                            </span>
                          </div>
                          
                          {/* Search Input for Locations */}
                          <div className="px-3 pb-2 mb-1">
                            <div className="relative">
                              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                              <input
                                type="text"
                                value={locationSearch}
                                onChange={(e) => setLocationSearch(e.target.value)}
                                placeholder="Tìm nhanh tỉnh thành..."
                                className="w-full pl-8 pr-6 py-1.5 bg-gray-50/50 border border-gray-200 rounded-[6px] text-[12.5px] focus:outline-none focus:border-[#cc1a26]/40 focus:ring-1 focus:ring-[#cc1a26]/10"
                              />
                              {locationSearch && (
                                <button
                                  onClick={() => setLocationSearch("")}
                                  className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 hover:bg-gray-200 rounded-full text-gray-400 hover:text-gray-600"
                                >
                                  <X className="w-3 h-3" />
                                </button>
                              )}
                            </div>
                          </div>

                          <div className="flex flex-col px-2 gap-0.5 max-h-[220px] overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full">
                            {MOCK_FILTER_DATA.locations
                              .filter((loc) => loc.toLowerCase().includes(locationSearch.toLowerCase()))
                              .map((location) => {
                                const isChecked = selectedLocations.includes(location);
                                return (
                                  <button
                                    key={location}
                                    onClick={() => toggleArrayItem(selectedLocations, setSelectedLocations, location)}
                                    className={`flex items-center gap-2.5 py-2 px-3 rounded-lg hover:bg-gray-50 transition-all duration-150 text-left w-full border-none group ${isChecked ? "bg-red-50/70" : "bg-transparent"}`}
                                  >
                                    <div
                                      className={`relative flex items-center justify-center w-[17px] h-[17px] border rounded-[4px] transition-all duration-200 shrink-0 ${
                                        isChecked
                                          ? "bg-[#cc1a26] border-[#cc1a26]"
                                          : "bg-white border-gray-300 group-hover:border-[#cc1a26]"
                                      }`}
                                    >
                                      <motion.div
                                        initial={false}
                                        animate={{ scale: isChecked ? 1 : 0, opacity: isChecked ? 1 : 0 }}
                                        transition={{ type: "spring", stiffness: 500, damping: 25 }}
                                      >
                                        <Check className="w-3 h-3 text-white" strokeWidth={3.5} />
                                      </motion.div>
                                    </div>
                                    <span
                                      className={`text-[13.5px] select-none transition-colors duration-150 ${
                                        isChecked
                                          ? "text-[#cc1a26] font-semibold"
                                          : "text-gray-600 group-hover:text-gray-900"
                                      }`}
                                    >
                                      {location}
                                    </span>
                                  </button>
                                );
                              })}
                            {MOCK_FILTER_DATA.locations.filter((loc) => loc.toLowerCase().includes(locationSearch.toLowerCase())).length === 0 && (
                              <div className="text-center py-4 text-xs text-gray-400 font-medium">
                                Không tìm thấy tỉnh thành
                              </div>
                            )}
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            </div>

            <div className="space-y-3">
              <AnimatePresence>
                {filteredSuppliers.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-[4px] p-12 text-center border border-gray-100 shadow-none md:shadow-sm space-y-4 max-w-xl mx-auto mt-10"
                  >
                    <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-gray-400">
                      <Search className="w-6 h-6" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-[20px] font-bold text-gray-900 font-serif">
                      Không tìm thấy nhà cung cấp nào
                    </h3>
                    <p className="text-gray-500 text-[13px] md:text-sm leading-relaxed px-4">
                      Rất tiếc, các tiêu chí lọc hiện tại của bạn không khớp với
                      nhà cung cấp nào trong kho bảo chứng của chúng tôi. Hãy
                      thử xoá bớt một số bộ lọc hoặc gõ từ khoá tìm kiếm khác
                      rộng rãi hơn.
                    </p>
                    <button
                      onClick={resetFilters}
                      className="bg-[#cc1a26] text-white hover:bg-[#a8141f] transition-all py-3 px-8 rounded-[4px] font-bold text-[13px] inline-block mt-4 shadow-none md:shadow-sm"
                    >
                      Xoá bộ lọc & tải lại danh mục
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="supplier-list-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6 min-w-0"
                  >
                    {paginatedSuppliers.map((supplier, idx) => (
                      <SupplierCard
                        key={supplier.id}
                        supplier={supplier}
                        idx={idx}
                      />
                    ))}

                    {/* Pagination Controls */}
                    {totalPages > 1 &&
                      (() => {
                        const getPages = () => {
                          const pages: (number | string)[] = [];
                          if (totalPages <= 7) {
                            for (let i = 1; i <= totalPages; i++) {
                              pages.push(i);
                            }
                          } else {
                            if (currentPage <= 4) {
                              pages.push(1, 2, 3, 4, 5, "...", totalPages);
                            } else if (currentPage >= totalPages - 3) {
                              pages.push(
                                1,
                                "...",
                                totalPages - 4,
                                totalPages - 3,
                                totalPages - 2,
                                totalPages - 1,
                                totalPages,
                              );
                            } else {
                              pages.push(
                                1,
                                "...",
                                currentPage - 1,
                                currentPage,
                                currentPage + 1,
                                "...",
                                totalPages,
                              );
                            }
                          }
                          return pages;
                        };

                        const pages = getPages();

                        return (
                          <div className="flex flex-col items-center justify-center pt-10 pb-6 w-full select-none">
                            {/* Interactive Minimalist Capsule (Beautiful Red & White Theme with 8px Border Radius) */}
                            <div className="bg-white border border-red-50/80 rounded-[4px] py-2 px-3.5 sm:px-5 w-auto flex items-center gap-3 shadow-none md:shadow-[0_4px_20px_rgba(204,26,38,0.03)] md:hover:shadow-[0_6px_24px_rgba(204,26,38,0.06)] transition-all duration-300">
                              {/* Previous Arrow Button */}
                              <button
                                onClick={() =>
                                  handlePageChange(currentPage - 1)
                                }
                                disabled={currentPage === 1}
                                className="flex items-center justify-center w-8 h-8 rounded-[4px] text-[#cc1a26]/75 hover:text-[#cc1a26] hover:bg-red-50/50 disabled:opacity-20 disabled:pointer-events-none transition-all duration-200 cursor-pointer group"
                                aria-label="Trang trước"
                              >
                                <ChevronLeft className="w-4 h-4 text-current group-hover:-translate-x-0.5 transition-transform" />
                              </button>

                              {/* Page Numbers */}
                              <div className="flex items-center gap-1 sm:gap-1.5 justify-center">
                                {pages.map((page, index) => {
                                  if (page === "...") {
                                    return (
                                      <span
                                        key={`ellipsis-${index}`}
                                        className="text-red-200 font-semibold px-1 select-none text-[14.5px] tracking-wider"
                                      >
                                        ...
                                      </span>
                                    );
                                  }

                                  const pageNum = page as number;
                                  const isCurrent = pageNum === currentPage;

                                  return (
                                    <button
                                      key={pageNum}
                                      onClick={() => handlePageChange(pageNum)}
                                      className={`w-8.5 h-8.5 rounded-[4px] font-bold text-[14px] transition-all duration-200 flex items-center justify-center cursor-pointer focus:outline-none
                                  ${
                                    isCurrent
                                      ? "bg-[#cc1a26] text-white shadow-none md:shadow-[0_3px_10px_rgba(204,26,38,0.25)] scale-102"
                                      : "text-zinc-600 hover:text-[#cc1a26] bg-transparent hover:bg-red-50/40"
                                  }
                                `}
                                    >
                                      {pageNum}
                                    </button>
                                  );
                                })}
                              </div>

                              {/* Next Arrow Button */}
                              <button
                                onClick={() =>
                                  handlePageChange(currentPage + 1)
                                }
                                disabled={currentPage === totalPages}
                                className="flex items-center justify-center w-8 h-8 rounded-[4px] text-[#cc1a26]/75 hover:text-[#cc1a26] hover:bg-red-50/50 disabled:opacity-20 disabled:pointer-events-none transition-all duration-200 cursor-pointer group"
                                aria-label="Trang sau"
                              >
                                <ChevronRight className="w-4 h-4 text-current group-hover:translate-x-0.5 transition-transform" />
                              </button>
                            </div>
                          </div>
                        );
                      })()}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>
        </div>

        {/* ================= MOBILE BOTTOM SHEET FILTER DRAWER ================= */}
        <MobileFilterDrawer
          isOpen={isMobileFilterOpen}
          setIsOpen={setIsMobileFilterOpen}
          activeFilterCount={activeFilterCount}
          filteredCount={filteredSuppliers.length}
          resetFilters={resetFilters}
          selectedCategory={selectedCategory}
          setSelectedCategory={handleCategoryChange}
          selectedSubCategory={selectedSubCategory}
          setSelectedSubCategory={handleSubCategoryChange}
          selectedNhom={selectedNhom}
          setSelectedNhom={handleNhomChange}
          selectedSanPham={selectedSanPham}
          setSelectedSanPham={handleSanPhamChange}
          selectedLocation={selectedLocation}
          setSelectedLocation={handleLocationChange}
          selectedRating={selectedRating}
          setSelectedRating={handleRatingChange}
          onlyVerified={onlyVerified}
          setOnlyVerified={handleOnlyVerifiedChange}
          selectedRoles={selectedRoles}
          setSelectedRoles={handleRolesChange}
          selectedModels={selectedModels}
          setSelectedModels={handleModelsChange}
          selectedLocations={selectedLocations}
          setSelectedLocations={handleLocationsChange}
          onNotifyNoSuppliers={handleNotify}
        />

        {/* Global Notification Toast */}
        <AnimatePresence>
          {notification && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-md"
            >
              <div className="bg-[#1a1c1e] text-white p-4 rounded-xl shadow-2xl flex items-center gap-3 border border-white/10 backdrop-blur-md">
                <div className="bg-amber-500/20 p-2 rounded-full">
                  <Info className="w-5 h-5 text-amber-500" />
                </div>
                <p className="text-[14px] font-medium leading-tight">
                  {notification}
                </p>
                <button 
                  onClick={() => setNotification(null)}
                  className="ml-auto p-1 hover:bg-white/10 rounded-lg transition-colors cursor-pointer border-none"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="bg-gradient-to-br from-[#fafafb] to-[#f4f5f7] min-h-screen font-sans w-full flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#cc1a26]"></div>
            <p className="text-gray-500 font-medium font-sans text-sm">
              Đang tải danh sách nhà cung cấp...
            </p>
          </div>
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
