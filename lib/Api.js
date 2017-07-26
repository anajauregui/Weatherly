import Key from './Key';
import Search from './Search';

export default function API () {
// console.log(Search());
  return `http://api.wunderground.com/api/${Key}/conditions/hourly/forecast10day/q/CO/Denver.json`
}
