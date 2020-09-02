import houseData from '../../data/houseData';
import houseButton from './houseButton';

const createHouseButtonGroup = () => {

  $('#button-container').html(domString);

  $('body').on('click', '.house-button', houseButton.buttonEventFunction);
};

export default { createHouseButtonGroup };
