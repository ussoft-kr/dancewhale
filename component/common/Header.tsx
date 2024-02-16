import styles from '@/styles/Layout.module.css';
import {Accordion, Button, Image} from "react-bootstrap";
import Link from "next/link";

function Header(){
    return(
        <header className={styles.header} id={'header'}>
            <aside className={styles.aside}>
                <div className={styles.LogoBox}>
                    <Link href={'/'}>
                    <Image src={'/main/logo.png'} alt={'logo-img'} />
                    </Link>
                </div>
                <div className={styles.MenuBox}>
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
                </div>
                <div className={styles.BookBox}>
                    <Button className={'btn real-time-button'}
                            href={'https://rsvt.co.kr:1447/rsvt_web_jw/index.html?p_id=whale'} target={'_blank'}>
                        <span className={'img-span'}>
                            <Image src={'/main/left_real_time.svg'} alt={'main-icon'}/>
                        </span>
                        <span>실시간 예약</span>
                    </Button>
                </div>
                <div className={styles.InfoBox}>
                    <ul>
                        <li>
                            <Link href={'#'}>
                            <span className={styles.ImgSpan}>
                                <Image src={'/main/left_tel.svg'} alt={'main-icon'}/>
                            </span>
                                <span className={styles.TxtSpan}>
                                010.5639.7259
                            </span>
                            </Link>
                        </li>
                        <li>
                            <Link href={'#'}>
                            <span className={styles.ImgSpan}>
                                <Image src={'/main/left_account.svg'} alt={'main-icon'}/>
                            </span>
                                <span className={styles.TxtSpan}>
                                농협 302-0904-0213-11<br/>(예금주 : 석명신)
                            </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </header>
    )
}

export default Header