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
        row.appendChild(cell);
        firstDay.setDate(firstDay.getDate() + 1);
        }
        cellid++;
    }
    Footer.appendChild(row);
}


