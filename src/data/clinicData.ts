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
  totalPatientsServed: "5,000+",
  yearsOfExcellence: 20,
  successRate: "99.2%",
  emergencyNumber: "+91 94314 19665",
  whatsappNumber: "+91 94314 19665",
  email: "care@nalandaentcenter.com",
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
  biography: "Dr. Arun Kumar is a Consultant ENT Surgeon with qualifications in MBBS and MS (ENT) from Patna Medical College & Hospital (PMCH), Patna. He specializes in ENT consultation, endoscopy, and surgical care for ear, nose, and throat disorders. With over 20 years of clinical experience, he is known for precise diagnosis and patient-friendly treatment planning across both routine and advanced ENT conditions.",
  languages: ["English", "Hindi"],
  consultationTimings: "Mon - Sat: 10:00 AM - 2:00 PM & 5:00 PM - 8:00 PM",
  certifications: [
    "Life Member - Association of Otolaryngologists of India (AOI)",
    "Certified Endoscopic Sinus & Skull Base Surgeon",
    "Member - Indian Academy of Otolaryngology",
    "International Member - European Rhinologic Society"
  ],
  awards: [
    "Best ENT Surgeon Award - Healthcare Excellence Summit 2023",
    "Excellence in Micro-Otology Surgery - AIIMS Alumni Forum 2021",
    "Distinguished Medical Service Medal - State Health Society 2019"
  ],
  areasOfExpertise: [
    "Microscopic Tympanoplasty & Mastoidectomy",
    "Functional Endoscopic Sinus Surgery (FESS)",
    "Laser Voice & Vocal Cord Surgery",
    "Vertigo, Tinnitus & Balance Disorders Treatment",
    "Soundproof Audiology & Hearing Rehabilitation",
    "Pediatric ENT & Adenotonsillectomy"
  ],
  image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
};

export const STAFF_MEMBERS: StaffMember[] = [
  {
    id: "staff-1",
    name: "Sunita Sharma",
    designation: "Head Clinic Coordinator & Senior Nursing Officer",
    roleCategory: "Nursing",
    experience: "12 Years",
    photo: "https://images.unsplash.com/photo-1594824813571-2153349a6961?auto=format&fit=crop&q=80&w=600",
    responsibilities: [
      "Patient triage and pre-operative preparation",
      "Assisting Dr. Arun Kumar during OPD endoscopic examinations",
      "Overseeing sterilization and infection control protocols",
      "Managing nursing desk and post-operative recovery guidance"
    ],
    languagesSpoken: ["Hindi", "English"],
    bio: "Sunita has been managing patient care at Nalanda ENT Center for over a decade. Her warmth, vigilance, and strict hygiene standards ensure every patient feels comfortable and safe."
  },
  {
    id: "staff-2",
    name: "Ravi Prakash",
    designation: "Senior Audiologist & Speech Pathologist",
    roleCategory: "Audiology & Lab",
    experience: "9 Years",
    photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600",
    responsibilities: [
      "Pure Tone Audiometry (PTA) & Impedance Audiometry",
      "Digital Hearing Aid Fitting & Acoustic Tuning",
      "Speech Therapy evaluation for children and adults",
      "Otoacoustic Emissions (OAE) & BERA screening"
    ],
    languagesSpoken: ["Hindi", "English", "Maithili"],
    bio: "Ravi holds a Master's degree in Audiology and Speech-Language Pathology. He specializes in precise diagnostic audiograms and custom hearing aid fittings."
  },
  {
    id: "staff-3",
    name: "Priya Verma",
    designation: "Patient Relations Executive & Front Desk Manager",
    roleCategory: "Reception",
    experience: "6 Years",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    responsibilities: [
      "Welcoming walk-in patients and manual registration",
      "Guiding patients to OPD consultation rooms",
      "Handling telephone inquiries & branch navigation support",
      "Managing insurance claim documentation assistance"
    ],
    languagesSpoken: ["Hindi", "English"],
    bio: "Priya is the friendly face of Nalanda ENT Center. She manages registration efficiently and ensures minimal waiting time for all visiting patients."
  },
  {
    id: "staff-4",
    name: "Amit Kumar Roy",
    designation: "ENT Surgical Technician & Equipment Care Specialist",
    roleCategory: "Technician",
    experience: "8 Years",
    photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=600",
    responsibilities: [
      "Maintenance & calibration of Zeiss microscopes and Storz video endoscopes",
      "Sterilization of surgical instruments via Autoclave",
      "Daycare OT theater preparation and setup",
      "Assisting surgical team during minor ENT procedures"
    ],
    languagesSpoken: ["Hindi", "English"],
    bio: "Amit ensures that all advanced diagnostic optics and endoscopic tools operate at 100% precision with hospital-grade sterility."
  },
  {
    id: "staff-5",
    name: "Anjali Kumari",
    designation: "In-House Pharmacy & Supplies Manager",
    roleCategory: "Administration",
    experience: "7 Years",
    photo: "https://images.unsplash.com/photo-1580281657557-2a69d00dc942?auto=format&fit=crop&q=80&w=600",
    responsibilities: [
      "Dispensing prescribed ENT nasal sprays, ear drops, and medications",
      "Counseling patients on proper ear drop and nasal spray administration",
      "Inventory tracking of specialized ENT pharmaceutical supplies"
    ],
    languagesSpoken: ["Hindi", "English"],
    bio: "Anjali ensures patients receive authentic prescribed ENT medications directly at the clinic pharmacy counter with clear dosage instructions."
  }
];

export const BRANCHES: Branch[] = [
  {
    id: "main-malahi-pakdi",
    name: "Nalanda ENT Center, Patna",
    type: "Patna",
    address: "Malahi Pakdi, Patna, Bihar, India",
    phone: "+91 94314 19665",
    emergencyPhone: "+91 94314 19665",
    whatsapp: "+91 94314 19665",
    email: "xyz@nalandaentcenter.in",
    workingHours: "Monday - Saturday: Closed",
    sundayHours: "Sunday: 10:00 AM - 2:00 PM & 5:00 PM - 8:00 PM",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.527136784388!2d85.15770289999999!3d25.5934116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58854842f329%3A0xfe63a0f4d6988c8b!2sNalanda%20ENT%20Center!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
    googleMapsUrl: "https://maps.app.goo.gl/areABayhDY6kRvpL9",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800",
    isMainBranch: true,
    facilitiesAvailable: [
      "Zeiss Microscopic Surgical Suite",
      "Soundproof Audiology Chamber",
      "High-Definition Video Endoscopy Unit",
      "In-House Pharmacy & Diagnostic Counter",
      "Daycare OT & Recovery Ward",
      "Ample Car Parking & Wheelchair Access"
    ],
    doctorSchedule: "Dr. Arun Kumar: Sunday (10:00 AM - 2:00 PM & 5:00 PM - 8:00 PM)"
  },
  {
    id: "bihar-sharif",
    name: "Nalanda ENT Center, Bihar Sharif",
    type: "Bihar Sharif",
    address: "Kaghzi Mohalla, Bihar Sharif, Nalanda, Bihar - 803101",
    phone: "+91 94314 19665",
    emergencyPhone: "+91 94314 19665",
    whatsapp: "+91 94314 19665",
    email: "xuz@nalandaentcenter.in",
    workingHours: "Monday - Saturday: 10:00 AM - 8:00 PM",
    sundayHours: "Sunday: Closed",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3487.682383762534!2d85.5165475!3d25.206854999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2f3571c3a7063%3A0xfe4b9c7ccf6d7e1a!2sBihar%20Sharif!5e0!3m2!1sen!2sin!4v1710000000001!5m2!1sen!2sin",
    googleMapsUrl: "https://maps.app.goo.gl/z5xfzUETZ2QrwwRX7",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    isMainBranch: false,
    facilitiesAvailable: [
      "ENT OPD Consultation Room",
      "Video Nasal & Laryngeal Endoscopy",
      "Hearing Aid Trial Desk",
      "Minor Dressing Room",
      "Air-Conditioned Waiting Lounge"
    ],
    doctorSchedule: "Dr. Arun Kumar: Mon - Sat (2:30 PM - 4:30 PM)"
  }
];

export const SPECIALTY_SERVICES: SpecialtyService[] = [
  {
    id: "ear-micro-otology",
    title: "Ear Care & Micro-Otology",
    iconName: "Ear",
    shortDesc: "Advanced treatment for ear discharge, eardrum perforation, hearing loss, and ringing in ears (tinnitus).",
    fullDescription: "Micro-Otology at Nalanda ENT Center focuses on restoring hearing and eliminating chronic ear infections using high-precision German Zeiss microscopes. We specialize in sutureless microscopic repair of eardrum perforations, mastoid surgeries, and minimally invasive ear procedures aimed at long-term hearing restoration.",
    symptoms: ["Ear discharge / suppuration", "Eardrum hole / perforation", "Gradual or sudden hearing loss", "Tinnitus (buzzing / ringing sound)", "Ear pain or sensation of fullness"],
    treatments: ["Microscopic Tympanoplasty (Eardrum Repair)", "Mastoidectomy Surgery for Chronic Otitis", "Stapedectomy for Otosclerosis", "Ear Wax Removal via Microsuction", "Grommet Insertion for Fluid Ear"],
    benefits: ["Minimally invasive keyhole approach", "High surgical hearing restoration rate", "Sutureless microscopic repair option", "Faster post-operative healing"],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "sinus-rhinology",
    title: "Sinus & Endoscopic Rhinology",
    iconName: "Activity",
    shortDesc: "Endoscopic sinus surgery (FESS), nasal polyp removal, septum correction (septoplasty), and allergic rhinitis management.",
    fullDescription: "Chronic sinusitis and nasal blockages significantly affect breathing and quality of life. We utilize HD Storz endoscopic video technology to clear blocked sinuses without any external cuts or scars, improving airflow and reducing long-term allergy symptom burden.",
    symptoms: ["Chronic nasal blockage & difficulty breathing", "Facial pain, pressure & sinus headache", "Persistent post-nasal drip & cough", "Loss of smell (Anosmia)", "Frequent sneezing & nasal allergy symptoms"],
    treatments: ["Functional Endoscopic Sinus Surgery (FESS)", "Septoplasty for Deviated Nasal Septum (DNS)", "Endoscopic Nasal Polyp Excision", "Turbinate Reduction for Allergic Rhinitis", "Epistaxis Control & Nasal Packing"],
    benefits: ["Zero facial scars or incisions", "Same-day daycare recovery options", "Direct HD camera visual accuracy", "Long-term relief from chronic sinus pain"],
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "throat-laryngology",
    title: "Throat, Voice & Laryngology",
    iconName: "Mic",
    shortDesc: "Micro-laryngeal voice surgery, chronic tonsillitis treatment, snoring evaluation, and swallowing difficulty care.",
    fullDescription: "Your voice is vital. We diagnose and treat vocal cord polyps, nodules, hoarseness, chronic tonsillitis, and sleep apnea with advanced micro-laryngeal techniques and video laryngoscopy.",
    symptoms: ["Persistent hoarseness or voice change", "Chronic throat pain or recurrent tonsillitis", "Difficulty swallowing (dysphagia)", "Sensation of lump in throat", "Loud snoring & sleep apnea"],
    treatments: ["Micro-Laryngeal Surgery (MLS) for Vocal Cord Polyps", "Coblation Adenotonsillectomy", "Video Laryngoscopy Evaluation", "Foreign Body Removal from Throat", "Gastroesophageal Reflux Management"],
    benefits: ["Preservation of natural voice quality", "Reduced post-operative throat discomfort", "Precision removal of vocal cord lesions"],
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "audiology-speech",
    title: "Audiology & Hearing Aid Clinic",
    iconName: "Headphones",
    shortDesc: "Diagnostic Pure Tone Audiometry (PTA), Impedance testing, BERA, and digital programmable hearing aid fitting.",
    fullDescription: "Our soundproof audiology booth provides precise baseline evaluations for age-related hearing loss, noise-induced damage, and pediatric hearing screening, accompanied by trials of digital hearing aids and rehabilitation guidance.",
    symptoms: ["Difficulty hearing in noisy environments", "Asking others to repeat sentences", "Turning TV volume higher than normal", "Dizziness coupled with hearing drop"],
    treatments: ["Pure Tone Audiometry (PTA)", "Tympanometry & Acoustic Reflex Test", "Brainstem Evoked Response Audiometry (BERA)", "Digital Hearing Aid Consultation & Trial", "Customized Ear Plugs & Noise Protection"],
    benefits: ["Standardized soundproof testing room", "Latest invisible CIC & RIC hearing aids", "Comprehensive speech therapy guidance"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "vertigo-tinnitus",
    title: "Vertigo & Balance Disorder Clinic",
    iconName: "Compass",
    shortDesc: "Specialized assessment and rehabilitation maneuvers for BPPV, Meniere's disease, and vestibular neuronitis.",
    fullDescription: "Dizziness and vertigo can be frightening. Most vertigo stems from inner ear crystal displacement (BPPV). We provide systematic positioning tests and canalith repositioning maneuvers to help patients regain balance quickly.",
    symptoms: ["Spinning sensation when turning in bed", "Loss of balance while walking", "Nausea associated with head movement", "Ringing or fullness in ear with dizziness"],
    treatments: ["Epley & Semont Repositioning Maneuvers", "Vestibular Rehabilitation Therapy (VRT)", "Inner Ear Pressure Management", "Medical Care for Meniere's Disease"],
    benefits: ["Non-invasive bed-side maneuvers", "Immediate dizziness relief in BPPV", "Targeted inner ear balance protocols"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "pediatric-ent",
    title: "Pediatric ENT Care",
    iconName: "Smile",
    shortDesc: "Child-friendly care for enlarged adenoids, tonsils, mouth breathing, glue ear, and airway problems.",
    fullDescription: "Children require a gentle, comforting medical touch. We treat pediatric ear infections, snoring due to enlarged adenoids, tongue tie, and speech delay with high safety standards and family-friendly guidance.",
    symptoms: ["Mouth breathing during sleep in children", "Loud snoring & restless sleep", "Frequent earaches & fluid accumulation", "Recurrent high fever with sore throat"],
    treatments: ["Gentle Pediatric Endoscopy", "Coblation Adenoidectomy", "Grommet Placement for Glue Ear", "Frenulectomy for Tongue-Tie"],
    benefits: ["Gentle, non-intimidating clinic environment", "Minimal pediatric blood loss techniques", "Improved sleep and daytime child alertness"],
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
    highlights: ["100% authentic pharmaceuticals", "Direct guidance on nasal spray usage", "Reasonable MRP pricing"],
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
    review: "I had chronic ear discharge and a large hole in my eardrum for 5 years. Dr. Arun Kumar performed a microscopic surgery at Nalanda ENT Center. Today my ear is completely dry and my hearing has improved significantly.",
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
    review: "I suffered from severe morning sinus headaches and blocked nose for years. Dr. Arun Kumar explained my CT scan patiently and performed endoscopic sinus surgery. I got discharged the same day and recovered quickly.",
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
    review: "I woke up with terrifying spinning dizziness whenever I turned my head. Dr. Arun Kumar diagnosed BPPV inner ear crystal issue and performed a 10-minute Epley maneuver right in the OPD. Thanks to this, I can now sleep comfortably without vertigo.",
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
    review: "My 6-year-old son had continuous mouth breathing and snoring due to enlarged adenoids. Dr. Arun Kumar performed Coblation surgery. The team was so gentle with him. Now he sleeps peacefully and feels much more energetic.",
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
    excerpt: "A hole in the eardrum can cause recurring ear infections and hearing loss. Learn about modern microscopic repair techniques that restore eardrum integrity without visible external scars.",
    content: [
      "The tympanic membrane (eardrum) is a thin, delicate barrier separating the ear canal from the middle ear cavity. Perforations can result from chronic ear infections, sudden loud blasts, or trauma.",
      "Key Warning Symptoms: Recurrent yellow/white ear discharge, muffled hearing, buzzing sound (tinnitus), or pain when water enters the ear.",
      "Modern Surgical Treatment: Tympanoplasty is a precise micro-surgical procedure where a small graft of natural tissue is placed under the eardrum defect using a Zeiss operating microscope. Sutureless techniques help reduce scarring and speed recovery."
    ],
    keyTakeaways: [
      "Never insert cotton buds or sharp pins into the ear canal.",
      "Keep ear dry during bathing using silicon earplugs if you have an eardrum hole.",
      "Timely tympanoplasty surgery prevents permanent hearing nerve damage."
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
      "When sinus drainage pathways become blocked due to deviated septum (DNS) or nasal polyps, trapped mucus becomes infected, causing facial headache, post-nasal drip, and loss of smell.",
      "FESS (Functional Endoscopic Sinus Surgery) utilizes high-definition German video endoscopes to gently open blocked sinus ostia, restoring natural ventilation without any facial cuts or external scars."
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
      "Vertigo is often mistaken for general weakness or high blood pressure, but over 70% of sudden spinning dizziness originates inside the vestibular balance organs of the inner ear.",
      "BPPV occurs when micro calcium crystals (otoconia) detach and drift into the fluid-filled semicircular canals, sending false movement signals to the brain.",
      "Treatment: Instead of long-term sedating drugs, specialized repositioning maneuvers like the Epley Maneuver guide the crystals back to their harmless resting chamber within minutes."
    ],
    keyTakeaways: [
      "Avoid sudden violent head turns during acute vertigo episodes.",
      "Seek immediate ENT evaluation to differentiate inner ear vertigo from neurological stroke.",
      "Epley maneuver achieves over 90% resolution rate in BPPV."
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "Do I need an appointment before visiting Nalanda ENT Center?",
    answer: "No online booking is required! Nalanda ENT Center operates on a direct physical walk-in registration system. Patients can register directly at the front desk upon arrival during OPD consultation hours."
  },
  {
    id: "faq-2",
    category: "General",
    question: "Where are your clinic branches located in Patna?",
    answer: "We have two branches: 1) Main Super-Specialty Center at Rajendra Nagar (Plot 42, Health Plaza Main Road), and 2) City OPD Branch at Kankerbagh (Apex Medicare Building). You can check full location details and maps on our contact page."
  },
  {
    id: "faq-3",
    category: "Treatments",
    question: "Is eardrum repair (Tympanoplasty) surgery painful?",
    answer: "No. Micro-otology surgeries are performed under local or general anesthesia so you feel zero pain during the procedure. At Nalanda ENT Center, Dr. Arun Kumar uses microscopic keyhole techniques to reduce discomfort and promote faster recovery."
  },
  {
    id: "faq-4",
    category: "Treatments",
    question: "Will endoscopic sinus surgery leave any marks on my face?",
    answer: "Not at all. Functional Endoscopic Sinus Surgery (FESS) is performed entirely through the nostrils using high-definition video cameras. There are absolutely no external cuts, incisions, or facial scars."
  },
  {
    id: "faq-5",
    category: "Audiology",
    question: "How long does a hearing test (Audiometry) take?",
    answer: "A standard Pure Tone Audiometry (PTA) in our soundproof acoustic chamber takes approximately 15 to 20 minutes. You will receive an official diagnostic audiogram graph immediately along with interpretation."
  },
  {
    id: "faq-6",
    category: "Emergency",
    question: "What should I do in case of an acute ENT emergency (e.g. foreign body in ear/throat or severe nosebleed)?",
    answer: "Call our Emergency Support Line directly at +91 98765 43210. Our emergency desk handles acute nosebleeds (epistaxis), foreign object ingestion in children, and sudden hearing loss on priority."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Clinic Exterior & Entrance",
    category: "Building",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800",
    description: "Modern multi-storey healthcare building at Rajendra Nagar with dedicated parking."
  },
  {
    id: "gal-2",
    title: "Air-Conditioned Patient Waiting Lounge",
    category: "Reception",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    description: "Spacious, hygienic waiting area with digital tokens and drinking water amenities."
  },
  {
    id: "gal-3",
    title: "Zeiss Micro-Otology Operating Station",
    category: "Equipment",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    description: "Advanced German microscope unit used for precision microscopic eardrum repair."
  },
  {
    id: "gal-4",
    title: "Endoscopic Consultation & Video Examination",
    category: "Treatment Room",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800",
    description: "HD video monitor setup for live endoscopic nasal and vocal cord examination."
  },
  {
    id: "gal-5",
    title: "Soundproof Acoustic Audiology Booth",
    category: "Equipment",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    description: "ISO-calibrated soundproof booth for hearing testing and digital hearing aid trials."
  },
  {
    id: "gal-6",
    title: "Clinical Nursing & Staff Team",
    category: "Staff",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    description: "Dedicated medical staff trained in patient care and surgical sterilizations."
  }
];
