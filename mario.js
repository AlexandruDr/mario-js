
printPyramid(8);
/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
 
    var string = '#';
    
   for ( var i = 0; i < height; i++)
        {   var spaces = '';
            for (j = i; j < height -1; j++)
                {
                    
                    spaces += " ";
                }
            
            if (i != height)

            string += "#";
            
            console.log(spaces + string);

            spaces = ''
        }
        
    
    }


