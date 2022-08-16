import { useState } from "react";
// import { Page } from "framer";
import { motion } from "framer-motion";

const pages = [1, 2, 3, 4, 5];
const indicatorSize = 10;
const indicatorPadding = 10;
const indicatorWidth = pages.length * indicatorSize;
const indicatorPaddingTotal = (pages.length - 1) * indicatorPadding;
const indicatorWidthTotal = indicatorWidth + indicatorPaddingTotal;
const indicatorAlpha = 0.3;

export function Example(props) {
    const [current, setCurrent] = useState(0);

    return (
        <>
            {/* <Page
                width={150}
                height={150}
                radius={30}
                center
                onChangePage={(current, _) => setCurrent(current)}
            >
                {pages.map((index) => {
                    return (
                        <div
                            style={{
                                width: 150,
                                height: 150,
                                borderRadius: 30,
                                backgroundColor: "#fff"
                            }}
                            key={index}
                        />
                    );
                })}
            </Page> */}

            {pages.map((index) => {
                return (
                    <motion.div
                        style={{
                            width: indicatorSize,
                            height: indicatorSize,
                            borderRadius: 30,
                            backgroundColor: "#fff",
                            position: "absolute",
                            top: "calc(50% + 100px)",
                            left: `calc(50% + ${index - 1} * ${
                                indicatorSize + indicatorPadding
                            }px)`,
                            x: -indicatorWidthTotal / 2,
                            opacity: indicatorAlpha
                        }}
                        animate={{
                            opacity: current === index - 1 ? 1 : indicatorAlpha
                        }}
                        key={index}
                    />
                );
            })}
        </>
    );
}
