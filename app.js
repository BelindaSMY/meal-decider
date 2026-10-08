const foods = [
  { name: "重庆小面", emoji: "🍜", moods: ["热乎", "过瘾"], maxBudget: 50, avoid: [], meals: ["午餐", "晚餐", "夜宵"], people: [1, 2], tags: ["香辣", "出餐快", "一个人也自在"], line: "热乎、带劲，一碗解决战斗", description: "一碗下肚，纠结和饥饿一起消失。" },
  { name: "寿喜锅", emoji: "🍲", moods: ["热乎", "过瘾"], maxBudget: 200, avoid: ["肉"], meals: ["晚餐"], people: [2, 3], tags: ["热气腾腾", "适合分享", "幸福感"], line: "咕嘟咕嘟，快乐很具体", description: "肉、蔬菜和甜咸汤底，适合认真犒劳今天。" },
  { name: "越南河粉", emoji: "🍜", moods: ["热乎", "清爽"], maxBudget: 100, avoid: [], meals: ["午餐", "晚餐"], people: [1, 2], tags: ["清爽", "暖胃", "不油腻"], line: "有温度，也有清新感", description: "清亮汤底配香草和青柠，是没有负担的满足。" },
  { name: "日式咖喱饭", emoji: "🍛", moods: ["热乎", "过瘾"], maxBudget: 50, avoid: ["碳水"], meals: ["午餐", "晚餐"], people: [1, 2], tags: ["浓郁", "饱腹", "稳定发挥"], line: "今天需要一点踏实的满足", description: "浓郁咖喱裹住米饭，给忙碌的一天稳稳收尾。" },
  { name: "泰式冬阴功", emoji: "🥘", moods: ["热乎", "惊喜", "过瘾"], maxBudget: 100, avoid: ["海鲜", "辣"], meals: ["午餐", "晚餐"], people: [2, 3], tags: ["酸辣", "开胃", "东南亚风味"], line: "酸、辣、香，唤醒没精神的胃", description: "层次丰富的酸辣汤，适合想把平淡一天吃出亮点。" },
  { name: "广式烧腊饭", emoji: "🍱", moods: ["过瘾"], maxBudget: 50, avoid: ["肉", "碳水"], meals: ["午餐", "晚餐"], people: [1, 2], tags: ["高效率", "肉食快乐", "性价比"], line: "不绕弯子，直接吃满足", description: "油亮烧味配米饭，适合饿得没有耐心的时候。" },
  { name: "云南菌菇锅", emoji: "🍄", moods: ["热乎", "惊喜", "清爽"], maxBudget: 200, avoid: [], meals: ["晚餐"], people: [2, 3], tags: ["鲜美", "适合聚餐", "有仪式感"], line: "山野鲜味，值得慢慢吃", description: "一锅鲜菌把朋友聚在一起，也把疲惫留在锅外。" },
  { name: "韩式烤肉", emoji: "🥩", moods: ["过瘾"], maxBudget: 200, avoid: ["肉"], meals: ["晚餐", "夜宵"], people: [2, 3], tags: ["肉食", "聚餐", "快乐加倍"], line: "今天的烦恼，烤熟了吃掉", description: "滋滋作响的烤肉最适合一群人把气氛点燃。" },
  { name: "麻辣烫", emoji: "🍢", moods: ["热乎", "过瘾"], maxBudget: 50, avoid: ["辣"], meals: ["午餐", "晚餐", "夜宵"], people: [1, 2], tags: ["自由搭配", "热乎", "丰俭由人"], line: "想吃什么，自己夹进碗里", description: "蔬菜、丸子和主食自由组合，选择很多却不必纠结。" },
  { name: "海南鸡饭", emoji: "🍗", moods: ["清爽"], maxBudget: 50, avoid: ["肉", "碳水"], meals: ["午餐", "晚餐"], people: [1, 2], tags: ["清香", "鸡肉嫩滑", "舒适"], line: "简单，但每一口都很妥帖", description: "鸡油香饭配嫩滑鸡肉，是不会出错的温柔答案。" },
  { name: "地中海沙拉", emoji: "🥗", moods: ["清爽"], maxBudget: 100, avoid: ["乳制品"], meals: ["午餐", "晚餐"], people: [1, 2], tags: ["轻盈", "蔬菜丰富", "低负担"], line: "吃得轻一点，状态满一点", description: "新鲜蔬菜、谷物和优质蛋白，让饱腹与清爽兼得。" },
  { name: "素食石锅拌饭", emoji: "🥬", moods: ["热乎", "清爽"], maxBudget: 50, avoid: ["肉", "碳水"], meals: ["午餐", "晚餐"], people: [1, 2], tags: ["素食友好", "蔬菜丰富", "锅巴"], line: "五颜六色，心情也跟着亮起来", description: "丰富蔬菜在热石锅里拌匀，简单却很有满足感。" },
  { name: "墨西哥卷饼", emoji: "🌯", moods: ["惊喜", "过瘾"], maxBudget: 100, avoid: ["碳水", "乳制品"], meals: ["午餐", "晚餐"], people: [1, 2], tags: ["方便", "层次丰富", "异国风味"], line: "把丰富的一餐卷起来", description: "肉、豆、蔬菜和酱汁一口集齐，适合想换换口味。" },
  { name: "粤式早茶", emoji: "🥟", moods: ["惊喜", "清爽"], maxBudget: 100, avoid: ["海鲜"], meals: ["午餐"], people: [2, 3], tags: ["慢慢吃", "选择丰富", "适合聊天"], line: "把午饭吃成一段悠闲时光", description: "一笼一笼地点，大家分享，选择困难也变成乐趣。" },
  { name: "深夜烧烤", emoji: "🍖", moods: ["过瘾"], maxBudget: 100, avoid: ["肉"], meals: ["夜宵"], people: [2, 3], tags: ["烟火气", "夜宵", "适合聊天"], line: "夜深了，快乐才刚上桌", description: "炭火、孜然和朋友，是夜晚最有人情味的组合。" },
  { name: "番茄牛腩锅", emoji: "🍅", moods: ["热乎"], maxBudget: 100, avoid: ["肉"], meals: ["午餐", "晚餐"], people: [2, 3], tags: ["酸甜", "暖胃", "下饭"], line: "酸甜热汤，是胃里的安全感", description: "软烂牛腩和浓郁番茄汤，适合需要被安慰的一天。" }
];

const state = {
  meal: "午餐",
  people: 1,
  budget: 50,
  mood: "热乎",
  avoid: [],
  activeMember: 0,
  members: [
    { name: "我", meal: "午餐", people: 1, budget: 50, mood: "热乎", avoid: [], duelAnswers: [] }
  ],
  current: null,
  favorites: JSON.parse(localStorage.getItem("mealFavorites") || "[]")
};

const resultSection = document.querySelector("#resultSection");
const favoritesPanel = document.querySelector("#favoritesPanel");
const favoriteCount = document.querySelector("#favoriteCount");
const memberDialog = document.querySelector("#memberDialog");
const duel = document.querySelector("#duel");
const reverseIntro = document.querySelector("#reverseIntro");

const duelRounds = [
  {
    question: "今天更想要哪一种？",
    left: { emoji: "🍲", title: "热乎暖胃", detail: "汤汤水水，舒服最重要", mood: "热乎" },
    right: { emoji: "🥗", title: "清爽轻盈", detail: "吃完没有负担", mood: "清爽" }
  },
  {
    question: "这一顿更看重什么？",
    left: { emoji: "⚡", title: "快点吃到", detail: "距离近，出餐快", budget: 50 },
    right: { emoji: "✨", title: "值得期待", detail: "远一点也没关系", mood: "惊喜", budget: 100 }
  },
  {
    question: "主食更偏向哪边？",
    left: { emoji: "🍚", title: "米饭阵营", detail: "踏实、饱腹、不会错", tag: "rice" },
    right: { emoji: "🍜", title: "面食阵营", detail: "热乎、顺口、满足快", tag: "noodle" }
  },
  {
    question: "今天要克制吗？",
    left: { emoji: "🌿", title: "稍微健康点", detail: "蔬菜多，负担少", mood: "清爽" },
    right: { emoji: "🔥", title: "今天不克制", detail: "好吃和过瘾优先", mood: "过瘾" }
  },
  {
    question: "最后一个直觉选择",
    left: { emoji: "🏠", title: "熟悉的安全牌", detail: "稳定发挥，不踩雷", tag: "familiar" },
    right: { emoji: "🎲", title: "没吃过的新口味", detail: "给今天一点意外", mood: "惊喜", tag: "new" }
  }
];

let duelIndex = 0;
let duelMemberIndex = 0;
let duelAnswers = [];
let vetoAvailable = true;
let excludedFoodNames = [];

function resetVeto() {
  vetoAvailable = true;
  const button = document.querySelector("#againButton");
  button.disabled = false;
  button.textContent = "使用一次反悔权";
}

const cuisineHints = {
  "重庆小面": ["noodle", "chinese", "sichuan"],
  "寿喜锅": ["japanese", "hot_pot"],
  "越南河粉": ["vietnamese", "noodle"],
  "日式咖喱饭": ["japanese", "curry"],
  "泰式冬阴功": ["thai"],
  "广式烧腊饭": ["chinese", "cantonese"],
  "云南菌菇锅": ["hot_pot", "chinese"],
  "韩式烤肉": ["korean", "barbecue"],
  "麻辣烫": ["chinese", "hot_pot"],
  "海南鸡饭": ["chinese", "singaporean"],
  "地中海沙拉": ["mediterranean", "salad"],
  "素食石锅拌饭": ["korean", "vegetarian"],
  "墨西哥卷饼": ["mexican", "burrito"],
  "粤式早茶": ["chinese", "cantonese", "dim_sum"],
  "深夜烧烤": ["barbecue", "chinese"],
  "番茄牛腩锅": ["chinese", "hot_pot"]
};

function saveActiveMember() {
  const member = state.members[state.activeMember];
  Object.assign(member, {
    meal: state.meal,
    people: state.people,
    budget: state.budget,
    mood: state.mood,
    avoid: [...state.avoid]
  });
}

function loadMember(index) {
  saveActiveMember();
  state.activeMember = index;
  const member = state.members[index];
  state.meal = member.meal;
  state.people = member.people;
  state.budget = member.budget;
  state.mood = member.mood;
  state.avoid = [...member.avoid];

  document.querySelectorAll("[data-filter]").forEach((group) => {
    const key = group.dataset.filter;
    group.querySelectorAll("button").forEach((button) => {
      if (key === "avoid") button.classList.toggle("active", state.avoid.includes(button.dataset.value));
      else button.classList.toggle("active", String(state[key]) === button.dataset.value);
    });
  });
  renderMembers();
}

function renderMembers() {
  document.querySelector("#memberChips").innerHTML = state.members.map((member, index) => `
    <button class="member-chip ${index === state.activeMember ? "active" : ""}" type="button" data-member="${index}">
      ${member.name}${index ? '<small>×</small>' : ""}
    </button>
  `).join("");
  document.querySelector("#groupTip").textContent = state.members.length === 1
    ? "当前正在设置「我」的偏好"
    : `正在设置「${state.members[state.activeMember].name}」的偏好；推荐时会综合 ${state.members.length} 人意见`;
  document.querySelector("#quickMemberCount").textContent = `当前 ${state.members.length} 人`;
}

document.querySelectorAll(".segmented, .mood-options").forEach((group) => {
  group.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    group.querySelectorAll("button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const key = group.dataset.filter;
    state[key] = key === "people" || key === "budget" ? Number(button.dataset.value) : button.dataset.value;
    saveActiveMember();
  });
});

document.querySelector(".avoid-options").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  button.classList.toggle("active");
  state.avoid = [...document.querySelectorAll(".avoid-options button.active")].map((item) => item.dataset.value);
  saveActiveMember();
});

function scoreFood(food) {
  if (excludedFoodNames.includes(food.name)) return -100;
  let score = 0;
  for (const member of state.members) {
    if (member.avoid.some((item) => food.avoid.includes(item))) return -100;
    if (food.meals.includes(member.meal)) score += 4;
    if (food.people.includes(member.people)) score += 2;
    if (food.maxBudget <= member.budget) score += 3;
    if (food.moods.includes(member.mood)) score += member.mood === "惊喜" ? 2 : 5;
  }
  for (const answer of duelAnswers) {
    if (answer.mood && food.moods.includes(answer.mood)) score += 5;
    if (answer.budget && food.maxBudget <= answer.budget) score += 2;
    if (answer.tag === "noodle" && (food.emoji === "🍜" || food.name.includes("面"))) score += 5;
    if (answer.tag === "rice" && (food.name.includes("饭") || food.name.includes("拌饭"))) score += 5;
    if (answer.tag === "new" && food.moods.includes("惊喜")) score += 3;
    if (answer.tag === "familiar" && !food.moods.includes("惊喜")) score += 2;
  }
  return score + Math.random() * 4;
}

function decideFood() {
  saveActiveMember();
  const ranked = foods
    .map((food) => ({ food, score: scoreFood(food) }))
    .filter((item) => item.score >= 0)
    .sort((a, b) => b.score - a.score);

  const candidates = ranked.slice(0, Math.min(4, ranked.length));
  state.current = candidates.length
    ? candidates[Math.floor(Math.random() * candidates.length)].food
    : foods[Math.floor(Math.random() * foods.length)];

  renderResult();
}

function renderDuelRound() {
  const member = state.members[duelMemberIndex];
  let round = duelRounds[duelIndex];
  if (duelIndex === 2 && member.duelAnswers[0]?.mood === "清爽") {
    round = {
      question: "清爽也可以很有主见",
      left: { emoji: "🍜", title: "汤粉与河粉", detail: "有温度，但不厚重", tag: "noodle", mood: "清爽" },
      right: { emoji: "🥗", title: "沙拉与轻食", detail: "蔬菜多，身体轻", tag: "salad", mood: "清爽" }
    };
  }
  member.currentRound = round;
  document.querySelector("#duelMemberName").textContent = member.name;
  document.querySelector("#duelMemberProgress").textContent = `${duelMemberIndex + 1}/${state.members.length} 人`;
  document.querySelector("#duelQuestion").textContent = round.question;
  document.querySelector("#duelStep").textContent = duelIndex + 1;
  document.querySelector("#duelProgress").style.width = `${((duelIndex + 1) / duelRounds.length) * 100}%`;
  const buttons = [
    [document.querySelector("#duelLeft"), round.left],
    [document.querySelector("#duelRight"), round.right]
  ];
  buttons.forEach(([button, option]) => {
    button.querySelector(".duel-emoji").textContent = option.emoji;
    button.querySelector("strong").textContent = option.title;
    button.querySelector("small").textContent = option.detail;
  });
}

function startDuel() {
  duelIndex = 0;
  duelMemberIndex = 0;
  duelAnswers = [];
  excludedFoodNames = [];
  state.members.forEach((member) => {
    member.duelAnswers = [];
  });
  resetVeto();
  reverseIntro.classList.add("hidden");
  duel.classList.remove("hidden");
  renderDuelRound();
}

function chooseDuel(side) {
  const member = state.members[duelMemberIndex];
  const round = member.currentRound || duelRounds[duelIndex];
  if (side !== "neither") member.duelAnswers.push({ ...round[side], owner: member.name });
  duelIndex += 1;
  if (duelIndex >= duelRounds.length) {
    if (duelMemberIndex < state.members.length - 1) {
      duelMemberIndex += 1;
      duelIndex = 0;
      renderDuelRound();
      return;
    }
    duelAnswers = state.members.flatMap((item) => item.duelAnswers);
    duel.classList.add("hidden");
    reverseIntro.classList.remove("hidden");
    reverseIntro.querySelector("h2").textContent = "直觉收集完成，答案已经很近了";
    reverseIntro.querySelector("p").textContent = `${state.members.length} 人已经完成选择，我们正在寻找无人踩雷、总后悔值最低的答案。`;
    reverseIntro.querySelector("#reverseStartButton").innerHTML = "再测一次 <span>↻</span>";
    decideFood();
    return;
  }
  renderDuelRound();
}

document.querySelector("#reverseStartButton").addEventListener("click", startDuel);
document.querySelector("#duelLeft").addEventListener("click", () => chooseDuel("left"));
document.querySelector("#duelRight").addEventListener("click", () => chooseDuel("right"));
document.querySelector("#neitherButton").addEventListener("click", () => chooseDuel("neither"));

document.querySelector("#instantButton").addEventListener("click", () => {
  duelAnswers = [{ mood: ["热乎", "清爽", "过瘾", "惊喜"][Math.floor(Math.random() * 4)] }];
  resetVeto();
  decideFood();
});

document.querySelector("#togglePreciseButton").addEventListener("click", () => {
  const card = document.querySelector("#decisionCard");
  card.classList.toggle("collapsed");
  document.querySelector("#togglePreciseButton").textContent = card.classList.contains("collapsed")
    ? "我想认真设置条件 ↓"
    : "收起精确条件 ↑";
});

function buildReason(food) {
  const names = state.members.map((member) => member.name);
  const moodMatches = state.members.filter((member) => food.moods.includes(member.mood)).length;
  const minBudget = Math.min(...state.members.map((member) => member.budget));
  const safeForAll = state.members.every((member) => !member.avoid.some((item) => food.avoid.includes(item)));
  const groupText = names.length > 1 ? `综合了 ${names.join("、")} 的选择` : "根据你的选择";
  const points = [
    `符合 ¥${minBudget} 左右的共同预算`,
    safeForAll ? "避开了所有人的忌口" : "",
    moodMatches ? `匹配 ${moodMatches}/${state.members.length} 人今天想吃的感觉` : "带来一点计划外的惊喜"
  ].filter(Boolean);
  const method = duelAnswers.length ? `汇总 ${state.members.length} 人的 ${duelAnswers.length} 次直觉排除，` : "";
  return `${groupText}：${method}${points.join("，")}。`;
}

function memberMatch(food, member) {
  let points = 0;
  let total = 0;
  if (food.maxBudget <= member.budget) points += 2;
  total += 2;
  if (food.moods.includes(member.mood)) points += 2;
  total += 2;
  if (!member.avoid.some((item) => food.avoid.includes(item))) points += 3;
  total += 3;

  for (const answer of member.duelAnswers || []) {
    total += 1;
    if (answer.mood && food.moods.includes(answer.mood)) points += 1;
    else if (answer.tag === "noodle" && (food.emoji === "🍜" || food.name.includes("面"))) points += 1;
    else if (answer.tag === "rice" && food.name.includes("饭")) points += 1;
    else if (answer.tag === "salad" && (food.name.includes("沙拉") || food.moods.includes("清爽"))) points += 1;
    else if (answer.tag === "new" && food.moods.includes("惊喜")) points += 1;
    else if (answer.tag === "familiar" && !food.moods.includes("惊喜")) points += 1;
    else if (answer.budget && food.maxBudget <= answer.budget) points += 1;
  }
  return Math.round((points / Math.max(1, total)) * 100);
}

function renderConsensus(food) {
  const matches = state.members.map((member) => ({
    name: member.name,
    score: memberMatch(food, member)
  }));
  const rawAverage = matches.reduce((sum, item) => sum + item.score, 0) / matches.length;
  const consensus = Math.max(52, Math.min(98, Math.round(rawAverage)));
  document.querySelector("#consensusScore").textContent = `${consensus}%`;
  document.querySelector("#consensusBar").style.width = "0";
  requestAnimationFrame(() => {
    document.querySelector("#consensusBar").style.width = `${consensus}%`;
  });
  document.querySelector("#consensusMembers").innerHTML = matches.map((member) => `
    <span class="consensus-member ${member.score >= 65 ? "good" : ""}">
      ${member.name} · ${member.score >= 80 ? "很满意" : member.score >= 65 ? "可接受" : "有一点让步"}
    </span>
  `).join("");
}

function renderResult() {
  const food = state.current;
  if (!food) return;
  document.querySelector("#foodVisual").textContent = food.emoji;
  document.querySelector("#resultKicker").textContent = food.line;
  document.querySelector("#resultName").textContent = food.name;
  document.querySelector("#resultDescription").textContent = food.description;
  document.querySelector("#resultReason").textContent = buildReason(food);
  renderConsensus(food);
  document.querySelector("#resultTags").innerHTML = food.tags.map((tag) => `<span>${tag}</span>`).join("");
  document.querySelector("#mapButton").href = `https://www.google.com/maps/search/${encodeURIComponent(`附近 ${food.name}`)}`;
  document.querySelector("#saveResultButton").classList.toggle("saved", state.favorites.some((item) => item.name === food.name));
  document.querySelector("#saveResultButton").textContent = state.favorites.some((item) => item.name === food.name) ? "♥" : "♡";
  resultSection.classList.remove("hidden");
  document.querySelector("#restaurantList").innerHTML = "";
  document.querySelector("#locationStatus").textContent = "允许定位后，将从 OpenStreetMap 查询附近真实餐厅。";
  requestAnimationFrame(() => resultSection.scrollIntoView({ behavior: "smooth", block: "center" }));
}

function distanceKm(lat1, lon1, lat2, lon2) {
  const toRad = (value) => value * Math.PI / 180;
  const radius = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2
    + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return radius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

async function fetchNearbyRestaurants(latitude, longitude) {
  const status = document.querySelector("#locationStatus");
  const list = document.querySelector("#restaurantList");
  status.textContent = "正在搜索 3 公里内的真实餐厅…";
  list.innerHTML = "";

  const query = `[out:json][timeout:20];
    (
      nwr["amenity"~"restaurant|fast_food"](around:3000,${latitude},${longitude});
    );
    out center tags;`;
  const response = await fetch(`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`);
  if (!response.ok) throw new Error("restaurant lookup failed");
  const data = await response.json();
  const hints = cuisineHints[state.current.name] || [];
  const restaurants = data.elements
    .map((item) => {
      const lat = item.lat ?? item.center?.lat;
      const lon = item.lon ?? item.center?.lon;
      const cuisine = (item.tags?.cuisine || "").toLowerCase();
      return {
        name: item.tags?.["name:zh"] || item.tags?.name || "未命名餐厅",
        cuisine,
        lat,
        lon,
        distance: lat && lon ? distanceKm(latitude, longitude, lat, lon) : 99,
        match: hints.some((hint) => cuisine.includes(hint))
      };
    })
    .filter((item) => item.lat && item.lon)
    .sort((a, b) => Number(b.match) - Number(a.match) || a.distance - b.distance)
    .slice(0, 6);

  if (!restaurants.length) {
    status.textContent = "附近暂时没有查询到餐厅数据，可以使用地图搜索。";
    return;
  }

  status.textContent = `已找到 ${restaurants.length} 个附近选项，优先展示与「${state.current.name}」相近的餐厅。`;
  list.innerHTML = restaurants.map((restaurant) => `
    <article class="restaurant-item">
      <strong>${restaurant.name}</strong>
      <small>${restaurant.cuisine ? restaurant.cuisine.replaceAll(";", " · ") : "餐厅"} · ${restaurant.distance.toFixed(1)} km</small>
      <a href="https://www.openstreetmap.org/?mlat=${restaurant.lat}&mlon=${restaurant.lon}#map=18/${restaurant.lat}/${restaurant.lon}" target="_blank" rel="noreferrer">在地图中查看 ↗</a>
    </article>
  `).join("");
}

document.querySelector("#locationButton").addEventListener("click", () => {
  if (!state.current) return;
  const status = document.querySelector("#locationStatus");
  if (!navigator.geolocation) {
    status.textContent = "当前浏览器不支持定位。";
    return;
  }
  status.textContent = "正在获取你的位置…";
  navigator.geolocation.getCurrentPosition(
    ({ coords }) => fetchNearbyRestaurants(coords.latitude, coords.longitude)
      .catch(() => { status.textContent = "餐厅数据查询失败，请稍后再试或使用地图搜索。"; }),
    () => { status.textContent = "未获得定位权限；菜品推荐仍然可以正常使用。"; },
    { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 }
  );
});

document.querySelector("#memberChips").addEventListener("click", (event) => {
  const chip = event.target.closest("[data-member]");
  if (!chip) return;
  const index = Number(chip.dataset.member);
  if (event.target.closest("small") && index > 0) {
    state.members.splice(index, 1);
    loadMember(Math.max(0, Math.min(state.activeMember, state.members.length - 1)));
    return;
  }
  loadMember(index);
});

document.querySelector("#addMemberButton").addEventListener("click", () => {
  document.querySelector("#memberName").value = "";
  memberDialog.showModal();
  setTimeout(() => document.querySelector("#memberName").focus(), 50);
});

document.querySelector("#quickAddMemberButton").addEventListener("click", () => {
  document.querySelector("#memberName").value = "";
  memberDialog.showModal();
  setTimeout(() => document.querySelector("#memberName").focus(), 50);
});

document.querySelector("#confirmMemberButton").addEventListener("click", () => {
  const name = document.querySelector("#memberName").value.trim();
  if (!name) {
    document.querySelector("#memberName").focus();
    return;
  }
  saveActiveMember();
  state.members.push({ name, meal: state.meal, people: state.people, budget: state.budget, mood: "惊喜", avoid: [], duelAnswers: [] });
  memberDialog.close();
  loadMember(state.members.length - 1);
});

function updateFavorites() {
  localStorage.setItem("mealFavorites", JSON.stringify(state.favorites));
  favoriteCount.textContent = state.favorites.length;
  const list = document.querySelector("#favoriteList");
  if (!state.favorites.length) {
    list.innerHTML = '<div class="empty-state">还没有收藏。遇到心动答案时，点一下爱心吧。</div>';
    return;
  }
  list.innerHTML = state.favorites.map((food) => `
    <div class="favorite-item">
      <span class="emoji">${food.emoji}</span>
      <div><strong>${food.name}</strong><small>${food.tags.slice(0, 2).join(" · ")}</small></div>
      <button type="button" data-remove="${food.name}" aria-label="删除 ${food.name}">×</button>
    </div>
  `).join("");
}

document.querySelector("#decideButton").addEventListener("click", decideFood);
document.querySelector("#againButton").addEventListener("click", (event) => {
  if (!vetoAvailable) {
    event.stopImmediatePropagation();
    return;
  }
  if (state.current) excludedFoodNames.push(state.current.name);
  decideFood();
  vetoAvailable = false;
  event.currentTarget.textContent = "匿名否决已使用";
  event.currentTarget.disabled = true;
});

document.querySelector("#saveResultButton").addEventListener("click", () => {
  if (!state.current) return;
  const index = state.favorites.findIndex((item) => item.name === state.current.name);
  if (index >= 0) state.favorites.splice(index, 1);
  else state.favorites.push(state.current);
  updateFavorites();
  renderResult();
});

document.querySelector("#favoriteList").addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove]");
  if (!button) return;
  state.favorites = state.favorites.filter((item) => item.name !== button.dataset.remove);
  updateFavorites();
});

document.querySelector("#favoritesButton").addEventListener("click", () => {
  favoritesPanel.classList.toggle("hidden");
  if (!favoritesPanel.classList.contains("hidden")) {
    favoritesPanel.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});

document.querySelector("#closeFavoritesButton").addEventListener("click", () => favoritesPanel.classList.add("hidden"));

document.querySelector("#themeButton").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const dark = document.body.classList.contains("dark");
  document.querySelector("#themeButton").textContent = dark ? "☾" : "☀";
  localStorage.setItem("mealTheme", dark ? "dark" : "light");
});

document.querySelector("#resetButton").addEventListener("click", () => {
  state.meal = "午餐";
  state.people = 1;
  state.budget = 50;
  state.mood = "热乎";
  state.avoid = [];
  state.members = [{ name: "我", meal: "午餐", people: 1, budget: 50, mood: "热乎", avoid: [], duelAnswers: [] }];
  state.activeMember = 0;
  document.querySelectorAll("[data-filter]").forEach((group) => {
    group.querySelectorAll("button").forEach((button) => button.classList.remove("active"));
  });
  document.querySelector('[data-filter="meal"] [data-value="午餐"]').classList.add("active");
  document.querySelector('[data-filter="people"] [data-value="1"]').classList.add("active");
  document.querySelector('[data-filter="budget"] [data-value="50"]').classList.add("active");
  document.querySelector('[data-filter="mood"] [data-value="热乎"]').classList.add("active");
  resultSection.classList.add("hidden");
  renderMembers();
});

if (localStorage.getItem("mealTheme") === "dark") {
  document.body.classList.add("dark");
  document.querySelector("#themeButton").textContent = "☾";
}

updateFavorites();
renderMembers();
