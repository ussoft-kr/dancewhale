import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from '@/styles/Layout.module.css';
import {Image , Accordion} from "react-bootstrap";
import Link from "next/link";

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className={styles.offbutton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement={'end'} className={styles.mooffcanvas}>
                <Offcanvas.Header closeButton className={styles.mooffheader}>
                    <Offcanvas.Title>
                        <Image src={'/main/logo.png'} alt={'logo-img'} className={'w-75'} />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className={styles.moooffbody}>
                    <ul>
                        <li>
                            <Link href={'/intro'}>
                                펜션소개
                            </Link>
                        </li>
                        <li>
                            <Accordion className={styles.headeracc}>
                                <Accordion.Item eventKey="0" className={styles.headeraccitem}>
                                    <Accordion.Header className={styles.accbtn}>객실소개</Accordion.Header>
                                    <Accordion.Body className={styles.headeraccbody}>
                                        <dl>
                                            <dd>
                                                <Link href={'/room'}>
                                                    전체객실보기
                                                </Link>
                                            </dd>
                                            <dd>
                                                <Link href={'/room/room301'}>
                                                    301
                                                </Link>
                                            </dd>
                                            <dd>
                                                <Link href={'/room/room302'}>
                                                    302
                                                </Link>
                                            </dd>
                                            <dd>
                                                <Link href={'/room/room303'}>
                                                    303
                                                </Link>
                                            </dd>
                                            <dd>
                                                <Link href={'/room/room401'}>
                                                    401
                                                </Link>
                                            </dd>
                                            <dd>
                                                <Link href={'/room/room402'}>
                                                    402
                                                </Link>
                                            </dd>
                                            <dd>
                                                <Link href={'/room/roometc'}>
                                                    별채(독채)
                                                </Link>
                                            </dd>
                                        </dl>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </li>
                        <li>
                            <Link href={'/service'}>
                                서비스
                            </Link>
                        </li>
                        <li>
                            <Link href={'/reservation'}>
                                예약안내
                            </Link>
                        </li>
                    </ul>

                    <div className={styles.moorebox}>
                        <Button className={styles.rebtn} type={'button'}>
                            <Link href={'https://rsvt.co.kr:1447/rsvt_web_jw/index.html?p_id=whale'} target={'_blank'}>
                                실시간예약
                            </Link>
                        </Button>
                        <Button className={styles.tellbtn} type={'button'}>
                            <Link href={'tel:010-5639-7259'}>
                                상담문의
                            </Link>
                        </Button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Example;