import Head from "next/head";
import {ReactNode} from "react";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";
import styles from "../../styles/components/PageLayout.module.scss";
import Banner from "../banner/Banner";
import {Common} from "../../constants/common";

type Props = {
    title: string;
    description?: string;
    heading?: string | JSX.Element;
    children?: ReactNode;
    bannerColor?: string;
    footerColor?: string;
    branch?: string;
    headerImgUrl?: string;
};

function PageLayout({title, children, description, heading, bannerColor, footerColor, branch }: Props) {
    return (
        <div className={styles.page}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>

                <link rel="icon" href="/assets/logos/acm.png"/>
                <meta name="author" content="PEC ACM CSS" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta name='application-name' content='PEC CSS | ACM at PEC' />
                <meta name='apple-mobile-web-app-capable' content='yes' />
                <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                <meta name='apple-mobile-web-app-title' content={title} />
                <meta name='format-detection' content='telephone=no' />
                <meta name='mobile-web-app-capable' content='yes' />
                <meta name='msapplication-config' content='/assets/icons/browserconfig.xml' />
                <meta name='msapplication-TileColor' content='#0075FF' />
                <meta name='msapplication-tap-highlight' content='no' />
                <meta name='theme-color' content={Common.primaryColor} />

                <link rel='apple-touch-icon' href='/assets/icons/apple-touch-icon.png' />
                <link rel='apple-touch-icon' sizes='152x152' href='/assets/icons/apple-touch-icon.png' />
                <link rel='apple-touch-icon' sizes='180x180' href='/assets/icons/apple-touch-icon.png' />
                <link rel='apple-touch-icon' sizes='167x167' href='/assets/icons/apple-touch-icon.png' />

                <link rel='icon' type='image/png' sizes='32x32' href='/assets/icons/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/assets/icons/favicon-16x16.png' />
                <link rel='manifest' href='/manifest.json' />
                <link rel='mask-icon' href='/assets/icons/safari-pinned-tab.svg' color='#0075FF' />
                <link rel='shortcut icon' href='/assets/icons/favicon.ico' />
                <link rel='canonical' href='https://www.pecacm.com/' />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.pecacm.com/" />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />
                <meta property="twitter:image" content="https://www.pecacm.com/assets/logos/acm.png" />
                <meta name='twitter:creator' content='@pec_acm' />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.pecacm.com/" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description + "\n" + "We are a 300+ strong community of Computer Science enthusiasts working together to advance Computing as a Science and Profession. We are proud to be part of the official ACM Student Chapter - PEC ACM, and our base camp is at Punjab Engineering College, Chandigarh."} />
                <meta property="og:image" content="https://www.pecacm.com/assets/logos/acm.png" />
                <meta property="og:image:height" content="1200" />
                <meta property="og:image:width" content="630" />
                <meta property='og:site_name' content='PEC CSS | ACM at PEC' />

                <meta name="keywords" content="pecacm, acmcss, punjab engineering college, pec, pec cse, pec chandigarh, saasc, scc, drams, peb, eeb, heb, Technical Society of PEC, Coding Club of PEC, ai, cp, dev, socials, wit, cyber, punjabi editorial board pec, pecfest, iit chandigarh, iitc, chandigarh" />

                {/* TODO : Verification pending */}
                <meta name="google-site-verification" content="wJCASasAYLy_hM-ndSessna54e0JH7VCzmg5asx1aFc" />
            </Head>
            <Header />
            <div className={styles.children}>
                <Banner heading={heading} color={bannerColor ? bannerColor : Common.primaryColor}/>
                {children}
            </div>
            <Footer color={footerColor ? footerColor : Common.primaryColor} branch={branch ? branch : "none"} />
        </div>
    );
}

export default PageLayout;
