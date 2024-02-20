import React from 'react';
import styles from '@/styles/Service.module.css';
import {NextPage} from "next";
import Layout from "@/component/common/Layout";
import {Col, Container, Image, Row} from "react-bootstrap";

const Service:NextPage = () => {
    return(
        <Layout>
            <div className={styles.servicewrap}>
                <div className={styles.headercontent}>
                    <Image src={'/sub/service_img01.jpg'} alt={'sub-img'} />
                    <div className={styles.textbox}>
                        <h3 className={'bsb'}>
                            <span className={'bsb'}>아름다운 경치</span>를<br />
                            보며 즐기는 공간,
                        </h3>
                        <p className={'sult'}>
                            자연속 편안하고 행복한 쉼터에서 소중한<br />
                            사람들과 함께 즐거운 시간을 보내세요.
                        </p>
                    </div>
                </div>
                    <div className={styles.contentbody}>
                        <div className={styles.contentheader}>
                        <h5 className={'bsb'}>
                            <b className={'bsb'}>S</b>ervice
                        </h5>
                        <p>
                            춤추는 고래펜션에서 <span>편하게<br />
                            즐길 수 있는 공간</span>을 만나보세요.
                        </p>
                        </div>
                        <div className={styles.contentbox}>
                         <Container fluid>
                            <Row className={'gy-5 d-none d-xl-flex'}>
                                <Col xl={9} xs={12}>
                                    <div className={styles.imgbox}>
                                        <Image src={'/sub/service_img02.jpg'} alt={'sub-img'} />
                                    </div>
                                </Col>
                                <Col xl={3} xs={12} className={'align-self-center ps-4'}>
                                    <div className={styles.infobox}>
                                        <span className={'sult'}>4th floor terrace barbecue area</span>
                                        <h4 className={'sult'}>4층 테라스 바베큐장</h4>
                                        <span className={styles.linespan}></span>
                                        <p>
                                            바깥 풍경을 구경하며 식사를 할 수 있습니다.<br />
                                            바베큐 조리를 위한 숯과 그릴이 제공됩니다.
                                        </p>
                                    </div>
                                </Col>
                                <Col xl={3} xs={12} className={'align-self-center'}>
                                    <div className={styles.infobox}>
                                        <span className={'sult'}>5th floor ocean observatory</span>
                                        <h4 className={'sult'}>5층 바다전망대</h4>
                                        <span className={styles.linespan}></span>
                                        <p>
                                            펜션 꼭대기에서 아름다운 오션뷰를 구경하면서<br />
                                            행복한 시간을 보낼 수 있습니다.
                                        </p>
                                    </div>
                                </Col>
                                <Col xl={9} xs={12}>
                                    <div className={styles.imgbox}>
                                        <Image src={'/sub/service_img03.jpg'} alt={'sub-img'} />
                                    </div>
                                </Col>
                                <Col xl={9} xs={12}>
                                    <div className={styles.imgbox}>
                                        <Image src={'/sub/service_img04.jpg'} alt={'sub-img'} />
                                    </div>
                                </Col>
                                <Col xl={3} xs={12} className={'align-self-center ps-4'}>
                                    <div className={styles.infobox}>
                                        <span className={'sult'}>Beach in front the pension</span>
                                        <h4 className={'sult'}>펜션앞 바닷가</h4>
                                        <span className={styles.linespan}></span>
                                        <p>
                                            오션뷰의 아름다운 경치를 자랑하며,<br />
                                            여름철에 시원한 물놀이를 즐길 수 있습니다.
                                        </p>
                                    </div>
                                </Col>
                                <Col xl={3} xs={12} className={'align-self-center'}>
                                    <div className={styles.infobox}>
                                        <span className={'sult'}>Parking lot</span>
                                        <h4 className={'sult'}>주차장</h4>
                                        <span className={styles.linespan}></span>
                                        <p>
                                            펜션 내에 주차 가능한 공간이 마련되어 있습니다.
                                        </p>
                                    </div>
                                </Col>
                                <Col xl={9} xs={12}>
                                    <div className={styles.imgbox}>
                                        <Image src={'/sub/service_img03.jpg'} alt={'sub-img'} />
                                    </div>
                                </Col>
                            </Row>

                             <Row className={'gy-5 d-flex d-xl-none'}>
                                 <Col xl={9} xs={12}>
                                     <div className={styles.imgbox}>
                                         <Image src={'/sub/service_img02.jpg'} alt={'sub-img'} />
                                     </div>
                                 </Col>
                                 <Col xl={3} xs={12} className={'align-self-center ps-4'}>
                                     <div className={styles.infobox}>
                                         <span className={'sult'}>4th floor terrace barbecue area</span>
                                         <h4 className={'sult'}>4층 테라스 바베큐장</h4>
                                         <span className={styles.linespan}></span>
                                         <p>
                                             바깥 풍경을 구경하며 식사를 할 수 있습니다.<br />
                                             바베큐 조리를 위한 숯과 그릴이 제공됩니다.
                                         </p>
                                     </div>
                                 </Col>
                                 <Col xl={9} xs={12}>
                                     <div className={styles.imgbox}>
                                         <Image src={'/sub/service_img03.jpg'} alt={'sub-img'} />
                                     </div>
                                 </Col>
                                 <Col xl={3} xs={12} className={'align-self-center'}>
                                     <div className={styles.infobox}>
                                         <span className={'sult'}>5th floor ocean observatory</span>
                                         <h4 className={'sult'}>5층 바다전망대</h4>
                                         <span className={styles.linespan}></span>
                                         <p>
                                             펜션 꼭대기에서 아름다운 오션뷰를 구경하면서<br />
                                             행복한 시간을 보낼 수 있습니다.
                                         </p>
                                     </div>
                                 </Col>
                                 <Col xl={9} xs={12}>
                                     <div className={styles.imgbox}>
                                         <Image src={'/sub/service_img04.jpg'} alt={'sub-img'} />
                                     </div>
                                 </Col>
                                 <Col xl={3} xs={12} className={'align-self-center ps-4'}>
                                     <div className={styles.infobox}>
                                         <span className={'sult'}>Beach in front the pension</span>
                                         <h4 className={'sult'}>펜션앞 바닷가</h4>
                                         <span className={styles.linespan}></span>
                                         <p>
                                             오션뷰의 아름다운 경치를 자랑하며,<br />
                                             여름철에 시원한 물놀이를 즐길 수 있습니다.
                                         </p>
                                     </div>
                                 </Col>
                                 <Col xl={9} xs={12}>
                                     <div className={styles.imgbox}>
                                         <Image src={'/sub/service_img03.jpg'} alt={'sub-img'} />
                                     </div>
                                 </Col>
                                 <Col xl={3} xs={12} className={'align-self-center'}>
                                     <div className={styles.infobox}>
                                         <span className={'sult'}>Parking lot</span>
                                         <h4 className={'sult'}>주차장</h4>
                                         <span className={styles.linespan}></span>
                                         <p>
                                             펜션 내에 주차 가능한 공간이 마련되어 있습니다.
                                         </p>
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

export default Service