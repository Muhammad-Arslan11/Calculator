(function(){

        let screen = document.querySelector('.screen');
        let buttons = document.querySelectorAll('.btn');
        let equalButton = document.querySelector('.btn-equal');
        let clearButton = document.querySelector('.btn-clear');
       

        buttons.forEach(function(button){

           button.addEventListener('click',function(event){

            let value = event.target.dataset.num;
            screen.value += value;

           },false)
        });
       
        equalButton.addEventListener('click', function(event){
          if(screen.value === ''){
            screen.value = " ";
          }else{
            let answer = math.evaluate(screen.value);
            screen.value = answer
          }

        },false)

        clearButton.addEventListener('click', function () {
            screen.value = '';
        }, false);

})();