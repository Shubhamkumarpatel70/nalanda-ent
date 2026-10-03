export interface DoctorInfo {
  name: string;
  title: string;
  qualification: string;
  degrees: string[];
  experienceYears: number;
  biography: string;
  languages: string[];
  consultationTimings: string;
  certifications: string[];
  awards: string[];
  areasOfExpertise: string[];
  image: string;
}

export interface StaffMember {
  id: string;
  name: string;
  designation: string;
  roleCategory: 'Nursing' | 'Audiology & Lab' | 'Reception' | 'Administration' | 'Technician';
  experience: string;
  photo: string;
  responsibilities: string[];
  languagesSpoken: string[];
  bio: string;
  servicesOffered?: string[];
}

export interface Branch {
  id: string;
  name: string;
  type: string;
  address: string;
  phone: string;
  email: string;
  emergencyPhone: string;
  whatsapp: string;
  workingHours: string;
  sundayHours: string;
  mapEmbedUrl: string;
  googleMapsUrl: string;
  image: string;
  isMainBranch: boolean;
  facilitiesAvailable: string[];
  doctorSchedule: string;
}

export interface SpecialtyService {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  fullDescription: string;
  symptoms: string[];
  treatments: string[];
  benefits: string[];
  image: string;
}

export interface Facility {
  id: string;
  title: string;
  iconName: string;
  description: string;
  highlights: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  location: string;
  treatment: string;
  rating: number;
  review: string;
  date: string;
  verified: boolean;
  patientPhoto: string;
}

export interface HealthBlog {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
  image: string;
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Treatments' | 'Audiology' | 'Emergency' | 'Visiting';
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Clinic' | 'Reception' | 'Equipment' | 'Treatment Room' | 'Staff' | 'Building';
  image: string;
  description: string;
}

export const CLINIC_INFO = {
  name: "Nalanda ENT Center",
  tagline: "Premier Super Specialty Ear, Nose & Throat Healthcare",
  established: 2008,
  totalPatientsServed: "1,00,000+",
  yearsOfExcellence: 20,
  emergencyNumber: "+91 94304 63465",
  whatsappNumber: "+91 94304 63465",
  email: "nalandaentcenter@gmail.com",
};

export const DOCTOR_PROFILE: DoctorInfo = {
  name: "Dr. Arun Kumar",
  title: "Consultant ENT Surgeon",
  qualification: "MBBS, MS (ENT)",
  degrees: [
    "MBBS - Patna Medical College & Hospital (PMCH), Patna",
    "MS (ENT) - Patna Medical College & Hospital (PMCH), Patna",
    "Senior Resident - AAA Hospital, New Delhi"
  ],
  experienceYears: 20,
  biography: "Dr. Arun Kumar is a Consultant ENT Surgeon with MBBS and MS (ENT) qualifications. He specializes in ENT consultation, endoscopy, micro-otology and comprehensive ear, nose and throat[...]
  languages: ["English", "Hindi"],
  consultationTimings: "Mon - Sat: 10:00 AM - 2:00 PM & 5:00 PM - 8:00 PM",
  certifications: [
    "Vertigo - Certificate 2023",
    "RediENT - Certificate of completion 2024-25"
  ],
  awards: [
    "Best ENT Surgeon Award 2023",
    "Excellence in Patient Care Award 2022"
  ],
  areasOfExpertise: [
    "Microscopic Tympanoplasty & Mastoidectomy",
    "Functional Endoscopic Sinus Surgery (FESS)",
    "Laser Voice & Vocal Cord Surgery",
    "Vertigo, Tinnitus & Balance Disorders Treatment",
    "Soundproof Audiology & Hearing Rehabilitation",
    "Pediatric ENT & Adenotonsillectomy",
    "Neck, Thyroid"
  ],
  image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
};

export const STAFF_MEMBERS: StaffMember[] = [
  {
    id: "staff-1",
    name: "Indrodeo Kumar",
    designation: "O.T. Assistant",
    roleCategory: "Technician",
    experience: "12 Years",
    photo:
      "https://images.unsplash.com/photo-1594824813571-2153349a6961?auto=format&fit=crop&q=80&w=600",
    responsibilities: [
      "Preparing the operation theatre and equipment before procedures",
      "Assisting the doctor and surgical team during ENT procedures",
      "Following instrument sterilization and infection-control protocols",
      "Supporting patient preparation and post-procedure care"
    ],
    languagesSpoken: ["Hindi", "English"],
    bio: "Indrodeo Kumar supports the clinical team with operation theatre preparation, procedure assistance, and infection-control practices."
  },
  {
    id: "staff-2",
    name: "Rounish Kumar",
    designation: "Clinic Management",
    roleCategory: "Administration",
    experience: "9 Years",
    photo:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600",
    responsibilities: [
      "Coordinating daily clinic operations",
      "Managing patient registration and clinic records",
      "Supporting reception and patient-flow management",
      "Helping coordinate communication between patients and clinic staff"
    ],
    languagesSpoken: ["Hindi", "English"],
    bio: "Rounish Kumar supports the day-to-day management of the clinic, helping coordinate patient services, records, and administrative activities."
  },
  {
    id: "staff-3",
    name: "Raushan Kumar",
    designation: "OPD Management",
    roleCategory: "Administration",
    experience: "6 Years",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    responsibilities: [
      "Welcoming walk-in patients and assisting with registration",
      "Guiding patients to the appropriate consultation area",
      "Handling routine telephone inquiries",
      "Helping patients with clinic and branch information"
    ],
    languagesSpoken: ["Hindi", "English"],
    bio: "Raushan Kumar assists with outpatient department operations, patient registration, and coordination to help ensure a smooth clinic visit."
  },
  {
    id: "staff-4",
    name: "Suraj Kumar",
    designation: "Nursing Staff",
    roleCategory: "Nursing",
    experience: "8 Years",
    photo:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=600",
    responsibilities: [
      "Preparing clinical equipment and procedure areas",
      "Supporting instrument cleaning and sterilization protocols",
      "Assisting the clinical team during ENT procedures, as assigned",
      "Supporting patient preparation and recovery under clinical supervision"
    ],
    languagesSpoken: ["Hindi", "English"],
    bio: "Suraj Kumar supports clinical and nursing activities, including procedure-area preparation, patient assistance, and adherence to hygiene protocols."
  },
  {
    id: "staff-5",
    name: "Dinesh Kumar",
    designation: "Clinic Staff",
    roleCategory: "Reception",
    experience: "7 Years",
    photo:
      "https://images.unsplash.com/photo-1580281657557-2a69d00dc942?auto=format&fit=crop&q=80&w=600",
    responsibilities: [
      "Supporting routine clinic operations",
      "Helping maintain organized patient and clinic records",
      "Assisting with patient guidance and coordination",
      "Supporting other administrative tasks as assigned"
    ],
    languagesSpoken: ["Hindi", "English"],
    bio: "Dinesh Kumar assists with routine clinic support activities and helps maintain an organized and patient-friendly environment."
  },
  {
    id: "staff-6",
    name: "Rajesh Kumar",
    designation: "Clinic Staff",
    roleCategory: "Reception",
    experience: "7 Years",
    photo:
      "https://images.unsplash.com/photo-1580281657557-2a69d00dc942?auto=format&fit=crop&q=80&w=600",
    responsibilities: [
      "Assisting patients with general clinic navigation",
      "Supporting daily clinic operations",
      "Helping maintain orderly clinical and administrative areas",
      "Coordinating routine tasks with the clinic team"
    ],
    languagesSpoken: ["Hindi", "English"],
    bio: "Rajesh Kumar supports daily clinic activities and helps patients navigate the clinic during their visit."
  },
  {
    id: "staff-7",
    name: "Sanjeet Kumar",
    designation: "Clinic Staff",
    roleCategory: "Reception",
    experience: "7 Years",
    photo:
      "https://images.unsplash.com/photo-1580281657557-2a69d00dc942?auto=format&fit=crop&q=80&w=600",
    responsibilities: [
      "Supporting patient movement and clinic coordination",
      "Helping prepare rooms and supplies for routine activities",
      "Maintaining cleanliness and order in assigned areas",
      "Assisting the clinic team with assigned support tasks"
    ],
    languagesSpoken: ["Hindi", "English"],
    bio: "Sanjeet Kumar assists the clinic team with patient coordination and routine support activities to help maintain an organized care environment."
  },
  {
    id: "staff-8",
    name: "Shyam Kishor",
    designation: "Audiologist",
    roleCategory: "Audiology & Lab",
    experience: "7 Years",
    photo:
      "https://images.unsplash.com/photo-1580281657557-2a69d00dc942?auto=format&fit=crop&q=80&w=600",
    responsibilities: [
      "Conducting hearing assessments within professional scope",
      "Supporting audiological evaluation and reporting",
      "Explaining hearing-test procedures to patients",
      "Maintaining audiology equipment and patient test records"
    ],
    languagesSpoken: ["Hindi", "English"],
    bio: "Shyam Kishor supports audiology and hearing-assessment services, helping patients understand the testing process and their evaluation results.",
    servicesOffered: [
      "Tympanometry",
      "Audiometry (Pure Tone Audiometry - PTA)",
      "BERA (Brainstem Evoked Response Audiometry)",
      "OAE (Otoacoustic Emissions)",
      "Hearing Aid Trials & Fitting",
      "Speech Therapy & Rehabilitation"
    ]
  },
  {
    id: "staff-9",
    name: "Sangeeta Sinha",
    designation: "Audiologist",
    roleCategory: "Audiology & Lab",
    experience: "7 Years",
    photo:
      "https://images.unsplash.com/photo-1580281657557-2a69d00dc942?auto=format&fit=crop&q=80&w=600",
    responsibilities: [
      "Conducting hearing assessments within professional scope",
      "Supporting audiological evaluation and reporting",
      "Guiding patients through hearing-test procedures",
      "Maintaining audiology equipment and patient test records"
    ],
    languagesSpoken: ["Hindi", "English"],
    bio: "Sangeeta Sinha supports audiology services and patient guidance during hearing assessments, with a focus on clear communication and organized clinical records.",
    servicesOffered: [
      "Tympanometry",
      "Audiometry (Pure Tone Audiometry - PTA)",
      "BERA (Brainstem Evoked Response Audiometry)",
      "OAE (Otoacoustic Emissions)",
      "Hearing Aid Trials & Fitting",
      "Speech Therapy & Rehabilitation"
    ]
  }
];

export const BRANCHES: Branch[] = [
  {
    id: "main-malahi-pakri",
    name: "Nalanda ENT Center, Patna",
    type: "Patna",
    address: "Malahi Pakri, Patna, Bihar, India",
    phone: "+91 94304 63465",
    emergencyPhone: "+91 94304 63465",
    whatsapp: "+91 94304 63465",
    email: "xyz@nalandaentcenter.in",
    workingHours: "Tuesday, Thursday, Saturday: 05:00 PM - 09:00 PM",
    sundayHours: "Sunday: 09:00 AM - 8:00 PM",
    mapEmbedUrl: "",
    googleMapsUrl: "https://maps.app.goo.gl/areABayhDY6kRvpL9",
    image: "https://res.cloudinary.com/df9m0nyqz/image/upload/v1790963578/Nalanda-Ent-Center/IMG_20261002_231632_dal10k.jpg",
    isMainBranch: true,
    facilitiesAvailable: [
      "Zeiss Microscopic Surgical Suite",
      "Soundproof Audiology Chamber",
      "High-Definition Video Endoscopy Unit",
      "In-House Pharmacy & Diagnostic Counter",
      "Daycare OT & Recovery Ward",
      "Ample Car Parking & Wheelchair Access",
      "O.T bed",
      "Karl Storz - Endoscopy System",
      "Bronchoscopy"
    ],
    doctorSchedule: "Dr. Arun Kumar: Sunday (10:00 AM - 2:00 PM & 5:00 PM - 8:00 PM)"
  },
  {
    id: "bihar-sharif",
    name: "Nalanda ENT Center, Bihar Sharif",
    type: "Bihar Sharif",
    address: "Kaghzi Mohalla, Bihar Sharif, Nalanda, Bihar - 803101",
    phone: "+91 94304 63465",
    emergencyPhone: "+91 94304 63465",
    whatsapp: "+91 94304 63465",
    email: "xuz@nalandaentcenter.in",
    workingHours: "Monday - Saturday: 10:00 AM - 8:00 PM",
    sundayHours: "Sunday: Closed",
    mapEmbedUrl: "",
    googleMapsUrl: "https://maps.app.goo.gl/z5xfzUETZ2QrwwRX7",
    image: "https://res.cloudinary.com/df9m0nyqz/image/upload/v1790963646/Nalanda-Ent-Center/IMG_20261002_232108_xwnbo7.jpg",
    isMainBranch: false,
    facilitiesAvailable: [
      "ENT OPD Consultation Room",
      "Video Nasal & Laryngeal Endoscopy",
      "Hearing Aid Trial Desk",
      "Air-Conditioned Waiting Lounge",
      "Zeiss Microscopic Surgical Suite",
      "Soundproof Audiology Chamber",
      "High-Definition Video Endoscopy Unit",
      "In-House Pharmacy & Diagnostic Counter",
      "Daycare OT & Recovery Ward",
      "Ample Car Parking & Wheelchair Access",
      "O.T bed",
      "Karl Storz",
      "Bronchoscopy"
    ],
    doctorSchedule: "Dr. Arun Kumar: Mon - Sat (2:30 PM - 4:30 PM)"
  }
];

export const SPECIALTY_SERVICES: SpecialtyService[] = [
  {
    id: "ear-micro-otology",
    title: "Ear Care & Micro-Otology",
    iconName: "Ear",
    shortDesc: "Advanced treatment for ear discharge, eardrum perforation, hearing loss, and tinnitus.",
    fullDescription: "Micro-Otology at Nalanda ENT Center focuses on restoring hearing and treating chronic ear infections using high-precision microscopes and microsurgical techniques.",
    symptoms: ["Ear discharge / suppuration", "Eardrum perforation", "Gradual or sudden hearing loss", "Tinnitus", "Ear pain or fullness"],
    treatments: ["Microscopic Tympanoplasty (Eardrum Repair)", "Mastoidectomy for Chronic Otitis", "Stapedectomy for Otosclerosis", "Microsuction Earwax Removal", "Grommet Insertion for Glue Ear"[...]
    benefits: ["Minimally invasive keyhole approach", "Efficient surgical hearing restoration", "Sutureless microscopic repair option", "Faster post-operative healing"],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "sinus-rhinology",
    title: "Sinus & Endoscopic Rhinology",
    iconName: "Activity",
    shortDesc: "Endoscopic sinus surgery (FESS), nasal polyp removal, septoplasty, and allergic rhinitis management.",
    fullDescription: "We use HD endoscopic video technology to clear blocked sinuses and restore normal drainage with minimally invasive techniques.",
    symptoms: ["Chronic nasal blockage", "Facial pain or pressure", "Post-nasal drip", "Loss of smell", "Frequent sneezing"],
    treatments: ["Functional Endoscopic Sinus Surgery (FESS)", "Septoplasty for Deviated Nasal Septum", "Endoscopic Nasal Polyp Excision", "Turbinate Reduction", "Epistaxis Management"],
    benefits: ["No external facial scars", "Daycare recovery options", "Direct HD camera visual accuracy", "Long-term relief from chronic sinus symptoms"],
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "throat-laryngology",
    title: "Throat, Voice & Laryngology",
    iconName: "Mic",
    shortDesc: "Micro-laryngeal voice surgery, chronic tonsillitis care, snoring evaluation, and swallowing difficulty management.",
    fullDescription: "We diagnose and treat vocal cord lesions, chronic tonsillitis, and swallowing disorders using micro-laryngeal techniques and video laryngoscopy.",
    symptoms: ["Persistent hoarseness", "Chronic throat pain", "Difficulty swallowing", "Sensation of lump in throat", "Snoring"],
    treatments: ["Micro-Laryngeal Surgery for Vocal Cord Lesions", "Coblation Adenotonsillectomy", "Video Laryngoscopy Evaluation", "Foreign Body Removal", "Reflux Management"],
    benefits: ["Preservation of natural voice quality", "Reduced post-operative throat discomfort", "Precision removal of vocal cord lesions"],
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "audiology-speech",
    title: "Audiology & Hearing Aid Clinic",
    iconName: "Headphones",
    shortDesc: "Pure Tone Audiometry (PTA), impedance testing, BERA, and programmable hearing aid fitting.",
    fullDescription: "Our soundproof audiology booth provides accurate evaluations for hearing loss, pediatric screening, and hearing aid trials.",
    symptoms: ["Difficulty hearing in noisy environments", "Asking others to repeat", "Turning up TV volume", "Dizziness with hearing change"],
    treatments: ["Pure Tone Audiometry (PTA)", "Tympanometry & Acoustic Reflex Test", "Brainstem Evoked Response Audiometry (BERA)", "Digital Hearing Aid Consultation & Trial", "Otoacoustic Emiss[...]
    benefits: ["Standardized soundproof testing room", "Latest invisible CIC & RIC hearing aids", "Comprehensive speech therapy guidance"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "vertigo-tinnitus",
    title: "Vertigo & Balance Disorder Clinic",
    iconName: "Compass",
    shortDesc: "Assessment and rehabilitation for BPPV, Meniere's disease, and vestibular neuronitis.",
    fullDescription: "We provide systematic positioning tests and canalith repositioning maneuvers for inner ear vertigo disorders.",
    symptoms: ["Spinning sensation", "Loss of balance", "Nausea with head movement", "Ringing in ear"],
    treatments: ["Epley & Semont Repositioning Maneuvers", "Vestibular Rehabilitation Therapy", "Inner Ear Pressure Management", "Medical care for Meniere's Disease"],
    benefits: ["Non-invasive bedside maneuvers", "Quick response in many BPPV cases", "Targeted balance protocols"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "pediatric-ent",
    title: "Pediatric ENT Care",
    iconName: "Smile",
    shortDesc: "Child-friendly care for enlarged adenoids, tonsils, glue ear, and airway problems.",
    fullDescription: "We provide gentle pediatric ENT care including adenoid and tonsil management, grommet placement, and speech support when needed.",
    symptoms: ["Mouth breathing during sleep", "Loud snoring", "Frequent earaches", "Recurrent sore throat"],
    treatments: ["Pediatric Endoscopy", "Coblation Adenoidectomy", "Grommet Placement", "Frenulectomy"],
    benefits: ["Child-friendly environment", "Minimal blood loss techniques", "Improved sleep and daytime alertness"],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
  }
];

export const FACILITIES: Facility[] = [
  {
    id: "fac-microscope",
    title: "Zeiss German Microscopic Surgical Suite",
    iconName: "Eye",
    description: "Equipped with Carl Zeiss surgical microscopes providing up to 25x magnification for delicate ear micro-surgeries and sutureless eardrum repair.",
    highlights: ["High optical clarity", "Integrated HD recording monitor", "Precision illumination for sub-millimeter surgical accuracy"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fac-endoscopy",
    title: "Karl Storz HD Video Nasal & Laryngeal Endoscopy",
    iconName: "Tv",
    description: "Ultra-thin rigid and flexible endoscopic cameras allow live full-screen display of sinus passages, vocal cords, and ear canals for instant clear diagnosis.",
    highlights: ["Real-time monitor view for patients", "Pain-free micro-endoscopes", "Instant digital diagnostic reports"],
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fac-audiology",
    title: "Calibrated Soundproof Audiology Booth",
    iconName: "Volume2",
    description: "Double-walled sound-dampened acoustic booth built to international audiometric standards (ISO 8253-1) for accurate pure tone audiometry and hearing threshold testing.",
    highlights: ["Zero external ambient noise interference", "Computerized diagnostic audiometer", "Comfortable recliner chair"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fac-daycare",
    title: "Modern Daycare OT & Recovery Ward",
    iconName: "Bed",
    description: "Fully air-conditioned daycare facility with multipara monitors, oxygen supply, and comfortable reclining recovery beds for post-procedure observation.",
    highlights: ["Same-day discharge for minor ENT surgeries", "Dedicated nursing assistance", "Sterile laminar airflow environment"],
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fac-pharmacy",
    title: "In-House ENT Pharmacy Counter",
    iconName: "ShieldCheck",
    description: "Stocked with specialized ENT nasal sprays, ear drops, anti-allergic formulations, and anti-vertigo medications for immediate access after consultation.",
    highlights: ["Authentic pharmaceuticals", "Direct guidance on nasal spray usage", "Reasonable MRP pricing"],
    image: "https://images.unsplash.com/photo-1580281657557-2a69d00dc942?auto=format&fit=crop&q=80&w=800"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    patientName: "Manoj Kumar Sinha",
    location: "Rajendra Nagar, Patna",
    treatment: "Microscopic Tympanoplasty (Ear Surgery)",
    rating: 5,
    review: "I had chronic ear discharge and a large hole in my eardrum for 5 years. Dr. Arun Kumar performed a microscopic surgery at Nalanda ENT Center. Today my ear is completely dry and my he[...]
    date: "14 January 2026",
    verified: true,
    patientPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test-2",
    patientName: "Sunita Singh",
    location: "Kankerbagh, Patna",
    treatment: "Endoscopic Sinus Surgery (FESS)",
    rating: 5,
    review: "I suffered from severe morning sinus headaches and blocked nose for years. Dr. Arun Kumar explained my CT scan patiently and performed endoscopic sinus surgery. I recovered quickly a[...]
    date: "28 February 2026",
    verified: true,
    patientPhoto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test-3",
    patientName: "Alok Jha",
    location: "Muzaffarpur, Bihar",
    treatment: "Vertigo & Epley Maneuver",
    rating: 5,
    review: "I woke up with spinning dizziness whenever I turned my head. Dr. Arun Kumar diagnosed BPPV and performed an Epley maneuver in the OPD. The dizziness resolved quickly.",
    date: "05 March 2026",
    verified: true,
    patientPhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test-4",
    patientName: "Pooja Verma",
    location: "Boring Road, Patna",
    treatment: "Pediatric Adenotonsillectomy",
    rating: 5,
    review: "My 6-year-old son had continuous mouth breathing and snoring due to enlarged adenoids. Dr. Arun Kumar performed Coblation surgery. The team was gentle and now he sleeps peacefully.",
    date: "18 April 2026",
    verified: true,
    patientPhoto: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200"
  }
];

export const HEALTH_BLOGS: HealthBlog[] = [
  {
    id: "blog-1",
    title: "Understanding Eardrum Perforation: Causes, Symptoms & Sutureless Micro-Repair",
    slug: "eardrum-perforation-causes-micro-repair",
    category: "Ear Care",
    date: "12 May 2026",
    author: "Dr. Arun Kumar",
    readTime: "5 min read",
    excerpt: "A hole in the eardrum can cause recurring ear infections and hearing loss. Learn about modern microscopic repair techniques that restore eardrum integrity without visible external s[...]
    content: [
      "The tympanic membrane (eardrum) is a thin, delicate barrier separating the ear canal from the middle ear cavity. Perforations can result from chronic ear infections, sudden loud blasts, or[...]
      "Key Warning Symptoms: Recurrent yellow/white ear discharge, muffled hearing, buzzing sound (tinnitus), or pain when water enters the ear.",
      "Modern Surgical Treatment: Tympanoplasty is a precise micro-surgical procedure where a small graft of natural tissue is placed under the eardrum defect using an operating microscope. This [...]
    ],
    keyTakeaways: [
      "Never insert cotton buds or sharp pins into the ear canal.",
      "Keep ear dry during bathing using silicon earplugs if you have an eardrum hole.",
      "Timely tympanoplasty surgery supports hearing protection."
    ],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "blog-2",
    title: "Chronic Sinusitis vs. Common Cold: How Endoscopic Surgery Brings Lasting Relief",
    slug: "chronic-sinusitis-vs-cold-fess-surgery",
    category: "Sinus & Allergy",
    date: "04 June 2026",
    author: "Dr. Arun Kumar",
    readTime: "6 min read",
    excerpt: "Struggling with persistent facial pressure, heavy head, and nasal blockage? Understand when sinusitis requires endoscopic sinus clearance (FESS).",
    content: [
      "While a common cold resolves within 7-10 days, chronic sinusitis persists for over 12 weeks despite routine anti-allergic medication.",
      "When sinus drainage pathways become blocked due to deviated septum or nasal polyps, trapped mucus becomes infected, causing facial headache, post-nasal drip, and loss of smell.",
      "FESS (Functional Endoscopic Sinus Surgery) utilizes high-definition endoscopes to gently open blocked sinus ostia, restoring natural ventilation without external cuts."
    ],
    keyTakeaways: [
      "Use saline nasal sprays regularly to flush indoor dust and allergens.",
      "Steam inhalation offers temporary symptom reduction but does not fix structural polyps.",
      "Consult an ENT surgeon for a CT Paranasal Sinus scan if symptoms exceed 4 weeks."
    ],
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "blog-3",
    title: "Sudden Dizziness & Vertigo: Why Your Inner Ear Might Be the Root Cause",
    slug: "sudden-dizziness-vertigo-inner-ear-bppv",
    category: "Vertigo Care",
    date: "20 July 2026",
    author: "Dr. Arun Kumar",
    readTime: "4 min read",
    excerpt: "Feeling like the room is spinning when you turn in bed? Learn about Benign Paroxysmal Positional Vertigo (BPPV) and how simple OPD maneuvers treat it.",
    content: [
      "Vertigo is often mistaken for general weakness or high blood pressure, but sudden spinning dizziness commonly originates inside the vestibular balance organs of the inner ear.",
      "BPPV occurs when micro calcium crystals (otoconia) detach and drift into the semicircular canals, sending false movement signals to the brain.",
      "Treatment: Specialized repositioning maneuvers like the Epley Maneuver guide the crystals back to their resting chamber within minutes."
    ],
    keyTakeaways: [
      "Avoid sudden violent head turns during acute vertigo episodes.",
      "Seek immediate ENT evaluation to differentiate inner ear vertigo from neurological stroke.",
      "Epley maneuver is effective for many BPPV cases."
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "Do I need an appointment before visiting Nalanda ENT Center?",
    answer: "No online booking is required. Nalanda ENT Center operates on a walk-in registration system. Patients can register directly at the front desk upon arrival during OPD hours."
  },
  {
    id: "faq-2",
    category: "General",
    question: "Where are your clinic branches located?",
    answer: "We have two locations: Main Super-Specialty Center at Malahi Pakri, Patna and our second branch at Kaghzi Mohalla, Bihar Sharif. Check the branches section for full addresses and timings."
  },
  {
    id: "faq-3",
    category: "Treatments",
    question: "Is eardrum repair (Tympanoplasty) surgery painful?",
    answer: "Micro-otology surgeries are performed under local or general anesthesia, so patients do not feel pain during the procedure."
  },
  {
    id: "faq-4",
    category: "Treatments",
    question: "Will endoscopic sinus surgery leave any marks on my face?",
    answer: "No. Functional Endoscopic Sinus Surgery (FESS) is performed through the nostrils using video endoscopes and leaves no external cuts or scars."
  },
  {
    id: "faq-5",
    category: "Audiology",
    question: "How long does a hearing test (Audiometry) take?",
    answer: "A standard Pure Tone Audiometry (PTA) in our soundproof acoustic chamber takes approximately 15 to 20 minutes. You will receive a diagnostic audiogram and brief counseling after the [...]
  },
  {
    id: "faq-6",
    category: "Emergency",
    question: "What should I do in case of an acute ENT emergency?",
    answer: "Call our Emergency Support Line at +91 94304 63465. Our emergency desk handles acute nosebleeds, foreign object ingestion in children, and sudden hearing loss on priority."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Nalanda ENT Center, Patna",
    category: "Building",
    image: "https://res.cloudinary.com/df9m0nyqz/image/upload/v1790963578/Nalanda-Ent-Center/IMG_20261002_231632_dal10k.jpg",
    description: "Modern multi-storey healthcare building at Malahi Pakri with dedicated parking."
  },
  {
    id: "gal-2",
    title: "Nalanda ENT Center, Bihar Sharif",
    category: "Building",
    image: "https://res.cloudinary.com/df9m0nyqz/image/upload/v1790963646/Nalanda-Ent-Center/IMG_20261002_232108_xwnbo7.jpg",
    description: "Modern multi-storey healthcare building at Bihar Sharif with dedicated parking."
  },
  {
    id: "gal-3",
    title: "Air-Conditioned Patient Waiting Lounge",
    category: "Reception",
    image: "https://res.cloudinary.com/df9m0nyqz/image/upload/v1790962492/Nalanda-Ent-Center/IMG20261002173427_fquejj.jpg",
    description: "Spacious, hygienic waiting area with digital tokens and drinking water amenities."
  },
  {
    id: "gal-4",
    title: "Zeiss Micro-Otology Operating Station",
    category: "Equipment",
    image: "https://res.cloudinary.com/df9m0nyqz/image/upload/v1790962378/Nalanda-Ent-Center/IMG20261002172517_grd3ub.jpg",
    description: "Advanced German microscope unit used for precision microscopic eardrum repair."
  },
  {
    id: "gal-5",
    title: "Endoscopic Consultation & Video Examination",
    category: "Treatment Room",
    image: "https://res.cloudinary.com/df9m0nyqz/image/upload/v1790961599/Nalanda-Ent-Center/IMG-20261002-WA0002_t82rg2.jpg",
    description: "HD video monitor setup for live endoscopic nasal and vocal cord examination."
  },
  {
    id: "gal-6",
    title: "Endoscopic Consultation & Video Examination",
    category: "Treatment Room",
    image: "https://res.cloudinary.com/df9m0nyqz/image/upload/v1790961604/Nalanda-Ent-Center/IMG-20261002-WA0003_rftzvh.jpg",
    description: "HD video monitor setup for live endoscopic nasal and vocal cord examination."
  },
  {
    id: "gal-7",
    title: "Endoscopic Consultation & Video Examination",
    category: "Treatment Room",
    image: "https://res.cloudinary.com/df9m0nyqz/image/upload/v1790961601/Nalanda-Ent-Center/IMG-20261002-WA0005_atv1bv.jpg",
    description: "HD video monitor setup for live endoscopic nasal and vocal cord examination."
  },
  {
    id: "gal-8",
    title: "Soundproof Acoustic Audiology Booth",
    category: "Equipment",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    description: "ISO-calibrated soundproof booth for hearing testing and digital hearing aid trials."
  },
  {
    id: "gal-9",
    title: "Clinical Nursing & Staff Team",
    category: "Staff",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    description: "Dedicated medical staff trained in patient care and surgical sterilizations."
  }
];
