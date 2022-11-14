import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/portfolio.module.scss';
import { useRef, useState } from 'react';
import React from "react";
import '../../src/index.css'
// import Example from "../components/slider/example";
// const Line = () => {
//     const settings = {
//         arrows: true,
//         dots: true,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         vertical: true,
//         verticalSwiping: true,
//         nextArrow:
//             <div>
//                 <div className={`${styles.nextSlickArrow}`}> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="22"
//                     viewBox="0 0 15.747 27.494">
//                     <path d="M-1206.278,4470.74l10.919,10.919-10.919,10.919"
//                         transform="translate(1209.106 -4467.912)" fill="none" stroke="#000" strokeLinecap="round"
//                         strokeLinejoin="round" strokeWidth="4" />
//                 </svg> </div>
//             </div>
//         ,
//         prevArrow:
//             <div>
//                 <div className={`${styles.prevSlickArrow}`
//                 }> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="22"
//                     viewBox="0 0 15.747 27.495">
//                         <path d="M0,0,10.919,10.919,0,21.838"
//                             transform="translate(12.919 24.666) rotate(180)" fill="none" stroke="#000" strokeLinecap="round"
//                             strokeLinejoin="round" strokeWidth="4" />
//                     </svg> </div >
//             </div>,
//         // beforeChange: function(currentSlide:any, nextSlide:any) {
//         //   console.log("before change", currentSlide, nextSlide);
//         // },
//         // afterChange: function(currentSlide:any) {
//         //   console.log("after change", currentSlide);
//         // }
//     };
//     return (
//         <>
//             <div style={{background: "red", maxWidth: "500px", margin: "70px auto"}}>
//                 <Slider {...settings}>
//                     <div>
//                         <h3 style={{textAlign: "center"}}>1</h3>
//                     </div>
//                     <div>
//                         <h3 style={{textAlign: "center"}}>2</h3>
//                     </div>
//                     <div>
//                         <h3 style={{textAlign: "center"}}>3</h3>
//                     </div>
//                     <div>
//                         <h3 style={{textAlign: "center"}}>4</h3>
//                     </div>
//                     <div>
//                         <h3 style={{textAlign: "center"}}>5</h3>
//                     </div>
//                     <div>
//                         <h3 style={{textAlign: "center"}}>6</h3>
//                     </div>
//                 </Slider>
//             </div>
//             {/* <div>
//                 <ul className={styles.listUl}>
//                     <li className={styles.listItems}>Lorem, ipsum.</li>
//                     <li className={styles.listItems}>Lorem, ipsum dolor.</li>
//                     <li className={styles.listItems}>Lorem, ipsum.</li>
//                     <li className={styles.listItems}>Lorem, ipsum dolor.</li>
//                     <li className={styles.listItems}>Lorem, ipsum.</li>

//                 </ul>
//             </div> */}
//         </>
//     )
// }


const Line = () => {
    const [transition, setTransition ] = useState(false)
    const myRef = useRef()
    // const { ref: myRef, inView: myElementInVisible } = useInView();
    // useEffect(() => {
    //     setportfolio(myElementInVisible)
    // }), []
    console.log(myRef.current)
    const Data = [{
        year: '20',
        img: [{
            imgone: 'levrx.png',
            imgtwo: 'zydus.png',
            imgthree: '/wattsense.png',
            imgfour: '/ted.png',
        }]
    },
    {
        year: '21',
        img: [{
            imgone: '/levrx.png',
            imgtwo: '/ted.png',
            imgthree: '/wattsense.png',
            imgfour: '/zydus.png'
        }]
    },
    {
        year: '22',
        img: [{
            imgone: '/wattsense.png',
            imgtwo: '/zydus.png',
            imgthree: '/levrx.png',
            imgfour: '/ted.png',
        }]
    },
    {
        year: '23',
        img: [{
            imgone: '/levrx.png',
            imgtwo: '/zydus.png',
            imgthree: '/wattsense.png',
            imgfour: '/ted.png',
        }]
    },
    {
        year: '24',
        img: [{
            imgone: '/levrx.png',
            imgtwo: '/ted.png',
            imgthree: '/wattsense.png',
            imgfour: '/zydus.png'
        }]
    }]
    const [transform, setTransform] = useState(false);
    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
        className: "center",
        centerPaddding: "100px",
        nextArrow:
            <div>
                <div className={`${styles.nextSlickArrow}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13.014" height="53.411" viewBox="0 0 13.014 53.411">
                        <path id="Down-arrow" d="M186.907,44.863,180.4,53.411l-6.507-8.548h5.284V0h2.445V44.863Z" transform="translate(-173.893)" fill="#bf390b" />
                    </svg>

                </div>
            </div>
        ,
        prevArrow:
            <div>
                <div className={`${styles.prevSlickArrow}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13.013" height="53.411" viewBox="0 0 13.013 53.411">
                        <path id="Up-arrow" d="M186.906,8.548,180.4,0l-6.507,8.548h5.284V53.412h2.445V8.548Z" transform="translate(-173.893)" fill="#bf390b" />
                    </svg>
                </div >
            </div>,
        beforeChange: function(currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
            // nextSlide.style.transform = "translateY(-50%)"
        },
        afterChange: function(currentSlide) {
          console.log("after change", currentSlide);
        }
    };

    let a = (window.innerWidth * 60/100)
    console.log(a)
    return (
        <>
            <div /*ref={myRef}*/ id="portfolioSec" className={`${styles.lineportfolioSection} `} style={{ color: "grey" ,  transform: transition ? `matrix(1, 0, 0, 1, -${a}, 0)` : 'matrix(1, 0, 0, 1, 0, 0)', transition: '1s all ease'}}>
                <div>
                    <p>{a}</p>
                    <div className={styles.lineportPadding}>
                        <div  className={styles.linemainPortfolio}>
                            <div className={styles.linecontentFirstHalf}>
                                <div className={styles.linecontentAndYearDiv}>
                                    <div className={styles.linecontentMainDiv}>
                                        <h3 style={{ fontSize: "30px", textTransform: "uppercase" }}>Check out our client portfolio</h3>
                                        <div>
                                            <h4 style={{ fontSize: "20px", textTransform: "uppercase" }}>Think Big, We Make It, Possible</h4>
                                            <p>We are the group of highly specialized people delivering customized software development services including mobile app development, website development, graphic designing, and other IT services to meet the requirement of the client. We transform ideas into reliable product.</p>
                                            <button style={{ padding: "11px 47px", fontSize: "15px", borderRadius: "0", fontWeight: "700" }} onClick={() => { setTransform(true);setTransition(true)} }>Click Me</button>
                                        </div>
                                    </div>
                                    <div className={styles.lineyearAndArrowDiv}>
                                        <div className={styles.lineyearAndArrowSubDiv}>
                                            <div className={styles.linesliderBackArrowDiv}>
                                                <img src={'/sliderBackBtn.png'} className={styles.linesliderBackArrowImg} alt='backBtn' onClick={() => setTransition(false)}/>
                                            </div>
                                            <div>
                                                <h3 className={styles.lineyearFirstHalf}>20</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.linecontentSecondHalf}>
                                <div id='yearSlider' ref={myRef}>
                                    <Slider {...settings} >
                                        {Data.map((e, i) => {
                                            return (
                                                <>
                                                    <div style={{margin: '10px 0'}} >
                                                        <div className={styles.lineslidingYearAndImgs} key={i}>
                                                            <div className={styles.lineslidingYearDiv}>
                                                                <h4 className={styles.lineslidingYear}>{e.year}</h4>
                                                            </div>
                                                            {e.img.map((j, i) => {
                                                                return (
                                                                    <>
                                                                        <div key={i} className='slidingImgsMainDiv'>
                                                                            <div className={styles.slidingImgsDiv}>
                                                                                <img src={j.imgone} alt="" width="80%" />
                                                                            </div>
                                                                            <div className={styles.slidingImgsDiv} style={{ width: "55%" }}>
                                                                                <img src={j.imgtwo} alt="" width="100%" />
                                                                            </div>
                                                                            <div className={styles.slidingImgsDiv} style={{ width: "80%" }}>
                                                                                <img src={j.imgthree} alt="" width="100%" />
                                                                            </div>
                                                                            <div className={styles.slidingImgsDiv} style={{ width: "70%" }}>
                                                                                <img src={j.imgfour} alt="" width="100%" />
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                )
                                                            })}

                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Line;

// const Line = () => {
//     return (
//         <>
//             <Example />
//         </>
//     )
// }
// export default Line;