const righttab = document.getElementById('right');
var cell = document.createElement('div');
var panel = document.createElement('div');
var column = document.createElement('div');
var button = document.createElement('button')
cell.style.width= '10px';
cell.style.height = '10px';
cell.style.backgroundColor = 'black'
cell.style.padding = "0";
cell.style.margin = '0';
column.style.padding= '0';
column.style.margin = '0';

cell.setAttribute('class', 'grid');
righttab.style.display = 'flex';
righttab.style.flexDirection='column';
righttab.appendChild(panel);
button.textContent = 'Refresh'
// build column
for(var i = 0; i<16; i++)
{
    const grid = cell.cloneNode(true);
    column.appendChild(grid);
}
//set panel flex direction to row
panel.style.flexDirection = 'row';
panel.style.display = 'flex';
for(var i=0; i<16; i++)
{
    const columns = column.cloneNode(true);
    panel.appendChild(columns);

}
panel.style.backgroundColor = 'transparent';
righttab.appendChild(panel);
righttab.appendChild(button);
button.addEventListener('click',() =>
    {
        const cells = document.getElementsByClassName('grid');
        for(i in cells)
        {
            var cell = cells[i];
            cell.style.backgroundColor='black';
        }
    })
const cells = document.getElementsByClassName('grid');

for( var i = 0; i<cells.length; i++)
{
    const grid = cells[i];
    grid.addEventListener('click', () => grid.style.backgroundColor = 'white');
    grid.addEventListener('dragover', () => grid.style.backgroundColor = 'white');
    
}