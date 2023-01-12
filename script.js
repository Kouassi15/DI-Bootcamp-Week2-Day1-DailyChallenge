//Remove Banana from the array.
const fruits = ["Banana","Applles","Oranges","Blueberries"];
fruits.shift();
console.log(fruits);

//Sort the array in alphabetical order.
 fruits.sort();
 console.log(fruits)
//Add “Kiwi” to the end of the array.
 fruits.push("kiwi");
console.log(fruits);

//Remove “Apples” from the array. Don’t use the same method as in part 1
fruits.splice(0,1);
console.log(fruits);

//Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’]
fruits.reverse();
console.log(fruits);

/*// exercise2
//Access and then console.log “Oranges”.
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
//moreFruits([1][1][0]);
console.log(moreFruits[1][1][0]);//orange// Dessin Triangle
/*for ( i = 0; i < 13; i++) {
   for ( j = 0; j <= 13-i; j++) document.write(" ");       
   document.write("< ");
   for ( j = 0; j <= i+i; j++) document.write("x ");
   document.write("*<BR>");
} 
 
//</script>*/
//<script type="text/javascript" language="javascript">
 //Triangle de nombre de Pascal
/*for ( i = 0; i < 10; i++) {
   for ( j =0; j <= i; j++) {
      console.log(" "+j*i);
   }
   //document.write("<BR>");
}
 
/** JavaScript */