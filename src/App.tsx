/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { User, Sparkles, RefreshCcw, Heart, Share2, Info } from "lucide-react";

export default function App() {
  const characters = [
    {
      id: "eccentric",
      name: "Toshmat 'Firfir'",
      title: "G'aroyib Shaxs (Exciting Person)",
      description: "Doimo harakatda, miyasi firfir aylanadigan, dunyoga boshqacha ko'z bilan qaraydigan inson. Uning energiyasi har qanday joyni quvvatga to'ldiradi.",
      image: "https://images.unsplash.com/photo-1541577141970-eebc83ebe30e?auto=format&fit=crop&q=80&w=800",
      color: "bg-yellow-400",
      tag: "Shovvoz"
    },
    {
      id: "resilient",
      name: "Abdu 'Zahmat'",
      title: "Sadoqatli Ruh (Resilient Spirit)",
      description: "Qiyinchiliklar ichida ulg'aygan, lekin qalbida metindek irodasi bor inson. Uning ko'zlarida hayotning achchiq-chuchugi va mardlik aks etgan.",
      image: "https://images.unsplash.com/photo-1523480717984-24cba35ae1ee?auto=format&fit=crop&q=80&w=800",
      color: "bg-blue-600",
      tag: "Bardosh"
    }
  ];

  return (
    <div className="min-h-screen bg-[#111] text-white font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden">
      {/* Background Decorative Spinners */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-96 h-96 border-[0.5px] border-dashed border-white rounded-full flex items-center justify-center"
        >
          <RefreshCcw className="w-10 h-10 text-white" />
        </motion.div>
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] border-[1px] border-dashed border-yellow-400 rounded-full"
        />
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 md:p-12 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="bg-yellow-400 p-2 rounded-full"
          >
            <RefreshCcw className="w-6 h-6 text-black" />
          </motion.div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic">
            Firfirboq
          </h1>
        </div>
        <nav className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest opacity-60">
          <a href="#" className="hover:opacity-100 transition-opacity">Galereya</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Hikoyalar</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Aloqa</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-24">
        {/* Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24 md:mb-40"
        >
          <span className="text-yellow-400 font-mono text-sm mb-4 block underline">01 // TANISHUV</span>
          <h2 className="text-5xl md:text-8xl font-black leading-none mb-8">
            HAYOT CO'CHALARI <br />
            VA <span className="text-yellow-400">YASHIRIN</span> QAHRAMONLAR
          </h2>
          <p className="max-w-2xl text-xl text-white/60 leading-relaxed italic">
            Dunyo faqat ranglardan iborat emas, u taqdirlardan iborat. "Firfirboq" loyihasi bizning atrofimizdagi noodatiy, ba'zan unutilgan, lekin hammasining o'z o'rni bor insonlarni namoyish etadi.
          </p>
        </motion.div>

        {/* Character Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {characters.map((char, index) => (
            <motion.div
              key={char.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border-2 border-white/5 grayscale group-hover:grayscale-0 transition-all duration-700">
                <img 
                  src={char.image} 
                  alt={char.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                {/* Float elements */}
                <div className="absolute top-6 left-6">
                  <span className={`px-4 py-1 rounded-full text-black font-bold text-xs uppercase tracking-tighter ${char.color}`}>
                    {char.tag}
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-3xl md:text-4xl font-bold">{char.name}</h3>
                  <div className="h-[2px] flex-grow bg-white/10" />
                </div>
                <p className="text-yellow-400 font-mono text-sm mb-4 uppercase tracking-tighter italic">{char.title}</p>
                <p className="text-lg text-white/60 leading-relaxed border-l-2 border-yellow-400 pl-6 py-2">
                  {char.description}
                </p>

                <div className="mt-8 flex gap-4">
                  <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-yellow-400 hover:text-black transition-colors">
                    <Heart className="w-4 h-4" /> Yoqdi
                  </button>
                  <button className="flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full font-bold text-sm hover:border-white transition-colors">
                    <Share2 className="w-4 h-4" /> Ulashish
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-40 p-12 md:p-24 bg-white/5 rounded-[40px] border border-white/10 relative overflow-hidden"
        >
          <div className="relative z-10">
            <Info className="w-12 h-12 text-yellow-400 mb-8" />
            <h3 className="text-4xl md:text-6xl font-black mb-8 italic">BIZNING FALSAFA</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h4 className="font-bold text-yellow-400 mb-4 uppercase">Farqlilik</h4>
                <p className="text-white/50 text-sm italic">Hamma o'zicha universal va har kimning o'z "jinni"ligi bor. Biz buni bayram qilamiz.</p>
              </div>
              <div>
                <h4 className="font-bold text-yellow-400 mb-4 uppercase">Haqiqat</h4>
                <p className="text-white/50 text-sm italic">Qashshoqlik rangda emas, iroda yo'qligida. Biz chinakam irodani qidiramiz.</p>
              </div>
              <div>
                <h4 className="font-bold text-yellow-400 mb-4 uppercase">Doimiy aylanma</h4>
                <p className="text-white/50 text-sm italic">Hayot - bu firfirboq. Kecha tepada bo'lganing, bugun pastda bo'lishing mumkin.</p>
              </div>
            </div>
          </div>
          
          {/* Decorative spinning background */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] border-[1px] border-white/5 rounded-full"
          />
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="p-12 border-t border-white/10 text-center opacity-40 text-xs font-mono uppercase tracking-[0.3em]">
        &copy; 2026 Firfirboq Olam. Barcha huquqlar fir-fir aylanmoqda.
      </footer>
    </div>
  );
}
