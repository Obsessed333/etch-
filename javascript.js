        const gridContainer = document.createElement('div');
        const divBtn = document.createElement('button');
        divBtn.textContent ='Click me!!'
        gridContainer.classList.add('container');
        divBtn.classList.add('divBtn')
        document.body.appendChild(divBtn);
        document.body.appendChild(gridContainer);
        
        function createDivs(num){

            for(let i=  0; i < num; i++){

                const grid =document.createElement('div');
                grid.classList.add('grid');
                gridContainer.appendChild(grid);
                

            }


        }
        divBtn.addEventListener('click', function(){

            
            let num = prompt('Enter the number of grids')
            if(isNaN(num) || num <= 0){

                alert('Enter a valid number')
                
            }
            else if(num > 100){

                alert('Enter a number smaller than 100')
                
            } 
            createDivs(num);


        });

        console.log(document.body);
       