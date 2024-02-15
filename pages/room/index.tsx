import React from 'react';
import styles from '@/styles/Room.module.css';
import {NextPage} from "next";
import Layout from "@/component/common/Layout";
import {Col, Container, Image, Row} from "react-bootstrap";
import Link from "next/link";

const RoomIndex: NextPage = () => {
    return(
        <Layout>
            <div className={styles.roomwrap}>
                <div className={styles.contentheader}>
                    <Image src={'/sub/view_img.jpg'} alt={'sub-img'} />
                    <div className={styles.textbox}>
                        <h3 className={'bsb'}>
                            푸른하늘과 푸른바다가<br />
                            하나 되는 곳,
                        </h3>
                        <p className={'sult'}>
                            파노라마처럼 펼쳐지는 아름다운 바다풍경이 있는 이곳에서<br />
                            멋진 추억을 만들어보세요.
                        </p>
                    </div>
                </div>
                <div className={styles.contentbody}>
                    <div className={styles.contentbodyheader}>
                        <h4 className={'bsb'}><b className={'bsb'}>V</b>iew all</h4>
                        <p>
                            천천히 흐르는 시간을 느끼는 여행의 휴식 <span>춤추는 고래펜션의<br />
                            모든 객실</span>을 안내해드립니다.
                        </p>
                    </div>
                    <div className={styles.contentbodybox}>
                        <Container fluid>
                            <Row className={'gy-4'}>
                                <Col xl={4} xs={12}>
                                    <div className={styles.infobox}>
                                        <Image src={'/sub/view_301.jpg'} alt={'sub-img'} />
                                        <h6>301</h6>
                                        <span>기준 4인 / 최대 4인</span>
                                        <div className={styles.morebox}>
                                            <Link href={'/room/room301'}>
                                                <span className={styles.textspan}>
                                                    MORE VIEW
                                                </span>
                                                <span className={styles.imgspan}>
                                                    <Image src={'/sub/more_view.svg'} alt={'sub-img'} />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </Col>

                                <Col xl={4} xs={12}>
                                    <div className={styles.infobox}>
                                        <Image src={'/sub/view_302.jpg'} alt={'sub-img'} />
                                        <h6>302</h6>
                                        <span>기준 2인 / 최대 4인</span>
                                        <div className={styles.morebox}>
                                            <Link href={'/room/room302'}>
                                                <span className={styles.textspan}>
                                                    MORE VIEW
                                                </span>
                                                <span className={styles.imgspan}>
                                                    <Image src={'/sub/more_view.svg'} alt={'sub-img'} />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </Col>

                                <Col xl={4} xs={12}>
                                    <div className={styles.infobox}>
                                        <Image src={'/sub/view_303.jpg'} alt={'sub-img'} />
                                        <h6>303</h6>
                                        <span>기준 6인 / 최대 10인</span>
                                        <div className={styles.morebox}>
                                            <Link href={'/room/room303'}>
                                                <span className={styles.textspan}>
                                                    MORE VIEW
                                                </span>
                                                <span className={styles.imgspan}>
                                                    <Image src={'/sub/more_view.svg'} alt={'sub-img'} />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </Col>

                                <Col xl={4} xs={12}>
                                    <div className={styles.infobox}>
                                        <Image src={'/sub/view_304.jpg'} alt={'sub-img'} />
                                        <h6>401</h6>
                                        <span>기준 4인 / 최대 4인</span>
                                        <div className={styles.morebox}>
                                            <Link href={'/room/room401'}>
                                                <span className={styles.textspan}>
                                                    MORE VIEW
                                                </span>
                                                <span className={styles.imgspan}>
                                                    <Image src={'/sub/more_view.svg'} alt={'sub-img'} />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </Col>

                                <Col xl={4} xs={12}>
                                    <div className={styles.infobox}>
                                        <Image src={'/sub/view_305.jpg'} alt={'sub-img'} />
                                        <h6>402</h6>
                                        <span>기준 4인 / 최대 4인</span>
                                        <div className={styles.morebox}>
                                            <Link href={'/room/room402'}>
                                                <span className={styles.textspan}>
                                                    MORE VIEW
                                                </span>
                                                <span className={styles.imgspan}>
                                                    <Image src={'/sub/more_view.svg'} alt={'sub-img'} />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </Col>

                                <Col xl={4} xs={12}>
                                    <div className={styles.infobox}>
                                        <Image src={'/sub/view_outbuilding.jpg'} alt={'sub-img'} />
                                        <h6>별채(독채)</h6>
                                        <span>기준 8인 / 최대 20인</span>
                                        <div className={styles.morebox}>
                                            <Link href={'/room/roometc'}>
                                                <span className={styles.textspan}>
                                                    MORE VIEW
                                                </span>
                                                <span className={styles.imgspan}>
                                                    <Image src={'/sub/more_view.svg'} alt={'sub-img'} />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </Col>

                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default RoomIndex