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
        category: 'Core Services',
        shortDescription: 'Your daily hub for attendance, notices, events, and resources—all in one place.',
        fullDescription: 'Your daily hub for attendance, notices, events, and resources—all in one place.',
        features: [
            'Dashboards & attendance',
            'Notices & events',
            'Documents & links',
        ],
        whoUsesIt: ['Students', 'Faculty', 'Admin'],
        problemSolved: 'One system for all official college communication.',
    },

    {
        id: 'forms-applications',
        title: 'Forms & Applications System',
        tagline: 'Digital Applications, Instant Processing',
        icon: 'forms',
        category: 'Core Services',
        shortDescription: 'Student forms moved online with fast approvals and tracking.',
        fullDescription: 'Student forms moved online with fast approvals and tracking.',
        features: [
            'Online applications',
            'Approval workflows',
            'Status tracking',
        ],
        whoUsesIt: ['Students', 'Faculty', 'Admin'],
        problemSolved: 'Eliminates paperwork, delays, and lost applications.',
    },

    {
        id: 'attendance',
        title: 'Attendance & Academic Tracking',
        tagline: 'Attendance Made Simple',
        icon: 'attendance',
        category: 'Core Services',
        shortDescription: 'Digital attendance replacing registers and spreadsheets.',
        fullDescription: 'Digital attendance replacing registers and spreadsheets.',
        features: [
            'Faculty marking',
            'Student visibility',
            'Reports & alerts',
        ],
        whoUsesIt: ['Faculty', 'Students', 'HODs'],
        problemSolved: 'Removes manual errors and keeps attendance transparent.',
    },

    {
        id: 'student-cell',
        title: 'Student Cell & Admin Software',
        tagline: 'Professional Student Operations',
        icon: 'studentcell',
        category: 'Student Operations',
        shortDescription: 'Centralized tools for student cells and admin teams.',
        fullDescription: 'Centralized tools for student cells and admin teams.',
        features: [
            'Student database',
            'Bulk communication',
            'Task & event tools',
        ],
        whoUsesIt: ['Student Cells', 'Councils', 'Departments'],
        problemSolved: 'Replaces Excel sheets with one organized system.',
    },

    {
        id: 'opportunities',
        title: 'Opportunities & Community Layer',
        tagline: 'Campus Collaboration Hub',
        icon: 'community',
        category: 'Student Operations',
        shortDescription: 'Connect students for projects and campus opportunities.',
        fullDescription: 'Connect students for projects and campus opportunities.',
        features: [
            'Idea & project posts',
            'Collaboration requests',
            'Moderation system',
        ],
        whoUsesIt: ['Students', 'Campus Mantri', 'Mentors'],
        problemSolved: 'Structured collaboration without WhatsApp chaos.',
    },

    {
        id: 'email-system',
        title: 'Email & Communication System',
        tagline: 'Reach Everyone, Instantly',
        icon: 'email',
        category: 'Advanced Features',
        shortDescription: 'Official bulk email system for college communication.',
        fullDescription: 'Official bulk email system for college communication.',
        features: [
            'Bulk emails',
            'Targeted groups',
            'Delivery tracking',
        ],
        whoUsesIt: ['Admin', 'Student Cells', 'Faculty'],
        problemSolved: 'Professional communication without email limits.',
    },

    {
        id: 'campus-mantri',
        title: 'Campus Mantri Program',
        tagline: 'Student-Led Campus Management',
        icon: 'mantri',
        category: 'Advanced Features',
        shortDescription: 'Student ambassadors ensure smooth platform operations.',
        fullDescription: 'Student ambassadors ensure smooth platform operations.',
        features: [
            'Platform moderation',
            'Student onboarding',
            'Issue escalation',
        ],
        whoUsesIt: ['Students', 'Admin', 'Faculty'],
        problemSolved: 'Faster support and better platform adoption.',
    },

    {
        id: 'analytics',
        title: 'Analytics & Admin Controls',
        tagline: 'Complete Campus Oversight',
        icon: 'analytics',
        category: 'Advanced Features',
        shortDescription: 'Admin dashboard for insights, reports, and control.',
        fullDescription: 'Admin dashboard for insights, reports, and control.',
        features: [
            'Usage analytics',
            'Reports & logs',
            'Access control',
        ],
        whoUsesIt: ['Principal', 'HODs', 'Admins'],
        problemSolved: 'Clear visibility and data-driven decisions.',
    }
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
        title: 'Initial Contact',
        description: 'You fill our contact form or request a demo with a brief description of your college setup. We respond within 24 hours to schedule a discussion.',
        duration: '1 day',
    },
    {
        id: 2,
        title: 'Discovery Call',
        description: 'A 30-minute call to understand your workflows and identify key requirements. We show you the platform demo and provide a pricing estimate.',
        duration: '1 week',
    },
    {
        id: 3,
        title: 'Proposal & Agreement',
        description: 'We create a customized proposal with a detailed service breakdown and clear pricing structure. Once approved, we sign the agreement.',
        duration: '1-2 weeks',
    },
    {
        id: 4,
        title: 'Portal Setup',
        description: 'We configure the portal with your branding, activate services per your plan, and set up the initial admin accounts and department structure.',
        duration: '2-4 weeks',
    },
    {
        id: 5,
        title: 'Training & Onboarding',
        description: 'We conduct training sessions for your admins, faculty, and Student Cell members. User guides and resources are provided.',
        duration: '1 week',
    },
    {
        id: 6,
        title: 'Student Launch',
        description: 'We help you announce the launch, create student accounts, and onboard them. Our team provides on-call support during this critical phase.',
        duration: '2 weeks',
    },
    {
        id: 7,
        title: 'Ongoing Support',
        description: 'We continue with regular check-ins, feature updates, and usage analytics to ensure your campus management keeps improving.',
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
