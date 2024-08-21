import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen">
        <main className="container mx-auto px-4 py-8">
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8 mx-4 md:mx-24">
            <h2 className="text-4xl font-bold text-center mb-8 text-[#01332A]">
              من نحن
            </h2>
            <div className="space-y-8">
              <p className="text-xl text-gray-700 leading-relaxed text-center">
                نحن <span className="font-bold text-[#01332A]">VoteJO</span>{" "}
                مجموعة متخصصة تعمل بالتعاون الوثيق مع الهيئة المستقلة للانتخاب
                في الأردن. مهمتنا الأساسية هي ضمان نزاهة وشفافية وكفاءة العملية
                الانتخابية، وتعزيز المشاركة الديمقراطية لكل مواطن أردني. نسعى
                جاهدين لتقديم الدعم الفني والتقني من خلال أحدث الحلول الرقمية
                التي تضمن سير العملية الانتخابية بشكل سلس وآمن. نحن نؤمن بأن كل
                صوت له قيمة، ولذلك نركز على تسهيل وصول المواطنين إلى صناديق
                الاقتراع وضمان أن يكون لكل فرد القدرة على التعبير عن رأيه بكل
                حرية. نعمل بجد لنشر الوعي حول أهمية المشاركة في الانتخابات
                وتعزيز الثقة بالنظام الديمقراطي من خلال المبادرات والبرامج
                التوعوية التي تطمح إلى بناء مجتمع واعٍ وفاعل في الحياة السياسية.
              </p>

              <div className="text-[#01332A] p-6 rounded-lg border my-2">
                <h3 className="text-2xl font-semibold text-center mb-6">
                  دورنا في العملية الانتخابية
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-[#01332A] text-white p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-center">
                      الدعم التقني
                    </h4>
                    <ul className="list-none space-y-3">
                      <li className="flex items-start">
                        <span className="text-2xl ml-2">•</span>
                        <span>توفير وإدارة أنظمة التصويت الإلكتروني</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-2xl ml-2">•</span>
                        <span>ضمان أمن وسلامة البيانات الانتخابية</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-2xl ml-2">•</span>
                        <span>تقديم الدعم الفني في مراكز الاقتراع</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-[#01332A] text-white p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-center">
                      التوعية والتثقيف
                    </h4>
                    <ul className="list-none space-y-3">
                      <li className="flex items-start">
                        <span className="text-2xl ml-2">•</span>
                        <span>تنظيم حملات توعية للناخبين</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-2xl ml-2">•</span>
                        <span>توفير معلومات دقيقة عن العملية الانتخابية</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-2xl ml-2">•</span>
                        <span>تشجيع المشاركة الفعالة في الانتخابات</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed text-center mt-8 bg-gray-100 p-6 rounded-lg">
                نعمل جنبًا إلى جنب مع الهيئة المستقلة للانتخاب لضمان سير العملية
                الانتخابية بسلاسة وشفافية. من خلال خبرتنا التقنية ومعرفتنا
                العميقة بالعملية الانتخابية، نساهم في تعزيز الثقة في النظام
                الديمقراطي الأردني. نحن ملتزمون بتقديم الحلول التقنية المتقدمة
                التي تضمن دقة وسرعة فرز الأصوات، مع مراعاة أعلى معايير الأمان
                والخصوصية. هدفنا هو أن يشعر كل مواطن بأن صوته مهم وأنه يساهم
                بشكل فعّال في رسم مستقبل البلاد. نحن هنا لضمان أن تكون العملية
                الانتخابية عادلة وشاملة، وتعكس الإرادة الحقيقية للشعب الأردني.
              </p>
            </div>
          </section>

          {/* New section: Importance of Voting */}
          <section className="bg-[#01332A] text-white rounded-lg shadow-lg p-8 mb-8 mx-24">
            <h2 className="text-3xl font-bold text-center mb-6">
              أهمية صوتك في الانتخابات
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-3">لماذا يجب أن تصوت؟</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>صوتك يشكل مستقبل الأردن</li>
                  <li>المشاركة في صنع القرار السياسي</li>
                  <li>تعزيز الديمقراطية وتمثيل جميع فئات المجتمع</li>
                  <li>المساهمة في تحقيق التغيير الإيجابي</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">كيف تستعد للتصويت؟</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>تأكد من تسجيلك في سجل الناخبين</li>
                  <li>تعرف على المرشحين وبرامجهم الانتخابية</li>
                  <li>احضر بطاقة الهوية الشخصية يوم الانتخاب</li>
                  <li>كن على دراية بموقع مركز الاقتراع الخاص بك</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 mx-24">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src="https://euromedmonitor.org/uploads/2020/9/jordan3.jpg"
                alt="Jordanian citizens voting"
                className="w-full h-48 rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">مشاركة المواطنين</h3>
              <p className="text-gray-700">
                نحن نشجع جميع المواطنين الأردنيين على المشاركة الفعالة في
                العملية الانتخابية. من خلال الإدلاء بأصواتهم، يلعب المواطنون
                دورًا حاسمًا في تشكيل مستقبل البلاد وتحديد القضايا التي تهمهم.
                نؤمن بأن المشاركة الواسعة في الانتخابات هي العمود الفقري
                لديمقراطية قوية وصحية، ولذلك نسعى إلى تسهيل الوصول إلى مراكز
                الاقتراع وتوفير المعلومات الضرورية حول العملية الانتخابية. كما
                أننا نعمل على توعية المواطنين بأهمية أصواتهم وكيفية تأثيرها في
                اتخاذ القرارات على المستوى الوطني والمحلي. كل صوت له قيمة، ونحن
                هنا لضمان أن تُسمع أصوات الجميع بشكل عادل ومنصف.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src="https://rejolut.com/wp-content/uploads/2022/02/voting7.png"
                alt="Electronic voting system"
                className="w-full h-48 rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">التكنولوجيا الحديثة</h3>
              <p className="text-gray-700">
                نستخدم أحدث التقنيات لضمان دقة وسرعة عملية التصويت والفرز. نعتمد
                على حلول تكنولوجية متقدمة لضمان أن تكون كل خطوة في العملية
                الانتخابية مؤمنة وسلسة، بدءًا من تسجيل الناخبين وحتى إعلان
                النتائج. تتيح لنا الأنظمة الرقمية التي نستخدمها تحقيق شفافية
                عالية وتقليل احتمالات الخطأ البشري، مما يضمن أن تكون نتائج
                الانتخابات معبرة بدقة عن إرادة الشعب. كما نعمل على تحديث منصاتنا
                باستمرار للتكيف مع التحديات الجديدة وضمان أن تظل العملية
                الانتخابية متقدمة وآمنة. من خلال اعتماد التكنولوجيا، نطمح إلى
                تعزيز الثقة في النظام الانتخابي وتمكين المواطنين من المشاركة بكل
                سهولة وفاعلية.
              </p>
            </div>
          </section>

          {/* New section: Electoral Process Timeline */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8 mx-24">
            <h2 className="text-3xl font-bold text-center mb-6">
              المراحل الرئيسية للعملية الانتخابية
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-[#01332A] text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 ml-2">
                  1
                </div>
                <p className="text-lg">
                  <strong>تسجيل الناخبين:</strong> تأكد من تحديث بياناتك في سجل
                  الناخبين
                </p>
              </div>
              <div className="flex items-center">
                <div className="bg-[#01332A] text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 ml-2">
                  2
                </div>
                <p className="text-lg">
                  <strong>فترة الدعاية الانتخابية:</strong> تعرف على المرشحين
                  وبرامجهم
                </p>
              </div>
              <div className="flex items-center">
                <div className="bg-[#01332A] text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 ml-2">
                  3
                </div>
                <p className="text-lg">
                  <strong>يوم الاقتراع:</strong> أدلِ بصوتك في مركز الاقتراع
                  المخصص لك
                </p>
              </div>
              <div className="flex items-center">
                <div className="bg-[#01332A] text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 ml-2">
                  4
                </div>
                <p className="text-lg">
                  <strong>فرز الأصوات:</strong> متابعة عملية الفرز بشفافية
                </p>
              </div>
              <div className="flex items-center">
                <div className="bg-[#01332A] text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 ml-2">
                  5
                </div>
                <p className="text-lg">
                  <strong>إعلان النتائج:</strong> الإعلان الرسمي عن نتائج
                  الانتخابات
                </p>
              </div>
            </div>
          </section>

          <section className="bg-[#01332A] text-white rounded-lg shadow-lg p-8 mb-8 mx-12">
            <h2 className="text-3xl font-bold text-center mb-4">
              اعرف اكثر عن قوانين الانتخابات وعن الشركاء في العملية الالكترونية
            </h2>
            <p className="text-lg text-center">
              نحن نلتزم بالشفافية والوضوح. اكتشف المزيد عن قوانين الانتخابات
              وتعرف على شركائنا في تنفيذ العملية الانتخابية الإلكترونية.
            </p>
            <div className="text-center mt-6">
              <a
                href="https://www.iec.jo/ar/%D8%A7%D9%84%D8%A3%D8%B3%D8%A6%D9%84%D8%A9-%D8%A7%D9%84%D8%B4%D8%A7%D8%A6%D8%B9%D8%A9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white text-[#01332A] px-6 py-2 rounded-full font-bold hover:bg-blue-100 transition duration-300">
                  اقرأ المزيد
                </button>
              </a>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-16">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src="https://osr.statisticsauthority.gov.uk/wp-content/uploads/2022/08/intelligent_transparency-scaled.jpeg"
                alt="Transparency icon"
                className="w-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-center mb-2">الشفافية</h3>
              <p className="text-gray-700 text-center">
                نضمن الشفافية في كل مرحلة من مراحل العملية الانتخابية، من
                التخطيط إلى إعلان النتائج. نعمل على توفير معلومات واضحة ودقيقة
                للجميع، مما يعزز الثقة والمصداقية.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src="https://i.pinimg.com/564x/30/cc/bf/30ccbf67947a381d59ad531806d52ee3.jpg"
                alt="Integrity icon"
                className="w-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-center mb-2">النزاهة</h3>
              <p className="text-gray-700 text-center">
                نعمل بنزاهة تامة لضمان ثقة الشعب في نتائج الانتخابات. نلتزم
                بمعايير عالية من الأخلاق والمصداقية في كل خطوة، لضمان أن تعكس
                النتائج الإرادة الحقيقية للمواطنين.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src="https://electionbuddy.com/wp-content/uploads/2022/01/Voting-image-6-scaled.jpg"
                alt="Accessibility icon"
                className="w-full h-[16rem] object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-center mb-2">
                سهولة الوصول
              </h3>
              <p className="text-gray-700 text-center">
                نسعى لجعل عملية التصويت سهلة ومتاحة لجميع المواطنين، من خلال
                توفير مراكز اقتراع مريحة وتقديم الدعم اللازم. نركز على إزالة أي
                عقبات قد تواجه الناخبين لضمان مشاركتهم الفعالة في العملية
                الانتخابية.
              </p>
            </div>
          </section>

          {/* New section: Call to Action */}
          <section className="bg-[#01332A] text-white rounded-lg shadow-lg p-8 mb-8 mx-24 text-center mt-8">
            <h2 className="text-3xl font-bold mb-4">
              شارك في بناء مستقبل الأردن
            </h2>
            <p className="text-xl mb-6">
              صوتك أمانة وفرصة للتغيير. كن جزءًا من العملية الديمقراطية وساهم في
              صنع القرار.
            </p>

            <button className="bg-white text-[#01332A] px-6 py-2 rounded-full font-bold hover:bg-blue-100 transition duration-300">
              صًوت الآن
            </button>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
