const roomsData = {
    livingRoom: {
        title: "Ruang Tamu",
        subtitle: "Living Room",
        items: [
            { id: "sofa", english: "Sofa", indonesian: "Sofa", emoji: "🛋️", x: 15, y: 55 },
            { id: "tv", english: "Television", indonesian: "Televisi", emoji: "📺", x: 75, y: 35 },
            { id: "table", english: "Coffee Table", indonesian: "Meja Tamu", emoji: "🪑", x: 35, y: 65 },
            { id: "lamp", english: "Lamp", indonesian: "Lampu", emoji: "💡", x: 85, y: 20 },
            { id: "clock", english: "Wall Clock", indonesian: "Jam Dinding", emoji: "🕐", x: 50, y: 15 },
            { id: "vase", english: "Vase", indonesian: "Vas Bunga", emoji: "🏺", x: 60, y: 55 },
            { id: "carpet", english: "Carpet", indonesian: "Karpet", emoji: "🟫", x: 40, y: 80 },
            { id: "curtain", english: "Curtain", indonesian: "Gorden", emoji: "🪟", x: 10, y: 25 }
        ]
    },
    diningRoom: {
        title: "Ruang Makan",
        subtitle: "Dining Room",
        items: [
            { id: "dining_table", english: "Dining Table", indonesian: "Meja Makan", emoji: "🪑", x: 50, y: 55 },
            { id: "chair", english: "Chair", indonesian: "Kursi", emoji: "🪑", x: 30, y: 60 },
            { id: "plate", english: "Plate", indonesian: "Piring", emoji: "🍽️", x: 45, y: 50 },
            { id: "glass", english: "Glass", indonesian: "Gelas", emoji: "🥛", x: 55, y: 48 },
            { id: "spoon", english: "Spoon", indonesian: "Sendok", emoji: "🥄", x: 60, y: 52 },
            { id: "fork", english: "Fork", indonesian: "Garpu", emoji: "🍴", x: 40, y: 52 },
            { id: "napkin", english: "Napkin", indonesian: "Serbet", emoji: "🧻", x: 70, y: 45 },
            { id: "cabinet", english: "Cabinet", indonesian: "Lemari", emoji: "🗄️", x: 85, y: 40 }
        ]
    },
    bedroom: {
        title: "Kamar Tidur",
        subtitle: "Bedroom",
        items: [
            { id: "bed", english: "Bed", indonesian: "Tempat Tidur", emoji: "🛏️", x: 50, y: 55 },
            { id: "pillow", english: "Pillow", indonesian: "Bantal", emoji: "🛋️", x: 35, y: 48 },
            { id: "blanket", english: "Blanket", indonesian: "Selimut", emoji: "🧣", x: 55, y: 60 },
            { id: "wardrobe", english: "Wardrobe", indonesian: "Lemari Pakaian", emoji: "🚪", x: 85, y: 40 },
            { id: "mirror", english: "Mirror", indonesian: "Cermin", emoji: "🪞", x: 15, y: 35 },
            { id: "desk", english: "Desk", indonesian: "Meja Belajar", emoji: "🪑", x: 20, y: 60 },
            { id: "fan", english: "Fan", indonesian: "Kipas Angin", emoji: "🌀", x: 50, y: 15 },
            { id: "alarm", english: "Alarm Clock", indonesian: "Jam Weker", emoji: "⏰", x: 70, y: 45 }
        ]
    },
    bathroom: {
        title: "Kamar Mandi",
        subtitle: "Bathroom",
        items: [
            { id: "toilet", english: "Toilet", indonesian: "Toilet", emoji: "🚽", x: 75, y: 55 },
            { id: "sink", english: "Sink", indonesian: "Wastafel", emoji: "🚰", x: 25, y: 45 },
            { id: "shower", english: "Shower", indonesian: "Pancuran", emoji: "🚿", x: 50, y: 30 },
            { id: "towel", english: "Towel", indonesian: "Handuk", emoji: "🧴", x: 15, y: 35 },
            { id: "soap", english: "Soap", indonesian: "Sabun", emoji: "🧼", x: 35, y: 50 },
            { id: "bucket", english: "Bucket", indonesian: "Ember", emoji: "🪣", x: 60, y: 70 },
            { id: "toothbrush", english: "Toothbrush", indonesian: "Sikat Gigi", emoji: "🪥", x: 30, y: 40 },
            { id: "bathtub", english: "Bathtub", indonesian: "Bak Mandi", emoji: "🛁", x: 45, y: 60 }
        ]
    },
    prayerRoom: {
        title: "Ruang Sholat",
        subtitle: "Prayer Room",
        items: [
            { id: "prayermat", english: "Prayer Mat", indonesian: "Sajadah", emoji: "🧎", x: 50, y: 60 },
            { id: "quran", english: "Quran", indonesian: "Al-Quran", emoji: "📖", x: 30, y: 45 },
            { id: "mukena", english: "Prayer Veil", indonesian: "Mukena", emoji: "👘", x: 75, y: 40 },
            { id: "tasbih", english: "Prayer Beads", indonesian: "Tasbih", emoji: "📿", x: 60, y: 50 },
            { id: "shelf", english: "Shelf", indonesian: "Rak", emoji: "📚", x: 85, y: 30 },
            { id: "compass", english: "Qibla Compass", indonesian: "Arah Kiblat", emoji: "🧭", x: 50, y: 20 }
        ]
    },
    kitchen: {
        title: "Dapur",
        subtitle: "Kitchen",
        items: [
            { id: "stove", english: "Stove", indonesian: "Kompor", emoji: "🔥", x: 50, y: 45 },
            { id: "fridge", english: "Refrigerator", indonesian: "Kulkas", emoji: "🧊", x: 85, y: 40 },
            { id: "pot", english: "Pot", indonesian: "Panci", emoji: "🍲", x: 45, y: 42 },
            { id: "fryingpan", english: "Frying Pan", indonesian: "Wajan", emoji: "🍳", x: 55, y: 42 },
            { id: "knife", english: "Knife", indonesian: "Pisau", emoji: "🔪", x: 30, y: 50 },
            { id: "cuttingboard", english: "Cutting Board", indonesian: "Telenan", emoji: "🪵", x: 25, y: 55 },
            { id: "ricecooker", english: "Rice Cooker", indonesian: "Penanak Nasi", emoji: "🍚", x: 70, y: 48 },
            { id: "kettle", english: "Kettle", indonesian: "Ketel", emoji: "🫖", x: 60, y: 50 },
            { id: "blender", english: "Blender", indonesian: "Blender", emoji: "🧃", x: 15, y: 45 },
            { id: "kitchensink", english: "Kitchen Sink", indonesian: "Bak Cuci", emoji: "🚰", x: 20, y: 60 }
        ]
    }
};

let learnedItems = new Set();
let currentRoom = null;
let quizQuestions = [];
let currentQuizIndex = 0;
let quizScore = 0;

function getTotalItems() {
    let total = 0;
    Object.values(roomsData).forEach(room => total += room.items.length);
    return total;
}

function updateProgress() {
    const total = getTotalItems();
    const learned = learnedItems.size;
    const percent = total > 0 ? (learned / total) * 100 : 0;
    
    document.getElementById('progressBar').style.width = `${percent}%`;
    document.getElementById('progressText').textContent = `${learned}/${total}`;

    Object.keys(roomsData).forEach(roomId => {
        const room = roomsData[roomId];
        const roomLearned = room.items.filter(item => learnedItems.has(`${roomId}-${item.id}`)).length;
        const countEl = document.getElementById(`${roomId}Count`);
        if (countEl) {
            countEl.textContent = `${roomLearned}/${room.items.length} item`;
            if (roomLearned === room.items.length) {
                countEl.classList.add('bg-green-100', 'text-green-700');
            }
        }
    });
}

function openRoom(roomId) {
    currentRoom = roomId;
    const room = roomsData[roomId];
    document.getElementById('mainMenu').classList.add('hidden');
    document.getElementById('roomView').classList.remove('hidden');
    document.getElementById('quizView').classList.add('hidden');
    document.getElementById('roomTitle').textContent = room.title;
    document.getElementById('roomSubtitle').textContent = room.subtitle;
    renderRoom(roomId);
    renderItemsList(roomId);
}

function renderRoom(roomId) {
    const room = roomsData[roomId];
    const scene = document.getElementById('roomScene');
    
    const dots = scene.querySelectorAll('.item-dot');
    dots.forEach(dot => dot.remove());

    room.items.forEach(item => {
        const dot = document.createElement('div');
        const isLearned = learnedItems.has(`${roomId}-${item.id}`);
        dot.className = `item-dot absolute w-10 h-10 rounded-full flex items-center justify-center text-2xl ${isLearned ? 'bg-green-400 ring-2 ring-green-600' : 'bg-yellow-400 ring-2 ring-yellow-600'}`;
        dot.style.left = `${item.x}%`;
        dot.style.top = `${item.y}%`;
        dot.style.transform = 'translate(-50%, -50%)';
        dot.textContent = item.emoji;

        dot.onclick = (e) => {
            e.stopPropagation();
            markAsLearned(roomId, item.id);
            speakWord(item.english);
        };
        
        dot.onmouseenter = (e) => showTooltip(e, item);
        dot.onmouseleave = hideTooltip;
        
        scene.appendChild(dot);
    });
}

function renderItemsList(roomId) {
    const room = roomsData[roomId];
    const list = document.getElementById('itemsList');
    list.innerHTML = '';

    room.items.forEach(item => {
        const isLearned = learnedItems.has(`${roomId}-${item.id}`);
        const div = document.createElement('div');
        div.className = `p-2 rounded-lg border-2 cursor-pointer transition-all ${isLearned ? 'bg-green-50 border-green-300' : 'bg-gray-50 border-gray-200 hover:border-amber-400'}`;
        div.innerHTML = `
            <div class="flex items-center gap-2">
                <span class="text-xl">${item.emoji}</span>
                <div class="flex-1 min-w-0">
                    <p class="font-bold text-sm text-gray-800 truncate">${item.english}</p>
                    <p class="text-xs text-gray-500 truncate">${item.indonesian}</p>
                </div>
                ${isLearned ? '<span class="learned-badge text-green-500">✓</span>' : ''}
            </div>
        `;
        div.onclick = () => {
            markAsLearned(roomId, item.id);
            speakWord(item.english);
        };
        list.appendChild(div);
    });
}

function showTooltip(e, item) {
    const tooltip = document.getElementById('tooltip');
    document.getElementById('tooltipEnglish').textContent = item.english;
    document.getElementById('tooltipIndonesian').textContent = item.indonesian;
    document.getElementById('tooltipEmoji').textContent = item.emoji;
    tooltip.classList.remove('hidden');

    const rect = e.target.getBoundingClientRect();
    tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
    tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
}

function hideTooltip() {
    document.getElementById('tooltip').classList.add('hidden');
}

function markAsLearned(roomId, itemId) {
    const key = `${roomId}-${itemId}`;
    if (!learnedItems.has(key)) {
        learnedItems.add(key);
        updateProgress();
        if (currentRoom === roomId) {
            renderRoom(roomId);
            renderItemsList(roomId);
        }
    }
}

function speakWord(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    }
}

function goBack() {
    document.getElementById('mainMenu').classList.remove('hidden');
    document.getElementById('roomView').classList.add('hidden');
    document.getElementById('quizView').classList.add('hidden');
    currentRoom = null;
}

function startQuiz() {
    const allItems = [];
    Object.keys(roomsData).forEach(roomId => {
        roomsData[roomId].items.forEach(item => {
            allItems.push({ ...item, roomId, roomName: roomsData[roomId].title });
        });
    });

    quizQuestions = allItems.sort(() => Math.random() - 0.5).slice(0, 10);
    currentQuizIndex = 0;
    quizScore = 0;

    document.getElementById('mainMenu').classList.add('hidden');
    document.getElementById('roomView').classList.add('hidden');
    document.getElementById('quizView').classList.remove('hidden');
    document.getElementById('quizContent').classList.remove('hidden');
    document.getElementById('quizResult').classList.add('hidden');
    
    showQuizQuestion();
}

function showQuizQuestion() {
    if (currentQuizIndex >= quizQuestions.length) {
        showQuizResult();
        return;
    }

    const question = quizQuestions[currentQuizIndex];
    document.getElementById('quizProgress').textContent = `Soal ${currentQuizIndex + 1}/${quizQuestions.length}`;
    document.getElementById('quizEmoji').textContent = question.emoji;
    document.getElementById('quizHint').textContent = `Petunjuk: Ditemukan di ${question.roomName}`;

    const allOptions = [];
    Object.values(roomsData).forEach(r => r.items.forEach(i => allOptions.push(i.english)));
    
    let options = [question.english];
    while(options.length < 4) {
        let randomOpt = allOptions[Math.floor(Math.random() * allOptions.length)];
        if(!options.includes(randomOpt)) options.push(randomOpt);
    }
    options.sort(() => Math.random() - 0.5);

    const container = document.getElementById('quizOptions');
    container.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'bg-white border-2 border-purple-200 hover:border-purple-400 rounded-xl p-3 font-semibold text-gray-700 transition-all';
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(opt === question.english, btn);
        container.appendChild(btn);
    });
}

function checkAnswer(isCorrect, btn) {
    const buttons = document.querySelectorAll('#quizOptions button');
    buttons.forEach(b => b.disabled = true);

    if (isCorrect) {
        btn.classList.add('bg-green-400', 'text-white', 'border-green-500');
        quizScore++;
    } else {
        btn.classList.add('bg-red-400', 'text-white', 'border-red-500');
        buttons.forEach(b => {
            if(b.textContent === quizQuestions[currentQuizIndex].english) {
                b.classList.add('bg-green-400', 'text-white');
            }
        });
    }

    setTimeout(() => {
        currentQuizIndex++;
        showQuizQuestion();
    }, 1500);
}

function showQuizResult() {
    document.getElementById('quizContent').classList.add('hidden');
    document.getElementById('quizResult').classList.remove('hidden');
    document.getElementById('quizScore').textContent = `Skor Kamu: ${quizScore} / ${quizQuestions.length}`;
}

// Inisialisasi awal
updateProgress();