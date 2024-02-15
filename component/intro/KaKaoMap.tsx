import React from 'react';
import styles from '@/styles/Intro.module.css';
import {Map, MapMarker} from "react-kakao-maps-sdk"
import useKakaoLoader from "@/component/intro/useKakaoLoader";

function KaKaoMap() {
    useKakaoLoader()
    return(
        <div className={styles.kakaomapbox}>
            <Map
                center={{ lat: 35.5758777516271, lng: 129.452603677106 }}
                style={{ width: "100%", height: "390px" }}
            >
                <MapMarker position={{ lat: 35.5758777516271, lng: 129.452603677106 }} >
                    <div className={styles.mapbox}>춤추는고래펜션</div>
                </MapMarker>
            </Map>

        </div>
    )
}

export default KaKaoMap