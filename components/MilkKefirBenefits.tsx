import React from "react";
import { Info, ShieldCheck, Activity, AlertCircle, Droplet } from "lucide-react";

export const MilkKefirBenefits: React.FC = () => {
  return (
    <section className="kefir-benefits w-full mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-stone-100">
      {/* Header Section with a subtle decorative background */}
      <header className="relative bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-8 md:px-10 md:py-10 border-b border-indigo-100">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="p-2 bg-white rounded-lg shadow-sm text-blue-600">
              <Droplet size={24} />
            </span>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
              Milk Kefir（牛奶克非爾）的健康益處
            </h1>
          </div>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed">
            Milk kefir 是由克非爾菌粒發酵牛奶而成的高益生菌飲品，研究顯示有潛力支持腸道、免疫與代謝健康。
          </p>
        </div>
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-20 rounded-full blur-2xl"></div>
      </header>

      <div className="p-6 md:p-10 space-y-10">
        {/* Intro Section */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
            <Info className="w-5 h-5 text-indigo-500" />
            什麼是 Milk Kefir？
          </h2>
          <p className="text-gray-700 leading-relaxed bg-stone-50 p-4 rounded-lg border border-stone-100">
            Milk kefir 是以「克非爾菌粒」發酵牛奶製成，包含多種乳酸菌與酵母，被視為具有功能性與健康潛力的發酵乳製品。
          </p>
        </section>

        {/* Nutritional Content */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
            <Activity className="w-5 h-5 text-green-500" />
            主要營養成分
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <h3 className="font-semibold text-green-800 mb-2">巨量營養素</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                <li>提供優質蛋白質與乳脂肪，有助增加飽足感。</li>
                <li>每 100 ml 約含 3–4 g 蛋白質與 2–4 g 脂肪。</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <h3 className="font-semibold text-green-800 mb-2">微量營養素</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                <li>含鈣、磷、鎂、鉀等礦物質。</li>
                <li>富含維生素 B 群與部分脂溶性維生素。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Health Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-500" />
              腸道與消化健康
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm leading-relaxed marker:text-blue-400">
              <li>有助增加腸道中乳酸菌與雙歧桿菌，改善腸道菌相平衡並支持消化功能。</li>
              <li>發酵會分解部分乳糖，對部分乳糖不耐者通常比鮮奶更容易被接受。</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-purple-500" />
              免疫與發炎調節
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm leading-relaxed marker:text-purple-400">
              <li>研究指出 kefir 中的益生菌與其代謝物可影響免疫相關指標，例如分泌型 IgA 與特定細胞激素。</li>
              <li>kefir 產生的多醣與生物活性胜肽被認為具有抗菌、抗發炎與潛在抗腫瘤相關作用。</li>
            </ul>
          </section>
        </div>

        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
            <Activity className="w-5 h-5 text-orange-500" />
            代謝健康與骨骼支持
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed marker:text-orange-400">
            <li>部分臨床試驗顯示，規律飲用 kefir 可能有助改善血糖與血脂指標，特別是在代謝異常或血脂偏高族群。</li>
            <li>作為良好鈣來源，加上發酵產生的生物活性成分，kefir 在骨質疏鬆患者試驗中對骨代謝與骨密度有正向影響。</li>
          </ul>
        </section>

        {/* Warning / Tips Section */}
        <section className="bg-amber-50 p-6 rounded-xl border border-amber-100">
          <h2 className="text-xl font-bold mb-4 text-amber-800 flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            飲用時的小提醒
          </h2>
          <ul className="space-y-3 text-sm text-amber-900">
            <li className="flex items-start gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0"></span>
              建議從少量開始（例如 50–100 ml），確認身體反應後再逐步增加。
            </li>
            <li className="flex items-start gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0"></span>
              乳製品蛋白過敏、嚴重免疫低下或特定慢性疾病患者，飲用前應先諮詢專業醫師。
            </li>
            <li className="flex items-start gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0"></span>
              儘量選擇無過量添加糖與添加物的產品，或自行發酵以維持較高活菌與營養品質。
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
};