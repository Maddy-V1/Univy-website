/**
 * College Tech - Univy Constants
 * Static data for the website
 */

// ========================
// CONTACT INFORMATION
// ========================
export const CONTACT_INFO = {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@univy.com',
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+91-XXXXXXXXXX',
    address: process.env.NEXT_PUBLIC_OFFICE_ADDRESS || 'Delhi, Dwarka',
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || '',
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || '',
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
};

// ========================
// TEAM MEMBERS
// ========================
export const TEAM_MEMBERS = [
    {
        id: 1,
        name: 'Madhav Varshney',
        role: 'Co-founder & Product Strategy',
        image: '/images/team/madhav.jpg',
        bio: 'Leading product vision and strategy. Passionate about solving real problems in college operations.',
        linkedin: '', // TODO: Add LinkedIn URL
        email: 'madhav@univy.com',
        initials: 'MV',
    },
    {
        id: 2,
        name: 'Satyajit Jena',
        role: 'Co-founder & Technical Lead',
        image: '/images/team/satyajit.jpg',
        bio: 'Building the technical foundation of Univy. Expert in full-stack development and system architecture.',
        linkedin: '', // TODO: Add LinkedIn URL
        email: 'satyajit@univy.com',
        initials: 'SJ',
    },
    {
        id: 3,
        name: 'Jatin Goyal',
        role: 'Operations & Quality Assurance',
        image: '/images/team/jatin.jpg',
        bio: 'Ensuring every feature works perfectly and efficiently. Focused on quality and fast delivery.',
        linkedin: '', // TODO: Add LinkedIn URL
        email: 'jatin@univy.com',
        initials: 'JG',
    },
    {
        id: 4,
        name: 'Parth Agarwal',
        role: 'Business Development & Marketing',
        image: '/images/team/parth.jpg',
        bio: 'Managing outreach, pitch decks, and college partnerships. Building Univy\'s brand presence.',
        linkedin: '', // TODO: Add LinkedIn URL
        email: 'parth@univy.com',
        initials: 'PA',
    },
    {
        id: 5,
        name: 'Krishna Sharma',
        role: 'Pricing Strategy & University Relations',
        image: '/images/team/krishna.jpg',
        bio: 'Developing pricing models and managing university-level connections. Bridging academia and technology.',
        linkedin: '', // TODO: Add LinkedIn URL
        email: 'krishna@univy.com',
        initials: 'KS',
    },
];

// ========================
// NAVIGATION LINKS
// ========================
export const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Team', href: '/team' },
    { label: 'Vision', href: '/vision' },
];

// ========================
// PRICING PLANS
// ========================
export const PRICING_PLANS = [
    {
        id: 'essentials',
        name: 'Essentials',
        tagline: 'Start Your Digital Transformation',
        price: 'Contact for Quote',
        bestFor: 'Small colleges (500-1000 students)',
        setupTime: '2-3 weeks',
        featured: false,
        features: [
            { text: 'College Portal (Basic)', included: true },
            { text: 'Student & Faculty Login Dashboards', included: true },
            { text: 'Attendance System (Marking & Viewing)', included: true },
            { text: 'Notices & Announcements', included: true },
            { text: 'Common Forms (Bonafide, ID Card, Applications)', included: true },
            { text: 'Document Downloads', included: true },
            { text: 'Events Calendar', included: true },
            { text: 'Basic Support', included: true },
            { text: 'Student Cell Software', included: false },
            { text: 'Bulk Email System', included: false },
            { text: 'Advanced Analytics', included: false },
        ],
    },
    {
        id: 'campus-connect',
        name: 'Campus Connect',
        tagline: 'Unite Your Campus Digitally',
        price: 'Contact for Quote',
        bestFor: 'Mid-size colleges (1000-3000 students)',
        setupTime: '3-4 weeks',
        featured: false,
        features: [
            { text: 'Everything in Essentials Plan', included: true },
            { text: 'Events & Activities Management', included: true },
            { text: 'Student Community Features', included: true },
            { text: 'Basic Opportunity Board', included: true },
            { text: 'Campus Mantri Program', included: true },
            { text: 'Email Notifications', included: true },
            { text: 'Mobile-Responsive Design', included: true },
            { text: 'Priority Support', included: true },
            { text: 'Student Cell Software', included: false },
            { text: 'Bulk Email System', included: false },
        ],
    },
    {
        id: 'professional',
        name: 'Professional',
        tagline: 'Complete Campus Management',
        price: 'Contact for Quote',
        bestFor: 'Large colleges (3000-5000 students)',
        setupTime: '4-6 weeks',
        featured: true,
        features: [
            { text: 'Everything in Campus Connect Plan', included: true },
            { text: 'Student Cell Software (Full)', included: true },
            { text: 'Centralized Student Database', included: true },
            { text: 'Batch/Course/Section Filters', included: true },
            { text: 'CR List PDF Generation', included: true },
            { text: 'Bulk Email System', included: true },
            { text: 'Event Management Workflows', included: true },
            { text: 'Form Builder', included: true },
            { text: 'Document Templates', included: true },
            { text: 'Dedicated Support', included: true },
        ],
    },
    {
        id: 'enterprise',
        name: 'Enterprise',
        tagline: 'Advanced Operations & Analytics',
        price: 'Contact for Quote',
        bestFor: 'Universities (5000+ students)',
        setupTime: '6-8 weeks',
        featured: false,
        features: [
            { text: 'Everything in Professional Plan', included: true },
            { text: 'Advanced Analytics Dashboard', included: true },
            { text: 'Admin Controls & Permissions', included: true },
            { text: 'Document Automation', included: true },
            { text: 'Custom Workflow Builder', included: true },
            { text: 'API Access', included: true },
            { text: 'Multi-Campus Support', included: true },
            { text: 'Priority Support', included: true },
            { text: 'Dedicated Account Manager', included: true },
            { text: 'Quarterly Strategy Calls', included: true },
        ],
    },
];

// ========================
// SERVICES / MODULES
// ========================
export const SERVICES = [
    {
        id: 'college-portal',
        title: 'College Portal',
        tagline: 'Your Campus, Digitized',
        icon: 'portal',
        shortDescription: 'Daily-use platform for students and faculty. A clean replacement for WhatsApp groups.',
        features: [
            'Student login dashboard',
            'Faculty login dashboard',
            'Attendance marking & viewing',
            'Official notices & announcements',
            'Events & activities calendar',
            'Document downloads (syllabi, timetables)',
        ],
        problemSolved: 'Eliminates communication chaos, provides official channel for college information.',
    },
    {
        id: 'forms-applications',
        title: 'Forms & Applications',
        tagline: 'Digital Applications, Instant Processing',
        icon: 'forms',
        shortDescription: 'Common student forms moved online with automated workflows.',
        features: [
            'Bonafide certificate requests',
            'ID card applications',
            'Leave applications',
            'Custom form builder',
            'Status tracking',
            'Digital approval workflows',
        ],
        problemSolved: 'No more lost forms, manual approvals, or students waiting weeks.',
    },
    {
        id: 'attendance',
        title: 'Attendance & Academic Tracking',
        tagline: 'Attendance Made Simple',
        icon: 'attendance',
        shortDescription: 'Digital attendance system replacing manual registers and Excel sheets.',
        features: [
            'Faculty: Mark attendance via dashboard',
            'Students: View attendance anytime',
            'Course-wise attendance tracking',
            'Automated shortage alerts',
            'Attendance reports for admin',
        ],
        problemSolved: 'Eliminates paper registers, calculation errors, and manual compilation.',
    },
    {
        id: 'student-cell',
        title: 'Student Cell Software',
        tagline: 'Professional Tools for Student Operations',
        icon: 'studentcell',
        shortDescription: 'Specialized software for Student Cells and councils.',
        features: [
            'Centralized student database',
            'Advanced filters (batch, course, section)',
            'CR list PDF generation',
            'Bulk email system',
            'Event management workflows',
            'Task assignment & tracking',
        ],
        problemSolved: 'No more maintaining Excel sheets, manual email lists, or lost student data.',
    },
    {
        id: 'opportunities',
        title: 'Opportunities & Community',
        tagline: 'Campus Collaboration Hub',
        icon: 'community',
        shortDescription: 'Platform for students to share ideas and find opportunities.',
        features: [
            'Post startup ideas',
            'Seek project partners',
            'Internship opportunities',
            'Collaboration requests',
            'Campus moderation system',
        ],
        problemSolved: 'Structured way to connect motivated students within campus.',
    },
    {
        id: 'email-system',
        title: 'Email & Communication',
        tagline: 'Reach Everyone, Instantly',
        icon: 'email',
        shortDescription: 'Professional bulk email system integrated with student database.',
        features: [
            'Bulk email to filtered groups',
            'Email templates',
            'Scheduled sending',
            'Delivery tracking',
            'Batch/course/section targeting',
        ],
        problemSolved: 'No more manual BCC lists or Gmail limitations.',
    },
    {
        id: 'campus-mantri',
        title: 'Campus Mantri Program',
        tagline: 'Student-Led Campus Management',
        icon: 'mantri',
        shortDescription: 'Student ambassador as bridge between college and Univy.',
        features: [
            'Platform moderation',
            'Student onboarding support',
            'Opportunity management',
            'Issue escalation',
            'Campus feedback collection',
        ],
        problemSolved: 'Faster response times and better platform adoption.',
    },
    {
        id: 'analytics',
        title: 'Analytics & Admin Controls',
        tagline: 'Complete Campus Oversight',
        icon: 'analytics',
        shortDescription: 'Advanced dashboard for administration to monitor and control.',
        features: [
            'Usage analytics',
            'Student engagement metrics',
            'Department-wise reports',
            'User permission management',
            'Activity logs',
        ],
        problemSolved: 'Data-driven decisions and complete transparency.',
    },
];

// ========================
// WHY CHOOSE US REASONS
// ========================
export const WHY_CHOOSE_US = [
    {
        id: 1,
        title: 'College-First Design',
        description: 'Not a generic ERP. Built specifically for Indian college workflows, student culture, and administrative needs.',
        icon: 'design',
    },
    {
        id: 2,
        title: 'Modular & Scalable',
        description: 'Start with basics, add features as you grow. Pay only for what you use.',
        icon: 'modular',
    },
    {
        id: 3,
        title: 'Student-Managed Bridge',
        description: 'Campus Mantri model ensures smooth communication between college and platform.',
        icon: 'bridge',
    },
    {
        id: 4,
        title: 'No Hidden Costs',
        description: 'No ads on student dashboards. No payments from students. Purely B2B subscription model.',
        icon: 'costs',
    },
    {
        id: 5,
        title: 'Ongoing Support',
        description: 'Dedicated support, regular updates, and training for your staff.',
        icon: 'support',
    },
];

// ========================
// PROBLEMS LIST (HOME)
// ========================
export const PROBLEMS = [
    {
        id: 1,
        title: 'Communication Chaos',
        description: 'Important notices lost in WhatsApp groups. No official channel for announcements.',
        icon: 'chaos',
    },
    {
        id: 2,
        title: 'Manual Overload',
        description: 'Attendance marked on paper. Excel sheets for student data. Hours wasted on repetitive tasks.',
        icon: 'manual',
    },
    {
        id: 3,
        title: 'Student Cell Struggles',
        description: 'No system for event management. Email lists manually maintained. CR lists in Word/Excel.',
        icon: 'struggles',
    },
    {
        id: 4,
        title: 'Disconnected Systems',
        description: 'Forms submitted physically. No centralized student database. Documents shared via email.',
        icon: 'disconnected',
    },
];

// ========================
// HOW IT WORKS STEPS
// ========================
export const HOW_IT_WORKS_STEPS = [
    {
        id: 1,
        title: 'You Reach Out',
        description: 'Fill our contact form or request a demo. We respond within 24 hours.',
        duration: '1 day',
    },
    {
        id: 2,
        title: 'Discovery Call',
        description: '30-minute call to understand your workflows, show demo, and answer questions.',
        duration: '1 week',
    },
    {
        id: 3,
        title: 'Proposal & Agreement',
        description: 'Customized proposal with detailed service breakdown and clear pricing.',
        duration: '1-2 weeks',
    },
    {
        id: 4,
        title: 'Portal Setup',
        description: 'Portal configured with your branding. Services activated per your plan.',
        duration: '2-4 weeks',
    },
    {
        id: 5,
        title: 'Training & Onboarding',
        description: 'Admin training, faculty orientation, and user guides provided.',
        duration: '1 week',
    },
    {
        id: 6,
        title: 'Student Launch',
        description: 'Campus-wide rollout with on-call support and Campus Mantri active.',
        duration: '2 weeks',
    },
    {
        id: 7,
        title: 'Ongoing Support',
        description: 'Regular check-ins, feature updates, and continuous improvement.',
        duration: 'Ongoing',
    },
];

// ========================
// COLLEGE TYPES (FORMS)
// ========================
export const COLLEGE_TYPES = [
    'Engineering',
    'Arts & Science',
    'Commerce',
    'Management',
    'Medical',
    'Multi-disciplinary',
    'Other',
];

// ========================
// COLLEGE SIZES (FORMS)
// ========================
export const COLLEGE_SIZES = [
    '<500 students',
    '500-1000 students',
    '1000-3000 students',
    '3000-5000 students',
    '5000+ students',
];

// ========================
// URGENCY OPTIONS (FORMS)
// ========================
export const URGENCY_OPTIONS = [
    'ASAP (within 24 hours)',
    'This week',
    'Next week',
    'Just exploring',
];

// ========================
// CONTACT METHODS (FORMS)
// ========================
export const CONTACT_METHODS = [
    'Email',
    'Phone',
    'WhatsApp',
    'Video Call',
];
