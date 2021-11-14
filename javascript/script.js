
function validate() {
      
    if( document.myForm.name.value == "" ) {
       alert( "Please provide your name!" );
       document.myForm.name.focus() ;
       return false;
    }
    if( document.myForm.subject.value == "" ) {
       alert( "Please include a short message!" );
       document.myForm.subject.focus() ;
       return false;
    }
    return( true );
 }

