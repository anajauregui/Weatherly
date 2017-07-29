import Key from './Key';
import Search from '../lib/Search';

export default function API (city) {
  return `http://api.wunderground.com/api/${Key}/conditions/hourly/forecast10day/q/CO/${city}.json`
}