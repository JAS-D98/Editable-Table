var table = document.getElementById('example');
var cells = table.getElementsByTagName('td');

for (var i = 0; i < cells.length; i++){
    cells[i].onclick = function(){
        if(this.hasAttribute('data-clicked')){
            return;
        }
        this.setAttribute('data-clicked', 'yes');
        this.setAttribute('data-text', this.innerHTMl);
       var input = document.createElement('input');
       input.setAttribute('type', 'text');
       input.value= this.innerHTMl;
       input.style.width =this.offsetWidth - (this.clientLeft * 2) + " px ";
       input.style.height = this.offsetHeight - (this.clientTop * 2) +" px ";
       input.style.border = "0px";
       input.style.fontFamily = "inherit";
       input.style.fontSize = "inherit";
       input.style.textAlign = "inherit";
       input.style.background = "LightGoldenRodYellow";

       input.onblur = function(){
        var td = input.parentElement;
        var orig_text = input.parentElement.getAttribute('data-text');
        var current_text = this.value;

        if(orig_text != current_text){
            td.removeAttribute('data-clicked');
            td.removeAttribute('data-text');
            td.innerHTML = current_text;
            td.style.cssText = "Padding: 5px";
            console.log(orig_text + ' is changed to '+current_text);
        }else{
            td.removeAttribute('data-clicked');
            td.removeAttribute('data-text');
            td.innerHTML = orig_text;
            td.style.cssText = "Padding: 5px";
            console.log('No changes made');
        }
       }

       input.onkeypress = function(){
        if(event.keyCode == 13){
            this.onblur();
        }
       }
       this.innerHTMl = '';
       this.style.cssText = 'padding: 0px 0px';
       this.append(input);
       this.firstElementChild.select();
    }
}