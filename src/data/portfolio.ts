/** Content for the Reflective English Teacher teaching portfolio. */
export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Dhananja Tharindi Weerakkodi',
  displayName: 'Dhananja Tharindi Weerakkodi',
  nameLines: ['Dhananja Tharindi', 'Weerakkodi'],
  monogram: 'DTW',
  portrait: '/assets/dhananja-owner-cutout.png',
  portraitAlt: 'Dhananja Tharindi Weerakkodi',
  seriesTag: 'THE REFLECTIVE ENGLISH TEACHER',
  originalLabel: 'A TEACHER IN PRACTICE',
  role: 'English Language Teacher',
  email: 'tharindidhananja@gmail.com',
  phone: '071 7595258',
  phoneLink: '+94717595258',
  tagline: ['BA (Hons) TESL', 'Teaching Internship', 'Reflective Practice'],
  intro:
    'A developing English language teacher pursuing a BA (Hons) in Teaching English as a Second Language at the University of Kelaniya. This portfolio reflects a teaching internship shaped by learner-centered practice, classroom experience and continuous reflection.',
  background:
    'My educational journey has played a significant role in shaping my identity as an English language teacher. Completing my BA (Hons) in Teaching English as a Second Language strengthened my understanding of language teaching methodologies, lesson planning, classroom management, assessment and learner-centered instruction. These experiences provide a strong foundation for my continued professional growth.',
  interests: [
    'Communicative Language Teaching',
    'Learner-centered teaching',
    'Reading and writing development',
    'Engaging English activities',
    'Educational technology',
  ],
};

export const education = [
  {
    school: 'University of Kelaniya',
    place: 'Teaching English as a Second Language',
    degree: 'BA (Hons) in Teaching English as a Second Language',
    period: 'TESL 42554',
    score: 'Internship and Writing a Teaching Portfolio',
  },
];

export const experience = [
  {
    company: 'WP/Hr/Prajapathi Balika Vidyalaya',
    role: 'Teaching Intern',
    place: 'Horana',
    period: '07 September – 16 October 2026',
    points: [
      'Prepared lesson plans and teaching materials for Grades 6, 7 and 9.',
      'Conducted English lessons, assessed learning and managed classroom activities.',
      'Reflected on teaching performance and responded to professional guidance.',
      'Built confidence teaching in crowded halls and noisy classroom conditions.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const projects: Project[] = [
  {
    id: 'learner-centered',
    title: 'Learner-Centered Learning',
    year: 'FOUNDATION',
    genre: 'LEARNER-CENTERED PRACTICE',
    logline: 'An inclusive classroom where learners feel valued, respected and motivated to develop their English.',
    stack: ['Learner needs', 'Participation', 'Inclusion'],
    build: [
      'Every learner has the potential to learn and succeed when provided with guidance, encouragement and meaningful opportunities.',
      'Lessons should prioritize learners and their intended outcomes rather than simply completing activities.',
      'A positive classroom should be psychologically safe: learners can ask questions, express ideas and make mistakes without fear of humiliation.',
    ],
    features: ['Recognize different abilities and interests', 'Build relationships through empathy and mutual respect', 'Treat mistakes as opportunities to learn', 'Encourage active participation'],
    metrics: [
      { value: 'All', label: 'learners deserve opportunities to participate' },
      { value: 'Safe', label: 'space to ask, express ideas and make mistakes' },
      { value: 'Care', label: 'empathy, respect and positive encouragement' },
    ],
    palette: crimson,
    motif: 'shield',
  },
  {
    id: 'communicative',
    title: 'Meaningful Communication',
    year: 'APPROACH',
    genre: 'COMMUNICATIVE LANGUAGE TEACHING',
    logline: 'Language is learned through purposeful communication, not only by memorizing grammatical rules.',
    stack: ['CLT', 'Pair work', 'Group activities', 'Role-play'],
    build: [
      'Language is best learned through meaningful communication rather than memorizing grammatical rules alone. Discussions, pair work, group activities, role-plays and real-life language tasks give learners reasons to use English.',
      'Activities should suit learners’ proficiency levels and provide enough guidance for confident participation.',
    ],
    features: ['Use English for real purposes', 'Build confidence through interaction', 'Choose activities suited to proficiency'],
    metrics: [
      { value: 'Talk', label: 'purposeful classroom communication' },
      { value: 'Share', label: 'pair and group interaction' },
      { value: 'Practice', label: 'real-life language tasks' },
    ],
    palette: ocean,
    motif: 'flow',
  },
  {
    id: 'scaffolding',
    title: 'Guided Independence',
    year: 'PRACTICE',
    genre: 'CONSTRUCTIVISM AND SCAFFOLDING',
    logline: 'Learners connect new knowledge with experience and build independence through manageable steps.',
    stack: ['Familiar contexts', 'Visual aids', 'Examples', 'Guided practice'],
    build: [
      'Familiar situations and local contexts help connect new knowledge with what learners already know.',
      'Visual aids, examples, sentence frames, guided practice and constructive feedback provide support that can be gradually reduced.',
    ],
    features: ['Connect learning to experience', 'Break tasks into manageable steps', 'Gradually encourage independent work'],
    metrics: [
      { value: 'Connect', label: 'new ideas with familiar experience' },
      { value: 'Guide', label: 'offer suitable support and feedback' },
      { value: 'Grow', label: 'move toward independent learning' },
    ],
    palette: jade,
    motif: 'tenants',
  },
  {
    id: 'reflection',
    title: 'Reflective Practice',
    year: 'COMMITMENT',
    genre: 'ASSESSMENT AND CONTINUOUS IMPROVEMENT',
    logline: 'Observe learning, respond to feedback and adapt teaching to support the next step.',
    stack: ['Assessment', 'Observation', 'Feedback', 'Reflection'],
    build: [
      'Formative assessment, observation, questioning and individual feedback can reveal learning difficulties and progress.',
      'Improvement requires identifying areas to develop, trying alternative approaches and evaluating their effectiveness.',
    ],
    features: ['Check understanding throughout lessons', 'Use evidence to adapt teaching', 'Treat feedback as an opportunity to improve'],
    metrics: [
      { value: 'Notice', label: 'learner progress and difficulties' },
      { value: 'Adapt', label: 'teaching to learner needs' },
      { value: 'Reflect', label: 'and keep improving practice' },
    ],
    palette: violet,
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'lesson-planning',
    title: 'Lesson Planning',
    org: 'Professional Growth',
    detail: 'Developed clearer intended learning outcomes and more organized sequences of activities aligned with lesson objectives.',
    laurel: 'PLANNING',
  },
  {
    id: 'classroom-practice',
    title: 'Classroom Practice',
    org: 'Professional Growth',
    detail: 'Built confidence teaching different grade levels and learned to consider instructions, transitions, time and learner engagement.',
    laurel: 'PRACTICE',
  },
  {
    id: 'feedback',
    title: 'Learning from Feedback',
    org: 'Professional Growth',
    detail: 'Began to view supervisory feedback as an opportunity to identify weaknesses, try alternatives and improve.',
    laurel: 'REFLECTION',
  },
  {
    id: 'learner-support',
    title: 'Supporting Learners',
    org: 'Personal Development',
    detail: 'Grew in patience, flexibility and empathy, with a stronger focus on learner confidence and a safe classroom environment.',
    laurel: 'LEARNER CARE',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'interests',
    title: 'Professional Interests',
    subtitle: 'Areas that shape my teaching',
    skills: [
      { name: 'Communicative Language Teaching', mono: 'CL', note: 'Core' },
      { name: 'Learner-centered teaching', mono: 'LC' },
      { name: 'Reading development', mono: 'Rd' },
      { name: 'Writing development', mono: 'Wr' },
      { name: 'Engaging English activities', mono: 'EA' },
      { name: 'Educational technology', mono: 'Ed' },
    ],
  },
  {
    id: 'practice',
    title: 'Teaching Practice',
    subtitle: 'Approaches used and developed',
    skills: [
      { name: 'Lesson planning', mono: 'LP' },
      { name: 'Classroom management', mono: 'CM' },
      { name: 'Assessment and feedback', mono: 'AF' },
      { name: 'Scaffolding', mono: 'Sc' },
      { name: 'Differentiation', mono: 'Df' },
      { name: 'Student participation', mono: 'SP' },
    ],
  },
  {
    id: 'goals',
    title: 'Further Development',
    subtitle: 'Goals for continued growth',
    skills: [
      { name: 'Differentiate for mixed-ability learners', mono: 'DI' },
      { name: 'Refine time management', mono: 'TM' },
      { name: 'Strengthen assessment strategies', mono: 'AS' },
      { name: 'Respond to diverse learner needs', mono: 'LN' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  'Communicative Language Teaching': ['Meaningful communication', 'Pair and group activities'],
  'Learner-centered teaching': ['Prioritize learners and learning outcomes'],
  'Reading development': ['Professional interest'],
  'Writing development': ['Professional interest'],
  'Engaging English activities': ['Interactive and student-centered approaches'],
  'Educational technology': ['Use technology to support learning'],
  'Lesson planning': ['Clear intended learning outcomes', 'Aligned activities'],
  'Classroom management': ['Instructions', 'Transitions', 'Time management'],
  'Assessment and feedback': ['Observation', 'Questioning', 'Formative assessment'],
  Scaffolding: ['Visual aids', 'Examples', 'Guided practice'],
  Differentiation: ['Mixed-ability learners', 'Different learner needs'],
  'Student participation': ['Pair work', 'Group activities', 'Role-play'],
  'Differentiate for mixed-ability learners': ['Area for further development'],
  'Refine time management': ['Area for further development'],
  'Strengthen assessment strategies': ['Area for further development'],
  'Respond to diverse learner needs': ['Area for further development'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Teaching Internship',
    period: '07 September – 16 October 2026',
    synopsis: 'A teaching internship at WP/Hr/Prajapathi Balika Vidyalaya in Horana, teaching English to Grades 6, 7 and 9.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Entering the Classroom',
        description: 'Applied TESL learning in a real school environment and began taking responsibility for facilitating learning.',
        tags: ['Teaching internship', 'School experience'],
        runtime: '07 Sep 2026',
        palette: crimson,
      },
      {
        code: 'S01 E02',
        title: 'Planning with Purpose',
        description: 'Developed clearer intended learning outcomes, considered learners’ existing knowledge and aligned activities with lesson objectives.',
        tags: ['Lesson planning', 'Learning outcomes'],
        runtime: 'During the internship',
        palette: amber,
      },
      {
        code: 'S01 E03',
        title: 'Teaching Across Grades',
        description: 'Planned and conducted English lessons for students in Grades 6, 7 and 9.',
        tags: ['Grade 6', 'Grade 7', 'Grade 9'],
        runtime: 'Three grade levels',
        palette: ocean,
      },
      {
        code: 'S01 E04',
        title: 'Finding the Classroom Rhythm',
        description: 'Learned to manage 40-minute lessons, respond to different learner types and teach in crowded halls and noisy surroundings.',
        tags: ['Classroom management', 'Time', 'Flexibility'],
        runtime: 'Classroom experience',
        palette: violet,
      },
      {
        code: 'S01 E05',
        title: 'Learning from Guidance',
        description: 'Professional feedback encouraged more student-centered activities and examples drawn from authentic life.',
        tags: ['Supervisor feedback', 'Authentic examples'],
        runtime: 'Ongoing reflection',
        palette: jade,
      },
    ],
  },
  {
    number: 2,
    title: 'Teaching Philosophy',
    period: 'Guiding principles',
    synopsis: 'A learner-centered approach grounded in Communicative Language Teaching, constructivism, scaffolding and reflective practice.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'A Learner-Centered Classroom',
        description: 'Create an inclusive, supportive environment where learners feel valued, can participate safely and are encouraged to grow.',
        tags: ['Learner needs', 'Inclusion', 'Confidence'],
        runtime: 'Core belief',
        palette: crimson,
      },
      {
        code: 'S02 E02',
        title: 'Meaningful Communication',
        description: 'Use discussion, pair and group work, role-play and real-life tasks to give learners purposeful reasons to use English.',
        tags: ['CLT', 'Pair work', 'Group work'],
        runtime: 'Communicative Language Teaching',
        palette: ocean,
      },
      {
        code: 'S02 E03',
        title: 'Guided Independence',
        description: 'Connect new learning to familiar experience, then offer examples, visual aids and guided practice before independent work.',
        tags: ['Constructivism', 'Scaffolding', 'Guided practice'],
        runtime: 'Learning support',
        palette: jade,
      },
      {
        code: 'S02 E04',
        title: 'Reflective Practice',
        description: 'Use observation, questioning, formative assessment and feedback to understand progress and adapt future lessons.',
        tags: ['Assessment', 'Feedback', 'Reflection'],
        runtime: 'Continuous improvement',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Teaching approach', title: 'CLT', detail: 'Meaningful communication and purposeful language use', palette: crimson },
  { label: 'Classroom focus', title: 'Learner-centered', detail: 'Create opportunities for every learner to participate', palette: ocean },
  { label: 'Language skills', title: 'Reading & Writing', detail: 'Support students’ English language development', palette: violet },
  { label: 'Lesson design', title: 'Engaging Activities', detail: 'Interactive tasks connected to learners’ lives', palette: amber },
  { label: 'Learning support', title: 'Educational Technology', detail: 'Use technology to support learning', palette: jade },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Background',
    title: 'BA (Hons) TESL',
    lines: ['University of Kelaniya', 'TESL 42554 · Internship and Writing a Teaching Portfolio'],
    chips: ['English language teaching'],
  },
  {
    kicker: 'Teaching internship',
    title: 'Learning in Practice',
    lines: ['WP/Hr/Prajapathi Balika Vidyalaya · Horana', '07 September – 16 October 2026', 'Grades 6, 7 and 9'],
  },
  {
    kicker: 'Teaching philosophy',
    title: 'Meaningful Learning',
    lines: ['Communicative Language Teaching · Constructivism · Scaffolding', 'Learner-centered, inclusive and supportive classrooms'],
  },
  {
    kicker: 'Professional growth',
    title: 'Reflective Practice',
    lines: ['Lesson planning · Classroom management · Assessment', 'Learning from observation, feedback and experience'],
  },
  {
    kicker: 'The next chapter',
    title: 'Keep Growing',
    lines: ['Differentiate for mixed-ability learners', 'Refine time management and assessment strategies'],
  },
];

export const reflectionParagraphs = [
  'My teaching internship has been one of the most meaningful and transformative experiences in my journey towards becoming a professional English language teacher. As a student pursuing a BA (Hons) in Teaching English as a Second Language (TESL) at the University of Kelaniya, I had acquired theoretical knowledge about language teaching methodologies, lesson planning, classroom management, assessment and learner psychology. The internship gave me the opportunity to apply this knowledge in an authentic school environment. It was not merely a requirement for completing my degree, but a journey of personal growth, professional development and the gradual formation of my identity as a teacher.',
  'At the beginning of my internship, I entered the classroom with enthusiasm, expectations and a strong desire to become an effective English language teacher. I soon realized that understanding teaching theories and implementing them successfully in a real classroom were different experiences. Planning a lesson on paper seemed more straightforward than managing a classroom filled with learners with different abilities, interests, learning preferences and levels of English proficiency. I initially focused considerably on preparing lesson content and completing planned activities. Gradually, I understood that effective teaching involves understanding learners’ needs, establishing positive relationships, managing time, responding to unexpected situations and creating opportunities for meaningful learning.',
  'One of the most significant areas of my professional development was lesson planning. Feedback from my supervisor helped me recognize the importance of writing clear, measurable intended learning outcomes, providing a meaningful rationale, identifying learners’ existing knowledge, selecting appropriate teaching materials and aligning classroom activities with lesson objectives. Comparing my Week 1 and Week 6 lesson plans helped me recognize this development. My earlier planning required greater clarity and more detailed consideration of learners’ needs, whereas my later planning demonstrated a more organized sequence of activities, opportunities for interaction and strategies for assessing learning. I learned that lesson planning is a reflective process that directly influences the quality of teaching and learning.',
  'Another important lesson was the value of learner-centered teaching. My university studies introduced me to Communicative Language Teaching (CLT), collaborative learning, scaffolding and student participation. The internship helped me understand how these approaches could be implemented in practice. I became increasingly aware that students learn English more meaningfully when they have opportunities to use the language rather than simply listen to explanations. Pair work, group activities, role-plays, guided discovery, visual aids and interactive tasks can encourage learners to participate actively and develop confidence. I also learned that activities must suit learners’ proficiency levels and provide sufficient guidance without limiting their independence.',
  'Classroom management contributed significantly to my development. Working with students of different abilities taught me that a productive learning environment requires patience, consistency, clear instructions and careful monitoring. Effective classroom management involves creating an environment in which learners understand expectations, feel respected and remain engaged in meaningful activities. I became more conscious of giving instructions clearly, checking students’ understanding, managing transitions and allocating time realistically. These considerations gradually became essential to my teaching decisions.',
  'The internship strengthened my understanding of assessment as an integral part of teaching. I began to appreciate the importance of monitoring students’ progress throughout the learning process. Questioning, observation and worksheets can provide valuable evidence of understanding. Assessment should help teachers identify difficulties, provide constructive feedback and decide what needs to be taught or reinforced next. This encouraged me to consider not only what I intended to teach, but also how I would determine whether students had achieved the intended learning outcomes.',
  'Constructive feedback from my supervisor played a crucial role in my professional growth. I gradually developed a more positive attitude towards feedback by viewing it as an opportunity for improvement rather than criticism. Reflecting on observations and revising my plans helped me recognize the importance of professional openness and continuous learning. Improvement requires identifying weaknesses, considering alternative approaches, implementing changes and evaluating their effectiveness. This process of reflection became one of the most valuable habits I developed during the internship.',
  'Beyond pedagogical knowledge and practical skills, the internship influenced my personal development. It taught me to become more patient, flexible, responsible and empathetic. I recognized that students do not all learn at the same pace and that learning difficulties should be addressed with understanding and appropriate support. I also became more conscious of the influence teachers can have on students’ confidence and attitudes towards learning. I want students to understand that making mistakes is a natural part of language learning and to feel comfortable asking questions, expressing ideas and attempting to communicate in English.',
  'Most importantly, the internship helped me understand the transition from being a student who studies teaching to becoming a student-teacher who accepts responsibility for facilitating learning. I had to consider how academic knowledge could address the needs of real learners in real classroom situations. This transition required me to make increasingly independent decisions while remaining willing to seek guidance and learn from experienced teachers. I began to see myself as an emerging professional with responsibilities towards students, colleagues and the wider school community.',
  'In conclusion, my teaching internship has been a defining stage in my professional journey. It enabled me to connect theory with practice, recognize my strengths and areas to improve, respond constructively to feedback and develop a more reflective approach to teaching. I still aim to refine my assessment strategies, manage time effectively and respond to diverse learner needs. Becoming an effective teacher is a continuous process that requires dedication, reflection, adaptability and commitment to learners’ development. As I move forward, I intend to keep learning, improve my teaching practices and create meaningful learning experiences.',
];

export type ProfileId = 'teacher' | 'supervisor' | 'learner' | 'colleague';
export type SectionId = 'about' | 'journey' | 'skills' | 'moments' | 'story';

const allSections: SectionId[] = ['about', 'journey', 'skills', 'moments', 'story'];

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'teacher',
    name: 'Dhananja Tharindi Weerakkodi',
    blurb: 'The complete teaching portfolio',
    color: '#e5132b',
    order: allSections,
  },
  {
    id: 'supervisor',
    name: 'Supervisor',
    blurb: 'Internship and professional growth',
    color: '#4cc9ff',
    order: ['journey', 'moments', 'story', 'about', 'skills'],
  },
  {
    id: 'learner',
    name: 'Learner',
    blurb: 'Teaching philosophy and learning approach',
    color: '#46e3a8',
    order: ['skills', 'journey', 'about', 'story', 'moments'],
  },
  {
    id: 'colleague',
    name: 'Colleague',
    blurb: 'Background, reflection and next steps',
    color: '#ffb547',
    order: ['about', 'story', 'skills', 'moments', 'journey'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'Background', card: 'My Background', meta: 'TESL · Education and experience', palette: violet },
  journey: { nav: 'Teaching Journey', card: 'Teaching Journey', meta: 'Internship + teaching philosophy · 2 seasons', palette: amber },
  skills: { nav: 'Teaching Focus', card: 'Teaching Focus', meta: 'Interests, practice and goals', palette: ocean },
  moments: { nav: 'Growth', card: 'Professional Growth', meta: 'Learning through practice and feedback', palette: jade },
  story: { nav: 'Reflection', card: 'Reflective Summary', meta: 'Internship reflection', palette: violet },
};
