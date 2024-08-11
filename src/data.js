import moment from 'moment'

export const API_KEY = 'AIzaSyA-6HSTxawo183_2MZQEI3AQLimhM2cH78'


export const value_converter = (value) => {
   if (value >= 1000000) {
      return Math.floor(value / 1000000) + "M";
   } else if (value >= 1000) {
      return Math.floor(value / 1000) + "K";
   }
   else {
      return value;
   }
}


// export const Moment = () => {
//    return moment()
//    // This will work fine
// };
