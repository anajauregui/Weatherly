import Key from './Key';
import Search from '../lib/Search';

export default function API (location) {
  return `http://api.wunderground.com/api/${Key}/conditions/hourly/forecast10day/q/${location}.json`
}
