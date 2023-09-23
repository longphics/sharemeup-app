import Home from '../assets/icons/home.svg';
import HomeFill from '../assets/icons/home-fill.svg';
import Feed from '../assets/icons/feed.svg';
import FeedFill from '../assets/icons/feed-fill.svg';
import HandShake from '../assets/icons/handshake.svg';
import HandShakeFill from '../assets/icons/handshake-fill.svg';
import Chat from '../assets/icons/chat.svg';
import ChatFill from '../assets/icons/chat-fill.svg';
import Person from '../assets/icons/person.svg';
import PersonFill from '../assets/icons/person-fill.svg';
import Volunteer from '../assets/icons/volunteer.svg';
import VolunteerFill from '../assets/icons/volunteer-fill.svg';
import Search from '../assets/icons/search.svg';
import SearchFill from '../assets/icons/search-fill.svg';
import Cart from '../assets/icons/cart.svg';
import CartFill from '../assets/icons/cart-fill.svg';
import Back from '../assets/icons/back.svg';
import BackFill from '../assets/icons/back-fill.svg';
import Edit from '../assets/icons/edit.svg';
import EditFill from '../assets/icons/edit-fill.svg';
import Filter from '../assets/icons/filter.svg';
import FilterFill from '../assets/icons/filter-fill.svg';

export default function Icon({ name, color, size }) {
  const Icons = {
    'home': Home,
    'home-fill': HomeFill,
    'feed': Feed,
    'feed-fill': FeedFill,
    'handshake': HandShake,
    'handshake-fill': HandShakeFill,
    'chat': Chat,
    'chat-fill': ChatFill,
    'person': Person,
    'person-fill': PersonFill,
    'volunteer': Volunteer,
    'volunteer-fill': VolunteerFill,
    'search': Search,
    'search-fill': SearchFill,
    'cart': Cart,
    'cart-fill': CartFill,
    'back': Back,
    'back-fill': BackFill,
    'edit': Edit,
    'edit-fill': EditFill,
    'filter': Filter,
    'filter-fill': FilterFill,
  };

  const Component = Icons[name];

  return <Component fill={color} height={size} />;
}
