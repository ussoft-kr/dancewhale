import React from 'react';
import styles from '@/styles/RoomPage.module.css';
import {Image} from "react-bootstrap";


interface RoomHeaderProps {
    h2title : string;
    imgsrc : string;
}

function RoomHeader(props : RoomHeaderProps) {
    return (
        <div className={styles.RoomHeader}>
            <Image src={props.imgsrc} alt={'sub-icon'} />
            <h2 className={'sult'}>{props.h2title}</h2>
        </div>
    )
}

export default RoomHeader