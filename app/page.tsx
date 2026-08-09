const crops = [
  { icon: "🌾", name: "ਕਣਕ", en: "Wheat", note: "ਹਾੜ੍ਹੀ ਦੀ ਮੁੱਖ ਫ਼ਸਲ—ਬਸੰਤ ਵਿੱਚ ਸੋਨੇ ਵਾਂਗ ਲਹਿਰਾਉਂਦੀ ਹੈ।" },
  { icon: "🌱", name: "ਝੋਨਾ", en: "Paddy", note: "ਸਾਉਣ ਦੀ ਬਰਖਾ ਨਾਲ ਪਲਦਾ ਹੈ ਤੇ ਪਤਝੜ ਵਿੱਚ ਪੱਕਦਾ ਹੈ।" },
  { icon: "🌼", name: "ਸਰ੍ਹੋਂ", en: "Mustard", note: "ਪੀਲੇ ਫੁੱਲਾਂ ਨਾਲ ਸਰਦੀਆਂ ਦੇ ਖੇਤਾਂ ਨੂੰ ਰੌਸ਼ਨ ਕਰਦੀ ਹੈ।" },
  { icon: "🌽", name: "ਮੱਕੀ", en: "Maize", note: "ਮੀਂਹ ਦੇ ਮੌਸਮ ਦੀ ਫ਼ਸਲ; ਮੱਕੀ ਦੀ ਰੋਟੀ ਹਰ ਘਰ ਦੀ ਸ਼ਾਨ ਹੈ।" },
  { icon: "🫛", name: "ਬਾਜਰਾ ਤੇ ਦਾਲਾਂ", en: "Millet & pulses", note: "ਘੱਟ ਪਾਣੀ ਵਿੱਚ ਵੀ ਉੱਗਣ ਵਾਲੀਆਂ ਪੌਸ਼ਟਿਕ ਰਵਾਇਤੀ ਫ਼ਸਲਾਂ।" },
  { icon: "🥬", name: "ਸਬਜ਼ੀਆਂ ਤੇ ਚਾਰਾ", en: "Vegetables & fodder", note: "ਘਰ ਦੀ ਰਸੋਈ ਅਤੇ ਪਸ਼ੂਆਂ ਲਈ ਸਾਲ ਭਰ ਤਾਜ਼ੀ ਪੈਦਾਵਾਰ।" },
];

const seasons = [
  { tag: "ਮਾਰਚ—ਜੂਨ", title: "ਗਰਮੀ", en: "Garmi", color: "sun", text: "ਦਿਨ ਲੰਮੇ ਤੇ ਤਿੱਖੇ ਹੁੰਦੇ ਹਨ। ਕਿਸਾਨ ਸਵੇਰੇ ਜਲਦੀ ਖੇਤ ਜਾਂਦੇ ਹਨ, ਕਣਕ ਦੀ ਵਾਢੀ ਪੂਰੀ ਕਰਦੇ ਹਨ ਅਤੇ ਅਗਲੀ ਫ਼ਸਲ ਲਈ ਧਰਤੀ ਤਿਆਰ ਕਰਦੇ ਹਨ। ਦੁਪਹਿਰ ਨੂੰ ਲੋਕ ਦਰੱਖ਼ਤਾਂ ਦੀ ਛਾਂ, ਲੱਸੀ ਅਤੇ ਠੰਢੇ ਪਾਣੀ ਨਾਲ ਸੁੱਖ ਲੈਂਦੇ ਹਨ।" },
  { tag: "ਜੁਲਾਈ—ਸਤੰਬਰ", title: "ਬਰਸਾਤ", en: "Barsaat", color: "rain", text: "ਸਾਵਣ ਦੇ ਬੱਦਲ ਧਰਤੀ ਨੂੰ ਨਵੀਂ ਖ਼ੁਸ਼ਬੂ ਦਿੰਦੇ ਹਨ। ਝੋਨਾ ਲਾਇਆ ਜਾਂਦਾ ਹੈ, ਨਹਿਰਾਂ ਤੇ ਖਾਲਿਆਂ ਵਿੱਚ ਪਾਣੀ ਵਗਦਾ ਹੈ ਅਤੇ ਪਿੰਡ ਚੁਫੇਰੇ ਹਰਿਆਲੀ ਨਾਲ ਭਰ ਜਾਂਦਾ ਹੈ।" },
  { tag: "ਅਕਤੂਬਰ—ਨਵੰਬਰ", title: "ਪਤਝੜ", en: "Patjhar", color: "earth", text: "ਹਵਾ ਹੌਲੀ ਠੰਢੀ ਹੋ ਜਾਂਦੀ ਹੈ। ਝੋਨੇ ਦੀ ਕਟਾਈ, ਅਨਾਜ ਦੀ ਸਫ਼ਾਈ ਅਤੇ ਮੰਡੀ ਤੱਕ ਪਹੁੰਚਾਉਣ ਦਾ ਰੁਝੇਵਾਂ ਹੁੰਦਾ ਹੈ। ਦੀਵਾਲੀ ਦੀਆਂ ਰੌਸ਼ਨੀਆਂ ਘਰਾਂ ਨੂੰ ਚਮਕਾ ਦਿੰਦੀਆਂ ਹਨ।" },
  { tag: "ਦਸੰਬਰ—ਫ਼ਰਵਰੀ", title: "ਸਰਦੀ", en: "Sardi", color: "mist", text: "ਧੁੰਦ ਵਾਲੀਆਂ ਸਵੇਰਾਂ ਵਿੱਚ ਚੁੱਲ੍ਹੇ ਦੀ ਅੱਗ, ਗੁੜ ਵਾਲੀ ਚਾਹ ਅਤੇ ਗਰਮ ਪਰੌਂਠੇ ਮਨ ਮੋਹ ਲੈਂਦੇ ਹਨ। ਕਣਕ ਤੇ ਸਰ੍ਹੋਂ ਦੇ ਖੇਤ ਵਧਦੇ ਹਨ ਅਤੇ ਲੋਹੜੀ ਦੀ ਅੱਗ ਚਾਰੋਂ ਪਾਸੇ ਸਾਂਝ ਪੈਦਾ ਕਰਦੀ ਹੈ।" },
];

function PhotoFrame({ label, src, credit, href, tall = false }: { label: string; src: string; credit: string; href: string; tall?: boolean }) {
  return (
    <figure className={`photo-frame ${tall ? "tall" : ""}`}>
      <img src={src} alt={label} loading={tall ? "eager" : "lazy"} />
      <figcaption>
        <strong>{label}</strong>
        <a href={href} target="_blank" rel="noreferrer">ਤਸਵੀਰ: {credit}</a>
      </figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="ਪੇਜੋਚੱਕ ਮੁੱਖ ਪੰਨਾ">
          <span className="brand-seal">ਪ</span>
          <span><strong>ਪੇਜੋਚੱਕ</strong><small>ਪੰਜਾਬ, ਭਾਰਤ</small></span>
        </a>
        <nav aria-label="ਮੁੱਖ ਨੇਵੀਗੇਸ਼ਨ">
          <a href="#about">ਸਾਡਾ ਪਿੰਡ</a>
          <a href="#life">ਰੋਜ਼ਾਨਾ ਜੀਵਨ</a>
          <a href="#crops">ਫ਼ਸਲਾਂ</a>
          <a href="#festivals">ਤਿਉਹਾਰ</a>
        </nav>
        <a className="photo-cta" href="#gallery">ਫ਼ੋਟੋ ਗੈਲਰੀ <span>↗</span></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">ਮੇਰਾ ਸੋਹਣਾ ਪਿੰਡ · MY BEAUTIFUL VILLAGE</p>
          <h1>ਜਿੱਥੇ ਮਿੱਟੀ<br />ਨਾਲ <em>ਮੋਹ</em> ਹੈ।</h1>
          <p className="hero-lede">ਪੇਜੋਚੱਕ—ਪੰਜਾਬ ਦੀ ਧਰਤੀ ਉੱਤੇ ਵਸਿਆ ਇੱਕ ਪਿਆਰਾ ਪਿੰਡ, ਜਿੱਥੇ ਖੇਤਾਂ ਦੀ ਹਰਿਆਲੀ, ਲੋਕਾਂ ਦੀ ਸਾਦਗੀ ਅਤੇ ਸਾਂਝੇ ਜੀਵਨ ਦੀ ਨਿੱਘ ਹਰ ਆਉਣ ਵਾਲੇ ਦਾ ਦਿਲ ਜਿੱਤ ਲੈਂਦੀ ਹੈ।</p>
          <div className="hero-actions">
            <a className="primary-btn" href="#about">ਪਿੰਡ ਦੀ ਕਹਾਣੀ ਪੜ੍ਹੋ <span>↓</span></a>
            <span className="location-note">31° N · ਪੰਜਾਬ ਦੀ ਰੂਹ</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="sun-disc" aria-hidden="true" />
          <PhotoFrame label="ਸਰ੍ਹੋਂ ਦੇ ਖੇਤਾਂ ਵਿੱਚੋਂ ਲੰਘਦੀ ਪਿੰਡ ਦੀ ਰਾਹ" src="/photos/mustard-fields.jpg" credit="Razaq Vance" href="https://www.razaqvance.com/simple-beauty-village-ladscape-punjab-pakistan/" tall />
          <div className="field-lines" aria-hidden="true"><i /><i /><i /><i /></div>
          <span className="vertical-note">ਪੇਜੋਚੱਕ · ਪੰਜਾਬ · ਭਾਰਤ</span>
        </div>
      </section>

      <section className="intro section" id="about">
        <div className="section-number">੦੧</div>
        <div className="section-heading">
          <p className="eyebrow">ਸਾਡੀ ਪਛਾਣ · OUR STORY</p>
          <h2>ਮੇਰਾ ਸੋਹਣਾ ਪਿੰਡ<br /><em>ਪੇਜੋਚੱਕ</em></h2>
        </div>
        <article className="essay">
          <p className="dropcap">ਮੇਰਾ ਪਿੰਡ ਪੇਜੋਚੱਕ ਮੇਰੇ ਲਈ ਸਿਰਫ਼ ਨਕਸ਼ੇ ਉੱਤੇ ਇੱਕ ਥਾਂ ਨਹੀਂ, ਸਗੋਂ ਯਾਦਾਂ, ਰਿਸ਼ਤਿਆਂ ਅਤੇ ਮਿੱਟੀ ਦੀ ਮਹਿਕ ਨਾਲ ਭਰਿਆ ਘਰ ਹੈ। ਸਵੇਰ ਵੇਲੇ ਗੁਰਦੁਆਰਾ ਸਾਹਿਬ ਤੋਂ ਆਉਂਦੀ ਗੁਰਬਾਣੀ ਦੀ ਮਿੱਠੀ ਆਵਾਜ਼, ਪੰਛੀਆਂ ਦੀ ਚਹਿਚਹਾਟ ਅਤੇ ਖੇਤਾਂ ਵੱਲ ਜਾਂਦੇ ਟਰੈਕਟਰਾਂ ਦੀ ਗੂੰਜ ਪਿੰਡ ਨੂੰ ਜਗਾਉਂਦੀ ਹੈ। ਇੱਥੇ ਹਰ ਰੁੱਤ ਆਪਣਾ ਨਵਾਂ ਰੰਗ ਲੈ ਕੇ ਆਉਂਦੀ ਹੈ—ਸਰ੍ਹੋਂ ਦਾ ਪੀਲਾ, ਕਣਕ ਦਾ ਸੁਨਹਿਰੀ ਅਤੇ ਝੋਨੇ ਦਾ ਗੂੜ੍ਹਾ ਹਰਾ।</p>
          <p>ਪਿੰਡ ਦੇ ਲੋਕ ਮਿਹਨਤੀ, ਸਾਦੇ ਅਤੇ ਖੁੱਲ੍ਹੇ ਦਿਲ ਵਾਲੇ ਹਨ। ਕਿਸੇ ਦੇ ਘਰ ਖ਼ੁਸ਼ੀ ਹੋਵੇ ਜਾਂ ਔਖਾ ਸਮਾਂ, ਸਾਰਾ ਪਿੰਡ ਇਕ ਪਰਿਵਾਰ ਵਾਂਗ ਨਾਲ ਖੜ੍ਹਦਾ ਹੈ। ਬਜ਼ੁਰਗ ਚੌਪਾਲ ਵਿੱਚ ਪੁਰਾਣੀਆਂ ਗੱਲਾਂ ਸਾਂਝੀਆਂ ਕਰਦੇ ਹਨ, ਬੱਚੇ ਗਲੀਆਂ ਅਤੇ ਖੇਡ ਮੈਦਾਨਾਂ ਵਿੱਚ ਹੱਸਦੇ-ਖੇਡਦੇ ਹਨ, ਅਤੇ ਨੌਜਵਾਨ ਪੜ੍ਹਾਈ, ਖੇਤੀ ਤੇ ਨਵੇਂ ਕੰਮਾਂ ਰਾਹੀਂ ਪਿੰਡ ਦਾ ਭਵਿੱਖ ਸਵਾਰਦੇ ਹਨ।</p>
          <blockquote>“ਪੇਜੋਚੱਕ ਦੀ ਅਸਲੀ ਖ਼ੂਬਸੂਰਤੀ ਇਸ ਦੇ ਖੇਤਾਂ ਵਿੱਚ ਹੀ ਨਹੀਂ, ਸਗੋਂ ਲੋਕਾਂ ਦੇ ਦਿਲਾਂ ਅਤੇ ਆਪਸੀ ਸਾਂਝ ਵਿੱਚ ਵੱਸਦੀ ਹੈ।”</blockquote>
          <p>ਘਰਾਂ ਦੇ ਵਿਹੜਿਆਂ ਵਿੱਚ ਨਿੰਮ ਤੇ ਟਾਹਲੀ ਦੀ ਛਾਂ, ਮੱਝਾਂ ਦੀਆਂ ਟੱਲੀਆਂ, ਤੰਦੂਰ ਦੀ ਮਹਿਕ ਅਤੇ ਤਾਜ਼ੀ ਲੱਸੀ ਦਾ ਸਵਾਦ ਜੀਵਨ ਨੂੰ ਧਰਤੀ ਨਾਲ ਜੋੜੀ ਰੱਖਦੇ ਹਨ। ਆਧੁਨਿਕ ਸਹੂਲਤਾਂ ਆ ਗਈਆਂ ਹਨ, ਪਰ ਸਤਿਕਾਰ, ਸੇਵਾ, ਵਿਰਸੇ ਅਤੇ ਮਹਿਮਾਨ-ਨਿਵਾਜ਼ੀ ਦੀਆਂ ਕਦਰਾਂ ਅੱਜ ਵੀ ਪਿੰਡ ਦੀ ਧੜਕਣ ਹਨ।</p>
        </article>
      </section>

      <section className="daily section" id="life">
        <div className="daily-grid">
          <div>
            <p className="eyebrow light">ਇੱਕ ਦਿਨ ਪੇਜੋਚੱਕ ਵਿੱਚ · A DAY IN PEJOCHAK</p>
            <h2>ਸੂਰਜ ਚੜ੍ਹਨ ਤੋਂ<br /><em>ਤਾਰਿਆਂ ਤੱਕ</em></h2>
          </div>
          <ol className="timeline">
            <li><time>੫:੦੦</time><div><h3>ਪ੍ਰਭਾਤ ਅਤੇ ਅਰਦਾਸ</h3><p>ਗੁਰਬਾਣੀ ਦੀ ਆਵਾਜ਼ ਨਾਲ ਦਿਨ ਦੀ ਸ਼ੁਰੂਆਤ। ਘਰਾਂ ਵਿੱਚ ਚਾਹ ਬਣਦੀ ਹੈ ਅਤੇ ਪਸ਼ੂਆਂ ਨੂੰ ਚਾਰਾ ਪਾਇਆ ਜਾਂਦਾ ਹੈ।</p></div></li>
            <li><time>੭:੦੦</time><div><h3>ਖੇਤਾਂ ਵੱਲ</h3><p>ਕਿਸਾਨ ਮੌਸਮ ਅਨੁਸਾਰ ਬਿਜਾਈ, ਸਿੰਚਾਈ, ਨਦੀਨ ਕੱਢਣ ਜਾਂ ਵਾਢੀ ਦਾ ਕੰਮ ਕਰਦੇ ਹਨ। ਬੱਚੇ ਸਕੂਲ ਲਈ ਤਿਆਰ ਹੁੰਦੇ ਹਨ।</p></div></li>
            <li><time>੧੨:੩੦</time><div><h3>ਰੋਟੀ ਅਤੇ ਆਰਾਮ</h3><p>ਦਾਲ, ਸਬਜ਼ੀ, ਰੋਟੀ, ਦਹੀਂ ਅਤੇ ਲੱਸੀ ਨਾਲ ਸਾਦਾ ਪਰ ਪੌਸ਼ਟਿਕ ਭੋਜਨ। ਗਰਮੀ ਵਿੱਚ ਥੋੜ੍ਹਾ ਦੁਪਹਿਰ ਦਾ ਆਰਾਮ।</p></div></li>
            <li><time>੪:੩੦</time><div><h3>ਰੌਣਕ ਵਾਲੀ ਸ਼ਾਮ</h3><p>ਔਰਤਾਂ ਘਰ-ਵਿਹੜਾ ਸੰਭਾਲਦੀਆਂ ਅਤੇ ਮਿਲ ਬੈਠਦੀਆਂ ਹਨ; ਬੱਚੇ ਕਬੱਡੀ, ਕ੍ਰਿਕਟ ਜਾਂ ਕੋਟਲਾ-ਛਪਾਕੀ ਖੇਡਦੇ ਹਨ।</p></div></li>
            <li><time>੮:੦੦</time><div><h3>ਸਾਂਝੀ ਬੈਠਕ</h3><p>ਰਾਤ ਦੀ ਰੋਟੀ ਤੋਂ ਬਾਅਦ ਪਰਿਵਾਰ ਇਕੱਠੇ ਬੈਠਦਾ ਹੈ। ਗੱਲਾਂ, ਲੋਕ-ਕਹਾਣੀਆਂ ਅਤੇ ਅਗਲੇ ਦਿਨ ਦੀ ਯੋਜਨਾ ਨਾਲ ਦਿਨ ਮੁੱਕਦਾ ਹੈ।</p></div></li>
          </ol>
        </div>
      </section>

      <section className="crops section" id="crops">
        <div className="section-number">੦੨</div>
        <div className="split-heading">
          <div><p className="eyebrow">ਧਰਤੀ ਦਾ ਤੋਹਫ਼ਾ · FROM THE LAND</p><h2>ਸਾਡੇ ਖੇਤ,<br /><em>ਸਾਡੀ ਸ਼ਾਨ</em></h2></div>
          <p>ਪੇਜੋਚੱਕ ਦਾ ਜੀਵਨ ਖੇਤੀ ਨਾਲ ਡੂੰਘਾ ਜੁੜਿਆ ਹੈ। ਮਿੱਟੀ, ਪਾਣੀ, ਮੌਸਮ ਅਤੇ ਕਿਸਾਨ ਦੀ ਮਿਹਨਤ ਮਿਲ ਕੇ ਹਰ ਦਾਣੇ ਨੂੰ ਜੀਵਨ ਦਿੰਦੇ ਹਨ।</p>
        </div>
        <div className="crop-grid">
          {crops.map((crop, index) => <article className="crop-card" key={crop.name}><span className="crop-index">0{index + 1}</span><span className="crop-icon" aria-hidden="true">{crop.icon}</span><h3>{crop.name}</h3><small>{crop.en}</small><p>{crop.note}</p></article>)}
        </div>
      </section>

      <section className="seasons section" id="seasons">
        <p className="eyebrow">ਰੁੱਤਾਂ ਦਾ ਚੱਕਰ · SEASONS OF THE LAND</p>
        <div className="seasons-title"><h2>ਚਾਰ ਰੁੱਤਾਂ,<br /><em>ਅਨੇਕ ਰੰਗ</em></h2><span>ਇੱਕ ਸਾਲ<br />ਪੇਜੋਚੱਕ ਵਿੱਚ</span></div>
        <div className="season-list">
          {seasons.map((season, index) => <article className={`season-row ${season.color}`} key={season.title}><span className="season-no">੦{index + 1}</span><div><small>{season.tag}</small><h3>{season.title} <em>{season.en}</em></h3></div><p>{season.text}</p><span className="season-symbol" aria-hidden="true">{index === 0 ? "☀" : index === 1 ? "☂" : index === 2 ? "◒" : "❄"}</span></article>)}
        </div>
      </section>

      <section className="festivals section" id="festivals">
        <div className="festival-copy">
          <p className="eyebrow light">ਸਾਂਝੀਆਂ ਖ਼ੁਸ਼ੀਆਂ · CELEBRATIONS</p>
          <h2>ਤਿਉਹਾਰਾਂ ਵਿੱਚ<br /><em>ਧੜਕਦਾ ਪਿੰਡ</em></h2>
          <p>ਪੇਜੋਚੱਕ ਵਿੱਚ ਤਿਉਹਾਰ ਸਿਰਫ਼ ਰਸਮਾਂ ਨਹੀਂ—ਉਹ ਮਿਲਣ, ਵੰਡਣ ਅਤੇ ਸ਼ੁਕਰਾਨਾ ਕਰਨ ਦੇ ਦਿਨ ਹਨ। ਘਰ ਸਜਦੇ ਹਨ, ਰਸੋਈਆਂ ਮਹਿਕਦੀਆਂ ਹਨ ਅਤੇ ਢੋਲ ਦੀ ਥਾਪ ਹਰ ਉਮਰ ਨੂੰ ਇਕੱਠਾ ਕਰਦੀ ਹੈ।</p>
          <div className="festival-tags"><span>ਲੋਹੜੀ</span><span>ਵਿਸਾਖੀ</span><span>ਗੁਰਪੁਰਬ</span><span>ਦੀਵਾਲੀ</span><span>ਹੋਲਾ ਮਹੱਲਾ</span><span>ਤੀਜ</span></div>
        </div>
        <div className="festival-stories">
          <article><span>🔥</span><div><h3>ਲੋਹੜੀ</h3><p>ਸਰਦ ਰਾਤ ਨੂੰ ਅੱਗ ਦੇ ਗੇੜੇ ਲਾ ਕੇ ਮੂੰਗਫਲੀ, ਰਿਉੜੀਆਂ ਅਤੇ ਗੱਜਕ ਵੰਡੀ ਜਾਂਦੀ ਹੈ। ਗੀਤ, ਭੰਗੜਾ ਅਤੇ ਨਵੀਆਂ ਖ਼ੁਸ਼ੀਆਂ ਦਾ ਸਵਾਗਤ ਹੁੰਦਾ ਹੈ।</p></div></article>
          <article><span>🥁</span><div><h3>ਵਿਸਾਖੀ</h3><p>ਕਣਕ ਦੀ ਵਾਢੀ ਦੀ ਖ਼ੁਸ਼ੀ ਅਤੇ ਖ਼ਾਲਸਾ ਸਾਜਨਾ ਦਿਵਸ। ਗੁਰਦੁਆਰੇ ਵਿੱਚ ਅਰਦਾਸ, ਲੰਗਰ ਅਤੇ ਮੇਲੇ ਨਾਲ ਸਾਰਾ ਪਿੰਡ ਰੰਗਿਆ ਜਾਂਦਾ ਹੈ।</p></div></article>
          <article><span>🪔</span><div><h3>ਗੁਰਪੁਰਬ ਅਤੇ ਦੀਵਾਲੀ</h3><p>ਗੁਰਦੁਆਰਾ ਸਾਹਿਬ ਵਿੱਚ ਕੀਰਤਨ, ਪ੍ਰਭਾਤ ਫੇਰੀ ਅਤੇ ਲੰਗਰ ਦੀ ਸੇਵਾ ਹੁੰਦੀ ਹੈ। ਦੀਵਾਲੀ ’ਤੇ ਘਰ ਦੀਵਿਆਂ ਤੇ ਰੌਸ਼ਨੀਆਂ ਨਾਲ ਸਜਦੇ ਹਨ।</p></div></article>
        </div>
      </section>

      <section className="gallery section" id="gallery">
        <div className="gallery-heading"><div><p className="eyebrow">ਯਾਦਾਂ ਦੇ ਝਰੋਖੇ · VILLAGE ALBUM</p><h2>ਪੇਜੋਚੱਕ ਨੂੰ<br /><em>ਤਸਵੀਰਾਂ ਵਿੱਚ ਵੇਖੋ</em></h2></div><p>ਆਪਣੀਆਂ ਫ਼ੋਟੋਆਂ ਭੇਜੋ—ਖੇਤ, ਗੁਰਦੁਆਰਾ ਸਾਹਿਬ, ਪਿੰਡ ਦੀਆਂ ਗਲੀਆਂ, ਪਰਿਵਾਰ ਜਾਂ ਤਿਉਹਾਰ। ਅਸੀਂ ਇਨ੍ਹਾਂ ਥਾਵਾਂ ਨੂੰ ਤੁਹਾਡੀਆਂ ਅਸਲੀ ਯਾਦਾਂ ਨਾਲ ਭਰਾਂਗੇ।</p></div>
        <div className="gallery-grid"><PhotoFrame label="ਕਣਕ ਦੀ ਵਾਢੀ ਅਤੇ ਟਰੈਕਟਰ" src="/photos/wheat-tractor.jpg" credit="Yuvraj Singh / Unsplash" href="https://unsplash.com/photos/a-tractor-is-driving-through-a-field-of-wheat-gDMs88UZ5VE" tall /><PhotoFrame label="ਪੰਜਾਬ ਦੇ ਪਿੰਡ ਦੀ ਗਲੀ" src="/photos/village-street.jpg" credit="Vernacular Furniture of India" href="https://vernacularfurnitureofindia.com/resources/vernacular-furniture-of-punjab-newsletter-2/" /><PhotoFrame label="ਵਿਰਾਸਤੀ ਮੇਲੇ ਦਾ ਭੰਗੜਾ" src="/photos/bhangra-festival.jpg" credit="Ministry of Tourism, India" href="https://utsav.gov.in/view-event/bathinda-virasat-mela-1" /><PhotoFrame label="ਵਿਹੜੇ ਵਿੱਚ ਇਕੱਠਾ ਪਰਿਵਾਰ" src="/photos/village-family.jpg" credit="Settling / Baldev Bansal" href="https://www.settlingstoke.com/baldev-bansal" tall /></div>
      </section>

      <footer>
        <div className="brand footer-brand"><span className="brand-seal">ਪ</span><span><strong>ਪੇਜੋਚੱਕ</strong><small>ਮੇਰਾ ਸੋਹਣਾ ਪਿੰਡ</small></span></div>
        <p>ਮਿੱਟੀ ਦੀ ਮਹਿਕ · ਰਿਸ਼ਤਿਆਂ ਦੀ ਨਿੱਘ · ਪੰਜਾਬ ਦੀ ਰੂਹ</p>
        <a href="#home">ਉੱਪਰ ਜਾਓ ↑</a>
      </footer>
    </main>
  );
}
