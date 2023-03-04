window.onload = function () {
    //==PROGRESS BAR CODE START==//
    let bar = document.getElementById("progress-bar");
    window.addEventListener("scroll", function () {
        let body = document.body,
            html = document.documentElement;



        /*****************************************************************************************************
         * 
        [1] Borgar, 'How to get height of entire document with JavaScript?' (N/a), 2009. [Code].
          https://stackoverflow.com/questions/1145850/how-to-get-height-of-entire-document-with-javascript
        
                                ==========================================
                                ORIGINAL CODE FROM SOURCE LOOKED LIKE THIS
                                ==========================================
                                
          Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
        
        /*************************************************************************************************** */
        //MY EDITED CODE IS BELOW...


        // Please note that the code was not simply copy pasted, i used its functionality with my own code. The original code only contained the
        // Math.max function with its internal parameters. I incorperated the const keyword, and the subtraction with window.innerHeight.
        // The entire scrollbar idea was learned from the webdev coursera videos, however i had to tinker with it so it would reach the full width of ths creen.

        const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight) - window.innerHeight

        //distance scrolled from 1 - n
        let totalScroll = window.pageYOffset;

        //distance scrolled between 0 - 1 with 1 being the bottom of the page
        totalScroll /= height;
        var totalWidth = document.body.offsetWidth;

        //adding px is vital otherwise it will not work properly
        bar.style.width = totalWidth * totalScroll + 'px';
    })
    //==PROGRESS BAR CODE END==//



    /*****************************************************************************************************
    /*[1] W3SCHOOLS, 'How TO - Clickable Dropdown' (N/a), Date UNKNOWN. [Code].
    https://www.w3schools.com/howto/howto_js_dropdown.asp#:~:text=Example%20Explained,dropdown%20menu%20correctly%20with%20CSS.*
    
    
                            ==========================================
                            ORIGINAL CODE FROM SOURCE LOOKED LIKE THIS
                            ==========================================
    
    
    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content 
    
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    
    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                }
            }
        }
    }
                            ==========================================
                                            MY CODE
                            ==========================================
        const dropdown = choice => document.getElementById("myDropdown").classList.toggle('show', choice);
        window.onclick = event => {event.target.matches('.dropbtn') ? dropdown() : dropdown(false);}
    
                            ==========================================
                                Both do basically the same thing.
                            ==========================================
    /*************************************************************************************************** */




    //==DROPDOWN START==//

    //this function will toggle between showing and hiding the dropdown menu when no parameters are specified.
    //When a boolean is passed, it will stay on the state of the boolean.
    //for example dropdown(false) will simply try and close the menu, it WILL NOT toggle it on and off.
    const dropdown = choice => document.getElementById("myDropdown").classList.toggle('show', choice);

    //for who knows what reason, the {braces} are required here so don't remove them...
    //If the user clicks on the dropdown menu we show it, if they click anywhere else we hide it.
    window.onclick = event => { event.target.matches('.dropbtn') ? dropdown() : dropdown(false); }

    //here we do the same for non mouse users,
    //we allow the dropdown to be tab-able by setting its tabindex to 0
    document.getElementById('dropdown-pic').setAttribute('tabindex', 0)

    //we then log the users keystrokes, when the user clicks enter and the focused element is the dropdown menu, we TOGGLE it
    window.onkeyup = event => {
        if (event.key == 'Enter' && document.activeElement.id == 'dropdown-pic') {
            dropdown();
        }
        else if (!document.activeElement.classList.contains('mobile-nav')) {
            dropdown(false)
        }
    }
    //DROPDOWN END*/

}
/***********************************************************************
 * 
    THAT IS ALL THE CITATIONS I USED IN MY JAVASCRIPT! 
    ALL THE CODE BELOW IS ENTIRELY ORIGINAL!
    Although ES6 was not taught in the webdevelopment course,
    I have been coding in javascript for years and am quite farmiliar 
    with using it. 
    
    My extensive commenting and and explanation of each
    and everything i've coded should be enough to prove that I did not
    simply copy this code online, and infact coded it all from scratch myself.
    
***********************************************************************/

//displays an error page when called (only on books.html, quotes.html, and sctoicism.html)
const uhOh = () =>{
     document.getElementById('uh-oh-page').style.display = 'block';
     document.getElementById('main-container').style.display = 'none';
}
//START PAGE EDITOR
//grab the url
const url = window.location.href


//DO NOT REMOVE
//get the info we need in the search bar after the equals sign.
//if you remove this, almost the entire website wont function properly. 
//this is VITAL for the code DO NOT REMOVE THIS!
const search = window.location.search

//databaseName is the data we obtain after the questions mark in the url
let databaseName;

//if there is indeed parameters in the url, we set databaseName to them
if (search) {
    //note that we use replaceall to switch the parameters that have '-' to '_'
    //we do this because javascript cannot have variables with a dash, therefore we want to replace them and
    //use underscores in our variables
    databaseName = search.substring(search.indexOf('=') + 1).replaceAll('-', '_')
}

// we have this function to seperate between the user clicking on a person or the user clicking
// on the random link at the bottom of the page
const activateQuotePage = option => {
    // This is where we keep all the information regarding each person in the quote page.
    // each person is their own object inside of virtualDatabase.
    // they each have a name a intro, ten quotes, an image, and an alt for their image.
    // this gets injected into the html once the user clicks on a person.
    const virtualDatabase = {
        eric_thomas:
        {
            name: 'Eric Thomas',
            alt: 'Eric Thomas',
            intro: `
                            Eric Thomas is an American motivational speaker, author, consultant and minister.
                            After various arguments with his parents he dropped out of highschool and lived
                            homeless on the streets of detroit for two years. It was then he met a preacher whom
                            inspired him to go back to school and eventually change lives as a motivational speaker.
                        `,
            quotes:
                [
                    `"Are you ready to sacrifice who you are, for what you will become." -Eric Thomas`,
                    `"All roads that lead to success have to pass through hard work Boulevard at some point." -Eric Thomas`,
                    `"No alarm clock needed, my passion wakes me." -Eric Thomas`,
                    `"Some of you love sleep more than you love success. If you want to be successful, you gotta be willing to give up sleep. If you go to sleep, you might miss the opportunity to be successful." -Eric Thomas`,
                    `"At the end of pain is success." -Eric Thomas`,
                    `"I used my pain to push me to greatness." -Eric Thomas`,
                    `"I dare you to be great. I challenge you to be great in every single thing you do." -Eric Thomas`,
                    `"Don't cry to give up, cry to keep going." -Eric Thomas`,
                    `"I dare you to take a little pain. I dare you!" -Eric Thomas`,
                    `"The problem is, you get more excited talking about it, than you do when you actually doing it!" -Eric Thomas`
                ],
            img: 'images/eric-thomas.png'
        },
        dalai_lama:
        {
            name: 'Dalai Lama',
            alt: 'Dalai Lama',
            intro: `
                        His Holiness the 14th Dalai Lama, Tenzin Gyatso, describes himself as a simple
                        Buddhist monk. He was born on 6 July 1935 and is the spiritual leader of Tibet.
                        In 1950, after China's invasion of Tibet, His Holiness was called upon
                        to assume full political power. In 1959, following the terrible suppression
                        of the Tibetan national uprising in Lhasa by Chinese troops, His
                        Holiness was forced to escape into exile. Since then he has been
                        living in Dharamsala, northern India. Although he was forced into exile he miraculously
                        had a positive outlook on it as a whole.
                    `,
            quotes:
                [
                    `"Every day, think as you wake up: Today I am fortunate to be alive, I have a precious human life, I am not going to waste it." -Dalai Lama`,
                    `"Carefully consider, what prevents you from living the way you want to live your life#" -Dalai Lama`,
                    `"The goal is not to be better than the other man, but your previous self." -Dalai Lama`,
                    `"Let us try to recognize the precious nature of each day." -Dalai Lama`,
                    `"As you breathe in, cherish yourself. As you breathe out, cherish all beings." -Dalai Lama`,
                    `"An open heart is an open mind." -Dalai Lama`,
                    `"Happiness is not something ready-made. It comes from your own actions." -Dalai Lama`,
                    `"It is very rare or almost impossible that an event can be negative from all points of view." -Dalai Lama`,
                    `"A disciplined mind leads to happiness, and an undisciplined mind leads to suffering." -Dalai Lama`,
                    `"Be kind whenever possible. It is always possible." -Dalai Lama`
                ],
            img: 'images/dalai-lama.png'
        },
        tony_robbins:
        {
            name: 'Tony Robbins',
            alt: 'Tony Robbins',
            intro: `
                    Tony Robbins is an multi millionare American motivational speaker, author, and father. He has written many great books such as 
                    Awaken The Giant Within, Lifeforce, and Unshakeable. His career started off by selling motivational tapes on television
                    and eventually lead to him creating books, running seminars, making YouTube Videos, as well as a successful Podcast.
                    `,
            quotes:
                [
                    `"The power of positive thinking is the ability to generate a feeling of certainty in yourself when nothing in the environment supports you." -Tony Robbins`,
                    `"If you can't, you must. If you must, you can." -Tony Robbins`,
                    `"Your past does not equal your future." -Tony Robbins`,
                    `"Goals are like magnets. They'll attract the things that make them come true." -Tony Robbins`,
                    `"It's what you practice in private that you'll be rewarded for in public." -Tony Robbins`,
                    `"When you are grateful, fear disappears and abundance appears" -Tony Robbins`,
                    `"The only thing that's keeping you from getting what you want is the story you keep telling yourself." -Tony Robbins`,
                    `"Persistence overshadows even talent as the most valuable resource shaping the quality of life." -Tony Robbins`,
                    `"In life you need either inspiration or desperation." -Tony Robbins`,
                    `"If you talk about it, it's a dream. If you envision it, it's possible. If you schedule it, it's real." -Tony Robbins`,
                ],
            img: 'images/tony-robbins.png'
        },
        aristotle:
        {
            name: 'Aristotle',
            alt: 'Aristotle',
            intro: `
                    Aristotle was an Ancient Greek philosopher. He  who was born in the city of Stagira in Northern Greece.
                    His intellectual range was vast, covering most of the sciences and many of the arts, including biology,
                    botany, chemistry, ethics, ethics, history, logic, metaphysics, rhetoric, philosophy of mind, philosophy
                    of science, physics, poetics, political theory, psychology, and zoology.

                    `,
            quotes:
                [
                    `"Knowing yourself is the beginning of all wisdom." -Aristotle`,
                    `"It is the mark of an educated mind to be able to entertain a thought without accepting it." -Aristotle`,
                    `"Patience is bitter, but its fruit is sweet." -Aristotle`,
                    `"He who has overcome his fears will truly be free." -Aristotle`,
                    `"To perceive is to suffer." -Aristotle`,
                    `"Pleasure in the job puts perfection in the work." -Aristotle`,
                    `"Learning is not child's play; we cannot learn without pain." -Aristotle`,
                    `"It is not enough to win a war; it is more important to organize the peace." -Aristotle`,
                    `"I count him braver who overcomes his desires than him who conquers his enemies, for the hardest victory is over self." -Aristotle`,
                    `"Whosoever is delighted in solitude, is either a wild beast or a god." -Aristotle`
                ],
            img: 'images/aristotle.png'
        },
        thomas_edison:
        {
            name: 'Thomas Edison',
            alt: 'Thomas Edison',
            intro: `
                    Thomas Edison was an American investor and buisnessman. He was born in 1847 and died in 1931.  
                    He developed many devices in fields such as electric power generation, soound recording, motion pictures,
                    and mass generation. These inventions include the phonograph, the motion picture camera, and (what most people know him for)
                    the early versions of the electric lightbulb.
                    `,
            quotes:
                [
                    `"Being busy does not always mean real work. The object of all work is production or accomplishment and to either of these ends there must be forethought, system, planning, intelligence and honest purpose, as well as perspiration." -Thomas Edison`,
                    `"A genius is often merely a talented person who has done all of his or her homework." -Thomas Edison`,
                    `"When I have finally decided that a result is worth getting, I go ahead on it and make trial after trial until it comes." -Thomas Edison`,
                    `"Opportunity is missed by most people because it is dressed in overalls and looks like work." -Thomas Edison`,
                    `"Unfortunately, there seems to be far more opportunity out there than ability…. We should remember that good fortune often happens when opportunity meets with preparation." -Thomas Edison`,
                    `"I'd put my money on the sun and solar energy. What a source of power! I hope we don't have to wait until oil and coal run out before we tackle that. I wish I had more years left." -Thomas Edison`,
                    `"I never did a day's work in my life, it was all fun." -Thomas Edison`,
                    `"The world owes nothing to any man, but every man owes something to the world." -Thomas Edison`,
                    `"It's obvious that we don't know one millionth of one percent about anything." -Thomas Edison`,
                    `"Fools call wise men fools. A wise man never calls any man a fool." -Thomas Edison`
                ],
            img: 'images/thomas-edison.png'
        },
        dr_seuss:
        {
            name: 'Dr.Seuss',
            alt: 'Dr.Seuss',
            intro: `
                    Theodor Seuss Geisel, Born in 1904 and passed away in 1991. He was known as an American children's author and cartoonist.
                    His most well known childrens books include The Cat In The Hat, Green Eggs And Ham, One Fish Two Fish Red Fish Blue Fish and
                    Oh The places you'll go! Although he is a childrens author his books have very deep meaning for anyone, of any age as well.
                    `,
            quotes:
                [
                    `"Today you are You, that is truer than true. There is no one alive who is Youer than You." -Dr.Seuss`,
                    `"You're off to Great Places! Today is your day! Your mountain is waiting, So... get on your way!" -Dr.Seuss`,
                    `"Unless someone like you cares a whole awful lot, Nothing is going to get better. It's not." -Dr.Seuss`,
                    `"Think left and think right and think low and think high. Oh, the thinks you can think up if only you try!" -Dr.Seuss`,
                    `"Don't give up. I believe in you all. A person's a person. No matter how small." -Dr.Seuss`,
                    `"The more that you read, the more things you will know. The more that you learn, the more places you'll go." -Dr.Seuss`,
                    `"So be sure when you step, Step with care and great tact. And remember that life is a great balancing act." -Dr.Seuss`,
                    `"I'm afraid that sometimes you'll play lonely games too. Games you can't win 'cause you'll play against you." -Dr.Seuss`,
                    `"Be who you are and say what you feel because those who mind don't matter and those who matter don't mind." -Dr.Seuss`,
                    `"I know it is wet and the sun is not sunny, but we can have lots of good fun that is funny." -Dr.Seuss`
                ],
            img: 'images/dr-seuss.png'
        },
        winston_churchill:
        {
            name: 'Winston Churchill',
            alt: 'Winston Churchill',
            intro: `
                    Winston Churchill, in full Sir Winston Leonard Spencer Churchill, was born in 1874 and passed away in 1965.
                    He was a British statesman, orator, and author who as prime minister rallied the British people during Would War II.
                    In the war, he led his country from the brink of defeat to victory.
                    `,
            quotes:
                [
                    `"If you are going through hell, keep going." -Winston Churchill`,
                    `"Time and money are largely interchangeable terms." -Winston Churchill`,
                    `"Success is not final, failure is not fatal, it is the courage to continue that counts." -Winston Churchill`,
                    `"To improve is to change, so to be perfect is to change often." -Winston Churchill`,
                    `"The price of greatness is responsibility." -Winston Churchill`,
                    `"The greatest lesson in life is to know that even fools are right sometimes." -Winston Churchill`,
                    `"The farther backward you can look, the farther forward you are likely to see." -Winston Churchill`,
                    `"I never worry about action, but only about inaction." -Winston Churchill`,
                    `"All wisdom is not new wisdom." -Winston Churchill`,
                    `"Attitude is a little thing that makes a big difference." -Winston Churchill`
                ],
            img: 'images/winston-churchill.png'
        },
        plato:
        {
            name: 'Plato',
            alt: 'Plato',
            intro: `
                    Plato, an ancient Greek philosopher who studied under Socrates, was born in 428 BCE and passed away in 348 BCE in Athens Greece.
                    Plato introduced the idea that ones mistakes were due to their not engaging properly with a class of entities he calls forms, chief
                    examples of which were Justice, Beauty, and equality. He's one of the most well known Greek philosophers of all time and had some
                    amazing quotes he shared in his works.
                    `,
            quotes:
                [
                    `"Be kind, for everyone you meet is fighting a harder battle." -Plato`,
                    `"Only the dead have seen the end of war." -Plato`,
                    `"The price good men pay for indifference to public affairs is to be ruled by evil men." -Plato`,
                    `"I am the wisest man alive, for I know one thing, and that is that I know nothing." -Plato`,
                    `"Never discourage anyone...who continually makes progress, no matter how slow." -Plato`,
                    `"Good people do not need laws to tell them to act responsibly, while bad people will find a way around the laws" -Plato`,
                    `"There are two things a person should never be angry at, what they can help, and what they cannot." -Plato`,
                    `"You should not honor men more than truth." -Plato`,
                    `"When men speak ill of thee, live so as nobody may believe them." -Plato`,
                    `"The beginning is the most important part of the work." -Plato`
                ],
            img: 'images/plato.png'
        },
        jocko_willink:
        {
            name: 'Jocko Willink',
            alt: 'Jocko Willink',
            intro: `
                    John Gretton "Jocko" Willink, is an American author, podcaster, and retired navy seal. He's very well known for his book
                    Extreme Ownership. He has written many other great books as well. such as Discipline Equals Freedom, Leadership Strategy And Tactics,
                    and The Dichotomy Of Leadership. He has also made some childrens books including but not limited to Way Of The Warrior Kid, 
                    Mikey And The Dragons, and The Final Spin. 
                    `,
            quotes:
                [
                    `"Discipline equals freedom." -Jocko Willink`,
                    `"Relax. Look around. Make a call." -Jocko Willink`,
                    `"Is this what I want to be? This? Is this all I've got—is this everything I can give? Is this going to be my life? Do I accept that?" -Jocko Willink`,
                    `"Calm but not robotic, logical but not devoid of emotions." -Jocko Willink`,
                    `"If you don't think you are disciplined, it is because you haven't decided to be disciplined. Yet." -Jocko Willink`,
                    `"Live in defiance of the weakness and in rebellion against the decay." -Jocko Willink`,
                    `"The shortcut is a lie." -Jocko Willink`,
                    `"Detach. Whatever problems or stress you are experiencing, detach from them." -Jocko Willink`,
                    `"Your actions are a statement of what you believe." -Jocko Willink`,
                    `"Ego clouds and disrupts everything: the planning process, the ability to take good advice, and the ability to accept constructive criticism." -Jocko Willink`
                ],
            img: 'images/jocko-willink.png'
        },
        socrates:
        {
            name: 'Socrates',
            alt: 'Socrates',
            intro: `Socrates, a Greek philosopher was born in 470 BCE and died in 399 BCE in Athens Greece. He was widely recognized as a controversial figure, often
                    being mocked in plays of comic dramatists. Although there are no books or papers he has written that we have today, much of the information we have about 
                    socrates has come from his many students who wrote about things he said. He's often remembered by the 'Socratic Method', a method in which, rather then giving direct answers
                    to questions, you would answer with a question yourself. It was also very important to never offer direct answers. 
                    One of the most notable things about Socrates is the way in which he died. At age 70, 
                    he was brought to trial on a charge of impiety, and sentenced to death by poisoning. `,
            quotes:
                [
                    `"The unexamined life is not worth living." -Socrates`,
                    `"I cannot teach anybody anything. I can only make them think" -Socrates`,
                    `"There is only one good, knowledge, and one evil, ignorance." -Socrates`,
                    `"Strong minds discuss ideas, average minds discuss events, weak minds discuss people." -Socrates`,
                    `"Wonder is the beginning of wisdom." -Socrates`,
                    `"Education is the kindling of a flame, not the filling of a vessel." -Socrates`,
                    `"To find yourself, think for yourself." -Socrates`,
                    `"Let him who would move the world first move himself." -Socrates`,
                    `"Do not do to others what angers you if done to you by others." -Socrates`,
                    `"Prefer knowledge to wealth, for the one is transitory, the other perpetual." -Socrates`
                ],
            img: 'images/socrates.png'
        },
        marcus_aurelius:
        {
            name: 'Marcus aurelius',
            alt: 'Marcus aurelius',
            intro: `Born in 121 CE and educated extensively in rhetoric and philosophy,
                        Marcus Aurelius succeeded his adoptive father Antoninus Pius as Emperor of
                        Rome in 161 CE and reigned until his own death in 180 Marcus would often
                        journal to himself to help remind him of the virtues he wanted to follow.
                        Marcus used this practice as a way to keep himself in line, and based on
                        how he lived his life it is apparent that he followed through with his
                        virtues. These writings were recovered, interpreted, and turned into the
                        book we know him by, Meditations.`,
            quotes:
                [
                    `"To be like the rock that waves keep crashing over. It stands unmoved and the raging of the sea falls still around it." -Marcus Aurelius`,
                    `"The best revenge is not to be like that." -Marcus Aurelius`,
                    `"Look inward. Don't let the true nature or value of anything elude you." -Marcus Aurelius`,
                    `"You can hold your breathe until your blue, but they'll still go on doing it." -Marcus Aurelius`,
                    `"Stick to what's infront of you-idea, action, utterance." -Marcus Aurelius`,
                    `"To do harm is to do yourself harm. To do an injustice is to do yourself an injustice-it degrades you." -Marcus Aurelius`,
                    `"Leave other people's mistakes where they lie." -Marcus Aurelius`,
                    `"Not to be driven this way and that, but always to behave with justice and see things as they are." -Marcus Aurelius`,
                    `"Blot out your imagination. Turn your desire to stone. Quence your appetites. Keep your mind centered on itself." -Marcus Aurelius`,
                    `"Today I escaped anxiety. Or no, I discarded it, because it was within me, in my own perceptions-not outside." -Marcus Aurelius`,
                ],
            img: 'images/marcus-aurelius.png'
        },
        muhammad_ali:
        {
            alt: 'Muhammad Ali',
            name: 'Muhammad Ali',
            intro: `
                    Muhammad ali, was born in 1942 and passed away in 2016. He was an American professional boxer and activist.
                    Nicknamed 'The Greatest', he is regarded as one of the most significant boxers in all of boxing. He is often ranked to
                    be one of, if not the best, heavyweight boxer of all time. Muhammad Ali was drafted to go to war, but refused to go. 
                    Because of this, he was found guilty of draft evasion and stripped of hix boxing titles. As a result, he didn't box
                    for nearly four years, missing some of his peak performance years as an athlete. 
                    `,
            quotes:
                [
                    `"Don't count the days; make the days count." -Muhammad Ali`,
                    `"A man who has no imagination has no wings." -Muhammad Ali`,
                    `"A man who views the world the same at 50 as he did at 20 has wasted 30 years of his life." -Muhammad Ali`,
                    `"If my mind can conceive it, and my heart can believe it - then I can achieve it." -Muhammad Ali`,
                    `"Often it isn't the mountains ahead that wear you out, it's the little pebble in your shoe." -Muhammad Ali`,
                    `"The best way to make your dreams come true is to wake up." -Muhammad Ali`,
                    `"What you're thinking is what you're becoming." -Muhammad Ali`,
                    `"We can't be brave without fear." -Muhammad Ali`,
                    `"Wisdom is knowing when you can't be wise." -Muhammad Ali`,
                    `"If your dreams don't scare you, they aren't big enough." -Muhammad Ali`
                ],
            img: 'images/muhammad-ali.png'
        }

    }
    // Here we set arrayOfPeople to the names of all the authors that we use as variables in virtualdatabase
    const arrayOfPeople = Object.keys(virtualDatabase);

    // a simple little function to give us a random number between 0 and 'num'
    const random = num => Math.floor(Math.random() * num);

    /*
    this function is called when the user clicks the random button on the random page.
    In short, it gives us 10 random quotes randomly selected from all the people in the virtual database
    We also ensured that no same quotes appears twice on the page at the same time.
     */
    const randomQuotes = () => {

        //each person has ten quotes, therefore totalAllowedQuotes = 10;
        //a higher number wont break the program, but a lower one will reject some quotes
        const totalAllowedQuotes = 10;

        //gather how many people we have in our virtual database
        const totalPeople = arrayOfPeople.length;

        // the quotes we will inject into html later on, its empty at the start here till we 
        // successfully randomize the quotes we need
        let outputQuotes = {};


        //The main point of this long complicated for loop below, is to make sure we NEVER get two of
        //the same quote when the client wants random quotes

        //while we don't have 10 quotes we continue trying to get more quotes
        for (let i = 0; i < 10; i++) {

            // here we get a random name out of the people in the virtual database
            let randomName = arrayOfPeople[random(totalPeople)]

            // we get a random number between 0 and the total allowed quotes.
            // aka we get a num between 0 and 9 
            let randomNumber = random(totalAllowedQuotes)

            //if the person exists in the object 'outputQuotes'
            if (outputQuotes[randomName]) {

                //then we check if the number exists under that person
                if (outputQuotes[randomName].includes(randomNumber)) {
                    //if it reaches this stage, that means we would of had a duplicate quote,
                    //therefore we decrease the counter by one as if we 'skipped' this quote
                    //and redo the loop to try to find a non duplicate quote
                    i--
                }
                //if the number does not exist under that person, this means it will not be a duplicate quote,
                // therefore we push it into outputquotes
                else {
                    outputQuotes[randomName].push(randomNumber)
                }
            } else {
                //if the person does not exist we don't have to worry that we have a quote for them, so we
                //simply create an array for that person, and push the random number into outputQuotes
                outputQuotes[randomName] = []
                outputQuotes[randomName].push(randomNumber)
            }
        }


        /*Below, we simply display all the quotes to the page */

        // first we keep a count so we can use it to set the quotes
        let counter = 0;

        // We iterate through every person in output quotes
        for (person in outputQuotes) {

            //Then, for every number in that persons array, we want to display it on the screen.
            for (quoteNum of outputQuotes[person]) {

                //we gather the first open quote paragraph
                let quoteElement = 'quote-' + counter;

                // and we set its innerhtml to be the quote at the random index we got for that individual
                document.getElementById(quoteElement).innerHTML = virtualDatabase[person].quotes[quoteNum];

                //we then increase the counter, therefore the next quote we fill wont be the same one
                counter++;
            }
        }
    }


    /*
     This function we display all the information we need for the person that was clicked in our html
     this includes their image, a small description, their name, and their ten quotes.
    
    */
    const quote_page = personInDatabase => {

        //here we detect if the page is random, or if its a person. if its random we want to display
        //the randomizer button and periodically flip through all the people in our virtual database
        if (personInDatabase == 'random') {
            //reveal the randomizer button
            document.getElementById("randomizer").style.display = 'block';

            //hide the description container 
            document.getElementById('quote-page-description-container').style.display = 'none';

            //also hide the names 
            document.getElementById('quote-page-name').style.display = 'none';

            //photo changer
            //its asyncrounous to avoid it interupting other javascript stuff
            //only on the random page load do we do this. very important we dont have this function active
            //more then once, its an infinite loop. HANDLE WITH CARE WHEN EDITING
            if (personInDatabase == 'random') {
                //this we use later on to keep track of the last person in the list, therefore not
                //getting the same person twice (this will make more sense a bit later into the code)
                //whats important is it stays outside of photoChanger.
                let oldLastPick;


                /*
                1.) photochanger will make a list in random order of all the people in the virtualdatabase.
                2.) It then displays each persons image in that random order.
                It also will save the last person on the list in oldlastpick (to not have
                the same person twice back to back).
                3.) It then iteratively goes through everyone and every 3 seconds rotates to a new person.
                */
                const photoChanger = async () => {
                    // this is the list we keep the random people in
                    let listOfRandomPeople = []



                    /***************************************************************************************
                    *    Title: How to create an array containing 1 - n
                    *    Author: Niko Ruostsalainen (from StackOverFlow)
                    *    Date: Oct 26, 2015
                    *    Code version: 1.0
                    *    Availability: https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
                    *    Comments: I found this excellent short es6 code to simply create an array from 1 - n, 
                    *    short and simple and uses es6 very effectively. The use of the spread operator here is very shorthand and simple
                    ***************************************************************************************/
                    /*[3] N. Ruostsalainen, 'How to create an array containing 1 - n' (), Date UNKNOWN. [Code].*/
                    //basically makes an array from 1-12 in a fancy small manner
                    let oneToN = [...Array(12).keys(arrayOfPeople.length)];

                    //returns an array with numbers from 0 -> num of people in virtual database
                    //these numbers are random. We do this to show the client all our pictures without risking the client seeing
                    //the same pictures too frequently.
                    const randomOrder = () => {
                        //we slowly boot out numbers from oneToN, therefore our stop condition is when oneToN.length is 0
                        while (oneToN.length > 0) {
                            //we get a random number from 0 to 11 (11 because zero counts as an index, and theres 12 people in our database))
                            let randomPos = random(oneToN.length);

                            //when we finish our first cycle, make sure the next cycle doesn't start with the same picture as
                            //the last picture of the first cycle.
                            if (oneToN[randomPos] == oldLastPick && oneToN.length == arrayOfPeople.length) {
                                continue
                            }
                            //we then push the random number from oneToN into our list of random people.
                            //and remove it from onetoN,
                            //simply put, we randomize the numbers 0 - 11
                            listOfRandomPeople.push(oneToN[randomPos])
                            oneToN.splice(randomPos, 1)

                        }
                    }
                    //we call the function right away since this is the random page
                    randomOrder()


                    //here we set oldlastpick to equal the last item of the current list, 
                    //we do this so the next list will not start with the last item of the previous list
                    oldLastPick  = listOfRandomPeople[listOfRandomPeople.length - 1]

                    //****IMPORTANT****
                    //here we continue the loop until listofrandompeople is empty, we do this because we periodically
                    //remove elements with .shift(), if yoou remove .shift() the loop will be infinite, so be careful
                    while (listOfRandomPeople.length > 0) {

                        // The first number, is our first image. We use it, and discard it. Therefore there need be no counter to break
                        // the loop. Because the discarding will shorten the list to eventually zero, which is when we will remake a new one
                        let person = virtualDatabase[arrayOfPeople[listOfRandomPeople[0]]]

                        //set the image
                        document.getElementById('quote-page-img').setAttribute('src', person.img);

                        //set the alt for the image
                        document.getElementById('quote-page-img').setAttribute('alt', person.alt);

                        //discard the element we just used
                        listOfRandomPeople.shift();

                        //wait three seconds, and continue the loop
                        await new Promise(resolve => setTimeout(resolve, 3000))
                    }
                    //once here, we need a new list, so we call photochanger again, and this repeats INDEFINETELY.
                    //SO BE EXTREMELY CAREFUL CALLING PHOTOCHANGER MORE THEN ONCE CAUSE IT WILL RESULT IN MULTIPLE
                    //INFINITE LOOPS!
                    photoChanger()
                }
                //the initial photochanger call
                photoChanger()
            }
            //the initial randomquotes call, to get our first batch of random quotes
            randomQuotes()
        }
        //if it isnt the random page, simply display the picture, and their quotes...
        else {
            //get the person the virtual database (personindatabase is our cleaned variable we got from the url)
            const person = virtualDatabase[personInDatabase]

            //we shorten the word document to doc
            const doc = document

            //set the persons name
            doc.getElementById('quote-page-name').innerHTML = person.name;

            //set the persons image
            doc.getElementById('quote-page-img').setAttribute('src', person.img)

            //set the persons image alt
            doc.getElementById('quote-page-img').setAttribute('alt', person.alt)

            //set their introductory text
            doc.getElementById('quote-page-intro').innerHTML = person.intro

            //here we get the quotes and display them, we simply iterate through 0 -> the amount of quotes they have
            //and display them on the screen in the appropiate container.
            for (let i = 0; i < person.quotes.length; i++) {
                let quoteElement = 'quote-' + i
                doc.getElementById(quoteElement).innerHTML = person.quotes[i]
            }
        }
    }
    //the initial call in activateQuotePage. if its a person, we simply activate quote_page and display
    //their contents.
    if (option == 'person') {
        quote_page(databaseName)
    } else if (option == 'randomizer') {
        randomQuotes()
    }
}

// we use this to seperate flipping to the next page (in books.html)
// and clicking a book (which leads to books.html?book=...)
const activateBookPage = option => {
    
    // the virtual lbirary that holds all our books as objects and all their data
    const virtualLibrary = {

        //any array in the virtual library gets split into appropriate tags and shoved into the document accordingly.

        make_it_stick: {
            title: 'Make It Stick',
            description: `
                    A how-to guide on how to study more efficiently and effectively. It disproves the most most widely used
                    study method, that method being to read something over and over until you memorize it. It shows how this 
                    creates a false preception that you know the material when you often do not. They then show you various
                    methods to study effectively such as interleaving, retrieval practice, mnemonics and more.
                    `,
            sentence: `The book makes strong, research based arguments, as to why retrieval practice and variation/spacing are better then the common repetition studying.`,
            points: [
                `Retrieval practice is far more effective than repeated repetition`,
                `Space out your subjects to prevent mindless studying`,
                `Three steps to learning: Initial encoding, consolidation, and retrieval`,
                `You often learn far more when the studying is difficult, then when it is easy.`
            ],
            passages: [
                `"Students who have been quizzed have a double advantage over those who have not: a more accurate sense of what they know and don't know, and the strengthening 
                        of learning that accrues from retrieval practice"`

                , `"Interleaving and variation build new connections, expanding and more firmly entrenching knowledge in memory and increasing the number of cues for retrieval."`

                , `"Don't assume that you're doing something wrong if the learning feels hard. Remember that difficulties you can overcome with greater cognitive effort will more
                        than repay you in the depth and durability of your knowledge"`
            ],
            summary: [
                `One big issue about repeated repetition is it soon becomes mindless. Spacing out different areas of study abolish mindless repetition and greatly 
                        enhance your retention of what your studying. Be mindful of how big this interval is between subjects, or sections. It should be just big enough so some forgetting has happened,
                        yet not too big to the point where you forgot everything you previously studied.`,

                `Repetition learning creates a superficial reality in the one studying. It embeds the material into short term memory, which makes the individual believe they have
                        learned the material. This is more often than not, false.  
                        `,
                `Periodically testing yourself by asking yourself questions, using flashcards, doing practice questions can show you more accurately what you do and do not know.
                        This practice of recalling what you've learned helps you retrieve that information later, and also helps to cement the knowledge into your long-term memory.
                        `

            ],
            img: `images/make-it-stick.jpeg`,
            href: `make-it-stick`,
            alt: `The book 'Make It Stick'`
        },

        ego_is_the_enemy: {
            title: 'Ego Is The Enemy',
            description: `Our number one enemy in every stage of our life is our ego. Whether that be pursuing something, achieving it, or failing at it ego is always there to snatch our best opportunities
                    away from us`,
            sentence: `Your ego is always there with you, if you don't control it, then it will destroy your life.`,
            points: [
                `Ego isn't just present when you are working hard towards something. It can actually be the most potent when someone praises something you've done`,
                `Your ego prevents you from constantly learning. Once you climb the mountain it will try and convince you that now you may rest.`,
                `Your ego will try and remind you how hard your working and to relax a bit, if you pursue these impulses it will destroy you.`,
                `When you fail in life your ego will tell you that it is the end of the world. But as long as you keep getting up, dusting yourself off and going forward, nothing will stop you.`
            ],
            passages: [
                `"Reflecting on what went well or how amazing we are doesn't get us anywhere, except maybe to where we are right now. But we want to go further, we want more, we want to continue
                         to improve. Ego blocks that, so we subsume it and smash it with continually higher standards. Not that we are endlessly pursuing more, as if we're racked with greed, but instead,
                          we're inching our way toward real improvement, with discipline rather then disposition"`,

                `"It's during your moment at the top that you can afford ego the least -because the stakes are so much higher, the margins for error are so much smaller. If anything, your ability
                         to listen, to hear feedback, to improve and grow matter more now than ever before."`

                , `"Do you know how you can tell when someone is truly humble? I believe there's one simple test: because they consistently observe and liste, the humble improve. They don't assume, 'I know the way.'" -Wynton Marsalis`
            ],
            summary: [
                `No matter where you are in your life, ego is always there alongside you. Whether you're striving to buy an expensive house, or you already have everything you could ever want, ego is there.
                        Ego is present during all phases of your life. Ryan breaks these phases into the these three segments: aspire (in pursuit of a goal), success (have achieved a goal), failure 
                        (have lost something important, or failed at achieving a goal)`,
                `Ryan shows many cases of how ego has destroyed many lives and how it can just as easily destroy yours as well. To combat this he explains many remedies for each stage ego resides in.
                        Whilst in pursuit of a goal, ensure that you remain a student and do not get cocky. After achieving a goal, don't get complacent, keep working just as hard. If you fail in life, see it how it really is,
                        don't let your ego tell you its the end of the world when it really isn't.`
            ],
            img: `images/ego-is-the-enemy.jpeg`,
            href: `ego-is-the-enemy`,
            alt: `The book 'Ego Is The Enemy'`

        },
        as_a_man_thinketh: {
            title: 'As A Man Thinketh',
            description: `This small philosophical book provides the reader with lots of information for them to ponder and use in their lives. It explains that thoughts are just as -if not more important then- your 
                    actions. Your thoughts can spark good or bad action, can guide you to a better future, or ruin your life. 
                    `,
            sentence: `Your thoughts have a great influence on all aspects of your life, control your thoughts.`,
            points: [
                `Your thoughts aren't just simple thoughts. They influence your actions, which influence the world. Your thoughts are powerful`,
            ],
            passages: [
                `"When a man makes his thoughts pure, he no longer desires impure food"`,

                `"Tempest-tossed souls, wherever ye may be, under whatsoever conditions ye may live, know this -in the oceon of life the isles of Blessedness are smiling, and the sunny shore of your ideal awaits your
                        coming. Keep your hand firmly upon the helm of thought. In the barque of your soul reclines the commanding Master; He does but sleep; wake Him. Self-control is strength; Right Thought is mastery; Calmness
                        is power. Say unto your heart, 'Peace be still!'"`

                , `"They do not know the darkness and the heartaches; they only see the light and joy, and call it 'luck'; do not see the long and arduous journey, but only behold the pleasant goal, and call it 'good fortune';
                        do not understand the process, butonly percieve the result, and call it 'chance'"`
            ],
            summary: [
                `This small philosophical book sparks insight as to how ones thoughts change the world around themselves. With pages full of wisdom this is not a one-and-done kind of book. This book is a book that you
                        should read throughout your life. The main focus of this book is how to cultivate your thoughts to master your life.`,
            ],
            img: `images/as-a-man-thinketh.jpeg`,
            href: `as-a-man-thinketh`,
            alt: `The book 'As A Man Thinketh'`
        },
        awaken_the_giant_within: {
            title: 'Awaken The Giant Within',
            description: `This gigantic book is filled with methods to break bad behaviours financially, emotionally, physically, and mentally. It has various workpages scattered throughout the chapters to guide you on your journey to a better life.
                    These workpages consist of setting goals, breaking bad habits, and changing your beliefs you have in your life about yourself.`,
            sentence: `A massive book with easy to understand and easy to follow information about how to achieve your goals and live a healthy and happy life.`,
            points: [
                `Changing your vocabulary can change how you feel. For example instead of saying i'm furious! You can say i'm a bit erked. This subtle change in language can drastically change how you feel`,
                `Your identity shapes who you are. If you have never smoked and your offered a cigarette, you will say 'no thanks I don't smoke' or 'I am not a smoker'. This is very different then 'I'm trying to quit.
                        Therefore, to change a bad habit, change your identity`,
                `The quality of your questions determines the quality of your answers.`,
                `Questions change what we remember or delete, as well as also changing the resources available to us.`
            ],
            passages: [
                `"You and I have that same power at our disposal every moment of the day. At any moment, the questions that we ask ourselves can shape our perception of who we are, what we're capable of, and what we're willing to do to achieve our dreams."`


                , `"All goal setting must be immediately followed by both the development of a plan, and massive and consistent action toward its fulfillment."`

                , `"While most people have to establish competence before they feel confident, I decide to feel confident, and that provides the sense of certainty to persist until I am competent."`
            ],
            summary: [
                `This gigantic 450+ page book is filled with wisdom and knowledge and is one to refer back to again and again. Tony explains the importance of how you communicate to others and more importantly, how you communicate with yourself.
                        `,
                `He also goes over how we can break free from negative, bad habits and how to cultivate positive, good ones. He explains many methods on how to do this, most notably about using NAC (Neuro-associative conditioning).`,
                `Tony also implamented many challenges in this book which were very helpful in fully digesting all the information he provided. He has challenges to help you shape your ideal identity, to set goals, to break limiting beliefs, and much, much more.`,
            ],
            img: `images/awaken-the-giant-within.jpeg`,
            href: `awaken-the-giant-within`,
            alt: `The book 'Awaken The Giant Within'`

        },
        mans_search_for_meaning: {
            title: 'Mans Search For Meaning',
            description: `Viktor Frankl was a Holocaust survivor. In his book he brings the reader into what it
                    was like every day at the camps. He explains the adversity he had to face, but more importantly,
                    he shows how vitally important it is to have a good frame of mind even when subjected to the worst
                    tragedies this world has to offer.
                    `,
            sentence: `The horrors of Nazi concentration camps, and the power of the human mind to overcome the worst of situations.`,
            points: [
                `You can discover your meaning of life in three ways:`,
                `1.) By creating a work, doing good work and being a good person`,
                `2.) Through love for someone or something`,
                `3.) By accepting the unavoidable suffering of reality`
            ],
            passages: [
                `"Life is like being at the dentist. You always think the worst is still to come, and yet it is over already."`

                , `"Ultimately, man should not ask what the meaning of his life is, but rather he must recognize that it is he
                         who is asked. In a word, each man is questioned by life; and he can only answer to life by answering for his
                          own life; to life he can only respond by being responsible."`

                , `"Live as if you were living already for the second time and as if you had acted the first time as wrongly
                         as you are abou to act now!"`
            ],
            summary: [
                `The intense story of how Viktor Frankl survived Nazi concentration camps was a dark, yet inspiring read. He explains
                        how the people who often passed away the soonest are the ones who gave up the will to live, the ones who lost purpose in
                        their lives.`,
                `The three main points to finding meaning in your life are, to find it in work, to find it in love, or to find it in accepting 
                        unavoidable suffering. He explains that by having this meaning resolved in your life, you can cultivate the strength to keep on going
                        no matter how hard life may be.
                        `,
                `Seeing how difficult Viktor Frankls life was in the concentration camps really puts into perspective how lucky most of us have it. The
                        biggest takeaway from Viktor's book is how important it is to have a strong meaning for your life, and to use this meaning to give you the
                        courage and perseverance to get through anything.`,
            ],
            img: `images/mans-search-for-meaning.jpeg`,
            href: `mans-search-for-meaning`,
            alt: `The book 'Man's Search For Meaning'`

        },
        meditations: {
            title: 'Meditations',
            description: `
                    Marcus Aurelius was a Roman emperer and stoic philosopher. This book was gathered from notes he would write
                    to himself about the philosophy he would like to live by. Translated and passed down through the generations,
                    meditations teaches one how to handle lifes challenges and adversity, as well as how to live by exceptional
                    values.
                    `,
            sentence: `A self-written journal from the Roman emperer Marcus aurelius, packed full of small passages containing philosophy, guidance, and life advice.`,
            points: [
                `No matter whom you are or what you do, it is how you act that matters more than anything.`,
                `Do what is right, be the best person that you can possibly be`,
            ],
            passages: [
                `"If anyone can refute me -show me I'm making a mistake or looking at things from the wrong perspective- I'll gladly change.
                        It's the truth I'm after, and the truth never harmed anyone. What harms us is to persist in self-deceit and ignorance."`

                , `The only rewards of our existence here are an unstained character and unselfish acts.`

                , `It's quite possible to be a good man without anyone realizing it. Remember that.`
            ],
            summary: [
                `This book is entirely filled by small knowledge-full passages that Marcus wrote to himself to keep his mind, actions and soul in line.
                        In reading his journal he taught us that what matters the most in life is to be the best character we can be and to treat
                        others the best we can`,
                `There are never issues or obstacles in life, only opportunities to practice your virtues. One cannot control the outer world 
                        fully, but they may always choose how they will precieve and respond to any situation.`,
            ],
            img: `images/meditations.jpeg`,
            href: `meditations`,
            alt: `The book 'Meditations'`
        },
        atomic_habits: {
            title: 'Atomic Habits',
            description: `
                    A how-to book on breaking bad habits and building positive ones. He provides a step by step
                    formula to help you improve your habits. He also explains that by using small (atomic) habits every
                    day you can change the course of your entire life.
                    `,
            sentence: `A simple, proven, and practical step by step guide on how to break bad habits or build new ones.`,
            points: [
                `There's four steps in creating a good habit. Those four steps are to make it obvious, attractive, easy, and satisfying.`,
                `There's four steps in breaking a bad habit aswell. Those four steps are to make it invisible, unattractive, difficult, and unsatisfying.`,
                ` Small, consistent habits have exponential growth. Improving by 1% each day, over a year timespan, would make you 37 times better than 
                        the day you started.`
            ],
            passages: [
                `"The only way to become excellent is to be endlessly fascinated by doing the same thing over and ove You have to fall in love with boredom."`

                , `"Named after the economist Charles Goodhart, the principle states, 'When a measure becomes a target, it ceases to be a good measure.'
                         Measurement is only useful when it guides you and adds context to a larger picture, not when it consumes you. Each number is simply one
                          piece of feedback in the overall system"`

                , `"If you want to master a habit, thekey is to start with repetition, not perfection. You don't need to map out every feature of a new habit.
                         You just need to practice it."`
            ],
            summary: [
                `The simple formula James made to describe how to make or break habits is simple, efficient and applicable. Every behaviour that becomes a habit
                        follows these four steps: cue, craving, response, reward. Keeping these steps in mind we can see the connection between his formula and how habits
                        are formed. These steps are: make the behaviour obvious (cue), make it attractive (craving), make it easy (response), and make it satisfying reward)
                        The same thing is identical for the inverse as well.`,
                `Habits have many benefits, however if you are trying to form habits in an attempt to master an important skill, they can also make you complacent. If you don't fight
                         the complacency and practice deliberately, your results will eventually plateau. For this reason we must not settle for just mere habits when trying to perform at the
                         elite level. James provided us with a simple and easy formula to represent this: "Habits + Deliberate Practice = Mastery".`,

            ],
            img: `images/atomic-habits.jpeg`,
            href: `atomic-habits`,
            alt: `The book 'Atomic Habits'`
        },
        discipline_equals_freedom: {
            title: 'Discipline Equals Freedom: Field Manual MK1-MOD1 (By Jocko Willink)',
            description: `Most people think that discipline is forcing yourself to do something you don't want to do, and hating every second of it. In this motivational book, Jocko Willink flips that idea on its head.
                    He provides short 2-3 page full descriptions of how to deal with problems such as feeling overwhelmed, self-sabotage, strategic planning, and dozens more.`,
            sentence: `Pages full of motivation and advice to help you stay disciplined under any and all circumstances, and the importance of discipline in achieving freedom and success in life.`,
            points: [
                `Any option not to stay disciplined are all excuses`,
                `Don't give into weakness`,
                `Don't do what makes you happy, do what makes you better`,
                `Nothing matters but the task at hand`,
                `Detach from situations that your overly invested in to get a better perspective`,
                `When dealing with negative people who want the worst for you. Ignore and outperform them.`,
            ],
            passages: [
                `"Thinking alone won't get you anywhere. Simple existence is not being alive. You have to take action. You have to move forward. You have to exert and strive and toil. Thoughts are not enough. TAKE ACTION."`

                , `"Don't worry about motivation. Motivation is fickle. It comes and goes. It is unreliable and when you are counting on motivation to get your goals acomplished you will likely fall short.
                            So. Don't expect to be motivated every day to get out there and make things happen. You won't be. Don't count on motivation. Count on Discipline. You know what you have to do. So: MAKE YOURSELF DO IT.
                            You do that with Discipline."`

                , `"This is where it begins. In the darkness. Before the sun and the birds and the world. Every day. When the alarm sounds. IT IS TIME. Rise. Despite fatigue and soreness. Curse the warmth of the bed.
                         Curse the comfort of the pillow. Fight the temptation of weakness. Get up and go. Do it quickly, without thought. Do not reason with weakness. You cannot. You must only take action. Get up and GO"`
            ],
            summary: [
                `Discipline is the only way to live a great life. Without discipline everything faulters, but with discipline you continue to get better then you were the day before. Happiness is an emotion that comes and goes
                        it never stays as long as you wish, but bettering yourself every day can be a reality. It all starts with one step, and thats to take action.`,
                `This isn't a book you want to read in one sitting and forget about. It's a book flooded with motivation and advice for dealing with the weakness that pulls you away from being better then you were the day before.`,
                `For any challenge in your life, for any weakness in your character, this book will bring your feet on the ground and have you sprinting towards your problems head first.`,
            ],
            img: `images/discipline-equals-freedom.jpeg`,
            href: `discipline-equals-freedom`,
            alt: `The book 'Discipline Equals Freedom'`
        },
        eight_rules_of_love: {
            title: '8 Rules Of Love (By Jay Shetty)',
            description: `How to find love, how to keep it, and how to let it go. Jay provides us with practical tools for first loving ourselves, then to loving another, and finally to loving everyone around us.
                    There is many practical exercises to follow, including but not limited to: how to live in solitude, various meditations on love towards yourself and others, and how to find what love means to you.`,
            sentence: `A practical how-to book on cultivating love towards yourself, loved ones, and finally, everyone.`,
            points: [
                `You must love yourself, in solitude, before you search for a relationship.`,
                `Once you love yourself in solitude you can look to spread that love to another individual.`,
                `After you've found a relationship and have cultivated love there, you can then sprpead it to the rest of the world!`
            ],
            passages: [
                `" 'What is the difference between like and love?' asks a student. The teacher responds, 'When you like a flower, you pluck it. When you love a flower, you water it daily' "`

                , `"We're just focusing too much on what our parents should have done or wishing they'd behaved differently rather than figuring out what we ourselves can do."`

                , `"As soon as we say 'I love you,' we're going to have to live up to those words, not by our definition, but by the definition of the person we love. On the flip side,
                         when we accept someone else's love, we have to realize that they aren't using our definition of love."`
            ],
            summary: [
                `The eight rules for love are... Rule 1: Let yourself be alone. Rule 2: Don't ignore your karma. Rule 3: Define love before you think it, feel it, or say it. Rule 4: Your partner is your guru.
                        Rule 5: Purpose comes first. Rule 6: Win or lose together. Rule 7: You don't break in a breakup. Rule 8: Love again and again.`,
                `With various meditations, reflections, and other exercises, 8 rules of love helps you cultivate love for yourself and others. It also teaches you that it is okay to be without another person,
                        and to instead enjoy your own company`,
                `Jay explains the importance of loving yourself before you cultivate it with another, and that if you do not love yourself then you cannot extend that love to another person. He uses his wisdom from
                        being a monk and studying the Bhagavad Gita and applies it to how you, in todays society, can love.`,
            ],
            img: `images/eight-rules-of-love.jpeg`,
            href: `eight-rules-of-love`,
            alt: `The book '8 Rules Of Love'`
        },
        beyond_order: {
            title: 'Beyond Order (By Jordan Petersen)',
            description: `The second book of the two part series, with the first one being '12 rules for life - an antidote to chaos'. This book is the opposing counterpart of the first book, as it
                    shows that you do not just need order, and rules but also creativity and things you should ensure you do not do.`,
            sentence: `Philosophy on how to improve yourself and the world around you, but starting with yourself first.`,
            points: [
                `Rule I: Do not carelessly denigrate social institutions or creative achievement`,
                `Rule II: Imagine who you could be, and then aim single-mindedly at that`,
                `Rule III: Do not hide unwanted things in the fog `,
                `Rule IV: Notice that opportunity lurks where responsibility has been abdicated`,
                `Rule V: Do not do what you hate`,
                `Rule VI: Abandon ideology`,
                `Rule VII: Work as hard as you possibly can on at least one thing and see what happens`,
                `Rule VIII: Try to make one room in your home as beautiful as possible`,
                `Rule IX If old memories still upset you, write them down carefully and completely`,
                `Rule X: Plan and work diligently to maintain the romance in your relationship`,
                `Rule XI: Do not allow yourself to become resentful, deceitful, or arrogant`,
                `Rule XII Be grateful in spite of your suffering`,
            ],
            passages: [
                `"Every rule was once a creative act, breaking other rules. Every creative act, genuine in its creativity, is likely to transform itself, with time, into a useful rule. 
                        It is the living interaction between social institutions and creative achievement that keeps the world balanced on the narrow line between too much order and too much chaos"`

                , `"Failing to look under the bed when you strongly suspect a monster is lurking there is not an advisable strategy."`

                , `"If you are suffering from memories that will not stoop tormenting you, there is possibility -possibility that could be your very salvation- waiting there to be discovered. 
                        If old memories still upset you, write them down carefully and completely."`
            ],
            summary: [
                `Jordan provides insight into why doing ethically sound actions is not just in benefit of others around you and the world itself, but also for your own wellbeing. He dives into
                        every rule expansively and in great depths explaining stories for why you should act in the manner he suggests.`,
                `He gives us these rules to help us create more order in the chaos of life. When excess order exists, it is important that there is some chaos as well. Chaos is not a bad thing, just as 
                        order is not a bad thing either. They must both be balanced like two ends of a see-saw, Like yin and yang.`,
            ],
            img: `images/beyond-order.jpeg`,
            href: `beyond-order`,
            alt: `The book 'Beyond Order'`
        },
        how_to_read_a_book: {
            title: 'How To Read A Book (By Mortimer J. Adler and Charled Van Doren)',
            description: `A somewhat paradoxical book on how to read books (mostly non-fiction). There are various layers of reading, which one progresses through. Most people stay on the first or second layer for the rest of their
                    life. This book tries to push readers to improve, to seek out difficult books, to read actively, to interact with the author through the pages, to ask questions, and ultimately to learn as much as you
                    can from every book you read. `,
            sentence: `sentence summary goes here`,
            points: [
                `Reading is not a passive effort, it is a conversation between the reader and the author.`,
                `Highlight, fold pages, write in the margin, ask questions, be an active learner!`,
                `Inspect all aspects of the book, the title, the table of contents, the dust shield, break down the chapters into paragraphs, and into main sentences etc`,
                `Analyze the elements, what was the authors question he was trying to answer? Did he answer it? If so, and with backed up arguements you must say you agree with him.
                         If not you must figure out why he has not, and back it up with reasons`,
                `You can pin authors with different views from different books against one another if you remain objective. Ask both of them a question that their book answers, which side has the strongest arguements?
                          and why? This is also known as syntopical reading.`,

            ],
            passages: [
                `"To make knowledge practical we must convert it into rules of operation. We must pass from knowing what is the case to knowing what to do about it if we wish to get somewhere. This can be summarized in the
                         distinction between knowing THAT and knowing HOW. Theoretical books teach you THAT something is the case. Practical books teach you HOW to do something you want to do or think you should do."`

                , `"the most important words are those that give you trouble. It is likely that these words are important for the author as well. However they may not be. It is also possible that words that are important
                         for the author do not bother you, and precisely because you understand them."`

                , `"If you never ask yourself any questions about the meaning of a passage, you cannot expect the book to give you any insight you do not already possess."`
            ],
            summary: [
                `To read any expository book well you must ask questions, highlight, write in the margin, be as active as you can in your reading. There are four levels to reading, elementary, inspectional, analytical and syntopical.
                        Each level of reading builds upon the previous level, using all that you have learned from it previously. `,
                `Elementary reading is the reading you learn how to do in, well elementary school. How to understand letters, form them into words, form those words into sentences, and those into paragraphs. It's main concern is being able to 
                        read at all.`,
                `Inspectional reading requires you to be more active in your approach. Examine the title, the table of contents, the dust cover, skin the general book quickly, only reading bits here and there, whatever seems important. Get a 
                        general feeling of how the book is and if its a book you would like to continue reading. Some books are best read in this quick manner, whilst others -like philosophy- require very active deliberate, slow reading. `,
                `Analytical reading is using your inspectional reading to try and break down the chapters into main paragraphs, and then into main sentences. Analyze what the authors questions were before he wrote the book, was it how to read a book better?
                        Was it, how to deal with lifes adversities through meditation? Whatever it is try to find it through breaking down and analyzing the books contents in this manner`,
                `The last level is syntopical reading. Most of the time you will not preform this level as it is a completely different form of reading all together. In this step of reading you start with a question. For example, is money good or bad for society?
                        You then make a big reading list of all the books that may answer this question and narrow it down to the important ones. Then you try to find the parts of the books that are relevant to the question your asking, 
                        and hopefully the authors views conflict. It is important to stay objective and let the resolution come out naturally. This can bring new understanding to old concepts, but it is a very difficult level of reading.`
            ],
            img: `images/how-to-read-a-book.jpeg`,
            href: `how-to-read-a-book`,
            alt: `The book 'How To Read A Book'`
        },
        the_obstacle_is_the_way: {
            title: 'The Obstacle is The Way',
            description: `
                    A guide to life that reveals with stories, quotes, stoic philosophy and logic that every obstacle is an
                    opportunity to improve yourself as a person.
                    `,
            sentence: `
                     Obstacles are not something to be feared or avoided, rather, they are something to be accepted as reality and used to better yourself,
                     and your life.
                    `,
            points: [
                `Preception: How you view the world and situations in life determines how you feel about them.`,
                `Action: Percieving the world well is not enough. How you act in this world will be remembered far greater than anything else.`,
                `Will: Have the will and strength to be strong no matter how bad life becomes. Have the will to prevail and make the most of life's many obstacles.`
            ],
            passages: [
                `"The obstacle in the path becomes the path. Never forget, within every obstacle
                        is an opportunity to improve our condition"`

                , `"If you think it's simply enough to take advantage of the opportunities that arise in your life, you will
                        fall short of greatness. Anyone sentient can do that. What you must do is learn how to press forward precisely
                         when everyone around you sees disaster"
                        `

                , `"Everything we do matters -whether it's making smoothies while you save up money or studying for the bar- even
                         after you already achieved the success you sought. Everything is a chance to do and be your best."`
            ],
            //EACH ARRAY ELEMENT IS A PARAGRAPH AND WILL GET SPLIT LATER ON IN THE CODE INTO THAT.
            summary: [
                `Every obstacle you face in life is an opportunity to practice your values and to be a better person. You fail a test?
                        Thats a great opportunity to practice organization and reflection for next time. Someone is upseting you? Practice 
                        Your patience and your kindness. When life hits you with many challenges it's important that we don't get`,

                `What you do in life doesn't matter as much as how you do it. Doing any responsibility or job like it is the most important
                        job in the world, not only gets the job done well, but also does your part in the giant world.`,

                `An amazing statement that was left in the book that i feel summarizes this book in its entirety is this: "An artist is given
                        many different canvases and commisions in their lifetime, and what matters is that they treat each one as a priority. Whether
                        it's the most glamorous or highest paying is irrelevant. Each project matters, and the only degrading part is giving less than
                        one is capable of giving. Same goes for us. We will be and do many things in our lives. Some are prestigous, some are onerous,
                        none are beneath us. To whatever we face, our job is to respond with: hard work, honesty, and helping others as best we can "`

            ],
            img: `images/the-obstacle-is-the-way.jpeg`,
            href: `the-obstacle-is-the-way`,
            alt: `The book 'The Obstacle Is The Way'`
        },
        stillness_is_the_key: {
            title: 'Stillness Is The Key',
            description: `
                    Life is more enjoyable when you slow down in and enjoy it, rather then rush
                    mindlessly through it. He provides fearful examples of what can happen if you don't take
                    time to be still, as well as excellent examples of how great life can be when you do.
                    `,
            sentence: `Enjoy your life as it is right now in this momment, and be still, patient, kind, grateful, loving, and mindful.`,
            points: [
                `Mind: Mastering your mind is the first step in achieving stillness in your life. Always look within yourself when life is difficult.`,
                `Spirit: Practice gratitude and appreciation for the world around us. Your values should lead your path in life.`,
                `Body: With mental focus you can overcome the hardest of physical tasks. The reverse is also true, doing tough physical activities can help you achieve calmness in your mind.`
            ],
            passages: [
                `"Chop wood, carry water. Chop wood, carry water. Chop wood, carry water. Don't overanalyze. Do the work. Don't think. Hit."`

                , `"That space between your ears -that's yours. You don't just have to control what gets in, you also have to control what goes on in there.
                        You have to protect it from yourself, from your own thoughts."`

                , `"You can't run away from your choices -you can only fix them with better choices"`
            ],
            summary: [
                `You can own anything and everything in this world, but if you not pleasent in your own mind, you will never have enough. One can be
                        happy with no material posessions if they have the correct frame of mind.Without stillness you cannot enjoy life as a whole. You will
                        always serach for more and more, and will never feel happy.`,
                `Know where your limits lie and know when you need to rest. Listen to your body, carefully examine your thoughts, and keep striving for
                        being the best person you can be every day your alive. When life gives you lemons, theres no rush to make lemonade, you can just enjoy the
                        lemons as they are and appreciate you have them.  `,
                `The body, mind, and soul are all interlocked together. If the body is restless, you can tame it with a quiet patient mind. If the mind is racing
                        sit quietly in meditation, let the thoughts race with your body sitting still. If your spirit has been broken by a situation, exercise, meditate, 
                        find yourself again.`,
            ],
            img: `images/stillness-is-the-key.jpeg`,
            href: `stillness-is-the-key`,
            alt: `The book 'Stillness Is The Key'`
        },

        you_owe_you: {
            title: 'You Owe You (By Eric Thomas)',
            description: `A book about how to find your purpose, your drive, your passion, and how to stay driven and motivated through life's adversities. Through Eric's life he reveals to readers that no matter how bad your past may be, 
                    you can always achieve great success in your future. Filled with motivational quotes, and inpsiring information, this book is excellent for those interested in pursuing a better life`,
            sentence: `How to find your drive, your purpose, your WHY, and to never give up in pursuit of it.`,
            points: [
                `Use your superpower to walk in your purpose`,
                `Become the CEO of your life`,
                `pointTransform yourself into a buisness`
            ],
            passages: [
                `"You cannot afford to live in potential for the rest of your life; at some point, you have to unleash the potential and make your move."`

                , `"Pain produces things that complacency can't"`

                , `"Practice doesn't make perfect. Practice makes permanence"`
            ],
            summary: [
                `No matter where you are in your life it is your responsibility to take control of it and make it the best it can be. You aren't doing it for a medal or an award your doing it because You Owe You.
                        Eric provides amazing motivation and inspiration for his readers by taking them on a journey of his life. From being homesless for two years, to dealing with tragedies, to having a rough start early in life,
                        he shows by example that anything is possible if you take responsibility of your life.`,
            ],
            img: `images/you-owe-you.jpeg`,
            href: `you-owe-you`,
            alt: `The book 'You Owe You'`
        },
        study_less_study_smart: {
            title: 'Study Less, Study Smart (By Marty Lobdell)',
            description: `This 34 page book, although small provides readers with some useful tips for how to study more effectively. The author also has some excellent videos online to complement this small reading.`,
            sentence: `A small book on tools to study better.`,
            points: [
                `Figuring out how long you can study effectively`,
                `Reinforce your study habits`,
                `Create or use a study area`,
                `Learning mindfulness to help with studying`,
                `Mnemonics greatly enhances recall`,
            ],
            passages: [
                `"When you feel you are not learning effectively, take a break and reinforce your prior studying behaviour. To continue trying to study, if you are not learning efficiently, 
                        actually punishes your attempt to study. You feel bored, listless and discouraged which makes you less likely to want to study in the future."`

                , `"When you are about to read learning material, you should first, SURVEY, then QUESTION, then READ, RECORD, RECITE, REVIEW" (SQ4R)`

                , `"What are mnemonics? Mnemonics devices are gimmicks that facilitate the memorization of facts. There are three main types of mnemonic devices that I find useful for academic learning: acronyms (coined words);
                         acrostics (coined phrases) and interacting images"`
            ],
            summary: [
                `Study smart, and you don't have to work as long. These tips, if followed and used help one study effectively and efficiently.`,


            ],
            img: `images/study-less-study-smart.jpeg`,
            href: `study-less-study-smart`,
            alt: `The book 'Study Less, Study Smart'`
        },
        self_parenting: {
            title: 'Self Parenting (By John K. Pollard, III)',
            description: `Everyone was once a child and many of us have experienced unfortunate experiences growing up. Maybe our mom didn't show us love, maybe our dad was never home, whatever the case
                    the problems in our childhood don't disapear when we are adults. They come with us. This book is a practical guide/workbook on how to nurture the child that was not nurtured during your childhood.`,
            sentence: `A quick guide on how to speak with the "Inner Child" inside of you and heal from your past truamas.`,
            points: [
                `Your emotional, non-rational side is your Inner Child. Your Inner Child expresses your emotions, your memories, your Inner Child provides your joy. `,
                `Your rational, logical, responsible side is your Inner Parent. Your Inner Parent doesn't express emotions, it expresses logic and can comfort your Inner Child`,
                'Just because you were not treated right as a child, does not mean you cannot treat that child well now.'
            ],
            passages: [
                `"IF you are feeling emotionally sad, hurt, angry, or upset, it is really the Inner Child that is feeling this way. If you, as an Inner Parent,
                         are not considerate of the feelings of your Inner Child, after a while your Inner Child will become numb to its feelings."`

                , `"Every emotional/mental problem you have in life takes place initially as a conflict within your Inner Conversations"`

                , `"Outer conflicts you have had with 'significant others' such as your parents, grandparents, or other role models are now being repeated inside your mind as Inner Conflicts"`
            ],
            summary: [
                `This guidebook teaches you how to speak with your Inner Child every day. It builds a foundational practice for thirty minutes a day where you speak with your Inner Child on a peace of paper.`,
                `When you open the frige and ask to yourself 'what am i going to eat', who are you speaking to? The person who asked the question was your Inner Parent, whilst the response was your Inner Child.
                        your Inner Parent often sounds like how your parents spoke to you. Is your Inner Parent kind or mean? Regardless of how they are now, this book provides a guide to creating a happy relationship with your inner
                        child, and how to be a better Inner Parent`,
            ],
            img: `images/self-parenting.jpeg`,
            href: `self-parenting`,
            alt: `The book 'Self Parenting'`
        },

    }
    //if the clicked a book this should get activated
    if (option == 'load-book') {
        // here we get the appropiate book object
        const book = virtualLibrary[databaseName];

        //here we check if the book actually exists, if it doesnt we give an error 
        //the uh oh function displays the uhoh page and hides the main content for this one
        if(!book){
            uhOh();
        }

        // here we make an array of all the book data we have to change (other then the alt, img and href)
        const elements_to_change = ['title', 'description', 'sentence', 'points', 'passages', 'summary']
    
        //we then iterate through all of them, changing them one at a time
        for (item of elements_to_change) {
            //if we are on points, this should activate
            if (item == 'points') {

                //here we keep track of the amount of points we have already shoved into the html
                let i = 0;

                //whilst there are points left in the books points array we keep shoving them into the
                //book-page-points container, and increase out counter.
                //in other words a book can have 'n' amount of points, and this loop will still manage.
                while (i < book['points'].length) {

                    // we create a list item element
                    const li = document.createElement("li");

                    //we then create a textnode for the point located at the i index
                    const info = document.createTextNode(book['points'][i])

                    //we then append the info between the list item tag
                    li.appendChild(info);

                    //and then append that list item tag under the book-page-points container
                    document.getElementById('book-page-points').appendChild(li);

                    //and increase our counter. this continues till we've appended all points
                    i++
                }
                //if we are on passages this should activate
            } else if (item == 'passages') {
                //each item only has three passages, therefore we can hardcode 3 into our for loop.
                for (let i = 0; i < 3; i++) {
                    //we simply set the class at the current index to the passage at the corresponding index of the book
                    document.getElementsByClassName('book-page-passages')[i].innerHTML = book[item][i]
                }

                //if we are on the summary.
            } else if (item == 'summary') {
                
                //we set our counter to zero(this keeps track of when to finish)
                let i = 0;

                //we keep going till i is no longer less then the amount of elements in the books summary array
                //note, the summary array is full of elements which are basically paragraphs. each book can have 'n'
                //paragraphs in their summary array, therefore this while look will continue indefinetely until it has
                //chomped through all the summary elements and shoved them onto the screen
                while (i < book['summary'].length) {

                    //create a p element
                    const p = document.createElement('p');

                    //get the corresponding summary information from index 'i' in books
                    const info = document.createTextNode(book[item][i])

                    //append it into the p tag
                    p.append(info);

                    //and append that p tag under the book-page-summary container
                    document.getElementById('book-page-summary').appendChild(p)

                    //and increase the counter! We do this till all of them are pushed onto the screen
                    i++
                }
            } else {
                //if its not points, or summary, or passages that means its either title, description or sentence.
                //therefore we simply just set the innerhtml of that item to the corresponding id.

                //an example would be document.getElementById('book-page-title).innerHTML = book[title],
                //and it does this for the title, description, and sentence.

                document.getElementById(`book-page-${item}`).innerHTML = book[item];
            }
        }

        //we then set the book image
        document.getElementById("book-page-img").setAttribute('src', book.img);

        //and the book image alt
        document.getElementById("book-page-img").setAttribute('alt', book.alt);




        //if the client clicked next page, then we activate this option.
    } else if (option == 'next-page') {
             //if it is top_5_books, we want to load those top 5 books, and remove the numbers at the bottom of the screen
             //this gets activated by clicking the top5 books on the news page
             if (databaseName == 'top_5_books') {

                //hide the numbers at the bottom of the screen
                document.getElementById('next-page-menu').style.display = 'none';
    
                //the book we are currentlyon
                let currentBook;
                //these are our top 5 book names, make sure they correspond with the propper key from the virtual library if you decide to change them
                //simply changing these names to match the name you want in virtual library will actually work to change the best5book page simply.
                let top_5_book_names = ['the_obstacle_is_the_way', 'stillness_is_the_key', 'mans_search_for_meaning', 'meditations', 'atomic_habits']
                //note, we must use < 5 here since we can only show 5 books. We use this instead of a "for of" loop, as it is easier to code and read in this case
                for (let i = 0; i < 5; i++) {
                    //current book we are dumping into the html
                    currentBook = virtualLibrary[top_5_book_names[i]];

                    //set its title, the ${i+1}. simply just adds the number of the book in ranking from 1 - 5
                    document.getElementById(`book-${i}-title`).innerHTML = `${i + 1}. ${currentBook.title}`

                    //set its description
                    document.getElementById(`book-${i}-description`).innerHTML = currentBook.description;

                    //set its image
                    document.getElementById(`book-${i}-img`).setAttribute('src', currentBook.img)

                    //set the images alt
                    document.getElementById(`book-${i}-img`).setAttribute('alt', currentBook.alt)

                    //link the image and the header to the appropiate location (therefore when the book is clicked it links to the
                    //propper location
                    document.getElementsByClassName(`book-${i}-link`)[0].setAttribute('href', `books.html?book=${currentBook.href}`)
                    document.getElementsByClassName(`book-${i}-link`)[1].setAttribute('href', `books.html?book=${currentBook.href}`)
                }
    
            }
    
            //if its not top_5_books, then we want to highlight the propper page number at the bottom, and load the books assosiated with that page number
            else {
                //a list of all the book titles in an array
                const booksTitlesArray = Object.keys(virtualLibrary);

                //the max amount of pages that should be functional. since each page holds up to five books,
                //then if there are 16 books, we would need 4 pages to display all the books...
                let maxPages = Math.ceil(booksTitlesArray.length / 5)
    
                /*
                if there is a databaseName, this means the user clicked next page, or
                they typed in the url a non existent page. so we filter this here.
                We check if the page number is between 0 and the max pages, if so then we continue on
                if not we give the uhOh error!
                 */

                /**if there is no databasename, the must be books.html, and can swiftly skip the if statement.*/

                if(databaseName){
                    if(!(databaseName > 0 && databaseName <= maxPages))
                    {
                        uhOh()
                    }
                }
    
    
                //we use or 1, if the user has not clicked a link yet, to default to highlighting the number one
                let pageNum = parseInt(databaseName || 1)

                //we highlight the correct circle corresponding to the pagenum
                let circle = document.getElementById(`books-page-${pageNum}`)

                //we set our number variable (which is the first child of the circle element)
                let number = circle.children[1];

                //we set the circles background color 
                circle.style.background = '#1f1f19';

                //and the numbers color as well
                number.style.color = `white`;
    
                //since each page shows 5 books, we want page 1 to start at element 0, if its page 2 we want it to start
                //at element 5. we do this because the for loop below will simply grab five books ascending from the number
                //that this is. (example, if startAt = 7, the for loop would iterate and show books 7, 8, 9, 10, and 11)
                const startAt = (pageNum - 1) * 5 
                
                //the current book we're on
                let currentBook;

                //we can hardcode 5 books as we only show 5 books a page, and that is hard coded in the html.
                for (let i = 0; i < 5; i++) {

                    //here we add 'startAt' to make sure if its another page, we don't retrive the same books
                    //in other words, we add 5 for every page, so page 2 starts at book 5, page 3, book 10, and so on
                    currentBook = virtualLibrary[booksTitlesArray[i + startAt]];

                    //if there isnt a book, this means we reached the end of our virtual library and we should stop trying
                    //to set books
                    if (!currentBook) {
                        break
                    };

                    //set the books title
                    document.getElementById(`book-${i}-title`).innerHTML = currentBook.title

                    //set the books description
                    document.getElementById(`book-${i}-description`).innerHTML = currentBook.description

                    //set the books img
                    document.getElementById(`book-${i}-img`).setAttribute('src', currentBook.img)

                    //set the book imgs alt
                    document.getElementById(`book-${i}-img`).setAttribute('alt', currentBook.alt)

                    //set the link for the header and the image itself so that once you click on it it leads you to the correct
                    //destination
                    document.getElementsByClassName(`book-${i}-link`)[0].setAttribute('href', `books.html?book=${currentBook.href}`)
                    document.getElementsByClassName(`book-${i}-link`)[1].setAttribute('href', `books.html?book=${currentBook.href}`)
                }
    
            }
    
    
    }
}

//our meditation activation function. Technically we don't need this outer function, but we have it here for
//if we add more pages to the meditation page in the future for example (like the book.html page)
const activateMeditationPage = () => {

    //our meditations articles virtual database, just alike the rest.
    const meditationsArticles = {
        what_is_meditation: {
            title: `What Is Meditation?`,
            img: 'images/meditation.jpg',
            alt: 'A man meditating with stars behind him',
            titleinfo: `
                    Learn about what meditation is, the benefits of meditation, and some of the many different forms of meditation.
                    `,
            header0: `Definition`,
            info0: [
                `
                        Meditation put simply, is using ones attention on a given object of focus (for example your breath) to train attention and awareness.
                        `
            ],
            header1: `Why should I meditate?`,
            info1: [
                `
                        Meditation has many benefits which include, but aren't limited to: reduced stress, controls anxiety, promotes emotional health, greatly enhances
                        self awareness, increases attention span, can help fight addiction, improves sleep, helps control pain, and you can do it anywhere
                        `
            ],
            header2: `Different types of meditation`,
            info2: [
                `
                        There are many different types of meditation. The five types we will discuss will be mantra meditation, mindfulness meditation, movement meditation,
                         loving kindness meditation, and visualization meditation.
                        `,
                `
                        1.) Mantra meditation. In performing Mantra meditation, the object of focus for producing a relaxation response is a repeated word or phrase
                        called a mantra. You may choose any word for your mantra, and your only task is to repeat the mantra either verbally or nonverbally in your
                        mind. The purpose of this is to set your attention on repeating this word or phrase and when your mind wanders you gently return it back to
                        your mantra.
                        `,
                `
                        2.) Mindfulness Meditation.
                        In mindful meditation you pay attention to your thoughts as they pass through your mind. You don't judge your thoughts or become involved with
                        them you just simply ovserve them. Often when doing mindful meditation you have a singular focus which can be the breathe, the feeling of your
                        body touching the surface underneath you, or any other bodily sensation.
                        This practice combines awareness and concentration. As you steadily observe your object of focus your mind may wander or you may have a bodily
                        sensation or feeling, simply note it and return back to your object of focus.
                        `,
                `
                        3.) Movement meditation.
                        Most people think movement meditation is exclusively yoga, however this is not the case. There are many forms of movement meditation such as: walking tai chi, yoga, gardening, qi gong, any other gentle forms of movement.
                        The focus of movement meditation is to be focused on whatever movement or task you are doing with as much attention as possible. If your mind wanders you gently bring it back to the task at hand.
                        `,
                `
                        4.) Loving kindness meditation.
                        This form of meditation is used to strengthen feelings of compassion, acceptance and kindness toward oneself and others. Usually this meditation involves thinking about loved ones, friends, acquaintances and all living beings
                         and sending them well wishes. This meditation is ideal if you hold feelings of anger or resentment that you want to overcome.
                        `,
                `
                        5.) Visualization meditation.
                        This form of meditation can help enhance feelings of relaxation, peace and calmness by visualizaing positive scenes, images or figures. When you do this visualization 
                        you idealy want to engage all five senses and create as vivid of an image as possible. Another form of this meditation would be to visualize yourself achieving a 
                        goal that you are trying to achieve, which is intended to increase motivation and focus
                        `
            ]

        },
        how_to_meditate: {
            title: `How do you meditate?`,
            img: 'images/monk.jpg',
            alt: 'A monk meditating',
            titleinfo: `
                    What is meditation? Meditation is not about clearing your mind, it is about observing your thoughts and returning your focus back to your object of focus.
                    There is three things to focus on when you are learning to meditate. Firstly location, second your posture, and third the practice itself.
                    `,
            header0: `Location`,
            info0: [
                `When learning to meditate, choosing a location is very important. You can learn to meditate anywhere, however it is much easier to learn how to meditate in a quiet place.
                         Some good places to learn how to meditate would be out in nature when it is quiet, in your bedroom on a chair, or even in the washroom if you have no other options.`
            ],
            header1: `Posture`,
            info1: [
                `
                        Posture is very important when learning how to meditate. There are many different postures for meditation such as sitting, lying down, walking or standing. All of these postures
                        are good ways to meditate, however when you are just learning how to meditate, the best posture would be sitting. This is because standing and walking can make it hard to focus for beginners
                        and lying down can cause you to doze off if your not careful.
                        `,
                `
                        So find your place that you decided to meditate in, you can do this sitting with your legs crossed or you can sit on a chair. Try and keep your back straight as it may start bothering you throughout
                        the meditation if you do not. Rest your hands on your knees and you are now ready to move onto the next step.
                        `

            ],
            header2: `The Practice`,
            info2: [
                `Now that you are sitting in your meditation space you can finally learn the practice of meditation. First things first, put a timer on for 3-5 minutes if your just learning for the first time.
                        You can meditate with your eyes open or closed, but when first starting off it's best to learn with closed eyes. Before you close your eyes take a big, slow inhale through your nose, and then exhale slowly through your mouth. Repeat this around four to five times and on the last exhale
                        close your eyes.`,
                `
                        The next step is to have an object of focus, in this case we will use our breathe. With your eyes closed, you want to return your breathe to its natural rythem. You then want to rest all of your attention on the
                        sensation of your breathe. Whether that be the cold air moving through your nostrils, or your belly moving in and out, it doesn't matter. Now quickly after you start you will realize that you may start thinking about
                        things in your life such as paying bills, or what your going to eat, or anything at all. Your task when meditating is to recognize that you were thinking, and gently bring your attention back to your object of focus,
                        which in this case is your breathe. 
                        `,
                `
                        Don't get discouraged if you were caught in thought! The practice of meditation can be likened to swinging a bat at a baseball, with your thoughts being the ball and the bat being your focus. When your mind wanders
                        and you bring your attention back to your breathe that is you doing one meditation "rep" for lack of a better word. Every time you do this it will build your focus, and strengthen your practice. And that's it, thats basic
                        meditation it is simple but can be very difficult if you get upset and don't realize that getting caught in thoughts is part of the process.
                        `
            ]
        },
        what_is_mindfulness: {
            title: `Mindfulness, Meditation, Whats The Difference?`,
            img: 'images/be-here-now.jpg',
            alt: `The words 'be here now' in scrabble letters`,
            titleinfo: `Are mindfulness and meditation the same thing? Most people think so, but they are two very seperate things that, when you understand the difference can enhance your meditation journey.`,
            header0: `What is meditation?`,
            info0: [
                `Meditation is a skill one develops, and it is also an experience. We use meditation to cultivate awareness and compassion for ourselves and the people around us. Meditation isn't about clearing your mind,
                        or stopping thoughts, or becoming a better person. It is about a formal practice of observing your thoughts with a kind, gentle, and indifferent attitude. You do meditation by sitting with your eyes closed and
                        observing your thoughts with this attitude, and whenver you get distratcted you simply return your focus back onto your breathe (or whatever other object of focus you are using)`
            ],
            header1: `What is mindfulness?`,
            info1: [
                `If meditation is the formal practice of observing your thoughts, and returning your attention to your breathe, then what is mindfulness? Mindfulness is the quality of being present that we carry throughout the day.
                        It is available to us as life unfolds, fully engaged with whatever we are doing at the momment, free from distraction or judgement. `
            ],
            header2: `The differences between the two`,
            info2: [
                `As described before meditation is the practice of sitting with your eyes closed, observing your thoughts. Mindfulness is being present, and aware of everything in your life. For example, rather then getting angry at the
                        driver who just cut you off, you notice that feeling of anger, recognize it is just a thought, return your focus back to the road, and do not yell at the other driver. This, in essence is an example of mindfulness. Meditation
                        on the other hand is the practice of cultivating mindfulness by doing yoga, sitting and meditating, doing taichi, etc.`
            ]
        },
        how_to_apply_mindfulness: {
            title: `How To Apply Mindfulness`,
            img: 'images/boys.jpg',
            alt: 'two young child monks washing pots',
            titleinfo: `
                    Learning how to meditate is a great skill to learn how to calm down, but there is much more to meditation then a state of calm.
                    Meditation can provide a gap in your reactions to the world and allow you to act the way you want to, rather then out of urges.`,
            header0: `Meditation practice`,
            info0: [
                `
                        The first step to being able to apply mindfulness is to make sure you are meditating frequently. A good amount is once per day for 5 - 10 minutes.
                        You can be mindfull without meditating, however a regular meditation practice helps cultivate mindfulness into other aspects of your life.
                        `
            ],
            header1: `Intentional mindfulness`,
            info1: [
                `Once you've built a strong meditation practice, mindfulness becomes a bit more understandable and you can implement some intentional mindful tasks. An example with this would be washing dishes with
                        your full attention. Feel the warm water on your skin. Feel the preassure your putting on the dish your washing with your sponge or hand. Focus on your breathe. Do this until the dishes are completed. 
                        You can do this with anything in life, and every time you do it, it helps you to be more mindful in other areas of your life.`
            ],
            header2: `Interval alarms`,
            info2: [
                `It's easy to forget to be mindful throughout the day. Another way to help cultivate mindfulness in your life is to have alarms go off on a set interval. On your phone you can easily set an alarm or reminder
                        to notify you every hour. This reminder is to remind you to focus on whatever you are working on mindfully. This practice helps a lot if you find that you forget to be mindful throughout the day.`
            ]
        },
        resources: {
            title: `Resources For Meditation And Mindfulness`,
            img: 'images/stones.jpg',
            alt: 'stones balancing ontop of each other',
            titleinfo: `There are many resources for getting into meditation and practicing mindfulness. Below are three resources for guiding you on your meditation journey.`,
            header0: `Headspace app`,
            info0: [
                `Headspace is one of the biggest meditation apps that is currently available. It's simple practices, and vast amount of different meditations to choose from is an excellent first step for any beginner and advanced
                        meditators Headspace helps guide meditators through cultivating awareness and compassion.`
            ],
            header1: `Waking up app`,
            info1: [
                `The waking up app is not as well known as Headspace, but it provides a good source for the holes that Headspace lacks. Waking up provides a big amount of knowledge into how to precieve reality and the world around you.
                        Sam harris (the creator) dives deep into complicated topics of non dualism. He also recommended the next resource we have below. `
            ],
            header2: `On having no head`,
            info2: [
                `This resource is a book you can get for free on kindle. It is a small book but has mind blowing exercises and experimentations that you can preform to help guide you through deeper levels of your meditation journey.
                        This is recommended for more advanced meditators, but even beginners may benefit from reading this book.`
            ]

        },
    }


    // the main function that does all the work to load individual meditation articles.
    //it basically dumps the articles information into the html attributes on the html page.
    const loadMeditationArticle = () => {

        //grab the article from the meditation article database
        let article = meditationsArticles[databaseName]

        //if the article doesn't exist we throw the uh oh error.
        if(!article){
            uhOh()
        }

        //we set the articles title
        document.getElementById('meditation-individual-title').innerHTML = article.title;

        //we set the articles image
        document.getElementById('meditation-individual-img').setAttribute('src', article.img);

        //we set the articles image alt
        document.getElementById('meditation-individual-img').setAttribute('alt', article.alt);

        //we set the articles title info
        document.getElementById('meditation-individual-title-info').innerHTML = article.titleinfo;

        //each article has 3 sections, therefore, we can hardcode 3 into our for loop
        for (let i = 0; i < 3; i++) {

            //here we set each header, and then all the information that is to be under it.
            document.getElementById(`meditation-individual-header-${i}`).innerHTML = article[`header${i}`];

            //here we iterate through each info container, dumping its contents into <p> elements. we do this incase some articles require more paragraphs
            //notice 'info${i}'. this must align with the hard-coded format that is in the meditationsarticle database.
            for (item of article[`info${i}`]) {

                //here we create our p element
                const p = document.createElement("p");

                //we then grab our information from the article info we are on
                const info = document.createTextNode(item);

                //append the info into the p tag
                p.appendChild(info);

                //and append the p tag onto the propper container
                document.getElementById(`meditation-individual-info-${i}`).appendChild(p);
            }

        }

    }
    //the initial call to the function. I know this isn't the most efficient way to do it, but it gives us options
    //if we want to add more later.
    loadMeditationArticle();
}

//the function that we call upon clicking a stoicism article
const activateStoicismPage = () => {

    //stoic articles is a bit more complex then all the others. It will markup anything that is a header, with header tags. and it will dump the info underneath it.
    //You must only have a single header per section, however, you can have multiple paragraphs inside each section by splitting the text in info into different
    //array elements.
    //we made an array, even though it is one article, to allow easier addition to articles in the future.
    const stoicArticles = {
        what_is_stoicism: {
            img: 'images/zeno.png',
            alt: 'picture of zeno the stoic',
            title: 'What Is Stoicism',
            titleinfo: `
                    Stoicism is an ancient philosophy that was once one of the most popular civic disciplines in the West, practiced by the rich and the impoverished,
                     the powerful and the struggling alike in the pursuit of the good Life.
                    `,
            allinfo: {
                section0: {
                    header: `Why learn about stoicism?`,
                    info:
                        [`
                            Have you ever had a obstacle that made you feel overwhelmed, stressed or worried? All of us experience obstacles and setback in life,
                             but what matters the most is not what happens to us, but how we decide to respond to it.
                            `]
                },
                section1: {
                    header: `How do you apply stoicism to your daily life?`,
                    info:
                        [`
                            Stoicism provides us a a practical guide to how to handle the stresses and hardships of life. Stoicism has 4 virtues in which everyone should 
                            live their lives by to allow one to live a better life. To apply stoicism to your daily life you must first understand the virtues in which
                             you will practice. These virtues are: Courage, Temperance, Justice, and Wisdom.
                            `]
                },
                section2: {
                    header: `Courage`,
                    info:
                        [`
                            How do you deal with obstacles in your life? Do you pity yourself and distract yourself with meaningless activities? Or do you bravely attack the
                             challenges of life in a calm and direct manner? Courage doesn't mean you can't feel scared. Courage means that regardless of how you feel, you do
                              whatever it is that you need to do.
                            `,
                            `Scared of asking for your boss for a raise even though you have been going above and beyond for them? Is there a big amount of work to do that you
                             don't want to start? Did you lose all your money in stocks? All these problems revolve around how you will respond right now. Will you view the situation
                              with your boss as an opportunity to practice courage? Will you courageously start and finish your work? Will you accept your lost money, shake it off and plan your next steps?
                            `, `
                            Every situation in life can be responded to with courage. This doesn't mean you respond without thinking. This leads us to our next virtue of...
                            `
                        ]
                },
                section3: {
                    header: `Temperance`,
                    info:
                        [
                            `
                                Although courage is very important, if the only virtue you practice is courage it can easily turn into recklessness. Too little courage leads to behaving cowardly, whilst too much leads to acting without thought.
                                 Therefore what we need is a way to balance between the two extremes.
                                `,
                            `
                                That is what temperance is really about. It's about doing nothing in excess. Doing the right thing in the right amount in the right way Anything in excess will ulitmately lead to pain. Eating desserts
                                 isn't bad, what is bad is when you eat them without self control. Spending money on yourself is important, but if you don't balance your finances, you will soon be broke. Crying is an important human emotion,
                                  on one hand if you cry every day your life will be very sad, on the other if you don't ever cry then you will not be able to express your sadness in a healthy manner.
                                `,
                            `
                                Everything must be balanced with careful consideration. Being courageous and possessing temperance are very important, however we must also ensure that we conduct ourselves in a manner that is
                                 right. The virtue to keep in mind to achieve this is...
                                `
                        ]
                },
                section4: {
                    header: `Justice`,
                    info: [
                        `
                                What is the meaning of life? Is it about money? Fame? posessions? Happiness? None of these things are really anything that truly matters in the end. The only thing that matters is not
                                 what we have, but rather, how we act. Will we act justly in situations where acting unjustly presents a profit? Sure, you can cheat your way through life, but how will that affect your
                                  life in the long run? How will it impact your soul? How will it influence the world long after your gone.
                                `,
                        `
                                There is no Stoic virtue that is more important than justice, because it influences all the others. In simple terms, without striving to act justly, none of the other virtues are relevant or
                                 matter. Without aiming at a target does it really matter how well the archer shoots his arrow? In the same sense, if one does not strive to act justly, none of the other virtues truly matter.
                                `,
                        `
                                Doing the right thing is the compass we follow to do the right thing. How though, do we decide how we must act in any moment? What actually is the "right thing". This leads us to our next virtue of...
                                `
                    ]
                },
                section5: {
                    header: `Wisdom`,
                    info: [
                        `
                                All of the virtues thusfar have taught us to be courageous, to use temperance, and to act justly, but how do you decide how to do any of these? This is where the virtue Wisdom comes in. The learning and knowing
                                 of the world. The experience that we require to navigate the world.
                                `,
                        `
                                The great stoic who invented stoicism, Zeno said "We have two ears and one mouth, so we should listen more than we say." We also have two eyes, therefore we should also read and observe much more then we speak as well.
                                `,
                        `
                                It's important to aquire information, yes, however it is vital that the information that you gain is good information. As the saying goes "garbage in garbage out". If you read a book full of rubbish, all you
                                 will learn is rubbish. Whilst if you read a book with well formed thoughts, a good structure, and a core focus, this book may change your entire life.                                `
                    ]
                },
                section6: {
                    header: `Application`,
                    info:
                        [
                            `
                            So now what? You've learned the virtues but how do you apply them? The first step is humility. You must realize that no matter how much you know (or think you know) there will always be someone who knows more. 
                            Therefore, you should be focused on being the best student you can be. That does not mean the best student in a classroom setting, rather a student of life.
                            `,
                            `
                            Anyone, and infact everyone is your teacher, and you can always learn from them. For example, your boss is frustrated and takes out his frustration onto you. Is this fair? No of course it isn't, but that doesn't
                             mean you should retaliate. You have the decision in that very moment to practice patience, kindness, compassion, humility, etc. You can respond to your boss kindly, you can do his tasks better then he asked for
                              them to be done. This is not for a raise or a promotion, but rather it is for the betterment of your character.
                            `,
                            `
                            You always have the opportunity to learn from others, to act in a courageous, temperant, just, and wise manner.
                            `,
                        ]
                },
            }

        }
    }

    //we get the article in the url
    const article = stoicArticles[databaseName];

    //if there is no article we display the uh oh error
    if(!article){
        uhOh()
    }

    //then we get all the sections the article has
    const sections = article.allinfo
    
    //we then get the amount of sections we have as a number
    const sectionsLength = Object.keys(sections).length



    //we set the articles title
    document.getElementById('stoicism-individual-article-title').innerHTML = article.title;

    //we set the articles title info
    document.getElementById('stoicism-individual-article-titleinfo').innerHTML = article.titleinfo;

    //we set the articles img
    document.getElementById('stoicism-individual-article-img').setAttribute('src', article.img)

    //we set the articles img's alt
    document.getElementById('stoicism-individual-article-img').setAttribute('alt', article.alt)

    //we iterate through each section and inside of each section we put the header, 
    // and the info. When we get to info we start another loop, and each element in that
    //info array gets seperated into paragraphs
    for (let i = 0; i < sectionsLength; i++) {

        //the current section we are on
        let section = sections[`section${i}`];

        //we create a h3 tag (for the header)
        let h3 = document.createElement("h3");

        //we append the header for the current section into the h3 tag
        h3.appendChild(document.createTextNode(section.header));

        //we then append that header to the info container
        document.getElementById(`stoicism-individual-article-info-container`).appendChild(h3);

        //here we seperate each info element (in the info array) to a seperate paragraph
        for (let i = 0; i < section.info.length; i++) {

            //we create a <p> element
            let p = document.createElement("p");

            //we create a text node with text within info at the i'th index, and append it into the p tag
            p.append(document.createTextNode(section.info[i]));

            //and then we append that p tag into the info container.
            document.getElementById(`stoicism-individual-article-info-container`).appendChild(p);
        }
        //as a whole this function simply dumps the header in a h3 tag, then it iterates through the info array and dumps
        //each paragraph in a seperate <p> tag. it pushes both of these into the info container.
    }

}


/* 
    this function does the following:
    1.) Detects which radio button is clicked and shows that set of pictures
    2.) shows where you are in the batch of wires frames, example: 1/5, or 5/5
    3.) cycles through the pictures when the next and previous buttons are clicked on report.html
*/
let currentWireframeArray;
let currentWireframe = 0;
let site;
let wireFramePath = 'images/wireframes/'
let img;
//activated on menu click
const updateWireframe = () => {
    document.getElementById('wireframe-header').innerHTML = `${site}-page ${currentWireframe} / ${currentWireframeArray.length}`
    img = wireFramePath + currentWireframeArray[currentWireframe - 1]
    document.getElementById('wireframe-img').setAttribute('src', img)
}
const reportWireframeSwitcher = (category = 'news') => {
    currentWireframe = 1;
    // i hardcoded all the images, even though they have repeating names just for clarity sake
    const wireframes = {
        news:['news1.jpg','news2.jpg','news3.jpg', 'news4.jpg'],
        quotes:['quotes1.jpg','quotes2.jpg','quotes3.jpg', 'quotes4.jpg'],
        books:['books1.jpg','books2.jpg','books3.jpg','books4.jpg','books5.jpg', 'books6.jpg'],
        stoicism:['stoicism1.jpg','stoicism2.jpg','stoicism3.jpg'],
        meditations:['meditations1.jpg','meditations2.jpg','meditations3.jpg', 'meditations4.jpg'],
        report:['report1.jpg']
    }
    for(let wireframe of Object.keys(wireframes))
    {

        if(category == wireframe)
        {
            currentWireframeArray = wireframes[wireframe];
            site = category;
        }
    }
    updateWireframe();
}

const reportNextWireframe = option => {
    if(currentWireframe < currentWireframeArray.length && option == 'next')
    {
        currentWireframe++;
    }
    else if(currentWireframe > 1 && option == 'prev')
    {
        currentWireframe--;
    }
    updateWireframe()
}


// this is the most important component of this script file.
// These if statements call the appropriate function for the required page to function.

//when loading a clicked book this if statement goes off
if (url.includes('books.html?book=')) {
    document.getElementById('books-main-page-container').style.display = 'none';
    document.getElementById('individual-book-container').style.display = 'block';
    activateBookPage('load-book');
}
//when client goes to the next page this one goes off, the link will look something like books.html?page=... 
//this if statement also goes off when user clicks top 5 books on news page which links to books.html?page=top-5-books
else if (url.includes('books.html')) {
    activateBookPage('next-page');
}
//when a person is clicked on the quote page this is activated, it hides the original content and shows the person clicked and there quotes
else if (url.includes('quotes.html?person=')) {
    activateQuotePage('person');
    document.getElementById('quotes-main-page-container').style.display = 'none';
    document.getElementById('individual-quotes-container').style.display = 'block';
}
//just alike the quotes page, except we show an article with info rather then a person with quotes.
else if (url.includes('meditations.html?article=')) {
    document.getElementById('meditations-container').style.display = 'none';
    document.getElementById('meditation-individual-article').style.display = 'block';
    activateMeditationPage();
    //same as the other pages, but this deals with stoicism articles.
} else if (url.includes('stoicism.html?article=')) {
    document.getElementById('stoicism-news-container').style.display = 'none';
    document.getElementById('stoicism-individual-article-container').style.display = 'block';
    activateStoicismPage();
} else if (url.includes('report.html')){
    reportWireframeSwitcher()
}