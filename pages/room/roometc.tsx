import React from 'react';
import styles from '@/styles/RoomPage.module.css';
import {NextPage} from "next";
import Layout from "@/component/common/Layout";
import RoomHeader from "@/component/room/RoomHeader";
import RoomHeaderInfo from "@/component/room/RoomHeaderInfo";
import RoomInfomation from "@/component/room/RoomInfomation";
import {Col, Container, Image, Row} from "react-bootstrap";

const Roometc:NextPage = () => {
    return(
        <Layout>
            <div className={styles.roompagewrap}>
                <RoomHeader h2title={'별채(독채)'} imgsrc={'/sub/outbuilding_img01.jpg'} />
                <RoomHeaderInfo roomtitle={'OUTBUILDING'} pricetitle={'280,000원 ~ 360,000원'} roominfo1={'일반객실,기준 8인 (최대 20인), 남녀공용'} roominfo2={'방1, 침대1, 욕실1'} imgsrc={'/sub/outbuilding_img02.jpg'} />
                <RoomInfomation
                    article={'TV, 냉장고, 에어컨(시스템 에어컨), 밥솥, 밥공기, 국공기, 접시, 컵(유리잔, 소주잔, 머그잔), 냄비, 후라이팬, 야채볼, 집게, 칼, 과일칼, 국자, 뒤집게, 드라이기, 샴푸, 린스, 바디솝, 치약,\n' +
                        '샤워타올, 수건, 침대, 베개, 이불, 나무테이블, 와인의자 세트, 접이식 상'}
                    roomInfos={[
                        {type : "객실유형", detail : "일반객실", iconSrc: "/sub/icon_room.svg"},
                        {type : "침실", detail : "더블 1", iconSrc: "/sub/icon_bed.svg"},
                        {type : "온돌", detail : "이불세트 2", iconSrc : "/sub/icon_bedding.svg"},
                        {type : "욕실", detail : "욕실 1", iconSrc: "/sub/icon_bathroom.svg"},
                    ]}
                     />
                <div className={styles.bottombox}>
                    <Container fluid>
                        <Row className={'gy-4'}>
                            <Col xl={6} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/outbuilding_img03.jpg'} alt={'sub-img'} />
                                </div>
                            </Col>
                            <Col xl={6} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/outbuilding_img04.jpg'} alt={'sub-img'} />
                                </div>
                            </Col>
                            <Col xl={6} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/outbuilding_img05.jpg'} alt={'sub-img'} />
                                </div>
                            </Col>
                            <Col xl={6} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/outbuilding_img06.jpg'} alt={'sub-img'} />
                                </div>
                            </Col>
                            <Col xl={6} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/outbuilding_img07.jpg'} alt={'sub-img'} />
                                </div>
                            </Col>
                            <Col xl={6} xs={12}>
                                <div className={styles.imgbox}>
                                    <Image src={'/sub/outbuilding_img08.jpg'} alt={'sub-img'} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </Layout>
    )
}

export default Roometc