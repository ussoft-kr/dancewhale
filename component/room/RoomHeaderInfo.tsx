import React from 'react';
import styles from '@/styles/RoomPage.module.css';
import {Col, Container, Image, Row} from "react-bootstrap";
import Link from "next/link";


interface RoomHeaderInfoProps {
    roomtitle : string;
    pricetitle : string;
    roominfo1 : string;
    roominfo2 : string;
    imgsrc : string;
}

function RoomHeaderInfo(props : RoomHeaderInfoProps) {
    return(
        <div className={styles.roomheaderinfo}>
            <Container fluid>
                <Row>
                    <Col xl={3} xs={12} className={'align-self-center'}>
                        <div className={styles.infobox}>
                            <span className={'sult'}>{props.roomtitle}</span>
                            <h3 className={'sult'}>ROOM PRICE</h3>
                            <span className={styles.linespan}></span>
                            <strong>{props.pricetitle}</strong>
                            <ul>
                                <li>{props.roominfo1}</li>
                                <li>{props.roominfo2}</li>
                                <li>입실 15:00 ~ 18:00 / 퇴실 익일 11:00</li>
                            </ul>
                            <div className={styles.rebox}>
                                <Link href={'https://rsvt.co.kr:1447/rsvt_web_jw/index.html?p_id=whale'} target={'_blank'}>
                                    <span className={styles.imgspan}>
                                        <Image src={'/sub/real_time_reservation.svg'} alt={'sub-icon'} />
                                    </span>
                                    <span className={styles.textspan}>
                                        실시간 예약
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col xl={9} xs={12}>
                        <div className={styles.imgbox}>
                            <Image src={props.imgsrc} alt={'sub-img'} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RoomHeaderInfo