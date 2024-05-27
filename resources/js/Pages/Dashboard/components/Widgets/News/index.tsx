import axios from "axios";
import { useEffect, useState } from "react";
import LoadError from "../LoadError";

interface NewsWidgetProps {
    widget_data?: { interests: string };
}

type NewsDataAPIResponseType = {
    status: string;
    totalResults: number;
    results: Array<{
        article_id: string;
        title: string;
        link: string;
        creator: Array<string>;
        description: string;
        pubDate: string;
        image_url: string;
    }>;
};

const NewsWidget = ({ widget_data }: NewsWidgetProps) => {
    const [newsData, setNewsData] = useState<NewsDataAPIResponseType>();
    const [loadError, setLoadError] = useState(false);

    useEffect(() => {
        const url = `https://newsdata.io/api/1/latest?apikey=pub_44992762918afd314c7e256261da8a4e126ce&country=us&qInMeta=${widget_data?.interests}`;
        axios
            .get(url)
            .then((res) => setNewsData(res.data))
            .catch((err) => setLoadError(true));
    }, []);

    return loadError ? (
        <LoadError />
    ) : (
        <div className="w-full h-full space-y-2">
            <h3 className="text-lg font-bold">
                Latest {widget_data?.interests} News
            </h3>
            <div className="flex flex-col gap-2 mb-2">
                {newsData?.results.length === 0 && (
                    <p>No news articles were found.</p>
                )}
                {newsData?.results?.map((article) => {
                    const {
                        title,
                        description,
                        image_url,
                        link,
                        creator,
                        pubDate,
                        article_id,
                    } = article;
                    return (
                        <a
                            key={article_id}
                            href={link}
                            target="_blank"
                            className="flex rounded overflow-hidden border shadow-sm hover:shadow-lg"
                        >
                            <img
                                src={image_url}
                                className="w-40 h-40 shrink-0 object-cover"
                            />
                            <div className="p-2">
                                <p className="font-bold">{title}</p>
                                <p className="text-sm">{description}</p>
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default NewsWidget;
