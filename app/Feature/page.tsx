"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Feature() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".card", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out ",
        pin: true,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div className=" text-white p-8">
      {/* قسم الكروت */}
      <div className="py-24">
        <h2 className="text-3xl font-bold text-center mb-12">مميزات المنصة</h2>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4"
        >
          <div className="card bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl">
            <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center font-bold text-xl mb-4">
              01
            </div>
            <h3 className="text-xl font-bold mb-2">سرعة الأداء</h3>
            <p className="text-slate-400 text-sm">
              تحميل سريع وتجاوب ممتازة مع كافة الأجهزة والمقاسات.
            </p>
          </div>

          <div className="card bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl">
            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-lg flex items-center justify-center font-bold text-xl mb-4">
              02
            </div>
            <h3 className="text-xl font-bold mb-2">تصميم متجاوب</h3>
            <p className="text-slate-400 text-sm">
              واجهات مستخدم حديثة تضمن أفضل تجربة للمستخدم.
            </p>
          </div>

          <div className="card bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl">
            <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-lg flex items-center justify-center font-bold text-xl mb-4">
              03
            </div>
            <h3 className="text-xl font-bold mb-2">أنيميشن انسيابي</h3>
            <p className="text-slate-400 text-sm">
              تفاعلات حركية ممتازة باستخدام GSAP لرفع جودة الموقع.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
