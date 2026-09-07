import * as Styles from "./ScheduleBlock.styles.ts";
import type {ScheduleModel} from "../../models/schedule.model.ts";
import React from "react";

type ScheduleBlockProps = Omit<ScheduleModel, "day">

export const ScheduleBlock = ({time, description}: ScheduleBlockProps) => {
    const lines = description.split('.').filter(Boolean);

    return (
        <Styles.ScheduleBlock>
            <Styles.SVG width="262" height="45" viewBox="0 0 262 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <foreignObject x="-23.4" y="-23.4" width="308.8" height="91.8">
                    <div style={{
                        backdropFilter: "blur(11.7px)",
                        clipPath: "url(#bgblur_0_91_113_clip_path)",
                        height: "100%",
                        width: "100%"
                    }}></div>
                </foreignObject>
                <g filter="url(#filter0_i_91_113)" data-figma-bg-blur-radius="23.4">
                    <path d="M25 0H237L262 22.5L237 45H25L0 22.5L25 0Z" fill="black" fill-opacity="0.12"/>
                    <path d="M236.424 1.5L259.757 22.5L236.424 43.5H25.5762L2.24219 22.5L25.5762 1.5H236.424Z"
                          stroke="#074686" stroke-width="3"/>
                </g>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="24"
                      fontFamily="Montserrat Alternates">
                    {time}
                </text>
                <defs>
                    <filter id="filter0_i_91_113" x="-23.4" y="-23.4" width="308.8" height="91.8"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="54.6"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.83 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_91_113"/>
                    </filter>
                    <clipPath id="bgblur_0_91_113_clip_path" transform="translate(23.4 23.4)">
                        <path d="M25 0H237L262 22.5L237 45H25L0 22.5L25 0Z"/>
                    </clipPath>
                </defs>
            </Styles.SVG>
            <Styles.Description>{lines.map((line, i) => (<React.Fragment key={i}>
                {line.trim()}
                {i < lines.length - 1 && '.\n'}
                <br/>
            </React.Fragment>))}</Styles.Description>
        </Styles.ScheduleBlock>
    );
};