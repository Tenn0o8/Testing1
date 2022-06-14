function comChoice()
          {
               let a = (Math.floor(Math.random() * 10))%3;
               if (a==0) return "Rock";
               else if(a==1) return "Paper";
               else if(a==2) return "Scissors";
          }
          function compare(choice1,choice2)
          {



               //Chuan hoa choice 1
               if(choice1.match(/rock/i))  choice1 = "Rock";
               if(choice1.match(/paper/i))  choice1 = "Paper";
               if(choice1.match(/scissors/i))  choice1 = "Scissors";
               
               //so sanh va dua ra ket qua
               // 1 la ban win, -1 la com win,0 la hoa
               
               if(choice1=="Rock"&&choice2=="Paper")   return -1;
               else if(choice1=="Rock"&&choice2=="Scissors")     return 1;
               else if(choice1 == "Paper" && choice2 == "Rock")  return 1;
               else if(choice1 == "Paper" && choice2 == "Scissors")  return -1;
               else if(choice1 == "Scissors" && choice2 == "Rock")  return -1;
               else if(choice1 == "Scissors" && choice2 == "Paper")  return -1;
               else return 0;

          }
          
          function game()
          {
               let name = prompt("Please enter your name!");
               
               let yourPoints = 0;
               let comPoints = 0;

               let i = 1;
               for(;i<=5;i++)
               {
                    let you = prompt("Enter your choice on "+ i +" round!");
                    let com = comChoice();
                    let a = compare(you,com);
                    
                    if(a==1)  
                    {
                         yourPoints+=1;
                         console.log(name+" win round "+i);
                    }
                    else if(a==0)  console.log("Draw on round "+i);
                    else if(a==-1) 
                    {
                         comPoints+=1;
                         console.log("Com wins round "+ i);
                    }
                    if(yourPoints==3)
                    {
                         console.log(name+" win!");
                         break;
                    }
                    if(comPoints==3)
                    {
                         console.log("Com wins!");
                         break;
                    }
               }
               if(yourPoints>comPoints) console.log(name+" win!");
               else if(yourPoints<comPoints) console.log("Com wins!");
               else console.log("Draw!");
          }
          
          game()
          