const questions = [
  {
      question: "What is the supreme law of the land?",
      answers: [
          { text: "The Bill", correct: false},
          { text: "The Constitution", correct: true},
          { text: "The President", correct: false},
          { text: "The people", correct: false},
      ]
  },
  {
      question: " What does the Constitution do?",
      answers: [
          { text: "Checks and Balances", correct: true},
          { text: "Sets up the government", correct: false},
          { text: "Rules  the government", correct: false},
          
      ]
  },
  {
      question: " The idea of self-government is in the first three words of the Constitution. What are these words?",
      answers: [
          { text: "All the People", correct: false},
          { text: "For the People", correct: false},
          { text: "The People", correct: false},
          { text: "We the People", correct: true},
      ]
  },


  {
      question: "What is an amendment? ",
      answers: [
          { text: "a Change (to the Constitution)", correct: true},
          { text: "a payment (to a Bill)", correct: false},
          { text: "a Change (to a Bill)", correct: false},
          { text: "a Payment (to the Constitution)", correct: false},
      ]
  },

  {
      question: "What do we call the first ten amendments to the Constitution? ",
      answers: [
          { text: "the Bill of Rights", correct: true},
          { text: "the Bill of Taxes", correct: false},
          { text: "the Bill of Bills", correct: false},
          { text: "The Bill", correct: false},
      ]
  },


  {
      question: "What is one right or freedom from the First Amendment?* ",
      answers: [
          { text: "Education", correct: false},
          { text: "Ppeech", correct: true},
          { text: "Marraige", correct: false},
          { text: "Military", correct: false},
      ]
  },


  {
      question: "How many amendments does the Constitution have?",
      answers: [
          { text: " twenty-four", correct: false},
          { text: " twenty-seven ", correct: true},
          { text: " twenty-six", correct: false},
          { text: " twenty-eight", correct: false},
      ]
  },



  {
      question: "What did the Declaration of Independence do?",
      answers: [
          { text: "declared our independence (from Mexico)", correct: false},
          { text: "declared our independence (from Great Britain)", correct: true},
          { text: "declared our independence (from South)", correct: false},
          { text: "declared our independence (from North)", correct: false},
      ]
  },

  {
      question: "What are two rights in the Declaration of Independence?",
      answers: [
          { text: "liberty,pursuit of life", correct: false},
          { text: "liberty,pursuit of happiness", correct: true},
          { text: "liberty,pursuit of money", correct: false},
          { text: "liberty,pursuit of land", correct: false},
      ]
  },

  {
      question: " What is freedom of religion?",
      answers: [
          { text: "You can practice any religion.", correct: false},
          { text: "You can practice any religion, or not practice a religion.", correct: true},
          { text: "You can practice one religion, or not practice a religion.", correct: false},
          { text: "You can practice any religion, or not practice One religion.", correct: false},
      ]
  },
  {
      question: "What is the economic system in the United States?*",
      answers: [
          { text: " economy", correct: false},
          { text: "market economy", correct: true},
          { text: "marketing", correct: false},
          { text: "tax economy", correct: false},
      ]
  },


  {
      question: "What is the “rule of law”?",
      answers: [
          { text: "President is above the law. ", correct: false},
          { text: "No one is above the law. ", correct: true},
          { text: "Government dont obey the law. ", correct: false},
          { text: "Americans dont obey the law. ", correct: false},
      ]
  },



  {
      question: "Name one branch or part of the government.*",
      answers: [
          { text: "Educational", correct: false},
          { text: "Congress", correct: true},
          { text: "Military", correct: false},
          { text: "President", correct: false},
      ]
  },



  {
      question: "What stops one branch of government from becoming too powerful?",
      answers: [
          { text: "Bill of rights", correct: false},
          { text: "checks and balances", correct: true},
          { text: "The Electoral", correct: false},
          { text: "Seperations of Checks ", correct: false},
      ]
  },



  {
      question: "Who is in charge of the executive branch?",
      answers: [
          { text: "The Caninet", correct: false},
          { text: "Senate and House", correct: false},
          { text: "President", correct: true},
          { text: "the Speaker ", correct: false},
      ]
  },



  {
      question: "Who makes federal laws?",
      answers: [
          { text: "The Caninet", correct: false},
          { text: "Senate and House", correct: true},
          { text: "President", correct: false},
          { text: "the Speaker ", correct: false},
      ]
  },



  {
      question: "What are the two parts of the U.S. Congress?*?",
      answers: [
          { text: "the Senate and President", correct: false},
          { text: "the Senate and House", correct: true},
          { text: "the Supreme Court and House", correct: false},
          { text: "the Cabinet and House", correct: false},
      ]
  },



  {
      question: "How many U.S. Senators are there?",
      answers: [
          { text: "two hundred", correct: false},
          { text: "one hundred", correct: true},
          { text: "three hundred", correct: false},
          { text: "five hundred", correct: false},
      ]
  },


  {
      question: "We elect a U.S. Senator for how many years? ",
      answers: [
          { text: "five", correct: false},
          { text: "six ", correct: true},
          { text: "two", correct: false},
          { text: "three", correct: false},
      ]
  },


  {
      question: "Who is one of your state’s U.S. Senators now?(for any other state look up your representative) ",
      answers: [
          { text: "Gillibrand, Kirsten E.", correct: false},
          { text: "Fischer, Deb", correct: false},
          { text: "Fetterman, John", correct: false},
          { text: "Feinstein, Dianne", correct: true},
      ]
  },


  {
      question: " The House of Representatives has how many voting members?  ",
      answers: [
          { text: "four hundred forty-five", correct: false},
          { text: "four hundred thirty-five", correct: true},
          { text: "four hundred fifthy-five", correct: false},
          { text: "four hundred twenty-five", correct: false},
      ]
  },


  {
      question: "  We elect a U.S. Representative for how many years?",
      answers: [
          { text: "three", correct: false},
          { text: "two ", correct: true},
          { text: "four", correct: false},
          { text: "five", correct: false},
      ]
  },

  {
      question: " Name your U.S. Representative. (for any other state look up your representative)  ",
      answers: [
          { text: "Gavin Newsom", correct: false},
          { text: "Pete Aguilar", correct: true},
          { text: "Kevin McCarthy", correct: false},
          { text: "Nancy Pelosi", correct: false},
      ]
  },

  {
      question: " Who does a U.S. Senator represent? ",
      answers: [
          { text: " some people of the state", correct: false},
          { text: " all people of the state", correct: true},
          { text: "People of the United States", correct: false},
          { text: "Vice President", correct: false},
      ]
  },


  {
      question: " Why do some states have more Representatives than other states?",
      answers: [
          { text: "some cities have more people", correct: false},
          { text: "some states have more people", correct: true},
          { text: "some states have less people", correct: false},
          { text: "some cities have less people", correct: false},
      ]
  },

  {
      question: "We elect a President for how many years?",
      answers: [
          { text: "Three", correct: false},
          { text: "four", correct: true},
          { text: "Two", correct: false},
          { text: "Five", correct: false},
      ]
  },


  {
      question: " In what month do we vote for President?*",
      answers: [
          { text: "October", correct: false},
          { text: "November", correct: true},
          { text: "December", correct: false},
          { text: "March", correct: false},
      ]
  },

  {
      question: "What is the name of the President of the United States now?",
      answers: [
          { text: "Donald J. Trump", correct: false},
          { text: "Joe Biden", correct: true},
          { text: "Barrack Obama", correct: false},
          { text: "Mike Pence", correct: false},
      ]
  },


  {
      question: " What is the name of the Vice President of the United States now?",
      answers: [
          { text: "Kamala Harris", correct: true},
          { text: "Mike Pence", correct: false},
          { text: "Joe Biden", correct: false},
          { text: "Dick Cheney", correct: false},
      ]
  },


  {
      question: " If the President can no longer serve, who becomes President?",
      answers: [
          { text: "The Senate ", correct: false},
          { text: "the Speaker of the House", correct: false},
          { text: "Vice President", correct: true},
      ]
  },


  {
      question: "  If both the President and the Vice President can no longer serve, who becomes President?",
      answers: [
          { text: "The Senate ", correct: false},
          { text: "the Speaker of the House", correct: true},
         
      ]
  },



  {
      question: " . Who is the Commander in Chief of the military?",
      answers: [
          { text: "The Senate", correct: false},
          { text: "The  Vice President ", correct: false},
          { text: "The Speaker", correct: false},
          { text: "The President ", correct: true},
      ]
  },
  {
      question: " Who signs bills to become laws?",
      answers: [
          { text: "The Senate", correct: false},
          { text: "The President ", correct: true},
          { text: "The Speaker", correct: false},
      ]
  },
  {
      question: " Who vetoes bills?",
      answers: [
          { text: "The Senate", correct: false},
          { text: "The President ", correct: true},
          { text: "The Speaker", correct: false},
          
      ]
  },
  {
      question: "What does the President’s Cabinet do?",
      answers: [
          { text: "Vetos Bills", correct: false},
          { text: " advises the President", correct: true},
          { text: "Helps The Electoral", correct: false},
          
      ]
  },
  {
      question: "What are two Cabinet-level positions?",
      answers: [
          { text: "Secretary of Attack, Secretary of State", correct: false},
          { text: "Secretary of Commerce,Secretary of Defense", correct: true},
          { text: "Secretary of City ,", correct: false},
          
      ]
  },
  {
      question: "What does the judicial branch do?",
      answers: [
          { text: "decides if a law goes with the Constitution", correct: false},
          { text: "decides if a law goes against the Constitution", correct: true},
          { text: "Vetos laws", correct: false},
          
      ]
  },
  {
      question: "What is the highest court in the United States?",
      answers: [
          { text: "Justice Supreme Court", correct: false},
          { text: " the Supreme Court", correct: true},
          { text: "the  New Supreme Court", correct: false},
         
      ]
  },
  {
      question: "How many justices are on the Supreme Court?",
      answers: [
          { text: "Seven", correct: false},
          { text: "Nine", correct: true},
          { text: "Ten", correct: false},
          { text: "Six", correct: false},
      ]
  },
  {
      question: "Who is the Chief Justice of the United States now",
      answers: [
          { text: "Kevin Eoberts", correct: false},
          { text: "John Roberts", correct: true},
          { text: "John Jay", correct: false},
          { text: "Jon Roberts", correct: false},
      ]
  },
  {
      question: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
      answers: [
          { text: "to End  war", correct: false},
          { text: "to declare war", correct: true},
          { text: "to hand out  money", correct: false},
          
      ]
  },
  {
      question: "Under our Constitution, some powers belong to the states. What is one power of the states? ",
      answers: [
          { text: "no  driver’s license", correct: false},
          { text: "give a driver’s license", correct: true},
          { text: "provide schooling and ", correct: false},
          { text: "provide  and education", correct: false},
      ]
  },
  {
      question: "Who is the Governor of your state now?",
      answers: [
          { text: "Galvin Richard", correct: false},
          { text: "Galvin Newson", correct: true},
          { text: "Kevin McCarthy", correct: false},
          { text: "Newsom Galvin", correct: false},
      ]
  },
  {
      question: "What is the capital of your state?*",
      answers: [
          { text: "Phoenix", correct: false},
          { text: "Sacramento", correct: true},
          { text: "Austin", correct: false},
          { text: "Albany", correct: false},
      ]
  },
  {
      question: "What are the two major political parties in the United States?",
      answers: [
          { text: "Democratic and Senate ", correct: false},
          { text: "Democratic and Republican ", correct: true},
          { text: "Senate and Republican ", correct: false},
          
      ]
  },
  {
      question: "What is the political party of the President now?",
      answers: [
          { text: "Republican", correct: false},
          { text: "Democractic", correct: true},
          
      ]
  },
  {
      question: "What is the name of the Speaker of the House of Representatives now?",
      answers: [
          { text: "Nancy Pelosi", correct: false},
          { text: "Kevin McCarthy", correct: true},
          { text: "Jim Jordan", correct: false},
          { text: "James McCarthy", correct: false},
      ]
  },
  {
      question: "There are four amendments to the Constitution about who can vote. Describe one of them.",
      answers: [
          { text: "Age of 35", correct: false},
          { text: "A male citizen of any race (can vote).", correct: true},
          { text: "You  have to pay (a poll tax) to vote.", correct: false},
          { text: "age of 19", correct: false},
      ]
  },
  {
      question: "What is one responsibility that is only for United States citizens?*",
      answers: [
          { text: "Re-run in a federal election", correct: false},
          { text: "serve on a Jury", correct: true},
          { text: "serve on  Duty", correct: false},
          { text: " federal election", correct: false},
      ]
  },
  {
      question: "Name one right only for United States citizens.",
      answers: [
          { text: " pay for federal office", correct: false},
          { text: "run for federal office", correct: true},
          { text: " pay in a federal election", correct: false},
          { text: " Re-run federal election", correct: false},
      ]
  },
  {
      question: "What are two rights of everyone living in the United States?",
      answers: [
          { text: "freedom of speech,freedom of religion", correct: false},
          { text: "freedom of religion,freedom to vote", correct: true},
          { text: "Right to bare arms, freedom to  vote", correct: false},
          { text: " Freedom of bare arms, no freedom of press", correct: false},
      ]
  },
  {
      question: "What do we show loyalty to when we say the Pledge of Allegiance?",
      answers: [
          { text: "the dance", correct: false},
          { text: "the flag", correct: true},
          { text: "the Slute", correct: false},
          { text: "the handshake", correct: false},
      ]
  },
  {
      question: "What is one promise you make when you become a United States citizen?",
      answers: [
          { text: "break the laws of the United States", correct: false},
          { text: "defend the Constitution and laws of the United States", correct: true},
          { text: " To not serve in the U.S. military (if needed)", correct: false},
          { text: "be loyal to the United Nation", correct: false},
      ]
  },
  {
      question: "How old do citizens have to be to vote for President?",
      answers: [
          { text: "age (17)", correct: false},
          { text: " age (18) ", correct: true},
          { text: "age (19)", correct: false},
          { text: "age (21)", correct: false},
      ]
  },
  {
      question: "What are two ways that Americans can participate in their democracy?",
      answers: [
          { text: "join a political party, Pay taxes", correct: false},
          { text: "vote, Pay taxes", correct: false},
          { text: "vote, join a political party", correct: true},
          { text: "Pay taxes, own property", correct: false},
      ]
  },
  {
      question: "When is the last day you can send in federal income tax forms? ",
      answers: [
          { text: "April 14", correct: false},
          { text: "April 15", correct: true},
          { text: "April 20", correct: false},
          { text: "April 12", correct: false},
      ]
  },
  {
      question: "When must all men register for the Selective Service?",
      answers: [
          { text: "at age  (17)", correct: false},
          { text: "at age  (18)", correct: true},
          { text: "at age  (15)", correct: false},
          { text: "at age  (16)", correct: false},
      ]
  },
  {
      question: "  What is one reason colonists came to America?",
      answers: [
          { text: "To steal Goods ", correct: false},
          { text: "freedom", correct: true},
          { text: "To visit", correct: false},
          { text: "To raid ", correct: false},
      ]
  },
  {
      question: " Who lived in America before the Europeans arrived? ",
      answers: [
          { text: "Americans", correct: false},
          { text: "Native Americans", correct: true},
          { text: "Indians", correct: false},
          { text: "Hispanic", correct: false},
      ]
  },
  
  {
      question: " What group of people was taken to America and sold as slaves?",
      answers: [
          { text: "Cubans", correct: false},
          { text: "Africans", correct: true},
          { text: "Indians", correct: false},
          { text: "Asians", correct: false},
      ]
  },


  {
      question: " Why did the colonists fight the British?",
      answers: [
          { text: "because the British army burned  their houses ", correct: false},
          { text: "because of high taxes (taxation without representation)", correct: true},
          { text: "because they  have self-government", correct: false},
          { text: "because of low taxes (taxation without representation)", correct: false},
      ]
  },





  {
      question: "Who wrote the Declaration of Independence",
      answers: [
          { text: "(James) Maddison", correct: false},
          { text: "(Thomas) Jefferson", correct: true},
          { text: "(Thomas) Eddison", correct: false},
          { text: "(Alexander) Hamilton", correct: false},
      ]
  },
  {
      question: "When was the Declaration of Independence adopted?",
      answers: [
          { text: "July 5, 1776", correct: false},
          { text: "July 7, 1776", correct: false},
          { text: "July 3, 1776", correct: false},
          { text: "July 4, 1776", correct: true},
      ]
  },
  {
      question: "There were 13 original states. Name three.",
      answers: [
          { text: "Connecticut,New Jersey,California", correct: false},
          { text: "Connecticut,New Hampshire,Delaware", correct: true},
          { text: "Delaware,California,Connecticut", correct: false},
          { text: "Connecticut,New Hampshire,New York", correct: false},
      ]
  },
  {
      question: "What happened at the Constitutional Convention?",
      answers: [
          { text: "The Ten Commendments", correct: false},
          { text: "The Founding Fathers wrote the Constitution.", correct: true},
          { text: "Declaration Of Independence", correct: false},
          { text: "Slavery was outlaw", correct: false},
      ]
  },
  {
      question: "When was the Constitution written?",
      answers: [
          { text: "1782", correct: false},
          { text: "1787", correct: true},
          { text: "1785", correct: false},
          { text: "1784", correct: false},
      ]
  },
  {
      question: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
      answers: [
          { text: "(Earl) Madison", correct: false},
          { text: "(Thomas) Jerfferson", correct: false},
          { text: " (Alexander) Hamilton", correct: true},
          { text: "(Abraham) Lincoln", correct: false},
      ]
  },
  {
      question: "What is one thing Benjamin Franklin is famous for?",
      answers: [
          { text: " youngest of the Constitutional Convention", correct: false},
          { text: "Second Postmaster General of the United States", correct: false},
          { text: "Ended the first free libraries", correct: false},
          { text: "U.S. diplomat", correct: true},
      ]
  },
  {
      question: " Who is the “Father of Our Country”?",
      answers: [
          { text: "(George) Washington", correct: true},
          { text: "Benjamin Franklin", correct: false},
          { text: "Thomass Eddison ", correct: false},
          { text: "Abraham Lincoln", correct: false},
      ]
  },
  {
      question: " Who was the first President?*",
      answers: [
          { text: "Thomas Jerffson", correct: false},
          { text: "(George) Washington", correct: true},
          { text: "Abraham Lincoln", correct: false},
          { text: " Benjamin Franklin", correct: false},
      ]
  },
  {
      question: "What territory did the United States buy from France in 1803?",
      answers: [
          { text: "The Alaska Purchase", correct: false},
          { text: "the Louisiana Territory", correct: true},
          { text: "The Mexican Cession", correct: false},
          { text: "The Gadsden Purchase ", correct: false},
      ]
  },





  {
      question: "Name one war fought by the United States in the 1800s.",
      answers: [
          { text: "The War or 1814", correct: false},
          { text: "Mexican-American War", correct: true},
          { text: "Mexican- War", correct: false},
          { text: "Spanish-War", correct: false},
      ]
  },





  {
      question: "Name the U.S. war between the North and the South. ",
      answers: [
          { text: "The Great War", correct: false},
          { text: "the War between the States", correct: true},
          { text: "The Civil War", correct: false},
          { text: "The cold war", correct: false},
      ]
  },





  {
      question: "Name one problem that led to the Civil War",
      answers: [
          { text: " Starvation", correct: false},
          { text: "slavery", correct: true},
          { text: "The Great Depression", correct: false},
          { text: "Womens right to vote", correct: false},
      ]
  },






  {
      question: "What was one important thing that Abraham Lincoln did?*",
      answers: [
          { text: "Wrote The Declaration Of Independence", correct: false},
          { text: "freed the slaves (Emancipation Proclamation)", correct: true},
          { text: "Lead the United States in War World 1", correct: false},
          { text: "Invented the Telephone", correct: false},
      ]
  },


  {
      question: "What did the Emancipation Proclamation do?",
      answers: [
          { text: "freed slaves in the Confederate Cities", correct: false},
          { text: "freed slaves in the Confederate states", correct: true},
          { text: " freed slaves in the Confederate Conolies", correct: false},
          { text: "Continue Slavery", correct: false},
      ]
  },



  {
      question: "What did Susan B. Anthony do?",
      answers: [
          { text: " fought for women’s rights to enlist in the military", correct: false},
          { text: " fought for women’s rights", correct: true},
          { text: "Became the first women Senator ", correct: false},
          { text: "Became the first women to vote ", correct: false},
      ]
  },






  



  {
      question: "Name one war fought by the United States in the 1900s. ",
      answers: [
          { text: "The battle of 1914", correct: false},
          { text: "Vietnam War", correct: true},
          { text: "  South Korean War", correct: false},
          { text: "Cold war", correct: false},
      ]
  },





  {
      question: "Who was President during World War I?",
      answers: [
          { text: "(Waren) Wilson", correct: false},
          { text: "(Woodrow) Wilson", correct: true},
          { text: "(Franklin) Roosevelt", correct: false},
          { text: "Harry S. Truman", correct: false},
      ]
  },



  {
      question: "Who was President during the Great Depression and World War II? ",
      answers: [
          { text: "(Kermit) Roosevelt", correct: false},
          { text: "(Franklin) Roosevelt", correct: true},
          { text: "(Theodore) Roosevelt", correct: false},
          { text: "(James) Roosevelt", correct: false},
      ]
  },




  {
      question: "Who did the United States fight in World War II?",
      answers: [
          { text: "Japan, Germany, and France", correct: false},
          { text: "Japan, Germany, and Italy", correct: true},
          { text: "Japan, Germany, and China", correct: false},
          { text: "Japan, Germany, and Mexico", correct: false},
      ]
  },


  {
      question: "Before he was President, Eisenhower was a general. What war was he in?",
      answers: [
          { text: "World War I", correct: false},
          { text: "World War II", correct: true},
          { text: "Cold War", correct: false},
          { text: "Pacific War", correct: false},
      ]
  },






  {
      question: " During the Cold War, what was the main concern of the United States?",
      answers: [
          { text: "Liberal Democracy", correct: false},
          { text: "Communism", correct: true},
          { text: "Creating Nato", correct: false},
          { text: "War Bonds ", correct: false},
      ]
  },






  {
      question: " What movement tried to end racial discrimination?",
      answers: [
          { text: "Womens Rights", correct: false},
          { text: "civil rights (movement)", correct: true},
          { text: "Prohibition", correct: false},
          { text: "The Great Awakening Movement", correct: false},
      ]
  },



  {
      question: " What did Martin Luther King, Jr. do?*",
      answers: [
          { text: "Ended Slavery ", correct: false},
          { text: "fought for civil rights", correct: true},
          { text: "First Black President", correct: false},
          { text: " Start a Civil War", correct: false},
      ]
  },





  {
      question: " What major event happened on September 11, 2001, in the United States?",
      answers: [
          { text: "Boston Marrathon", correct: false},
          { text: "Terrorists attacked the United States", correct: true},
          { text: "Hurricane Katrina", correct: false},
          { text: "Boston tea Party", correct: false},
      ]
  },





  {
      question: " Name one American Indian tribe in the United States.",
      answers: [
          { text: "Aztec", correct: false},
          { text: "Seminole", correct: true},
          { text: "Inca", correct: false},
          { text: "MEya", correct: false},
      ]
  },




  {
      question: " Name one of the two longest rivers in the United States.",
      answers: [
          { text: "Colorado (River)", correct: false},
          { text: "Mississippi (River)", correct: true},
          { text: "Columbia (River)", correct: false},
          { text: "Manhanttan (River)", correct: false},
      ]
  },


  {
      question: "What ocean is on the West Coast of the United States?",
      answers: [
          { text: "Indian (Ocean)", correct: false},
          { text: "Pacific (Ocean)", correct: true},
          { text: "Atlantic (Ocean)", correct: false},
          { text: "Artic (Ocean)", correct: false},
      ]
  },


  {
      question: " What ocean is on the East Coast of the United States?",
      answers: [
          { text: "Artic (Ocean)", correct: false},
          { text: "Indain (Ocean)", correct: false},
          { text: "Pacific (Ocean)", correct: false},
          { text: "Atlantic (Ocean)", correct: true},
      ]
  },



  {
      question: "  Name one U.S. territory.",
      answers: [
          { text: "Mexico", correct: false},
          { text: "Puerto Rico", correct: true},
          { text: "Cuba", correct: false},
          { text: "Canada", correct: false},
      ]
  },


  {
      question: " Name one state that borders Canada.",
      answers: [
          { text: "Texas", correct: false},
          { text: "Maine", correct: true},
          { text: "Washington", correct: false},
          { text: "Florida", correct: false},
      ]
  },


  {
      question: " Name one state that borders Mexico.",
      answers: [
          { text: "California", correct: true},
          { text: "New York", correct: false},
          { text: "Florida", correct: false},
          { text: "Maine", correct: false},
      ]
  },


  {
      question: " Where is the Statue of Liberty?**",
      answers: [
          { text: "London", correct: false},
          { text: "Peris france", correct: false},
          { text: "New York", correct: true},
          { text: "Washington DC", correct: false},
      ]
  },


  {
      question: " Why does the flag have 13 stripes?",
      answers: [
          { text: " because there were 12 colonies", correct: false},
          { text: " because the stripes represent the original colonies", correct: true},
          { text: "because the stripes are the original cities", correct: false},
          { text: "because there were 13 original states ", correct: false},
      ]
  },


  {
      question: " Why does the flag have 50 stars?*",
      answers: [
          { text: "Because there are 50 presidents", correct: false},
          { text: "Because there are 50 states", correct: true},
          { text: "Because there are 50 cities", correct: false},
          { text: "Becuase there is one start for each country", correct: false},
      ]
  },


  {
      question: " What is the name of the national anthem?",
      answers: [
          { text: "Stars and stripes", correct: false},
          { text: "The Star-Spangled Banner", correct: true},
          { text: "The Spangled Banner", correct: false},
          { text: "The Flag Anthem", correct: false},
      ]
  },


  {
      question: " When do we celebrate Independence Day?*",
      answers: [
          { text: "July 1", correct: false},
          { text: "July 4", correct: true},
          { text: "July 5", correct: false},
          { text: "July 3", correct: false},
      ]
  },





  {
      question: "Name two national U.S. holidays.",
      answers: [
          { text: "Veterans Day and Thanksgiving ", correct: true},
          { text: "Christmas and Halloween", correct: false},
          { text: "New Years Day and Valentines Day", correct: false},
          { text: "Thanksgiving and Halloween", correct: false},
      ]
  }  
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
      if(answer.correct){
          button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
  });
}


function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
      answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
      selectedBtn.classList.add("correct");
      score++;
  }else{
      selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
      if(button.dataset.correct === "true"){
          button.classList.add("correct");
      }
      button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
      showQuestion();
  }else{
      showScore();
  }
}


nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
      handleNextButton();
  }else{
      startQuiz();
  }
});


startQuiz();