import React, {useState} from 'react';
import {
    ArrowRight,
    Binary,
    BookOpen,
    Clock,
    CloudRain,
    Cpu,
    Download,
    Fingerprint,
    GitMerge,
    Hash,
    Heart,
    Layers,
    LayoutGrid,
    List,
    RefreshCw,
    Rocket,
    Search,
    Server,
    ShieldCheck,
    Terminal,
    Trash2,
    Workflow
} from 'lucide-react';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [viewMode, setViewMode] = useState('grid');

    const topics = [
        {
            id: 1,
            title: 'Dimensional Latency',
            subtitle: 'Relativitas Waktu dalam Arsitektur Terdistribusi',
            verse: 'QS. Al-Ma\'arij: 4',
            verseText: 'Malaikat-malaikat dan Jibril naik (menghadap) kepada Tuhan dalam sehari yang kadarnya lima puluh ribu tahun.',
            itConcept: 'Time Dilation, Latency, Async Processing',
            color: 'cyan',
            icon: <Clock size={24}/>,
            blogContent: (
                <>
                    <p className="mb-3">
                        <strong>Al-Qur'an:</strong> Ayat ini memberikan konstanta waktu yang spesifik, menyatakan bahwa
                        satu hari dalam dimensi Malaikat setara dengan 50.000 tahun dalam dimensi manusia.
                    </p>
                    <p className="mb-3">
                        <strong>Sains:</strong> Albert Einstein kemudian merumuskan Teori Relativitas Khusus,
                        membuktikan bahwa waktu itu relatif (Time Dilation) dan bergantung pada kecepatan objek serta
                        gravitasi.
                    </p>
                    <p>
                        <strong>Code:</strong> Dalam sistem terdistribusi, ini adalah masalah <strong>Latency</strong>.
                        Eksekusi di <em>backend</em> (Langit) bersifat instan, namun termanifestasi
                        secara <strong>Async</strong> dalam rentang waktu panjang di sisi <em>client</em> (Bumi).
                    </p>
                </>
            )
        },
        {
            id: 2,
            title: 'The Initial Deployment',
            subtitle: 'Decoupling Sistem dari Titik Singularity',
            verse: 'QS. Al-Anbiya: 30',
            verseText: '...bahwa langit dan bumi keduanya dahulu adalah suatu yang padu (ratqan), kemudian Kami pisahkan antara keduanya (fataqnahuma)...',
            itConcept: 'System Decoupling, Scalability, Initial Commit',
            color: 'orange',
            icon: <Rocket size={24}/>,
            blogContent: (
                <>
                    <p className="mb-3">
                        <strong>Al-Qur'an:</strong> Menggunakan terminologi presisi <em>Ratqan</em> (suatu yang
                        padu/monolitik) dan <em>Fataqnahuma</em> (pemisahan komponen) untuk menggambarkan awal
                        penciptaan.
                    </p>
                    <p className="mb-3">
                        <strong>Sains:</strong> Kosmologi modern menyebutnya <em>Big Bang Singularity</em>, di mana
                        seluruh materi, energi, dan ruang-waktu meledak dan mengembang dari satu titik densitas tak
                        terhingga.
                    </p>
                    <p>
                        <strong>Code:</strong> Ini adalah momen <strong>Initial Deployment</strong>. Sang Arsitek
                        melakukan <em>Decoupling</em> sistem monolitik menjadi miliaran <em>microservices</em> (galaksi)
                        agar sistem dapat melakukan <strong>Scaling</strong> tanpa batas.
                    </p>
                </>
            )
        },
        {
            id: 3,
            title: 'Cosmic Garbage Collection',
            subtitle: 'Manajemen Memori dan Eliminasi Entropi',
            verse: 'QS. At-Takwir: 15-16',
            verseText: 'Sungguh, Aku bersumpah demi bintang-bintang, yang beredar dan terbenam (menyapu).',
            itConcept: 'Garbage Collection, Hard Delete, Optimization',
            color: 'red',
            icon: <Trash2 size={24}/>,
            blogContent: (
                <>
                    <p className="mb-3">
                        <strong>Al-Qur'an:</strong> Mendeskripsikan fenomena bintang yang "bersembunyi" (Khunnas) dan
                        bergerak cepat "menyapu" (Kunnas) apa saja di sekitarnya.
                    </p>
                    <p className="mb-3">
                        <strong>Sains:</strong> Ini adalah karakteristik <em>Black Hole</em>. Gravitasinya begitu kuat
                        sehingga cahaya pun terhisap, membersihkan sisa-sisa bintang mati di ruang angkasa.
                    </p>
                    <p>
                        <strong>Code:</strong> Fungsinya sama dengan <strong>Garbage Collector</strong>. Ia menjalankan
                        operasi <code className="bg-slate-800 px-1 rounded text-red-400">hard delete</code> pada objek
                        yang tidak terpakai untuk mencegah <em>memory leak</em> pada sistem semesta.
                    </p>
                </>
            )
        },
        {
            id: 4,
            title: 'Resource Rate Limiting',
            subtitle: 'Kontrol Aliran Sumber Daya Hidrologi',
            verse: 'QS. Az-Zukhruf: 11',
            verseText: 'Dan Yang menurunkan air dari langit menurut kadar (ukuran) yang diperlukan...',
            itConcept: 'Flow Control, Rate Limiting, Load Balancing',
            color: 'blue',
            icon: <CloudRain size={24}/>,
            blogContent: (
                <>
                    <p className="mb-3">
                        <strong>Al-Qur'an:</strong> Menekankan bahwa air diturunkan menurut "Kadar" (ukuran/takaran)
                        tertentu, bukan ditumpahkan sekaligus secara acak.
                    </p>
                    <p className="mb-3">
                        <strong>Sains:</strong> Siklus hidrologi menjaga keseimbangan ekosistem. Jika presipitasi
                        berlebihan, akan terjadi bencana ekologis; jika kurang, terjadi kekeringan.
                    </p>
                    <p>
                        <strong>Code:</strong> Ini adalah implementasi <strong>Rate Limiting</strong>. Sang Arsitek
                        mengatur <em>throughput</em> air agar sesuai dengan kapasitas <em>buffer</em> di Bumi, mencegah
                        terjadinya <strong>System Crash</strong> (banjir bandang).
                    </p>
                </>
            )
        },
        {
            id: 5,
            title: 'Multi-Layer Firewall',
            subtitle: 'Proteksi Infrastruktur dari Ancaman Eksternal',
            verse: 'QS. Al-Anbiya: 32',
            verseText: 'Dan Kami menjadikan langit itu sebagai atap yang terpelihara, sedang mereka berpaling dari tanda-tanda...',
            itConcept: 'WAF, Security Architecture, Packet Filtering',
            color: 'emerald',
            icon: <ShieldCheck size={24}/>,
            blogContent: (
                <>
                    <p className="mb-3">
                        <strong>Al-Qur'an:</strong> Menyebut langit (atmosfer) sebagai "atap yang terpelihara" yang
                        melindungi penghuni bumi dari bahaya luar.
                    </p>
                    <p className="mb-3">
                        <strong>Sains:</strong> Atmosfer Bumi menyaring radiasi ultraviolet yang mematikan dan membakar
                        ribuan meteoroid setiap harinya sebelum mencapai permukaan.
                    </p>
                    <p>
                        <strong>Code:</strong> Ini adalah <strong>Firewall</strong> fisik berlapis. Sistem
                        melakukan <strong>Packet Filtering</strong>: memblokir <em>traffic</em> berbahaya (Drop) dan
                        mengizinkan cahaya yang berguna (Allow) untuk masuk.
                    </p>
                </>
            )
        },
        {
            id: 6,
            title: 'Thread Safety Orchestration',
            subtitle: 'Konkurensi Tanpa Deadlock di Skala Makro',
            verse: 'QS. Al-Anbiya: 33',
            verseText: 'Dan masing-masing dari keduanya itu beredar di dalam garis edarnya.',
            itConcept: 'Concurrency, Thread Isolation, Scheduler',
            color: 'purple',
            icon: <GitMerge size={24}/>,
            blogContent: (
                <>
                    <p className="mb-3">
                        <strong>Al-Qur'an:</strong> Menegaskan bahwa setiap benda langit memiliki "garis edar"
                        masing-masing dan patuh pada lintasannya.
                    </p>
                    <p className="mb-3">
                        <strong>Sains:</strong> Hukum Kepler dan mekanika orbital menjelaskan bagaimana keseimbangan
                        gravitasi dan inersia menjaga planet tetap pada orbitnya tanpa bertabrakan.
                    </p>
                    <p>
                        <strong>Code:</strong> Solusi untuk masalah <strong>Concurrency</strong>. Sang Arsitek
                        menerapkan <strong>Thread Isolation</strong> sehingga miliaran proses dapat berjalan paralel
                        tanpa mengalami <em>Deadlock</em> atau <em>Race Condition</em>.
                    </p>
                </>
            )
        },
        {
            id: 7,
            title: 'Network Layer Encapsulation',
            subtitle: 'Subnet Privat pada Kedalaman Laut',
            verse: 'QS. An-Nur: 40',
            verseText: '...diselimuti ombak, yang di atasnya ombak (lagi), di atasnya (lagi) awan...',
            itConcept: 'Encapsulation, Network Layers, Private Scope',
            color: 'indigo',
            icon: <Layers size={24}/>,
            blogContent: (
                <>
                    <p className="mb-3">
                        <strong>Al-Qur'an:</strong> Menggambarkan struktur laut dalam yang gelap dengan metafora "ombak
                        di atas ombak", mengindikasikan adanya lapisan internal.
                    </p>
                    <p className="mb-3">
                        <strong>Sains:</strong> Oseanografi modern menemukan fenomena <em>Internal Waves</em> pada batas
                        lapisan air (pycnocline) yang memiliki densitas berbeda di kedalaman.
                    </p>
                    <p>
                        <strong>Code:</strong> Bentuk dari <strong>Data Encapsulation</strong>. Lapisan dalam diisolasi
                        sebagai <strong>Private Scope</strong> yang tidak dapat diakses oleh "Public Interface" (cahaya
                        matahari), memiliki protokol kehidupan tersendiri.
                    </p>
                </>
            )
        },
        {
            id: 8,
            title: 'Immutable Biometric Identity',
            subtitle: 'Integritas Primary Key dalam Database Manusia',
            verse: 'QS. Al-Qiyamah: 4',
            verseText: 'Bahkan Kami mampu menyusun (kembali) ujung jari-jarinya dengan sempurna.',
            itConcept: 'Primary Key, UUID, Hashing Algorithm',
            color: 'pink',
            icon: <Fingerprint size={24}/>,
            blogContent: (
                <>
                    <p className="mb-3">
                        <strong>Al-Qur'an:</strong> Menantang manusia dengan kemampuan-Nya merekonstruksi ujung jari,
                        mengisyaratkan keunikan pola tersebut.
                    </p>
                    <p className="mb-3">
                        <strong>Sains:</strong> Dactyloscopy membuktikan bahwa pola sidik jari bersifat unik untuk
                        setiap individu (bahkan kembar identik) dan persisten seumur hidup.
                    </p>
                    <p>
                        <strong>Code:</strong> Sidik jari adalah <strong>Primary Key (UUID)</strong>. Sistem database
                        Sang Pencipta menggunakan algoritma <em>hashing</em> biometrik yang menjamin tidak
                        adanya <strong>Data Collision</strong> antar miliaran <em>user</em>.
                    </p>
                </>
            )
        },
        {
            id: 9,
            title: 'External Dependency Injection',
            subtitle: 'Injeksi Modul Besi dari Sumber Eksternal',
            verse: 'QS. Al-Hadid: 25',
            verseText: 'Dan Kami menciptakan (menurunkan) besi yang padanya terdapat kekuatan yang hebat...',
            itConcept: 'Dependency Injection, Remote Module',
            color: 'slate',
            icon: <Download size={24}/>,
            blogContent: (
                <>
                    <p className="mb-3">
                        <strong>Al-Qur'an:</strong> Menggunakan kata <em>Anzalna</em> (Kami turunkan) untuk besi,
                        berbeda dengan unsur bumi lainnya, mengisyaratkan asal-usul eksternal.
                    </p>
                    <p className="mb-3">
                        <strong>Sains:</strong> Astrofisika mengonfirmasi bahwa besi tidak terbentuk di Bumi, melainkan
                        berasal dari ledakan Supernova bintang raksasa yang jatuh ke Bumi.
                    </p>
                    <p>
                        <strong>Code:</strong> Pola <strong>Dependency Injection</strong>. Bumi membutuhkan modul
                        eksternal "Besi" yang di-<em>inject</em> dari <em>remote repository</em> (luar angkasa) untuk
                        melengkapi fungsionalitas sistem intinya.
                    </p>
                </>
            )
        },
        {
            id: 10,
            title: 'State Restoration Lifecycle',
            subtitle: 'Serialisasi dan Re-instansiasi Objek',
            verse: 'QS. Ar-Rum: 27',
            verseText: 'Dan Dialah yang menciptakan (manusia) dari permulaan, kemudian mengulanginya (kembali)...',
            itConcept: 'Serialization, State Restore, Disaster Recovery',
            color: 'green',
            icon: <RefreshCw size={24}/>,
            blogContent: (
                <>
                    <p className="mb-3">
                        <strong>Al-Qur'an:</strong> Menjelaskan siklus penciptaan, kematian, dan kebangkitan kembali
                        sebagai sebuah proses pengulangan yang mudah bagi Allah.
                    </p>
                    <p className="mb-3">
                        <strong>Sains:</strong> Hukum Kekekalan Energi dan Informasi menyatakan bahwa informasi kuantum
                        secara teoritis tidak pernah hilang, hanya berubah bentuk.
                    </p>
                    <p>
                        <strong>Code:</strong> Siklus <strong>Serialization</strong> dan <strong>State
                        Restoration</strong>. Membangkitkan manusia (Restore) dari data yang tersimpan (Backup) secara
                        komputasi jauh lebih efisien daripada inisialisasi sistem dari nol.
                    </p>
                </>
            )
        }
    ];

    const getColorClass = (color) => {
        const colors = {
            cyan: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/5 hover:border-cyan-400 shadow-cyan-500/5',
            orange: 'text-orange-400 border-orange-500/20 bg-orange-500/5 hover:border-orange-400 shadow-orange-500/5',
            red: 'text-red-400 border-red-500/20 bg-red-500/5 hover:border-red-400 shadow-red-500/5',
            blue: 'text-blue-400 border-blue-500/20 bg-blue-500/5 hover:border-blue-400 shadow-blue-500/5',
            emerald: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-400 shadow-emerald-500/5',
            purple: 'text-purple-400 border-purple-500/20 bg-purple-500/5 hover:border-purple-400 shadow-purple-500/5',
            indigo: 'text-indigo-400 border-indigo-500/20 bg-indigo-500/5 hover:border-indigo-400 shadow-indigo-500/5',
            pink: 'text-pink-400 border-pink-500/20 bg-pink-500/5 hover:border-pink-400 shadow-pink-500/5',
            slate: 'text-slate-400 border-slate-500/20 bg-slate-500/5 hover:border-slate-400 shadow-slate-500/5',
            green: 'text-green-400 border-green-500/20 bg-green-500/5 hover:border-green-400 shadow-green-500/5'
        };
        return colors[color] || colors.cyan;
    };

    const filteredTopics = topics.filter(topic =>
        topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        topic.itConcept.toLowerCase().includes(searchTerm.toLowerCase()) ||
        topic.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div
            className="min-h-screen bg-[#0d1117] text-slate-300 font-sans selection:bg-cyan-900 selection:text-white pb-20 relative overflow-x-hidden">

            {/* Background Decor */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
                <div
                    className="absolute top-[-5%] left-[-5%] w-[30%] h-[30%] bg-blue-900/10 blur-[100px] rounded-full"></div>
                <div
                    className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-cyan-900/5 blur-[120px] rounded-full"></div>
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
                    size: '40px 40px',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Navbar */}
            <header className="sticky top-0 z-40 bg-[#0d1117]/80 backdrop-blur-xl border-b border-slate-800/60">
                <div
                    className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div
                            className="p-2 bg-slate-800 border border-slate-700 rounded shadow-lg group-hover:border-cyan-500 transition-colors">
                            <Server size={22} className="text-cyan-500"/>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-1 font-mono">
                                docs<span className="text-cyan-500">.</span>ngopikode
                            </h1>
                            <p className="text-[10px] text-slate-500 font-mono tracking-widest uppercase tracking-tighter">Al-Qur'an,
                                Science & Code Logic</p>
                        </div>
                    </div>

                    {/* Header Controls Removed (Moved below) */}
                </div>
            </header>

            {/* Hero Section */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 mt-16 mb-12 text-center">
                <div
                    className="inline-flex items-center gap-2 py-1 px-3 rounded bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono mb-6">
                    <Terminal size={12}/>
                    <span>$ git checkout feature/divine-architecture</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-black mb-4 text-white leading-tight tracking-tight">
                    The Great Architect: <br/>
                    Analisis <span className="text-cyan-500">Arsitektur</span> Alam Semesta.
                </h2>

                <h3 className="text-xl md:text-2xl font-medium text-slate-400 mb-8 font-mono">
                    // Sebuah Eksplorasi Teknis antara Sains dan Wahyu.
                </h3>

                <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto font-normal">
                    Sebagai <strong>Software Engineer</strong>, kita terlatih untuk melihat pola, struktur, dan
                    efisiensi dalam sebuah sistem. Namun, ketika kita membedah isyarat Al-Qur'an dan fenomena sains,
                    kita menemukan sebuah desain sistem yang melampaui kompleksitas kode manapun.
                    <br/><br/>
                    Dokumentasi ini adalah upaya untuk melakukan <em>reverse engineering</em> terhadap mekanisme alam
                    semesta; mencoba memahami logika Sang Pencipta melalui paradigma rekayasa perangkat lunak dan
                    arsitektur sistem.
                </p>

                <div className="mt-10 flex flex-wrap gap-4 justify-center">
                    <div
                        className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-900 px-4 py-2 rounded border border-slate-800 shadow-sm hover:border-cyan-500/50 transition-colors">
                        <Cpu size={14} className="text-cyan-400"/> Divine Logic
                    </div>
                    <div
                        className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-900 px-4 py-2 rounded border border-slate-800 shadow-sm hover:border-emerald-500/50 transition-colors">
                        <Binary size={14} className="text-emerald-400"/> Deterministic
                    </div>
                    <div
                        className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-900 px-4 py-2 rounded border border-slate-800 shadow-sm hover:border-purple-500/50 transition-colors">
                        <Workflow size={14} className="text-purple-400"/> High Availability
                    </div>
                </div>
            </div>

            {/* Control Bar (Search & Toggle) */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 mb-8">
                <div
                    className="flex flex-col md:flex-row justify-between items-center gap-4 bg-[#161b22] border border-slate-800 p-4 rounded-xl shadow-lg">
                    <div className="relative w-full md:w-96 group">
                        <Search
                            className="absolute left-4 top-2.5 text-slate-500 group-focus-within:text-cyan-400 transition-colors"
                            size={16}/>
                        <input
                            type="text"
                            placeholder="Filter architecture modules..."
                            className="w-full bg-slate-900 border border-slate-700/80 rounded py-2 pl-11 pr-5 text-sm focus:outline-none focus:border-cyan-500/50 transition-all text-slate-200 placeholder:text-slate-600 font-mono"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="flex bg-slate-900 border border-slate-700/80 rounded p-1">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-1.5 rounded transition-all flex items-center gap-2 px-3 ${viewMode === 'grid' ? 'bg-slate-800 text-cyan-400 shadow' : 'text-slate-500 hover:text-slate-300'}`}
                            title="Grid View"
                        >
                            <LayoutGrid size={16}/>
                            <span className="text-xs font-medium">Grid</span>
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-1.5 rounded transition-all flex items-center gap-2 px-3 ${viewMode === 'list' ? 'bg-slate-800 text-cyan-400 shadow' : 'text-slate-500 hover:text-slate-300'}`}
                            title="List View"
                        >
                            <List size={16}/>
                            <span className="text-xs font-medium">List</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>

                    {filteredTopics.map((topic) => (
                        <div
                            key={topic.id}
                            className={`group flex bg-[#161b22] border border-slate-800/80 p-8 transition-all duration-300 hover:border-slate-600 relative overflow-hidden rounded shadow-sm ${viewMode === 'list' ? 'flex-col lg:flex-row lg:items-start gap-10' : 'flex-col h-full'}`}
                        >
                            {/* Icon & ID Section */}
                            <div className={`${viewMode === 'list' ? 'lg:w-1/3 shrink-0' : 'w-full mb-8'}`}>
                                <div className="flex justify-between items-start mb-6">
                                    <div
                                        className={`p-3 rounded border transition-all duration-300 ${getColorClass(topic.color)} group-hover:scale-110`}>
                                        {topic.icon}
                                    </div>
                                    <span
                                        className="text-[10px] font-mono text-slate-600 tracking-widest uppercase opacity-50">
                    Mod_0{topic.id}
                  </span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-cyan-400 transition-colors">
                                    {topic.title}
                                </h3>
                                <p className={`text-sm font-bold uppercase tracking-widest leading-relaxed ${getColorClass(topic.color).split(' ')[0]}`}>
                                    {topic.subtitle}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-6">
                                    {topic.itConcept.split(',').map((tag, i) => (
                                        <span key={i}
                                              className="text-[10px] font-mono text-slate-500 bg-slate-900/50 px-2 py-1 rounded border border-slate-800">
                      {tag.trim()}
                    </span>
                                    ))}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="flex flex-col flex-grow">
                                {/* Verse Box */}
                                <div
                                    className="mb-8 p-6 bg-[#0d1117] border border-slate-800 rounded group-hover:border-emerald-500/20 transition-colors shadow-inner">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Hash size={12} className="text-emerald-500 opacity-70"/>
                                        <span
                                            className="text-[11px] font-bold text-emerald-500/80 uppercase tracking-widest font-mono">Referensi Al-Qur'an: {topic.verse}</span>
                                    </div>
                                    <p className="text-[15px] text-slate-300 font-serif italic leading-relaxed">
                                        "{topic.verseText}"
                                    </p>
                                </div>

                                {/* Analysis */}
                                <div className="text-[14.5px] leading-7 text-slate-400 mb-10 font-normal antialiased">
                                    {topic.blogContent}
                                </div>

                                {/* Footer / CTA */}
                                <div
                                    className="pt-5 border-t border-slate-800/40 flex justify-between items-center mt-auto">
                                    <button
                                        onClick={() => alert(`Analisis teknis mendalam untuk modul [${topic.title}] sedang dalam tahap penyusunan.`)}
                                        className="flex items-center text-[11px] font-bold text-slate-500 hover:text-white transition-all uppercase tracking-widest font-mono"
                                    >
                                        <BookOpen size={16} className="mr-3 text-cyan-500"/>
                                        <span>Pelajari Arsitektur</span>
                                        <ArrowRight size={14}
                                                    className="ml-2 group-hover:translate-x-2 transition-transform"/>
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-32 border-t border-slate-800 py-16 text-center relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-slate-600 text-xs font-mono mb-6 leading-relaxed">
                        &lt;system_log&gt; <br/>
                        Project: The Great Architect v2.1 <br/>
                        Scope: Science, Al-Qur'an & Software Engineering Analysis <br/>
                        &lt;/system_log&gt;
                    </p>
                    <div
                        className="flex justify-center items-center gap-6 text-[10px] text-slate-700 font-mono uppercase tracking-[0.3em]">
                        <span>Status: STABLE</span>
                        <span>•</span>
                        <Heart size={12} className="text-red-900/40"/>
                        <span>•</span>
                        <span>Region: Medan, Indonesia</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;