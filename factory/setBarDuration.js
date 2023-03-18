let win = document.createElement('iframe'); // creates blank iframe
document.body.append(win); // appends
window.alert = win.contentWindow.alert.bind(window); // unblocks all alerts via blank iframe
window.prompt = win.contentWindow.prompt.bind(window); // unblocks all prompts via blank iframe
win.remove(); // removes iframe

if (window.location.pathname != '/play/factory') { // catches if user isn't in a factory game
  alert('You must be in a Factory game.');
}

else {
  if (document.querySelector('.styles__factoryBar___dHE0M-camelCase') === null) { // catches if no blooks are loaded
    alert('No Blooks detected.');
  }
  
  else {
    if (timeprompt != undefined) {
      alert('Bar duration already set to '+ timeprompt +'! You can only run this exploit once in a game.'); // catches if interval is already set
    }
    
    else {
      console.info('%cMade with love by TonicGaro ❤️', 'color: #20c20e'); // displays cool message in console
      var timeprompt = prompt('What bar duration do you want for all blooks? Type lowest for the fastest duration possible.'); // prompts user with what duration they want
  
      if (timeprompt === 'lowest') { // sets duration to lowest possible
        timeprompt = 'lowest amount'
        
        setInterval(function() { // sets interval to override any changes to duration from upgrading
          let blookList = document.querySelectorAll('.styles__factoryBar___dHE0M-camelCase'); // selects all current bars on screen
          for (let i = 0; i < blookList.length; i++) {
              blookList[i].style.animationDuration = '0.00001s'; // changes duration to lowest amount
          }
        }, 1);
      } 
    
      else {
        setInterval(function() { // sets interval to override any changes to duration from upgrading
          let blookList = document.querySelectorAll('.styles__factoryBar___dHE0M-camelCase'); // selects all current bars on screen
          for (let i = 0; i < blookList.length; i++) {
              blookList[i].style.animationDuration = timeprompt + 's'; // changes duration based on user input
          }
        }, 1);
      }
    }
  }
}