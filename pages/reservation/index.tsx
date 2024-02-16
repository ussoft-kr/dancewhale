import React from 'react';
import styles from '@/styles/Reservation.module.css';
import {NextPage} from "next";
import Layout from "@/component/common/Layout";
import {Col, Container, Row} from "react-bootstrap";

const Reservation:NextPage = () => {
    return(
        <Layout>
            <div className={styles.reservationwrap}>
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

                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </div>
        </Layout>
    )
}

export default Reservation