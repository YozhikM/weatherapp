import Vue from 'vue'
import VueAxios from 'vue-axios'
import Axios from 'axios'

Vue.use(VueAxios, Axios)

const app = new Vue({
    el: '#app',
    data: {
        data: {}
    },
    mounted() {
        var api = "https://fcc-weather-api.glitch.me/api/current?";
        var lat, lon, url, data;
        self = this;

        navigator.geolocation.getCurrentPosition(function(position) {
          lat = "lat=" + position.coords.latitude;
          lon = "lon=" + position.coords.longitude;
          url = api + lat + '&' + lon;
          Vue.axios.get(url).then(function(response) {
          console.log(response.data);            
          self.data = response.data;
          }).catch(function(error) {
          console.log(error);
          }); 
          });
        },
    methods: {
        isClouds: (data) => {
            var str = data.weather[0].main;
            if (str.search(/clouds/i) == -1) {
                return false;
            }
            return true;
        },
        isRain: (data) => {
            var str = data.weather[0].main;
            if (str.search(/rain/i) == -1) {
                return false;
            }
            return true;
        },
        isDrizzle: (data) => {
            var str = data.weather[0].main;
            if (str.search(/drizzle/i) == -1) {
                return false;
            }
            return true;
        },
        isSnow: (data) => {
            var str = data.weather[0].main;
            if (str.search(/snow/i) == -1) {
                return false;
            }
            return true;
      },
        isThunderstorm: (data) => {
            var str = data.weather[0].main;
            if (str.search(/thunder/i) == -1) {
                return false;
            }
            return true;
        },
        isClear: (data) => {
            var str = data.weather[0].main;
            if (str.search(/clear/i) == -1) {
                return false;
            }
            return true;
        }
    }
});