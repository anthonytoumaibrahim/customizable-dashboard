import { Spotify } from "react-spotify-embed";

interface SpotifyWidgetProps {
    dataset_url: string;
}

const SpotifyWidget = ({
    dataset_url = "https://open.spotify.com/album/0fUy6IdLHDpGNwavIlhEsl?si=mTiITmlHQpaGkoivGTv8Jw",
}: SpotifyWidgetProps) => {
    return <Spotify className="w-full h-full" link={dataset_url} />;
};

export default SpotifyWidget;
