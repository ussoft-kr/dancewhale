import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import styles from '@/styles/Layout.module.css';

function Footer(){
    return(
        <footer>
            <Container>
                <Row>
                    <Col xl={9} xs={12}>
                        <div className={styles.leftfooterbox}>
                            <span className={'sult'}>예약문의</span>
                            <h6 className={'sult'}>010-5639-7259</h6>
                            <p className={'sult'}>춤추는 고래펜션</p>
                            <ul>
                                <li className={'sult'}>담당자 : 석명신</li>
                                <li className={'sult'}>울산광역시 북구 동해안로 787-2 (어물동 195-3번지) 춤추는 고래펜션</li>
                                <li className={'sult'}>사업자등록번호 : 610-24-60607</li>
                                <li className={'sult'}>계좌번호 : 농협 302-0904-0213-11 석명신</li>
                            </ul>
                        </div>
                    </Col>
                    <Col xl={3} xs={12}>
                        <div className={styles.rightfooterbox}>
                            <p className={'sult'}>Copyright (C) 2024 춤추는고래펜션. All Right Reserved.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer