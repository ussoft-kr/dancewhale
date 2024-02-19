import React from 'react';
import styles from '@/styles/Reservation.module.css';
import {NextPage} from "next";
import Layout from "@/component/common/Layout";
import {Col, Container, Image, Row} from "react-bootstrap";

const Reservation:NextPage = () => {
    return(
        <Layout>
            <div className={styles.reservationwrap}>
                <div className={styles.contentheaderimgbox}>
                    <Image src={'/sub/reservation_img01.jpg'} alt={'sub-img'} />
                </div>
                <div className={styles.contentheader}>
                    <h5 className={'bsb'}>
                        <b className={'bsb'}>R</b>eservation guide
                    </h5>
                    <p>
                        춤추는 고래펜션 예약전<br/>
                        <span>이용방법을 숙지해주시기 바랍니다.</span>
                    </p>
                </div>
                <div className={styles.contentbody}>
                    <Container fluid>
                        <div className={styles.section1}>
                            <Row>
                                <Col xl={6} xs={12}>
                                    <div className={styles.imgbox}>
                                        <Image src={'/sub/reservation_img02.jpg'} alt={'sub-img'} />
                                    </div>
                                </Col>
                                <Col xl={6} xs={12} className={'align-self-center'}>
                                    <div className={styles.infobox}>
                                        <div className={styles.infoheader}>
                                            <span className={styles.imgspan}>
                                                <Image src={'/sub/icon_booking.svg'} alt={'sub-icon'} />
                                            </span>
                                            <span className={`${styles.textspan} sult`}>Booking</span>
                                        </div>
                                        <div className={styles.infobody}>
                                            <ul>
                                                <li>
                                                    <strong>예약방법 :</strong> 실시간 예약 / 네이버예약
                                                </li>
                                                <li>
                                                    <strong>예약전화 :</strong> 010-5639-7259
                                                </li>
                                                <li>
                                                    <strong>예약계좌 :</strong> 농협 302-0904-0213-11 (예금주 : 석명신)
                                                </li>
                                                <li>
                                                    <strong>입·퇴실시간 :</strong> 입실 15:00 ~ 18:00 / 퇴실 익일 11:00
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.section2}>
                            <div className={styles.sectionheader}>
                                <span className={styles.imgbox}>
                                    <Image src={'/sub/icon_rule.svg'} alt={'sub-icon'} />
                                </span>
                                <span className={`${styles.textspan} sult`}>
                                    Rules of use
                                </span>
                            </div>
                            <div className={styles.sectionbody}>
                                <dl>
                                    <dt>입·퇴실시간</dt>
                                    <dd>
                                        <strong>입실 : 오후 3시 ~ 6시 / 퇴실 : 익일 오전 11시</strong><br />
                                        (퇴실 시간이 지연되면 <span>별도의 요금이 부과</span>됩니다.)
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>추가요금</dt>
                                    <dd>
                                        기준 인원 초과 시 (유아포함) <span>1인당 1만원 추가 요금</span>이 있습니다.
                                    </dd>
                                    <dd>
                                        인원 추가 요금 및 바베큐 이용료는 <span>현장결제</span>입니다.
                                    </dd>
                                    <dd>
                                        숯(2만원-4인기준(그릴제공))은 <span>예약 손님에 한해 오후 8시 30분까지 제공</span>합니다.
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>입실불가사항</dt>
                                    <dd>
                                        최대인원 및 예약신청인원 <span>초과 시 입실할 수 없습니다.</span>
                                    </dd>
                                    <dd>
                                        <span>보호자를 동반하지 않은 미성년자는 어떠한 경우에도 입실할 수 없습니다.</span>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>이용시 유의사항</dt>
                                    <dd>
                                        객실 내에서는 금연이며, 화재 및 냄새로 인한 타 손님 배려 차원에서 객실 내 삼겹살, 생선, 청국장의 조리를 금하오니, <span>지정된 장소(숯 이용시 4층 테라스, 5층 바다전망대)만 이용</span>하시길 부탁드립니다.
                                    </dd>
                                    <dd>
                                        화재 예방을 위해 객실 내에서의 <span>촛불 사용을 금합니다.</span>
                                    </dd>
                                    <dd>
                                        23시 이후의 바비큐장 이용 및 고성방가는 타 객실 손님을 위하여 금하오니 양해 바랍니다.
                                    </dd>
                                    <dd>
                                        요나 이불 등 침구위에서 상을 펴고 식사하시는건 자제해 주시기 바랍니다. (요에 국물이나 고춧가루 등이 묻는 침구가 오염될 경우 <span>세탁 불가시 변상</span>을 하셔야 합니다.)
                                    </dd>
                                    <dd>
                                        이용시 해당 시설물에 대한 훼손책임은 고객들에게 있으므로, 훼손 및 파손 그리고 분실에 대한 <span>해당 고객의 책임사유가 분명할 시 100%의 손해배상의 책임</span>을 지게 됩니다.
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>퇴실안내</dt>
                                    <dd>
                                        퇴실 시 사용한 식기 및 밥통 등은 <span>꼭 설거지를 해 주시고 제자리에 놓아주시기 바랍니다.</span>
                                    </dd>
                                    <dd>
                                        <span>음식물 쓰레기, 일반 쓰레기, 재활용으로 분류</span>해서 봉투에 담아 쓰레기 장(건물 엘리베이터 뒤편)으로 반출하시면 됩니다.
                                    </dd>
                                    <dd>
                                        규격봉투는 저희 펜션에서 제공해드립니다.
                                    </dd>
                                    <dd>
                                        외출 시 출입문 등이 잠겼는지 꼭 확인해 주세요. <span>키는 퇴실 시 반드시 반납</span>하여 주시기 바랍니다.
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <div className={styles.section3}>
                            <div className={styles.sectionheader}>
                                <span className={styles.imgbox}>
                                    <Image src={'/sub/icon_fee.svg'} alt={'sub-icon'}/>
                                </span>
                                <span className={`${styles.textspan} sult`}>
                                    Additional Fee Information
                                </span>
                            </div>
                            <div className={styles.sectionbody}>
                                <ul>
                                    <li>
                                        <span className={styles.eclipse}>1</span>
                                        <span className={styles.textspan}>
                                            예약 신청 후 <strong>24시간 내에 전액 입금</strong>하셔야 예약이 완료되며, <strong>24시간이 경과되면, 예약신청이 취소</strong>됩니다.
                                        </span>
                                    </li>
                                    <li>
                                        <span className={styles.eclipse}>2</span>
                                        <span className={styles.textspan}>
                                            당일예약과 하루 전 예약은 <strong>예약 후 1시간 이내에 결제를 완료</strong>해 주셔야 합니다.
                                        </span>
                                    </li>
                                    <li>
                                        <span className={styles.eclipse}>3</span>
                                        <span className={styles.textspan}>
                                            기준인원 초과시 (유아포함) <strong>1인당 1만원 추가 요금</strong>이 있습니다.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </Layout>
    )
}

export default Reservation