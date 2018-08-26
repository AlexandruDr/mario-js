

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

printPyramid(5);
drawPyramid(5);

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


    
    

function drawPyramid(height) {
 
        var string = '#';
        var divCaught = document.getElementById("pyramid");

       for ( var i = 0; i < height; i++)
            {   var spaces = '';
                for (j = i; j < height -1; j++)
                    {
                        
                        spaces += " ";
                    }
                
                if (i != height)
    
                string += "#";
                
                //console.log(spaces + string);
                divCaught.textContent = (spaces + string);

                spaces = ''
            }
            
        
        }