const buttons = Array.from(document.querySelectorAll('.btn'));
const products = Array.from(document.querySelectorAll('.pro'))

buttons.map(button => {
     button.addEventListener('click',(event)=>{
          const target_button = event.target.classList;
          products.map(product =>{
               if(target_button.contains('btn1')){
                    if(product.classList.contains('pro1')){
                         product.style.display = 'block';
                    }else{
                         product.style.display = 'none'
                    }
               }if(target_button.contains('btn2')){
                    if(product.classList.contains('pro2')){
                         product.style.display = 'block';
                    }else{
                         product.style.display = 'none';
                    }
               }if(target_button.contains('btn3')){
                    if(product.classList.contains('pro3')){
                         product.style.display = 'block';
                    }else{
                         product.style.display = 'none'
                    }
               }if(target_button.contains('btn4')){
                    if(product.classList.contains('pro4')){
                         product.style.display = 'block';
                    }else{
                         product.style.display = 'none'
                    }
               }if(target_button.contains('btn5')){
                    if(product.classList.contains('pro5')){
                         product.style.display = 'block';
                    }else{
                         product.style.display = 'none';
                    }
               }if(target_button.contains('btn6')){
                    if(product.classList.contains('pro6')){
                         product.style.display = 'block';
                    }else{
                         product.style.display = 'none'
                    }
               }if(target_button.contains('btn7')){
                    if(product.classList.contains('pro7')){
                         product.style.display = 'block';
                    }else{
                         product.style.display = 'none'
                    }
               }if(target_button.contains('btn8')){
                    if(product.classList.contains('pro8')){
                         product.style.display = 'block';
                    }else{
                         product.style.display = 'none'
                    }
               }if(target_button.contains('btn9')){
                    if(product.classList.contains('pro9')){
                         product.style.display = 'block';
                    }else{
                         product.style.display = 'none'
                    }
               }if(target_button.contains('btn10')){
                    if(product.classList.contains('pro10')){
                         product.style.display = 'block';
                    }else{
                         product.style.display = 'none'
                    }
               }if(target_button.contains('btn11')){
                    if(product.classList.contains('pro11')){
                         product.style.display = 'block';
                    }else{
                         product.style.display = 'none'
                    }
               }if(target_button.contains('btn12')){
                    if(product.classList.contains('pro12')){
                         product.style.display = 'block';
                    }else{
                         product.style.display = 'none'
                    }
               }if(target_button.contains('btn13')){
                    if(product.classList.contains('pro13')){
                         product.style.display = 'block';
                    }else{
                         product.style.display = 'none'
                    }
               }if(target_button.contains('btn14')){
                    if(product.classList.contains('pro14')){
                         product.style.display = 'block';
                    }else{
                         product.style.display = 'none'
                    }
               }if(target_button.contains('btn15')){
                    if(product.classList.contains('pro15')){
                         product.style.display = 'block';
                    }else{
                         product.style.display = 'none'
                    }
               }if(target_button.contains('btn16')){
                    if(product.classList.contains('pro16')){
                         product.style.display = 'block';
                    }else{
                         product.style.display = 'none'
                    }
               }if(target_button.contains('btn17')){
                    if(product.classList.contains('pro17')){
                         product.style.display = 'block';
                    }else{
                         product.style.display = 'none'
                    }
               }if(target_button.contains('btn18')){
                    if(product.classList.contains('pro18')){
                         product.style.display = 'block';
                    }else{
                         product.style.display = 'none'
                    }
               }if(target_button.contains('btn19')){
                    if(product.classList.contains('pro19')){
                         product.style.display = 'block';
                    }else{
                         product.style.display = 'none'
                    }
               }
          })
     });
});