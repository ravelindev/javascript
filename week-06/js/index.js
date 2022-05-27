// This is  my javascript file to create a random sentence generator app

var verbs, nouns, adjectives, adverbs, preposition;
nouns = ["dog", "cat", "bird", "fish", "lion", "tiger", "bear", "cow", "horse", "pig", 
"elephant", "giraffe", "zebra", "rhino", "monkey", "panda", "koala", "penguin", "dolphin", 
"whale", "crocodile", "snake", "lizard", "turtle", "shark", "octopus", "squid", "crab", 
"spider", "scorpion", "snail", "sloth", "squirrel", "ant", "bee", "butterfly", "caterpillar", 
"dragonfly", "fish", "fly", "ladybug", "moth", "mosquito", "puppy", "rabbit", "snail", "snake", 
"spider", "stork", "toad"];
verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed", 
"poured", "prayed", "screamed", "cried", "laughed", "jumped", "danced", "drowned", "died",
"proved", "died", "pumped", "punched", "pushed", "pulled", "ran", "rained", "rode", "rushed", "rejected", "raigned", 
"rushed", "screamed", "sawed", "saved", "scattered", "scolded", "scorched", "scratched", "shaded", "shaken", "shattered",
"shoved", "shived", "stayed", "steered", "stepped", "stirred", "stitched", "stole", "stuck", "stung", "stunk", "swam"];
adjectives = ["happy", "sad", "angry", "lazy", "tired", "hungry", "thirsty", "sick", "smart", "dumb", "beautiful", "ugly",
"smart", "dumb", "beautiful", "ugly", "lazy", "professional", "lovely", "rough", "soft", "hot", "vibrating", "slimy", "smelly", "stinky", 
"loud", "quiet", "bold", "light", "heavy", "thin", "thick", "short", "long", "tall", "fat", "skinny", "forehead", "nose", "mouth", "chin"];
adverbs = ["quickly", "slowly", "happily", "sadly", "angrily", "lazily", "tiredly", "hungrily", "thirstily", "sickly", "smartly", "dumbly", "beautifully", "uglyly",
"quickly", "slowly", "happily", "sadly", "angrily", "lazily", "tiredly", "hungrily", "thirstily", "sickly", "smartly", "dumbly", "beautifully", "uglyly",
"loudly", "quietly", "boldly", "lightly", "heavily", "thinly", "thickly", "shortly", "longly", "tallly", "fatly", "skinnyly", "foreheadly", "nosely", "mouthly", "chinly"];
preposition  =  ["below", "towards", "down", "into", "up", "on", "upon", "above", "through", "across"];


function rand() {
    return Math.floor(Math.random() * 3);
  }

  function sentence() {
    let gen1 = Math.floor(Math.random() * 5);
    let gen2 = Math.floor(Math.random() * 5);
    let gen3 = Math.floor(Math.random() * 5);
    let gen4 = Math.floor(Math.random() * 5);
    let gen5 = Math.floor(Math.random() * 5);
    let gen6 = Math.floor(Math.random() * 5);
    let gen7 = Math.floor(Math.random() * 5);
    let gen8 = Math.floor(Math.random() * 5);

    var content = "The " + adjectives[gen1] + " " + nouns[gen2] + " " + adverbs[gen3] + " " + verbs[gen4] + " when a " + nouns[gen6] + " " + adverbs[gen2] + " " + verbs[gen3] + " " + preposition[gen8] + " a " + adjectives[gen2] + " " + nouns[gen5] + " which, became a " + adjectives[gen3] + ", " + adjectives[gen4] + " " + nouns[gen6] + ".";

    document.getElementById('phrase').innerHTML = "&laquo" + content + "&raquo";
  };
  sentence();