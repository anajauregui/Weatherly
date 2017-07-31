import Key from './Key';
import Welcome from '../Components/Welcome';

export default function API (location) {
  return `http://api.wunderground.com/api/${Key}/conditions/hourly/forecast10day/q/${location}.json`
}
