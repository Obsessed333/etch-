        const gridContainer = document.createElement('div');
        const divBtn = document.createElement('button');
        divBtn.textContent ='Select Size'
        gridContainer.classList.add('container');
        divBtn.classList.add('divBtn')
        document.body.appendChild(divBtn);
        document.body.appendChild(gridContainer);
        
        function createDivs(num){
            gridContainer.innerHTML = '';
            const gridSize = 400;
            const squareSize = gridSize / num;

            function randomRGB() {
                var x = Math.floor(Math.random() * 256);
                var y = Math.floor(Math.random() * 256);
                var z = Math.floor(Math.random() * 256);
                var RGBColor = "rgb(" + x + "," + y + "," + z + ")";  
                return RGBColor;
              }

            
            for(let i=  0; i < num * num; i++){

                const grid =document.createElement('div');
                grid.classList.add('grid');
                grid.style.width = `${squareSize}px` ;
                grid.style.height = `${squareSize}px ` ;
                gridContainer.appendChild(grid);
                grid.addEventListener('mouseover', function(){

                    grid.style.backgroundColor = randomRGB();
                });

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
       