import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { VoteIcon, FlagIcon, MegaphoneIcon, EditIcon } from "lucide-react";

const ElectionRequests = () => {
  const navigate = useNavigate();

  const cardClasses =
    "w-80 h-80 bg-white bg-opacity-50 backdrop-blur-md rounded-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer";
  const iconClasses = "text-zait mb-4";
  const titleClasses = "text-2xl font-semibold mb-4 text-black";
  const textClasses = "text-black";

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-gray-350 text-white">
      <Header />

      <main className="p-8 my-8 mb-28">
        <h1 className="text-4xl font-bold text-center mb-12">
          قدم طلبك لإنشاء قائمة إنتخابية
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 justify-evenly mr-64">
          <div className={cardClasses} onClick={() => navigate("/local-form")}>
            <div className="p-6 text-center h-full flex flex-col items-center justify-center">
              <VoteIcon size={48} className={iconClasses} />
              <h2 className={titleClasses}>طلب إنشاء قائمة محلية</h2>
              <p className={textClasses}>
                قدم طلبًا للمشاركة في الانتخابات المحلية وكن صوتًا لمجتمعك
              </p>
            </div>
          </div>

          <div className={cardClasses} onClick={() => navigate("/party-form")}>
            <div className="p-6 text-center h-full flex flex-col items-center justify-center">
              <FlagIcon size={48} className={iconClasses} />
              <h2 className={titleClasses}>طلب إنشاء قائمة حزبية</h2>
              <p className={textClasses}>
                قدم طلبًا للمشاركة في الانتخابات الحزبية وشارك في تشكيل مستقبل
                الأردن
              </p>
            </div>
          </div>

          <div className={cardClasses} onClick={() => navigate("/ads")}>
            <div className="p-6 text-center h-full flex flex-col items-center justify-center">
              <MegaphoneIcon size={48} className={iconClasses} />
              <h2 className={titleClasses}>طلب إعلان</h2>
              <p className={textClasses}>
                قدم طلبًا للإعلان عن حملتك الانتخابية لجذب الناخبين وزيادة الوعي
              </p>
            </div>
          </div>

          <div
            className={cardClasses}
            onClick={() => navigate("/create-debate")}
          >
            <div className="p-6 text-center h-full flex flex-col items-center justify-center">
              <EditIcon size={48} className={iconClasses} />
              <h2 className={titleClasses}>إنشاء مناظرة</h2>
              <p className={textClasses}>
                قم بإنشاء مناظرة لمناقشة القضايا المهمة وجذب اهتمام الناخبين
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ElectionRequests;
