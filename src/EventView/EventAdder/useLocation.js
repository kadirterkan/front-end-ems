import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api';


const mapContainerStyle = {
    'height':'300px',
    'width':'300px',
}


const places = ["places"];


const useLocation = (coordinates) => {
    const PhysicalLocation = () => {
        const { isLoaded, loadError } = useJsApiLoader({
            googleMapsApiKey: "AIzaSyBPuot6Zn3eJYu-nZ0R-hT6S5IwB5RUvsA",
            libraries:places
          })
        
        if(loadError) return "Error loading maps";
        if(!isLoaded) return "Loading Maps";

        // const mapRef = React.useRef();
        // const onMapLoad = React.useCallback((map) => {
        //     mapRef.current = map;
        // },[]);

        return(
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={8}
                center={coordinates}
                disableDefaultUI={true}
            >
                <Marker
                    position={coordinates}
                    />
            </GoogleMap>
        );
    }

    return {PhysicalLocation};
}

export default useLocation;