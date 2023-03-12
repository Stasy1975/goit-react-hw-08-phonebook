// import PropTypes from 'prop-types';
// import { ItemElement, ItemContent, DeleteButton } from './ItemContact.stayled';
// import { AiOutlineClose } from 'react-icons/ai'
// import { removeContact} from '../../redux/operations';
// import { useDispatch } from 'react-redux';

// const ItemContact = ({ contact }) => {
//   const { id, name, phone } = contact;
//   const dispatch = useDispatch();

//   return (
//     <ItemElement>
//       <ItemContent>{name}</ItemContent>
//       <ItemContent>{phone}</ItemContent>
//       <DeleteButton onClick={() => {
//           dispatch(removeContact(id));
//         }}><AiOutlineClose /></DeleteButton>
//     </ItemElement>
//   );
// };

// export default ItemContact;

// ItemContact.propTypes = {
//   contact: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired,
//   }),
  
// };