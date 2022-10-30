import React from "react";

class Logo extends React.Component {
    render() {
        return <svg width="290px" height="170px">
                    <defs>
                        <text id="text" x="50%" y="70%" font-family="Voltaire" font-size="70px" font-weight="800" text-anchor="middle" alignment-baseline="middle">
                            雷遁
                        </text>
                    </defs>
                    <filter id="glow">
                        <feGaussianBlur id="glowBlur" stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                    <filter id="shock">
                        <feTurbulence type="fractalNoise" baseFrequency="0.09" numOctaves="1" seed="1" result="noise" id="noise">
                        <animate attributeType="XML" attributeName="seed" from="2" to="120" dur="12s" repeatCount="indefinite"/>
                        </feTurbulence>
                        <feMorphology id="morph1" in="SourceGraphic" operator="dilate" radius="1.5" result="morph1" />
                        <feMorphology id="morph2" in="morph1" operator="dilate" radius="6" result="morph2" />
                        <feComposite operator="out" in="morph2" in2="morph1" result="strokeText"/>
                        <feDisplacementMap 
                                    xChannelSelector="R" 
                                    yChannelSelector="G" 
                                    in="strokeText" 
                                    in2="noise"
                                    result="displacementMap"
                                    color-interpolation-filters="sRGB"
                                    scale="10" />
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="displacementMap"/>
                        </feMerge>
                    </filter>
                <filter id="shock2">
                        <feTurbulence type="fractalNoise" baseFrequency="0.09" numOctaves="1" seed="1" result="noise" id="noise">
                        <animate attributeType="XML" attributeName="seed" from="2" to="120" dur="10s" repeatCount="indefinite"/>
                        </feTurbulence>
                        <feMorphology id="morph3" in="SourceGraphic" operator="dilate" radius="0.01" result="morph1" />
                        <feMorphology id="morph4" in="morph1" operator="dilate" radius="5" result="morph2" />
                        <feComposite operator="out" in="morph2" in2="morph1" result="strokeText"/>
                        <feDisplacementMap 
                                    xChannelSelector="R" 
                                    yChannelSelector="G" 
                                    in="strokeText" 
                                    in2="noise"
                                    result="displacementMap"
                                    color-interpolation-filters="sRGB"
                                    scale="10" />
                        <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="displacementMap"/>
                        </feMerge>
                </filter>
                <use xlinkHref="#text" id="textShock" x="2" y="2" filter="url(#shock)" stroke="0" stroke-width="1000" fill="#ff0000"/>
                <use xlinkHref="#text" id="textShock" x="2" y="2" filter="url(#shock2)" stroke="0" stroke-width="1000" fill="#000000"/>
                <use xlinkHref="#text" id="textFill" x="0" y="0" fill="white" />
                <use xlinkHref="#text" id="textGlow" x="0" y="0" filter="url(#glow)" stroke="#000000" stroke-width="3" fill="transparent"/>
            </svg>
    }
}

export default Logo;