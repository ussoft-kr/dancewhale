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

    const articleContent = props.article.split('\n').map((line, index, array) => (
        <React.Fragment key={index}>
            {line}
            {index < array.length - 1 && <br />}  { /* 마지막 줄을 제외하고 \n을 기준으로 br 추가 */}
        </React.Fragment>
));

    return (
        <div className={styles.roominfomation}>
            <Container fluid>
            <h4 className={'sult'}>객실소개</h4>
            <dl>
                <dt>구비 물품</dt>
                <dd>{articleContent}</dd>
            </dl>
            <div className={styles.roomcomposition}>

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
            </div>
            </Container>
        </div>
    )
}

export default RoomInfomation