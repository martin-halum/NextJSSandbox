import React from 'react';
import Image from 'next/image'
import { Box, Button, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Header from '../../organisms/Header';

import styles from './styles/index.module.css';

import type { PropsType } from './types';

const HomeLayout = (props: PropsType) => {
    const { article, onClickNext, onClickPrevious } = props;
    const { author, title, urlToImage, url } = article;

    return (
        <>
            <div>
                <Header title={"Everything Sports"} />
            </div>
            <div className={styles.container}>
                <main className={styles.main}>
                    <Image
                        alt='cover-image'
                        src={urlToImage}
                        width="100%"
                        height="100%"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        className={styles.bgWrap}
                    />
                    <Box sx={{ width: "60%" }}>
                        <Typography
                            variant='h4'
                            component={'h4'}
                            className={styles.articleTitle}
                        >
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" className={styles.articleTitle}>{author || ""}</Typography>
                    </Box>
                    <Box mt={"10px"}>
                        <Button
                            variant='contained'
                            href={url}
                        >
                            Read More
                        </Button>
                    </Box>
                    <div style={{ position: 'absolute', left: 0 }}>
                        <Button style={{ color: "white" }} onClick={onClickPrevious}>
                            <ChevronLeftIcon /> Prev
                        </Button>
                    </div>
                    <div style={{ position: 'absolute', right: 0 }}>
                        <Button style={{ color: "white" }} onClick={onClickNext}>
                            Next <ChevronRightIcon />
                        </Button>
                    </div>
                </main>
            </div>
        </>);
};

export default HomeLayout;
