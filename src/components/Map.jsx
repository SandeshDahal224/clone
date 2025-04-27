import { Wrapper } from "@googlemaps/react-wrapper";
import React from "react";
import { Zoom } from "react-reveal";

const markers = [{ lat: 13.050859, lng: 80.094085 }];

const Map = ({ onClick, onIdle, children, style, ...options }) => {
  const ref = React.useRef(null);
  const [map, setMap] = React.useState();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  React.useEffect(() => {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);

  React.useEffect(() => {
    if (map) {
      ["click", "idle"].forEach((eventName) =>
        window.google.maps.event.clearListeners(map, eventName)
      );

      if (onClick) {
        map.addListener("click", onClick);
      }

      if (onIdle) {
        map.addListener("idle", () => onIdle(map));
      }
    }
  }, [map, onClick, onIdle]);

  return (
    <>
      <div ref={ref} style={style} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};

const Marker = (options) => {
  const [marker, setMarker] = React.useState();
  // const contentRef = React.useRef(null);

  React.useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
    }

    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  React.useEffect(() => {
    if (marker) {
      const infowindow = new window.google.maps.InfoWindow({
        content: ``,
      });
      marker.setOptions(options);

      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          shouldFocus: false,
        });
      });
    }
  }, [marker, options]);

  return null;
};

export default function GoogleMaps() {
  //used unknown api key api need change for comercial purpose
  const apiKeys = "AIzaSyD6AUPIR0eIiGldIIo0b06uqLxlZDyQh-I";

  return (
    <Zoom delay={200}>
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <Wrapper apiKey={apiKeys}>
          <Map
            center={{ lat: 27.68546568599836, lng: 85.33526572636717 }}
            zoom={12}
            style={{ flexGrow: "1", height: "100%" }}
          >
            {markers.map((marker) => {
              return <Marker position={marker} key={marker.lat} />;
            })}
          </Map>
        </Wrapper>
      </div>
    </Zoom>
  );
}
