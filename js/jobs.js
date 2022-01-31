let JOBS = [
	'Accountant',
	'Auditor',
	'Actor',
	'Actuary',
	'Adhesive Bonding Machine Operator',
	'Tender',
	'Administrative Law Judge',
	'Administrative Services Manager',
	'Instructor',
	'Advertising Sales Agent',
	'Advertising and Promotions Manager',
	'Aerospace Engineering and Operations Technician',
	'Aerospace Engineer',
	'Agent',
	'Business Managers of Artist',
	'Agricultural Engineer',
	'Agricultural Equipment Operator',
	'Agricultural Inspector',
	'Agricultural Sciences Teacher',
	'Agricultural Worker',
	'Agricultural and Food Science Technician',
	'Air Traffic Controller',
	'Aircraft Cargo Handling Supervisor',
	'Aircraft Mechanic',
	'Service Technician',
	'Aircraft Structure',
	'Airfield Operations Specialist',
	'Airline Pilot',
	'All Occupation',
	'Ambulance Driver',
	'Attendant',
	'Amusement and Recreation Attendant',
	'Anesthesiologist',
	'Animal Breeder',
	'Animal Control Worker',
	'Animal Scientist',
	'Animal Trainer',
	'Anthropologist',
	'Archeologist',
	'Anthropology and Archeology Teacher',
	'Appraiser',
	'Assessors of Real Estate',
	'Arbitrator',
	'Architect',
	'Architectural and Civil Drafter',
	'Architectural and Engineering Manager',
	'Architecture Teacher',
	'Architecture and Engineering Occupation',
	'Archivist',
	'Area',
	'Art Director',
	'Artist',
	'Assembler',
	'Fabricator',
	'Astronomer',
	'Athlete',
	'Sports Competitor',
	'Athletic Trainer',
	'Atmospheric and Space Scientist',
	'Atmospheric',
	'Audio and Video Equipment Technician',
	'Audiologist',
	'Automotive Body and Related Repairer',
	'Automotive Glass Installer',
	'Repairer',
	'Automotive Service Technician',
	'Mechanic',
	'Automotive and Watercraft Service Attendant',
	'Avionics Technicians ',
	'Baggage Porter',
	'Bellhop',
	'Bailiff',
	'Baker',
	'Barber',
	'Bartender',
	'Bicycle Repairer',
	'Bill and Account Collector',
	'Billing and Posting Clerk',
	'Biochemist',
	'Biophysicist',
	'Biological Science Teacher',
	'Biological Scientist',
	'Biological Technician',
	'Biomedical Engineer',
	'Boilermaker',
	'Bookkeeping',
	'Brickmason',
	'Blockmason',
	'Bridge and Lock Tender',
	'Broadcast News Analyst',
	'Broadcast Technician',
	'Brokerage Clerk',
	'Budget Analyst',
	'Building Cleaning Worker',
	'Bus Driver',
	'Bus Driver',
	'Bu',
	'Truck Mechanic',
	'Diesel Engine Specialist',
	'Business Operations Specialist',
	'Business Teacher',
	'Busines',
	'Financial Operations Occupation',
	'Butcher',
	'Meat Cutter',
	'Buyer',
	'Purchasing Agent',
	'Cabinetmaker',
	'Bench Carpenter',
	'Camera Operator',
	'Camera and Photographic Equipment Repairer',
	'Captain',
	'Cardiovascular Technologist',
	'Technician',
	'Career/Technical Education Teacher',
	'Career/Technical Education Teacher',
	'Cargo and Freight Agent',
	'Carpenter',
	'Carpet Installer',
	'Cartographer',
	'Photogrammetrist',
	'Cashier',
	'Cement Mason',
	'Concrete Finisher',
	'Chef',
	'Head Cook',
	'Chemical Engineer',
	'Chemical Equipment Operator',
	'Tender',
	'Chemical Plant and System Operator',
	'Chemical Technician',
	'Chemistry Teacher',
	'Chemist',
	'Chief Executive',
	'Child',
	'Childcare Worker',
	'Chiropractor',
	'Choreographer',
	'Civil Engineering Technician',
	'Civil Engineer',
	'Claims Adjuster',
	'Cleaners of Vehicle',
	'Equipment',
	'Cleaning',
	'Clergy',
	'Clinical',
	'Coache',
	'Scout',
	'Coating',
	'Coil Winder',
	'Coin',
	'Combined Food Preparation and Serving Worker',
	'Commercial Diver',
	'Commercial Pilot',
	'Commercial and Industrial Designer',
	'Communications Equipment Operator',
	'Communications Teacher',
	'Community and Social Service Specialist',
	'Community and Social Service Occupation',
	'Compensation and Benefits Manager',
	'Compensation',
	'Compliance Officer',
	'Computer Hardware Engineer',
	'Computer Occupation',
	'Computer Operator',
	'Computer Programmer',
	'Computer Science Teacher',
	'Computer Support Specialist',
	'Computer Systems Analyst',
	'Computer and Information Systems Manager',
	'Computer and Mathematical Occupation',
	'Computer',
	'Computer-Controlled Machine Tool Operator',
	'Concierge',
	'Conservation Scientist',
	'Construction Laborer',
	'Construction Manager',
	'Construction and Building Inspector',
	'Construction and Extraction Occupation',
	'Construction and Related Worker',
	'Continuous Mining Machine Operator',
	'Control and Valve Installer',
	'Repairer',
	'Conveyor Operator',
	'Tender',
	'Cook',
	'Cooling and Freezing Equipment Operator',
	'Tender',
	'Correctional Officer',
	'Jailer',
	'Correspondence Clerk',
	'Cost Estimator',
	'Costume Attendant',
	'Counselor',
	'Counter Attendant',
	'Counter and Rental Clerk',
	'Courier',
	'Messenger',
	'Court Reporter',
	'Court',
	'Craft Artist',
	'Crane and Tower Operator',
	'Credit Analyst',
	'Credit Authorizer',
	'Credit Counselor',
	'Criminal Justice and Law Enforcement Teacher',
	'Crossing Guard',
	'Crushing',
	'Curator',
	'Customer Service Representative',
	'Cutter',
	'Trimmer',
	'Cutting and Slicing Machine Setter',
	'Cutting',
	'Dancer',
	'Data Entry Keyer',
	'Database Administrator',
	'Demonstrator',
	'Product Promoter',
	'Dental Assistant',
	'Dental Hygienist',
	'Dental Laboratory Technician',
	'Dentist',
	'Dentist',
	'Derrick Operator',
	'Designer',
	'Desktop Publisher',
	'Detective',
	'Criminal Investigator',
	'Diagnostic Medical Sonographer',
	'Dietetic Technician',
	'Dietitian',
	'Nutritionist',
	'Dining Room and Cafeteria Attendant',
	'Bartender Helper',
	'Director',
	'Dishwasher',
	'Dispatcher',
	'Door-to-Door Sales Worker',
	'Drafter',
	'Dredge Operator',
	'Drilling and Boring Machine Tool Setter',
	'Driver/Sales Worker',
	'Drywall and Ceiling Tile Installers ',
	'Earth Driller',
	'Economics Teacher',
	'Economist',
	'Editor',
	'Education Administrator',
	'Education Administrator',
	'Education Administrator',
	'Education Administrator',
	'Education Teacher',
	'Education',
	'Education',
	'Educational',
	'Electric Motor',
	'Electrical Engineer',
	'Electrical Power-Line Installer',
	'Repairer',
	'Electrical and Electronics Drafter',
	'Electrical and Electronics Installer',
	'Repairer',
	'Electrical and Electronics Repairer',
	'Electrical and Electronics Repairer',
	'Electrician',
	'Electro-Mechanical Technician',
	'Electromechanical Equipment Assembler',
	'Electronic Equipment Installer',
	'Repairer',
	'Repairer',
	'Electronics Engineer',
	'Elementary School Teacher',
	'Elevator Installer',
	'Repairer',
	'Eligibility Interviewer',
	'Embalmer',
	'Emergency Management Director',
	'Emergency Medical Technician',
	'Paramedic',
	'Engine and Other Machine Assembler',
	'Engineering Teacher',
	'Engineering Technician',
	'Engineer',
	'English Language and Literature Teacher',
	'Entertainer',
	'Performer',
	'Entertainment Attendant',
	'Related Worker',
	'Environmental Engineering Technician',
	'Environmental Engineer',
	'Environmental Science Teacher',
	'Environmental Scientist',
	'Specialist',
	'Epidemiologist',
	'Etcher',
	'Engraver',
	'Executive Secretarie',
	'Executive Administrative Assistant',
	'Explosives Worker',
	'Extraction Worker',
	'Extruding and Drawing Machine Setter',
	'Extruding and Forming Machine Setter',
	'Extruding',
	'Fabric Mender',
	'Fabric and Apparel Patternmaker',
	'Faller',
	'Family and General Practitioner',
	'Farm Equipment Mechanic',
	'Service Technician',
	'Farm Labor Contractor',
	'Farm and Home Management Advisor',
	'Farmer',
	'Farming',
	'Farmworker',
	'Laborer',
	'Farmworker',
	'Fashion Designer',
	'Fence Erector',
	'Fiberglass Laminator',
	'Fabricator',
	'File Clerk',
	'Film and Video Editor',
	'Financial Analyst',
	'Financial Examiner',
	'Financial Manager',
	'Financial Specialist',
	'Fine Artist',
	'Fire Inspector',
	'Investigator',
	'Firefighter',
	'Extraction Worker',
	'First-Line Supervisors of Farming',
	'Fish and Game Warden',
	'Fisher',
	'Related Fishing Worker',
	'Fitness Trainer',
	'Aerobics Instructor',
	'Flight Attendant',
	'Floor Layer',
	'Floor Sander',
	'Finisher',
	'Floral Designer',
	'Food Batchmaker',
	'Food Cooking Machine Operator',
	'Tender',
	'Food Preparation Worker',
	'Food Preparation and Serving Related Worker',
	'Food Scientist',
	'Technologist',
	'Food Server',
	'Food Service Manager',
	'Food and Tobacco Roasting',
	'Foreign Language and Literature Teacher',
	'Forensic Science Technician',
	'Forest Fire Inspector',
	'Prevention Specialist',
	'Forest and Conservation Technician',
	'Forest and Conservation Worker',
	'Forester',
	'Forestry and Conservation Science Teacher',
	'Forging Machine Setter',
	'Foundry Mold and Coremaker',
	'Funeral Attendant',
	'Funeral Service Manager',
	'Furniture Finisher',
	'Gaming Cage Worker',
	'Gaming Change Person',
	'Booth Cashier',
	'Gaming Dealer',
	'Gaming Manager',
	'Gaming Service Worker',
	'Gaming Supervisor',
	'Gaming Surveillance Officer',
	'Gaming Investigator',
	'Gaming and Sports Book Writer',
	'Runner',
	'Gas Plant Operator',
	'General and Operations Manager',
	'Geographer',
	'Geography Teacher',
	'Geological and Petroleum Technician',
	'Geoscientist',
	'Glazier',
	'Grader',
	'Sorter',
	'Graduate Teaching Assistant',
	'Graphic Designer',
	'Grinding and Polishing Worker',
	'Grinding',
	'Grounds Maintenance Worker',
	'Hairdresser',
	'Hazardous Materials Removal Worker',
	'Health Educator',
	'Health Specialties Teacher',
	'Health Technologist',
	'Technician',
	'Health and Safety Engineer',
	'Healthcare Practitioner',
	'Technical Occupation',
	'Healthcare Practitioner',
	'Technical Worker',
	'Healthcare Social Worker',
	'Healthcare Support Occupation',
	'Healthcare Support Worker',
	'Heat Treating Equipment Setter',
	'Heavy and Tractor-Trailer Truck Driver',
	'Highway Maintenance Worker',
	'Historian',
	'History Teacher',
	'Hoist and Winch Operator',
	'Home Appliance Repairer',
	'Home Economics Teacher',
	'Home Health Aide',
	'Host',
	'Hostess',
	'Human Resources Assistant',
	'Human Resources Manager',
	'Hunter',
	'Trapper',
	'Hydrologist',
	'Industrial Engineering Technician',
	'Industrial Engineer',
	'Industrial Machinery Mechanic',
	'Industrial Production Manager',
	'Industrial Truck and Tractor Operator',
	'Industrial-Organizational Psychologist',
	'Information Security Analyst',
	'Information and Record Clerk',
	'Inspector',
	'Instructional Coordinator',
	'Insulation Worker',
	'Insulation Worker',
	'Insurance Appraiser',
	'Insurance Claim',
	'Policy Processing Clerk',
	'Insurance Sales Agent',
	'Insurance Underwriter',
	'Interior Designer',
	'Internist',
	'Interpreter',
	'Translator',
	'Interviewer',
	'Janitor',
	'Cleaner',
	'Jeweler',
	'Precious Stone and Metal Worker',
	'Judge',
	'Judicial Law Clerk',
	'Kindergarten Teacher',
	'Laborer',
	'Landscape Architect',
	'Landscaping and Groundskeeping Worker',
	'Lathe and Turning Machine Tool Setter',
	'Laundry and Dry-Cleaning Worker',
	'Law Teacher',
	'Lawyer',
	'Layout Worker',
	'Legal Occupation',
	'Legal Secretary',
	'Legal Support Worker',
	'Legislator',
	'Librarian',
	'Library Assistant',
	'Library Science Teacher',
	'Library Technician',
	'Life Scientist',
	'Lifeguard',
	'Light Truck or Delivery Services Driver',
	'Loading Machine Operator',
	'Loan Interviewer',
	'Clerk',
	'Loan Officer',
	'Locksmith',
	'Safe Repairer',
	'Locomotive Engineer',
	'Locomotive Firer',
	'Lodging Manager',
	'Log Grader',
	'Scaler',
	'Logging Equipment Operator',
	'Logging Worker',
	'Logisticians ',
	'Machine Feeder',
	'Machinist',
	'Maid',
	'Housekeeping Cleaner',
	'Mail Clerk',
	'Mail Machine Operator',
	'Maintenance Worker',
	'Maintenance and Repair Worker',
	'Makeup Artist',
	'Management Analyst',
	'Management Occupation',
	'Manager',
	'Manicurist',
	'Pedicurist',
	'Marine Engineer',
	'Naval Architect',
	'Market Research Analyst',
	'Marketing Specialist',
	'Marketing Manager',
	'Marriage and Family Therapist',
	'Massage Therapist',
	'Material Moving Worker',
	'Materials Engineer',
	'Materials Scientist',
	'Mathematical Science Occupation',
	'Mathematical Science Teacher',
	'Mathematical Technician',
	'Mathematician',
	'Mechanical Door Repairer',
	'Mechanical Drafter',
	'Mechanical Engineering Technician',
	'Mechanical Engineer',
	'Media and Communication Equipment Worker',
	'Media and Communication Worker',
	'Medical Appliance Technician',
	'Medical Assistant',
	'Medical Equipment Preparer',
	'Medical Equipment Repairer',
	'Health Information Technician',
	'Medical Scientist',
	'Medical Secretary',
	'Medical Transcriptionist',
	'Medical and Clinical Laboratory Technician',
	'Medical and Clinical Laboratory Technologist',
	'Medical and Health Services Manager',
	'Mental Health Counselor',
	'Merchandise Displayer',
	'Window Trimmer',
	'Metal Worker',
	'Plastic Worker',
	'Metal-Refining Furnace Operator',
	'Meter Reader',
	'Microbiologist',
	'Middle School Teacher',
	'Milling and Planing Machine Setter',
	'Millwright',
	'Mine Cutting and Channeling Machine Operator',
	'Mine Shuttle Car Operator',
	'Mining Machine Operator',
	'Mining and Geological Engineer',
	'Mixing and Blending Machine Setter',
	'Mobile Heavy Equipment Mechanic',
	'Model Maker',
	'Molder',
	'Motion Picture Projectionist',
	'Motor Vehicle Operator',
	'Motorboat Mechanic',
	'Service Technician',
	'Motorboat Operator',
	'Motorcycle Mechanic',
	'Multimedia Artist',
	'Animator',
	'Multiple Machine Tool Setter',
	'Museum Technician',
	'Conservator',
	'Music Director',
	'Composer',
	'Musical Instrument Repairer',
	'Tuner',
	'Musician',
	'Singer',
	'Natural Sciences Manager',
	'Network and Computer Systems Administrator',
	'New Accounts Clerk',
	'Nonfarm Animal Caretaker',
	'Nuclear Engineer',
	'Nuclear Medicine Technologist',
	'Nuclear Power Reactor Operator',
	'Nuclear Technician',
	'Nursing Aide',
	'Nursing Instructor',
	'Teacher',
	'Obstetrician',
	'Gynecologist',
	'Occupational Health and Safety Specialist',
	'Occupational Health and Safety Technician',
	'Occupational Therapist',
	'Occupational Therapy Aide',
	'Occupational Therapy Assistant',
	'Office Clerk',
	'Office Machine Operator',
	'Office and Administrative Support Worker',
	'Operating Engineer',
	'Other Construction Equipment Operator',
	'Operations Research Analyst',
	'Ophthalmic Laboratory Technician',
	'Optician',
	'Optometrist',
	'Oral and Maxillofacial Surgeon',
	'Order Clerk',
	'Orthodontist',
	'Orthotist',
	'Prosthetist',
	'Packaging and Filling Machine Operator',
	'Tender',
	'Packer',
	'Packager',
	'Painter',
	'Painter',
	'Painting',
	'Paper Goods Machine Setter',
	'Paperhanger',
	'Paralegal',
	'Legal Assistant',
	'Parking Enforcement Worker',
	'Parking Lot Attendant',
	'Parts Salesperson',
	'Patternmaker',
	'Patternmaker',
	'Paving',
	'Payroll and Timekeeping Clerk',
	'Pediatrician',
	'Personal Care Aide',
	'Personal Care and Service Occupation',
	'Personal Care and Service Worker',
	'Personal Financial Advisor',
	'Pest Control Worker',
	'Pesticide Handler',
	'Petroleum Engineer',
	'Petroleum Pump System Operator',
	'Pharmacist',
	'Pharmacy Aide',
	'Pharmacy Technician',
	'Philosophy and Religion Teacher',
	'Photographer',
	'Photographic Process Worker',
	'Processing Machine Operator',
	'Physical Scientist',
	'Physical Therapist Aide',
	'Physical Therapist Assistant',
	'Physical Therapist',
	'Physician Assistant',
	'Physician',
	'Surgeon',
	'Physicist',
	'Physics Teacher',
	'Pile-Driver Operator',
	'Pipelayer',
	'Plant and System Operator',
	'Plasterer',
	'Stucco Mason',
	'Plating and Coating Machine Setter',
	'Plumber',
	'Podiatrist',
	'Political Science Teacher',
	'Political Scientist',
	'Postal Service Clerk',
	'Postal Service Mail Carrier',
	'Postal Service Mail Sorter',
	'Postmaster',
	'Mail Superintendent',
	'Postsecondary Teacher',
	'Pourer',
	'Caster',
	'Power Distributor',
	'Dispatcher',
	'Power Plant Operator',
	'Precision Instrument and Equipment Repairer',
	'Prepress Technician',
	'Preschool Teacher',
	'Presser',
	'Print Binding and Finishing Worker',
	'Printing Press Operator',
	'Private Detective',
	'Investigator',
	'Probation Officer',
	'Correctional Treatment Specialist',
	'Procurement Clerk',
	'Producer',
	'Director',
	'Production Occupation',
	'Production Worker',
	'Production',
	'Proofreader',
	'Copy Marker',
	'Property',
	'Prosthodontist',
	'Protective Service Occupation',
	'Protective Service Worker',
	'Psychiatric Aide',
	'Psychiatric Technician',
	'Psychiatrist',
	'Psychologist',
	'Psychology Teacher',
	'Public Address System and Other Announcer',
	'Public Relations Specialist',
	'Public Relation',
	'Fundraising Manager',
	'Pump Operator',
	'Purchasing Agent',
	'Purchasing Manager',
	'Radiation Therapist',
	'Radio Operator',
	'Radio and Television Announcer',
	'Radiologic Technologist',
	'Rail Car Repairer',
	'Rail Transportation Worker',
	'Rail Yard Engineer',
	'Railroad Brake',
	'Railroad Conductor',
	'Yardmaster',
	'Real Estate Broker',
	'Real Estate Sales Agent',
	'Receptionist',
	'Information Clerk',
	'Recreation Worker',
	'Recreation and Fitness Studies Teacher',
	'Recreational Therapist',
	'Recreational Vehicle Service Technician',
	'Refractory Materials Repairer',
	'Refuse and Recyclable Material Collector',
	'Registered Nurse',
	'Rehabilitation Counselor',
	'Reinforcing Iron and Rebar Worker',
	'Religious Worker',
	'Reporter',
	'Correspondent',
	'Reservation and Transportation Ticket Agent',
	'Travel Clerk',
	'Residential Advisor',
	'Respiratory Therapist',
	'Respiratory Therapy Technician',
	'Retail Salesperson',
	'Rigger',
	'Rock Splitter',
	'Rolling Machine Setter',
	'Roof Bolter',
	'Roofer',
	'Rotary Drill Operator',
	'Roustabout',
	'Sailor',
	'Marine Oiler',
	'Sales Engineer',
	'Sales Manager',
	'Sales Representative',
	'Sawing Machine Setter',
	'Secondary School Teacher',
	'Secretary',
	'Administrative Assistant',
	'Security Guard',
	'Security and Fire Alarm Systems Installer',
	'Segmental Paver',
	'Self-Enrichment Education Teacher',
	'Semiconductor Processor',
	'Septic Tank Servicer',
	'Sewer Pipe Cleaner',
	'Service Unit Operator',
	'Set and Exhibit Designer',
	'Sewer',
	'Sewing Machine Operator',
	'Shampooer',
	'Sheet Metal Worker',
	'Ship Engineer',
	'Shipping',
	'Shoe Machine Operator',
	'Tender',
	'Shoe and Leather Worker',
	'Repairer',
	'Signal and Track Switch Repairer',
	'Skincare Specialist',
	'Slaughterer',
	'Meat Packer',
	'Slot Supervisor',
	'Social Science Research Assistant',
	'Social Sciences Teacher',
	'Social Scientist',
	'Social Work Teacher',
	'Social Worker',
	'Social and Community Service Manager',
	'Social and Human Service Assistant',
	'Sociologist',
	'Sociology Teacher',
	'Software Developer',
	'Soil and Plant Scientist',
	'Sound Engineering Technician',
	'Special Education Teacher',
	'Speech-Language Pathologist',
	'Stationary Engineer',
	'Boiler Operator',
	'Statistical Assistant',
	'Statistician',
	'Stock Clerk',
	'Order Filler',
	'Stonemason',
	'Structural Iron and Steel Worker',
	'Structural Metal Fabricator',
	'Fitter',
	'Subway and Streetcar Operator',
	'Surgeon',
	'Surgical Technologist',
	'Survey Researcher',
	'Surveying and Mapping Technician',
	'Surveyor',
	'Switchboard Operator',
	'Tailor',
	'Tank Car',
	'Taper',
	'Tax Examiner',
	'Collector',
	'Tax Preparer',
	'Taxi Driver',
	'Chauffeur',
	'Teacher Assistant',
	'Teacher',
	'Instructor',
	'Team Assembler',
	'Technical Writer',
	'Telecommunications Equipment Installer',
	'Repairer',
	'Telecommunications Line Installer',
	'Repairer',
	'Telemarketer',
	'Telephone Operator',
	'Teller',
	'Terrazzo Worker',
	'Finisher',
	'Textile Bleaching and Dyeing Machine Operator',
	'Tender',
	'Textile Cutting Machine Setter',
	'Textile Knitting and Weaving Machine Setter',
	'Therapist',
	'Tile and Marble Setter',
	'Timing Device Assembler',
	'Adjuster',
	'Tire Builder',
	'Tire Repairer',
	'Changer',
	'Title Examiner',
	'Tool Grinder',
	'Tool and Die Maker',
	'Tour Guide',
	'Escort',
	'Traffic Technician',
	'Training and Development Manager',
	'Training and Development Specialist',
	'Transit and Railroad Police',
	'Transportation Attendant',
	'Transportation Inspector',
	'Transportation Security Screener',
	'Transportation Worker',
	'Travel Agent',
	'Travel Guide',
	'Tree Trimmer',
	'Pruner',
	'Umpire',
	'Upholsterer',
	'Urban and Regional Planner',
	'Usher',
	'Veterinarian',
	'Veterinary Assistant',
	'Laboratory Animal Caretaker',
	'Veterinary Technologist',
	'Technician',
	'Vocational Education Teacher',
	'Waiter',
	'Waitress',
	'Watch Repairer',
	'Weigher',
	'Welder',
	'Welding',
	'Wellhead Pumper',
	'Wholesale and Retail Buyer',
	'Woodworker',
	'Woodworking Machine Setter',
	'Word Processor',
	'Typist',
	'Writer',
	'Authors ',
	'Zoologist',
	'Wildlife Biologist'
];

let sel = document.getElementById("jobs");
for (job of JOBS) {
	let o = document.createElement("option");
	o.setAttribute("value", job);
	o.innerText = job;
	sel.appendChild(o);
}

function checkValues () {
	date = document.getElementById("date");
	firstname = document.getElementById("firstname");
	name = document.getElementById("name");
	mail = document.getElementById("mail");
	male = document.getElementById("male");
	female = document.getElementById("female");
	other = document.getElementById("other");
	jobs = document.getElementById("jobs");
	subject = document.getElementById("subject");
	content = document.getElementById("content");

	checks = checkDate(date) + checkFirstName(firstname) + checkName(name) + checkMail(mail) + checkJobs(jobs) + checkSubject(subject) + checkContent(content);

	if (checks == 0) {
		console.log("all good to go");
	}else{
		console.log("nope something required");
	}
}

// stackoverflow
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function checkDate (ele) {
	let currentDate = new Date();
	let date = new Date(ele.value);
	// at least 18
	if (currentDate.getTime() - 1000*60*60*24*365*18 > date.getTime()) {
		return 0;
	}else{
		return 1;
	}
}

function checkFirstName (ele) {
	if (ele.value == "") {
		// not good
		return 1;
	} else {
		return 0;
	}
}

function checkName (ele) {
	if (ele.value == "") {
		// not good
		return 1;
	} else {
		return 0;
	}
}

function checkMail (ele) {
	if (ele.value == "" || !validateEmail(ele.value)) {
		// not good
		return 1;
	} else {
		return 0;
	}
}

function checkJobs (ele) {
	if (ele.value == "") {
		// not good
		return 1;
	} else {
		return 0;
	}
}

function checkSubject (ele) {
	if (ele.value == "") {
		// not good
		return 1;
	} else {
		return 0;
	}
}

function checkContent (ele) {
	if (ele.value == "") {
		// not good
		return 1;
	} else {
		return 0;
	}
}
