// 모달 제어
const modal = document.getElementById('modal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');

openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

// ESC 키로 모달 닫기
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modal.classList.remove('active');
    }
});

// 입력 시스템 + 로컬 스토리지
let contentList = JSON.parse(localStorage.getItem('contents')) || [];

function saveToLocalStorage() {
    localStorage.setItem('contents', JSON.stringify(contentList));
}

function addContent() {
    const input = document.getElementById('userInput');
    const textarea = document.getElementById('userTextarea');

    if (!input.value && !textarea.value) {
        input.classList.add('shake');
        setTimeout(() => input.classList.remove('shake'), 400);
        return;
    }

    const content = {
        text: input.value,
        note: textarea.value,
        date: new Date().toLocaleString(),
        id: Date.now()
    };

    contentList.push(content);
    saveToLocalStorage();
    renderResults();
    clearForm();
}

function deleteLast() {
    if (contentList.length > 0) {
        contentList.pop();
        saveToLocalStorage();
        renderResults();
    } else {
        document.getElementById('results').classList.add('shake');
        setTimeout(() => document.getElementById('results').classList.remove('shake'), 400);
    }
}

// 검색 기능
document.getElementById('searchInput').addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase();
    const filtered = contentList.filter(item =>
        item.text.toLowerCase().includes(keyword) ||
        item.note.toLowerCase().includes(keyword)
    );
    renderResults(filtered);
});

// 테마 토글
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    themeToggle.innerHTML = document.body.dataset.theme === 'dark' ?
        '<i class="fas fa-sun"></i>' :
        '<i class="fas fa-moon"></i>';
});

// 초기 로드
function init() {
    // 테마 설정 (기본 라이트 모드)
    if (!document.body.dataset.theme) {
        document.body.dataset.theme = 'light';
    }
    renderResults();
}

// 렌더링 함수
function renderResults(data = contentList) {
    const container = document.getElementById('results');
    container.innerHTML = '<h3>입력 기록</h3>';

    if (data.length === 0) {
        container.innerHTML += '<p style="color:#7f8c8d">기록이 없습니다</p>';
        return;
    }

    data.slice().reverse().forEach((content, index) => {
        const card = document.createElement('div');
        card.className = 'result-card';
        card.innerHTML = `
      <div class="result-meta">
        <span>#${contentList.length - index}</span>
        <span>${content.date}</span>
      </div>
      <div class="result-content">
        <strong>${content.text || '텍스트 없음'}</strong>
        ${content.note ? `<p>${content.note}</p>` : ''}
      </div>
    `;
        container.appendChild(card);
    });
}

function clearForm() {
    document.getElementById('userInput').value = '';
    document.getElementById('userTextarea').value = '';
}

function addEmoji(emoji) {
    const input = document.getElementById('userInput');
    input.value += emoji;
    input.focus();
}

// 엔터키 지원
document.getElementById('userInput').addEventListener('keyup', function (e) {
    if (e.key === 'Enter') addContent();
});

// 초기화
init();

// 파일 업로드 기능
document.getElementById('fileInput').addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (!file) return;

    showToast(`파일 선택: ${file.name}`);
    simulateUpload(file);
});

function simulateUpload(file) {
    let progress = 0;
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');

    const uploadInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(uploadInterval);
            showToast('업로드 완료!');
        }

        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${Math.round(progress)}%`;
    }, 300);
}

// 기존 코드에 추가할 부분
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// 입자 효과 생성
function createParticles() {
    const particles = document.querySelector('.particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
        position: absolute;
        width: ${Math.random()*6+2}px;
        height: ${Math.random()*6+2}px;
        background: rgba(106, 140, 255, ${Math.random()*0.4});
        border-radius: 50%;
        top: ${Math.random()*100}%;
        left: ${Math.random()*100}%;
        animation: float ${Math.random()*15+10}s linear infinite;
      `;
        particles.appendChild(particle);
    }
}

// 입자 애니메이션
document.styleSheets[0].insertRule(`
    @keyframes float {
      0% { transform: translateY(0) rotate(0deg); }
      100% { transform: translateY(-100vh) rotate(360deg); }
    }
  `);

// 초기화
window.addEventListener('DOMContentLoaded', () => {
    createParticles();

    // AI 분석 표시기 랜덤 업데이트
    setInterval(() => {
        const messages = [
            "사용자 패턴 분석 중",
            "데이터 최적화 진행",
            "AI 모델 업데이트"
        ];
        document.querySelector('.ai-chip').textContent =
            messages[Math.floor(Math.random() * messages.length)];
    }, 3000);
});