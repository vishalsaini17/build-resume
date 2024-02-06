export type UserBio = {
  title: string;
  description: string;
};

export type Skill = {
  name: string;
  ratingOutOf10: number;
};

export type Achievement = {
  title: string;
  description: string;
};

export type experienceCompany = {
  name: string;
  jobTitle: string;
  startAt: string;
  endAt: string;
  location: string;
  summary: string;
  workInfo?: {
    title: string;
    description: string
  };
  achievements?: {
    achievementsTitle: string;
    list: Achievement[];
  };
};

export type Education = {
  instituteName: string;
  courseName: string;
  fieldOfStudy: string;
  startAt: string;
  endAt?: string;
  grade: string;
  university?:string;
};

export type resumeData = {
  name: string;
  designation: string;
  mobileNo: string;
  email: string;
  address: string;
  userBio: UserBio;
  skilSet: Skill[];
  experience: experienceCompany[];
  educations: Education[];
  awards: string[]; // You can update this type based on the actual structure of awards if needed
};
