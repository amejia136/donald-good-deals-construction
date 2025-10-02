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
            {
                src: workFour,
                title: "Exterior Painting",
                alt: "Complete exterior house painting in rich brown with contrasting dark trim."
            },
            {
                src: workFive,
                title: "Power Washing",
                alt: "Restoring a home's exterior siding with professional power washing to remove dirt and mildew."
            },
            {
                src: workSix,
                title: "Bathroom Remodeling",
                alt: "Bathroom renovation in progress with large wall tiles being installed for a modern finish."
            },
            {
                src: workSeven,
                title: "Exterior Painting",
                alt: "Fresh exterior house painting in bold blue with crisp white trim for a modern look."
            },

            {
                src: workEight,
                title: "Exterior Painting",
                alt: "Full exterior repaint in rich reddish-brown with matching trim for a refreshed curb appeal."
            },

            {
                src: workNine,
                title: "Bathroom Remodeling",
                alt: "Modern bathroom remodel featuring a sleek vanity, LED mirror, and floating wall shelves."
            },

            {
                src: workTen,
                title: "Custom Shed Construction",
                alt: "Framing and exterior sheathing in progress during a custom shed build."
            },
            {
                src: workEleven,
                title: "Custom Shed Construction",
                alt: "Completed custom-built shed with painted siding, doors, and shingle roof."
            },

            {
                src: workTwelve,
                title: "Roof Replacement",
                alt: "Roofing crew removing old shingles during a full roof replacement project."
            },
            {
                src: workThirteen,
                title: "Roof Replacement",
                alt: "Completed roof installation with new gray shingles providing a clean and durable finish."
            },

            {
                src: workFourteen,
                title: "Interior Carpentry",
                alt: "Custom wainscoting and trim work along a staircase with dark hardwood steps."
            },
            {
                src: workFifteen,
                title: "Interior Carpentry",
                alt: "New railing installation with wood posts and white balusters for a clean, safe finish."
            },

            {
                src: workSixteen,
                title: "Roof Installation",
                alt: "New roof installation in progress with underlayment and shingle materials prepared."
            },
            {
                src: workSeventeen,
                title: "Bathroom Remodeling",
                alt: "Bathroom upgrade with safety grab bars installed for added support and accessibility."
            },

            {
                src: workEighteen,
                title: "Garage Renovation",
                alt: "Garage makeover with new epoxy flooring and gray walls accented by a bold red stripe."
            },
            {
                src: workNineteen,
                title: "Drywall Installation",
                alt: "Drywall installation and finishing work to prepare interior walls for painting."
            },

            {
                src: workTwenty,
                title: "Exterior Painting",
                alt: "Front entry refresh with updated trim, painted doorframe, and clean brick steps."
            },
            {
                src: workTwentyone,
                title: "Exterior Painting",
                alt: "Side view of a full house repaint in bold blue siding with white trim and wood fencing."
            },

            {
                src: workTwentytwo,
                title: "Commercial Painting",
                alt: "Exterior commercial building painted in gray for a clean and professional look."
            },
            {
                src: workTwentythree,
                title: "Garage Flooring",
                alt: "Residential garage upgraded with durable epoxy flooring in a speckled gray finish."
            },

            {
                src: workTwentyfour,
                title: "Bathroom Remodeling",
                alt: "Modern bathroom remodel with wood-look wall tile, matte black fixtures, and walk-in shower base."
            },
            {
                src: workTwentyfive,
                title: "Drywall Installation",
                alt: "Drywall finishing in progress during a full room renovation, preparing walls for paint and fixtures."
            },

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
