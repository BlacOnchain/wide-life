import { useEffect, useState } from 'react';
import { ArrowDownRight, Instagram, Menu, Play, X } from 'lucide-react';
import { CONFIG, Story } from './data/config';

function Mark() { return <img className="brand-mark" src={CONFIG.mark} alt="WIDE LIFE crest" />; }

function CampaignCard({ story, onOpen }: { story: Story; onOpen: () => void }) {
  return <button className="campaign-card" onClick={onOpen} aria-label={`Open ${story.title}`}>
    <img src={story.images[0]} alt="" loading="lazy" /><span className="campaign-shade" />
    <span className="campaign-copy"><small>{story.label}</small><strong>{story.title}</strong><ArrowDownRight size={22} /></span>
  </button>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeStory, setActiveStory] = useState<Story | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeFilm, setActiveFilm] = useState<string | null>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === 'Escape' && (setActiveStory(null), setActiveImage(null), setActiveFilm(null));
    window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close);
  }, []);
  const nav = [['Work', '#work'], ['Films', '#films'], ['About', '#about'], ['Contact', '#contact']];
  const closeMenu = () => setMenuOpen(false);
  return <main>
    <header className="site-header"><a href="#top" className="identity" aria-label="WIDE LIFE home"><Mark /><span>WIDE LIFE</span></a><nav className="desktop-nav">{nav.map(([text, href]) => <a key={href} href={href}>{text}</a>)}</nav><a className="header-instagram" href={CONFIG.instagramUrl} target="_blank" rel="noreferrer"><Instagram size={16} /> Instagram</a><button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open navigation"><Menu /></button></header>
    <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}><button onClick={closeMenu} className="close-button" aria-label="Close navigation"><X /></button><Mark /><nav>{nav.map(([text, href]) => <a key={href} href={href} onClick={closeMenu}>{text}</a>)}</nav><a href={CONFIG.instagramUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>Follow {CONFIG.handle} <ArrowDownRight /></a></div>
    <section className="hero" id="top"><img src={CONFIG.heroImage} alt="WIDE LIFE campaign look" fetchPriority="high" /><div className="hero-overlay" /><div className="hero-topline"><span>Design & fashion</span><span>Worldwide delivery</span></div><div className="hero-copy"><p>WIDE LIFE / ART. FASHION.</p><h1>Wear the<br /><i>moment.</i></h1><a href="#work">View selected work <ArrowDownRight /></a></div><div className="hero-credit">Campaign archive<br />{CONFIG.handle}</div></section>
    <section className="intro" id="about"><p className="eyebrow">About the label</p><h2>Fashion with a point of view.<br /><em>Made to travel.</em></h2><p className="intro-text">WIDE LIFE is a design and fashion label creating expressive pieces for a worldwide audience. The studio is led by Mides of TESTYLED, creative director, designer and fashion stylist.</p><div className="intro-actions"><a className="text-link" href={CONFIG.ownerUrl} target="_blank" rel="noreferrer">Meet Mides / TESTYLED <ArrowDownRight size={18} /></a><a className="text-link" href={CONFIG.instagramUrl} target="_blank" rel="noreferrer">Follow {CONFIG.handle} <ArrowDownRight size={18} /></a></div></section>
    <section className="work" id="work"><div className="section-heading"><p className="eyebrow">Selected work</p><span>Scroll to explore <ArrowDownRight size={18} /></span></div><div className="campaign-grid">{CONFIG.stories.map((story) => <CampaignCard key={story.id} story={story} onOpen={() => setActiveStory(story)} />)}</div></section>
    <section className="feature-film" id="films"><video src={CONFIG.heroFilm} muted autoPlay loop playsInline /><div className="film-overlay" /><button className="film-button" onClick={() => setActiveFilm(CONFIG.heroFilm)}><Play fill="currentColor" size={16} /> Play campaign film</button><p>WIDE LIFE MOVING IMAGE / 01</p></section>
    <section className="film-strip" aria-label="More campaign films">{CONFIG.films.slice(1).map((film, index) => <button key={film} onClick={() => setActiveFilm(film)}><video src={film} muted playsInline preload="metadata" /><span><Play fill="currentColor" size={12} /> Film 0{index + 2}</span></button>)}</section>
    <section className="contact" id="contact"><p className="eyebrow">For current pieces & commissions</p><h2>Start with a<br /><em>conversation.</em></h2><a className="contact-button" href={CONFIG.whatsappUrl} target="_blank" rel="noreferrer">Order on WhatsApp <ArrowDownRight /></a><p className="contact-note">For orders, kindly send WIDE LIFE a message on WhatsApp.</p></section>
    <footer><Mark /><p>© {new Date().getFullYear()} WIDE LIFE</p><a href={CONFIG.instagramUrl} target="_blank" rel="noreferrer">{CONFIG.handle}</a></footer>
    {activeStory && <div className="modal story-modal" role="dialog" aria-modal="true" aria-label={activeStory.title}><button className="modal-close" onClick={() => setActiveStory(null)} aria-label="Close"><X /></button><header><p>{activeStory.label}</p><h2>{activeStory.title}</h2></header><div className="story-images">{activeStory.images.map((image, index) => <button key={image} onClick={() => setActiveImage(image)}><img src={image} alt={`${activeStory.title}, look ${index + 1}`} /><span>Open</span></button>)}</div></div>}
    {activeImage && <div className="modal image-modal" role="dialog" aria-modal="true"><button className="modal-close" onClick={() => setActiveImage(null)} aria-label="Close"><X /></button><img src={activeImage} alt="Campaign look" /></div>}
    {activeFilm && <div className="modal video-modal" role="dialog" aria-modal="true"><button className="modal-close" onClick={() => setActiveFilm(null)} aria-label="Close"><X /></button><video src={activeFilm} controls autoPlay playsInline /></div>}
  </main>;
}
