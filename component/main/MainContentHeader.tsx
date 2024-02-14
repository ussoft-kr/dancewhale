import React from 'react';
import styles from '@/styles/Main.module.css';
import {Button, Image} from "react-bootstrap";
import Link from "next/link";


export interface MainContentHeaderProps {
    h3title : string;
    ptitle : string;
    spantitle : string;
}

function MainContentHeader(props : MainContentHeaderProps) {
    return (
        <div className={styles.MainContentHeader}>
            <span className={'${styles.smallspan} sult'}>
                춤추는 고래펜션
            </span>
            <h3 className={'bsb'}>
                {props.h3title}
            </h3>
            <p>
                {props.ptitle}
            </p>
            <div className={styles.MoreButtonBox}>
                <Button>
                    <Link href={'#'}>
                        <span className={styles.imgspan}>
                            <Image src={'/main/plus.svg'} alt={'main-icon'} />
                        </span>
                        <span>
                            {props.spantitle}
                        </span>
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default MainContentHeader