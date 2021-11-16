const questions = {
  openQuestions: [
    {"id": 1, "question": "What was your worst travel experience?", "isOpen": true},
    {"id": 2, "question": "What was the most important chance encounter you’ve had?", "isOpen": true},
    {"id": 4, "question": "What defines a good life?", "isOpen": true},
    {"id": 6, "question": "What kinds of strategies do you use to make big decisions?", "isOpen": true},
    {"id": 7, "question": "What are some of your plans for the future?", "isOpen": true},
    {"id": 8, "question": "How would you explain the idea of justice to an alien?", "isOpen": true},
    {"id": 9, "question": "Why does happiness seem to come easily to some but not others?", "isOpen": true},
    {"id": 11, "question": "What was the scariest dream you’ve had?", "isOpen": true},
    {"id": 12, "question": "What life hacks have you found to be particularly effective?", "isOpen": true},
    {"id": 13, "question": "If you could design a reality TV show, what would it be like?", "isOpen": true},
    {"id": 16, "question": "What experiments would you like to run if time and money weren’t an issue?", "isOpen": true},
    {"id": 17, "question": "What are the best and worst things about your favorite restaurant?", "isOpen": true},
    {"id": 21, "question": "What is your best work or school story?", "isOpen": true},
    {"id": 23, "question": "What is the most calming image you can conjure up in your mind?", "isOpen": true},
    {"id": 24, "question": "How would the country change if children were allowed to vote?", "isOpen": true},
    {"id": 26, "question": "How would the world change if some people could use magic spells, and some people could not?", "isOpen": true},
    {"id": 28, "question": "Why is it so hard to learn from our mistakes?", "isOpen": true},
    {"id": 29, "question": "What are some valuable lessons we should learn from history?", "isOpen": true},
    {"id": 31, "question": "How would you tweak the Olympics to make them even more enjoyable?", "isOpen": true},
    {"id": 33, "question": "If you had $200,000 to spend on a party, how would you spend the money?", "isOpen": true},
    {"id": 34, "question": "What do you think TV shows in 30 years will be like?", "isOpen": true},
    {"id": 36, "question": "If you had enough money to never work, what your typical day look like?", "isOpen": true},
    {"id": 39, "question": "Why do you think that humans find other animals’ babies cute?", "isOpen": true},
    {"id": 41, "question": "What social situations do you dread?", "isOpen": true},
    {"id": 42, "question": "What is your routine for an average weekday?", "isOpen": true},
    {"id": 43, "question": "What would happen during the best day imaginable?", "isOpen": true},
    {"id": 44, "question": "What is the funniest story you’ve heard?", "isOpen": true},
    {"id": 45, "question": "How would you handle integrating someone who had been frozen for 100 years into society?", "isOpen": true},
    {"id": 46, "question": "What makes you like or dislike a person?", "isOpen": true},
    {"id": 47, "question": "What would the best amusement park in the world look like?", "isOpen": true},
    {"id": 50, "question": "How important do you think self-improvement is?/What does self-improvement mean to you?", "isOpen": true},
    {"id": 53, "question": "What kinds of things make you feel nostalgic?", "isOpen": true},
    {"id": 55, "question": "What are your top 3 rules for navigating life?", "isOpen": true},
    {"id": 57, "question": "What would happen if the internet just shut down somehow and never came back?", "isOpen": true},
    {"id": 61, "question": "When was a time that politeness or good manners have gotten you into trouble?", "isOpen": true},
    {"id": 62, "question": "What would your perfect vacation be like?", "isOpen": true},
    {"id": 68, "question": "How would society change if we discovered that ghosts actually exist?", "isOpen": true},
    {"id": 70, "question": "What would your utopia look like?", "isOpen": true},
    {"id": 71, "question": "How would you prepare for a zombie apocalypse?", "isOpen": true},
    {"id": 72, "question": "How did you come to like some of the hobbies you enjoy?", "isOpen": true},
    {"id": 74, "question": "What makes your favorite place you’ve been better than all the other places you’ve been to?", "isOpen": true},
    {"id": 76, "question": "What makes you look up to your heroes?", "isOpen": true},
    {"id": 78, "question": "What questions can you ask to learn the most about a person?", "isOpen": true},
    {"id": 80, "question": "What’s the weirdest internet rabbit hole you’ve been down?", "isOpen": true},
    {"id": 82, "question": "Given unlimited resources, how would you go about making the world a better place?", "isOpen": true},
    {"id": 84, "question": "What would be in a playground made for adults?", "isOpen": true},
    {"id": 89, "question": "What would your perfect house look like?", "isOpen": true},
    {"id": 93, "question": "How would the world change if suddenly everyone could read each other’s thoughts?", "isOpen": true}
  ],

  closedQuestions: [
    {"id": 3, "question": "Are you more of an introvert or extrovert?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Extroverted introvert.\""},
    {"id": 5, "question": "Have you ever gotten a speeding ticket?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Yes.\""},
    {"id": 10, "question": "Would you be the leader of your country if asked?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"If I had to, but it would suck.\""},
    {"id": 14, "question": "Do you believe good luck charms work?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"No. But kinda yes, like a placebo. But no.\""},
    {"id": 15, "question": "What social media platform do you use most often?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Youtube.\""},
    {"id": 18, "question": "Do you like where you live?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"It's alright.\""},
    {"id": 19, "question": "Will we ever discover extraterrestrial life?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Not exactly, no.\""},
    {"id": 20, "question": "Have you ever gone skydiving?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"No.\""},
    {"id": 22, "question": "What’s the opposite of a penguin?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Huh?\""},
    {"id": 25, "question": "What hobby do you spend the most time on?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Thinking.\""},
    {"id": 27, "question": "What sport do you watch most often?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Sport time...ball?\""},
    {"id": 30, "question": "Who is your favorite superhero?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Me. I mean, what?\""},
    {"id": 32, "question": "Do you prefer big parties or small gatherings?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Small gatherings.\""},
    {"id": 35, "question": "At what age do you think you’ll retire?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Never.\""},
    {"id": 37, "question": "Would you say you're a good person?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"No.\""},
    {"id": 38, "question": "What is your favorite type of international food?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Sushi.\""},
    {"id": 40, "question": "Are you good at fixing things around the house?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Yes.\""},
    {"id": 48, "question": "Are you happy with where you live?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Yes.\""},
    {"id": 49, "question": "What’s your favorite possession?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"My life.\""},
    {"id": 51, "question": "Are you an easy-going person?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Yes.\""},
    {"id": 52, "question": "Do you look through the bathroom drawers when you go to the bathroom in someone’s house?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"No.\""},
    {"id": 54, "question": "Do you consider yourself to be a goal-oriented person?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"I dunno.\""},
    {"id": 56, "question": "Do you think other intelligent life exists in the universe?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"In a certain sense, yes.\""},
    {"id": 58, "question": "Do you listen to podcasts?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Yes.\""},
    {"id": 59, "question": "What country has the most interesting history?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Antartica: the country not the continent.\""},
    {"id": 60, "question": "On a scale of 1 – 10, how corrupt do you think your government is?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Yes. They are. 10?\""},
    {"id": 63, "question": "Do you put a toilet paper roll on with the paper unrolling from the top or the bottom?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Top.\""},
    {"id": 64, "question": "Have you ever dyed your hair?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Yes.\""},
    {"id": 65, "question": "Have you ever broken a bone?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Yes.\""},
    {"id": 66, "question": "What’s the single most important thing a person can do to improve themselves?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Look for truth, even if it hurts.\""},
    {"id": 67, "question": "Do you take a lot of risks, or do you play it safe?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Both.\""},
    {"id": 69, "question": "At what age do you think the average person is mature enough to make all of their own life decisions?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Depends on the person, I guess.\""},
    {"id": 73, "question": "Are you a cup half full or a cup half empty kind of person?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Half-full.\""},
    {"id": 75, "question": "Are you more of a night person or a morning person?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Night person.\""},
    {"id": 77, "question": "Do you believe animals have emotions similar to human emotions?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Yes.\""},
    {"id": 79, "question": "Where would you most like to live?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"At home.\""},
    {"id": 81, "question": "What programming languages, if any, do you know?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"None.\""},
    {"id": 83, "question": "What holiday do you enjoy celebrating the most?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Christmas.\""},
    {"id": 85, "question": "How many times a week do you exercise?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Twice.\""},
    {"id": 86, "question": "Who is the most important person in your life?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"My spouse.\""},
    {"id": 87, "question": "Do you like road trips?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Yes.\""},
    {"id": 88, "question": "Would you want someone to write a biography of your life?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Yes.\""},
    {"id": 90, "question": "Do you think some people are naturally luckier than others?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Yes.\""},
    {"id": 91, "question": "Have you ever left your country?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"Yes.\""},
    {"id": 92, "question": "Where did you meet your best friend?", "isOpen": false, "explanantion": "This question is considered to be closed-ended, as it can be answered in a short phrase/word such as \"At college.\""}
  ]
}

module.exports = questions;
