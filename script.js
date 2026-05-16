// Each fact has: text, tags (for keyword matching), and curiosity hooks
const facts = [
  {
    text: "🐸 Frogs drink through their skin — they never take a sip with their mouth!",
    tags: ["frog", "frogs", "skin", "drink", "water", "amphibian"],
    why: "Frog skin is permeable. A special patch on their belly called the 'drinking patch' absorbs water directly into their bloodstream.",
    deeper: "Because they breathe and drink through their skin, frogs are extremely sensitive to pollution — which is why scientists treat them as an early warning system for environmental damage.",
    question: "If you absorbed water through your skin, how do you think your daily routine would change?",
  },
  {
    text: "🦋 Butterflies taste with their feet, so every landing is a flavor test.",
    tags: ["butterfly", "butterflies", "taste", "feet", "insect"],
    why: "They have chemoreceptors on their tarsi (feet) that detect sugars and salts the instant they land — far faster than checking with a mouthpart.",
    deeper: "This helps females find the right plant to lay eggs on; they 'drum' the leaf with their feet to check it's the right species for their caterpillars.",
    question: "What would your favorite meal taste like if you walked across it instead of biting it?",
  },
  {
    text: "🐙 Octopuses have three hearts — two pump blood to the gills, one to the body.",
    tags: ["octopus", "octopuses", "heart", "hearts", "blood", "cephalopod"],
    why: "Their blood uses copper-based hemocyanin instead of iron-based hemoglobin, which carries oxygen poorly in cold water — so they need extra pumps to keep up.",
    deeper: "The main heart actually STOPS beating when an octopus swims, which is why they prefer crawling. Swimming literally exhausts them.",
    question: "If you had three hearts, which one would you say 'I love you' with?",
  },
  {
    text: "🐬 Dolphins sleep with half a brain at a time so they can keep watch and breathe.",
    tags: ["dolphin", "dolphins", "sleep", "brain", "breathe"],
    why: "It's called unihemispheric sleep. One hemisphere rests with the opposite eye closed, while the other stays alert for predators and reminds them to surface for air.",
    deeper: "Some birds do this too — ducks on the edge of a sleeping group keep one eye open, literally watching for danger while half-asleep.",
    question: "If half your brain could keep working while you slept, what would you have it do?",
  },
  {
    text: "🦔 Hedgehogs are lactose intolerant — milk upsets their tiny tummies!",
    tags: ["hedgehog", "hedgehogs", "milk", "lactose", "diet"],
    why: "Adult hedgehogs don't produce enough lactase to break down milk sugars. People used to leave milk out for them, which actually caused diarrhea and dehydration.",
    deeper: "Most adult mammals are lactose intolerant — humans who tolerate milk are the unusual ones, thanks to a genetic mutation that spread with dairy farming around 7,000 years ago.",
    question: "What's a 'kind' thing people do for animals that might actually be harmful?",
  },
  {
    text: "🐨 Koalas have fingerprints almost identical to humans.",
    tags: ["koala", "koalas", "fingerprint", "fingerprints", "hands"],
    why: "Both evolved fingerprints independently to grip things better — koalas grip eucalyptus branches, we grip... everything.",
    deeper: "Koala prints are so similar to ours that forensic experts have joked they could contaminate a crime scene.",
    question: "What other 'human' traits do you think evolved separately in animals?",
  },
  {
    text: "🦩 Flamingos are pink because of the shrimp and algae they eat.",
    tags: ["flamingo", "flamingos", "pink", "color", "diet", "shrimp"],
    why: "Pigments called carotenoids in their food get deposited in their feathers. A flamingo fed plain food turns white.",
    deeper: "Flamingo parents feed their chicks a bright red 'crop milk' — and the parents temporarily fade to pale white from giving up all their pigment.",
    question: "If your skin changed color based on what you ate this week, what color would you be?",
  },
  {
    text: "🦉 Owls can rotate their heads about 270 degrees.",
    tags: ["owl", "owls", "head", "neck", "rotate"],
    why: "Their eyes are fixed in their sockets — they can't move them — so the neck has to do all the looking. Extra vertebrae and special blood vessels make it safe.",
    deeper: "If we tried that turn, we'd cut off blood to our brain. Owls have reservoirs in their arteries that keep blood flowing even when the vessels are squeezed.",
    question: "Would you rather have owl-vision at night or fixed eyes that force you to look fully at whatever you face?",
  },
  {
    text: "🐝 Honeybees can recognize human faces.",
    tags: ["bee", "bees", "honeybee", "face", "recognize", "memory"],
    why: "They piece together features like eyes, nose, and mouth — a process called 'configural processing' — which we used to think only big-brained mammals could do.",
    deeper: "A bee brain has under a million neurons (yours has about 86 billion), yet it can learn faces, count to four, and understand the concept of zero.",
    question: "What's something tiny — an insect, a habit, a moment — that turned out to be smarter or bigger than you assumed?",
  },
  {
    text: "🐢 A group of turtles is called a 'bale'.",
    tags: ["turtle", "turtles", "bale", "group"],
    why: "Old English used 'bale' for a bundled-up package — and a cluster of turtles sunning on a log does look exactly like a bundle.",
    deeper: "English has wonderfully specific group names: a 'murder' of crows, a 'parliament' of owls, a 'shrewdness' of apes, a 'wisdom' of wombats.",
    question: "If you named a group of humans based on how they really behave together, what would you call them?",
  },
  {
    text: "🐘 Elephants are the only mammals that can't jump.",
    tags: ["elephant", "elephants", "jump", "mammal"],
    why: "Their leg bones are oriented straight down to support their enormous weight, and they lack the tendon springiness other mammals use to launch off the ground.",
    deeper: "They make up for it with incredibly sensitive feet — elephants can 'hear' distant footsteps and rumbles through vibrations in the ground.",
    question: "If you couldn't jump, what would you miss doing most?",
  },
  {
    text: "🦈 Sharks are older than trees.",
    tags: ["shark", "sharks", "tree", "trees", "old", "ancient"],
    why: "Sharks have been around for about 400 million years; the earliest true trees appeared around 350 million years ago.",
    deeper: "Sharks have survived all five mass extinctions, including the one that killed the dinosaurs. Their body plan has been so successful, evolution has barely tweaked it.",
    question: "What's something old that still works perfectly today?",
  },
  {
    text: "🦘 Wombats produce cube-shaped poop.",
    tags: ["wombat", "wombats", "poop", "cube", "square"],
    why: "Their intestines have varying stiffness along the walls, which slowly squeezes the waste into a six-sided shape over many days.",
    deeper: "Wombats stack the cubes on rocks and logs to mark territory — the flat sides keep their messages from rolling away.",
    question: "What everyday object would be better if it were cube-shaped instead of round?",
  },
  {
    text: "🦦 Sea otters hold hands while they sleep so they don't drift apart.",
    tags: ["otter", "otters", "hand", "sleep", "raft", "sea"],
    why: "They float in groups called 'rafts' and grip each other's paws so the current doesn't carry anyone away while they nap.",
    deeper: "Pups can't swim well at first, so mothers wrap them in kelp like a seatbelt before diving for food.",
    question: "What's the human equivalent of holding hands so you don't drift apart?",
  },
  {
    text: "🦥 Sloths can hold their breath longer than dolphins — up to 40 minutes.",
    tags: ["sloth", "sloths", "breath", "breathe", "slow"],
    why: "They slow their heart rate to a third of normal, conserving oxygen the same way deep divers do.",
    deeper: "Sloths move so little that algae grows on their fur, which helps camouflage them and even feeds tiny moths that live in the algae.",
    question: "If slowing down made you better at something, what would you want it to be?",
  },
  {
    text: "🐄 Cows have best friends and get stressed when separated.",
    tags: ["cow", "cows", "friend", "friends", "social"],
    why: "Researchers measured their heart rates and found cows are calmer when grazing with a preferred companion than with a random herdmate.",
    deeper: "Cows can also hold grudges — they remember individuals who treated them roughly and avoid them for years afterward.",
    question: "What does it tell us if animals can have best friends?",
  },
  {
    text: "🧸 Tardigrades can survive the vacuum of space.",
    tags: ["tardigrade", "tardigrades", "space", "water bear", "survive"],
    why: "They enter a state called 'cryptobiosis' where they lose nearly all their water, replace it with sugars, and essentially become microscopic dust until conditions improve.",
    deeper: "Tardigrades have survived being frozen to near absolute zero, boiled, irradiated, and crushed to 6,000 atmospheres of pressure. They're already on the Moon — a 2019 lander spilled them there.",
    question: "If you could survive one extreme condition unharmed, which would you choose?",
  },
  {
    text: "🦐 Mantis shrimp see with 16 types of color receptors. We have 3.",
    tags: ["mantis", "shrimp", "color", "eye", "eyes", "vision"],
    why: "Their compound eyes process color in the eye itself, not the brain — they don't 'mix' colors like we do, so they can see far more wavelengths.",
    deeper: "They also punch with the speed of a .22 caliber bullet, fast enough to boil water and create a flash of light through cavitation bubbles.",
    question: "If you could see a brand-new color no one else can, would you want to?",
  },
  {
    text: "🕊️ Pigeons can recognize themselves in a mirror.",
    tags: ["pigeon", "pigeons", "mirror", "self", "recognize"],
    why: "They pass the 'mark test' — touching a spot on their own body they can only see in the reflection, indicating self-awareness.",
    deeper: "Only a handful of species pass: great apes, dolphins, elephants, magpies, manta rays, and cleaner wrasse fish. The list keeps growing as we test more cleverly.",
    question: "What's something most people underestimate every day?",
  },
  {
    text: "🐳 Sperm whales sleep standing up, vertically in the water.",
    tags: ["whale", "whales", "sperm whale", "sleep", "vertical"],
    why: "They drift motionless near the surface in tight pods, head pointing up, for 10–15 minute bursts — total sleep is only about 2 hours a day.",
    deeper: "They have the largest brain of any animal that ever lived. We have no idea what those naps are for.",
    question: "If you only needed 2 hours of sleep, what would you do with the extra time?",
  },
  {
    text: "🐌 A snail can sleep for three years at a time.",
    tags: ["snail", "snails", "sleep", "hibernate", "estivate"],
    why: "In dry or cold conditions, snails seal their shells with mucus and slow their metabolism to almost nothing — a state called estivation.",
    deeper: "When the rain returns, they pop right back to life. Their internal clock isn't tracking days; it's tracking moisture.",
    question: "What would you want to be paused for, and what would you want to wake up to?",
  },
  {
    text: "🐜 Ants don't have lungs — they breathe through tiny holes in their bodies.",
    tags: ["ant", "ants", "lung", "lungs", "breathe", "spiracle"],
    why: "Air enters through pores called 'spiracles' along their exoskeleton and travels through a branching tube system directly to their cells.",
    deeper: "This is also why insects can't grow huge anymore. In the dinosaur era, when oxygen was higher, dragonflies had two-foot wingspans.",
    question: "What would the world look like if insects were as big as cats?",
  },
  {
    text: "🐧 Penguins propose by giving their mate a pebble.",
    tags: ["penguin", "penguins", "pebble", "rock", "propose", "mate"],
    why: "Smooth stones are rare and valuable for building nests above the wet ground. Offering one is both a gift and a practical contribution.",
    deeper: "Female Adélie penguins have been observed sneaking pebbles from rival nests — and sometimes 'paying' single males with affection in exchange for stones.",
    question: "What's the human equivalent of a pebble — a small thing that means everything?",
  },
  {
    text: "🦐 A pistol shrimp can stun fish with a single snap of its claw.",
    tags: ["pistol shrimp", "shrimp", "snap", "claw", "loud"],
    why: "The claw closes so fast it creates a 'cavitation bubble' that collapses with a snap reaching 218 decibels — louder than a gunshot.",
    deeper: "The collapsing bubble briefly reaches temperatures close to the surface of the sun. A creature the size of your thumb is generating tiny stars.",
    question: "What's the most powerful thing you've seen come from something tiny?",
  },
  {
    text: "🐐 Goats have rectangular pupils.",
    tags: ["goat", "goats", "pupil", "pupils", "eye", "eyes"],
    why: "Horizontal slits give grazing animals a wide panoramic view — almost 320 degrees — so they can spot predators while their heads are down eating.",
    deeper: "Their eyes rotate to stay level with the horizon even when they're upside down on a steep cliff. The view always stays oriented.",
    question: "If your eyes worked differently, what would you want them to do?",
  },
  {
    text: "🦅 Crows hold grudges — and tell their friends about you.",
    tags: ["crow", "crows", "grudge", "remember", "memory"],
    why: "Crows recognize individual human faces and can remember someone who threatened them for years, mobbing them on sight.",
    deeper: "They also pass that grudge to crows who weren't there — younger crows learn to harass the same person socially, like a cultural memory.",
    question: "What do humans do that's a 'grudge passed down' even when the original reason is gone?",
  },
  {
    text: "🐻‍❄️ Polar bears have black skin under their white fur.",
    tags: ["polar bear", "bear", "skin", "fur", "white", "black"],
    why: "Black skin absorbs heat from sunlight, and the hollow translucent hairs scatter light to look white — perfect camouflage in snow.",
    deeper: "Their hairs aren't really white at all; they're clear and hollow. The white we see is just trapped air reflecting light, the same reason snow looks white.",
    question: "What's something you assumed was one color and turned out to be another?",
  },
  {
    text: "🐀 Naked mole rats almost never get cancer and can live 30+ years.",
    tags: ["mole rat", "naked mole rat", "cancer", "age", "long-lived"],
    why: "Their cells produce an unusual sugar called high-molecular-weight hyaluronan that prevents cells from clumping together to form tumors.",
    deeper: "They also feel almost no pain from acid or capsaicin, survive nearly 18 minutes without oxygen, and live underground in colonies like insects, with a single breeding queen.",
    question: "If you could borrow one biological superpower from another animal, what would it be?",
  },
  {
    text: "🦎 Axolotls can regrow limbs, organs, and parts of their brain.",
    tags: ["axolotl", "axolotls", "regrow", "regenerate", "limb"],
    why: "Their cells dedifferentiate — they revert to a kind of stem cell state, then rebuild the exact structure that was lost, including nerves and bone.",
    deeper: "Axolotls stay in their larval form their entire lives, a trait called 'neoteny.' It's like a tadpole that becomes a parent without ever becoming a frog.",
    question: "If you could regrow one thing — a limb, a memory, a moment — what would it be?",
  },
  {
    text: "🐈 Cats can't taste sweetness.",
    tags: ["cat", "cats", "sweet", "taste", "sugar"],
    why: "They have a broken gene for the sweet-taste receptor. Since cats are obligate carnivores, evolution never bothered keeping it.",
    deeper: "If your cat seems excited about ice cream, it's almost certainly the fat or dairy — not the sugar. They literally can't experience that flavor.",
    question: "What's a sense or experience you'd hate to live without?",
  },
];

const timePage = document.getElementById("time-page");
const homePage = document.getElementById("home-page");
const freeTimeInput = document.getElementById("freeTime");
const freeTimeClock = document.getElementById("freeTimeClock");
const continueBtn = document.getElementById("continueBtn");
const factBtn = document.getElementById("factBtn");
const backBtn = document.getElementById("backBtn");
const factText = document.getElementById("factText");
const userPlan = document.getElementById("userPlan");
const counterEl = document.getElementById("counter");
const chatLog = document.getElementById("chatLog");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chipRow = document.getElementById("chipRow");
const notifStatus = document.getElementById("notifStatus");
const testNotifBtn = document.getElementById("testNotifBtn");

let lastIndex = -1;
let currentFact = null;
let factsSeen = 0;
let scheduledTimer = null;
const STORAGE_KEY = "animalFactFreeTime";
const STORAGE_CLOCK_KEY = "animalFactFreeClock";

function showHome(answer) {
  const lower = answer.toLowerCase();
  const startsWithPrep = ["at","on","in","before","after","during","when","while"].some(p => lower.startsWith(p + " "));
  userPlan.textContent = answer
    ? `Great — we'll catch you ${startsWithPrep ? answer : "during " + answer}.`
    : "";
  timePage.classList.remove("active");
  homePage.classList.add("active");
}

function showTime() {
  homePage.classList.remove("active");
  timePage.classList.add("active");
  freeTimeInput.focus();
}

function randomFact() {
  let i;
  do {
    i = Math.floor(Math.random() * facts.length);
  } while (i === lastIndex && facts.length > 1);
  lastIndex = i;
  currentFact = facts[i];

  factText.classList.add("fade");
  setTimeout(() => {
    factText.textContent = currentFact.text;
    factText.classList.remove("fade");
  }, 200);

  factsSeen += 1;
  counterEl.textContent = `Facts learned: ${factsSeen}`;

  const factLeads = [
    "Here's something new for you:",
    "Did you know —",
    "Try this one on:",
    "Ready? Here's a fresh one:",
    "Okay, this one is wild:",
    "Bet you haven't heard this:",
    "From the curious corners of biology:",
  ];
  addBotMessage(`${pick("factLead", factLeads)} ${currentFact.text}`);
  addBotMessage(currentFact.question);
  renderChips(pickChips());
}

function addMessage(text, role) {
  const div = document.createElement("div");
  div.className = `msg ${role}`;
  div.textContent = text;
  chatLog.appendChild(div);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function addBotMessage(text) { addMessage(text, "bot"); }
function addUserMessage(text) { addMessage(text, "user"); }

function renderChips(labels) {
  chipRow.innerHTML = "";
  labels.forEach(label => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chip";
    b.textContent = label;
    b.addEventListener("click", () => handleUserInput(label));
    chipRow.appendChild(b);
  });
}

// Pools of phrasings — each call to pick() returns a random one
// that hasn't been used immediately before (per-pool memory).
const recent = {};
function pick(key, options) {
  const last = recent[key];
  const choices = options.length > 1 ? options.filter(o => o !== last) : options;
  const choice = choices[Math.floor(Math.random() * choices.length)];
  recent[key] = choice;
  return choice;
}

const phrases = {
  whyLead: [
    "Here's the science:",
    "Great question.",
    "The reason is actually pretty cool —",
    "So the answer is:",
    "Turns out:",
    "Funny you ask —",
    "Here's why:",
  ],
  deeperLead: [
    "Want a layer deeper? Try this:",
    "Here's the part most people miss —",
    "And here's where it gets weirder:",
    "Going one level further:",
    "If that surprised you, this will too —",
    "There's a connection I love about this —",
  ],
  unknownLead: [
    "Totally fair — most people haven't thought about it. Here's a hint:",
    "No pressure! Here's something to nudge you:",
    "Honestly, that's the most common answer. A clue:",
    "That's okay — try this lens:",
  ],
  thanks: [
    "Glad you liked it. Want another? Tap 🎲 New fact, or share what you're thinking.",
    "Anytime. Want me to find you something stranger?",
    "Happy to. Ready for the next one?",
    "Cheers! Curiosity stays sharp when you keep feeding it — want another fact?",
  ],
  onTopic: [
    "Good thinking. Here's a layer most people miss —",
    "Nice — you're already curious about this one. Going deeper:",
    "I love that you noticed. Here's something else:",
    "You're warm. Try this:",
  ],
  reflective: [
    "Interesting take. What made you think of that?",
    "I like that. What do you think would change if it were the opposite?",
    "That's a curious thought. Where do you first remember hearing that idea?",
    "Hmm — and what would you want to find out next?",
    "Tell me more — what feels true about that for you?",
    "That's a great angle. What's a question that follows from it?",
    "Genuinely curious — what would you compare it to?",
    "Nice. If you had to explain that to a kid, how would you say it?",
  ],
  comingUp: [
    "Coming up...",
    "On it — pulling a new one...",
    "Let me find you something good...",
    "Searching the animal kingdom...",
    "One curious moment, please...",
  ],
  empty: [
    "Tap 🎲 New fact and I'll share something surprising — then we can dig into it.",
    "Hit 🎲 New fact to start. I've got plenty.",
    "We need a fact first! Tap 🎲 New fact and we'll go from there.",
  ],
};

const chipSets = [
  ["Why?", "Tell me more", "🎲 New fact"],
  ["But why?", "Go deeper", "🎲 New fact"],
  ["Explain it to me", "What else?", "🎲 New fact"],
  ["How does that work?", "More like this", "🎲 New fact"],
  ["Why though?", "Surprise me again", "🎲 New fact"],
];

function pickChips() {
  return pick("chips", chipSets);
}

function botReply(userText) {
  const t = userText.toLowerCase().trim();

  if (!currentFact) {
    return pick("empty", phrases.empty);
  }

  if (t === "🎲 new fact" || t === "new fact" || t === "another" || t === "next" || t === "surprise me again") {
    setTimeout(randomFact, 200);
    return pick("comingUp", phrases.comingUp);
  }

  if (/^(why|how come|how does|how do|how can|but why|why though|explain)\b/.test(t) || t === "why?" || t === "why") {
    return `${pick("whyLead", phrases.whyLead)} ${currentFact.why}`;
  }
  if (/(tell me more|more|deeper|cool|interesting|wow|really|details|fascinating|go deeper|what else|more like this)/.test(t)) {
    return `${pick("deeperLead", phrases.deeperLead)} ${currentFact.deeper}`;
  }
  if (/(don'?t know|not sure|idk|no idea|hmm)/.test(t)) {
    return `${pick("unknownLead", phrases.unknownLead)} ${currentFact.why}`;
  }
  if (/(thank|thanks|awesome|neat|love it|amazing|nice|great)/.test(t)) {
    return pick("thanks", phrases.thanks);
  }

  const onTopic = currentFact.tags.some(tag => t.includes(tag));
  if (onTopic) {
    return `${pick("onTopic", phrases.onTopic)} ${currentFact.deeper}`;
  }

  return pick("reflective", phrases.reflective);
}

function handleUserInput(text) {
  const trimmed = text.trim();
  if (!trimmed) return;
  addUserMessage(trimmed);
  chatInput.value = "";
  const reply = botReply(trimmed);
  setTimeout(() => {
    addBotMessage(reply);
    renderChips(pickChips());
  }, 350);
}

continueBtn.addEventListener("click", async () => {
  const answer = freeTimeInput.value.trim();
  const clock = freeTimeClock.value;
  if (!answer) {
    freeTimeInput.focus();
    freeTimeInput.style.borderColor = "#e17055";
    return;
  }
  if (!clock) {
    freeTimeClock.focus();
    freeTimeClock.style.borderColor = "#e17055";
    return;
  }
  try {
    localStorage.setItem(STORAGE_KEY, answer);
    localStorage.setItem(STORAGE_CLOCK_KEY, clock);
  } catch (e) {}
  showHome(answer);
  addBotMessage("Welcome! I'm your curiosity companion. I'll share a surprising animal fact, then we can chat about it — ask why, dig deeper, or just share what you think.");
  randomFact();
  await requestNotificationPermission();
  scheduleDailyReminder(clock);
  updateNotifStatus(clock);
});

freeTimeInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") continueBtn.click();
  freeTimeInput.style.borderColor = "";
});

factBtn.addEventListener("click", randomFact);
backBtn.addEventListener("click", showTime);

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleUserInput(chatInput.value);
});

async function requestNotificationPermission() {
  if (!("Notification" in window)) return "unsupported";
  if (Notification.permission === "granted") return "granted";
  if (Notification.permission === "denied") return "denied";
  try {
    const result = await Notification.requestPermission();
    return result;
  } catch (e) {
    return "denied";
  }
}

function showNotification(title, body) {
  if (!("Notification" in window)) return;
  if (Notification.permission !== "granted") return;
  try {
    new Notification(title, { body, icon: undefined });
  } catch (e) { /* some browsers block constructor in non-secure contexts */ }
}

function msUntilNextOccurrence(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  const now = new Date();
  const target = new Date();
  target.setHours(h, m, 0, 0);
  if (target <= now) target.setDate(target.getDate() + 1);
  return target.getTime() - now.getTime();
}

function scheduleDailyReminder(hhmm) {
  if (!hhmm) return;
  if (scheduledTimer) clearTimeout(scheduledTimer);
  const delay = msUntilNextOccurrence(hhmm);
  scheduledTimer = setTimeout(() => {
    showNotification("🐾 Curiosity break time!", "You have a few minutes — come learn a new animal fact.");
    scheduleDailyReminder(hhmm); // schedule the next day
  }, delay);
}

function formatClock(hhmm) {
  if (!hhmm) return "";
  const [h, m] = hhmm.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = ((h + 11) % 12) + 1;
  return `${hour12}:${String(m).padStart(2, "0")} ${period}`;
}

function updateNotifStatus(hhmm) {
  if (!notifStatus) return;
  const time = formatClock(hhmm);
  if (!("Notification" in window)) {
    notifStatus.textContent = "Notifications aren't supported in this browser.";
    notifStatus.className = "notif-status off";
    return;
  }
  if (Notification.permission === "granted") {
    notifStatus.textContent = `🔔 Daily reminder set for ${time}. Keep this tab open.`;
    notifStatus.className = "notif-status on";
  } else if (Notification.permission === "denied") {
    notifStatus.textContent = "Notifications are blocked. Enable them in your browser settings to get reminders.";
    notifStatus.className = "notif-status off";
  } else {
    notifStatus.textContent = `Reminder time: ${time}. Allow notifications to get pinged.`;
    notifStatus.className = "notif-status";
  }
}

if (testNotifBtn) {
  testNotifBtn.addEventListener("click", async () => {
    const perm = await requestNotificationPermission();
    if (perm === "granted") {
      showNotification("🐾 Test reminder", "This is what your curiosity break will look like.");
    }
    const clock = (() => { try { return localStorage.getItem(STORAGE_CLOCK_KEY); } catch (e) { return null; } })();
    updateNotifStatus(clock);
  });
}

const saved = (() => { try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; } })();
const savedClock = (() => { try { return localStorage.getItem(STORAGE_CLOCK_KEY); } catch (e) { return null; } })();
if (saved) {
  freeTimeInput.value = saved;
  if (savedClock) freeTimeClock.value = savedClock;
  showHome(saved);
  addBotMessage(`Welcome back. I remember you said: "${saved}". Ready for something new?`);
  randomFact();
  if (savedClock) {
    scheduleDailyReminder(savedClock);
    updateNotifStatus(savedClock);
  }
}
