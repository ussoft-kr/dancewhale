import React from 'react';
import styles from '@/styles/Intro.module.css';
import {NextPage} from "next";
import Layout from "@/component/common/Layout";
import {Col, Container, Image, Row} from "react-bootstrap";
import KaKaoMap from "@/component/intro/KaKaoMap";
import Slider from "react-slick";

const Intro: NextPage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
    }
    return (
        <Layout>
            <div className={styles.introwrap}>
                <div className={`${styles.section1} d-none d-xl-block`}>
                    <Container fluid>
                        <Row className={'gy-4'}>
                            <Col xl={6} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/intro001.jpg'} alt={'sub-img'}/>
                                </div>
                            </Col>
                            <Col xl={6} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/intro002.jpg'} alt={'sub-img'}/>
                                    <div className={styles.txtbox}>
                                        <h3 className={'bsb'}>
                                            분주하고 지친 도시인에게<br/>
                                            일상탈출을 위한<br/>
                                            <span className={'bsb'}>편안한 휴식처,</span>
                                        </h3>
                                        <p className={'sult'}>춤추는 고래펜션은 오션뷰 객실로 객실내에서 아름다운 바다를 감상하실 수 있습니다.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={6} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/intro003.jpg'} alt={'sub-img'}/>
                                </div>
                            </Col>
                            <Col xl={6} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/intro004.jpg'} alt={'sub-img'}/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className={`${styles.section1} d-block d-xl-none`}>
                    <Container fluid>
                        <Slider {...settings}>
                            <div className={styles.item}>
                                <Image src={'/sub/intro001.jpg'} alt={'sub-img'}/>
                            </div>
                            <div className={styles.item}>
                                <Image src={'/sub/intro003.jpg'} alt={'sub-img'}/>
                            </div>
                            <div className={styles.item}>
                                <Image src={'/sub/intro004.jpg'} alt={'sub-img'}/>
                            </div>
                        </Slider>
                        <div className={styles.txtbox}>
                            <h3 className={'bsb'}>
                                분주하고 지친 도시인에게<br/>
                                일상탈출을 위한<br/>
                                <span className={'bsb'}>편안한 휴식처,</span>
                            </h3>
                            <p className={'sult'}>춤추는 고래펜션은 오션뷰 객실로 객실내에서 아름다운 바다를 감상하실 수 있습니다.</p>
                        </div>
                    </Container>
                </div>

                <div className={styles.section2}>
                    <div className={styles.contentheader}>
                        <Image src={'/main/logo.png'} alt={'logo'}/>
                        <p className={'sult mb-4'}>
                            춤추는 고래펜션은 여행의 즐거움을 더해줄<br/>
                            <span>특별한 부대시설</span>이 준비되어 있습니다.
                        </p>
                        <p className={'sult'}>
                            일상에서 벗어나 <span>다양한 즐거움이 있는 안식처</span> 춤추는 고래펜션에서 행복한 추억을 만들어가세요.
                            </p>
                        </div>
                        <div className={styles.contentbody}>
                            <Container fluid>
                                <Row>
                                    <Col xl={4} xs={12}>
                                        <div className={styles.imgbox}>
                                            <Image src={'/sub/intro_img02-1.png'} alt={'sub-img'}/>
                                        </div>
                                    </Col>
                                    <Col xl={4} xs={12}>
                                        <div className={styles.imgbox}>
                                            <Image src={'/sub/intro_img02-2.png'} alt={'sub-img'}/>
                                        </div>
                                    </Col>
                                    <Col xl={4} xs={12}>
                                        <div className={styles.imgbox}>
                                            <Image src={'/sub/intro_img02-3.png'} alt={'sub-img'}/>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div className={styles.section3}>
                        <div className={styles.contentheader}>
                            <h3 className={'bsb'}>
                                <b className={'bsb'}>L</b>ocation
                            </h3>
                            <p>
                                아름다운 동해바다를 느낄 수 있는 <span>춤추는 고래펜션으로<br/>
                            오시는 길</span>을 안내해드립니다.
                            </p>
                        </div>
                        <div className={styles.contentbody}>
                            <KaKaoMap/>
                            <div className={styles.mapinfobox}>
                                <div className={styles.mapheader}>
                                    <ul>
                                        <li>
                                        <span className={`${styles.imgspan} align-self-start`}>
                                            <Image src={'/sub/address.svg'} alt={'sub-icon'}/>
                                        </span>
                                            <span className={`${styles.textspan} sult d-none d-xl-inline-block`}>
                                            울산광역시 북구 동해안로 787-2 (어물동 195-3번지) 춤추는 고래펜션
                                        </span>
                                            <span className={`${styles.textspan} sult d-inline-block d-xl-none`}>
                                            울산광역시 북구 동해안로 787-2<br />(어물동 195-3번지) 춤추는 고래펜션
                                        </span>
                                        </li>
                                        <li>
                                        <span className={styles.imgspan}>
                                            <Image src={'/sub/tel.svg'} alt={'sub-icon'}/>
                                        </span>
                                            <span className={`${styles.textspan} sult`}>
                                            010-5639-7259
                                        </span>
                                        </li>
                                        <li>
                                        <span className={styles.imgspan}>
                                            <Image src={'/sub/account_number.svg'} alt={'sub-icon'}/>
                                        </span>
                                            <span className={`${styles.textspan} sult`}>
                                            계좌번호 : 농협 302-0904-0213-11
                                        </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className={styles.mapbody}>
                                <span className={styles.imgspan}>
                                    <Image src={'/sub/bus.svg'} alt={'sub-icon'}/>
                                </span>
                                    <span className={`${styles.textspan} sult`}>
                                    411, 121 버스 탑승시 &quot;구암마을&quot; 에서 하차하시면 됩니다.
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Layout>
)
}

export default Intro