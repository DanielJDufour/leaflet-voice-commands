# leaflet-voice-commands
Tell Your Leaflet Map What to Do, like Zoom, Exit Full Screen, and Change Basemap


### Usage

``` js
// Create a new map with a voice controls button:
var map = new L.Map('map', {
    voiceControl: true,
});

// or, add to an existing map:
map.addControl(new L.Control.Voice());
```

### Supported Leaflet Versions
Leaflet 1.0 and later is supported. Earlier versions may work, but are not tested.
