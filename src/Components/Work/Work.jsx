import React, { useEffect, useMemo, useState } from "react";
import "./Work.css";

// ==== IMPORT ALL 36 IMAGES ====
// Adjust path if your folder differs
import workBackground from '../../Assets/NavigationPics/work-bg.jpg';
import workOne from "../../Assets/WorkGallery/workOne.jpg";
import workTwo from "../../Assets/WorkGallery/workTwo.jpg";
import workThree from "../../Assets/WorkGallery/workThree.jpg";
import workFour from "../../Assets/WorkGallery/workFour.jpg";
import workFive from "../../Assets/WorkGallery/workFive.jpg";
import workSix from "../../Assets/WorkGallery/workSix.jpg";
import workSeven from "../../Assets/WorkGallery/workSeven.jpg";
import workEight from "../../Assets/WorkGallery/workEight.jpg";
import workNine from "../../Assets/WorkGallery/workNine.jpg";
import workTen from "../../Assets/WorkGallery/workTen.jpg";
import workEleven from "../../Assets/WorkGallery/workEleven.jpg";
import workTwelve from "../../Assets/WorkGallery/workTwelve.jpg";
import workThirteen from "../../Assets/WorkGallery/workThirteen.jpg";
import workFourteen from "../../Assets/WorkGallery/workFourteen.jpg";
import workFifteen from "../../Assets/WorkGallery/workFifteen.jpg";
import workSixteen from "../../Assets/WorkGallery/workSixteen.jpg";
import workSeventeen from "../../Assets/WorkGallery/workSeventeen.jpg";
import workEighteen from "../../Assets/WorkGallery/workEighteen.jpg";
import workNineteen from "../../Assets/WorkGallery/workNineteen.jpg";
import workTwenty from "../../Assets/WorkGallery/workTwenty.jpg";
import workTwentyone from "../../Assets/WorkGallery/workTwentyone.jpg";
import workTwentytwo from "../../Assets/WorkGallery/workTwentytwo.jpg";
import workTwentythree from "../../Assets/WorkGallery/workTwentythree.jpg";
import workTwentyfour from "../../Assets/WorkGallery/workTwentyfour.jpg";
import workTwentyfive from "../../Assets/WorkGallery/workTwentyfive.jpg";
import workTwentysix from "../../Assets/WorkGallery/workTwentysix.jpg";
import workTwentyseven from "../../Assets/WorkGallery/workTwentyseven.jpg";
import workTwentyeight from "../../Assets/WorkGallery/workTwentyeight.jpg";
import workTwentynine from "../../Assets/WorkGallery/workTwentynine.jpg";
import workThirty from "../../Assets/WorkGallery/workThirty.jpg";
import workThirtyone from "../../Assets/WorkGallery/workThirtyone.jpg";
import workThirtytwo from "../../Assets/WorkGallery/workThirtytwo.jpg";
import workThirtythree from "../../Assets/WorkGallery/workThirtythree.jpg";
import workThirtyfour from "../../Assets/WorkGallery/workThirtyfour.jpg";
import workThirtyfive from "../../Assets/WorkGallery/workThirtyfive.jpg";

export default function Work() {
    const items = useMemo(
        () => [
            {
                src: workOne,
                title: "Kitchen Remodeling",
                alt: "Complete kitchen remodel featuring white raised-panel cabinetry, black granite countertops, and subway tile backsplash"
            },
            {
                src: workTwo,
                title: "Exterior Painting & Repairs",
                alt: "Exterior painting project featuring freshly painted white porch railings and spindles with brick staircase"
            },
            {
                src: workThree,
                title: "Basement Finishing",
                alt: "Basement finishing project with white coffered drop ceiling tiles, recessed lighting, and freshly painted walls"
            },
            { src: workFour, alt: "Project 4" },
            { src: workFive, alt: "Project 5" },
            { src: workSix, alt: "Project 6" },
            { src: workSeven, alt: "Project 7" },
            { src: workEight, alt: "Project 8" },
            { src: workNine, alt: "Project 9" },
            { src: workTen, alt: "Project 10" },
            { src: workEleven, alt: "Project 11" },
            { src: workTwelve, alt: "Project 12" },
            { src: workThirteen, alt: "Project 13" },
            { src: workFourteen, alt: "Project 14" },
            { src: workFifteen, alt: "Project 15" },
            { src: workSixteen, alt: "Project 16" },
            { src: workSeventeen, alt: "Project 17" },
            { src: workEighteen, alt: "Project 18" },
            { src: workNineteen, alt: "Project 19" },
            { src: workTwenty, alt: "Project 20" },
            { src: workTwentyone, alt: "Project 21" },
            { src: workTwentytwo, alt: "Project 22" },
            { src: workTwentythree, alt: "Project 23" },
            { src: workTwentyfour, alt: "Project 24" },
            { src: workTwentyfive, alt: "Project 25" },
            { src: workTwentysix, alt: "Project 26" },
            { src: workTwentyseven, alt: "Project 27" },
            { src: workTwentyeight, alt: "Project 28" },
            { src: workTwentynine, alt: "Project 29" },
            { src: workThirty, alt: "Project 30" },
            { src: workThirtyone, alt: "Project 31" },
            { src: workThirtytwo, alt: "Project 32" },
            { src: workThirtythree, alt: "Project 33" },
            { src: workThirtyfour, alt: "Project 34" },
            { src: workThirtyfive, alt: "Project 35" },
        ],
        []
    );

    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(0);

    const openAt = (i) => {
        setActive(i);
        setOpen(true);
    };

    const next = () => setActive((i) => (i + 1) % items.length);
    const prev = () => setActive((i) => (i - 1 + items.length) % items.length);

    useEffect(() => {
        if (!open) return;
        const onKey = (e) => {
            if (e.key === "Escape") setOpen(false);
            if (e.key === "ArrowRight") setActive((i) => (i + 1) % items.length);
            if (e.key === "ArrowLeft") setActive((i) => (i - 1 + items.length) % items.length);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, items.length]);


    return (
        <div className="work-page">
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
                        Our work speaks for itself. <br />
                        From full remodels to detailed <br />
                        repairs, we bring licensed skill <br />
                        and personal care to every <br />
                        home we touch. Browse our <br />
                        past projects to see the <br />
                        quality and dedication <br />
                        behind what we do.
                    </p>
                </div>
            </section>

            <p style={{padding: '8px 16px'}}>Loaded images: {items.filter(it => !!it.src).length} / {items.length}</p>
            <section className="work-gallery">
                {items.map((it, i) => (
                    <button
                        className="work-card"
                        key={i}
                        onClick={() => openAt(i)}
                        aria-label={`Open image ${i + 1}`}
                    >
                        <img src={it.src} alt={it.alt} loading="lazy" />
                        <div className="work-card__text">
                            {it.title && <h3 className="work-card__title">{it.title}</h3>}
                            <p className="work-card__caption">{it.alt}</p>
                        </div>
                    </button>
                ))}
            </section>

            {open && (
                <div className="lightbox" role="dialog" aria-modal="true">
                    <button className="lightbox__close" onClick={() => setOpen(false)}>×</button>
                    <button className="lightbox__nav lightbox__nav--prev" onClick={prev}>‹</button>
                    <img className="lightbox__img" src={items[active].src} alt={items[active].alt} />
                    <button className="lightbox__nav lightbox__nav--next" onClick={next}>›</button>
                    <div className="lightbox__caption">
                        {items[active].title && <strong>{items[active].title}</strong>}
                        {items[active].title && <br />}
                        {items[active].alt}
                    </div>
                </div>
            )}
        </div>
    );
}
