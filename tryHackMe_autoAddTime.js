// Author : pawnmuncher
// A little javascript to automatically add 1 hour your active Tryhackme.com machine/lab.
// Simply set the desired interval for the script to autoAddTime to the machine, 
// then paste the code in browsers console window using the developers tools

setInterval(autoAddTime, 2700000); // minutes in milliseconds (45 minutes = 2700000ms), set to 5000 or 5 seconds to test if you like ;)
function autoAddTime() {
  $("#add-vm-time").click();
}
