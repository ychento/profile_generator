const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = {};

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  profile.name = name;

  rl.question("What's an activity you like doing? ", (activity) => {
    profile.activity = activity;

    rl.question("What do you listen to while doing that? ", (music) => {
      profile.music = music;

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (meal) => {
        profile.meal = meal;

        rl.question("What's your favourite thing to eat for that meal? ", (food) => {
          profile.food = food;

          rl.question("Which sport is your absolute favourite? ", (sport) => {
            profile.sport = sport;

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
              profile.superpower = superpower;

              // Generate the profile paragraph
              const profileParagraph = `Hello, I'm ${profile.name}. I enjoy ${profile.activity} while listening to ${profile.music}. My favorite meal is ${profile.meal}, and I love eating ${profile.food}. My absolute favorite sport is ${profile.sport}. If I have to describe my superpower in a few words, I would say I'm amazing at ${profile.superpower}!`;

              console.log(`Thank you for answering all the questions. Here's your profile:\n`);
              console.log(profileParagraph);
              rl.close();
            });
          });
        });
      });
    });
  });
});
