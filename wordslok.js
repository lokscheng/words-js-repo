console.log('wordslok.js loaded');
const words = [
    { day: '2024-07-12', words: ["The", "cat", "is", "on", "the", "mat"] },
    { day: '2024-07-13', words: ["I", "see", "a", "big", "red", "apple"] },
    { day: '2024-07-14', words: ["The", "moon", "is", "in", "the", "sky"] },
    { day: '2024-07-15', words: ["I", "sit", "on", "the", "chair"] },
    { day: '2024-07-16', words: ["The", "car", "goes", "fast"] },
    { day: '2024-07-17', words: ["I", "use", "a", "pen", "to", "write"] },
    { day: '2024-07-18', words: ["The", "sun", "is", "very", "bright"] },
    { day: '2024-07-19', words: ["The", "ball", "is", "blue", "and", "green"] },
    { day: '2024-07-20', words: ["The", "dog", "barks", "loudly"] },
    { day: '2024-07-21', words: ["I", "have", "a", "new", "toy", "car"] },
    { day: '2024-07-22', words: ["The", "cat", "is", "sleeping", "now"] },
    { day: '2024-07-23', words: ["I", "see", "a", "green", "tree", "outside"] },
    { day: '2024-07-24', words: ["I", "drink", "milk", "every", "day"] },
    { day: '2024-07-25', words: ["We", "go", "to", "the", "park", "to", "play"] },
    { day: '2024-07-26', words: ["My", "mom", "cooks", "dinner", "for", "us"] },
    { day: '2024-07-27', words: ["She", "reads", "a", "book", "before", "bed"] },
    { day: '2024-07-28', words: ["We", "play", "with", "blocks", "and", "toys"] },
    { day: '2024-07-29', words: ["I", "love", "to", "eat", "apples", "and", "bananas"] },
    { day: '2024-07-30', words: ["He", "likes", "to", "play", "outside", "with", "friends"] },
    { day: '2024-07-31', words: ["The", "bird", "flies", "in", "the", "sky"] },
    { day: '2024-08-01', words: ["We", "eat", "lunch", "at", "noon"] },
    { day: '2024-08-02', words: ["The", "car", "is", "red", "and", "fast"] },
    { day: '2024-08-03', words: ["I", "like", "to", "draw", "pictures", "in", "my", "book"] },
    { day: '2024-08-04', words: ["She", "jumps", "over", "the", "fence"] },
    { day: '2024-08-05', words: ["They", "play", "games", "in", "the", "yard"] },
    { day: '2024-08-06', words: ["The", "dog", "runs", "in", "the", "garden"] },
    { day: '2024-08-07', words: ["We", "go", "to", "the", "zoo", "to", "see", "animals"] },
    { day: '2024-08-08', words: ["The", "fish", "swims", "in", "the", "water"] },
    { day: '2024-08-09', words: ["I", "find", "a", "big", "yellow", "ball"] },
    { day: '2024-08-10', words: ["She", "writes", "a", "letter", "to", "her", "friend"] },
    { day: '2024-08-11', words: ["He", "plays", "with", "his", "favorite", "toy"] },
    { day: '2024-08-12', words: ["The", "moon", "shines", "brightly", "at", "night"] },
    { day: '2024-08-13', words: ["I", "see", "a", "beautiful", "butterfly"] },
    { day: '2024-08-14', words: ["The", "cake", "is", "sweet", "and", "tasty"] },
    { day: '2024-08-15', words: ["We", "visit", "the", "museum", "on", "Saturdays"] },
    { day: '2024-08-16', words: ["She", "jumps", "high", "on", "the", "trampoline"] },
    { day: '2024-08-17', words: ["The", "stars", "twinkle", "in", "the", "night"] },
    { day: '2024-08-18', words: ["I", "make", "a", "sandcastle", "at", "the", "beach"] },
    { day: '2024-08-19', words: ["The", "rain", "makes", "the", "grass", "green"] },
    { day: '2024-08-20', words: ["She", "plays", "a", "melody", "on", "the", "piano"] },
    { day: '2024-08-21', words: ["We", "go", "for", "a", "walk", "in", "the", "park"] },
    { day: '2024-08-22', words: ["The", "dog", "likes", "to", "chase", "the", "ball"] },
    { day: '2024-08-23', words: ["I", "paint", "a", "picture", "with", "colors"] },
    { day: '2024-08-24', words: ["The", "cake", "is", "for", "a", "birthday"] },
    { day: '2024-08-25', words: ["She", "puts", "on", "her", "new", "dress"] },
    { day: '2024-08-26', words: ["The", "cat", "likes", "to", "climb", "trees"] },
    { day: '2024-08-27', words: ["We", "have", "a", "picnic", "in", "the", "park"] },
    { day: '2024-08-28', words: ["The", "sun", "is", "shining", "brightly", "today"] },
    { day: '2024-08-29', words: ["I", "ride", "my", "bike", "to", "the", "store"] },
    { day: '2024-08-30', words: ["She", "reads", "a", "book", "every", "night"] },
    { day: '2024-08-31', words: ["The", "train", "goes", "fast", "on", "the", "tracks"] },
    { day: '2024-12-26', words: ["She", "plays", "with", "her", "new", "toys"] },
    { day: '2024-12-27', words: ["The", "snow", "is", "falling", "softly"] },
    { day: '2024-12-28', words: ["We", "have", "dinner", "with", "family"] },
    { day: '2024-12-29', words: ["I", "make", "a", "card", "for", "New", "Year"] },
    { day: '2024-12-30', words: ["She", "writes", "her", "New", "Year", "resolutions"] },
    { day: '2024-12-31', words: ["The", "year", "ends", "with", "celebrations"] }
];
