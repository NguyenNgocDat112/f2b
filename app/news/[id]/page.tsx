"use client";

import { useParams } from "next/navigation";
import { featuredNews, recentNews, allNews } from "@/lib/data-news";
import { analysisNews } from "@/lib/data-analysis";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Image from "next/image";
import { ChevronLeft, ThumbsUp, Heart, Star, Smile, Meh, HelpCircle, Flag } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";
import { useRef, useState, useEffect } from "react";

// Google Fonts configuration for the magazine style
import { Playfair_Display, Caveat } from 'next/font/google';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const MOCK_CONTENT = `
Là một trong những lĩnh vực phát triển nhanh nhất hiện nay, thương mại điện tử đồng thời cũng là môi trường khốc liệt nhất. Bạn đang chạy theo những nền tảng, hay nền tảng đang phục vụ bạn? Hàng ngày, hàng giờ, hàng ngàn nhà bán lẻ đổ hàng chục, thậm chí hàng trăm triệu đồng vào các chiến dịch quảng cáo. Họ tham gia đủ mọi chương trình khuyến mãi, chạy theo những xu hướng mới nhất, từ Flash Sale, Mega Sale cho đến livestream thâu đêm suốt sáng. Nhưng cuối cùng, khi nhìn lại bảng cân đối kế toán, biên lợi nhuận vẫn mỏng như lá lúa, thậm chí là những con số âm đỏ chót. Vấn đề thực sự nằm ở đâu trong chuỗi vận hành khổng lồ này?

*Thực tế phũ phàng chỉ ra rằng, sự tăng trưởng doanh số bề mặt trên các nền tảng e-commerce không bao giờ là thước đo duy nhất cho sự thành công. Nó không chỉ phụ thuộc vào việc bạn xả bao nhiêu ngân sách cho Performance Marketing, mà nằm sâu ở khả năng tối ưu hóa trên mọi điểm chạm của hành trình khách hàng. Một hệ thống vận hành đằng sau sân khấu trơn tru, một chuỗi cung ứng vững chắc sẽ là bệ phóng hoàn hảo và bền vững nhất cho bất kỳ chiến dịch mở rộng quy mô nào, dù là bão tố hay bình lặng.*

## Điểm chạm của sự thay đổi: Thoát khỏi cái bẫy giảm giá

Nhà bán hàng thường rơi vào một vòng lặp tử thần mang tên 'Cuộc đua giá đáy' và 'Flash Sale' vô tận. Ban đầu, việc cắt giảm giá trị mang lại một lượng đơn hàng khổng lồ, cảm giác đê mê của những tiếng "ting ting" nổ đơn liên tục rất dễ gây nghiện. Nhưng sau một thời gian, bạn vô tình đào tạo tập khách hàng của mình một thói quen xấu: Họ chỉ chờ có mã giảm giá mới quyết định xuống tiền. Bạn có thể đánh chiếm được vị trí Top hiển thị, bóp nghẹt đối thủ về số lượng bán ra, nhưng cái giá phải trả là sự bốc hơi của biên lợi nhuận. Sự cạnh tranh thuần túy về giá luôn là một lưỡi dao hai chiều sắc lẹm, và nếu không cẩn thận, nó sẽ cắt đứt mạch máu tài chính của doanh nghiệp bạn trước khi bạn kịp nhận ra.

Thay vì chỉ tập trung lao đầu vào cuộc chiến những sản phẩm giá rẻ mạt, hãy dành thời gian tĩnh lặng để cấu trúc lại toàn bộ danh mục sản phẩm của mình. Khái niệm "Phân tầng sản phẩm" (Product Architecture) cần được áp dụng triệt để. Hãy tập trung thiết kế nhóm combo sản phẩm chéo để gia tăng tối đa AOV (Giá trị trung bình trên một đơn hàng). Các sản phẩm mồi (Traffic Product) là những thỏi nam châm hút khách, có thể cho phép lỗ nhẹ trên giấy tờ, nhưng chúng phải được gắn kết khéo léo để kéo theo sự tiêu thụ của các sản phẩm cốt lõi mang lại lợi nhuận cao (Profit Product). 

> "Hãy nhìn e-commerce như một phễu lọc tinh vi để thu hút và giữ chân tệp khách hàng giá trị, đừng biến nó thành một khu chợ trời chỉ để xả mớ hàng tồn kho xập xệ."

Bằng cách tái thiết kế lại phổ giá sản phẩm và hành trình khám phá của người mua, tỷ lệ chuyển đổi tự nhiên có thể tăng vọt một cách đáng kinh ngạc mà không cần phải bơm thêm dù chỉ một đồng vào chi phí quảng cáo. Chìa khóa vàng ở đây nằm ở việc *thấu hiểu sâu sắc hành vi* con người, chứ không phải là sự *ép buộc hành vi* bằng những con số giảm giá ảo.

## Tư duy kiến tạo hệ thống: Vận hành là hơi thở

Nhiều founder mang nặng tư duy "Sales & Marketing", vung tiền mua traffic và lầm tưởng rằng marketing là thanh gươm báu giải quyết mọi vấn đề trên sàn thương mại điện tử. Nhưng sự thật, nếu một đơn hàng được giao chậm trễ, quy trình đóng gói cẩu thả đến mức hộp móp méo, thái độ chăm sóc khách hàng thờ ơ, thì chỉ cần một vài đánh giá 1 sao tàn nhẫn cũng đủ sức giết chết "đứa con" sản phẩm của bạn trước cả khi thuật toán AI kịp phân phối nó đến người dùng tiếp theo. 

Việc rà soát và áp dụng công nghệ chuyển đổi số vào quy trình đóng gói, xuất nhập kho có thể chặn đứng những rò rỉ chi phí ẩn, giảm thiểu tỷ lệ sai sót thủ công lên đến 80%. 

*Sự tinh tế và định vị thương hiệu đôi khi không nằm ở những banner quảng cáo hào nhoáng, mà cấu thành từ sự hoàn hảo trong từng chi tiết nhỏ nhặt nhất. Từ lớp bọc chống sốc được nâng niu, cho đến lá thư tay cảm ơn viết vội nhưng chân thành đặt bên trong hộp.*

Kỷ luật vận hành yêu cầu bạn phải ám ảnh với những chỉ số đo lường hiệu suất (KPI) khắt khe nhất:

*   Tỷ lệ chuẩn bị hàng và giao cho đơn vị vận chuyển đúng hạn: Tuyệt đối > 95%
*   Thời gian phản hồi tin nhắn khách hàng (Chat Response Time): Luôn < 15 phút, kể cả ngoài giờ hành chính.
*   Tỷ lệ đánh giá mức độ hài lòng: Duy trì ở mức > 4.9/5.0
*   Tỷ lệ hoàn hàng (Return Rate): Kiểm soát chặt chẽ ở mức < 2%

Đừng bao giờ ngần ngại hay xem nhẹ việc đầu tư vào một hệ thống ERP (Enterprise Resource Planning) hiện đại hoặc các phần mềm quản trị kho bãi (WMS) chuyên dụng ngay từ những ngày đầu. Hãy nhớ, nó không phải là khoản chi phí hao mòn, mà là khoản đầu tư chiến lược cho sự mở rộng quy mô (scale-up) dài hạn không giới hạn. Một hệ thống như một 'bộ não' vận hành trơn tru, sắc bén sẽ giúp đội ngũ của bạn trụ vững và giữ vững phong độ ngay cả trong những đợt bão MEGA Sale khốc liệt nhất của năm, khi khối lượng công việc có thể tăng gấp 20 lần bình thường.

## Kỷ nguyên của thị giác: Kể chuyện qua từng thước phim

Trực quan hóa sản phẩm đã bước sang một trang mới. Ngày nay, những bức ảnh nền trắng phẳng lì không còn đủ sức giữ chân người tiêu dùng lướt qua màn hình điện thoại với tốc độ ánh sáng.

> "Trong kỷ nguyên bùng nổ của Shoppertainment (Mua sắm kết hợp giải trí), sản phẩm tốt thôi chưa bao giờ là đủ, bạn phải biết cách 'trình diễn' sản phẩm đó để đánh thức mọi giác quan và tạo ra cảm xúc mãnh liệt cho người xem."

Thuật toán phân phối nội dung của các nền tảng thương mại điện tử lớn đang nghiêng hẳn trọng số về phía nội dung video ngắn và các phiên phát sóng trực tiếp (livestream). Đã qua rồi cái thời kỳ hoàng kim của việc chỉ cần nạp tiền, thiết lập chiến dịch từ khóa (keyword ads) vô hồn là có thể ung dung rung đùi chờ đơn hàng nổ. Cơn sóng Shopee Video hay TikTok Shop không chỉ đơn thuần là một kênh bán hàng hay phân phối mới, mà nó đã trở thành công cụ định hình nhận diện thương hiệu mạnh mẽ, trực quan và quyền lực nhất hiện tại.

Để chiến thắng trên mặt trận truyền thông này, hãy thiết lập dàn ý và kịch bản livestream một cách cực kỳ bài bản như sản xuất một chương trình truyền hình thu nhỏ. Đừng tiếc tiền đầu tư trang thiết bị thu âm chuyên nghiệp, hệ thống ánh sáng tôn da, và đặc biệt quan trọng nhất: Khả năng tương tác chân thật, dí dỏm và đầy tính người với khán giả. Yếu tố "con người" (Human Touch) sẽ tạo nên một sợi dây kết nối vô hình nhưng cực kỳ sâu sắc mà không một hình ảnh render 3D tĩnh lặng hay đoạn văn bản copywriting trau chuốt nào có thể thay thế được. Năng lượng, sự tự tin và cái duyên của người Host trong phiên livestream ảnh hưởng trực tiếp và nhãn tiền đến tốc độ chốt đơn của người xem.

## Vòng lặp vĩnh cửu: Xây dựng di sản và cộng đồng

Sự thật của ngành bán lẻ: Việc thuyết phục một khách hàng mua sản phẩm lần đầu tiên có thể là kết quả của một chiến dịch quảng cáo đắt tiền trúng đích. Nhưng để họ quay lại mở hầu bao lần thứ hai, lần thứ ba, và thậm chí trở thành 'đại sứ thương hiệu' miễn phí cho bạn, thì toàn bộ điều đó hoàn toàn phụ thuộc vào trải nghiệm sau bán hàng (Post-purchase experience). 

Chiến lược CRM (Customer Relationship Management) không nên chỉ nằm trên giấy. Việc triển khai các chương trình khách hàng thân thiết (Loyalty Program) phân cấp rõ ràng, thẻ thành viên độc quyền, những mã giảm giá (voucher) thiết kế riêng mang tính cá nhân hóa cho từng tệp người theo dõi, và một bộ phận chăm sóc khách hàng sẵn sàng tư vấn 1-1 với thái độ tận tâm nhất... Tất cả những chất liệu đó sẽ cùng nhau dệt nên một vòng lặp mua sắm vô tận (Infinite Loop).

*Cuối cùng, người giành lấy chiếc cúp vô địch trên đường đua e-commerce marathon khốc liệt này không hẳn là kẻ có thể 'đốt cháy' thị trường và thu về hàng trăm tỷ đồng doanh thu chỉ trong một ngày hội siêu mua sắm chớp nhoáng.*

Người chiến thắng thực sự là người có kiến trúc doanh nghiệp đủ dẻo dai để duy trì sự phát triển bền vững, giữ vững nhịp đập kinh doanh qua trọn vẹn 365 ngày của một năm. Hãy dồn trọng tâm vào giá trị cốt lõi của sản phẩm, thấu cảm sâu sắc nỗi đau của khách hàng và không ngừng học hỏi, linh hoạt tiến hóa để thích ứng với những luật chơi mới liên tục được cập nhật từ các nền tảng. Lợi nhuận ròng không phải là món quà từ sự may mắn hay trúng mánh; nó là sự đơm hoa kết trái của một kiến trúc vận hành sắc sảo, một tầm nhìn chiến lược dài hạn và hàng vạn giờ lao động miệt mài không ngừng nghỉ.
`;

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const getChildrenText = (children: React.ReactNode): string => {
  if (typeof children === 'string') return children;
  if (typeof children === 'number') return children.toString();
  if (Array.isArray(children)) return children.map(getChildrenText).join('');
  if (children && typeof children === 'object' && 'props' in children) {
    return getChildrenText((children.props as any).children);
  }
  return '';
};

const MarkdownRenderer = ({ content, className = "", isFirstParagraphSpecial = false, isDark = false }: { content: string, className?: string, isFirstParagraphSpecial?: boolean, isDark?: boolean }) => {
  
  const colorClasses = isDark 
    ? "text-white prose-headings:text-white prose-p:text-white/80 prose-li:text-white/80 prose-blockquote:text-white prose-blockquote:border-white/30 prose-blockquote:before:text-white/10 prose-hr:border-white/10"
    : "text-[#1a1a1a] prose-headings:text-[#1a1a1a] prose-p:text-[#333] prose-li:text-[#333] prose-blockquote:text-[#1a1a1a] prose-blockquote:border-[#1a1a1a]/30 prose-blockquote:before:text-[#1a1a1a]/10 prose-hr:border-[#1a1a1a]/10";

  return (
    <div className={`prose prose-lg max-w-none 
      prose-headings:font-sans prose-headings:font-bold prose-headings:tracking-tight
      prose-h2:text-[24px] md:prose-h2:text-[32px] md:prose-h2:leading-[1.2] prose-h2:mt-10 prose-h2:mb-6
      prose-h3:text-[18px] md:prose-h3:text-[22px] prose-h3:mt-8 prose-h3:mb-4
      prose-p:text-[15px] md:prose-p:text-[17px] prose-p:leading-[1.9] prose-p:mb-5 md:prose-p:text-justify text-left
      prose-li:text-[15px] md:prose-li:text-[17px] prose-li:leading-[1.9]
      prose-ul:mb-6 prose-ul:pl-6
      prose-a:text-[#A70000] prose-a:font-semibold prose-a:underline-offset-4
      prose-em:font-serif prose-em:text-[1.18em] prose-em:italic prose-em:tracking-wide
      prose-blockquote:relative prose-blockquote:border-l-0 prose-blockquote:bg-transparent prose-blockquote:py-16 mx-auto prose-blockquote:px-8 md:prose-blockquote:px-20 prose-blockquote:italic prose-blockquote:text-[28px] md:prose-blockquote:text-[38px] md:prose-blockquote:leading-[1.4] prose-blockquote:font-medium prose-blockquote:my-28 prose-blockquote:text-center
      prose-blockquote:before:content-['"'] prose-blockquote:before:absolute prose-blockquote:before:top-[-60px] prose-blockquote:before:left-1/2 prose-blockquote:before:-translate-x-1/2 prose-blockquote:before:text-[200px] prose-blockquote:before:font-serif prose-blockquote:before:leading-none
      prose-hr:my-20 prose-hr:border-[#1a1a1a]/20
      ${isFirstParagraphSpecial ? '[&>p:first-of-type::first-letter]:text-[6rem] md:[&>p:first-of-type::first-letter]:text-[8.5rem] [&>p:first-of-type::first-letter]:font-black [&>p:first-of-type::first-letter]:float-left [&>p:first-of-type::first-letter]:leading-[0.85] [&>p:first-of-type::first-letter]:pr-5 [&>p:first-of-type::first-letter]:pt-2 [&>p:first-of-type::first-letter]:text-[#1a1a1a] [&>p:first-of-type::first-letter]:font-serif' : ''}
      ${playfair.className} ${colorClasses} ${className}
    `}>
      <Markdown
        components={{
          h2: ({ node, children }) => (
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: EASE }}
            >
              {children}
            </motion.h2>
          ),
          h3: ({ node, children }) => (
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: EASE }}
            >
              {children}
            </motion.h3>
          ),
          p: ({ node, children }) => (
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, ease: EASE }}
            >
              {children}
            </motion.p>
          ),
          blockquote: ({ node, children }) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: EASE }}
              className="not-prose relative float-left clear-left w-full sm:w-[46%] md:w-[42%] max-w-[300px] mr-5 sm:mr-6 mb-3 sm:mb-5 mt-2 ml-0 pl-4 sm:pl-5 pr-2 pt-4 sm:pt-5 pb-2.5 bg-transparent flex flex-col gap-2 group/quote z-10"
            >
              {/* Vertical Left Line (continuous, exact 2.5px width matching the design) */}
              <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-[#A70000]" />

              {/* Top Horizontal Line and Custom Diagonal Fold (exact 160px width matching the design) */}
              <div className="absolute top-0 left-0 w-[160px] h-[24px] pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 160 24" fill="none">
                  {/* Horizontal segment ending at x=148 */}
                  <path d="M 0 1 L 148 1" stroke="#A70000" strokeWidth="2" strokeLinecap="square" />
                  {/* Diagonal bend segment from x=148, y=1 to x=158, y=11 */}
                  <path d="M 148 1 L 158 11" stroke="#A70000" strokeWidth="2" strokeLinecap="square" />
                </svg>
              </div>

              {/* Elegantly styled Vietnamese quote content with high attention detail - Matching Image 2 perfectly but smaller and neater */}
              <div className="text-[#A70000] font-semibold leading-[1.50] text-[13px] sm:text-[14px] md:text-[15px] tracking-tight font-sans">
                {children}
              </div>
            </motion.div>
          ),
          strong: ({ node, children }) => (
            <strong className="font-extrabold text-[#A70000] bg-[#A70000]/[0.05] px-1.5 py-0.5 rounded transition-all duration-300 hover:bg-[#A70000]/10">
              {children}
            </strong>
          ),
          ul: ({ node, children }) => (
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: EASE }}
            >
              {children}
            </motion.ul>
          )
        }}
      >
        {content}
      </Markdown>
    </div>
  );
};

export default function NewsDetailPage() {
  const params = useParams();
  const idStr = params && params.id
    ? (Array.isArray(params.id) ? params.id[0] : params.id)
    : "";
  let id = parseInt(idStr);
  if (isNaN(id)) id = 1;

  const [copied, setCopied] = useState(false);
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yHeroImage = useTransform(heroProgress, [0, 1], ["-5%", "15%"]);
  const opacityHeroText = useTransform(heroProgress, [0, 0.8], [1, 0]);

  // Find the news item
  let article: any = featuredNews.id === id ? featuredNews : null;
  if (!article) article = recentNews.find(n => n.id === id) || null;
  if (!article) article = allNews.find(n => n.id === id) || null;
  if (!article) article = analysisNews.find(n => n.id === id) || null;
  
  if (!article) {
    article = featuredNews;
  }

  // Ensure all necessary properties exist for the view
  const image = (article as any).image || featuredNews.image;
  const content = MOCK_CONTENT;

  // Formatting Title and Excerpt to fit the Magazine vibe
  const magazineTitle = `"${article.title.toUpperCase()}"`;
  const extract = (article as any).excerpt || featuredNews.excerpt;
  const isEven = id % 2 === 0;

  return (
    <main 
      onCopy={(e) => e.preventDefault()}
      onContextMenu={(e) => e.preventDefault()}
      className="w-full min-h-screen bg-[#F6F4F0] text-[#1a1a1a] selection:bg-transparent selection:text-transparent font-sans overflow-hidden relative select-none"
    >
      <title>{`${article.title} | The Editorial Market`}</title>
      <meta name="description" content={extract} />
      
      {/* Editorial Noise Overlay */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.025] mix-blend-multiply"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      
      {/* Reading Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#A70000] origin-left z-[60]"
        style={{ scaleX }}
      />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {/* Navigation Header */}
        <nav className="w-full relative z-20 flex justify-between items-center mb-10">
          <Link 
            href="/news" 
            className="inline-flex items-center text-[#1a1a1a] hover:text-[#A70000] transition-colors text-[11px] tracking-[0.15em] uppercase font-bold group"
          >
            <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
            Trở về
          </Link>
          <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#1a1a1a]/40">
             www.ecommerce.vn
          </div>
        </nav>

        {/* Magazine Editorial Top Section (Constrained Width Split) */}
        <section ref={heroRef} className={`w-full min-h-[70vh] flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch mb-16 sm:mb-24 bg-[#F6F4F0] overflow-hidden`}>
          
          {/* Editorial Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: EASE }}
            className="w-full lg:w-[45%] xl:w-[40%] relative group overflow-hidden"
          >
            <motion.div 
              style={{ y: yHeroImage }}
              className="w-full h-[60vh] lg:h-[115%] relative -top-[5%]"
            >
              <Image
                src={isEven ? "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop" : "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"}
                alt={article.title}
                fill
                className="object-cover transform transition-transform duration-[4s] ease-out group-hover:scale-[1.03]"
                priority
              />
              {/* Caption */}
              <div className={`absolute bottom-[10%] ${isEven ? 'right-8 text-right' : 'left-8'} z-20`}>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.8, ease: EASE }}
                  className="text-white text-[12px] leading-[1.6] drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)] font-bold tracking-wide"
                >
                  <span className="italic block mb-1 lowercase">&quot;{isEven ? 'Vintage Art' : 'Urban Elegance'}&quot;</span>
                  — Shot by NVCC<br/>
                  Issue No.{id}
                </motion.p>
              </div>
              
              <div className={`absolute inset-0 bg-gradient-to-t ${isEven ? 'from-black/50' : 'from-black/50'} via-black/5 to-transparent z-10 pointer-events-none opacity-90 transition-opacity duration-1000`} />
            </motion.div>
          </motion.div>

          {/* Editorial Typography */}
          <motion.div 
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ opacity: opacityHeroText }}
            transition={{ duration: 1.2, delay: 0.2, ease: EASE }}
            className="w-full lg:w-[55%] xl:w-[60%] flex flex-col justify-center px-6 sm:px-12 lg:px-20 xl:px-28 py-16 lg:py-10 relative"
          >
            {/* Decorative faint background text */}
            <div className="absolute top-[40%] left-[55%] lg:left-[50%] -translate-x-1/2 -translate-y-1/2 text-[150px] lg:text-[250px] xl:text-[320px] font-black text-[#A70000]/10 pointer-events-none whitespace-nowrap z-0 font-serif italic tracking-tighter">
              {String(id).padStart(2, '0')}
            </div>

            <div className="relative z-10 w-full max-w-[700px] mx-auto lg:mx-0">
              <h1 
                className={`text-[36px] sm:text-[46px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-normal leading-[1.15] text-[#1a1a1a] mb-10 tracking-[-0.02em] ${playfair.className} uppercase`}
              >
                {magazineTitle}
              </h1>

              {/* Excerpt Section - Uppercase, justified, elegant font */}
              <div className="border-l-[2px] border-[#A70000] pl-6 sm:pl-8 mb-12">
                <p className="text-[11px] sm:text-[13px] font-bold uppercase leading-[2.2] tracking-[0.08em] text-[#1a1a1a]/80 text-left max-w-[90%] font-sans">
                  {extract}
                </p>
              </div>

              {/* Credits */}
              <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-[#1a1a1a] flex flex-wrap items-center gap-4 sm:gap-5 pb-6">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#A70000] rounded-full inline-block" />
                  BÀI TAYLOR PHẠM
                </span>
                <span className="text-[#1a1a1a]/20">|</span>
                <span className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 bg-[#1a1a1a] rounded-full inline-block" />
                   ẢNH NVCC
                </span>
              </div>
              
              {/* Decorative bottom line */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "80px" }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                className="h-[1.5px] bg-[#1a1a1a]/10"
              />
            </div>
          </motion.div>
        </section>

        {/* Second Editorial Section (Reverse Split) */}
        <section className={`w-full min-h-[70vh] flex flex-col ${!isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch mb-16 sm:mb-24 bg-[#F6F4F0] overflow-hidden`}>
          
          {/* Editorial Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: EASE }}
            className="w-full lg:w-[45%] xl:w-[40%] relative group overflow-hidden"
          >
            <div className="w-full h-[60vh] lg:h-[115%] relative -top-[5%]">
              <Image
                src={!isEven ? "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop" : "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"}
                alt="Secondary Feature"
                fill
                className="object-cover transform transition-transform duration-[4s] ease-out group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
              
              <div className={`absolute bottom-[10%] ${!isEven ? 'right-8 text-right' : 'left-8'} z-20`}>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.4, ease: EASE }}
                  className="text-white text-[12px] leading-[1.6] drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)] font-bold tracking-wide"
                >
                  <span className="italic block mb-1 lowercase">&quot;{!isEven ? 'Vintage Art' : 'Urban Elegance'}&quot;</span>
                  — Shot by NVCC<br/>
                  Issue No.0{Number(id) + 1}
                </motion.p>
              </div>
              
              <div className={`absolute inset-0 bg-gradient-to-t ${!isEven ? 'from-black/50' : 'from-black/50'} via-black/5 to-transparent z-10 pointer-events-none opacity-90 transition-opacity duration-1000`} />
            </div>
          </motion.div>

          {/* Editorial Typography */}
          <motion.div 
            initial={{ opacity: 0, x: !isEven ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: EASE }}
            className="w-full lg:w-[55%] xl:w-[60%] flex flex-col justify-center px-6 sm:px-12 lg:px-20 xl:px-28 py-16 lg:py-10 relative"
          >
            {/* Decorative faint background text */}
            <div className="absolute top-[40%] left-[55%] lg:left-[50%] -translate-x-1/2 -translate-y-1/2 text-[150px] lg:text-[250px] xl:text-[320px] font-black text-[#A70000]/10 pointer-events-none whitespace-nowrap z-0 font-serif italic tracking-tighter">
              {String(Number(id) + 1).padStart(2, '0')}
            </div>

            <div className="relative z-10 w-full max-w-[700px] mx-auto lg:mx-0">
              {/* Main Title - Huge & Elegant */}
              <h2 
                className={`text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] xl:text-[60px] font-normal leading-[1.15] text-[#1a1a1a] mb-8 tracking-[-0.02em] ${playfair.className} uppercase`}
              >
                &ldquo;XI MĂNG PHÁT QUANG: GIẢI PHÁP THẮP SÁNG ĐƯỜNG PHỐ KHÔNG CẦN ĐIỆN&rdquo;
              </h2>

              {/* Excerpt Section - Uppercase, justified, elegant font */}
              <div className="border-l-[2px] border-[#A70000] pl-6 sm:pl-8 mb-10">
                <p className="text-[11px] sm:text-[13px] font-bold uppercase leading-[2.2] tracking-[0.08em] text-[#1a1a1a]/80 text-left max-w-[90%] font-sans">
                  MỘT PHÁT MINH MỚI MẺ GIÚP ĐƯỜNG PHỐ TỰ PHÁT SÁNG VÀO BAN ĐÊM NHỜ HẤP THỤ NĂNG LƯỢNG MẶT TRỜI BAN NGÀY...
                 </p>
              </div>

              {/* Content Paragraphs */}
              <div className="mt-8 mb-10 flex flex-col gap-6 text-[#1a1a1a]/80 text-[13px] sm:text-[14px] leading-relaxed max-w-[90%] font-sans">
                <p className="first-letter:text-[4rem] sm:first-letter:text-[5.5rem] first-letter:font-black first-letter:float-left first-letter:leading-[0.85] first-letter:pr-4 first-letter:pt-1 first-letter:text-[#1a1a1a] first-letter:font-serif">
                  Vào những ngày đầu thử nghiệm, công nghệ này đã cho thấy khả năng vượt trội trong việc hấp thụ quang năng và tự động phát sáng kéo dài nhiều giờ liền. Đây không chỉ là bước tiến về công nghệ vật liệu mà còn là một tia hy vọng cho xu hướng đô thị thông minh bền vững.
                </p>
                <p>
                  Các chuyên gia nhận định rằng, một khi được ứng dụng rộng rãi, xi măng phát quang sẽ làm giảm đáng kể chi phí điện năng quốc gia, đưa chúng ta bước vào một kỷ nguyên mới nơi ánh sáng được tái tạo bằng chính những vật chất xây dựng.
                </p>
              </div>

              {/* Credits */}
              <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-[#1a1a1a] flex flex-wrap items-center gap-4 sm:gap-5 pb-6">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#A70000] rounded-full inline-block" />
                  BÀI TỔNG HỢP
                </span>
                <span className="text-[#1a1a1a]/20">|</span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#1a1a1a] rounded-full inline-block" />
                  ẢNH KTS
                </span>
              </div>
              
              {/* Decorative bottom line */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="h-[1.5px] bg-[#1a1a1a]/10"
              />
            </div>
          </motion.div>
        </section>

        {/* Third Editorial Section (Refactored to be super compact, distinct & premium light luxury showcase) */}
        <section className="w-full mb-20 sm:mb-28 z-10 relative animate-fade-in">
          <div className="bg-white border border-[#1a1a1a]/10 rounded-lg overflow-hidden p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row items-center gap-10 lg:gap-14 xl:gap-16 relative shadow-[0_24px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(167,0,0,0.05)] transition-all duration-500">
            
            {/* Absolute Watermark behind everything */}
            <div className="absolute right-6 top-6 text-[150px] sm:text-[200px] lg:text-[230px] font-black text-[#A70000]/[0.02] pointer-events-none select-none font-serif italic tracking-tighter leading-none z-0">
              {String(Number(id) + 2).padStart(2, '0')}
            </div>

            {/* Left Column: Overlapping Visual Graphic (Compact Collage) */}
            <div className="w-full lg:w-[40%] xl:w-[38%] flex justify-center items-center relative h-[280px] sm:h-[350px] z-10">
              {/* Back Image (Hanger / Sharp Perspective) */}
              <div className="w-[58%] h-[80%] absolute left-0 top-0 rounded overflow-hidden shadow-xl border border-[#1a1a1a]/5 group/col1">
                <Image
                  src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop"
                  alt="Sharp Perspective"
                  fill
                  className="object-cover object-top transform transition-transform duration-[4s] group-hover/col1:scale-[1.05]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/[0.08] group-hover/col1:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-3 left-3 z-10 text-white font-mono text-[8px] tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                  &quot;Sharp Perspective&quot;
                </div>
              </div>

              {/* Front Image (Model / Dynamic Flow) */}
              <div className="w-[58%] h-[80%] absolute right-0 bottom-0 rounded overflow-hidden shadow-2xl border-2 border-[#A70000]/20 group/col2 z-20">
                <Image
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
                  alt="Dynamic Flow"
                  fill
                  className="object-cover transform transition-transform duration-[4s] group-hover/col2:scale-[1.05]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/[0.04] group-hover/col2:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-3 left-3 z-10 text-white font-bold text-[8px] tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                  &quot;Dynamic Flow&quot;
                </div>
              </div>
            </div>

            {/* Right Column: Narrative Storytelling and Interactive Elements */}
            <div className="w-full lg:w-[60%] xl:w-[62%] flex flex-col justify-center relative z-10">
              {/* Top Tagline */}
              <div className="flex items-center gap-3 mb-5">
                <span className="w-6 h-[1.5px] bg-[#A70000] inline-block" />
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#A70000]">CHƯƠNG III : SỰ HOÀN MỸ</span>
              </div>

              {/* Huge Headline */}
              <h3 className={`text-[36px] sm:text-[46px] md:text-[54px] lg:text-[58px] xl:text-[66px] font-normal leading-[1.08] text-[#1a1a1a] mb-8 tracking-[-0.03em] ${playfair.className} uppercase`}>
                SỰ GIAO THOA ĐỘC BẢN
              </h3>

              {/* Story Paragraph - Repositioned & Stylized with richer Typographic Rhythm */}
              <div className="mb-10 max-w-[92%]">
                <p className="text-[13px] sm:text-[14px] font-normal italic text-[#1a1a1a]/85 leading-[1.7] font-serif mb-5 border-l-2 border-[#A70000] pl-4">
                  &ldquo;Mỗi chi tiết nhỏ cấu thành hành trình thương mại của bạn đều được thiết kế độc quyền, loại bỏ mọi xu hướng sao chép hay sản xuất công nghiệp đại trà vô hồn.&rdquo;
                </p>
                <p className="text-[12.5px] leading-[1.8] text-[#1a1a1a]/60 font-sans text-justify sm:text-left">
                  Sự tinh tế của một thương hiệu định vị cao cấp nằm ở khả năng mượt mà hóa những điểm chạm vật lý và phản chiếu thị giác hoàn hảo nhất, nuôi dưỡng kết nối sâu sắc của khách hàng qua từng điểm giao thoa tinh xảo.
                </p>
              </div>

              {/* Redesigned Premium Narrative List UI */}
              <div className="space-y-6 max-w-[92%] border-t border-[#1a1a1a]/10 pt-8 mt-4">
                
                {/* Point 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group flex gap-5 items-start pb-6 border-b border-[#1a1a1a]/5 hover:border-[#A70000]/20 transition-all duration-300"
                >
                  <div className="text-[11px] font-mono text-[#A70000] tracking-wider font-bold bg-[#A70000]/5 px-2.5 py-1 rounded">
                    01
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-[17px] font-medium text-[#1a1a1a] mb-1.5 transition-colors duration-300 group-hover:text-[#A70000] ${playfair.className} italic`}>
                      Tính Độc Bản Khắt Khe
                    </h4>
                    <p className="text-[12px] text-[#1a1a1a]/65 leading-relaxed font-sans">
                      Từng ý tưởng và sản phẩm được thiết kế độc quyền, không lặp lại bất kỳ khuôn mẫu đại trà nào.
                    </p>
                  </div>
                </motion.div>

                {/* Point 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="group flex gap-5 items-start pb-2 hover:border-[#A70000]/20 transition-all duration-300"
                >
                  <div className="text-[11px] font-mono text-zinc-500 tracking-wider font-bold bg-[#1a1a1a]/5 group-hover:bg-[#A70000]/5 group-hover:text-[#A70000] px-2.5 py-1 rounded transition-colors duration-300">
                    02
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-[17px] font-medium text-[#1a1a1a] mb-1.5 transition-colors duration-300 group-hover:text-[#A70000] ${playfair.className} italic`}>
                      Chi Tiết Tạo Đẳng Cấp
                    </h4>
                    <p className="text-[12px] text-[#1a1a1a]/65 leading-relaxed font-sans">
                      Tập trung tối đa vào chuyển động vật lý, tương tác ánh sáng mượt mà trên từng điểm chạm giác quan.
                    </p>
                  </div>
                </motion.div>

              </div>

            </div>

          </div>
        </section>



 
        {/* Fourth Editorial Section (Luxury Brand / Architectural Identity & Asymmetric Collage) */}
        <section className="w-full min-h-[85vh] flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-24 mb-20 sm:mb-28 mt-12 sm:mt-20 overflow-hidden relative">
          
          {/* Decorative faint background watermark */}
          <div className="absolute top-[10%] right-[-5%] text-[180px] lg:text-[260px] xl:text-[340px] font-bold text-[#A70000]/[0.02] pointer-events-none select-none font-serif italic tracking-tighter max-h-[100%] leading-none z-0">
            CREATIVE
          </div>
          
          {/* Left Column: Overlapping Dynamic Image Collage */}
          <div className="w-full lg:w-[45%] xl:w-[42%] flex justify-center items-center relative min-h-[360px] sm:min-h-[500px] lg:min-h-[640px] px-4">
            
            {/* Elegant backdrop frame offset - Just like originally but beautifully styled in red */}
            <div className="absolute top-[5%] left-[5%] w-[80%] h-[85%] border-2 border-[#A70000]/30 pointer-events-none rounded-sm z-0" />
            
            {/* Elegant nested relative container for the main image with tightly optimized border frame */}
            <div className="w-[75%] h-[280px] xs:h-[350px] sm:h-[420px] lg:h-[520px] relative z-10">
              
              {/* Main Tall Image (Background layer) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: EASE }}
                className="w-full h-full relative rounded shadow-2xl overflow-hidden group/main z-10"
              >
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
                  alt="Architectural Luxury"
                  fill
                  className="object-cover transform transition-transform duration-[4s] ease-out group-hover/main:scale-105"
                />
                <div className="absolute inset-0 bg-[#1a1a1a]/10 group-hover/main:bg-transparent transition-colors duration-700" />
                {/* Image signature label */}
                <div className="absolute bottom-6 left-6 z-20 text-white">
                  <span className="text-[10px] uppercase tracking-[0.2em] opacity-80 block mb-1">Perspective View</span>
                  <span className={`text-[15px] italic ${playfair.className}`}>Constructing future</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              </motion.div>
  
              {/* Elegant NGUYỄN VINH Luxury Brand Logo Stamp (100px, Premium Porcelain White Theme) with Infinite Spinning Text Ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ 
                  scale: 1.12, 
                  boxShadow: "0 20px 40px rgba(167, 0, 0, 0.16)",
                  borderColor: "rgba(167, 0, 0, 0.35)"
                }}
                transition={{ duration: 1.2, delay: 0.4, ease: EASE }}
                className="absolute -bottom-6 -right-6 w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center border border-[#1a1a1a]/10 shadow-[0_15px_35px_rgba(0,0,0,0.12)] z-20 cursor-pointer overflow-hidden group/logo"
              >
                {/* Radial background glow on hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,0,0,0.06)_0%,transparent_70%)] opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500 rounded-full" />
                
                {/* Inner circular dashed border guideline */}
                <div className="absolute inset-[3px] rounded-full border border-dashed border-[#A70000]/10 group-hover/logo:border-[#A70000]/25 transition-colors duration-500 z-0" />
                
                {/* Infinite Spinning Text Ring */}
                <motion.div
                  className="absolute inset-[1px] origin-center z-10"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                      id="logoTextCircle"
                      d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                      fill="none"
                    />
                    <text className="font-sans text-[7.2px] font-extrabold tracking-[0.14em] fill-[#111111]/90">
                      <textPath href="#logoTextCircle" startOffset="0%">
                        NGUYỄN VINH • PREMIUM • NGUYỄN VINH • PREMIUM •
                      </textPath>
                    </text>
                  </svg>
                </motion.div>

                {/* Central Static Core (Does NOT rotate, keeping structural brand icon & tagline perfectly legible & prominent) */}
                <div className="relative z-20 flex flex-col items-center justify-center w-[54px] h-[54px] bg-white rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.03)] border border-[#1a1a1a]/5">
                  {/* Micro isometric drafting cube (Anthracite with signature red core) */}
                  <svg
                    viewBox="0 0 100 100"
                    className="w-[22px] h-[22px] text-[#A70000] fill-none stroke-current transform group-hover/logo:scale-105 transition-transform duration-500"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M50 15 L85 35 L85 75 L50 95 L15 75 L15 35 Z" />
                    <path d="M50 15 L50 95" strokeWidth="2.5" />
                    <path d="M15 35 L50 55 L85 35" strokeWidth="2.5" />
                    <circle cx="50" cy="55" r="5" fill="#A70000" stroke="none" />
                  </svg>
                  
                  {/* Micro elegant tagline in centerpiece for maximum clarity */}
                  <span className="text-[7px] font-mono tracking-[0.05em] text-[#A70000] block uppercase leading-none font-extrabold mt-1">
                    EST. 2026
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
 
          {/* Right Column: Narrative Storytelling and Interactive Elements */}
          <div className="w-full lg:w-[55%] xl:w-[58%] flex flex-col justify-center relative z-10 px-4">
            
            {/* Top Tagline */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: EASE }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="w-6 h-[1.5px] bg-[#A70000] inline-block" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#A70000]">CHƯƠNG IV : ĐỊNH VỊ THƯƠNG HIỆU</span>
            </motion.div>
 
            {/* Huge Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1, ease: EASE }}
              className={`text-[36px] sm:text-[46px] md:text-[54px] lg:text-[58px] xl:text-[66px] font-normal leading-[1.08] text-[#1a1a1a] mb-8 tracking-[-0.03em] ${playfair.className} uppercase`}
            >
              GIÁ TRỊ VÀNG CỦA<br className="hidden sm:block" /> SỰ KHÁC BIỆT
            </motion.h2>
 
            {/* Story Paragraph with Gold/Red Drop Cap */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: EASE }}
              className="text-[#1a1a1a]/80 text-[14px] leading-[1.8] max-w-[92%] font-sans text-justify sm:text-left mb-10"
            >
              <p className="first-letter:text-[4.5rem] sm:first-letter:text-[5.8rem] first-letter:font-black first-letter:float-left first-letter:leading-[0.85] first-letter:pr-5 first-letter:pt-1 first-letter:text-[#A70000] first-letter:font-serif">
                Chất riêng tinh khiết khởi nguồn từ khả năng tối giản hóa những điều phức tạp nhất. Khi thế giới ngày một trở nên ồn ào và đầy rẫy sự sao chép rập khuôn, tiếng nói thực sự khác biệt chính là sự tĩnh lặng đầy uy lực của những sản phẩm bền vững theo dòng chảy vô tận của thời gian.
              </p>
              <p className="mt-4 text-[#1a1a1a]/70">
                Thành quả vĩ đại không bao giờ được tạo nên từ những sự nhượng bộ nửa vời hay những bước đi vội vã. Đó luôn là sự chắt chiu đến tận cùng của từng đường nét nghệ thuật, định hình nên những chuẩn mực duy mỹ mới thách thức mọi giới hạn của thời đại.
              </p>
            </motion.div>
 
            {/* Interactive Custom Bento / Pillar Rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[92%]">
              
              {/* Pillar Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: EASE }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="p-6 bg-[#F6F4F0]/60 hover:bg-[#F6F4F0] border border-[#1a1a1a]/5 hover:border-[#A70000]/25 rounded transition-all duration-300 group/pill flex flex-col justify-between min-h-[160px]"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold text-[#A70000] tracking-widest uppercase">POINT 01</span>
                    <span className="w-1.5 h-1.5 bg-[#A70000] rounded-full opacity-60 group-hover/pill:opacity-100 transition-opacity" />
                  </div>
                  <h4 className={`text-[18px] font-medium leading-snug text-[#1a1a1a] mb-2 ${playfair.className} italic`}>
                    Tính Độc Bản Khắt Khe
                  </h4>
                  <p className="text-[12px] text-[#1a1a1a]/60 leading-relaxed font-sans">
                     Mỗi sản phẩm, ý tưởng đều được tạo mẫu độc quyền, loại bỏ xu hướng sản xuất công nghiệp đại trà vô hồn.
                  </p>
                </div>
              </motion.div>
 
              {/* Pillar Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4, ease: EASE }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="p-6 bg-[#F6F4F0]/60 hover:bg-[#F6F4F0] border border-[#1a1a1a]/5 hover:border-[#A70000]/25 rounded transition-all duration-300 group/pill flex flex-col justify-between min-h-[160px]"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold text-[#A70000] tracking-widest uppercase">POINT 02</span>
                    <span className="w-1.5 h-1.5 bg-[#1a1a1a] rounded-full opacity-40 group-hover/pill:bg-[#A70000] group-hover/pill:opacity-100 transition-all" />
                  </div>
                  <h4 className={`text-[18px] font-medium leading-snug text-[#1a1a1a] mb-2 ${playfair.className} italic`}>
                    Chi Tiết Làm Nên Đẳng Cấp
                  </h4>
                  <p className="text-[12px] text-[#1a1a1a]/60 leading-relaxed font-sans">
                    Tập trung tối đa vào độ mượt của chuyển động vật lý, ánh sáng phản chiếu và sự tinh tế trong xúc giác bề mặt.
                  </p>
                </div>
              </motion.div>
 
            </div>
 
          </div>
        </section>
      </div>




      <article className="w-full pb-20 mt-12 sm:mt-20">
        
        {/* Large Premium Banner Image above the main article body text */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-14 sm:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: EASE }}
            className="w-full h-[320px] sm:h-[420px] lg:h-[480px] relative rounded-lg overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.06)] border border-[#1a1a1a]/5 group/body-banner"
          >
            <Image
              src={image}
              alt={article.title}
              fill
              className="object-cover transform transition-transform duration-[6s] ease-out group-hover/body-banner:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Dark gradient overlay at the bottom for high contrast text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5 z-10" />
            
            {/* Top signature brand marker */}
            <div className="absolute top-6 left-6 z-20">
              <span className="bg-[#A70000] text-white font-mono text-[9px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm shadow-md">
                PRIMARY EXHIBIT
              </span>
            </div>

            {/* Premium details floating over the bottom of the image banner */}
            <div className="absolute bottom-8 left-8 right-8 z-20 text-white flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
              <div className="max-w-2xl">
                <p className="text-[#A70000] font-bold text-[10px] uppercase tracking-[0.25em] mb-2.5 font-mono">
                  SPECIAL INVESTIGATION & ARTICLE DISCOVERY
                </p>
                <h3 className={`text-[22px] sm:text-[28px] lg:text-[34px] font-normal leading-tight ${playfair.className} italic text-white`}>
                  {article.title}
                </h3>
              </div>
              <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/70 border-t sm:border-t-0 sm:border-l border-white/20 pt-4 sm:pt-0 sm:pl-6 text-left shrink-0">
                <span>Section B // Editorial</span>
                <span className="block mt-1 text-[#A70000] font-bold">NV Luxury Insight</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Intro Section - Centered & Expanded Width */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
          <section className="relative z-20 w-full mx-auto">
            {content && <MarkdownRenderer content={content} isFirstParagraphSpecial={true} />}
          </section>
        </div>
        
        {/* Engagement Footer Section */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-32 relative">
          <div className="max-w-[1440px] mx-auto">
            
            {/* About Author / Publisher Card - Matching Image 1 perfectly */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: EASE }}
            whileHover={{ y: -4 }}
            className="w-full bg-[#f4f2ee]/40 border border-[#1a1a1a]/5 rounded-lg p-6 sm:p-8 md:p-10 mb-10 text-left font-sans shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)] backdrop-blur-[2px] transition-all duration-500"
          >
            <h4 className={`text-[#1a1a1a] text-[18px] sm:text-[20px] font-semibold mb-3 ${playfair.className} italic`}>
              Về Nguyễn Vinh VLXD
            </h4>
            <div className="text-[#1a1a1a]/85 text-[13px] sm:text-[14px] leading-[1.75] max-w-full text-justify flex flex-col gap-4">
              <p>
                <strong>Nguyễn Vinh VLXD</strong> là đơn vị uy tín hàng đầu chuyên cung cấp giải pháp cung ứng vật liệu xây dựng toàn diện, chất lượng cao từ cát, đá, xi măng, sắt thép cho đến các vật liệu hoàn thiện công trình. Với hơn 10+ năm kinh nghiệm thực chiến và chuỗi cung ứng logistics mạnh mẽ, dự án đã đồng hành cùng 500+ công trình lớn nhỏ trên khắp cả nước, mang lại giải pháp tối ưu chi phí và chất lượng bền vững cho chủ đầu tư.
              </p>
              <p>
                Nguyễn Vinh VLXD không ngừng nâng cao chất lượng dịch vụ và quy chuẩn kiểm định, tự hào là đối tác chiến lược tin cậy cho mọi nhà thầu và kiến tạo các công trình vững bền cùng thời gian.
              </p>
            </div>
            
            <ul className="space-y-2 mt-6 pl-0 text-[13px] sm:text-[14px] text-[#1a1a1a]/80 font-sans list-none">
              <li className="flex items-center gap-2.5">
                <span className="w-2 h-2 bg-[#475569]/80 shrink-0 rounded-[1px]" />
                <span>
                  Website:{" "}
                  <a href="https://nguyenvinhvlxd.com" target="_blank" rel="noopener noreferrer" className="text-[#A70000] hover:underline font-semibold transition-colors">
                    nguyenvinhvlxd.com
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-2 h-2 bg-[#475569]/80 shrink-0 rounded-[1px]" />
                <span>
                  Email:{" "}
                  <a href="mailto:nguyenvinh@gmail.com" className="text-zinc-800 hover:underline font-medium transition-colors">
                    nguyenvinh@gmail.com
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-2 h-2 bg-[#475569]/80 shrink-0 rounded-[1px]" />
                <span>
                  Số điện thoại:{" "}
                  <span className="text-[#A70000] font-semibold">
                    093 926 93 26
                  </span>
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Tags - Lowercase with solid bottom red border matching Image 1 perfectly */}
          <div className="flex flex-wrap items-center justify-start gap-x-6 sm:gap-x-8 gap-y-3 mb-10 pl-1">
            {(article.id === 1 
              ? ["activation", "digital marketing", "sport marketing", "tài sản thương hiệu", "thể thao"]
              : article.tags.map((t: string) => t.toLowerCase())
            ).map((tag: string, idx: number) => (
              <Link href="#" key={idx} className="group border-b border-[#A70000] pb-0.5 hover:opacity-75 transition-opacity">
                <span className="text-[#A70000] text-[13px] sm:text-[14px] font-normal leading-none font-sans">
                  #{tag}
                </span>
              </Link>
            ))}
          </div>

          {/* Reactions and Share Station - Matching Screenshot and design perfectly but more compact */}
          <div className="w-full mt-8">
            <div className="bg-[#FAF9F6]/90 border border-[#1a1a1a]/5 rounded-xl p-4 sm:p-6 flex flex-col gap-5 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.03)] backdrop-blur-[4px] transition-all duration-500 hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.05)] hover:border-[#1a1a1a]/8">
              
              {/* Top Layer: Interaction Reactions - tighter design & compact text/icons */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pb-5 border-b border-[#1a1a1a]/5">
                {/* AI? */}
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2, boxShadow: "0 6px 20px -4px rgba(107, 80, 191, 0.2)" }} 
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center justify-center gap-1.5 px-3.5 py-1.5 border border-[#c0b2e3] rounded-full text-[#6b50bf] bg-[#FAF8FF] hover:bg-[#ebdffd]/40 transition-all duration-300 whitespace-nowrap text-[12px] font-semibold cursor-pointer"
                >
                  <Flag className="w-3.5 h-3.5" />
                  <span>AI?</span>
                </motion.button>
                
                {/* Thích */}
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2, boxShadow: "0 6px 20px -4px rgba(74, 144, 226, 0.2)" }} 
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center justify-center gap-1.5 px-3.5 py-1.5 border border-[#a1c6eb] rounded-full text-[#4a90e2] bg-[#F4F9FF] hover:bg-[#d6e9fd]/40 transition-all duration-300 whitespace-nowrap text-[12px] font-semibold cursor-pointer"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>Thích</span>
                </motion.button>
                
                {/* Hmmm */}
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2, boxShadow: "0 6px 20px -4px rgba(90, 110, 127, 0.15)" }} 
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center justify-center gap-1.5 px-3.5 py-1.5 border border-[#cbd5e1] rounded-full text-[#5a6e7f] bg-[#F8FAFC] hover:bg-[#e2e8f0]/40 transition-all duration-300 whitespace-nowrap text-[12px] font-semibold cursor-pointer"
                >
                  <Meh className="w-3.5 h-3.5" />
                  <span>Hmmm</span>
                </motion.button>
                
                {/* Yêu */}
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2, boxShadow: "0 6px 20px -4px rgba(227, 91, 91, 0.2)" }} 
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center justify-center gap-1.5 px-3.5 py-1.5 border border-[#fca5a5] rounded-full text-[#e35b5b] bg-[#FEF2F2] hover:bg-[#fed7d7]/40 transition-all duration-300 whitespace-nowrap text-[12px] font-semibold cursor-pointer"
                >
                  <Heart className="w-3.5 h-3.5" />
                  <span>Yêu</span>
                </motion.button>
                
                {/* Hay */}
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2, boxShadow: "0 6px 20px -4px rgba(245, 166, 35, 0.2)" }} 
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center justify-center gap-1.5 px-3.5 py-1.5 border border-[#fde047] rounded-full text-[#f5a623] bg-[#FFFBEB] hover:bg-[#fef08a]/40 transition-all duration-300 whitespace-nowrap text-[12px] font-semibold cursor-pointer"
                >
                  <Star className="w-3.5 h-3.5" />
                  <span>Hay</span>
                </motion.button>
                
                {/* Wow! */}
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2, boxShadow: "0 6px 20px -4px rgba(46, 204, 113, 0.2)" }} 
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center justify-center gap-1.5 px-3.5 py-1.5 border border-[#86efac] rounded-full text-[#2ecc71] bg-[#F0FDF4] hover:bg-[#d1fae5]/40 transition-all duration-300 whitespace-nowrap text-[12px] font-semibold cursor-pointer"
                >
                  <Smile className="w-3.5 h-3.5" />
                  <span>Wow!</span>
                </motion.button>
                
                {/* Haha */}
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2, boxShadow: "0 6px 20px -4px rgba(232, 100, 166, 0.2)" }} 
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center justify-center gap-1.5 px-3.5 py-1.5 border border-[#fbcfe8] rounded-full text-[#e864a6] bg-[#FDF2F8] hover:bg-[#fce7f3]/40 transition-all duration-300 whitespace-nowrap text-[12px] font-semibold cursor-pointer"
                >
                  <Smile className="w-3.5 h-3.5" />
                  <span>Haha</span>
                </motion.button>
              </div>

              {/* Bottom Layer: "Thích là share" Handwriting text, curved arrow & 7 circle social sharing icons */}
              <div id="social-share-container" className="relative flex flex-col items-center justify-center w-full mt-4 sm:mt-5 px-2">
                <div className="relative w-full max-w-[420px] flex flex-col items-start justify-center">
                  
                  {/* Heading container containing the text & hand-drawn arrow, aligned with left padding to place text snugly above */}
                  <motion.div 
                    whileHover="hover"
                    className="relative flex items-center mb-1.5 pl-0.5 select-none h-6 cursor-pointer group"
                  >
                    {/* Absolute hand-drawn curly arrow pointing at the Facebook icon */}
                    <motion.svg 
                      id="hand-drawn-arrow"
                      className="absolute left-[-26px] top-[-22px] w-[42px] h-[75px] text-red-500 select-none pointer-events-none hidden sm:block z-20" 
                      viewBox="0 0 54 96" 
                      fill="none" 
                      stroke="currentColor" 
                      animate={{
                        y: [0, -3, 0],
                        x: [0, 0.5, 0],
                        rotate: [0, -0.5, 0.5, 0]
                      }}
                      transition={{
                        duration: 3.2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      variants={{
                        hover: {
                          x: [0, -4, 8, 0],
                          y: [0, -1, 3, 0],
                          rotate: [0, -2, 2, 0],
                          scale: [1, 0.96, 1.12, 1],
                          transition: { 
                            duration: 0.65, 
                            times: [0, 0.2, 0.6, 1],
                            ease: "easeInOut"
                          }
                        }
                      }}
                    >
                      {/* Under-sketch: Light glowing ambient path for calligraphic texture */}
                      <motion.path 
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.25 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-red-400 blur-[0.5px]"
                        d="M 32,26 C 20,8 4,14 4,46 C 4,64 12,74 24,74" 
                      />

                      {/* One Clean Calligraphic Arrow Stem */}
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M 32,26 C 20,8 4,14 4,46 C 4,64 12,74 24,74" 
                      />
                      
                      {/* Under-sketch: Light glowing ambient arrowhead */}
                      <motion.path 
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.25 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, ease: "easeOut", delay: 0.85 }}
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-red-400 blur-[0.5px]"
                        d="M 16,67 L 24,74 L 16,81" 
                      />

                      {/* Single Clean Arrowhead Pointing Right at the Facebook icon with safe clearance */}
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, ease: "easeOut", delay: 0.85 }}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M 16,67 L 24,74 L 16,81" 
                      />
                    </motion.svg>

                    <span className={`text-red-500 text-[20px] sm:text-[23px] font-bold ${caveat.className} select-none leading-none tracking-wide mt-0.5 transition-all duration-300 origin-left group-hover:text-red-600 group-hover:rotate-[-1deg]`}>
                      <motion.span
                        variants={{
                          hover: {
                            scale: 1.05,
                            transition: { type: "spring", stiffness: 300, damping: 12 }
                          }
                        }}
                        className="inline-block"
                      >
                        Thích là share:
                      </motion.span>
                    </span>
                  </motion.div>

                  {/* 7 Circle Social Sharing Icons with compact, tight spacing */}
                  <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-2.5 w-full pl-0.5 mt-0.5">
                    
                    {/* 1. Facebook Button */}
                    <motion.button 
                      id="share-fb-btn"
                      onClick={() => {
                        if (typeof window !== "undefined") {
                          window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, "_blank", "width=600,height=400");
                        }
                      }}
                      whileHover={{ 
                        scale: 1.15, 
                        y: -4, 
                        rotate: 2, 
                        boxShadow: "0 10px 20px rgba(24, 119, 242, 0.3)" 
                      }}
                      whileTap={{ scale: 0.93 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center cursor-pointer shadow-[0_3px_8px_rgba(24,119,242,0.15)]"
                      title="Chia sẻ lên Facebook"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </motion.button>

                    {/* 2. Messenger Button */}
                    <motion.button 
                      id="share-ms-btn"
                      onClick={() => {
                        if (typeof window !== "undefined") {
                          window.open(`https://www.facebook.com/dialog/send?link=${encodeURIComponent(currentUrl)}&app_id=291494419107518&redirect_uri=${encodeURIComponent(currentUrl)}`, "_blank", "width=600,height=400");
                        }
                      }}
                      whileHover={{ 
                        scale: 1.15, 
                        y: -4, 
                        rotate: -2, 
                        boxShadow: "0 10px 20px rgba(0, 132, 255, 0.3)" 
                      }}
                      whileTap={{ scale: 0.93 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="w-10 h-10 rounded-full bg-[#0084FF] text-white flex items-center justify-center cursor-pointer shadow-[0_3px_8px_rgba(0,132,255,0.15)]"
                      title="Gửi tin nhắn Messenger"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.91 1.448 5.498 3.71 7.153V22l3.415-1.874c.904.25 1.87.387 2.875.387 5.523 0 10-4.146 10-9.244S17.523 2 12 2zm1.09 12.443l-2.55-2.72-4.99 2.72 5.48-5.83 2.61 2.719 4.93-2.719-5.48 5.83z" />
                      </svg>
                    </motion.button>

                    {/* 3. LinkedIn Button */}
                    <motion.button 
                      id="share-li-btn"
                      onClick={() => {
                        if (typeof window !== "undefined") {
                          window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`, "_blank", "width=600,height=500");
                        }
                      }}
                      whileHover={{ 
                        scale: 1.15, 
                        y: -4, 
                        rotate: 2, 
                        boxShadow: "0 10px 20px rgba(10, 102, 194, 0.3)" 
                      }}
                      whileTap={{ scale: 0.93 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="w-10 h-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center cursor-pointer shadow-[0_3px_8px_rgba(10,102,194,0.15)]"
                      title="Chia sẻ lên LinkedIn"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </motion.button>

                    {/* 4. Email Button */}
                    <motion.a 
                      id="share-email-btn"
                      href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(`Xem chi tiết bài viết: ${article.title}\nLink: ${currentUrl}`)}`}
                      whileHover={{ 
                        scale: 1.15, 
                        y: -4, 
                        rotate: -2, 
                        boxShadow: "0 10px 20px rgba(142, 142, 147, 0.3)" 
                      }}
                      whileTap={{ scale: 0.93 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="w-10 h-10 rounded-full bg-[#8E8E93] text-white flex items-center justify-center cursor-pointer shadow-[0_3px_8px_rgba(142,142,147,0.15)]"
                      title="Gửi qua Email"
                    >
                      <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </motion.a>

                    {/* 5. Print Button */}
                    <motion.button 
                      id="share-print-btn"
                      onClick={() => {
                        if (typeof window !== "undefined") {
                          window.print();
                        }
                      }}
                      whileHover={{ 
                        scale: 1.15, 
                        y: -4, 
                        rotate: 2, 
                        boxShadow: "0 10px 20px rgba(78, 78, 78, 0.3)" 
                      }}
                      whileTap={{ scale: 0.93 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="w-10 h-10 rounded-full bg-[#4E4E4E] text-white flex items-center justify-center cursor-pointer shadow-[0_3px_8px_rgba(78,78,78,0.15)]"
                      title="In bài viết"
                    >
                      <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" />
                      </svg>
                    </motion.button>

                    {/* 6. Copy Link Button */}
                    <div className="relative font-sans text-xs">
                      <motion.button 
                        id="share-copy-btn"
                        onClick={handleCopyLink}
                        whileHover={{ 
                          scale: 1.15, 
                          y: -4, 
                          rotate: -2, 
                          boxShadow: "0 10px 20px rgba(62, 62, 62, 0.3)" 
                        }}
                        whileTap={{ scale: 0.93 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="w-10 h-10 rounded-full bg-[#3E3E3E] text-white flex items-center justify-center cursor-pointer shadow-[0_3px_8px_rgba(62,62,62,0.15)]"
                        title="Sao chép liên kết"
                      >
                        <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24" style={{ transform: "rotate(-45deg)" }}>
                          <path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v-2H8v2z" />
                        </svg>
                      </motion.button>

                      {/* Popover copied indicator */}
                      {copied && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10, scale: 0.8 }}
                          animate={{ opacity: 1, y: -42, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.8 }}
                          className="absolute left-1/2 -translate-x-1/2 bg-[#1a1a1a] text-white text-[11px] py-1 px-2.5 rounded shadow-lg whitespace-nowrap z-30 font-sans pointer-events-none"
                        >
                          Đã sao chép!
                        </motion.div>
                      )}
                    </div>

                    {/* 7. Zalo Button */}
                    <motion.button 
                      id="share-zalo-btn"
                      onClick={() => {
                        if (typeof window !== "undefined") {
                          window.open(`https://sp.zalo.me/share_to_zalo/index.html?url=${encodeURIComponent(currentUrl)}`, "_blank", "width=600,height=500");
                        }
                      }}
                      whileHover={{ 
                        scale: 1.15, 
                        y: -4, 
                        rotate: 2, 
                        boxShadow: "0 10px 20px rgba(62, 161, 53, 0.3)" 
                      }}
                      whileTap={{ scale: 0.93 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="w-10 h-10 rounded-full bg-[#3EA135] text-white flex items-center justify-center cursor-pointer shadow-[0_3px_8px_rgba(62, 161, 53, 0.15)]"
                      title="Chia sẻ liên kết"
                    >
                      <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M4 12c4-4 12-4 16 0" />
                        <path d="M4 12c4 4 12 4 16 0" />
                        <circle cx="8" cy="12" r="2.5" fill="currentColor" />
                        <circle cx="16" cy="12" r="2.5" fill="currentColor" />
                      </svg>
                    </motion.button>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        </div>
        
      </article>

    </main>
  );
}
