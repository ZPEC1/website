import styles from "../../styles/components/Trending.module.scss";
import { useEffect, useState } from "react";

export interface TrendingCard {
    title: string;
    description: string;
    image: string;
    href: string;
    content: string;
}

type Props = {
    trendingType: string;
    subgroupColor?: string;
};

export default function Trending({ trendingType, subgroupColor }: Props) {
    const [loading, setLoading] = useState(true);
    const [trendingInfo, setTrendingInfo] = useState<TrendingCard[] | null>();
    subgroupColor = subgroupColor ? subgroupColor : '#0075FF';

    useEffect(() => {
        getTrendingData(trendingType);
    }, [trendingType]);

    const getTrendingData = async (trendingType: string) => {
        const res = await fetch("/api/trending/get", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                branch: trendingType,
            }),
        });

        if (res.status != 200) {
            return;
        }
        const trending = await res.json();

        let trendingData = trending.result as TrendingCard[];

        setTrendingInfo(trendingData);
        setLoading(false);
    };

    return (
        <div className={styles.trending_cards}>
            {loading || trendingInfo == null ? (
                Array.apply(null, Array(3)).map((_, i) => {
                    return (
                        <div
                            key={i}
                            className={`${styles.trending_card} ${styles.loading}`}
                            style={{
                                backgroundColor: subgroupColor,
                            }}
                        >
                            <h4 />
                            <p />
                        </div>
                    );
                })
            ) : trendingInfo?.length === 0 ? (
                <p>Coming soon! Get ready for exciting trending content. Stay tuned! 🚀</p>
            ) : (
                trendingInfo?.map((info, index) => {
                    return (
                        <div
                            key={index}
                            className={styles.trending_card}
                            style={{
                                backgroundImage: `url(${info.image})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h4>{info.title}</h4>
                            <p>{info.description}</p>
                        </div>
                    );
                })
            )}
        </div>
    );
}
