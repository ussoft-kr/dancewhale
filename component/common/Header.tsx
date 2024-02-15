import styles from '@/styles/Layout.module.css';
import {Button, Image} from "react-bootstrap";
import Link from "next/link";

function Header(){
    return(
        <header className={styles.header}>
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
                            <Link href={'/room'}>
                                객실보기
                            </Link>
                        </li>
                        <li>
                            <Link href={'#'}>
                                서비스
                            </Link>
                        </li>
                        <li>
                            <Link href={'#'}>
                                예약안내
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.BookBox}>
                    <Button className={'btn real-time-button'} href={'https://rsvt.co.kr:1447/rsvt_web_jw/index.html?p_id=whale'} target={'_blank'}>
                        <span className={'img-span'}>
                            <Image src={'/main/left_real_time.svg'} alt={'main-icon'} />
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
                                농협 302-0904-0213-11<br />(예금주 : 석명신)
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