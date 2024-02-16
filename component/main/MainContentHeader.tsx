import React from 'react';
import styles from '@/styles/Main.module.css';
import {Button, Image} from "react-bootstrap";
import Link from "next/link";


export interface MainContentHeaderProps {
    h3title : string;
    ptitle : string;
    spantitle : string;
    href : string;
}

function MainContentHeader(props : MainContentHeaderProps) {

    const ColorTopFont = props.h3title.charAt(0);
    const ColorSecondFonT = props.h3title.slice(1);


    return (
        <div className={styles.MainContentHeader}>
            <span className={`${styles.smallspan} sult`}>
                춤추는 고래펜션
            </span>
            <span className={styles.linespan}></span>
            <h3 className={'bsb'}>
                <b>{ColorTopFont}</b>{ColorSecondFonT}
            </h3>
            <p>
                {props.ptitle}
            </p>
            <div className={styles.MoreButtonBox}>
                <Button type={'button'}>
                    <Link href={props.href}>
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