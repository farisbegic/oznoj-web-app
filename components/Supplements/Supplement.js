import React from 'react';
import {useRouter} from "next/router";
import Image from "next/image";

const Supplement = () => {
    const router = useRouter();
    const { query } = router;
    return (
        <div className="supplement">
            <h4 className="path">Home / Supplements / <span className="path-slug">{query.slug}</span></h4>
            <div className="supplement-details">
                <Image src="/vitamin-d.png" height="813px" width="813px"/>
                <div className="vertical-line"></div>
                <div className="supplement-information">
                    <h1 className="supplement-title">Vitamin D</h1>
                    <p className="supplement-description">Vitamin D is required to promote calcium absorption, which helps to maintain healthy bones and teeth.
                        Vitamin D also supports a healthy immune system. The Vitamin D3 in this product is the same form produced by the body when our skin is exposed to sunlight.
                        As we age, our bodies may produce this important nutrient less efficiently.
                        This formulation is offered in oil-based softgels to promote optimal absorption and assimilation.</p>

                </div>
            </div>
        </div>
    );
};

export default Supplement;