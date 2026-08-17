import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './FlowingMenu.css';

function FlowingMenu({
  items = [],
  speed = 15,
  textColor = '#ffffff',
  bgColor = 'transparent',
  marqueeBgColor = '#ffffff',
  marqueeTextColor = '#000000',
  borderColor = 'rgba(75, 85, 99, 0.4)'
}) {
  const [activeItem, setActiveItem] = useState(null);
  const [lastItem, setLastItem] = useState(null);
  const previewRef = useRef(null);

  const handleGlobalMouseMove = (e) => {
    if (!previewRef.current) return;
    const cardWidth = 340;
    const cardHeight = 280;

    let targetX = e.clientX - cardWidth / 2;
    let targetY = e.clientY - cardHeight / 2;

    if (targetX < 20) targetX = 20;
    if (targetX + cardWidth > window.innerWidth - 20) {
      targetX = window.innerWidth - cardWidth - 20;
    }
    if (targetY < 20) targetY = 20;
    if (targetY + cardHeight > window.innerHeight - 20) {
      targetY = window.innerHeight - cardHeight - 20;
    }

    gsap.to(previewRef.current, {
      x: targetX,
      y: targetY,
      duration: 0.1,
      ease: 'power3.out',
      overwrite: 'auto'
    });
  };

  const handleItemHover = (item) => {
    setActiveItem(item);
    if (item) setLastItem(item);
  };

  const handleItemLeave = () => {
    setActiveItem(null);
  };

  const currentDisplayItem = activeItem || lastItem;

  return (
    <div className="flowing-menu-container" style={{ backgroundColor: bgColor, borderColor }}>
      <nav className="flowing-menu-nav" onMouseMove={handleGlobalMouseMove}>
        {items.map((item, idx) => (
          <MenuItem
            key={idx}
            {...item}
            speed={speed}
            textColor={textColor}
            marqueeBgColor={marqueeBgColor}
            marqueeTextColor={marqueeTextColor}
            borderColor={borderColor}
            isFirst={idx === 0}
            onHover={() => handleItemHover(item)}
            onLeave={handleItemLeave}
          />
        ))}
      </nav>

      {/* Floating Cursor Preview Image & Project Details */}
      <div className="flowing-menu-hover-preview" ref={previewRef}>
        <div className={`flowing-menu-preview-card ${activeItem ? 'active' : ''}`}>
          {currentDisplayItem && (
            <>
              <div className="flowing-menu-preview-img-wrapper">
                <img
                  src={currentDisplayItem.image}
                  alt={currentDisplayItem.text}
                  className="flowing-menu-hover-preview-img"
                />
              </div>
              <div className="flowing-menu-preview-content">
                <h4 className="flowing-menu-preview-title">{currentDisplayItem.text}</h4>
                {currentDisplayItem.description && (
                  <p className="flowing-menu-preview-desc">{currentDisplayItem.description}</p>
                )}
                {currentDisplayItem.tags && currentDisplayItem.tags.length > 0 && (
                  <div className="flowing-menu-preview-tags">
                    {currentDisplayItem.tags.map((tag, i) => (
                      <span key={i} className="flowing-menu-preview-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function MenuItem({
  link,
  text,
  image,
  description,
  tags,
  speed,
  textColor,
  marqueeBgColor,
  marqueeTextColor,
  borderColor,
  isFirst,
  onHover,
  onLeave
}) {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  const animationRef = useRef(null);
  const [repetitions, setRepetitions] = useState(4);

  const animationDefaults = { duration: 0.5, ease: 'power3.out' };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = (mouseX - width / 2) ** 2 + mouseY ** 2;
    const bottomEdgeDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2;
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  useEffect(() => {
    const calculateRepetitions = () => {
      if (!marqueeInnerRef.current) return;
      const marqueeContent = marqueeInnerRef.current.querySelector('.flowing-menu-marquee-part');
      if (!marqueeContent) return;
      const contentWidth = marqueeContent.offsetWidth;
      if (contentWidth === 0) return;
      const viewportWidth = window.innerWidth;
      const needed = Math.ceil(viewportWidth / contentWidth) + 2;
      setRepetitions(Math.max(4, needed));
    };

    calculateRepetitions();
    window.addEventListener('resize', calculateRepetitions);
    return () => window.removeEventListener('resize', calculateRepetitions);
  }, [text, image]);

  useEffect(() => {
    if (marqueeRef.current && marqueeInnerRef.current) {
      gsap.set(marqueeRef.current, { y: '101%' });
      gsap.set(marqueeInnerRef.current, { y: '-101%' });
    }
  }, []);

  useEffect(() => {
    const setupMarquee = () => {
      if (!marqueeInnerRef.current) return;
      const marqueeContent = marqueeInnerRef.current.querySelector('.flowing-menu-marquee-part');
      if (!marqueeContent) return;
      const contentWidth = marqueeContent.offsetWidth;
      if (contentWidth === 0) return;

      if (animationRef.current) {
        animationRef.current.kill();
      }

      animationRef.current = gsap.to(marqueeInnerRef.current, {
        x: -contentWidth,
        duration: speed,
        ease: 'none',
        repeat: -1
      });
    };

    const timer = setTimeout(setupMarquee, 50);
    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [text, image, repetitions, speed]);

  const handleMouseEnter = ev => {
    onHover?.();
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0);
  };

  const handleMouseLeave = ev => {
    onLeave?.();
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0);
  };

  return (
    <div
      className="flowing-menu-item"
      ref={itemRef}
      style={{ borderTop: isFirst ? 'none' : `1px solid ${borderColor}` }}
    >
      <a
        className="flowing-menu-link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ color: textColor }}
      >
        <div className="flowing-menu-item-info">
          <span className="flowing-menu-title-text">{text}</span>
          {description && (
            <span className="flowing-menu-desc-text">{description}</span>
          )}
        </div>

        {tags && tags.length > 0 && (
          <div className="flowing-menu-tags-list">
            {tags.map((tag, i) => (
              <span key={i} className="flowing-menu-tag-pill">
                {tag}
              </span>
            ))}
          </div>
        )}
      </a>
      <div
        className="flowing-menu-marquee-wrapper"
        ref={marqueeRef}
        style={{ backgroundColor: marqueeBgColor }}
      >
        <div className="flowing-menu-marquee-inner" ref={marqueeInnerRef}>
          {[...Array(repetitions)].map((_, idx) => (
            <div className="flowing-menu-marquee-part" key={idx} style={{ color: marqueeTextColor }}>
              <span className="flowing-menu-marquee-text">{text}</span>
              <div
                className="flowing-menu-marquee-img"
                style={{ backgroundImage: `url(${image})` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;
