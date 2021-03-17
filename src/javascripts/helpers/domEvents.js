import printShows from '../components/printShows';
import { buildSouvenirs } from '../components/buildSouvenirs';
import getSouvenirs from './data/souvenirData';
import showFood from '../components/showFood';
import { createFood, getFood } from './data/foodData';
import getStaff from './data/staffData';
import { showStaff } from '../components/showStaff';
import { createShow, getShows } from './data/showsData';
import createFoodForm from '../components/forms/createFoodForm';
import createShowForm from '../components/forms/createShowForm';

const domEvents = (id) => {
  document.querySelector('body').addEventListener('click', (e) => {
    console.warn(e.target.id);
    if (e.target.id.includes('souvenir-view')) {
      getSouvenirs(id).then((souvenirArray) => buildSouvenirs(souvenirArray));
    }
    if (e.target.id.includes('food-view')) {
      getFood(id).then((foodArray) => showFood(foodArray));
    }
    if (e.target.id.includes('staff-view')) {
      getStaff(id).then((staffArray) => showStaff(staffArray));
    }
    if (e.target.id.includes('shows-view')) {
      getShows(id).then((showsArray) => printShows(showsArray));
    }
    if (e.target.id.includes('create-food')) {
      createFoodForm();
    }
    if (e.target.id.includes('submit-food')) {
      e.preventDefault();
      const foodObject = {
        event_id: id,
        name: document.querySelector('#foodName').value,
        description: document.querySelector('#foodDescription').value,
        image: document.querySelector('#imageUrl').value,
        price: document.querySelector('#price').value,
        glutenFree: document.querySelector('#glutenFree').checked,
        vegetarian: document.querySelector('#vegetarian').checked
      };
      createFood(foodObject, id).then((response) => showFood(response));
    }
    if (e.target.id.includes('show-show-form')) {
      createShowForm();
    }
    if (e.target.id.includes('submit-show')) {
      e.preventDefault();

      const showObject = {
        name: document.querySelector('#showName').value,
        image: document.querySelector('#image').value,
        date: document.querySelector('#date').value,
        description: document.querySelector('#description').value,
        event_id: id
      };
      createShow(showObject, id).then((showsArray) => printShows(showsArray));
    }
  });
};

export default domEvents;
