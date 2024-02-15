import React from 'react';
import styles from '@/styles/RoomPage.module.css';
import {Col, Container, Image, Row} from "react-bootstrap";


interface RoomInfo {
    type: string;
    detail: string;
    iconSrc: string;
}

interface RoomInfomationProps {
    article : string;
    roomInfos : RoomInfo[];
}

function RoomInfomation(props : RoomInfomationProps) {
    return (
        <div className={styles.roominfomation}>
            <h4 className={'sult'}>객실소개</h4>
            <dl>
                <dt>구비 물품</dt>
                <dd>{props.article}</dd>
            </dl>
            <div className={styles.roomcomposition}>
                <Container fluid>
                    <span className={styles.roomtitle}>객실 구성</span>
                    <Row>
                        {props.roomInfos.map((info, index) => (
                            <Col key={index} xl={12 / props.roomInfos.length} xs={12}>
                                <div className={styles.infobox}>
                                    <Image src={info.iconSrc} alt={'sub-icon'} />
                                    <strong>{info.type}</strong>
                                    <span>{info.detail}</span>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default RoomInfomation