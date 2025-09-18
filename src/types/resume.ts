export interface ContactInfo {
	phone: string;
	email: string;
	linkedin: string;
	website: string;
}

export interface Education {
	degree: string;
	emphasis: string;
	minor?: string;
	school: string;
	location: string;
	graduationDate: string;
	gpa: string;
	scholarship?: string;
	relevantCoursework: string[];
}

export interface ExperienceItem {
	company: string;
	position: string;
	location: string;
	startDate: string;
	endDate: string;
	responsibilities: string[];
}

export interface VolunteerExperience {
	organization: string;
	position: string;
	location: string;
	startDate: string;
	endDate: string;
	responsibilities: string[];
}

export interface Skills {
	programmingLanguages: string[];
	softwareDevelopment: string[];
	databases: string[];
	webDevelopment: string[];
	operatingSystems: string[];
	networking: string[];
	cloud: string[];
}

export type Hobbies = string[];

export interface CoverLetterData {
	company: string;
	positionTitle: string;
	recipient: string;
	paragraphs: string[];
}

export interface ResumeProps {
	name: string;
	contact: ContactInfo;
	education: Education;
	experience: ExperienceItem[];
	volunteerExperience: VolunteerExperience;
	skills: Skills;
	hobbies: Hobbies;
}

export interface ResumeData extends ResumeProps {
	coverLetter: CoverLetterData;
}
