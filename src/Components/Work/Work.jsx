import React, { useMemo, useState } from "react";
import "./Work.css";

// ===== Hero background stays the same (use your existing image) =====
import workBackground from "../../Assets/NavigationPics/work-bg.jpg";

// ===== IMPORT YOUR PHOTOS HERE =====
// You can keep adding until you hit all 31.
import workOne   from "../../Assets/WorkGallery/workOne.jpg";
import workTwo   from "../../Assets/WorkGallery/workTwo.jpg";
import workThree from "../../Assets/WorkGallery/workThree.jpg";
import workFour  from "../../Assets/WorkGallery/workFour.jpg";
import workFive  from "../../Assets/WorkGallery/workFive.jpg";
import workSix   from "../../Assets/WorkGallery/workSix.jpg";
import workSeven from "../../Assets/WorkGallery/workSeven.jpg";
import workEight from "../../Assets/WorkGallery/workEight.jpg";
// import workNine  from "../../Assets/NavigationPics/workNine.jpg";
// ...
// import workThirtyOne from "../../Assets/NavigationPics/workThirtyOne.jpg";

// Put every image in this list (order = how they show up)
const ALL_PHOTOS = [
    { src: workOne,   alt: "Exterior entry and stair repair" },
    { src: workTwo,   alt: "Soffit/fascia repair in progress" },
    { src: workThree, alt: "Cedar shake home – exterior work" },
    { src: workFour,  alt: "Kitchen refinishing and backsplash" },
    { src: workFive,  alt: "Blue siding repaint – detail" },
    { src: workSix,   alt: "Large-format tile installation" },
    { src: workSeven, alt: "Basement ceiling and recessed lights" },
    { src: workEight, alt: "New railings and columns" },
    // { src: workNine, alt: "…" },
    // …add the rest up to 31
];

function Work() {
    // (Optional) tweak ordering here later (e.g., newest first)
    const photos = useMemo(() => ALL_PHOTOS, []);

    // Lightbox state
    const [openIndex, setOpenIndex] = useState(null);
    const close = () => setOpenIndex(null);
    const prev  = (e) => { e?.stopPropagation(); setOpenIndex(i => (i - 1 + photos.length) % photos.length); };
    const next  = (e) => { e?.stopPropagation(); setOpenIndex(i => (i + 1) % photos.length); };

    return (
        <div className="work-page">
            {/* ===== HERO ===== */}
            <section
                className="work-hero"
                style={{ backgroundImage: `url(${workBackground})` }}
            >
                <div className="work-yellow" />
                <div className="work-content">
                    <h1 className="work-title">OUR WORK</h1>
                    <p className="work-subtitle">
                        Trusted Home Improvement <br />
                        Solutions for Suffolk County
                    </p>
                    <p className="work-blurb">
                        From exterior updates to full interior remodels, browse a curated
                        selection of recent jobs. Tap any photo to view it full-screen.
                    </p>
                </div>
            </section>

            {/* ===== MASONRY GALLERY ===== */}
            <section className="gallery">
                <h2 className="gallery-title">Project Gallery</h2>

                <div className="masonry">
                    {photos.map((p, i) => (
                        <article className="g-card" key={p.src + i} onClick={() => setOpenIndex(i)}>
                            <img
                                src={p.src}
                                alt={p.alt || "Project photo"}
                                className="g-img"
                                loading="lazy"
                                decoding="async"
                            />
                            {p.alt && <div className="g-caption">{p.alt}</div>}
                        </article>
                    ))}
                </div>
            </section>

            {/* ===== LIGHTBOX ===== */}
            {openIndex !== null && (
                <div className="lightbox" onClick={close} role="dialog" aria-modal="true">
                    <button className="lb-close" onClick={close} aria-label="Close">✕</button>
                    <button className="lb-nav lb-prev" onClick={prev} aria-label="Previous">‹</button>
                    <figure className="lb-figure" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={photos[openIndex].src}
                            alt={photos[openIndex].alt || "Project photo"}
                            className="lb-img"
                        />
                        {photos[openIndex].alt && (
                            <figcaption className="lb-cap">{photos[openIndex].alt}</figcaption>
                        )}
                    </figure>
                    <button className="lb-nav lb-next" onClick={next} aria-label="Next">›</button>
                </div>
            )}
        </div>
    );
}

export default Work;
