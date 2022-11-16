import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from "react";
import styles from '../styles/portfolio.module.scss';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface PortfolioSec {
  setportfolio: any
}

const PortfolioSec: React.FC<PortfolioSec> = ({ setportfolio }) => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const { ref: myRef, inView: myElementInVisible } = useInView();
  useEffect(() => {
    setportfolio(myElementInVisible)
  })


  // const leftHandleClick = () => {
  //   leftRef.current?.scrollIntoView({ behavior: 'smooth' });
  //   // console.log('first');
  // };

  // const rightHandleClick = () => {
  //   rightRef.current?.scrollIntoView({ behavior: 'smooth' });

  // };

  const [transition, setTransition] = useState(false);
  const [windowWidth, setWindowWidth] = useState<any>();

  useEffect(() => {
    let width = (window.innerWidth * 60 / 100);
    setWindowWidth(width);
    console.log('WindowWidth', windowWidth);
  }, [])
  
  const Data = [{
    year: '17',
    img: [{
      imgone: '/yr_wockhardt.png',
      imgtwo: '/yr_wattsense.png',
      imgthree: '/yr_coast2coast.png',
      imgfour: '/yr_allegra.png',
    }]
  },
  {
    year: '18',
    img: [{
      imgone: '/yr_wockhardt.png',
      imgtwo: '/yr_wattsense.png',
      imgthree: '/yr_coast2coast.png',
      imgfour: '/yr_allegra.png',
    }]
  },
  {
    year: '19',
    img: [{
      imgone: '/yr_wockhardt.png',
      imgtwo: '/yr_wattsense.png',
      imgthree: '/yr_coast2coast.png',
      imgfour: '/yr_allegra.png',
    }]
  },
  {
    year: '20',
    img: [{
      imgone: '/yr_wockhardt.png',
      imgtwo: '/yr_wattsense.png',
      imgthree: '/yr_coast2coast.png',
      imgfour: '/yr_allegra.png',
    }]
  },
  {
    year: '21',
    img: [{
      imgone: '/yr_wockhardt.png',
      imgtwo: '/yr_wattsense.png',
      imgthree: '/yr_coast2coast.png',
      imgfour: '/yr_allegra.png',
    }]
  },
    ,
  {
    year: '22',
    img: [{
      imgone: '/yr_wockhardt.png',
      imgtwo: '/yr_wattsense.png',
      imgthree: '/yr_coast2coast.png',
      imgfour: '/yr_allegra.png',
    }]
  }]

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
    initialSlide: 5,
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
        </div>
      </div>,
    beforeChange: function (currentslide: any, nextSlide: any) {
      console.log("before change", currentslide, nextSlide);
    },
    afterChange: function (currentslide: any) {
      console.log("after change", currentslide);
    }
  };



  return (
    <>
      {/* <div ref={myRef} id="portfolioSec" className={styles.portfolioSection}>
        <div>
          <div>
            <div className={styles.portContentMainDiv}>
              <div ref={rightRef} className={styles.portContentOne}>
                <div className={styles.portContentSubDiv}>
                  <div>
                    <h2 className={styles.portHeading}>Check out our <span className={styles.portHeadingSpan}>client portfolio</span></h2>
                    <div className={styles.portContentDiv}>
                      <h3 className={styles.portSubHeading}>Think <span className={styles.portSubHeadingSpan}>Big</span>, We Make It, <span className={styles.portSubHeadingSpan}>Possible</span></h3>
                      <p className={styles.portPara}>We are a team of highly specialized people delivering customized software development services including mobile app development, website development, graphic design, and other IT services to meet your requirements. We transform ideas into reliable products.</p>
                    </div>
                    <div>
                      <button className={`${styles.portButton}`} onClick={() => { leftHandleClick(); }}><span className={styles.portBtn}>Click Me</span><svg xmlns="http://www.w3.org/2000/svg" width="37.256" height="10.347" viewBox="0 0 37.256 10.347">
                        <g id="Group_3319" data-name="Group 3319" transform="translate(-453 -1675)">
                          <path id="arrow-small-left" d="M-19.137,10.314H14.668L11.829,7.475A.863.863,0,0,1,13.046,6.25l3.7,3.71a1.726,1.726,0,0,1,.509,1.217h0a1.726,1.726,0,0,1-.509,1.208l-3.7,3.71a.863.863,0,0,1-1.217-1.225l2.839-2.83H-19.137A.863.863,0,0,1-20,11.177.863.863,0,0,1-19.137,10.314Z" transform="translate(473 1669.001)" fill="#fff" />
                        </g>
                      </svg></button>
                    </div>
                  </div>
                </div>

              </div>
              <div className={styles.portContentTwo}>
                <div className={styles.yearAndBackDiv}>
                  <div>
                    <img onClick={rightHandleClick} src={'/sliderBackBtn.png'} />
                  </div>
                  <div id='yearSlider'>
                    <Slider {...settings}>
                      <div>
                        <h4 className={styles.portYear}>20<span className={styles.portYearSpan}>17</span></h4>
                      </div>
                      <div>
                        <h4 className={styles.portYear}>20<span className={styles.portYearSpan}>18</span></h4>
                      </div>
                      <div>
                        <h4 className={styles.portYear}>20<span className={styles.portYearSpan}>19</span></h4>
                      </div>
                      <div>
                        <h4 className={styles.portYear}>20<span className={styles.portYearSpan}>20</span></h4>
                      </div>
                      <div>
                        <h4 className={styles.portYear}>20<span className={styles.portYearSpan}>21</span></h4>
                      </div>
                      <div>
                        <h4 className={styles.portYear}>20<span className={styles.portYearSpan}>22</span></h4>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
              <div ref={leftRef} className={styles.portContentThree} style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
                <img src="/comp/ted.png" alt="" />
                <img src="/comp/allgera.png" alt="" />
                <img src="/comp/johnson.png" alt="" />
                <img src="/comp/zydus.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.portImgMainDiv}>
        <div className={styles.portImgDiv}>
          <div className={styles.portSubImgs} style={{ width: "150px" }}>
            <img src="/comp/ted.png" alt="" className={styles.portImgs} />
          </div>
          <div className={styles.portSubImgs} style={{ width: "155px" }}>
            <img src="/comp/johnson.png" alt="" className={styles.portImgs} />
          </div>
          <div className={styles.portSubImgs} style={{ width: "125px" }}>
            <img src="/comp/levrx.png" alt="" className={styles.portImgs} />
          </div>
          <div className={styles.portSubImgs} style={{ width: "200px" }}>
            <img src="/comp/allgera.png" alt="" className={styles.portImgs} />
          </div>
          <div className={styles.portSubImgs} style={{ width: "115px" }}>
            <img src="/comp/zydus.png" alt="" className={styles.portImgs} />
          </div>
          <div className={styles.portSubImgs} style={{ width: "200px" }}>
            <img src="/comp/wattsense.png" alt="" className={styles.portImgs} />
          </div>
        </div>
        <div></div>
      </div> */}
      <div>
        <div style={{ overflow: "hidden" }}>
          <div ref={myRef} id="portfolioSec" className={`${styles.lineportfolioSection} `} style={{ color: "grey", transform: transition ? `matrix(1, 0, 0, 1, -${windowWidth}, 0)` : 'matrix(1, 0, 0, 1, 0, 0)', transition: '1s all ease' }}>
            <div>
              {/* <p>{a}</p> */}
              <div className={styles.lineportPadding}>
                <div className={styles.linemainPortfolio}>
                  <div className={styles.linecontentFirstHalf}>
                    <div className={styles.linecontentAndYearDiv}>
                      <div className={styles.linecontentMainDiv}>
                        <h2 className={styles.portHeading}>Check out our <span className={styles.portHeadingSpan}>client portfolio</span></h2>
                        <div>
                          <h3 className={styles.portSubHeading}>Think <span className={styles.portSubHeadingSpan}>Big</span>, We Make It, <span className={styles.portSubHeadingSpan}>Possible</span></h3>
                          <p className={styles.portPara}>We are a team of highly specialized people delivering customized software development services including mobile app development, website development, graphic design, and other IT services to meet your requirements. We transform ideas into reliable products.</p>
                          <button className={`${styles.portButton}`} onClick={() => { setTransition(true) }}><span className={styles.portBtn}>Click Me</span><svg xmlns="http://www.w3.org/2000/svg" width="37.256" height="10.347" viewBox="0 0 37.256 10.347">
                            <g id="Group_3319" data-name="Group 3319" transform="translate(-453 -1675)">
                              <path id="arrow-small-left" d="M-19.137,10.314H14.668L11.829,7.475A.863.863,0,0,1,13.046,6.25l3.7,3.71a1.726,1.726,0,0,1,.509,1.217h0a1.726,1.726,0,0,1-.509,1.208l-3.7,3.71a.863.863,0,0,1-1.217-1.225l2.839-2.83H-19.137A.863.863,0,0,1-20,11.177.863.863,0,0,1-19.137,10.314Z" transform="translate(473 1669.001)" fill="#fff" />
                            </g>
                          </svg></button>
                        </div>
                      </div>
                      <div className={styles.lineyearAndArrowDiv}>
                        <div className={styles.lineyearAndArrowSubDiv}>
                          <div className={styles.linesliderBackArrowDiv}>
                            <img src={'/sliderBackBtn.png'} className={`${styles.linesliderBackArrowImg}${transition ? styles.lineshowBackArrow : ''}`} style={{ cursor: "pointer" }} alt='backBtn' onClick={() => setTransition(false)} width="100%" />
                          </div>
                          <div>
                            <p className={styles.lineyearFirstHalf}>20</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.portImgMainDiv}>
                      <div className={`${styles.portImgDiv} ${transition ? styles.portImgsHidden : styles.portImgsVisible}`}>
                        <div className={styles.portSubImgs} style={{ width: "150px" }}>
                          <img src="/comp/ted.png" alt="" className={styles.portImgs} />
                        </div>
                        <div className={styles.portSubImgs} style={{ width: "155px" }}>
                          <img src="/comp/johnson.png" alt="" className={styles.portImgs} />
                        </div>
                        <div className={styles.portSubImgs} style={{ width: "125px" }}>
                          <img src="/comp/levrx.png" alt="" className={styles.portImgs} />
                        </div>
                        <div className={styles.portSubImgs} style={{ width: "200px" }}>
                          <img src="/comp/allgera.png" alt="" className={styles.portImgs} />
                        </div>
                        <div className={styles.portSubImgs} style={{ width: "115px" }}>
                          <img src="/comp/zydus.png" alt="" className={styles.portImgs} />
                        </div>
                        <div className={styles.portSubImgs} style={{ width: "200px" }}>
                          <img src="/comp/wattsense.png" alt="" className={styles.portImgs} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.linecontentSecondHalf}>
                    <div id='yearSlider'>
                      <Slider {...settings} >
                        {Data.map((e: any, i: any) => {
                          return (
                           
                              <div style={{ margin: '10px 0' }} key={i}>
                                <div className={styles.lineslidingYearAndImgs}>
                                  <div className={styles.lineslidingYearDiv}>
                                    <h4 className={styles.lineslidingYear}>{e.year}</h4>
                                  </div>
                                  {e.img.map((j: any, i: any) => {
                                    return (
                                      
                                        <div key={i} className='slidingImgsMainDiv'>
                                          <div className={`${styles.slidingImgsDiv} ${transition ? styles.imgOne : ''}`} style={{ width: "65%" }}>
                                            <img src={j.imgone} alt="" width="100%" />
                                          </div>
                                          <div className={`${styles.slidingImgsDiv} ${transition ? styles.imgTwo : ''}`} style={{ width: "65%" }}>
                                            <img src={j.imgtwo} alt="" width="100%" />
                                          </div>
                                          <div className={`${styles.slidingImgsDiv} ${transition ? styles.imgThree : ''}`} style={{ width: "65%" }}>
                                            <img src={j.imgthree} alt="" width="100%" />
                                          </div>
                                          <div className={`${styles.slidingImgsDiv} ${transition ? styles.imgFour : ''}`} style={{ width: "65%" }}>
                                            <img src={j.imgfour} alt="" width="100%" />
                                          </div>
                                        </div>
                                      
                                    )
                                  })}

                                </div>
                              </div>
                            
                          )
                        })}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PortfolioSec;