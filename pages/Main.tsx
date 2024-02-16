import React from 'react';
import {NextPage} from "next";
import styles from '@/styles/Main.module.css';
import Carousel from 'react-bootstrap/Carousel';
import {Col, Container, Image, Row} from "react-bootstrap";
import Slider from "react-slick";
import MainContentHeader from "@/component/main/MainContentHeader";
import Link from "next/link";



const Main: NextPage = () => {

    const settings = {
        dots: true,
        infinite : true,
        speed : 1000,
        slidesToShow : 4,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed : 4000,
        arrows: false,
    };

    return (
        <div className={styles.MainWrap}>
            <div className={styles.MainSlideBox}>
                <Carousel fade indicators={false} controls={false} interval={3000}>
                    <Carousel.Item className={styles.Slide1}>
                        <Image src={'/main/main_img01.jpg'} alt={'main-img'} />
                        <Carousel.Caption className={styles.slide1caption}>
                            <h3 className={'bsb'}>편안하게<br />힐링 할 수 있는 곳,</h3>
                            <p>소중한 사람들과 함께 삶의 쉼표가 필요할 때<br />이곳으로 오세요.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className={styles.Slide2}>
                        <Image src={'/main/main_img02.jpg'} alt={'main-img'} />
                        <Carousel.Caption className={styles.slide2caption}>
                            <h3 className={'sult'}>연인과의 기념일,<br />친구들과의 뜻있는 여행,<br />아이들과의 멋진 추억</h3>
                            <p className={'sult'}>
                                아름다운 울산의 바다풍경과 자연의 빛으로 가득 채워진<br />
                                편안한 공간 춤추는 고래펜션에 오신것을 환영합니다.<br />
                                일상에서 벗어나 최고의 여행을 위해 소중한 사람들과<br />
                                시간을 보내보세요. 춤추는 고래펜션이 소중한 추억의<br />
                                한 장면을 만들어 드리겠습니다.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className={styles.MainRoomBox}>
                <MainContentHeader h3title={'Rooms Preview'} ptitle={'춤추는 고래펜션의 객실을 소개합니다.'} spantitle={'Reservation'} href={'/room'} />
                <div className={styles.MainRoomSlideBox}>
                    <Slider {...settings}>
                        <div className={styles.RoomItem}>
                            <div className={styles.imgbox}>
                                <Image src={'/main/room301.jpg'} alt={'main-icon'} />
                            </div>
                            <div className={styles.infobox}>
                                <h5>301</h5>
                                <p>기준 4인 / 최대 4인</p>
                                <Link href={'/room/room301'}>
                                    <span>MORE VIEW</span>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.RoomItem}>
                            <div className={styles.imgbox}>
                                <Image src={'/main/room302.jpg'} alt={'main-icon'} />
                            </div>
                            <div className={styles.infobox}>
                                <h5>302</h5>
                                <p>기준 2인 / 최대 4인</p>
                                <Link href={'/room/room302'}>
                                    <span>MORE VIEW</span>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.RoomItem}>
                            <div className={styles.imgbox}>
                                <Image src={'/main/room303.jpg'} alt={'main-icon'} />
                            </div>
                            <div className={styles.infobox}>
                                <h5>303</h5>
                                <p>기준 6인 / 최대 10인</p>
                                <Link href={'/room/room303'}>
                                    <span>MORE VIEW</span>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.RoomItem}>
                            <div className={styles.imgbox}>
                                <Image src={'/main/room401.jpg'} alt={'main-icon'} />
                            </div>
                            <div className={styles.infobox}>
                                <h5>401</h5>
                                <p>기준 4인 / 최대 4인</p>
                                <Link href={'/room/room401'}>
                                    <span>MORE VIEW</span>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.RoomItem}>
                            <div className={styles.imgbox}>
                                <Image src={'/main/room402.jpg'} alt={'main-icon'} />
                            </div>
                            <div className={styles.infobox}>
                                <h5>402</h5>
                                <p>기준 4인 / 최대 4인</p>
                                <Link href={'/room/room402'}>
                                    <span>MORE VIEW</span>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.RoomItem}>
                            <div className={styles.imgbox}>
                                <Image src={'/main/room_outbuilding.jpg'} alt={'main-icon'} />
                            </div>
                            <div className={styles.infobox}>
                                <h5>별채(독채)</h5>
                                <p>기준 8인 / 최대 20인</p>
                                <Link href={'/room/roometc'}>
                                    <span>MORE VIEW</span>
                                </Link>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className={styles.pointbox}>
                <Container fluid>
                    <Row>
                        <Col xl={6} xs={12} className={'p-0'}>
                            <div className={styles.textbox}>
                                <span className={styles.linespan}></span>
                                <span className={`${styles.shottitle} sult`}>Special Point</span>
                                <h2 className={'bsb'}>
                                    Ocean View<br />
                                    <span className={'bsb'}>Pension</span>
                                </h2>
                                <span className={styles.title}>오션뷰 펜션</span>
                                <p>
                                    동해의 탁 트인 푸른바다를 한 눈에 담을 수 있는 춤추는 고래펜션<br />
                                    자연이 깃든 쉼을 사랑하는 사람과 함께 누려보세요.
                                </p>
                                <div className={styles.morebox}>
                                    <Link href={'/service'}>
                                        <span className={styles.txtspan}>
                                            Learn more
                                        </span>
                                        <span className={styles.imgspan}>
                                            <Image src={'/main/learn_more.svg'} alt={'main-icon'} />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col xl={6} xs={12} className={'p-0'}>
                            <div className={styles.imgbox}>
                                <Image src={'/main/oceanview.jpg'} alt={'main-img'} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={styles.facilitiesbox}>
                <MainContentHeader h3title={'Facilities'} ptitle={'춤추는 고래펜션에서 즐길 수 있는 다양한 부대시설'} spantitle={'View all facilities'} href={'/service'} />
                <Container fluid>
                    <Row>
                        <Col xl={6} xs={12} className={'ps-0'}>
                            <div className={styles.imgbox}>
                                <Link href={'#'}>
                                    <Image src={'/main/facilities_barbecu_area.jpg'} alt={'main-img'} />
                                    <p>야외 바베큐장</p>
                                </Link>
                            </div>
                        </Col>
                        <Col xl={6} xs={12} className={'pe-0'}>
                            <div className={styles.imgbox}>
                                <Link href={'#'}>
                                    <Image src={'/main/facilities_rooftop.jpg'} alt={'main-img'}/>
                                    <p>루프탑</p>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Main