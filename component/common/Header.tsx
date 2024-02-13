import styles from '@/styles/Layout.module.css';
import {Button, Container, Image} from "react-bootstrap";
import Link from "next/link";

function Header(){
    return(
        <header>
            <aside>
                <div className={styles.LogoBox}>
                    <Link href={'/'}>
                    <Image src={'/main/logo.png'} alt={'logo-img'} />
                    </Link>
                </div>
                <div className={styles.MenuBox}>
                    <ul>
                        <li>
                            <Link href={'#'}>
                                펜션소개
                            </Link>
                        </li>
                        <li>
                            <Link href={'#'}>
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
                    </Button>
                </div>
            </aside>
        </header>
    )
}

export default Header