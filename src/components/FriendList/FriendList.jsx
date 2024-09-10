import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem/FriendListItem.jsx";
import styles from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={styles.friendsList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id}>
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
