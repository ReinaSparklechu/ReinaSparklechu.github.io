//declare calender components



const Header = document.getElementById('Header')
const Footer = document.getElementById('footer');
const dateCells = document.createElement('div');
const dateRows = document.createElement('div');
dateCells.setAttribute('class', 'cells');
var cellid=0;
let Month = ['January' , 'Febuary', 'March' , 'April' , 'May', 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December'];
let currentMonth = new Date;
// Set header content
Header.textContent = Month[currentMonth.getMonth()];
Header.style.backgroundColor = '#fcd1d7';
let firstDay = new Date(currentMonth.getFullYear(),currentMonth.getMonth(), 1);
console.log(firstDay.getDay());
//set footer display
Footer.style.display = 'flex';
Footer.style.flexDirection = 'column';
Footer.style.minHeight = 'max-content';
//style date cells;
dateCells.style.width = '10vh';
dateCells.style.height = '10vh';
dateCells.style.border = '1px solid black';

dateRows.style.direction ='row';
dateRows.style.display = 'flex';
dateRows.style.maxHeight = '10vh';
dateRows.style.minHeight = '10vh' 

// get top row to state days
const toprow = document.createElement('div');
toprow.style.direction = 'row';
toprow.style.display = 'flex';
let days = ['Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat', 'Sun'];
Footer.appendChild(toprow)
//create date rows and insert into footer via nested loops

for(var i = 0; i<7;i ++)
{
    const cell = dateCells.cloneNode(true);
    cell.style.height = '4vh';
    cell.textContent = days[i].toString();
    toprow.appendChild(cell);
}
Footer.appendChild(toprow)
for(var i = 0; i< 6; i++)
{
    const row =dateRows.cloneNode(true);
    for(var j =0; j<7; j++)
    {
        //adding cells to row
        const cell = dateCells.cloneNode(true);
        cell.setAttribute('id', cellid.toString());
        if(cellid <firstDay.getDay()-1 || firstDay.getMonth() != currentMonth.getMonth())
        {
            cell.style.backgroundColor = '#ffe7de';
            row.appendChild(cell);
        } 
        else
        {
        cell.textContent = firstDay.getDate().toString();
        cell.addEventListener('mouseover',
        (e) => {e.target.style.backgroundColor = '#562135';
                e.target.style.color = '#ffe7de';});
        cell.addEventListener('mouseout',
        (e) => {e.target.style.backgroundColor = 'initial';
                e.target.style.color = 'initial';});
        cell.addEventListener('click', (e) => displayPosts(e));
        row.appendChild(cell);
        firstDay.setDate(firstDay.getDate() + 1);
        }
        cellid++;
    }
    Footer.appendChild(row);
}

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, getDoc, doc } from 'firebase/firestore/lite';
//const functions = require('firebase-functions');


const firebaseConfig = {
    apiKey: "AIzaSyAAvLTRYevEOyle25R2Qg27D2WXWnSmaAE",
    authDomain: "reina-s-base.firebaseapp.com",
    projectId: "reina-s-base",
    storageBucket: "reina-s-base.appspot.com",
    messagingSenderId: "575805687872",
    appId: "1:575805687872:web:c72bd7b5359f4113be77a5",
    measurementId: "G-HQPZSLZ7T3"
  };

const app = initializeApp(firebaseConfig);
var db = getFirestore(app);

async function getList(db) {
    const list = collection(db, 'Reddit');
    listSnap = await getDocs(list);
    const listed = listSnap.docs.map(doc => console.log(doc.data()));
}
//getList(db);

async function displayPosts(e)
{
  let selectedDate = e.target.textContent;
  let selectedMonth = currentMonth.getMonth().toString();
  let selectedYear = currentMonth.getFullYear().toString();
  const rightTab = document.getElementById('messageBoard');
  for(let i = 0; i<5; i++)
  {
        let query = `Reddit/Reddit-${selectedDate}-${selectedMonth}-${selectedYear}-${i.toString()}`;
        let ref = doc(db, query);
        let docSnap = await getDoc(ref);
        const newPost = document.createElement('div');
        newPost.setAttribute('class', 'Messages')
        newPost.textContent = docSnap.data().header;
        rightTab.appendChild(newPost);
        
  }

}

