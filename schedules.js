// --- DYNAMIC DATA: SCHEDULES & TODO ITEMS ---

const sprintSchedules = {
    "2026.07.06": [
        { title: "🦆 '오늘도 꽉꽉콱' 브랜드 리브랜딩 및 구글/애플 로그인 인증 오류 트러블슈팅", time: "14:00 - 17:00", tag: "dev" },
        { title: "💻 포트폴리오 디자인 리뉴얼, 다크/글로우 테마 및 Owner Zone 패스코드 잠금 구현", time: "18:00 - 22:00", tag: "dev" },
        { title: "🚀 '오늘도 꽉꽉콱' & 포트폴리오 Vercel 호스팅 이전 및 1차 배포 완료", time: "22:00 - 24:00", tag: "deploy" }
    ],
    "2026.07.07": [
        { title: "🛠️ '오늘도 꽉꽉콱' vercel.json 라우팅 구성 및 quackup.oneuldo.world 서브도메인 재배포", time: "01:00 - 02:30", tag: "deploy" },
        { title: "🌐 philog.today 도메인 설정 복구 및 Vercel 404 배포 에러 해결", time: "02:30 - 03:30", tag: "deploy" },
        { title: "📊 대시보드 연속 빌드 일수 자동 연산 및 목표 달성률 투두 연동 동적 구현", time: "03:30 - 04:10", tag: "dev" },
        { title: "📝 필로그 블로그 페이지 설계", time: "14:00 - 15:30", tag: "design" },
        { title: "🧠 커넥트 AI 두뇌 합치기 연구", time: "15:30 - 17:00", tag: "dev" },
        { title: "📅 스터디 플래너 구축", time: "17:00 - 18:30", tag: "dev" },
        { title: "⏱️ 개발자 스케줄 기획 및 연구", time: "18:30 - 20:00", tag: "dev" }
    ],
    "2026.07.10": [
        { title: "🧪 MindLog 프롬프트 베타 사용성 테스트", time: "11:00 - 13:00", tag: "QA" }
    ],
    "2026.07.15": [
        { title: "⚡ 전역 라우터 가상 Dom 성능 디버그", time: "13:00 - 16:30", tag: "dev" },
        { title: "📝 블로그 개발 관련 신규 포스팅 발행", time: "17:00 - 18:00", tag: "docs" }
    ],
    "2026.07.20": [
        { title: "🌐 빌드 인 퍼블릭 모바일 UI 최적화 점검", time: "15:00 - 18:00", tag: "design" }
    ],
    "2026.07.28": [
        { title: "🚀 MindLog v1.1 최종 실서버 마스터 런칭", time: "09:00 - 12:00", tag: "deploy" }
    ]
};

const todoItems = [
    "📝 필로그 블로그 페이지 설계",
    "🧠 커넥트 AI 두뇌 합치기 연구",
    "📅 스터디 플래너 구축",
    "⏱️ 개발자 스케줄 기획 및 연구"
];

const blogPosts = [
    {
        id: "github-multi-device",
        category: "기술/일상",
        date: "2026.07.07",
        title: "C드라이브 용량 절약과 GitHub 중심 개발 환경 구축",
        summary: "로컬 컴퓨터의 용량 문제 해결법과 왜 구글 드라이브 대신 깃허브를 통해 안전하게 멀티 디바이스 코딩을 해야 하는지 개념도와 함께 공유합니다.",
        file: "github-multi-device.md"
    },
    {
        id: "solo-entrepreneur",
        category: "에세이/일상",
        date: "2026.07.07",
        title: "도전! 1인 기업가 (가제)",
        summary: "1인 비즈니스를 개척하며 마주하는 현실적인 문제들과 이를 극복해 나가는 날것의 성장 에세이입니다. (준비 중)",
        file: "solo-entrepreneur.md"
    },
    {
        id: "failure-note",
        category: "기술/학습",
        date: "2026.07.07",
        title: "실패노트: 개발 중 마주한 9가지 핵심 기술 의문점",
        summary: "세션/토큰 차이, 웹 보안 취약점, OS 프로세스 구조 및 모듈화 등 개발을 고도화하며 스스로에게 던진 핵심 CS 질문 리스트와 학습 로그를 복기합니다.",
        file: "failure-note.md"
    },
    {
        id: "idea-note",
        category: "기획/아이디어",
        date: "2026.07.07",
        title: "아이디어 노트: '제2의 뇌(Second Brain)' 구축 실천법",
        summary: "추상적인 PARA 지식 관리 구축의 한계를 직접 겪어보고 분석하며, 사이트 내에 직접 시각적인 지식 캔버스를 빌딩해 보려는 아이디어와 기획안을 다룹니다.",
        file: "idea-note.md"
    }
];

const cardNewsList = [
    {
        id: "github-multi-device",
        title: "C드라이브 용량 절약과 GitHub 중심 개발 환경 구축",
        useFullImage: true,
        slides: [
            {
                title: "C드라이브 용량 부족?",
                subtitle: "개발자 프로젝트를 '구글 드라이브'에 올리면 안 되는 이유",
                visual: "posts/images/github-multi-device/slide1.jpg",
                description: "로컬 용량이 빨간불일 때 흔히 하는 고민, 하지만 엄청난 리스크가 숨어 있습니다."
            },
            {
                title: "리스크 1. 동기화 충돌",
                subtitle: "내 소스 코드가 순식간에 깨질 수 있습니다.",
                visual: "posts/images/github-multi-device/slide2.jpg",
                description: "구글 드라이브의 실시간 파일 잠금은 소중한 코드 편집 도중 숨겨진 설정 파일(.git 등)을 강제로 홀딩해 영구적인 코드 유실을 일으킵니다."
            },
            {
                title: "리스크 2. 자동 배포 마비",
                subtitle: "Vercel 10초 무중단 자동 배포 불가",
                visual: "posts/images/github-multi-device/slide3.jpg",
                description: "구글 드라이브에는 코드를 업로드했을 때 배포 서버로 신호를 날려주는 웹훅(Webhook) 체계가 없어 변경 사항을 자동으로 반영할 수 없습니다."
            },
            {
                title: "해결책 1. 최고의 클라우드 GitHub",
                subtitle: "전체 프로젝트 용량은 고작 2MB 미만!",
                visual: "posts/images/github-multi-device/slide4.jpg",
                description: "웹사이트 전체 용량은 사진을 합쳐도 극소량입니다. 깃허브에 백업하고 나면, 로컬 저장소의 폴더는 언제든 마음 놓고 지우셔도 됩니다."
            },
            {
                title: "해결책 2. 어디서나 git clone",
                subtitle: "어떤 기기든 터미널 명령어 한 줄이면 복사 완료",
                visual: "posts/images/github-multi-device/slide5.jpg",
                description: "새 컴퓨터에서 아래 명령어를 실행하면 즉시 프로젝트 복제가 완료되어 즉시 코딩이 가능합니다."
            },
            {
                title: "해결책 3. 브라우저 치트키",
                subtitle: "마침표(.) 단축키 하나로 태블릿에서도 웹 코딩!",
                visual: "posts/images/github-multi-device/slide6.jpg",
                description: "인터넷 브라우저로 깃허브 저장소 주소에 접속한 뒤, 키보드 마침표(.)를 누르면 클라우드 VS Code가 켜져 즉시 설치 없이 편집이 가능합니다."
            },
            {
                title: "더 보러 가기 👉",
                subtitle: "1인 메이커 생존기, 지금 바로 방문해 보세요!",
                visual: "posts/images/github-multi-device/slide7.jpg",
                description: "더 자세한 에세이와 기술 일지가 궁금하시다면 프로필 링크의 philog.today에 접속해 보세요!"
            }
        ]
    }
];
