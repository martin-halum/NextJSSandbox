import React from 'react';
import Image from 'next/image'
import { Box, Button, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Header from '../../organisms/Header';

import styles from './styles/index.module.css';

import type { PropsType } from './types';

const HomeLayout = (props: PropsType) => {
    const { articles } = props;

    return (<>
        <div>
            <Header title={"Everything Sports"} />
        </div>
        <div className={styles.container}>
            <main className={styles.main}>
                <Image
                    alt='cover-image'
                    src={"https://www.si.com/.image/t_share/MTg5NTg4OTM1NDY5NDQyMzYz/stephen-curry-warriors-dance.jpg"}
                    width="100%"
                    height="100%"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className={styles.bgWrap}
                />
                <Box sx={{ width: "60%" }}>
                    <Typography variant='h4' component={'h4'} className={styles.articleTitle}>Stephen Curry, Warriors Telepathy on Display Against Mavs - Sports Illustrated</Typography>
                    <Typography variant="subtitle1" className={styles.articleTitle}>Howard Beck</Typography>
                </Box>
                <Box mt={"10px"}>
                    <Button variant='contained' href="https://www.si.com/nba/2022/05/19/warriors-mavericks-stephen-curry-luka-doncic-game-1">Read More</Button>
                </Box>
                <div style={{ position: 'absolute', left: 0 }}>
                    <Button style={{ color: "white" }}>
                        <ChevronLeftIcon /> Prev
                    </Button>
                </div>
                <div style={{ position: 'absolute', right: 0 }}>
                    <Button style={{ color: "white" }}>
                        Next <ChevronRightIcon />
                    </Button>
                </div>
            </main>
        </div>
    </>);
};

export default HomeLayout;
