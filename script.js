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

  addBotMessage(`Here's something new for you: ${currentFact.text}`);
  addBotMessage(currentFact.question);
  renderChips(["Why?", "Tell me more", "🎲 New fact"]);
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

function botReply(userText) {
  const t = userText.toLowerCase().trim();

  if (!currentFact) {
    return "Click 🎲 New fact and I'll share something surprising — then we can dig into it.";
  }

  if (t === "🎲 new fact" || t === "new fact" || t === "another" || t === "next") {
    setTimeout(randomFact, 200);
    return "Coming up...";
  }

  // Direct intent handling
  if (/^(why|how come|how does|how do|how can)\b/.test(t) || t === "why?" || t === "why") {
    return currentFact.why;
  }
  if (/(tell me more|more|deeper|cool|interesting|wow|really|details|fascinating)/.test(t)) {
    return currentFact.deeper;
  }
  if (/(don'?t know|not sure|idk|no idea|hmm)/.test(t)) {
    return `That's a fair answer — most people haven't thought about it. Here's a hint: ${currentFact.why}`;
  }
  if (/(thank|thanks|cool|awesome|neat|love it)/.test(t)) {
    return "Glad you liked it. Want another? Tap 🎲 New fact, or share what you're thinking.";
  }

  // Topic-aware: does the user's text reference the current animal?
  const onTopic = currentFact.tags.some(tag => t.includes(tag));
  if (onTopic) {
    return `Good thinking. Here's a layer most people miss: ${currentFact.deeper}`;
  }

  // Otherwise, treat it as a reflective answer and prompt curiosity
  const prompts = [
    "Interesting take. What made you think of that?",
    "I like that. What do you think would change if it were the opposite?",
    "That's a curious thought. Where do you think you first learned that idea?",
    "Hmm — and what would you want to find out next?",
  ];
  return prompts[Math.floor(Math.random() * prompts.length)];
}

function handleUserInput(text) {
  const trimmed = text.trim();
  if (!trimmed) return;
  addUserMessage(trimmed);
  chatInput.value = "";
  const reply = botReply(trimmed);
  setTimeout(() => {
    addBotMessage(reply);
    renderChips(["Why?", "Tell me more", "🎲 New fact"]);
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
