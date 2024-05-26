import { useMemo } from "react";
import { Spotify } from "react-spotify-embed";

interface SpotifyWidgetProps {
    dataset_url: string;
}

const SpotifyWidget = ({
    dataset_url = "https://open.spotify.com/track/777zXDJpBufzttU4AJ2dGO?si=4f749eb33c594520",
}: SpotifyWidgetProps) => {
    const SpotifyMemo = useMemo(
        () => <Spotify className="w-full h-full" link={dataset_url} />,
        [dataset_url]
    );

    return SpotifyMemo;
};

export default SpotifyWidget;
