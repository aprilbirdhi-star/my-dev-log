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
        title: "실패노트: 영광의 상처들",
        summary: "프로덕트를 기획하고 빌드하는 과정에서 겪은 수많은 기술적, 기획적 실패 사례와 그로부터 얻은 레슨 런(Lesson Learned)을 기록합니다. (준비 중)",
        file: "failure-note.md"
    },
    {
        id: "idea-note",
        category: "기획/아이디어",
        date: "2026.07.07",
        title: "아이디어 노트: 미래의 프로덕트 스케치",
        summary: "세상을 조금 더 편리하게 만들 수 있을 것 같은 다양한 SaaS 서비스 구상안과 기획 의도, 그리고 프로토타입 메모를 공유합니다. (준비 중)",
        file: "idea-note.md"
    }
];
