const fs = require('fs');

const streamContent = `BT
/F1 20 Tf
50 740 Td
(APPARI SRI TEJA) Tj
/F2 11 Tf
0 -20 Td
(AI/ML & Full Stack Developer | MVGR College of Engineering | CGPA: 8.3/10) Tj
0 -15 Td
(Email: asriteja2387@gmail.com | Phone: +91 83095 81879 | GitHub: sriteja2007) Tj
0 -15 Td
(LinkedIn: linkedin.com/in/appari-sri-teja-ba754a348 | Location: Vizianagaram, AP, India) Tj

0 -25 Td
/F1 13 Tf
(EDUCATION) Tj
/F2 10 Tf
0 -15 Td
(Maharaj Vijayaram Gajapathi Raj College of Engineering (MVGR), Vizianagaram) Tj
0 -13 Td
(B.Tech in Computer Science and Machine Learning (AIML) | 3rd Year | CGPA: 8.3 / 10 | Expected 2028) Tj
0 -14 Td
(Board of Intermediate Education, Andhra Pradesh (MPC) | Higher Secondary Education) Tj

0 -25 Td
/F1 13 Tf
(TECHNICAL SKILLS) Tj
/F2 10 Tf
0 -15 Td
(Languages: Python, Java, C, C++, JavaScript, SQL) Tj
0 -13 Td
(AI/ML: TensorFlow, PyTorch, Keras, MediaPipe, Scikit-learn, NLTK, Computer Vision, Generative AI, Gemini APIs) Tj
0 -13 Td
(Web & Backend: React.js, Node.js, Express.js, HTML5, CSS3, Tailwind CSS, REST APIs) Tj
0 -13 Td
(Databases & Tools: MongoDB, Firebase, SQL, DBMS, Git, GitHub, Vercel, VS Code) Tj
0 -13 Td
(Core Concepts: Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), DBMS) Tj

0 -25 Td
/F1 13 Tf
(FEATURED PROJECTS) Tj
/F2 10 Tf
0 -15 Td
(1. CampusRecover AI - Full-Stack Lost & Found Platform) Tj
0 -13 Td
(   Technologies: Next.js, TypeScript, Supabase, Google Gemini Multimodal AI, Tailwind CSS) Tj
0 -13 Td
(   - Reconnects misplaced items with owners via AI image analysis and semantic vector matching.) Tj
0 -13 Td
(   - Features automated fraud detection, admin verification, and real-time alerts.) Tj

0 -16 Td
(2. PlacementOS-Ai - Career Copilot & Placement Platform) Tj
0 -13 Td
(   Technologies: React.js, TypeScript, Node.js, Express.js, Google Gemini API, MongoDB) Tj
0 -13 Td
(   - AI platform with automated mock interviews, ATS resume scoring, and personalized roadmaps.) Tj

0 -16 Td
(3. Virtual Mouse - Computer Vision & Gesture Recognition) Tj
0 -13 Td
(   Technologies: Python, OpenCV, MediaPipe, PyAutoGUI, NumPy) Tj
0 -13 Td
(   - Touchless computer navigation tracking 21 3D hand landmarks for pointer, click, and scroll.) Tj

0 -16 Td
(4. AI-Resume-Analyzer - ATS Scoring & Skill Matcher) Tj
0 -13 Td
(   Technologies: Python, Scikit-learn, NLTK, Streamlit, Pandas) Tj
0 -13 Td
(   - Automated ATS benchmarking, skill entity extraction, and personalized job matching.) Tj

0 -16 Td
(5. Shopper E-Commerce - Full-Stack Modern Web Store) Tj
0 -13 Td
(   Technologies: React.js, JavaScript, Node.js, CSS3, Vercel) Tj
0 -13 Td
(   - Live Demo: https://shopper-ecommerce-gamma.vercel.app | Cart state & responsive checkout.) Tj
ET`;

const streamLength = Buffer.byteLength(streamContent);

const pdfParts = [
  '%PDF-1.4\n',
  '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n',
  '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n',
  '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj\n',
  '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n',
  '6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n',
  `4 0 obj\n<< /Length ${streamLength} >>\nstream\n${streamContent}\nendstream\nendobj\n`
];

let pos = 0;
const offsets = [0];
const body = pdfParts.join('');

// Reconstruct xref offsets
const obj1 = body.indexOf('1 0 obj');
const obj2 = body.indexOf('2 0 obj');
const obj3 = body.indexOf('3 0 obj');
const obj4 = body.indexOf('4 0 obj');
const obj5 = body.indexOf('5 0 obj');
const obj6 = body.indexOf('6 0 obj');

const pad = (n) => String(n).padStart(10, '0');

const xref = [
  'xref\n0 7\n',
  '0000000000 65535 f \n',
  `${pad(obj1)} 00000 n \n`,
  `${pad(obj2)} 00000 n \n`,
  `${pad(obj3)} 00000 n \n`,
  `${pad(obj4)} 00000 n \n`,
  `${pad(obj5)} 00000 n \n`,
  `${pad(obj6)} 00000 n \n`,
  `trailer\n<< /Size 7 /Root 1 0 R >>\nstartxref\n${body.length}\n%%EOF\n`
].join('');

fs.writeFileSync('public/resume.pdf', body + xref);
console.log('Successfully written public/resume.pdf');
