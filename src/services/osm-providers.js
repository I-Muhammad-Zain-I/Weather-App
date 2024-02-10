const API_KEY = import.meta.env.VITE_REACT_APP_MAPTILER_KEY;
export default {
    maptiler: {
        url: `https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=03v1X8yck29jRHRRmwwO`,
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    }
}