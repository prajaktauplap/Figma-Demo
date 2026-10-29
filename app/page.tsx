export default function Home() {
  return (
    <>
  <div className="announcement">{"GROWN FOR YOUR BUSINESS.   "}$350 OPENING ORDER · NATIONWIDE DELIVERY · TRADE ONLY</div>

  <header className="nav">
    <a className="brand" href="#">
      <span className="brand__name">PLANT WAREHOUSE</span>
      <span className="brand__tag">THE WHOLESALE PLANT WAREHOUSE</span>
    </a>
    <nav className="nav__links" aria-label="Shop">
      <a href="#collections">Shop plants</a>
      <a href="#availability">Weekly availability</a>
      <a href="#nursery">Our nursery</a>
      <a href="#trade">For the trade</a>
    </nav>
    <div className="nav__actions">
      <a href="#">Trade sign in</a>
      <a className="button" href="#apply"><span>Apply for an account</span><img src="/assets/arrow-up-right.svg" alt="" width="16" height="16" /></a>
      <a href="#" aria-label="Shopping bag"><img src="/assets/shopping-bag.svg" alt="" width="21" height="23" /></a>
    </div>
  </header>

  <section className="hero">
    <div className="hero__copy">
      <p className="eyebrow">ROOTED IN QUALITY. GROWN FOR THE TRADE.</p>
      <h1 className="hero__title">Good things.<br />Growing.</h1>
      <p className="hero__text">Exceptional indoor plants. Honest wholesale prices. A growing partnership for independent shops, designers, and spaces that deserve more green.</p>
      <div className="hero__actions">
        <a className="button" href="#availability"><span>Shop the collection</span><img src="/assets/arrow-up-right.svg" alt="" width="16" height="16" /></a>
        <a className="button button--outline" href="#apply"><span>Join the trade</span><img src="/assets/arrow-up-right-dark.svg" alt="" width="16" height="16" /></a>
      </div>
      <p className="hero__note">From 6 plants per variety. A little room to grow.</p>
    </div>
    <div className="hero__photo" style={{ backgroundImage: "url(/assets/hero-nursery.png)" }}>
      <div className="field-note">
        <p className="field-note__label">DIRECT FROM THE GROWING BENCH</p>
        <p className="field-note__title">Healthy roots. Happy warehouse.</p>
        <p className="field-note__origin">Fallbrook, California · Est. 1998</p>
      </div>
    </div>
  </section>

  <section className="essentials">
    <div className="benefit"><img src="/assets/sprout.svg" alt="" width="27" height="27" /><div><p className="benefit__title">Nursery-direct quality</p><p className="benefit__text">Grown with care. Never middlemen.</p></div></div>
    <div className="benefit"><img src="/assets/package.svg" alt="" width="27" height="27" /><div><p className="benefit__title">Small minimums</p><p className="benefit__text">Just $350 to get growing.</p></div></div>
    <div className="benefit"><img src="/assets/truck.svg" alt="" width="27" height="27" /><div><p className="benefit__title">Delivered with care</p><p className="benefit__text">Ships in 3–5 business days.</p></div></div>
    <div className="benefit"><img src="/assets/users.svg" alt="" width="27" height="27" /><div><p className="benefit__title">A real growing partner</p><p className="benefit__text">Expert support, season after season.</p></div></div>
  </section>

  <section className="section" id="collections">
    <div className="intro">
      <div className="intro__heading" style={{ width: 850 }}>
        <p className="eyebrow">A PLANT FOR EVERY KIND OF SPACE</p>
        <h2 className="title">Find your kind of green.</h2>
      </div>
      <a className="link-underline" href="#">Explore all collections ↗</a>
    </div>
    <div className="grid grid--3">
      <a className="collection" href="#">
        <div className="collection__img" style={{ backgroundImage: "url(/assets/collection-1.png)" }}><span className="chip">24 varieties</span></div>
        <div className="collection__title"><span>The everyday essentials</span><img src="/assets/arrow-up-right-20.svg" alt="" width="20" height="20" /></div>
        <p className="collection__text">Reliable favorites. Ready to sell.</p>
      </a>
      <a className="collection" href="#">
        <div className="collection__img" style={{ backgroundImage: "url(/assets/collection-2.png)" }}><span className="chip">16 varieties</span></div>
        <div className="collection__title"><span>A little more statement</span><img src="/assets/arrow-up-right-20.svg" alt="" width="20" height="20" /></div>
        <p className="collection__text">Big leaves. Lasting impressions.</p>
      </a>
      <a className="collection" href="#">
        <div className="collection__img" style={{ backgroundImage: "url(/assets/collection-3.png)" }}><span className="chip">32 varieties</span></div>
        <div className="collection__title"><span>Small plants, big potential</span><img src="/assets/arrow-up-right-20.svg" alt="" width="20" height="20" /></div>
        <p className="collection__text">Shelf-sized greens with plenty of charm.</p>
      </a>
    </div>
  </section>

  <section className="section section--ivory" id="availability">
    <div className="intro">
      <div className="intro__heading" style={{ width: 750 }}>
        <p className="eyebrow">FRESH FROM THE NURSERY</p>
        <h2 className="title">Good stock. Great starts.</h2>
      </div>
      <a className="button button--outline" href="#"><span>Shop all available plants</span><img src="/assets/arrow-up-right-dark.svg" alt="" width="16" height="16" /></a>
    </div>
    <div className="filters">
      <div className="tabs">
        <button className="tab tab--active" type="button">Ready to ship</button>
        <button className="tab" type="button">Bestsellers</button>
        <button className="tab" type="button">New arrivals</button>
      </div>
      <p className="filters__date">Live availability · Updated today, 7:00 AM PT</p>
    </div>
    <div className="grid grid--4">
      <article className="plant">
        <div className="plant__img" style={{ backgroundImage: "url(/assets/plant-1.png)" }}><span className="chip chip--sm">BESTSELLER</span></div>
        <div className="plant__details">
          <h3>Monstera Deliciosa</h3><p className="plant__latin">Monstera deliciosa</p><p className="plant__size">6″ pot · 18–24″ tall</p>
          <p className="plant__price"><b>$12.50</b><span>/ plant · pack of 6</span></p>
          <p className="plant__stock"><img src="/assets/stock.svg" alt="" width="5" height="5" />240 available</p>
        </div>
        <button className="add" type="button"><span>Add pack to order</span><img src="/assets/plus.svg" alt="" width="14" height="14" /></button>
      </article>
      <article className="plant">
        <div className="plant__img" style={{ backgroundImage: "url(/assets/plant-2.png)" }}><span className="chip chip--sm">GROWER’S PICK</span></div>
        <div className="plant__details">
          <h3>Rubber Plant — Burgundy</h3><p className="plant__latin">Ficus elastica ‘Burgundy’</p><p className="plant__size">6″ pot · 16–20″ tall</p>
          <p className="plant__price"><b>$10.75</b><span>/ plant · pack of 6</span></p>
          <p className="plant__stock"><img src="/assets/stock.svg" alt="" width="5" height="5" />186 available</p>
        </div>
        <button className="add" type="button"><span>Add pack to order</span><img src="/assets/plus.svg" alt="" width="14" height="14" /></button>
      </article>
      <article className="plant">
        <div className="plant__img" style={{ backgroundImage: "url(/assets/plant-3.png)" }}><span className="chip chip--sm">EASY CARE</span></div>
        <div className="plant__details">
          <h3>Golden Pothos</h3><p className="plant__latin">Epipremnum aureum</p><p className="plant__size">4″ pot · 8–12″ trail</p>
          <p className="plant__price"><b>$4.25</b><span>/ plant · pack of 6</span></p>
          <p className="plant__stock"><img src="/assets/stock.svg" alt="" width="5" height="5" />480 available</p>
        </div>
        <button className="add" type="button"><span>Add pack to order</span><img src="/assets/plus.svg" alt="" width="14" height="14" /></button>
      </article>
      <article className="plant">
        <div className="plant__img" style={{ backgroundImage: "url(/assets/plant-4.png)" }}><span className="chip chip--sm">LOW LIGHT</span></div>
        <div className="plant__details">
          <h3>ZZ Plant</h3><p className="plant__latin">Zamioculcas zamiifolia</p><p className="plant__size">6″ pot · 16–20″ tall</p>
          <p className="plant__price"><b>$11.25</b><span>/ plant · pack of 6</span></p>
          <p className="plant__stock"><img src="/assets/stock.svg" alt="" width="5" height="5" />Only 48 left</p>
        </div>
        <button className="add" type="button"><span>Add pack to order</span><img src="/assets/plus.svg" alt="" width="14" height="14" /></button>
      </article>
    </div>
    <div className="notes">
      <p>USD trade prices, excluding tax &amp; freight. Approved account required to order.</p>
      <a href="#">Download this week’s availability ↓</a>
    </div>
  </section>

  <section className="story" id="nursery">
    <div className="story__photo" style={{ backgroundImage: "url(/assets/grower.png)" }}><span className="story__caption">OUR FALLBROOK NURSERY · 33°22′ N 117°15′ W</span></div>
    <div className="story__copy">
      <p className="eyebrow">GROWERS FIRST. ALWAYS.</p>
      <h2 className="story__title">Behind every leaf,<br />a little more care.</h2>
      <p className="story__text">We’re a family-run nursery with soil under our nails and nearly three decades of growing behind us. Every plant is nurtured, checked, and packed by people who know what healthy looks like.</p>
      <div className="facts">
        <div><p className="fact__value">28</p><p className="fact__label">years growing</p></div>
        <div><p className="fact__value">80+</p><p className="fact__label">indoor varieties</p></div>
        <div><p className="fact__value">100%</p><p className="fact__label">rooted in care</p></div>
      </div>
      <a className="button button--light" href="#"><span>Get to know Frond</span><img src="/assets/arrow-up-right-dark.svg" alt="" width="16" height="16" /></a>
    </div>
  </section>

  <section className="section section--steps" id="trade">
    <div className="intro intro--steps">
      <div className="intro__heading" style={{ width: 740 }}>
        <p className="eyebrow">LESS ADMIN. MORE GROWING.</p>
        <h2 className="title">Your next order, simplified.</h2>
      </div>
      <p className="intro__aside">For plant shops, florists, interior designers, and hospitality. A proper trade partnership, without the complicated bits.</p>
    </div>
    <div className="steps">
      <div className="step"><p className="step__num">01</p><h3>Make yourself at home.</h3><p>Apply with your business details and resale certificate. We’ll review your account within 2 business days.</p><a className="link-underline link-underline--sm" href="#apply">Apply for a trade account ↗</a></div>
      <div className="step"><p className="step__num">02</p><h3>Build your green lineup.</h3><p>Mix your favorites from live availability. Start at $350, with packs of 6 per variety and no ongoing commitment.</p><a className="link-underline link-underline--sm" href="#availability">Browse weekly availability ↗</a></div>
      <div className="step"><p className="step__num">03</p><h3>We’ll take it from here.</h3><p>Your plants are hand-checked and packed to travel well. Dispatch in 3–5 business days, with freight quoted at checkout.</p><a className="link-underline link-underline--sm" href="#">Delivery &amp; order details ↗</a></div>
    </div>
  </section>

  <section className="community">
    <div className="community__photo" style={{ backgroundImage: "url(/assets/community.png)" }}></div>
    <div className="community__copy">
      <p className="eyebrow">GOOD PLANTS. EVEN BETTER PARTNERSHIPS.</p>
      <blockquote className="community__quote">“The kind of plants that sell themselves. The kind of people you want to keep growing with.”</blockquote>
      <div className="attribution"><p className="attribution__name">Avery Chen, Founder</p><p className="attribution__biz">Sunday Plant Shop · Los Angeles, CA</p></div>
      <div className="credential"><p>FROND TRADE PARTNER SINCE 2021</p><a href="#">Meet our community ↗</a></div>
    </div>
  </section>

  <section className="section" id="journal">
    <div className="intro">
      <div className="intro__heading" style={{ width: 900 }}>
        <p className="eyebrow">THE FROND FIELD NOTES</p>
        <h2 className="title">A little growing knowledge.</h2>
      </div>
      <a className="link-underline" href="#">Read all field notes ↗</a>
    </div>
    <div className="grid grid--3">
      <article className="article"><div className="article__img" style={{ backgroundImage: "url(/assets/journal-1.png)" }}></div><p className="article__meta">THE RETAIL EDIT · 5 MIN READ</p><h3>A better first order: your shelf-ready starter list.</h3><a href="#">Read the story ↗</a></article>
      <article className="article"><div className="article__img" style={{ backgroundImage: "url(/assets/journal-2.png)" }}></div><p className="article__meta">FROM THE GROWING BENCH · 4 MIN READ</p><h3>Light, water, repeat. Keeping your stock at its best.</h3><a href="#">Read the story ↗</a></article>
      <article className="article"><div className="article__img" style={{ backgroundImage: "url(/assets/journal-3.png)" }}></div><p className="article__meta">SPACES THAT GROW · 6 MIN READ</p><h3>Designing with green: plants that earn their place.</h3><a href="#">Read the story ↗</a></article>
    </div>
  </section>

  <section className="invitation" id="apply">
    <div className="invitation__copy">
      <p className="eyebrow">LET’S PUT DOWN ROOTS.</p>
      <h2 className="invitation__title">Your business. Our green thumb.</h2>
      <p className="invitation__text">Better plants, real trade prices, and people in your corner. Let’s grow something good.</p>
    </div>
    <div className="invitation__apply">
      <a className="button" href="#apply">
        <span>Apply for a trade account</span>
        <img src="/assets/arrow-up-right.svg" alt="" width="16" height="16" />
      </a>
      <p className="invitation__note">Free to join · Reviewed in 2 business days</p>
    </div>
  </section>

  <footer className="footer">
    <div className="footer__directory">
      <div className="newsletter">
        <h3 className="newsletter__title">The good stuff, as it grows.</h3>
        <p className="newsletter__text">Fresh availability, seasonal finds, and notes from the nursery.<br />In your inbox, never in the way.</p>
        <form className="newsletter__form" action="#" method="post">
          <input type="email" placeholder="Your business email" aria-label="Your business email" required />
          <button type="submit" aria-label="Subscribe"><img src="/assets/arrow-right.svg" alt="" width="20" height="20" /></button>
        </form>
        <p className="newsletter__legal">By subscribing, you agree to our privacy policy. Unsubscribe anytime.</p>
      </div>

      <nav className="links" aria-label="The plants">
        <h4>THE PLANTS</h4>
        <a href="#">All indoor plants</a>
        <a href="#">Weekly availability</a>
        <a href="#">Bestsellers</a>
        <a href="#">New arrivals</a>
        <a href="#">Download stock list</a>
      </nav>

      <nav className="links" aria-label="The trade">
        <h4>THE TRADE</h4>
        <a href="#">Apply for an account</a>
        <a href="#">Trade sign in</a>
        <a href="#">Ordering &amp; minimums</a>
        <a href="#">Shipping &amp; delivery</a>
        <a href="#">FAQs</a>
      </nav>

      <div className="links">
        <h4>THE NURSERY</h4>
        <a href="#">Our story</a>
        <a href="#">Field notes</a>
        <a href="#">Visit by appointment</a>
        <a href="mailto:hello@plantwarehouse.com">hello@plantwarehouse.com</a>
        <a href="tel:+17605550142">(760) 555-0142</a>
      </div>
    </div>

    <div className="signature">
      <p className="signature__name">PLANT WAREHOUSE</p>
      <div className="signature__address">
        <p className="signature__tagline">A good place to grow.</p>
        <p>1420 Green Valley Road · Fallbrook, CA 92028</p>
      </div>
    </div>

    <div className="legal">
      <p>© 2026 Plant Warehouse. Rooted in California. Growing everywhere.</p>
      <div className="legal__links">
        <a href="#">Instagram ↗</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Accessibility</a>
      </div>
    </div>
  </footer>
    </>
  );
}
