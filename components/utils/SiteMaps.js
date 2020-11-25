import { Component } from 'react'
import GoogleMap from 'google-map-react'
import CustomMarker from './CustomMarker'

class SiteMaps extends Component {

    render() {
        return (
            <GoogleMap
                // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
                bootstrapURLKeys={{ key: 'AIzaSyAdcn_Fxp4naGevcyeOGvZvlKjuvYzassU' }}
                center={[-7.5434715, 112.2800259]}
                zoom={16}>
                <CustomMarker lat={-7.5434715}
                    lng={112.2800259}
                    name="My Marker"
                    color="blue" />
            </GoogleMap>
        )
    }

}

export default SiteMaps