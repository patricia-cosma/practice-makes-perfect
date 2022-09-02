const button = document.querySelector('.btn-start');
const container = document.querySelector ('.container');

// const days - to be able to loop through the days in the calendar
const days = 24;

const createCalendar = () => {
    for (let i = 0; i < days; i++) {
        const calendarDoor = document.createElement('div'); // <div class="image"> 
        const calendarDoorText = document.createElement('div'); // <div class="text"> 1 </div> 

        calendarDoor.classList.add('image');
        calendarDoor.style.gridArea = 'door' + (i + 1); // to select the specific door in the grid area created in CSS
        container.appendChild(calendarDoor);
    }
}

button.addEventListener('click', createCalendar);
