$(document).ready(main);
          
function main(){
           $(".bb").click(Escribir1);
           $(".b1").click(Borrar);
           $(".b2").click(Resultado);
           $(".Raiz").click(raiz);
           $(".ptc").click(potencia);
           $(".borrar").click(Borrar1);

           function Escribir1(){
            let dat2 = $(this).val();
           
            if(dat2 ==="X"){
                dat2="*"
                $("#TextBox").val($("#TextBox").val()+dat2);
                
            }
            else{
                $("#TextBox").val($("#TextBox").val()+dat2);
            }
      
        }
        function Borrar(){
            $("#TextBox").val("");
        }
    function Resultado(){
      
        $("#TextBox").val(eval($("#TextBox").val()))
 
    }

     
function raiz(){
  
    if($("#TextBox").val()===""){
        $("#TextBox").val()}
    else{
       
        $("#TextBox").val(Math.sqrt($("#TextBox").val()) )
    }
} 
function potencia(){
//QUEDO FALTANDO

}
function Borrar1(){
    let num=$("#TextBox").val();
        let tam = num.length;
        $("#TextBox").val(num.substring(0,tam-1));
}}
         